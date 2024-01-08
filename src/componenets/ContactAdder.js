import { useState } from "react";

const Contact_adder = (props) => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [location, setLocation] = useState("");
  const onClickHandler = (e) => {
    e.preventDefault();
    const contactData = { id: Math.random(), name, number: mobile, location };
    if (name.length < 1 || mobile.length < 1 || location.length < 1) {
      alert("please fill all the fields");
    } else {
      props.onContactAdded(contactData);
      setName("");
      setMobile("");
      setLocation("");
    }
  };

  return (
    <>
      <div className="simpleAdder">
        <h2>Contact_adder:</h2>
        <br />
        <form onSubmit={onClickHandler}>
          <input
            type="text"
            value={name}
            placeholder="Contact name"
            onChange={(e) => setName(e.target.value)}
          ></input>{" "}
          <br />
          <input
            type="text"
            placeholder="mobile number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          ></input>{" "}
          <br />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          ></input>
          <br />
          <button> ADD contact</button>
        </form>
      </div>
    </>
  );
};
export default Contact_adder;
