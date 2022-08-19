import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ItemLinkStyled = styled(NavLink)`
  text-decoration: none;
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 10px;

  img {
    border-radius: 50%;
  }

 
&.active {
   
background-color: grey;
  }
  &:hover,
  &:focus {
    color: blue;
  }
`;