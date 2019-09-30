import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import MessageList from "./MessageList";
import firebase from "firebase";
import "./styles/Messaging.scss";

function Messaging({ user }) {
  const [messageText, setMessageText] = useState("");
  const [messageCollection, setMessageCollection] = useState([]);
  useEffect(() => {
    console.log("loading messages");
    loadMessages();
  }, []);
  useEffect(() => {
    console.log(messageCollection, "<--- message state");
  }, [messageCollection]);

  const loadMessages = () => {
    // Create the query to load the last 12 messages and listen for new ones.
    const query = firebase
      .firestore()
      .collection("messages")
      .orderBy("timestamp", "asc")
      .limit(12);

    // Start listening to the query.
    query.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type === "removed") {
          //   remove message
          setMessageCollection(prevMessage => {
            return prevMessage.filter(message => message.id !== change.doc.id);
          });
        } else {
          // Add message
          const newMessage = change.doc.data();
          if (newMessage.timestamp) {
            newMessage.id = change.doc.id;
            setMessageCollection(prevMessage => {
              return [...prevMessage, newMessage];
            });
          }
        }
      });
    });
  };

  const submitMessage = e => {
    e.preventDefault();
    const { email, photoUrl } = user;
    // Add a new message entry to the Firebase database.
    return firebase
      .firestore()
      .collection("messages")
      .add({
        email: email,
        text: messageText,
        profileImageUrl: photoUrl,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      .then(() => {
        setMessageText("");
      })
      .catch(err => {
        console.error("Error writing new message to Firebase Database", err);
      });
  };
  return (
    <main className="mdl-layout__content mdl-color--grey-100">
      <div
        id="messages-card-container"
        className="mdl-cell mdl-cell--12-col mdl-grid"
      >
        <div
          id="messages-card"
          className="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-cell--6-col-tablet mdl-cell--6-col-desktop"
        >
          <div className="mdl-card__supporting-text mdl-color-text--grey-600">
            <MessageList messages={messageCollection} />
            <form id="message-form" onSubmit={submitMessage}>
              <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input
                  className="mdl-textfield__input"
                  type="text"
                  id="message"
                  autoComplete="off"
                  value={messageText}
                  onChange={e => setMessageText(e.target.value)}
                />
                <label className="mdl-textfield__label" htmlFor="message">
                  Message...
                </label>
              </div>
              <button
                id="submit"
                disabled={messageText.length === 0}
                type="submit"
                className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
              >
                Send
              </button>
            </form>
            <form id="image-form">
              <input
                id="mediaCapture"
                type="file"
                accept="image/*"
                capture="camera"
              />
              <button
                id="submitImage"
                title="Add an image"
                className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-color--amber-400 mdl-color-text--white"
              >
                <i className="material-icons">image</i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

const mapStateToProps = state => ({
  user: state.authReducer.user
});

export default connect(
  mapStateToProps,
  {}
)(Messaging);
