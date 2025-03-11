import {Link} from "react-router-dom"; 
import logo from "./assets/logo.png";
const Navbar= ()=>{



    return (
        <nav>
            <div>
                <img src={logo} alt="" />
            </div>


            <div className="links">
                <Link className="nav_link" to="/home">HOME</Link>
                <Link className="nav_link" to="/about">ABOUT US</Link>
                <Link className="nav_link" to="/loading">LOADING</Link>
                <Link className="nav_link" to="/contact">CONTACT US</Link>
            </div>
        </nav>
    )
}

export default Navbar;