import React, { useState } from "react";
import "../../MessageSender.css";
import { Avatar } from "@material-ui/core";
import { InsertEmoticon, Videocam } from "@material-ui/icons";
import { PhotoLibrary } from "@material-ui/icons";
import { useStateValue } from "../../context/StateProvider";
import db from "../../config/firebase";
import firebase from "firebase";

const MessageSender = () => {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [{ user }] = useStateValue();

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput("");
    setImageUrl("");

    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageUrl,
    });
  };

  return (
    <div className="message-sender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender__input"
            placeholder={`Feel Free To Type Here,${user.displayName}?`}
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder=" insert image address "
          />
          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <Videocam style={{ color: "brown" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibrary style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticon style={{ color: "yellow" }} />
          <h3> Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
