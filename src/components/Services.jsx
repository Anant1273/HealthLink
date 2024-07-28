// components/Services.js
import React from 'react';
import ServiceCard from './ServiceCard';

function Services() {
  return (
    <div className="grid grid-cols-4 gap-4 mt-8">
      <ServiceCard 
        title="Instant Video Consultation" 
        description="Connect within 60 secs" 
        icon="🎥" 
        color="bg-yellow-200"
      />
      <ServiceCard 
        title="Find Doctors near you" 
        description="Confirmed appointments" 
        icon="👨‍⚕️" 
        color="bg-green-200"
      />
      <ServiceCard 
        title="24/7 Medicines" 
        description="Essentials at your doorstep" 
        icon="💊" 
        color="bg-pink-200"
      />
      <ServiceCard 
        title="Lab Tests" 
        description="Sample pickup at your home" 
        icon="🧪" 
        color="bg-blue-200"
      />
    </div>
  );
}

export default Services;