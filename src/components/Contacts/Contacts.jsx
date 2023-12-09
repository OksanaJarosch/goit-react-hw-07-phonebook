import { useDispatch, useSelector } from "react-redux";
import { Contact, Span, Btn } from "./Contacts.styled";
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useEffect } from "react";
import { deleteContact, fetchContacts } from "redux/operations";
import { selectContacts, selectFilter, selectVisibleContacts } from "redux/selectors";
import toast from 'react-hot-toast';

export const Contacts = () => {
    
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const visible = useSelector(selectVisibleContacts);
    const filter = useSelector(selectFilter);


    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);


    const getVisibleContacts = () => {

    if (filter === "") {
        return contacts;
    }
    return visible;
    };

    const visibleContacts = getVisibleContacts();


    const onDelete = async (id) => {
        try {
        await dispatch(deleteContact(id));
        toast.success('Contact deleted successfully!');
        } catch (error) {
        toast.error('Error deleting contact.');
        }
    }

    return (
            <ul>
            {visibleContacts.map(contact => {
                const { id, name, number } = contact;

                    return (
                        <Contact key={id}>
                            <Span>{name}:
                            </Span>
                            <Span>{number}</Span>
                            <Btn type="button" onClick={() => onDelete(id)}><RiDeleteBin6Line /></Btn>
                        </Contact>
                    )
                })}
        </ul>
    )
};