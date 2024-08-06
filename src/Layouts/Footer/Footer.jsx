import React from 'react'
import Heading from '../../utilities/Heading/Heading';
import { Link } from 'react-router-dom';
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import './Footer.css'

function Footer() {
  return (
    <section id='footer'>
      <div className='container'>
        <div className='footer_wrapper'>
          <div className='footer_wrapper_copyright_box'>
              <Heading level="h4" text="Copyright © 2024. All rights are reserved" className="footer_wrapper_copyright_contant"/>
          </div>
          <div className='footer_wrapper_icon_box'>
            <Link to = "https://www.linkedin.com/feed/" target='blank'><CiLinkedin className='footer_wrapper_icon' /></Link>
            <Link to = "https://github.com/" target='blank'><FiGithub className='footer_wrapper_icon'/></Link>
          </div>
        </div>
      </div>
   </section>
  )
}

export default Footer