import React from 'react';
import ActivityCard from './ActivityCard';
import { activitiesData } from '../data/activities';

const Activities = () => {
  return (
    <section id="activities" className="activities-container">
      <h2 className="section-title">INTRODUCE</h2>
      
      {activitiesData.map((activity, index) => (
        <ActivityCard 
          key={activity.id} 
          activity={activity} 
          index={index} 
        />
      ))}
    </section>
  );
};

export default Activities;