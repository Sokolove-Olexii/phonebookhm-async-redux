import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../redux/operations";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const Item = styled.li`
  background: #f9f9f9;
  border-radius: 10px;
  padding: 10px 15px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.45s;

  &:hover {
    background: #eef4ff;
  }
`;

const DeleteBtn = styled.button`
  background: #ff4d4d;
  border: none;
  color: white;
  padding: 5px 10px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.45s ease;

  &:hover {
    background: #d93636;
  }
`;

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <Item key={id}>
          {name}: {number}
          <DeleteBtn onClick={() => dispatch(deleteContact(id))}>
            Delete
          </DeleteBtn>
        </Item>
      ))}
    </List>
  );
};

export default ContactList;
