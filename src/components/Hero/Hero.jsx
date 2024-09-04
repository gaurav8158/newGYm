import { Link, useNavigate } from "react-router-dom";
import MainButton from "../MainButton";
import { motion } from "framer-motion";
import bgvideo from "../../images/hero/video.mp4";
import HeroSlider from "./HeroSlider";

function Hero() {
  const navigate = useNavigate();
  return (
    <section
      id="home"
      className=" w-full  h-[100vh] min800:flex min800:justify-center min800:text-center"
    >
      <HeroSlider />

      {/* <video
        className="absolute  bg-[#232a34] top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={bgvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <div className="container-hero ">
        <div className=" w-full flex-col gap-14 min620:gap-8  right-0 left-0  flex justify-center items-center max-w-[1200px] m-auto text-white h-full text-center absolute top-0 bottom-0 min620:px-4">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              duration: 1.9,
              delay: 0.6,
            }}
            className="text-8xl min620:text-6xl font-extrabold"
          >
            {" "}
            The future to build your best version
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              duration: 1.9,
              delay: 0.7,
            }}
            className="text-4xl  min620:text-3xl mb-4 max-w-[900px] "
          >
            {" "}
            Connecting your body with technology and science for results in
            record time
          </motion.p>
          <MainButton
            hover={`hover:bg-[#FF0336]`}
            color={`text-black`}
            bg={`bg-white`}
            text="free trial"
            goTo="/contact"
            arrowColor={`!text-black`}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
