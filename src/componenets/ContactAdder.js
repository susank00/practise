import { useState } from "react";

const Contact_adder = (props) => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [location, setLocation] = useState("");
  const onClickHandler = () => {
    const contactData = { name, number: mobile, location };
    props.onContactAdded(contactData);
  };

  return (
    <>
      <div className="simpleAdder">
        Contact_adder:
        <br />
        <input
          type="text"
          value={name}
          placeholder="Contact name"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="mobile number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        ></input>
        <button onClick={onClickHandler}> click me</button>
      </div>
    </>
  );
};
export default Contact_adder;
