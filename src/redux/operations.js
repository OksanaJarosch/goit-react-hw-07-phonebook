import { createAsyncThunk } from "@reduxjs/toolkit";
import { addContact, delContact, getContacts } from "services/contactsAPI";


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

export const addNewContact = createAsyncThunk(
    "contacts/addContact",
    async (newContact, {rejectWithValue}) => {

        try {
            const response = await addContact(newContact);
            return response;

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (id, {rejectWithValue}) => {

        try {
            const deleted = await delContact(id);
            return deleted;

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)