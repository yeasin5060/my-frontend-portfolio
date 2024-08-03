import React from 'react'
import Heading from '../../../utilities/Heading/Heading'
import { Link } from 'react-router-dom'
import cssicon from '../../../images/cssicon.png'
import htmlicon from '../../../images/htmlicon.png'
import javascripticon from '../../../images/javascripticon.png'
import mongodbicon from '../../../images/mongodbicon.png'
import nodejsicon from '../../../images/nodejsicon.png'
import sassicon from '../../../images/sassicon.png'
import reacticon from '../../../images/reacticon.png'
import tailwindicon from '../../../images/tailwindicon.png'
import reduxicon from '../../../images/reduxlogoimg.svg'
import muilicon from '../../../images/muilogo.png'
import firebaseicon from '../../../images/firebaseimg.png'
import image from '../../../images/profile.jpg'
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import "./Homepagebanner.css"

function Homepagebanner() {
  return (
    <section id='homebanar'>
    <div className='container'>
      <div className='homebanar_wrapper_full_contant'>
        <div className='homebanar_wrapper'>
          <div className='homebanar_contant_box'>
            <Heading level="h1" text="Frontend Developer" className="homehaner_heading"/>
            <Heading level="p" text="Hi,I'm Yeasin Munshi. A passionate Frontend Developer based in Dhaka , Bangladesh." className="homebanar_pera"/>
            <div className='homebanar_wrapper_icon_box'>
              <Link to = "https://www.linkedin.com/feed/" target='blank'><CiLinkedin className='homebanar_wrapper_icon' /></Link>
              <Link to = "https://github.com/" target='blank'><FiGithub className='homebanar_wrapper_icon' /></Link>
            </div>
          </div>
          <div className='homebanar_image_box'>
            <div className='homebanar_big_image_box'>
              <img src={image} alt="not found" />
            </div>
          </div>
        </div>
        <div className='homebanar_all_language_wrapper'>
          <div className='homebanar_all_language_wrapper_stack'>
            <Heading level="h4" text="Tech Stack" className="homebanar_all_language_wrapper_stack_name"/>
          </div>
          <div className='homebanar_all_language_wrapper_flex'>
            <div className='homebanar_small_image_box'>
              <img src={htmlicon} alt="nto found" />
            </div>
            <div className='homebanar_small_image_box'>
              <img src={cssicon} alt="nto found" />
            </div>
            <div className='homebanar_small_image_box'>
              <img src={reduxicon} alt="nto found" />
            </div>
            <div className='homebanar_small_image_box'>
              <img src={muilicon} alt="nto found" />
            </div>
            <div className='homebanar_small_image_box'>
              <img src={reacticon} alt="nto found" />
            </div>
            <div className='homebanar_small_image_box'>
              <img src={sassicon} alt="nto found" />
            </div>
            <div className='homebanar_small_image_box'>
              <img src={tailwindicon} alt="nto found" />
            </div>
            <div className='homebanar_small_image_box_two'>
              <img src={javascripticon} alt="nto found" />
            </div>
            <div className='homebanar_small_image_box_two'>
              <img src={nodejsicon} alt="nto found" />
            </div>
            <div className='homebanar_small_image_box_two'>
              <img src={mongodbicon} alt="nto found" />
            </div> 
            <div className='homebanar_small_image_box_two'>
              <img src={firebaseicon} alt="nto found" />
            </div>    
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Homepagebanner