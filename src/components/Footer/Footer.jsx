import FooterLogo from "../../images/logo/logo.svg";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import back from "../../images/hero/hero-1.jpg";
import FooterBlog from "./FooterBlog";
import SocialIcons from "./SocialIcons";
import LogoSide from "../../../public/homepage/newmainlogo.png";
import { Link } from "react-router-dom";
function Footer() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const goTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <>
      <footer className=" bg-[#090808]">
        <div className="container page-padding py-[10rem]">
          {/* footer div all */}
          <div className="flex justify-between md1000:flex-col  md1000:gap-10  min620:items-center min620:text-center min620:gap-[5rem] !text-left">
            {/* logo side */}
            <div className="flex flex-col w-1/3 md1000:w-[90%] min620:w-[90%] min540:w-full gap-8">
              <Link onClick={() => window.top(0, 0)} to="/">
                <img
                  src={LogoSide}
                  alt="logo_img"
                  onClick={goTop}
                  className=" md1000:h-16  h-24 "
                />
              </Link>
              {/* <img src={FooterLogo} alt="footer_logo" className="w-[18rem]" /> */}
              {/* <p className="text-[15px] font-medium text-[#bebcbc]">
                Take your health and body to the next level with our
                comprehensive program designed to help you reach your fitness
                goals.
              </p> */}
              <p className="text-[15px] font-medium text-[#bebcbc]">
                ENTIRE UPPER FLOOR, C-30A, C-30B, and, near JVTS GARDEN, Block
                C, Chhatarpur Extension, New Delhi, Delhi 110074
              </p>

              {/* socials */}

              <SocialIcons />
              <p className="text-[16px] font-medium text-[#bebcbc]">
                Privacy Policy | © {new Date().getFullYear()} The Power Squad
                Gym <br />{" "}
              </p>
            </div>
            <div className="flex w-2/3 md1000:w-[90%] min540:w-full flex-row justify-end md1000:justify-start gap-20 min450:gap-10 min450:flex-col">
              {/* <FooterBlog /> */}

              {/* middle div */}
              <div className="flex flex-col gap-8 relative">
                <p className="text-[22px] text-white font-bold footer-main">
                  Our Classes
                </p>

                <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0366]"></span>

                <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#bebcbc] font-medium ">
                  Fitness Classes
                </p>
                <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#bebcbc] font-medium ">
                  Zumba Classes
                </p>
                <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#bebcbc] font-medium ">
                  Power Yoga
                </p>
                <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#bebcbc] font-medium ">
                  Learn Machines
                </p>
                <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#bebcbc] font-medium ">
                  Full-body Strength
                </p>
              </div>

              {/* right div */}
              <div className="flex flex-col gap-8 relative">
                <p className="text-[22px] font-bold text-white footer-main">
                  Working Hours
                </p>

                <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0366]"></span>

                <p className="text-[16px]  text-[#bebcbc] font-bold">
                  Monday - Saturday:
                </p>
                <p className="text-[16px] text-[#bebcbc] font-medium">
                  06:00am - 12:30pm(day)
                </p>
                <p className="text-[16px] text-[#bebcbc] font-medium">
                  04:00pm - 11:00pm(evening)
                </p>
                <p className="text-[16px] text-[#bebcbc] font-bold">Sunday:</p>
                <p className="text-[16px] text-[#bebcbc] font-medium">
                  05:00pm - 10:00pm(evening)
                </p>
              </div>
            </div>
            {/* middle div */}
            <span></span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
