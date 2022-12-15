import { NavLink, Link } from "react-router-dom";
import Logo from "../Logo/Logo"
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";


export default function Navbar(props) {
  const { pages } = props;

  return (
    <nav className="navbar">      
      <Link to={`/home`}><Logo /></Link>      
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {pages.map((page) => (
          <li className="mx-5" key={`${page.id}-page`}>
            <NavLink
              to={page.path}
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
