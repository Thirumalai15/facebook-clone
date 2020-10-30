import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "../../../../styles/messagesender.css";
import VideocamRoundedIcon from "@material-ui/icons/VideocamRounded";
import CollectionsRoundedIcon from "@material-ui/icons/CollectionsRounded";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import { useStateValue } from "../../../../api/StateProvider";
import db from "../../../../auth/firebase";
import firebase from "firebase";
function MessageSender() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection('posts').add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      useranme: user.displayName,
      image: imageUrl
    })
      setInput("");
      setImageUrl("");
  };
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <form>
          <Avatar src={user.photoURL} />
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender__input"
            type="text"
            placeholder={`What's on your mind , ${user.displayName}`}
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Image url (optional)"
          />
          <button onClick={handleSubmit} type="submit">
            submit
          </button>
        </form>
      </div>

      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamRoundedIcon style={{ color: "#f02849" }} />
          <h4>Live video</h4>
        </div>
        <div className="messageSender__option">
          <CollectionsRoundedIcon style={{ color: "#3e9e56" }} />
          <h4>Photo/Video</h4>
        </div>
        <div className="messageSender__option">
          <EmojiEmotionsIcon style={{ color: "#f7b928" }} />
          <h4>Feeling/Activity</h4>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
