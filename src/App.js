import React, { useState } from "react";
import Contact from "./Contact";
import "./app.css";
import ContactAdder from "./componenets/ContactAdder";
const App = () => {
  const initialContacts = [
    {
      name: "john",
      number: "45454",
      location: "ktm",
    },
    {
      name: "hari",
      number: "545847",
      location: "pkr",
    },
    {
      name: "hari",
      number: "545847",
      location: "pkr",
    },
  ];

  const [contacts, setContacts] = useState(initialContacts);

  const addContactData = (contactData) => {
    setContacts([...contacts, contactData]);
    console.log(contacts);
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
