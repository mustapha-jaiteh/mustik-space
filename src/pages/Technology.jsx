import React from "react";
import Navbar from "../components/Navbar";
import { getTechnologyById } from "../services/data";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Technology = () => {
  let params = useParams();
  const technologyId = params.id;
  let tech = getTechnologyById(technologyId);

  const activeStyle = {
    fontweight: "bold",
    color: "white",
    textDecoration: "underline",
  };
  return (
    <div className="bg-[url('./assets/technology/background-technology-mobile.jpg')] md:bg-[url('./assets/technology/background-technology-tablet.jpg')] lg:bg-[url('./assets/technology/background-technology-desktop.jpg')] bg-cover overflow-hidden h-full pt-6">
      <Navbar />
      <div>
        <h2 className=" text-gray-50 text-lg lg:text-xl ml-0 lg:ml-12 text-center lg:text-left mt-6">
          <span className="text-gray-500">03</span> SPACE LAUNCH 101
        </h2>
      </div>
      <div className="image-part w-[85%] h-full lg:w-full lg:h-full flex justify-center items-center my-8 lg:my-16 mx-8 lg:mx-0">
        <picture>
          <source srcSet={tech.images.landscape} media="(min-width: 1024px)" />
          <source srcSet={tech.images.landscape} media="(min-width: 768px)" />
          <img
            src={tech.images.portrait}
            alt=""
            className="left-0 top-0 rounded-md "
          />
        </picture>
      </div>
      <div className="text-part justify-center items-center text-center mt-16 mb-12 w-[80%] lg:w-[60%] mx-auto lg:mx-auto px-auto lg:px-16 ">
        <ul className=" flex flex-row justify-between items-center text-slate-400 pt-4 lg:pt-8 mx-16 lg:mx-24 text-center lg:text-left ">
          <NavLink to={"/technologies/1"}>
            <button className="rounded-full h-16 w-16 lg:h-16 lg:w-16 bg-transparent hover:bg-white focus:bg-white text-white hover:text-black focus:text-black border-2 border-slate-100">
              1
            </button>
          </NavLink>
          <NavLink to={"/technologies/2"}>
            <button className="rounded-full h-16 w-16 lg:h-16 lg:w-16 bg-transparent hover:bg-white focus:bg-white  text-white hover:text-black focus:text-black border-2 border-slate-100">
              2
            </button>
          </NavLink>
          <NavLink to={"/technologies/3"}>
            <button className="rounded-full h-16 w-16 lg:h-16 lg:w-16 bg-transparent hover:bg-white focus:bg-white  text-white hover:text-black focus:text-black border-2 border-slate-100">
              3
            </button>
          </NavLink>
        </ul>
        <div className=" my-8 lg:my-12 text-center lg:text-center">
          <h2 className="text-slate-100 text-4xl leading-3 font-bold ">
            {tech.name}
          </h2>
          <p className="text-slate-300 text-md my-6 lg:my-12">
            {tech.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Technology;
