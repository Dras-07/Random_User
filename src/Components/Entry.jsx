import React from "react";
import "./Table.css";
function Entry(props) {
  return (
   <div  className="person-container">
   <div className="person-row">
   <div className="name">
    <img src={props.image} alt="imgname" />
    <h1>{props.title+" "+props.fname+" "+props.sname}</h1>
   </div>
   <div className="person-data">
   <p className="person-gender">{props.gender.toUpperCase()}</p>
    <p className="person-dob">{props.dob.substring(0,10)}</p>
    <p className="person-email">{props.email}</p>
    <p className="person-phone">{props.phone}</p>
   </div>
   </div>
   </div>
  );
}



export default Entry;