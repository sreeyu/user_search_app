import React, { useState } from "react";
import NavBar from "./component/navbar/NavBar";
import SearchResults from "./component/results/SearchResults";


function App() {

  const [gitUsers, setGitUsers] = useState([]);

  const getGitUsers = (userResult) => {
    setGitUsers(userResult);
  }
  
  return (
    <div className="App">
      <NavBar onSearch={getGitUsers} />
      <SearchResults users={gitUsers} />
    </div>
  );
}

export default App;
