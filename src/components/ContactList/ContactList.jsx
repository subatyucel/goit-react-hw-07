import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";
import { selectFilteredContacts } from "../../redux/contactSlice";
import ContactItem from "../ContactItem/ContactItem";
import styles from "./ContactList.module.css";

export default function ContactList() {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  useEffect(
    function () {
      dispatch(fetchContacts());
    },
    [dispatch]
  );

  return (
    <ul className={styles.ContactList}>
      {filteredContacts.map((contact) => (
        <ContactItem contact={contact} key={contact.id} />
      ))}
    </ul>
  );
}
