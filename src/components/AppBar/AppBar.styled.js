import styled from 'styled-components';

export const AppBarStyled = styled.header`
  width: 100%;

  border: 1px solid black;

  @media screen and (min-width: 480px) {
    width: 480px;
  }
  @media screen and (min-width: 768px) {
    width: 200px;
    height: 550px;
  }
  @media screen and (min-width: 1200px) {
    width: 400px;
    height: 1000px;
  }
`;
