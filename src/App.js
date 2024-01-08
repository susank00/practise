import React, { useState } from "react";
import Contact from "./Contact";
import "./app.css";
import ContactAdder from "./componenets/ContactAdder";
const App = () => {
  const getContacts = JSON.parse(localStorage.getItem("contacts"));
  const [contacts, setContacts] = useState(getContacts ? getContacts : []);

  const addContactData = (contactData) => {
    const allContacts = [contactData, ...contacts];
    setContacts(allContacts);
    localStorage.setItem("contacts", JSON.stringify(allContacts));
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
      </div>
    </>
  );
};
export default App;
