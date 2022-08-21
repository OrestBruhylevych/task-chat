import { Box } from 'components/Box/Box';
import {
  MassegeItemStyledFromUser,
  MassegeItemStyledNotFromUser,
  MessageListStyled,
} from './MassegeList.styled';
import { useScrollBar } from 'hooks/useScrollBar';
import { useRef } from 'react';

export default function MassegeList({ message }) {
  const messageWrapper = useRef(null);

  useScrollBar(messageWrapper);

  return (
    <MessageListStyled ref={messageWrapper}>
      <Box as="ul" p={4}>
        {message.map(({ text, date, id, fromUser }) => {
          if (fromUser === true) {
            return (
              <MassegeItemStyledFromUser key={id}>
                <p>{text}</p>
                <p>{date}</p>
              </MassegeItemStyledFromUser>
            );
          }

          return (
            <MassegeItemStyledNotFromUser key={id}>
              <p>{text}</p>
              <p>{date}</p>
            </MassegeItemStyledNotFromUser>
          );
        })}
      </Box>
    </MessageListStyled>
  );
}
