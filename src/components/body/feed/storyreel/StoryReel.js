import React from "react";
import Story from "./Story";
import "../../../../styles/storyreel.css";
import { useStateValue } from "../../../../api/StateProvider";
function StoryReel() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="storyreel">
      <Story
        image="https://composeclick.com/wp-content/uploads/2018/05/nature-1.jpg"
        profileSrc="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        title="Rahul"
      />
      <Story
        image="https://composeclick.com/wp-content/uploads/2018/05/nature-1.jpg"
        profileSrc="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        title="Rahul"
      />
      <Story
        image="https://composeclick.com/wp-content/uploads/2018/05/nature-1.jpg"
        profileSrc="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        title="Rahul"
      />
      <Story
        image="https://composeclick.com/wp-content/uploads/2018/05/nature-1.jpg"
        profileSrc="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        title="Rahul"
      />
      <Story
        image="https://composeclick.com/wp-content/uploads/2018/05/nature-1.jpg"
        profileSrc={user.photoURL}
        title={user.displayName}
      />
    </div>
  );
}

export default StoryReel;
