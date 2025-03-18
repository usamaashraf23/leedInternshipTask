import React from "react";
import ratingStars from "/src/assets/containerImages/ratingStars.png";
import trackImage1 from "/src/assets/trackImg1.png";
import trackImage2 from "/src/assets/trackImg2.png";
import trackImage3 from "/src/assets/trackImg3.png";
import bulb from "/src/assets/backgroundImages/bulb.png";
import arrow from "/src/assets/backgroundImages/arrow.png";
import { FaRegClock } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";

function TrackSection() {
  let trackCards = [
    {
      trackImgae: <img src={trackImage1} className="rounded-xl" />,
      type: "UI/UX Design",
      rating: <img src={ratingStars} />,
      title: "UI/UX Design for Beginners",
      price: 98,
      hours: 22,
      mins: 30,
      courses: 34,
      sales: 250,
      cardButton: (
        <button className="bg-[#FF7426] text-white px-5 py-2 rounded-full relative right-10 ">
          Join Course
        </button>
      ),
    },
    {
      trackImgae: <img src={trackImage2} className="rounded-xl" />,
      type: "UI/UX Design",
      rating: <img src={ratingStars} />,
      title: "UI/UX Design for Beginners",
      price: 98,
      hours: 22,
      mins: 30,
      courses: 34,
      sales: 250,
      cardButton: (
        <button className="bg-[#FF7426] text-white px-5 py-2 rounded-full relative right-10 ">
          Join Course
        </button>
      ),
    },
    {
      trackImgae: <img src={trackImage3} className="rounded-xl" />,
      type: "UI/UX Design",
      rating: <img src={ratingStars} />,
      title: "UI/UX Design for Beginners",
      price: 98,
      hours: 22,
      mins: 30,
      courses: 34,
      sales: 250,
      cardButton: (
        <button className="bg-[#FF7426] text-white px-5 py-2 rounded-full relative right-10 ">
          Join Course
        </button>
      ),
    },
  ];
  return (
    <section id="courses" className="my-10 relative">
      <img
        src={bulb}
        className="h-16 sm:h-20 absolute -top-3 left-4 sm:left-10"
      />
      <img
        src={arrow}
        className="h-16 sm:h-20 absolute top-0 right-5 sm:right-10 rotate-12"
      />
      <div className="text-center">
        <h1 className="text-4xl font-bold">Our Tracks</h1>
        <span className="text-sm py-4 text-gray-600">
          Lorem Ipsum is simply dummy text of the printing.
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-10 sm:px-24 py-10">
        {trackCards.map((card, index) => (
          <div
            key={index}
            className="shadow-xl rounded-xl p-3 py-4 h-full flex flex-col"
          >
            <div>{card.trackImgae}</div>
            <div className="flex justify-between items-center py-2">
              <span className="text-sm text-gray-500">{card.type}</span>
              {card.rating}
            </div>
            <h1 className="font-bold ">{card.title}</h1>
            <p className="text-[#FF7426] font-bold mb-2">${card.price}</p>
            <hr className="text-gray-700 px-5" />
            <div className="flex gap-2 mb-4 items-center pt-2 text-slate-600 text-sm">
              <div className="flex items-center gap-2">
                <FaRegClock />
                <span>
                  {card.hours}hr {card.mins}min
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaVideo />
                <span>{card.courses} Courses</span>
              </div>
              <div className="flex items-center gap-2">
                <BsDownload />

                <span>{card.sales} Sales</span>
              </div>
            </div>
            <div className="flex justify-center  -mb-8">
              <button className="bg-[#FF7426] text-white cursor-pointer px-5 py-2 rounded-full">
                Join Course
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrackSection;
