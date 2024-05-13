import React, { useEffect, useRef, useState } from 'react'
import './TitleCard.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom';

const TitleCard = ({title,category}) => {
  
  const [apiData , SetApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjAwZGFmM2JiNzc5NWEyZDQ0ZmNiZDQ4ZjBiZWE4MyIsInN1YiI6IjY1NmM2ODM2NjUxN2Q2MDEyZmFhMDdiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yic0guf3gv5aBew_tBwq9JCNHD1x3TU36zaKlLaHRRE'
    }
  };
  
 
const handleWheel = (event)=>{
    event.prevenDefault();
    cardsRef.current.scrolleft += event.deltaY;
}
useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${category?
  category:"now_playing"}?language=en-US&page=1`, options)
  .then(response => response.json())
  .then(response => SetApiData(response.results))
  .catch(err => console.error(err));
  cardsRef.current.addEventListener('wheel', handleWheel)
},[])

  return  (
   <div className="Titlecard">
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card,index)=>{
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
   </div>
  )
}

export default TitleCard