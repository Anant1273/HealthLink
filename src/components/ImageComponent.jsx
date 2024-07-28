import React from 'react';

function ImageComponent() {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* Top Row */}
      <div className="flex-1 bg-yellow-400 p-6 rounded-lg">
            <div className="flex items-center mb-4">
                <button className="text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded-md">🔴Podcast</button>
            </div>
                <h3 className="text-2xl font-bold mb-2">Nutrition and Mental Health</h3>
                <p className="text-xs text-gray-700">The role of diet in preventing and managing mental health conditions such as depression and anxiety</p>
            </div>
            <div>
                <div className="flex-1 bg-indigo-900 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                    <button className="text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded-md">🔴Live Event</button>
                </div>
                <h3 className="text-2xl font-bold mb-2">Healthy Habits for a Happy Heart</h3>
                <p className="text-gray-200">Feb 28, 2023 | 08:00 PM</p>
            </div>
            <div className='flex flex-row'>
                <div className="flex-1 bg-green-400 p-6 rounded-lg flex flex-col items-center">
                    <h2 className="text-4xl font-bold mb-2">08</h2>
                    <p className="text-gray-700">Years Experience</p>
                </div>
                <div className="flex-1 bg-pink-300 p-6 rounded-lg flex flex-col items-center">
                    <h2 className="text-4xl font-bold mb-2">120k</h2>
                    <p className="text-gray-700">Happy Customers</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ImageComponent;
