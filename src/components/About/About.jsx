import AboutCarts from "./AboutCarts";
import TitleRed from "../../images/who-we-are/title-bg.svg";
import TrainersIcon from "../../images/who-we-are/weightlifter.png";
import ModernIcon from "../../images/who-we-are/equpments.png";
import LiftIcon from "../../images/who-we-are/gym.png";
import GirlRunning from "../../images/who-we-are/girl-run.png";
import GirlRedBg from "../../images/who-we-are/girl-redbg.svg";
import GirlText from "../../images/who-we-are/girl-side-text.png";
import GirlWind from "../../images/who-we-are/wind.png";
import MainButton from "../MainButton";
import { motion } from "framer-motion";
function About() {
  return (
    <>
      <section className="flex relative bg-[#151515] overflow-hidden  flex-col justify-between gap-2  pb-[20rem]">
        <div className="container page-padding">
          {/* about cards */}
          {/* <div className="about-cards flex gap-10  md1000:flex-col">
            <AboutCarts />
          </div> */}

          {/* text-img div */}
          <div
            id="about"
            className=" grid grid-cols-[50fr,50fr] gap-[3rem] md1000:grid-cols-1"
          >
            {/* about text */}
            <div className="mt-[10.5rem]  relative md1000:items-center md1000:flex md1000:flex-col md1000:text-center md1000:w-[full]">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  duration: 1.9,
                  delay: 0.6,
                }}
                className="flex flex-col  "
              >
                <p className="text-3xl  text-[#FF0336] mb-4 font-medium">
                  WHY CHOOSE US
                </p>
                <h2 className="text-[35px] text-white font-bold leading-tight mb-6 w-[60rem] min800:w-[100%]">
                  PUSH YOUR LIMITS FORWARD
                </h2>
                <p className="text-[16px] text-[#acacac] font-medium ">
                  Take your health and body to the next level with our
                  comprehensive program designed to help you reach your fitness
                  goals.
                </p>
              </motion.div>
              {/* about text icons */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  duration: 1.9,
                  delay: 0.8,
                }}
                className=" text-white flex mt-12 mb-[7rem] gap-[2px] min620:flex-col "
              >
                <div className="flex flex-col group  items-center text-center py-10 px-14 pl-7 min620:px-0">
                  <div className="flex justify-center mb-6 items-center p-5  rounded-full group-hover:bg-white  transition-all">
                    <img
                      src={TrainersIcon}
                      alt="icon_img"
                      className={`w-[5.4rem]  h-auto`}
                    />
                  </div>
                  <h3 className="uppercase font-bold text-[20px] leading-snug">
                    professional <br /> trainers
                  </h3>
                </div>

                <div className="flex group flex-col items-center text-center border-solid border-l border-[rgb(0,0,0,0.2)] border-r py-10 px-14 min620:px-0 min620:border-none">
                  <div className="flex justify-center mb-6 items-center p-5  rounded-full group-hover:bg-white  transition-all">
                    <img
                      src={ModernIcon}
                      alt="icon_img"
                      className={`w-[5.4rem]  h-auto`}
                    />
                  </div>
                  <h3 className="uppercase font-bold text-[20px] leading-snug">
                    modern <br /> equipments
                  </h3>
                </div>

                <div className="flex group flex-col items-center text-center py-10 px-14 pr-2 min620:px-0">
                  <div className="flex justify-center mb-6 items-center p-5  rounded-full group-hover:bg-white  transition-all">
                    <img
                      src={LiftIcon}
                      alt="icon_img"
                      className={`w-[5.4rem]  h-auto`}
                    />
                  </div>
                  <h3 className="uppercase font-bold text-[20px] leading-snug">
                    Healthy nutrition <br />
                    plan
                  </h3>
                </div>
              </motion.div>
              {/* cta button */}
              <MainButton
                color={`!text-white`}
                bg={`bg-[#3f3f3f]`}
                cN="about-cta"
                arrowColor={`!text-white`}
                hover={`hover:bg-[#FF0336]`}
                text="take a tour"
                goTo="/classes"
              />
            </div>
            {/* img side */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                duration: 1.9,
                delay: 0.6,
              }}
              className="relative md1000:hidden"
            >
              <img
                src={GirlRunning}
                alt="girl_running"
                className="girl-running"
              />
              <img src={GirlRedBg} alt="bg-red" className="girl-bg" />
              <img src={GirlText} alt="bg-text" className="girl-text" />
              <img src={GirlWind} alt="bg-wind" className="girl-wind" />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
