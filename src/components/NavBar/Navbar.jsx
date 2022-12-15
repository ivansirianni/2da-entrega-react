import { NavLink, Link } from "react-router-dom";
import Logo from "../Logo/Logo"
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";


export default function Navbar(props) {
  const { pages } = props;

  return (
    <nav className="navbar side-bar">      
      <Link to={`/home`}><Logo /></Link>      
      <ul className="sidebar__list-items">
        {pages.map((page) => (
          <li key={`${page.id}-page`}>
            <NavLink
              to={page.id}
              className={({ isActive }) =>
                isActive ? "link is-active" : "link"
              }
            >
              {page.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="cart">
        <CartWidget />
      </div>
    </nav>
  );
}
