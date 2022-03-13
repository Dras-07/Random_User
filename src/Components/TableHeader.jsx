import React from 'react';
import "./tableheader.css";
function TableHeader()
{
    return(
        <div className="person-container">
        <div className="person-row">
        <div className="name">
        <h1>Name</h1>
   </div>
        <div className="person-data">
    <p className="person-gender">Gender</p>
    <p className="person-dob">Date Of Birth</p>
    <p className="person-email">Email</p>
    <p className="person-phone">Phone</p>   
   </div>
        </div>
        </div>
    )
}
export default TableHeader;