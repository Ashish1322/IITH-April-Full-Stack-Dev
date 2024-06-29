import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  addContact,
  deleteContact,
  moveContactToEmergency,
  moveContactToNormal,
  deleteContactFromEmerygency,
} from "./redux/slices/contactslice";

function App() {
  const { contacts, emergencyContacts } = useSelector((state) => state);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Contact Book</h1>

      <h3>Add Contact</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addContact({
              name: name,
              phone: phone,
            })
          );
        }}
      >
        <input
          onChange={(e) => setName(e.currentTarget.value)}
          type="text"
          placeholder="Enter Name"
          required
        />
        <br />
        <input
          onChange={(e) => setPhone(e.currentTarget.value)}
          type="number"
          placeholder="Enter Phone Number"
          required
        />
        <br />
        <input type="submit" value="Add Contact" />
      </form>

      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>
          <h3>Your Contacts</h3>
          {contacts.map((item, index) => (
            <div>
              <p>Name: {item.name}</p>
              <p>Phone: {item.phone}</p>
              <button onClick={() => dispatch(deleteContact({ index: index }))}>
                Delete Contact
              </button>
              <button
                onClick={() =>
                  dispatch(moveContactToEmergency({ index: index }))
                }
              >
                Move to Emergency
              </button>
              <hr />
            </div>
          ))}
        </div>
        <div>
          <h3>Your Emergency Contacts</h3>
          {emergencyContacts.map((item, index) => (
            <div>
              <p>Name: {item.name}</p>
              <p>Phone: {item.phone}</p>
              <button
                onClick={() =>
                  dispatch(deleteContactFromEmerygency({ index: index }))
                }
              >
                Delete Contact
              </button>
              <button
                onClick={() => dispatch(moveContactToNormal({ index: index }))}
              >
                Move to Normal
              </button>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
