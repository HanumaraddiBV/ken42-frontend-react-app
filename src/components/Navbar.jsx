import { Link } from "react-router-dom";
import "./Navbar.css"
export const Navbar = () => {
  return (
    <div id="navbar">
      <Link  to="/" style={{textDecoration: "none" }}>
        Home
      </Link>
      <Link  to="/schedule" style={{textDecoration: "none" }}>
      Schedule 
    </Link>
      
    </div>
  );
};
