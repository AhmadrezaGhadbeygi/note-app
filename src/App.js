import "./App.css";

import React, { useState, useEffect } from "react";
import Information from "./components/Information/Information";
import AddNotes from "./components/AddNotes/AddNotes";
import Notes from "./components/Notes/Notes";
import Search from "./components/Search/Search";
function App() {
  return (
    <div className="App">
      {/* <Information></Information> */}
      {/* <AddNotes></AddNotes> */}
      <Notes></Notes>
      {/* <Search></Search> */}
    </div>
  );
}

export default App;
