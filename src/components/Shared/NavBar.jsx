import {Link} from "react-router-dom";
import logo from "../../assets/react.svg"
import "../comonents_styles/NavBar.css";

export default function NavBar() {
    return(
        <nav className="navbar">
            <div className="navbar-left">
                <img src = {logo} alt="logo" className="navbar-logo" />
                <span className="navbar-title">LiteSpace</span>
            </div>

            <div className="navbar-right">
                <Link to = "/">Home</Link>
                <Link to ="/task">Task</Link>
                <Link to = "/compass">Compass</Link>
                <Link to = "/setting">Setting</Link>
            </div>
        </nav>
    )
}