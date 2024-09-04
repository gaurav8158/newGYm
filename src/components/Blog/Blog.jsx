import TitleRed from "../../images/who-we-are/title-bg.svg";
import BlogBox from "./BlogBox";
import { motion } from "framer-motion";
function Blog() {
  return (
    <>
      <section id="blog" className="bg-[#151515] ">
        <div className="container page-padding py-[10rem]">
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
              latest blog
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
            className="text-[3.4rem] font-bold mb-4 text-white">Our Recent News</motion.h2>
           <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                duration: 1.9,
                delay: 0.8,
              }} className="text-[#646464] font-medium text-[15px] ">
              Gymat an unknown printer took a galley of type and scrambled
              <br /> make a type specimen book.
              </motion.p>
          </div>

          {/* blog boxes */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              duration: 1.9,
              delay: 0.8,
            }} 
          className="flex gap-6 w-full mt-[5rem] md1200:justify-center flex-wrap">
            <BlogBox
              bgClass="box1Bg"
              date="12.05.2024"
              title="Yoga and meditation For Everyone in 2024"
              description="This is program designed to make the practice of yoga beneficial for people of all ages, abilities, and backgrounds. "
            />
            <BlogBox
              bgClass="box2Bg"
              date="13.04.2024"
              title="Getting Back Into CrossFit After Vacation"
              description="Learn how to ease back into your CrossFit routine after a vacation with tips and strategies for success."
            />
            <BlogBox
              bgClass="box3Bg"
              date="28.04.2024"
              title="Meet Fitness Ambassador Grace"
              description="Get to know Grace, a fitness enthusiast and dedicated ambassador who is passionate about helping others reach their fitness goals."
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Blog;
