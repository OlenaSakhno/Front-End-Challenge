import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeader = styled.header`
  background-color: #000;
  color: #fff;
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  max-height: 50px;
`;

export const NavLinks = styled.div`
  display: flex;
  margin-left: 10px;
`;

export const NavLink = styled(Link)`
  margin-right: 10px;
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
