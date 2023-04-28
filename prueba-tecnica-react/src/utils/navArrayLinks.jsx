import { Home, Chat, Logout } from '@mui/icons-material';

export const navArrayLinks = [
  {
    title: 'Inicio',
    path: '/home',
    icon: <Home />,
  },
  {
    title: 'Chat',
    path: '/chat',
    icon: <Chat />,
  },
  {
    title: 'Logout',
    path: '/',
    icon: <Logout />,
    clearStorage: () => localStorage.clear(),
  },
];
