import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getDestinationById } from "../services/data";
//destinations images
import moon from "../assets/destination/image-moon.png";
import mars from "../assets/destination/image-mars.png";
import europa from "../assets/destination/image-europa.png";
import titan from "../assets/destination/image-titan.png";

// Destination data
const destinations = [
  {
    id: 1,
    name: "Moon",
    images: moon,
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
  },
  {
    id: 2,
    name: "Mars",
    images: mars,
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil. km",
    travel: "9 months",
  },
  {
    id: 3,
    name: "Europa",
    images: europa,
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travel: "3 years",
  },
  {
    id: 4,
    name: "Titan",
    images: titan,
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travel: "7 years",
  },
];
const Destination = () => {
  // const { id } = useParams();

  // const destination = destinations.find((dest) => dest.id == id);

  // console.log("Params:", id);
  // console.log("Destination:", destination);
  const activeStyle = {
    fontweight: "bold",
    color: "white",
    textDecoration: "underline",
  };

  let params = useParams();
  const destinationId = params.id;
  let destination = getDestinationById(destinationId);
  return (
    <main className="bg-[url('./assets/destination/background-destination-mobile.jpg')] md:bg-[url('./assets/destination/background-destination-tablet.jpg')] lg:bg-[url('./assets/destination/background-destination-desktop.jpg')] bg-cover bg-no-repeat h-full pt-6">
      <Navbar />
      <div>
        <h2 className=" text-gray-50 text-lg lg:text-xl ml-0 lg:ml-12 text-center lg:text-left mt-6">
          <span className="text-gray-500">01</span> PICK YOUR DESTINATION
        </h2>
      </div>
      <div className="text-part justify-center items-center text-center mt-28 mb-12 w-[80%] lg:w-[50%] mx-auto lg:mx-auto px-auto lg:px-16 ">
        <div className=" my-4 lg:my-12  ">
          <img src={destination.images} alt="image" />
        </div>
        <ul className=" flex flex-row justify-between items-center text-slate-400 pt-4 lg:pt-12 mx-6 lg:mx-12 text-center lg:text-left">
          <li className=" hover:underline underline-offset-8">
            <NavLink
              to={"/destinations/1"}
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              MOON
            </NavLink>
          </li>
          <li className="hover:underline underline-offset-8">
            <NavLink
              to={"/destinations/2"}
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              MARS
            </NavLink>
          </li>
          <li className="hover:underline underline-offset-8">
            <NavLink
              to={"/destinations/3"}
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              EUROPA
            </NavLink>
          </li>
          <li className="hover:underline underline-offset-8">
            <NavLink
              to={"/destinations/4"}
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              TITAN
            </NavLink>
          </li>
        </ul>
        <h1 className=" text-4xl lg:text-[120px] text-gray-50 my-4 lg:my-16 ">
          {destination.name}
        </h1>
      </div>
      <div className="text-part justify-center items-center text-center  w-[80%] lg:w-[85%] mx-auto lg:mx-auto px-auto lg:px-16 ">
        <p className=" text-slate-300 justify-center">
          {destination.description}
        </p>
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4 mt-12  lg:mt-16">
          <div className="distance flex flex-col justify-center items-center m-3 text-slate-300">
            <p>AVG. DISTANCE</p>

            <h2 className="text-2xl font-bold text-gray-50 mb-4">
              {destination.distance}
            </h2>
          </div>
          <div className="travel flex flex-col justify-center items-center m-3 text-slate-300 mb-4">
            <p>EST. TRAVEL TIME</p>
            <h2 className="text-2xl font-bold text-gray-50 mb-4">
              {destination.travel}
            </h2>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Destination;
