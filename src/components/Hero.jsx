// components/Hero.js
import React from 'react';
import proxyss from '../images/proxy.png';

function Hero() {
  return (
    <div className="bg-indigo-950 text-white p-8 rounded-lg flex items-center justify-between mt-4 relative">
      <div>
        <div className='flex-col'>
            <div>
                <h2 className="text-7xl font-bold mb-4">HealthLink</h2>
            </div>
            <div className='flex flex-row'>
                <div className="flex flex-col mb-4">
                    <span className="bg-pink-200 text-pink-800 px-3 py-1 rounded-full mr-4 text-sm w-[118px]">Reduce HbA1c</span>
                    <p className="mb-4 pt-28 pb-0 text-xs text-white-300 w-[300px] insert-x bottom-0 font-bold">IF YOU'RE LOOKING FOR A CREATIVE AND EASY WAY TO BUILD A WEBSITE, WOW! IS THE PERFECT SOLUTION.</p>
                </div>
                <div className='px-8'>
                    <img src={proxyss} alt="Healthcare professional" className=" w-[300px] h-[200px]"  />
                </div>
                <div className="flex flex-col align-left mb-4">
                    <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm ">No more medications</span>
                    <div className='h-[140px]'></div>
                    <button className="bg-pink-400 text-white px-6 py-2 rounded-full text-sm ">Book Consultation</button>
                </div>
            </div>
        </div>
        </div>
    </div>
  );
}

export default Hero;