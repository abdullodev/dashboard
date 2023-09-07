import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Styled404Page = styled.div`
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 100px;
`;

export const StyledHeading = styled.h1`
  font-size: 100px;
  color: #101828;
`;

export const StyledText = styled.p`
  font-size: 24px;
  color: #101828;
`;

export const StyledLink = styled("button")`
  text-decoration: none;
  color: #007bff;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 25px;
  margin-left: 20px;
  background-color: #ffffff;
  padding: 10px 20px;
  border-radius: 16px;
  -webkit-box-shadow: 0px 0px 29px -5px rgba(68, 174, 255, 0.6);
  -moz-box-shadow: 0px 0px 29px -5px rgba(68, 174, 255, 0.6);
  box-shadow: 0px 0px 29px -5px rgba(68, 174, 255, 0.6);
  transition: all 0.3s ease;

  &:hover {
    background-color: #725cff;
    color: #ffffff;
  }
`;
