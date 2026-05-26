import styled from "styled-components";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const PageSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
  min-height: 100vh;
  padding: 40px 0;
`;

export const Card = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  width: 320px;
  text-align: center;
  margin: 20px;
`;

export const Title = styled.h2`
  font-size: 30px;
  color: #333;
  margin-bottom: 20px;
`;

export const SubTitle = styled.h2`
  margin-top: 40px;
  font-size: 30px;
  color: #444;
  border-bottom: 2px solid #444;
  padding-bottom: 5px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const Input = styled.input`
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

export const Button = styled.button`
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

export const HelpText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  font-size: 14px;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-top: 20px;
`;

export const BackLink = styled(Link)`
  color: #0077ff;
  text-decoration: none;
  font-size: 15px;
  transition: all 0.3s ease;

  &:hover {
    color: #005fcc;
    text-decoration: underline;
  }
`;

export const StyledLink = styled(Link)`
  color: #0077ff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
