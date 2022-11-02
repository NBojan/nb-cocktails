import { Link } from "react-router-dom";
import logo from "../logo.svg"

const Navbar = () => {
    return (  
        <nav className="padTB-36 bg-col-fff mb-48">
            <div className="d-flex space-between align-center containerBoot m-auto">
                <Link to="/" className="logo-img d-flex">
                    <img src={logo} alt="LOGO" />
                </Link>
                
                <div className="navLinks">
                    <Link to ="/">Home</Link>
                    <Link to ="/about">About</Link>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;