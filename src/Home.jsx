// import { useState } from "react";

import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import bgDesktop from "./assets/home/background-home-desktop.jpg";
import bgTablet from "./assets/home/background-home-tablet.jpg";
import bgMobile from "./assets/home/background-home-mobile.jpg";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <main className="bg-[url('./assets/home/background-home-mobile.jpg')] md:bg-[url('./assets/home/background-home-tablet.jpg')] lg:bg-[url('./assets/home/background-home-desktop.jpg')] bg-cover bg-no-repeat h-full pt-6 w-full">
        <Navbar />
        <div className="main-div grid grid-cols-1 justify-center items-center text-center place-content-center h-full w-full ">
          <div className="text-part justify-center items-center text-center my-28 w-[80%] lg:w-[60%] mx-auto lg:mx-auto px-auto lg:px-16">
            <h2 className=" text-gray-50 text-xl lg:text-3xl ">
              So, you want to travel to
            </h2>
            <h1 className=" text-6xl lg:text-[160px] text-gray-50 my-4 lg:my-12 ">
              SPACE
            </h1>
            <p className=" text-gray-50 justify-center">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
            <Link to={"/destinations/1"}>
              <button className="explore rounded-full h-32 w-32 lg:h-60 lg:w-60 bg-gray-50 hover:shadow-2xl hover:shadow-slate-200 text-lg lg:text-4xl my-8 lg:my-32 mx-auto p-6 lg:p-12 pt-8 lg:pt-16 text-center">
                EXLPORE
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
