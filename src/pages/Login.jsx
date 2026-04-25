import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/auth/operations";
import toastr from "toastr";

const PageSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
  min-height: 100vh;
  padding: 40px 0;
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

const Title = styled.h2`
  font-size: 30px;
  color: #333;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const Input = styled.input`
  width: 90%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 18px;
  transition: all 0.45s ease;

  &:focus {
    border-color: #0077ff;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 119, 255, 0.3);
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background: #0077ff;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  cursor: pointer;
  width: 90%;
  transition: all 0.3s ease;

  &:hover {
    background: #005fcc;
  }
`;

const HelpText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  font-size: 14px;
`;

const BackLink = styled(Link)`
  display: inline-block;
  color: #0077ff;
  text-decoration: none;
  font-size: 15px;
  transition: all 0.3s ease;

  &:hover {
    color: #005fcc;
    text-decoration: underline;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-top: 20px;
`;

const StyledLink = styled(Link)`
  color: #0077ff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      toastr.error("Fields can't be empty");
      return;
    }

    dispatch(login({ email, password }))
      .unwrap()
      .then(() => toastr.success("Login success"))
      .catch((err) => toastr.error("Login failed: " + err));
  };

  return (
    <PageSection>
      <Card>
        <Title>Login</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <HelpText>
            <label style={{ cursor: "pointer" }}>
              <input type="checkbox" style={{ marginRight: "5px" }} /> Remember
              me
            </label>
            <StyledLink to="/reset-password">Forgot password?</StyledLink>
          </HelpText>
          <Button type="submit">Log In</Button>
        </Form>
        <LinksContainer>
          <BackLink to="/register">Create an account</BackLink>
          <BackLink to="/phonebookhm-async-redux">Back to Contacts</BackLink>
        </LinksContainer>
      </Card>
    </PageSection>
  );
};

export default Login;
