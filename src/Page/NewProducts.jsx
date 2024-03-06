import  { useState } from 'react';

const NewProducts = () => {
  const cards = [
    {
      id: 1,
      icon: "https://s3-alpha-sig.figma.com/img/3329/758c/e2776638d2390797575fe0652468591a?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D5-W-m-7FTJC1MMfBB4V-rQMe3jk6wsVe5MLqK-72Wo5FGQE6gsxPkuXD5hbNviOEvyITVIJmxE1XGmM3ik1eBwm~hArwdRC6luCMOS4OjK2ly0lvKo2a8M9Jii~tw7y~lkznmlKb17NsAGicVMSGFiWb2QRzUJuyT9R9bjhFrLd24cnu2PeHbxHAAMkd6OE1oKHkpAGwfdfrr~~gBTT~02S5SPjxpbVtSHBLj8MbdnbM2tWYwj6NAgW9u-ozoPWnspYxUDi~cFPAGvNw5QFXW3Ei8gZOFdc99tEqv7Nh8GvmLN7Utf5E~bGqibod~KuNyZ40x67yHZT6IyDH6F3eQ__",
      name: "Hoodies & Sweetshirt",
    },
    {
      id: 2,
      icon: "https://s3-alpha-sig.figma.com/img/0a94/2bfb/32d058cabd76d21b35a037c539dd1710?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NLAGMC6QRbnOGJc8RH4LylbeUp7lU4NtbgZmAxh7ldbUx60wsgGgjEdS0qRaf4V7YKF08KSBpgEP-UDRQvYeJg1TIc01GzAKDvTQjt713Vu8CyvoyQ02YlwjY8j8qGGQv69I4pTLm51tTkdQL0Xuy0vcfriNWUvvENKOwSj1CIFJVBLqwtVq00~mLZ4SVS3NUm4nf4sIHc5e4O0Pv33mzgMnsR0ljeZuV7oFaog0qQ-MJnNrXlXHz2QaoQrksHbqYyFhyQ9yGh8yodQhnlGHPIqQ2C3v6O7Vx1Wfg4YIXD1myALC~~RVb6ByGQ9UNCLRgzmbRtACKh4Bv0U7c-ASZg__",
      name: "Coats & Parkas",
    },
    {
      id: 3,
      icon: "https://s3-alpha-sig.figma.com/img/6669/ecad/19890b7f0375f6f1a31003313f56c440?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZUvo8g3dPuIIAKptf8dqBEBRITd5m1zWO2u4KI1jpWty4svq6TjP6pkwUa-B7E0EH6BILB6gE0AjsnWxfOcadejdc6BU1pQHsreObMRvDPW-5TxTKJ7kvNiE7fTud0Qun0nzVsBycX10gAYoPKXOFz4Da7O9lXKyghbtnzDWyXDM8HLeTE6366jBdRGF1Nj3d~m5t2kx527EkKNY8LHXWyVQOlfJr8RcM9xmPR27xgM-SdumyORtUCUbcZ6WXC7MH9hSwkYFA40WCPwu9fEIPXDt25arFhHKEF7e2w~TkNjbOH3I~i0wf6-RoT9rGUnLVle8Ssy1vBIG7u-lFZG-bQ__",
      name: "Tees & T-Shirt",
    },
    {
      id: 4,
      icon: "https://images.pexels.com/photos/20420587/pexels-photo-20420587/free-photo-of-eastern-dresses-2024-shoot-by-dhanno.jpeg?auto=compress&cs=tinysrgb&w=300",
      name: "western dress",
    },
    {
      id: 5,
      icon: "https://images.pexels.com/photos/2310130/pexels-photo-2310130.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Winter dress",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = currentIndex + 1 >= cards.length ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = currentIndex - 1 < 0 ? cards.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="container mx-auto py-8 px-10 my-10">
    <div className="relative px-5">
      <div className="absolute inset-y-0 -left-5 flex items-center">
        <button onClick={prevSlide} className="text-3xl">&#10094;</button>
      </div>
      <div className="absolute inset-y-0 -right-5 flex items-center">
        <button onClick={nextSlide} className="text-3xl">&#10095;</button>
      </div>
      <div className="flex overflow-hidden w-full px-5">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`w-full  flex justify-center items-center mx-auto transform transition-transform duration-300  ${
              index === currentIndex ? 'scale-100' : 'scale-75 hidden  lg:block xl:block'
            }`}
          >
            <div className="rounded-lg overflow-hidden flex flex-col justify-center items-center bg-white  shadow-md">
              <img src={card.icon} alt={card.name} className="object-cover h-72" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{card.name}</h3>
              
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default NewProducts;
