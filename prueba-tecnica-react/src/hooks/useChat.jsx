import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export function useChat() {
  const { user, password } = useSelector((state) => state.logIn);

  const [chat, setChat] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const URL = `https://pbakxq15qi.execute-api.us-west-2.amazonaws.com/testing?user=${user}&password=${password}`;

  const fetchChat = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setChat(data));
  };

  useEffect(() => {
    fetchChat();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < chat.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    }, 1200);
    return () => clearTimeout(timer);
  }, [currentIndex, chat]);

  return { chat, currentIndex };
}
