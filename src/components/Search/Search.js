import React, { useState,useEffect } from "react";
import "./search.css";

function Search() {
    const [searchInput, setSearchInput] = useState(false);
    const [valueSearch, setValueSearch] = useState("");
    const [notes, setNotes] = useState([]);
  
    useEffect(() => {
      setNotes(JSON.parse(localStorage.getItem("notes")) || []);
    }, []);
  
    const findNote = () => {
      const filteredNotes = notes.filter((item) =>
        item.titleNote.toLowerCase().includes(valueSearch.toLowerCase())
      );
  
      console.log(filteredNotes);
      // Do something with the filteredNotes, such as updating state or displaying the results
    };
  
    useEffect(() => {
      findNote();
    }, [valueSearch]);
  
    const inputHandler = () => {
      setSearchInput(!searchInput);
    };
  
    const searchHandler = (e) => {
      setValueSearch(e.target.value);
    };
  
    return (
      <div className="container">
        <p className="icon-box" onClick={inputHandler}>
          <ion-icon
            style={{ border: "1px solid white", borderRadius: "50%" }}
            name="search-outline"
          ></ion-icon>
        </p>
        {searchInput && (
          <input
            type="text"
            placeholder="Search title"
            value={valueSearch}
            onChange={searchHandler}
            className="search-input"
          />
        )}
      </div>
    );
  }
  
  export default Search;

