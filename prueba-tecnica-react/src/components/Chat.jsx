import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import "../styles/chat.css";
import { Message } from "./Message";
import { Container, Box } from "@mui/material";

export function Chat() {
  const { user, password } = useSelector((state) => state.logIn);
  const URL = `https://pbakxq15qi.execute-api.us-west-2.amazonaws.com/testing?user=${user}&password=${password}`;
  const [chat, setChat] = useState([]);

  const fetchChat = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setChat(data));
  };

  useEffect(() => {
    fetchChat();
  }, []);

  return (
    <Container className="chat--container" sx={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",padding: {xs: 2, sm: 5}}} >
      <Box >
        {chat.map((chat, index) => (
          <Message key={index} {...chat} />
        ))}
      </Box>
    </Container>
  );
}
 
