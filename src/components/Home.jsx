import React from "react";
import HeroImage from "../assets/profile-image.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-black">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl sm:text-7xl font-bold text-white mt-3">
            I'm a <span className="text-green"> Frontend Developer</span>
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            My name is Tobias Santellan. Passionate about what I do and very
            focused on continuing to develop my skills day by day. Always ready
            for any situation in which I can contribute with my knowledge and
            learn something new.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-green cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-1xl mx-auto w-3/4 opacity-2 me-6"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
