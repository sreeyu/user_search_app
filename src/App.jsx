import React, { useState } from "react";
import NavBar from "./component/navbar/NavBar";
import SearchResults from "./component/results/SearchResults";


function App() {

  const [gitUsers, setGitUsers] = useState([]);
  const [isResultEmpty, setIsResultEmpty] = useState(false);

  const getGitUsers = (userResult) => {
    setIsResultEmpty(false)
    setGitUsers(userResult);

    if(userResult.length === 0){
      setIsResultEmpty(true);
    }
  }

  let content = isResultEmpty ? <p className="para" >No Users found</p> : <SearchResults users={gitUsers} />

  return (
    <div className="App">
      <NavBar onSearch={getGitUsers} />
      {content}
    </div>
  );
}

export default App;
