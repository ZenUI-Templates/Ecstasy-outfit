import { FaArrowRight } from "react-icons/fa";

const Community = () => {
  return (
    <div className="bg-[#EBFFF4] flex flex-col justify-center items-center py-20 px-20 gap-3 my-10">
      <h1 className="font-bold text-3xl flex items-center justify-items-center">
        Join Shopping Community to <br /> Get Monthly Promo.
      </h1>
      <h1>Type your email down below and be young wild generation</h1>
      <div className="flex flex-row">
        <input type="text" placeholder="Enter your email" className="rounded-xl"/>
        <button className="btn flex items-center justify-center bg-[#33644A] px-4 py-2 rounded-xl text-white lg:w-1/3 md:w-2/3 w-1/3">
          send <FaArrowRight className=" text-2xl p-1" />
        </button>
      </div>
    </div>
  );
};

export default Community;
