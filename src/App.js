import React, { useState } from "react";
import Contact from "./Contact";

import ContactAdder from "./componenets/ContactAdder";
import Navbar from "./componenets/Navbar";
import "./app.css";
const App = () => {
  const getContacts = JSON.parse(localStorage.getItem("contacts"));
  const [contacts, setContacts] = useState(getContacts ? getContacts : []);

  const addContactData = (contactData) => {
    const allContacts = [contactData, ...contacts];
    setContacts(allContacts);
    localStorage.setItem("contacts", JSON.stringify(allContacts));
  };
  const clearData = () => {
    localStorage.clear();
    setContacts([]);
  };
  return (
    <>
      <Navbar />
      <div className="contact_adder">
        <ContactAdder onContactAdded={addContactData} />
        <button onClick={clearData}>Clear</button>{" "}
      </div>
      <div className="contact_list">
        <h3> contact list</h3>
        {contacts.map((data) => (
          <Contact key={data.id} data={data}></Contact>
        ))}
      </div>
    </>
  );
};
export default App;
