import { FaArrowRight } from "react-icons/fa";

const TrendingCollection = () => {
    const cards = [
      {
        id: 1,
        icon: "https://s3-alpha-sig.figma.com/img/10bf/3bec/2c4f58be63e329813d793a3b46aed29a?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kIF7IiHZtQTUpQzcJH3-f1nmWPPSNcDbpQ1ESsBSdR7JkowvFxVHI4DIPVpzHL7ior0Qco9-qtXVgQW-ScTzsbXRMpeqTZL2kb~M~BjgbjFUGKbKWYnQudi6JB1XdQqCNmZSZ4SKgKEUdrGzw5GkVI82DVWpIn~g50WQ4xZ0kqlzKg6mwTXV1A8kjqwQ7v8MTMhCoRrStmv3d0NjX6rT9NoeNqhG0ILaOYGO3-U-oLh0ph3bNhJ~UP6wiQ~RDGQgfu80I5FuKZbpaXN3pqOSY5KYUxE4sX2M0aO-p9oEuWw0OCgZqzBQsoBNTz1CSZr-PUlkXgdBqhw87nK01t8nPw__",
        name: "Trending on instagram",
      },
      {
        id: 2,
        icon: "https://s3-alpha-sig.figma.com/img/1471/526d/cf6573c4c47ff0eec42429d39cb60775?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c~lRBYQm7XXut6yHVUiKI5IiorRQ8d2JGGuUomSSdaDi8hMU9UC~tf3GaIaKjQc1aCZ8QnYgerWtfW3HWb3OK8n4CNQSZwAGXpAOUl57u7ymqhvFe218CY30gtzIZHVVsCZo0E9UsU5jU7lYxamts395BYw7xFRUddjJV8TnmJTZn2Er88J4iBQxzIsMhvjLMVVWDOtnFeg-b-~AkBSs3Q0y2ArWwChqQggBRcXOU6dTRz6JbbSJnYhAuo~2M2IqxsLDElcsrJzs0hNriutfZpD8XSPjIoqtNtx83GaEE1g7xypP2WWNTfdEN52B7f1HrR8Go2nCb4UC3PjFrXAEAg__",
        name: "All Under $40",
      },
      
    ];
    return (
      <div className="bg-[#daebfc] px-5  py-5 my-10">
        <div className="container mx-auto py-5">
          <div className="">
            <h1 className="text-4xl font-bold p-4">
            Trending Collection
            </h1>
           
          </div>
          <div className=" mx-auto grid grid-cols-1 bg-slate-50 lg:grid-cols-2  gap-2 py-2 ">
            {cards.map((card, i) => (
              <div key={i} className="flex flex-col   relative rounded-xl p-4 ">
               <div className="relative">
               <img src={card.icon} alt="" className="h-full lg:h-[575px]" />
               
               </div>
                <p className="text-2xl  font-semibold text-black py-2">
                  {card.name}
                </p>
                <button className="btn flex items-center justify-center bg-[#33644A] px-4 py-2 rounded-xl text-white w-1/2">Explore Now   <FaArrowRight  className=" text-2xl p-1"/></button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default TrendingCollection;
  