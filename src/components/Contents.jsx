import React from 'react'
import ContentsSlidar from './Slidar';
import { contentsData,} from '../data/contents'; 
import { SliderRail } from '@mui/material';
function Contents() {
  return (
    <section id="activities" className="activities-container">
      <h2 className="section-title">CONTENTS</h2>
      
      {contentsData.map((activity, index) => (
        <SliderRail 
          key={activity.id} 
          activity={activity} 
          index={index} 
        />
      ))}
    </section>
  )
}

export default Contents
