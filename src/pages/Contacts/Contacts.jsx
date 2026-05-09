import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/operations";
import { logout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import {
  selectContactsLoading,
  selectContactsError,
} from "../../redux/contactsSlice";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import Filter from "../../components/Filter/Filter";
import "./Contacts.css";

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectContactsLoading);
  const error = useSelector(selectContactsError);
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <section className="contacts-section">
      <div className="contacts-header">
        <span className="greeting-text">Welcome, {user.name}!</span>
        <button className="logout-btn" onClick={handleLogout}>
          LogOut
        </button>
      </div>

      <div className="contacts-card">
        <h1 className="contacts-title">Phonebook</h1>
        <ContactForm />
      </div>

      <div className="contacts-card">
        <h2 className="contacts-subtitle">Contacts</h2>
        <Filter />
        {isLoading && !error && <p>Loading contacts...</p>}
        {error && <p className="error-text">Error: {error}</p>}
        <ContactList />
      </div>
    </section>
  );
};

export default Contacts;
