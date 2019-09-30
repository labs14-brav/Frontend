import React, { useState } from "react";
import { connect } from "react-redux";
import firebase from "firebase";
import "./styles/Messaging.scss";

function MessageForm({ user }) {
  const [messageText, setMessageText] = useState("");

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
  );
}

const mapStateToProps = state => ({
  user: state.authReducer.user
});

export default connect(
  mapStateToProps,
  {}
)(MessageForm);
