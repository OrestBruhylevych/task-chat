import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ChatsListStyled = styled.div`
  width: 100%;

  @media screen and (min-width: 480px) {
    height: 700px;
  }
  @media screen and (min-width: 768px) {
    height: 344px;
  }
  @media screen and (min-width: 1200px) {
    height: 794px;
  }
`;

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
