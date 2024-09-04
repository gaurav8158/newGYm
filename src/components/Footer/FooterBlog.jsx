import React from "react";

const FooterBlog = () => {
  return (
    <div className="flex flex-col gap-8 relative">
      <p className="text-[22px] font-bold text-white footer-main">
        Recent Blogs
      </p>

      <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0366]"></span>

      <div className="flex border-b border-gray-600 flex-col gap-4 justify-center">
        <p className="text-[14px] text-[#d1cdcd] font-medium">March 22, 2024</p>
        <p className="text-[16px] text-white group-hover:text-[#ff0336] ease-in duration-200 cursor-pointer font-bold">
          Meet Fitness Abassador Grace
        </p>
      </div>

      <div className="flex  border-b border-gray-600 flex-col gap-4 justify-center">
        <p className="text-[14px] text-[#d1cdcd] font-medium">March 22, 2024</p>
        <p className="text-[16px] text-white group-hover:text-[#ff0336] ease-in duration-200 cursor-pointer font-bold">
          Meet Fitness Abassador Grace
        </p>
      </div>
      <div className="flex  border-b border-gray-600 flex-col gap-4 justify-center">
        <p className="text-[14px] text-[#d1cdcd] font-medium">March 22, 2024</p>
        <p className="text-[16px] text-white group-hover:text-[#ff0336] ease-in duration-200 cursor-pointer font-bold">
          Meet Fitness Abassador Grace
        </p>
      </div>
    </div>
  );
};

export default FooterBlog;
