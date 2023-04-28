import { useChat } from '../hooks/useChat';
import { Message } from './Message';
import { Container } from '@mui/material';

import '../styles/chat.css';

export function Chat() {
  const { chat, currentIndex } = useChat();

  return (
    <Container
      className='chat--container'
      sx={{
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        padding: { xs: 2, sm: 5 },
      }}
    >
      {chat &&
        chat
          .slice(0, currentIndex + 1)
          .map((chat, index) => <Message key={index} {...chat} />)}
    </Container>
  );
}
