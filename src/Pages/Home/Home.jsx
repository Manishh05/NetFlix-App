import React from 'react'
import './Home.css'
import NavBar from '../../component/Navbar/NavBar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCard from '../../component/TitleCard/TitleCard'
import Footer from '../../component/Footer/Footer'


const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img'/>
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img'/>
          <p>Discovering his ties to a secret ancient order, a young man living in modern istanbul embarks on quest to save the city from an immortal enemy.</p>
          <div className="hero-btn">
            <button className="btn"><img src={play_icon} alt=""  />Play</button>
            <button className="btn dark-btn"><img src={info_icon} alt=""  />More Info</button>
          </div>
          <TitleCard />
        </div>
      </div>
      <div className="more-cards">
        <TitleCard title={"BlockBusterMovies"} category={"top_rated"}/>
        <TitleCard title={"Up Coming"} category={"popular"}/>
        <TitleCard title={"Only on Netflix"} category={"upcoming"}/>
        <TitleCard title={"Top Pics For You"} category={"now_playing"}/>
      </div>
      <Footer />
    </div>
  )
}

export default Home