import React from 'react';
import Heading from '../../utilities/Heading/Heading';
import { NavLink } from 'react-router-dom';
import profilelogo from "../../images/profilelogo.png"
import { FaList } from "react-icons/fa6";
import './Navbar.css'

function Navbar() {
  let hendleHome = ()=>{
    window.scrollTo(0,0)
  }
let hendleAbout = ()=>{
  window.scrollTo(690 , 690)
}
let hendleProject = ()=>{
    window.scrollTo(1990 , 1990)
}
let hendleSkill = ()=>{
    window.scrollTo(1290 , 1290)
}
let hendleWork = ()=>{
    window.scrollTo(1990 , 1990)
}
let handleContact = ()=>{
    window.scrollTo(4590 , 4590)
}
  return (
    <nav id='navbar'>
            <div className='container'>
                <div className='navbar_wrapper'>
                    <div className='navbar_image_and_profile_name_box'>
                        <div className='navbar_logo_box'>
                            <img src={profilelogo} alt="not found" />
                        </div>
                        <div className='navbar_profile_name_box'>
                            <Heading level="h3" text="Yeasin.dev" className="navbar_profile_name"/>
                        </div>
                    </div>
                    <div className='navbar_link_box'>
                        <ul className='navbar_link_flex'>
                            <li>
                                <NavLink to = "/" onClick={hendleHome}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={hendleAbout} >about</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={hendleProject} >project</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={hendleSkill}>skills</NavLink>
                            </li>
                            <div className='contact_me_btn_box'>
                                <NavLink className="contact_me" onClick={handleContact} >Contact Me</NavLink>
                            </div>
                        </ul>
                    </div>
                    <div className='list-icon'>
                        <FaList className='list-btn' />
                    </div>
                </div>
            </div>
        </nav>
  )
}

export default Navbar