import { NavLink } from 'react-router-dom';

import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton,
} from '@mui/material';
export function NavListDrawer({ navArrayLinks, setOpen }) {
  return (
    <Box sx={{ widh: 250 }}>
      <nav>
        <List>
          {navArrayLinks.map((item) => (
            <ListItem disablePadding key={item.title}>
              <ListItemButton
                component={NavLink}
                to={item.path}
                onClick={() => {
                  return (
                    setOpen(false),
                    item.title === 'Logout' && localStorage.clear()
                  );
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
}
