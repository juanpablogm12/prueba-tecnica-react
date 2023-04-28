import { Login } from './components/Login';
import { Chat, Inicio, NavBar } from './components';
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== '/' && <NavBar />}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Inicio />} />
        <Route path='/chat' element={<Chat />} />
      </Routes>
    </>
  );
}

export default App;
