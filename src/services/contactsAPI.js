import axios from 'axios';

axios.defaults.baseURL = 'https://656fb2c96529ec1c62382546.mockapi.io/contacts';

export async function getContacts() {
    const response = await axios("/contacts");
    return response.data;
};

export async function addContact(newContact) {
    const response = await axios.post("/contacts", newContact);
    return response.data;
};

export async function delContact(id) {
    const response = await axios.delete(`/contacts/${id}`);
    return response.data;
};