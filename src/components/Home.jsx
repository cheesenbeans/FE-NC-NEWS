import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../Contexts/UserContext";
import { fetchUsers } from "../utils/utils";
import "../App.css";

function Home() {
  const { user, setUser } = useContext(UserContext);
  const [ username, setUsername] = useState("");
  const [ noUserSelected, setNoUserSelected] = useState(false);

  function handleChange(event) {
    setNoUserSelected(false)
    const newUser = event.target.value;
    setUsername(newUser)
  }

  function handleSubmit(event) {
    event.preventDefault();
    if(username!==""){
    fetchUsers().then((users) => {
        users.map((user) => {
          if (user.username === username) {
            return setUser(user);
          }
        });
      })}
      else {setNoUserSelected(true)}
    }

  return (
    <main>
      <p className="homepagePara">Welcome on the Home page...</p>
      <section className="userLoginMain">
        <h3>Login here...</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="selectUser">Select User: </label>
          <select def="" id="selectUser" size="1" onChange={handleChange} value={username}>
            <option value="">selectuser</option>
            <option value="tickle122">tickle122</option>
            <option value="grumpy19">grumpy19</option>
            <option value="happyamy2016">happyamy2016</option>
            <option value="cooljmessy">cooljmessy</option>
            <option value="weegembump">weegembump</option>
            <option value="jessjelly">jessjelly</option>
          </select>
          <button type="submit">Login</button>
        </form>
        {noUserSelected && <p className="errorMessage">Please select a username to login</p>}
      </section>
    </main>
  );
}

export default Home;
