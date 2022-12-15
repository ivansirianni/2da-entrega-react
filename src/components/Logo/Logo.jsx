import logo from "./logo.png";
import "./logo.css"
import { Link } from "react-router-dom"

const Logo = () => {
    return(
        <div>
            <div>
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
            </div>
        </div>
    )
}

export default Logo