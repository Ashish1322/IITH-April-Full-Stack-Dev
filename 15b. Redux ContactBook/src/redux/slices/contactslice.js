import { createSlice } from "@reduxjs/toolkit";

const contactslice = createSlice({
  name: "contact slice",
  initialState: {
    contacts: [],
    emergencyContacts: [],
  },
  reducers: {
    addContact: (state, action) => {
      const newContact = {
        name: action.payload.name,
        phone: action.payload.phone,
      };
      state.contacts.push(newContact);
    },
    deleteContact: (state, action) => {
      state.contacts.splice(action.payload.index, 1);
    },
    moveContactToEmergency: (state, action) => {
      const index = action.payload.index;
      state.emergencyContacts.push(state.contacts[index]);
      state.contacts.splice(index, 1);
    },
    moveContactToNormal: (state, action) => {
      const index = action.payload.index;
      state.contacts.push(state.emergencyContacts[index]);
      state.emergencyContacts.splice(index, 1);
    },
    deleteContactFromEmerygency: (state, action) => {
      state.emergencyContacts.splice(action.payload.index, 1);
    },
  },
});

export default contactslice.reducer;
export const {
  addContact,
  deleteContact,
  moveContactToEmergency,
  moveContactToNormal,
  deleteContactFromEmerygency,
} = contactslice.actions;
