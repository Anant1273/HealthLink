import React from 'react';
import pro from '../images/proxy1.jpeg';

function LabTestSection({ title, description, image, price, discount }) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md flex flex-col items-center hover:shadow-lg">
      <img src={image} alt={title} className="w-24 h-24 mb-4" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex items-center">
        <span className="text-gray-500 font-bold">₹{price}</span>
        <span className="text-red-500 ml-2 line-through">₹{price * 1.6}</span>
        <span className="text-green-500 ml-2">{discount}% OFF</span>
      </div>
    </div>
  );
}

function LabTests() {
  const testSections = [
    {
      title: 'Imaging tests',
      description: 'Imaging tests, such as X-rays, CT scans, and MRIs',
      image: pro, // Use the imported image directly
      price: 120,
      discount: 60,
    },
    {
      title: 'MRI & CT Scan',
      description: 'Imaging tests, such as X-rays, CT scans, and MRIs',
      image: pro, // Use the imported image directly
      price: 120,
      discount: 60,
    },
    {
      title: 'Orthopedists tests',
      description: 'Orthopedists can diagnose and treat various types of back and neck pain',
      image: pro, // Use the imported image directly
      price: 120,
      discount: 60,
    },
  ];

  return (
    <div className="font-bold rounded-lg text-white bg-indigo-950 p-8 container"> 
    <div className='flext flex-row'>
        <div className='text-3xl'>Frequency Book Lab Tests</div>
        <div className=''> View Lab Test</div>
    </div>
    {/* Added container div */}
      <div className="grid grid-cols-3 gap-6"> {/* Optional grid layout */}
        {testSections.map((section, index) => (
          <LabTestSection key={index} {...section} />
        ))}
      </div>
    </div>
  );
}

export default LabTests;
