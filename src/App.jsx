import React from "react";
import NavBar from "./component/navbar/NavBar";
import SearchResults from "./component/results/SearchResults";
import image from './component/results/images.png'

const DUMMY_USERS = [
  {id: 'i1', url: '', name: 'someone', avatar: image},
  {id: 'i2', url: '', name: 'someone', avatar: image},
  {id: 'i3', url: '', name: 'someone', avatar: image},
  {id: 'i4', url: '', name: 'someone', avatar: image}
]

function App() {
  return (
    <div className="App">
      <NavBar />
      <SearchResults users={DUMMY_USERS} />
    </div>
  );
}

export default App;
