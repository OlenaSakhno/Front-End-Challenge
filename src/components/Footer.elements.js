import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledFooter = styled.footer`
  background-color: #000;
  color: #fff;
  padding: 20px;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavLinks = styled.div`
  display: flex;
  margin-left: 10px;
  &svg {
    color: #fff;
  }
`;

export const NavLink = styled(Link)`
  margin-right: 10px;
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const FooterIcon = styled.img`
  height: 30px;
  padding: 0 30px;
`;
