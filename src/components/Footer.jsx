import React from "react";
import logoImg from "/src/assets/logoImg.png";
function Footer() {
  return (
    <footer className="bg-[#fcf8f3] text-gray-800 py-10 px-10">
      <div className="max-w-7xl mb-8 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-2">
        {/* Logo & Description */}
        <div className="md:col-span-2">
          <div className="flex items-center space-x-2">
            <img src={logoImg} alt="Book Store Logo" className="h-14" />
          </div>
          <p className="mt-3 text-sm text-gray-600 w-[250px] leading-4 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy a type
            specimen book.
          </p>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="font-semibold text-md mb-3">Company</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">How to work?</a>
            </li>
            <li>
              <a href="#">Popular Course</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
          </ul>
        </div>

        {/* Courses Section */}
        <div>
          <h3 className="font-semibold text-md mb-3">Courses</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>
              <a href="#">Categories</a>
            </li>
            <li>
              <a href="#">Offline Course</a>
            </li>
            <li>
              <a href="#">Video Course</a>
            </li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="font-semibold text-md mb-3">Support</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div>
          <h3 className="font-semibold text-md mb-3">Contact Info</h3>
          <p className="text-sm text-gray-600">+0913-705-3875</p>
          <p className="text-sm text-gray-600">Elizabeth.J@jourrapid.com</p>
          <p className="text-sm text-gray-600">
            4808 Skinner Hollow Road <br /> Days Creek, OR 97429
          </p>
        </div>
      </div>
      <hr />
      {/* Footer Text */}
      <div className="mt-8 text-center text-sm text-gray-500">
        BookStore All Right Reserved, 2025
      </div>
    </footer>
  );
}

export default Footer;
