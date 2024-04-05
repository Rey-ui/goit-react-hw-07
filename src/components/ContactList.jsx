import Contact from "./Contact.jsx";
import { useSelector } from "react-redux";
import css from "./ContactList.module.css";
import { getContacts } from "../redux/selectors.js";
import { getFilter } from "../redux/selectors";
const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter) || "";
  const filteredContacts = filter
    ? contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts;

  return (
    <ul className={css.contactList}>
      {filteredContacts.map((contact) => (
        <li className={css.contactItem} key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
