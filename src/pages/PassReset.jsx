import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
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

const BackLink = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  color: #0077ff;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.3s ease;

  &:hover {
    color: #005fcc;
    text-decoration: underline;
  }
`;

const PassReset = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      email.trim() === "" ||
      newPassword.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      toastr.error("Fields can't be empty");
      return;
    }

    if (newPassword !== confirmPassword) {
      toastr.error("Passwords do not match");
      return;
    }

    if (newPassword.length < 7) {
      toastr.error("Password must be at least 7 characters long");
      return;
    }

    toastr.success("Success! But API don't have changePass options");
  };

  return (
    <PageSection>
      <Card>
        <Title>Reset Password</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Email or Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button type="submit">Reset Password</Button>
        </Form>
        <BackLink to="/login">Back to Login</BackLink>
      </Card>
    </PageSection>
  );
};

export default PassReset;
