import { createSlice } from "@reduxjs/toolkit";
import { addNewContact, deleteContact, fetchContacts } from "./operations";


export const contactsSlice = createSlice({
    name: "contacts",
    initialState: {items: [],
                isLoading: false,
                error: null},

    extraReducers: (builder) => {
        builder
        .addCase(fetchContacts.fulfilled, (state, action) => {
            state.items = action.payload;
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
            const contactId = action.payload.id;
            state.items = state.items.filter(contact => contact.id !== contactId);
        })
        .addCase(addNewContact.fulfilled, (state, action) => {
            state.items.push(action.payload);
        })
    },
});

export const contactsReducer = contactsSlice.reducer;