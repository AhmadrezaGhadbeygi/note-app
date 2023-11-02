import React, { useState,useEffect } from "react";
import "./Information.css";

function Information() {
    const [modal,setModal]=useState(false)
 function openModal(){
setModal(status=> !status )


 }

  return (
    <div className="container">
    <p className="icon-box" onClick={openModal} > <ion-icon style={{border:"1px solid white", borderRadius:"50%" }}  name="information-outline"></ion-icon></p>
{
modal ? 
<div className="box-modal">
     <div className="close-icon" onClick={openModal} ><ion-icon name="close-outline"></ion-icon></div>
     <p>Design by- ahmadreza</p>
     <p>app version- 1.0.0</p>
    <p>Made by</p>
     </div> 
     
     :
     
     
     ''


}

    </div>
  );
}

export default Information;
