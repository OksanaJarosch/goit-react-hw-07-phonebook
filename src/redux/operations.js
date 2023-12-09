import { createAsyncThunk } from "@reduxjs/toolkit";
import { delContact, getContacts } from "services/contactsAPI";


export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, {rejectWithValue}) => {

        try {
            const contacts = await getContacts();
            return contacts;

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (id, {rejectWithValue}) => {

        try {
            const contacts = await delContact(id);
            return contacts;

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)