import { Link } from "react-router-dom";
import "../App.css";

function Nav() {
  
    return (
      <nav className="nav"> 
        <Link to="/"> Home </Link>
        <Link to="/articles"> Articles </Link>
        {/* <Link to="/topics"> Topics </Link>
        <Link to="/users"> Users </Link> */}
      </nav>
    );
  }
  
  export default Nav;
  