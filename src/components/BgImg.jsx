import React from 'react';
import img from '../images/roll.jpeg';

function BgImg() {
  return (
    <div className="h-80 overflow-y-scroll bg-cover bg-fixed bg-center bg-no-repeat shadow-lg relative h-screen" style={{backgroundImage:{img}}}>
      <img src={img} alt="Background Image" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
      <h1 className="text-6xl font-bold text-gray-800">Healthcare Solutions</h1>
<p className="text-lg text-3xl mt-4 text-gray-700">Your health is our top priority</p>

      </div>
    </div>
  );
}

export default BgImg;
