import styled from 'styled-components';

export const MessageListStyled = styled.div`
  width: 100%;

  @media screen and (min-width: 480px) {
    height: 500px;
  }
  @media screen and (min-width: 768px) {
    height: 244px;
  }
  @media screen and (min-width: 1200px) {
    height: 494px;
  }
`;

export const MassegeItemStyledFromUser = styled.li`
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;

  background-color: gray;
  max-width: 340px;
  margin-left: auto;
  p {
    display: block;
    margin-left: auto;
  }
`;

export const MassegeItemStyledNotFromUser = styled.li`
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;

  max-width: 340px;
  margin-right: auto;
  background-color: aqua;
  p {
    display: block;
    width: 75%;
    margin-right: auto;
  }
`;
