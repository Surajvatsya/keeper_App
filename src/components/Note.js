import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content} content</p>
    </div>
  );
}

export default Note;
