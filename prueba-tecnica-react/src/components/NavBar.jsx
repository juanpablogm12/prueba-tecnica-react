import { NavLink } from "react-router-dom";

export function NavBar() {
  return (
    <>
      <NavLink  to='/inicio'>Inicio</NavLink>
      <NavLink  to='/chat'>Chat</NavLink>
      <NavLink  to='/'>Logout</NavLink>
    </>
  );
}
