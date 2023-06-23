import React from "react";
import './App.css'
import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import { movies,actionurl,comedyurl,trendingurl,dramaurl } from "./urls";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={movies} title='Netflic orginals' />
      <RowPost url={trendingurl}  title='Trending' isSmall />
      <RowPost url={actionurl}  title='Action' isSmall />
      <RowPost url={dramaurl}  title='Drama' isSmall />
      <RowPost url={comedyurl}  title='Comedy' isSmall />
    </div>
  );
}

export default App;
