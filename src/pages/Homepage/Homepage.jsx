import React from 'react'
import Homepagebanner from './Homepagebanner/Homepagebanner'
import Homepageabout from './Homepageabout/Homepageabout'
import Homepageskill from './Homepageskill/Homepageskill'
import Homepageproject from './Homepageproject/Homepageproject'
import Homepagecontact from './Homepagecontact/Homepagecontact'

function Homepage() {
  return (
    <>
       <Homepagebanner/>
       <Homepageabout/>
       <Homepageskill/>
        {
          /*
          <Homepageproject/>
          <Homepagecontact/>
           */
        }
    </>
  )
}

export default Homepage