import React from "react";
import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getCrewById } from "../services/data";

const Crew = () => {
  let params = useParams();
  const crewId = params.id;
  let member = getCrewById(crewId);

  const activeStyle = {
    color: "white",
  };
  return (
    <div className="bg-[url('./assets/crew/background-crew-mobile.jpg')] md:bg-[url('./assets/crew/background-crew-tablet.jpg')] lg:bg-cover  h-full pt-6 overflow-hidden">
      <Navbar />
      <div>
        <h2 className=" text-gray-50 text-lg lg:text-xl ml-0 lg:ml-12 text-center lg:text-left mt-6">
          <span className="text-gray-500">02</span> MEET YOUR CREW
        </h2>
      </div>
      <div className="text-part justify-center items-center text-center mt-16 mb-12 w-[80%] lg:w-[60%] mx-auto lg:mx-auto px-auto lg:px-16 ">
        <div className=" my-4 lg:my-12 text-center lg:text-center">
          <h3 className="text-slate-300 text-2xl my-4">{member.role}</h3>
          <h2 className="text-slate-100 text-4xl leading-3 font-bold ">
            {member.name}
          </h2>
          <p className="text-slate-300 text-md my-6 lg:my-12">{member.bio}</p>
        </div>
        <ul className=" flex flex-row justify-between items-center text-slate-400 pt-4 lg:pt-8 mx-16 lg:mx-24 text-center lg:text-left ">
          <NavLink
            to={"/crew/1"}
            style={({ isActive }) => (isActive ? activeStyle : null)}
            className="rounded-full h-6 w-6 lg:h-6 lg:w-6 bg-slate-400 hover:bg  focus:bg-white"
          ></NavLink>
          <NavLink
            to={"/crew/2"}
            style={({ isActive }) => (isActive ? activeStyle : null)}
            className="rounded-full h-6 w-6 lg:h-6 lg:w-6 bg-slate-400 hover:bg  focus:bg-white"
          ></NavLink>
          <NavLink
            to={"/crew/3"}
            style={({ isActive }) => (isActive ? activeStyle : null)}
            className="rounded-full h-6 w-6 lg:h-6 lg:w-6 bg-slate-400 hover:bg  focus:bg-white"
          ></NavLink>
          <NavLink
            to={"/crew/4"}
            style={({ isActive }) => (isActive ? activeStyle : null)}
            className="rounded-full h-6 w-6 lg:h-6 lg:w-6 bg-slate-400 hover:bg  focus:bg-white"
          ></NavLink>
        </ul>

        <div className=" my-4 lg:my-12 p-4 ">
          <img src={member.images} alt="image " />
        </div>
      </div>
    </div>
  );
};

export default Crew;
