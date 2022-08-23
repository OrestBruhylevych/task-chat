import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ChatsListStyled = styled.div`
  /* @media screen and (min-width: 480px) {
    height: 500px;
  } */
  @media screen and (min-width: 768px) {
    height: 244px;
  }
  @media screen and (min-width: 1200px) {
    height: 494px;
  }
`;

export const ItemLinkStyled = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 10px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }

  &.active {
    background-color: grey;
  }
  &:hover,
  &:focus {
    color: blue;
  }
`;
