import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoMan, IoReorderThreeSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="container   mx-auto py-5   text-black">
      <div className="  hidden lg:flex  lg:flex-row  lg:justify-between max-w-full">
        <div className="p-2 text-2xl text-blue font-semibold font-[Yellowtail]">
          © zenui
        </div>
        <div>
          <div className="flex flex-row gap-2 text-xl font-[Gilroy]  ">
            <a className="p-2 hover:text-sky-600" href="#home">
              Home
            </a>
            <a className="p-2 hover:text-sky-600" href="#About">
              Collection
            </a>
            <a className="p-2 hover:text-sky-600" href="#Service">
              Trending
            </a>

            <a className="p-2 hover:text-sky-600" href="#team">
              Contact
            </a>

            <div className="flex flex-row p-3 gap-2 ">
              <FaSearch className="text-xl hover:text-sky-600" />
              <IoMan className="text-xl hover:text-sky-600" />
              <MdDelete className="text-xl hover:text-sky-600" />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden flex flex-row justify-between ">
        <div className="p-2 font-semibold text-4xl">© zenui</div>
        <div>
          <button
            className="p-2 -mr-1  transition duration-200 rounded focus:outline-none  focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <IoReorderThreeSharp className="text-3xl" />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-50">
              <div className="p-5 bg-white text-black dark:bg-slate-300  rounded-md shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600 " viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div
                  onClick={() => setIsMenuOpen(false)}
                  className="flex flex-col justify-center items-center  w-1/2  text-xl font-semibold p-4 mx-auto gap-2 "
                >
                  <a className="p-2 hover:text-sky-600" href="#home">
                    Home
                  </a>
                  <a className="p-2 hover:text-sky-600" href="#About">
                    Collection
                  </a>
                  <a className="p-2 hover:text-sky-600" href="#Service">
                    Trending
                  </a>

                  <a className="p-2 hover:text-sky-600" href="#team">
                    Contact
                  </a>

                  <div className="flex flex-row p-3 gap-2">
                    <FaSearch className="text-xl" />
                    <IoMan className="text-xl" />
                    <MdDelete className="text-xl" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
