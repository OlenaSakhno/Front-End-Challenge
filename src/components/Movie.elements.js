import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  display: inline-table;
  width: 250px;
  height: 375px;
  border-radius: 8px;
  background-color: #141414;
  /* overflow: hidden; */
  box-shadow: 0px 2px 10px #000;
  :hover {
    cursor: pointer;
  }
  margin: 5px;
`;

export const StyledTile = styled.img`
  width: 100%;
  height: 70%;
  object-fit: cover;
  object-position: center;
`;

export const StyledTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  margin: 10px 0;
`;

export const StyledDescription = styled.p`
  font-size: 14px;
  color: #ffffff;
`;
