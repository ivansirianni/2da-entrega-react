import NavBar from "../NavBar/Navbar"
import { PAGES } from "../../Utilities/main-pages"
import "./Layout.css";

export default function Layout(props) {
    const { children } = props;

    return (
        <div className="lay-container">

            <NavBar pages={PAGES} />
            {children}

        </div>
    );
}