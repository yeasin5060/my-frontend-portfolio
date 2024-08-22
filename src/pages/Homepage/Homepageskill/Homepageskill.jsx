import React from 'react'
import Heading from '../../../utilities/Heading/Heading';
import './Homepageskill.css'

function Homepageskill() {
  let arraylag = [
    {
        id : 1,
        lagtype : "Front End",
        lagone : "HTML",
        lagtwo: "CSS",
        lagthree: "Javascript",
        lagfour:"Sass",
        lagfive: "talwind",
        lagsix: "Material UI",
        lagseven:"Reactjs",
        lageight:"Redux-Toolkit",
        lagnine : "Axios",
        lagten : "Nodejs",
        lagaliven : "Nextjs"
    },
    {
        id :3 ,
        lagtype : "Other",
        lagone : "Git",
        lagtwo: "Git-Desktop",
        lagthree: "Linding",
        lagfour:"Netlify",
    },
]
  return (
    <section id='homeskill'>
      <div className='container'>
        <div className='homeskill_wrapper'>
          <Heading level="h3" text="My Skills" className="homeskill_wrapper_heading"/>
        <div className='homeskill_wrapper_flex'>
          {
            arraylag.map((item,indexd)=>(
              <div key={indexd} className='homeskill_wrapper_box'>
                <div className='homeskill_wrapper_head_box'>
                  <Heading level="h3" text={item.lagtype} className="homeskill_wrapper_head"/>
                </div>
                <div className='homeskill_wrapper_head_lag_box_flex'>
                  <Heading level="h4" text={item.lagone} className="homeskill_wrapper_nanohead"/>
                  <Heading level="h4" text={item.lagtwo} className="homeskill_wrapper_nanohead"/>
                  <Heading level="h4" text={item.lagthree} className="homeskill_wrapper_nanohead"/>
                  <Heading level="h4" text={item.lagfour} className="homeskill_wrapper_nanohead"/>
                  <Heading level="h4" text={item.lagfive} className="homeskill_wrapper_nanohead"/>
                  <Heading level="h4" text={item.lagsix} className="homeskill_wrapper_nanohead"/>
                  <Heading level="h4" text={item.lagseven} className="homeskill_wrapper_nanohead"/>
                  <Heading level="h4" text={item.lageight} className="homeskill_wrapper_nanohead"/>
                  <Heading level="h4" text={item.lagnine} className="homeskill_wrapper_nanohead"/> 
                  <Heading level="h4" text={item.lagten} className="homeskill_wrapper_nanohead"/>
                  <Heading level="h4" text={item.lagaliven} className="homeskill_wrapper_nanohead"/>                  
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
   </section>
  )
}

export default Homepageskill