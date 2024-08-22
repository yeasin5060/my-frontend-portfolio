import React from 'react';
import Heading from '../../../utilities/Heading/Heading';
import { Link } from 'react-router-dom';
import laptop from '../../../images/laptop.jpg';
import './Homepageabout.css'

function Homepageabout() {
  return (
    <section id='homeabout'>
        <div className='container'>
          <div className='homeabout_wrapper'>
            <div className='homeabot_wrapper_image_box'>
              <img src={laptop} alt="not found" />
            </div>
            <div className='homeabot_wrapper_contant_box'>
              <Heading level="h4" text="ABOUT ME" className="homeabot_wrapper_contant_nanohead"/>
              <Heading level="h3" text="I'm Frontend Developer based in Dhaka , Bangladesh" style="homeabot_wrapper_contant_head"/>
              <Heading level="p" text="Hey, my name is Yeasin.I'm a Frontend Developer.I'm 21 year old. I'm learning HTML , CSS , SASS , TAILWINd , REACT , JAVASCRIPT for front-end or NODE.JS , MONGO.DB , JAVASCRIPT for back-end. " style="homeabot_wrapper_contant_pera"/>
              <div className='homeabot_wrapper_contant_link_box'>
                <Link to = "about" className='homeabot_wrapper_contant_link'>And Know</Link>
              </div>
            </div>
          </div>
        </div>
   </section>
  )
}

export default Homepageabout