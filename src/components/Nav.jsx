import { Link } from "react-router-dom";

function Nav() {
  
    return (
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/articles"> Articles </Link>
        {/* <Link to="/topics"> Topics </Link>
        <Link to="/users"> Users </Link> */}
      </nav>
    );
  }
  
  export default Nav;
  