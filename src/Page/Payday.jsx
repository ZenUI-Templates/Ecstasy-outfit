import { FaArrowRight } from "react-icons/fa";

const Payday = () => {
  return (
    <div className="bg-[#EBFFF4] py-10 my-5">
      <div className=" container flex flex-col md:flex-row justify-center items-center px-5">
        <div className="col-span-6 py-10 relative" >
          <img
            src="https://s3-alpha-sig.figma.com/img/be25/cdd0/da9b5cdee8d7589febe2e9143b866d78?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NSPOBMmfpBOnqgRQvYUkKrO85xG89QmsLhr8qVyyqTYRoYNVs7X1it1-gt6j9XD1vac3DTKPhRQT7x7xkFTE~u8CgVMSYNzInZoU6aGZq28zF28yoCrS8VmVaX7l798UHGyZaP6oL6HS-lq8hHHBoJ3fStEZACwU3D5gUF42SAifKMvxWoJ0WJYzh6pJK1Lj4TPr-hx1Ssul868tFDqb90d7vYDe7v7-GbFHGk6ygp6Dh1rMwgbcT-t8LY~GJKfnKgEmAtXyFJsYwrZdDutoudMlHCgGZv9Zcw2A-9wIVk7oQ88br5ULyUqxfDtXnBZtDxvz~Ah-3UMTY3MdAsuLvA__"
            alt=""
            className="w-full h-full"
          />
          <div className="absolute top-10 left-10"><img className="object-cover" src="https://i.ibb.co/Xyqh4kJ/thinsmooth.png" alt="" /></div>
          <div className=" absolute bottom-10 right-10"><img className="object-cover" src="https://i.ibb.co/vcpLdwM/thinsmooth.png" alt="" /></div>
          <div className="absolute top-5 right-0"><img className="object-cover" src="https://i.ibb.co/ryRQcTV/thinsmooth.png" alt="" /></div>
          <div className="absolute bottom-5 left-0"><img className="object-cover" src="https://i.ibb.co/ryRQcTV/thinsmooth.png" alt="" /></div>
        </div>
        <div className="py-16 grid col-span-3 gap-5 px-5">
          <h1 className="bg-yellow-500 text-6xl text-white font-bold pr-10">
            PAYDAY
          </h1>
          <h1 className=" text-6xl text-black font-bold uppercase">Sale Now</h1>
          <p className="text-lg">
            Spend minimal $100 get 30% off voucher code for your next purchase
          </p>
          <div>
            <p className="text-xl font-semibold">1 June - 10 June 2021</p>
            <p className="text-xl">*Terms & Conditions apply</p>
          </div>
            <button className="btn flex items-center justify-center bg-[#33644A] px-4 py-2 rounded-xl text-white lg:w-1/3 md:w-2/3 w-2/3">Shop Now   <FaArrowRight  className=" text-2xl p-1"/></button>
        </div>
      </div>
    </div>
  );
};

export default Payday;
