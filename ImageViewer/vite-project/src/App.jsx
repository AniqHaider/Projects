import "./App.css";
import React, { useState } from "react";
import Image from "./components/Image";
import car1 from "../src/assets/car1.jpg";
import car2 from "../src/assets/car2.webp";
import car3 from "../src/assets/car3.jpeg";
import car4 from "../src/assets/car4.jpg";
import car5 from "../src/assets/car5.jpeg";
import car6 from "../src/assets/car6.jpeg";
import car7 from "../src/assets/car7.jpg";
import car8 from "../src/assets/car8.webp";
import car9 from "../src/assets/car9.avif";
import car10 from "../src/assets/car10.jpg";
import car11 from "../src/assets/car11.avif";
import car12 from "../src/assets/car12.jpeg";
import car13 from "../src/assets/car13.webp";
import car14 from "../src/assets/car14.webp";
import car15 from "../src/assets/car15.webp";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredImages = [
    car1,
    car2,
    car3,
    car4,
    car5,
    car6,
    car7,
    car8,
    car9,
    car10,
    car11,
    car12,
    car13,
    car14,
    car15,
  ].filter((image) => image.includes(searchQuery));

  return (
    <div className="bg-red-500 transition duration-300 ease-in-out">
      <h1 className="flex justify-center text-4xl font-bold text-gray-800 py-8 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
        SNAPSHOT
      </h1>
      <div className="my-8 mx-auto max-w-md w-4/5 md:w-3/5 lg:w-2/5">
        <input
          type="text"
          placeholder="Search images..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 m-14">
        {filteredImages.map((image) => (
          <Image key={image} src={image} alt="Random Image" />
        ))}
      </div>

      <footer
        className="text-center text-gray-900 text-sm py-6 mb-4"
        style={{ margin: 0, padding: 0 }}
      >
        &copy; {new Date().getFullYear()} SNAPSHOT. All rights reserved.
        <br/><br/><br/>
      </footer>
    </div>
  );
};

export default App;
