import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import "../styles/chat.css";
import { Message } from "./Message";

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
    <div className="chat--container">
      {chat.map((chat, index) => (
        <Message key={index} {...chat} />
      ))}
    </div>
  );
}
