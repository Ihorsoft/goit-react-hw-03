import { useEffect, useState, useId } from "react";

import css from "./App.module.css";
import Description from "../description/Description";
import Feedback from "../feedback/Feedback.jsx";
import Options from "../options/Options";
import Notification from "../notification/Notification.jsx";
import SwitchDay from "../switchday/SwitchDay.jsx";

import LoginForm from "../loginform/LoginForm.jsx";
import InputEffect from "../inputeffect/InputEffect.jsx";
import SuperButton from "../superbutton/SuperButton.jsx";
import FeedbackForm from "../FeedbackForm/FeedbackForm.jsx";
import ContactForm from "../contactform/ContactForm.jsx";
import Contact from "../contact/Contact.jsx";
import SearchBox from "../searchbox/SeachBox.jsx";
import ContactList from "../contactlist/ContactList.jsx";

function App() {
  const firstContacts = [
    { username: "John", telnumber: 8888888, id: 1 },
    { username: "Bill", telnumber: 1111111, id: 2 },
  ];

  const [contacts, setContacts] = useState(() => {
    const saveContacts = JSON.parse(localStorage.getItem("contacts"));
    if (saveContacts) {
      return saveContacts;
    } else {
      return firstContacts;
    }
  });

  const [filter, setFilter] = useState("");

  const visibleContacts = contacts.filter((cont) =>
    cont.username.toLowerCase().includes(filter.toLowerCase())
  );

  //додавання контакт
  const AddContact = (newValues) => {
    // const idnewadd = useId();
    console.log("in App new add contact:", newValues);

    return setContacts((prevContacts) => [...prevContacts, newValues]);
  };

  const DeleteContact = (contactId) => {
    console.log(contactId);
    return setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  // збереження даних в сховищі
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  //localStorage.clear();

  // рендеринг Арр

  return (
    <>
      <h1 className={css.titleapp}>Phonebook</h1>
      <ContactForm onAdd={AddContact} />
      <SearchBox value={filter} onFilter={setFilter} onDel={DeleteContact} />
      <ContactList contacts={visibleContacts} onDel={DeleteContact} />
    </>
  );
}

export default App;
