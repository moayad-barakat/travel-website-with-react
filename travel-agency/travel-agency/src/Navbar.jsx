import {Link} from "react-router-dom"; 
import logo from "./assets/logo.png";
const Navbar= ()=>{



    return (
        <nav>
            <div>
                <img src={logo} alt="" />
            </div>


            <ul className="links">
               <li> <Link className="nav_link" to="/home">HOME</Link></li>
               <li> <Link className="nav_link" to="/about">ABOUT US</Link></li>
               <li> <Link className="nav_link" to="/loading">LOADING</Link></li>
               <li> <Link className="nav_link" to="/contact">CONTACT US</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;
