import React, { useState } from "react";
import Contact from "./Contact";
import "./app.css";
import ContactAdder from "./componenets/ContactAdder";
const App = () => {
  const [contacts, setContacts] = useState([]);

  const addContactData = (contactData) => {
    setContacts([...contacts, contactData]);
    console.log(contacts);
  };
  const saveData = () => {
    localStorage.setItem("name", "xyz");
    localStorage.setItem("name", "xysadz");
    localStorage.setItem("name", "usan");
  };
  const getData = () => {
    const getData = localStorage.getItem("name");
    alert(getData);
  };
  const clearData = () => {
    localStorage.removeItem("name");
  };
  return (
    <>
      <div className="contact_adder">
        <ContactAdder onContactAdded={addContactData} />
      </div>
      <div className="contact_list">
        <h3> contact list</h3>
        {contacts.map((data) => (
          <Contact data={data}></Contact>
        ))}
        <button onClick={saveData}> Save data</button>
        <button onClick={getData}>Get data</button>
        <button onClick={clearData}>Clear data</button>
      </div>
    </>
  );
};
export default App;
