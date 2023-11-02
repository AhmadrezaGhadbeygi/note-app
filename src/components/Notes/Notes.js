import React, { useEffect, useState } from "react";
import Information from "../Information/Information";
import AddNotes from "../AddNotes/AddNotes";
import "./Notes.css";
import Search from "../Search/Search";
function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(
    () => setNotes(JSON.parse(localStorage.getItem("notes")) || []),

    []
  );

  return (
    <div className="container-notes">
      <div className="box-header">
        <h2>Notes </h2>
        <div className="info-search">
          <Search></Search>
          <Information></Information>
        </div>
      </div>
      {notes.length == 0 ? (
        <main className="notes">
          <img src="image/zeroNotes.png" alt="" />
          <p>Create your first note!</p>
        </main>
      ) : (
        notes.map((item) => (
          <div
            className="each-note"
            key={item.id}
            style={{
              backgroundColor: `rgb(${Math.floor(
                Math.random() * 255
              )},${Math.floor(Math.random() * 255)},${Math.floor(
                Math.random() * 255
              )})`,
            }}
          >
            <p>{item.titleNote}</p>
            <p>{item.descriptionNote}</p>
          </div>
        ))
      )}

      <div className="componen-add_note">
        <AddNotes></AddNotes>
      </div>
    </div>
  );
}

export default Notes;
