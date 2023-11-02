import "./AddNotes.css";

import React, { useState, useEffect } from "react";
function AddNotes() {
  const [addNotes, setAddNotes] = useState(false);
  const [title, setTitle] = useState("");
  const [descriptions, setDescriptions] = useState("");


function saveData() {
  const note = {
    titleNote: title,
    descriptionNote: descriptions,
    id: new Date().getTime()
  };

  // Retrieve existing notes from localStorage
  const existingNotes = JSON.parse(localStorage.getItem("notes")) || [];

  // Add the new note to the existing notes array
  const updatedNotes = [...existingNotes, note];

  // Store the updated notes array in localStorage
  localStorage.setItem("notes", JSON.stringify(updatedNotes));

  setTitle("");
  setDescriptions("");
}

  function addNotesHandler() {
    setAddNotes((status) => !status);
  }

  function titleHandler(e) {
    setTitle(e.target.value);
  }
  function descriptionsHandler(e) {
    setDescriptions(e.target.value);
  }

  return (
    <div className="box-add_notes">
      <div className="icon-box" onClick={addNotesHandler}>
        <ion-icon
          style={{ border: "1px solid white", borderRadius: "50%" }}
          name="add-outline"
        ></ion-icon>
      </div>

      {addNotes ? (
        <div className="container--add__note">
          <div className="container-icon">
            <div className="icon-box">
              <ion-icon name="chevron-back-outline"></ion-icon>
            </div>
            <div onClick={saveData} className="icon-box">
              <ion-icon name="save-outline"></ion-icon>
            </div>
          </div>

          <input
            className="input"
            type="text"
            placeholder="Title"
            value={title}
            name="title"
            onChange={titleHandler}
            required
          />
          <input
            className="input"
            type="text"
            placeholder="Type something..."
            value={descriptions}
            name="descriptions"
            onChange={descriptionsHandler}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
export default AddNotes;

