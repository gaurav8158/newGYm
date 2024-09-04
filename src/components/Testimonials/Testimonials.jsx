import TestimonialImg from "../../images/testimonials/testimonial-new.jpg";
import TitleBg from "../../images/pricing/titlebg.svg";
import Logo1 from "../../images/testimonials/logo1.png";
import Logo2 from "../../images/testimonials/logo2.png";
import Logo3 from "../../images/testimonials/logo3.png";
import Logo4 from "../../images/testimonials/logo4.png";
import Logo5 from "../../images/testimonials/logo5.png";
import testimonialimg from "../../images/gallery/img5.jpg";
import { useState } from "react";
import TestimonialBox from "./TestimonialBox";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

const data = [
  {
    id: 0,
    name: "Olivia Thompson",
    img: "https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

    text: "The Power Squad Gym is awesome! Clean facility, friendly staff, and great classes create a motivating atmosphere. It's perfect for fitness goals, though parking can be tight. Highly recommend for staying fit!",
  },
  {
    id: 1,
    img: TestimonialImg,
    name: "Tanya Sinclair",

    text: "The Power Squad Gym is the best! Incredible trainers, diverse equipment, and excellent classes. It's always clean and well-maintained, creating a motivating environment. Highly recommend it for achieving your fitness goals!",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "John Tarkpor",

    text: "I love The Power Squad Gym! The staff is friendly, and the facility is spotless. The variety of classes keeps workouts exciting. Parking is a bit tight, but the overall experience is worth it.",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg",
    name: "Sophia Martinez",

    text: "The Power Squad Gym offers everything! From cardio to weight training, they have top-notch equipment. Trainers are knowledgeable and supportive. The environment is motivating, making it ideal for fitness enthusiasts. Highly recommended!",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Ryan Patel",

    text: "The Power Squad Gym is awesome! The space is clean, equipment well-maintained, and classes challenging yet fun. Friendly trainers provide personalized guidance. It’s the perfect place to stay healthy and fit. Highly recommend!",
  },
];

function Testimonials() {
  const [card, setCard] = useState(0);
  const handleNext = () => {
    if (card === 4) return;
    setCard((prev) => prev + 1);
  };
  const handlePrev = () => {
    if (card === 0) return;
    setCard((prev) => prev - 1);
  };
  return (
    <>
      <section className="py-[10rem] bg-[#151515] mx-auto">
        <div className="container page-padding">
          <div className="text-center relative items-center w-full flex flex-col">
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                duration: 1.9,
                delay: 0.6,
              }}
              className="text-3xl uppercase text-[#FF0336] font-medium"
            >
              Testimonials
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                duration: 1.9,
                delay: 0.8,
              }}
              className="text-[3.6rem] text-white font-bold my-10"
            >
              Customer Love The Power Squad Gym
            </motion.h2>
          </div>

          <div className="border-[#efefef] mt-[17rem] md1000:mt-[9rem] bg-white border-solid border-[9px] min540:border-[0px] p-[30px] min540:p-[16px] min540:h-[48rem] min375:h-[60rem] ">
            <div className="bg-black overflow-x-clip w-full h-[33rem] relative">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  duration: 1.9,
                  delay: 0.6,
                }}
                className="absolute shadow-md bottom-0 -left-10 z-20 h-[46rem] w-[40rem] rounded-tr-[200px] md1000:hidden overflow-hidden"
              >
                <img alt="girl_img" src={data[card].img} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  duration: 1.9,
                  delay: 0.6,
                }}
                className="flex"
              >
                {/* text box */}
                <TestimonialBox
                  text={data[card].text}
                  name={data[card].name}
                  job={data[card].job}
                />
              </motion.div>

              <div className="flex gap-3 absolute bottom-[25px] right-[35px] z-20 min540:-bottom-[52px] min540:right-[17px]">
                <button
                  onClick={handlePrev}
                  title="left"
                  style={{ transition: "all 0.2s" }}
                  className="py-5 px-7 bg-white text-black text-2xl hover:bg-[#FF0336] hover:text-white"
                >
                  <i className="fa-solid fa-arrow-left"></i>
                </button>
                <button
                  onClick={handleNext}
                  title="right"
                  style={{ transition: "all 0.2s" }}
                  className="py-5 px-7 bg-white text-black text-2xl hover:bg-[#FF0336] hover:text-white"
                >
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* brand logos */}
        <div
          className="flex gap-5 justify-center mt-32 border-b border-solid border-[#64646438] pb-28 flex-wrap
        "
        >
          <img
            src={Logo1}
            alt="logo"
            className="scale-[.8] hover:invert"
            style={{ transition: "all 0.3s" }}
          />
          <img
            src={Logo2}
            alt="logo"
            className=" scale-[.8] hover:invert"
            style={{ transition: "all 0.3s" }}
          />
          <img
            src={Logo3}
            alt="logo"
            className=" scale-[.8] hover:invert"
            style={{ transition: "all 0.3s" }}
          />
          <img
            src={Logo4}
            alt="logo"
            className=" scale-[.8] hover:invert"
            style={{ transition: "all 0.3s" }}
          />
          <img
            src={Logo5}
            alt="logo"
            className=" scale-[.8] hover:invert"
            style={{ transition: "all 0.3s" }}
          />
        </div>
      </section>
    </>
  );
}

export default Testimonials;
