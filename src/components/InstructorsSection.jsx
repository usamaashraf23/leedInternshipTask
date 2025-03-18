import React from "react";
import instructor1 from "/src/assets/instructorImages/instructor1.png";
import instructor2 from "/src/assets/instructorImages/instructor2.png";
import instructor3 from "/src/assets/instructorImages/instructor3.png";
import instaIcon from "/src/assets/socialIcons/instagramIcon.png";
import linkedInIcon from "/src/assets/socialIcons/linkedInIcon.png";
import planet from "/src/assets/backgroundImages/planet.png";
import arrow from "/src/assets/backgroundImages/arrow2.png";
function InstructorsSection() {
  let instructorCards = [
    {
      instructorImgae: (
        <img src={instructor1} className="rounded-xl w-full object-cover" />
      ),
      name: "Matthew E. McNatt",
      designation: "Professor",
      college: "George Brown College",
      description:
        "Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut allquip ex commodo.",
      course: "Engineering physics",
    },
    {
      instructorImgae: (
        <img src={instructor2} className="rounded-xl w-full object-cover" />
      ),
      name: "Tracy D. Wright",
      designation: "Professor",
      college: "George Brown College",
      description:
        "Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut allquip ex commodo.",
      course: "Engineering physics",
    },
    {
      instructorImgae: (
        <img src={instructor3} className="rounded-xl w-full object-cover" />
      ),
      name: "Cynthia A. Nelson",
      designation: "Professor",
      college: "George Brown College",
      description:
        "Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut allquip ex commodo.",
      course: "Engineering physics",
    },
  ];
  return (
    <section id="service" className="my-10 relative">
      <img
        src={arrow}
        className="h-16 sm:h-28 absolute top-0 sm:-top-10 left-4 sm:left-10"
      />
      <img
        src={planet}
        className="h-10 sm:h-14 absolute top-0 right-4 sm:right-10 "
      />
      <div className="text-center">
        <h1 className="text-4xl font-bold">Our Tracks</h1>
        <span className="text-sm py-4 text-gray-600">
          Lorem Ipsum is simply dummy text of the printing.
        </span>
      </div>
      <div className="flex flex-col md:flex-row gap-4 px-10 sm:px-24 py-10">
        {instructorCards.map((card, index) => (
          <div key={index} className="shadow-xl rounded-xl p-3 py-4 ">
            <div>{card.instructorImgae}</div>
            <h1 className="font-bold ">{card.name}</h1>
            <span className="text-sm text-slate-600">
              {card.designation} @{card.college}
            </span>
            <p className="text-sm text-slate-400 py-2">{card.description}</p>
            <div className="text-orange-600 flex items-center justify-between">
              {card.course}
              <div className="flex gap-2">
                <img src={instaIcon} className="h-8" />
                <img src={linkedInIcon} className="h-8" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default InstructorsSection;
