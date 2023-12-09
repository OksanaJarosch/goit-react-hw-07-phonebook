import { createSlice } from "@reduxjs/toolkit";
// import { nanoid } from 'nanoid';
import { fetchContacts } from "./operations";


export const contactsSlice = createSlice({
    name: "contacts",
    initialState: {items: [],
                isLoading: false,
                error: null},
    // reducers: {

    //     addContact: {
    //         prepare(values) {
    //             return {
    //                 payload: {
    //                     id: nanoid(),
    //                     name: values.name,
    //                     number: values.number,
    //         }
    //     }
    // },
    //         reducer(state, action) {
    //             state.push(action.payload);
    //         }
    //     },

    //     deleteContact: (state, action) => {
    //         return state = state.filter(contact =>  contact.id !== action.payload)
    //     }
    // },
    extraReducers: (builder) => {
        builder
        .addCase(fetchContacts.fulfilled, (state, action) => {
            state.items = action.payload;
        });
    },
});

// export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;