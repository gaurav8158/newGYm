import TitleRed from "../../images/who-we-are/title-bg.svg";
import BgText from "../../images/pricing/bg-text.png";
import BgDumbell from "../../images/pricing/bg-dumbell.png";
import PricingBox from "./PricingBox";

import Img1 from "../../images/gallery/pic-1.avif";
import Img2 from "../../images/gallery/pic-2.avif";
import Img3 from "../../images/pricing/img2.jpg";
import { motion } from "framer-motion";
function Pricing() {
  return (
    <>
      <section id="pricing" className=" bg-[#151515] relative">
        <div className="container page-padding py-[12rem] ">
          <img src={BgText} className="left-0 absolute" alt="bg_img" />
          {/* title div -- */}
          <div className="flex flex-col text-center relative items-center">
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
              PRICING CHART
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
              className="text-[3.4rem] text-white font-bold mb-4"
            >
              Exclusive Pricing Plan
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
              className="text-[#646464] font-medium text-[15px] "
            >
              Gymat an unknown printer took a galley of type and scrambled
              <br /> make a type specimen book.
            </motion.p>
          </div>
          {/* pricing boxes */}
          <div className="flex gap-10 mt-32 relative z-[2] md1000:flex-col md1000:items-center ">
            <PricingBox img={Img1} price="1000" tag="Beginners" />
            <PricingBox img={Img2} price="1500" tag="Pro" />
            <PricingBox img={Img3} price="2000" tag="Premium"/>
          </div>
          <img
            src={BgDumbell}
            alt="bg_icon"
            className="right-0 bottom-0 absolute z-[1]"
          />
        </div>
      </section>
    </>
  );
}

export default Pricing;
