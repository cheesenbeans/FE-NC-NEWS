import { Link } from "react-router-dom";
import "../App.css";

function Nav() {
  
    return (
      <nav className="nav"> 
      <section className="links">
        <Link className="homeLink" to="/"> Home </Link>
        <Link className="articlesLink" to="/articles"> Articles </Link>
        <Link className="topicsLink" to="/topics"> Topics </Link>

        </section>
      </nav>
    );
  }
  
  export default Nav;
  