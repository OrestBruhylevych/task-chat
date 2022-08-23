import styled from 'styled-components';

export const MessageListStyled = styled.div`
  height: 100%;
`;

export const MassegeItemStyledFromUser = styled.li`
  p.message {
    display: block;
    border-radius: 10px;
    padding: 10px;
    background-color: ${p => p.theme.colors.primary};
    max-width: 240px;
    margin-left: auto;
  }

  p.date {
    display: block;
    max-width: 130px;
    margin-left: auto;
  }
`;

export const MassegeItemStyledNotFromUser = styled.li`
  p.message {
    display: block;
    border-radius: 10px;
    padding: 10px;
    max-width: 240px;
    margin-right: auto;
    background-color: ${p => p.theme.colors.accent};
    width: 75%;
    margin-right: auto;
  }

  p.date {
    display: block;
    margin-right: auto;
  }
`;
