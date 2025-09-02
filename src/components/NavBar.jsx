import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-3 flex justify-between items-center shadow-lg">
      <h1 className="text-xl font-bold">MyApp</h1>
      <div className="space-x-6">
        <Link to="/home" className="hover:text-blue-400">Home</Link>
        <Link to="/about" className="hover:text-blue-400">About</Link>
        <Link to="/" className="hover:text-red-400">Logout</Link>
      </div>
    </nav>
  );
}

