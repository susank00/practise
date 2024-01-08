import { useState } from "react";

const Contact_adder = (props) => {
  const [name, setName] = useState("hari");
  const [mobile, setMobile] = useState("9841419035");
  const [Location, setLocation] = useState("tokha");
  const onClickHandler = () => {
    const contactData = { name: name, number: mobile, Location: Location };
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
          placeholder="location"
          value={Location}
          onChange={(e) => setLocation(e.target.value)}
        ></input>
        <button onClick={onClickHandler}> click me</button>
      </div>
    </>
  );
};
export default Contact_adder;
