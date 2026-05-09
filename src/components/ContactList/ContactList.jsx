import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/operations";
import { selectVisibleTasks } from "../../redux/selectors";
import "./ContactList.css";

const ContactList = () => {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectVisibleTasks);

  return (
    <ul className="contact-list">
      {filteredContacts.map(({ id, name, number }) => (
        <li className="contact-item" key={id}>
          {name}: {number}
          <button className="contact-delete-btn" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
