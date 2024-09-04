import TitleRed from "../../images/who-we-are/title-bg.svg";
import TrainerBox from "./TrainerBox";
import { motion } from "framer-motion";
function Trainers() {
  return (
    <>
      <section id="team" className="bg-[#0a0808] trainers-section">
        <div className="container page-padding py-[12rem]">
          {/* title div -- */}
          <div className="flex flex-col items-center text-center relative">
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
              gym trainers
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
              Team Of Expert Coaches
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
              className="text-[#c1bfbf] font-medium text-[15px] "
            >
              Expert team of coaches helps you succeed in any goal,
              <br /> personalized guidance and motivation provided!
            </motion.p>
          </div>

          {/* trainers div -- */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              duration: 1.9,
              delay: 0.9,
            }}
            className="flex mt-20 "
          >
            <TrainerBox />
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Trainers;
