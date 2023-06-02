import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import "../App.css";

function Nav() {
  const { user, setUser } = useContext(UserContext);

  function handleSignOut() {
    setUser({});
  }

  return (
    <nav className="nav">
      <section className="links">
        <Link className="homeLink" to="/">  Home  </Link>
        <Link className="articlesLink" to="/articles">  Articles  </Link>
        <Link className="topicsLink" to="/topics">  Topics  </Link>
       
      </section> 
      {user.username && (
          <div className="signedIn">
            <span className="user">Logged in: {user.username}</span>
            {Object.keys(user).length !== 0 && (
              <button onClick={handleSignOut}>Sign Out</button>
            )}
          </div>
        )}
    </nav>
  );
}

export default Nav;
