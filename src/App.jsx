import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./redux/operations";
import styled from "styled-components";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";

const MainAppSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
  min-height: 100vh;
  padding: 40px 0;
`;

const Title = styled.h1`
  font-size: 35px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #333;
`;

const SubTitle = styled.h2`
  margin-top: 40px;
  font-size: 30px;
  color: #444;
  border-bottom: 2px solid #444;
  padding-bottom: 5px;
`;

const Card = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  width: 320px;
  text-align: center;
  margin: 20px;
`;

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.contacts.isLoading);
  const error = useSelector((state) => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <MainAppSection>
      <Card>
        <Title>Phonebook</Title>
        <ContactForm />
      </Card>

      <Card>
        <SubTitle>Contacts</SubTitle>
        <Filter />
        {isLoading && !error && <p>Loading contacts...</p>}
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
        <ContactList />
      </Card>
    </MainAppSection>
  );
};

export default App;
