import React from "react";

const SocialIcons = () => {
  return (
    <div className="flex gap-7 text-[18px] text-[#646464] ">
      <a
        href="https://www.facebook.com/share/23SEZmAXj3jKmAhb/?mibextid=qi2Omg"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <i
          style={{ transition: "all 0.3s" }}
          className="fa-brands fa-facebook-f bg-[#efefef] p-5 rounded-full px-[16px] hover:bg-[#ff0366] hover:text-white cursor-pointer"
        ></i>
      </a>
      <a
        href="https://www.instagram.com/thepowersquadgym/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i
          style={{ transition: "all 0.3s" }}
          className="fa-brands fa-instagram bg-[#efefef] p-5 rounded-full px-[14px] hover:bg-[#ff0366] hover:text-white cursor-pointer"
        ></i>
      </a>
      <a
        href="https://youtube.com/@thepowersquadgym?si=27ruM7p2YNHzO9DU"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i
          style={{ transition: "all 0.3s" }}
          className="fa-brands fa-youtube bg-[#efefef] p-5 rounded-full hover:bg-[#ff0366] hover:text-white cursor-pointer"
        ></i>
      </a>
    </div>
  );
};

export default SocialIcons;
