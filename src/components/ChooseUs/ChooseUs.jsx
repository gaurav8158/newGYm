import VideoImg from "../../images/choose-us/main-img.png";
import TitleRed from "../../images/who-we-are/title-bg.svg";
import TrainingIcon from "../../images/choose-us/training.png";
import EquipmentsIcon from "../../images/choose-us/bench-press.png";
import BagIcon from "../../images/choose-us/gym-bag.png";
import BottleIcon from "../../images/choose-us/bottle-of-water.png";
import PlayImg from "../../images/choose-us/play.png";
import MainButton from "../MainButton";
import { motion } from "framer-motion";
function ChooseUs() {
  return (
    <>
      <section className=" bg-[#151515]  py-[12rem] ">
        <div className="container page-padding flex flex-row md1000:flex-col md1000:items-center gap-[7rem]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              duration: 1.9,
              delay: 0.6,
            }}
            className="video-div relative w-[50%] md1000:w-[85%] md1000:flex md1000:justify-center"
          >
            <img
              src={VideoImg}
              alt="video_img"
              className="relative w-[94%] h-auto"
            />
            {/* <img
              src={PlayImg}
              alt="play_img"
              className="absolute w-[2.4rem] top-[42%] left-[44%] z-10 cursor-pointer min450:left-[47%] min450:top-[44%] "
            />
            <span className="bg-white cursor-pointer p-14 absolute rounded-full top-[38.7%] left-[39.9%]"></span> */}
          </motion.div>

          <div className="relative w-[50%] md1000:flex md1000:flex-col md1000:items-center md1000:text-center md1000:w-[85%]">
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                duration: 1.9,
                delay: 0.6,
              }}
              className="text-3xl text-[#FF0336] mb-4 font-medium"
            >
              WHY CHOOSE US
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                duration: 1.9,
                delay: 0.7,
              }}
              className="text-start text-[3.6rem] text-white font-bold leading-[1.2] max-w-3xl md1000:max-w-full"
            >
              We Can Give A Shape Of{" "}
              <span className="text-[#FF0336]">Your Body </span>Here!
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                duration: 1.9,
                delay: 0.8,
              }}
              className="text-start text-[16.5px] text-[#b4b4b4] mt-7 max-w-3xl md1000:max-w-full"
            >
              At <b>The Power Squad Gym</b>, we are dedicated to helping you
              achieve the body of your dreams. Our expert trainers and
              nutritionists will work with you to create a personalized fitness
              and nutrition plan that helps you reach your specific goals.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                duration: 1.9,
                delay: 0.8,
              }}
              className="grid grid-cols-2 grid-rows-2 gap-14  max-w-[44rem]  mt-14 min450:flex min450:flex-col"
            >
              <div className="flex items-center gap-6">
                <img
                  className="bg-[#2b2b2b] hover:bg-[#ff0336] ease-in duration-200 w-[6.5rem] rounded-full p-4"
                  src={TrainingIcon}
                  alt="icon"
                />
                <p className="text-white font-bold text-[18px] max-w-[150px]">
                  Free Fitness Training
                </p>
              </div>

              <div className="flex items-center gap-6">
                <img
                  className="bg-[#2b2b2b] hover:bg-[#ff0336] ease-in duration-200 w-[6.5rem] rounded-full p-4"
                  src={EquipmentsIcon}
                  alt="icon"
                />
                <p className="text-white font-bold text-[18px] max-w-[150px]">
                  Modern Gym Equipments
                </p>
              </div>

              <div className="flex items-center gap-6">
                <img
                  className="bg-[#2b2b2b] hover:bg-[#ff0336] ease-in duration-200 w-[6.5rem] rounded-full p-4"
                  src={BagIcon}
                  alt="icon"
                />
                <p className="text-white font-bold text-[18px] max-w-[150px]">
                  Gym Bag Equipments
                </p>
              </div>

              <div className="flex items-center gap-6">
                <img
                  className="bg-[#2b2b2b] hover:bg-[#ff0336] ease-in duration-200 w-[6.5rem] rounded-full p-4"
                  src={BottleIcon}
                  alt="icon"
                />
                <p className="text-white font-bold text-[18px] max-w-[150px]">
                  Fresh Bottle Watter
                </p>
              </div>
            </motion.div>
            {/* featured */}
            <MainButton
              color={`!text-white`}
              bg={`bg-[#595959]`}
              text="our classes"
              arrowColor={`!text-white`}
              cN="choose-cta"
              hover={`hover:bg-[#ff0336]`}
              // goTo="/classes"
              redirect={() =>
                document
                  .getElementById("featured")
                  .scrollIntoView({ behavior: "smooth" })
              }
            />
            {/* <motion.div
              onClick={() =>
                document
                  .getElementById("featured")
                  .scrollIntoView({ behavior: "smooth" })
              }
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                duration: 1.9,
                delay: 0.8,
              }}
              className={`text-[15px] cursor-pointer text-white   bg-[#595959] choose-cta text-center pt-[18px] font-[600] w-[20rem] h-[5.5rem] uppercase hero-cta relative ml-2 hover:bg-[#ff0336]`}
            >
              our classes &nbsp;
              <i className={`fa-solid fa-arrow-right  `}></i>
            </motion.div> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default ChooseUs;
