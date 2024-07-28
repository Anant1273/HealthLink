// components/ServiceCard.js
import React from 'react';

function ServiceCard({ title, description, icon, color }) {
  return (
    <div className={`${color} p-6 rounded-lg bg-green-500`}>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="mb-4">{description}</p>
      {icon}
      <button className="bg-blue-900 text-white px-4 py-2 rounded mt-4">BOOK NOW</button>
    </div>
  );
}

export default ServiceCard;