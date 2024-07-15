import Contact from "../contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, onDel }) => {
  return (
    <ul className={css.list}>
      {contacts.map((item) => (
        <li key={item.id}>
          <Contact data={item} onDel={onDel} />
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
