// components/Header.js
import React from 'react';

function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-100">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-indigo-1900">HealthLink</h1>
        <div className="ml-4">
          <span className="text-gray-600 text-sm">Select Location</span>
          <select className="ml-2 border rounded p-1 text-sm">
            <option>New York</option>
          </select>
        </div>
      </div>
      <div className="flex items-center">
        <input type="text" placeholder="Medicine and healthcare items" className="border rounded p-2 mr-4 text-sm" />
        <button className="bg-orange-400 text-white px-4 py-2 rounded text-sm">Healthcare Services</button>
        <a href="#" className="ml-4 text-sm text-gray-600">Offers</a>
        <a href="#" className="ml-4 text-sm text-gray-600">Cart</a>
        <a href="#" className="ml-4 text-sm text-gray-600">Login</a>
      </div>
    </header>
  );
}

export default Header;