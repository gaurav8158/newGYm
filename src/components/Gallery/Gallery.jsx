import TitleRed from "../../images/who-we-are/title-bg.svg";
import BgIcon from "../../images/gallery/bg-icon.png";
import { motion } from "framer-motion";
function Gallery() {
  return (
    <>
      <section id="gallery" className="bg-[#151515] relative ">
        <img
          src={BgIcon}
          alt="bg_img"
          className="absolute top-[30px] right-0"
        />

        <div className="container page-padding py-[4rem]">
          {/* title div -- */}
          <div className="flex flex-col text-center relative items-center ">
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
              The Power Squad Gym GALLERY
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
              Our Workplace Gallery
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                duration: 1.9,
                delay: 0.7,
              }}
              className="text-[#d1cdcd]  font-medium text-[15px] "
            >
              Our Workplace Gallery features modern office, team collaboration,
              and fun culture.
              <br /> Attracts talents and showcases company's work atmosphere.
            </motion.p>
          </div>

          {/* gallery */}
          <div className="gallery-grid min540:flex  py-24  w-full h-auto relative ">
            <div
              className="hover:shadow-lg hover:scale-[99%]  transition-transform duration-300 ease-in-out"
              id="item-0"
            ></div>
            <div
              className="hover:shadow-lg  hover:scale-[99%] transition-transform duration-300 ease-in-out"
              id="item-1"
            ></div>
            <div
              className="hover:shadow-lg hover:scale-[99%] transition-transform duration-300 ease-in-out"
              id="item-2"
            ></div>
            <div
              className="hover:shadow-lg hover:scale-[99%] transition-transform duration-300 ease-in-out"
              id="item-3"
            ></div>
            <div
              className="hover:shadow-lg hover:scale-[99%] transition-transform duration-300 ease-in-out"
              id="item-4"
            ></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
