import axios from "axios";
import React, { useEffect, useState } from "react";
import "./HeroStyle.css";
import Api_Data from "../../Api_Data";

const Hero = () => {
  const [films, setFilms] = useState([]);

  // random films
  const film = films[Math.floor(Math.random() * films.length)];

  // axios geting data
  useEffect(() => {
    axios.get(Api_Data.requestPopular).then((res) => {
      setFilms(res.data.results);
    });
  }, []);


// SLICE THE LONG OVERVIEW LINES
  const sliceOverview = (letter, number) => {
    if(letter?.length > number){

      return  letter.slice(0, number) +'....'
    }else{
      return(
        letter
      )
    }
  }


  return (
    <>
      <div className="hero-container">
        <img
          className="hero-img"
          style={{backgroundColor:"black"}}
          src={`https://image.tmdb.org/t/p/original/${film?.backdrop_path}`}
          alt=""
        />
        <div className="info">
          <p className="title">{film?.title}</p>
          <div className="btns">
            <button className="play-btn">Play</button>
            <button className="watch-btn">Watch Later</button>
          </div>
          <p className="overview">{sliceOverview(film?.overview, 120)}</p>
        </div>
      </div>
    </>
  );
};

export default Hero;
