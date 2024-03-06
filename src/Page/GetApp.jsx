const GetApp = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row py-10 px-4 items-center justify-center">
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl font-bold">Download App & Get <br /> The Voucher!</h1>
        <p>
          Get 30% off for first transaction using  <br />Rondovision mobile app for
          now.
        </p>
        <div className="grid grid-cols-2">
            <img src="https://i.ibb.co/19qbB4q/Frame-61.png" alt="" className="" />
            <img src="https://i.ibb.co/129Jy8k/Frame-60.png" alt=""  className="" />
        </div>
      </div>
      <div className="mx-auto py-5 ">
        <img src="https://i.ibb.co/KyV3jT2/Group-37625.png" alt="" className="" />
      </div>
    </div>
  );
};

export default GetApp;
