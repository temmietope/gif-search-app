import React from "react";
import SearchForm from "./SearchForm";
import Gifs from "./Gifs";
import "./Home.css"

const Home = () => {
  return (
    <div className="home">
        <h4>GIF SEARCH</h4>

      <SearchForm />
      <Gifs />
    </div>
  );
};
export default Home;
