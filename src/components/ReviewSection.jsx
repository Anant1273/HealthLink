import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonialsData = [
    {
      name: 'Esther Howard',
      title: 'Patient',
      image: 'https://via.placeholder.com/50x50', // Replace with actual image
      testimonial: 'I had a great experience at this healthcare clinic. I was seen quickly, and the doctor was able to diagnose and treat my condition.',
    },
    {
      name: 'John Doe',
      title: 'Patient',
      image: 'https://via.placeholder.com/50x50', // Replace with actual image
      testimonial: 'The staff was incredibly friendly and helpful. I felt well cared for throughout my visit.',
    },
    {
      name: 'Jane Smith',
      title: 'Patient',
      image: 'https://via.placeholder.com/50x50', // Replace with actual image
      testimonial: 'I was impressed with the doctors knowledge and expertise. They took the time to explain my condition and treatment options clearly.',
    },
  ];

const ReviewSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="bg-white b-[300px] justify-center p-4 rounded-lg">
      <h2 className="text-3xl font-bold mb-2">Our doctors and clinics have earned over 5,000+ reviews on Google!</h2>
      <div className="flex items-center mb-4">
        <span className="text-yellow-500">★★★★★</span>
      </div>
      <p className="text-gray-600">Average Google Rating is 4.6</p>
      <Slider {...settings}>
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <img src={testimonial.image} alt={testimonial.name} className="rounded-full mr-2" />
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.title}</p>
              </div>
            </div>
            <p className="text-gray-700">{testimonial.testimonial}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewSection;
