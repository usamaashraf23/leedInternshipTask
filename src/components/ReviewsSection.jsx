import React from "react";
import user1 from "/src/assets/reviewImages/user1.png";
import user2 from "/src/assets/reviewImages/user2.png";
import user3 from "/src/assets/reviewImages/user3.png";
import shadow from "/src/assets/backgroundImages/shadow.png";
import shadow2 from "/src/assets/backgroundImages/shadow2.png";
function ReviewsSection() {
  let reviewCard = [
    {
      review:
        "Teachings of the great explore of truth the master-builder of human happinessno one rejects dislikes  or avoids pleasure itself  pleasure itself",
      icon: <img src={user1} className="h-14" />,
      name: "Finlay Kirk",
      designation: "Web Developper",
    },
    {
      review:
        "Complete account of the system and expound the actual Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots",
      icon: <img src={user2} className="h-14" />,
      name: "Dannette P. Cervantes",
      designation: "Web Design",
    },
    {
      review:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,by injected humour",
      icon: <img src={user3} className="h-14" />,
      name: "Clara R. Altman",
      designation: "UI&UX Design",
    },
  ];
  return (
    <section className="my-16 relative">
      <img src={shadow} className="absolute w-40 sm:w-96 -bottom-60" />
      <img
        src={shadow2}
        className="absolute w-40 sm:w-96 right-1 -bottom-60  "
      />
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold">What Student's Say</h1>
        <span className="text-sm text-slate-600">
          Lorem Ipsum is simply dummy text of the printing.
        </span>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 px-10 sm:px-32 py-10 justify-center  items-stretch ">
        {reviewCard.map((review, index) => (
          <div className="shadow-2xl px-10 py-4" key={index}>
            <p>''{review.review}''</p>
            <div>
              <div className="flex gap-4 py-2">
                {review.icon}
                <div>
                  <h1>{review.name}</h1>
                  <span className="text-sm text-slate-600">
                    {review.designation}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ReviewsSection;
