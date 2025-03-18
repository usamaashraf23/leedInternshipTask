import React from "react";
import premiumImg from "/src/assets/containerImages/premiumImg.png";
import hearts from "/src/assets/containerImages/hearts.png";
import jigsaw from "/src/assets/containerImages/jigsaw.png";
import reactIcon from "/src/assets/backgroundImages/react.png";
import globeIcon from "/src/assets/backgroundImages/globe.png";
import vaccumIcon from "/src/assets/backgroundImages/vaccum.png";
import triangleIcon from "/src/assets/backgroundImages/triangle.png";
import scaleIcon from "/src/assets/backgroundImages/scale.png";
import bulbsketchIcon from "/src/assets/backgroundImages/bulbsketch.png";
import pcIcon from "/src/assets/backgroundImages/pc.png";
function PremiumSection() {
  return (
    <section className="relative bg-[#fef8f1] py-16 px-10 flex flex-col-reverse md:flex-row items-center justify-center gap-20 overflow-hidden">
      <div className="relative   flex-shrink-0">
        <img
          src={reactIcon}
          alt=""
          className="w-10 sm:w-12 absolute right-1 sm:right-2 top-2 sm:top-1"
        />
        <img
          src={globeIcon}
          alt=""
          className="w-10 sm:w-12 absolute -left-10 sm:-left-20 bottom-1 sm:bottom-1"
        />
        <img
          src={triangleIcon}
          alt=""
          className=" sm:block w-12 sm:w-16 absolute -right-16 sm:left-80 bottom-4 sm:bottom-8"
        />
        <img
          src={scaleIcon}
          alt=""
          className="w-10 sm:w-12 absolute -right-10 sm:left-80 top-40 sm:top-24"
        />
        <img
          src={bulbsketchIcon}
          alt=""
          className="sm:block w-10 sm:w-16 absolute -left-10 sm:right-64 top-10 sm:top-1"
        />
        <img
          src={pcIcon}
          alt=""
          className="sm:block w-10 sm:w-12 absolute -left-12 sm:right-96 bottom-32 sm:top-40"
        />
        <img
          src={premiumImg}
          alt="Learning Experience"
          className="max-w-md md:max-w-lg drop-shadow-lg h-80 sm:h-96"
        />
      </div>
      <div className="max-w-lg">
        <h1 className="text-4xl font-bold text-gray-900">
          Premium <span className="text-orange-500">Learning</span>
          <br /> Experience
        </h1>
        <div className="mt-6 space-y-6">
          <div className="flex items-start space-x-4  ">
            <div className="bg-[#4D2C5E] px-3 py-3 rounded-xl">
              <img src={hearts} alt="Icon 1" className="sm:h-10" />
            </div>

            <div>
              <h3 className="text-lg font-semibold">Easily Accessible</h3>
              <p className="text-gray-600 text-sm">
                Learning will feel very comfortable with Courslab.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-[#4D2C5E] px-3 py-3 rounded-xl">
              <img src={jigsaw} alt="Icon 1" className="sm:h-10" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Fun Learning Experience</h3>
              <p className="text-gray-600 text-sm">
                Learning will feel very comfortable with Courslab.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PremiumSection;
