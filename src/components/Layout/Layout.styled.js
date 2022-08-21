import styled from 'styled-components';

export const LoyoutStyled = styled.div`
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
  @media screen and (min-width: 480px) {
    width: 480px;
  }
  @media screen and (min-width: 768px) {
    display: flex;

    width: 768px;
    height: 550px;
  }
  @media screen and (min-width: 1200px) {
    width: 1200px;
    height: 1000px;
  }
`;