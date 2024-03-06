const BrandProduct = () => {
  const cards = [
    {
      id: 1,

      number: "36+",

      title: "INTERNATIONAL BRANDS",
    },
    {
      id: 2,

      number: "3K+",

      title: "TOP QUALITY PRODUCTS",
    }
    
  ];
  return (
    <div className="bg-[#EBFFF4] py-10  my-20 ">
      <div className="container mx-auto p-12 flex flex-col md:flex-row">
        <div className="text-black flex justify-center items-center">
          <h1 className="font-[Gilroy] text-4xl">
            We’ve proven ourself to our customers
          </h1>
        </div>
        <div className=" flex flex-col md:flex-row   gap-6    ">
        {cards.map((card,i) => (
          <div key={i} className="relative  flex flex-col  text-black justify-center  items-center   px-5 lg:p-10  ">
            
           <div>
           <p className="text-4xl font-[thin]">{card.number}</p>
            <p className="text-xl py-5">{card.title}</p>
           </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default BrandProduct;
