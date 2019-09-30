import React, { useState, useEffect } from "react";
import MessageList from "./MessageList";
import MessageForm from "./MessageForm";
import firebase from "firebase";
import "./styles/Messaging.scss";

function MessagingContainer() {
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
            <MessageForm />
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

export default MessagingContainer;
