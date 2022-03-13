/* eslint-disable array-callback-return */
import React,{useState, useEffect} from 'react';
import './App.css';
import Entry from './Components/Entry.jsx';
import TableHeader from './Components/TableHeader.jsx';

function createEntry(person) {
  return (
    <Entry
      key={person.login.uuid}
      image={person.picture.large}
      dob={person.dob.date}
      email={person.email}
      fname={person.name.first}
      sname={person.name.last}
      title={person.name.title}
      phone={person.phone}
      city={person.city}
      gender={person.gender}
    />
  );
}

function App() {


const [users,setUsers]=useState([]);

  useEffect(()=>{
    fetch("https://randomuser.me/api/?results=100")
    .then((resp)=>resp.json())
    .then((userData)=>setUsers(userData.results));
    //.then((userData)=>console.log(userData.results));
  },[]);



const ans=users.map(x=>{
  console.log(x.gender);
  return x.gender;
});
console.log(ans);

return (
 <div className="app">
  <TableHeader />
  {users.map(createEntry)}
 </div>
);

};
export default App;
