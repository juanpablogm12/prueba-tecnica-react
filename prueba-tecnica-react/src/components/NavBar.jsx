import { useState } from "react";

import { NavListDrawer } from "./NavListDrawer";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { navArrayLinks } from "../utils/navArrayLinks";



export function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="sticky" sx={{background: "#4ECCA3"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            onClick={() => setOpen(true)}
            sx={{ display: { sm: "none", xs: "flex" } }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            React User Chat
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            {navArrayLinks.map((item) => (
              <Button
                key={item.title}
                component={NavLink}
                to={item.path}
                color="inherit"
              >
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
        sx={{ display: { sm: "none", xs: "flex" } }}
      >
        <NavListDrawer navArrayLinks={navArrayLinks} setOpen={setOpen}/>
      </Drawer>
    </>
  );
}
