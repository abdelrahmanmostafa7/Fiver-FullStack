/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Header from '../../components/Header/Header'
import Slide from '../../components/slide/Slide'
import "./Home.scss"
import {cards} from "../../data"
import CatCard from "../../components/catCard/CatCard"



function Home() {
  return (
    <div className='home'>

      <Header />

      <div className='trustedBy'>
          <div className="container">
          <span>Trusted by:</span>
          <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook2x.188a797.png" alt="" />
          <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google2x.06d74c8.png" alt="" />
          <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix2x.887e47e.png" alt="" />
          <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg2x.6dc32e4.png" alt="" />
          <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal2x.22728be.png" alt="" />
          </div>
      </div>

      <Slide slidesToShow={5} arrowsScroll={5}>
      {cards.map(card=>(
            <CatCard  item={card} key={card.id}/>
          ))}
      </Slide>

      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Quality work done quickly
            </div>
            <p>
              Find the right freelancer to begin working on your project within
              minutes.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Protected payments, every time
            </div>
            <p>
              Always know what you'll pay upfront. Your payment isn't released
              until you approve the work.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              24/7 support
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>
          <div className="item">
            <video src="./img/video.mp4"  autoPlay={true}  muted loop />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home