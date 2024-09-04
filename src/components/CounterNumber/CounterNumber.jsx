import React from "react";
import Counter from "./Counter";
import { motion } from "framer-motion";
const CounterNumber = () => {
  return (
    <div className=" count-info-box-home py-60  min450:py-24 ">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          duration: 1.9,
          delay: 0.6,
        }}
        className="mx-auto max-w-8xl px-8  md1000:px-6 "
      >
        <div className="mx-auto max-w-[1200px] ">
          <div className="text-center space-y-8">
            <p className="text-3xl text-[#FF0336] mb-4 font-medium">
              INFORMATION ABOUT US
            </p>
            <h2 className=" font-bold tracking-tight text-white text-[30px] md1000:text-[16px]">
              Discover who we are, what we stand for, and how we help you
              achieve your fitness goals at The Power Squad Gym.
            </h2>
          </div>
          <dl className="mt-16 grid  gap-0.5 overflow-hidden rounded-2xl text-center grid-cols-4  min540:grid-cols-1 min800:grid-cols-2 ">
            <div className="flex gap-10 flex-col bg-white/5 p-14">
              <Counter counttill={8} />
              <dt className="text-xl font-semibold leading-6 text-gray-300">
                MONTHS OF EXPERIENCED
              </dt>
            </div>
            <div className="flex flex-col gap-10 bg-white/5 p-14">
              <Counter counttill={10} />
              <dt className="text-xl font-semibold leading-6 text-gray-300">
                FITNESS TRAINERS
              </dt>
            </div>
            <div className="flex flex-col gap-10 bg-white/5 p-14">
              <Counter counttill={100} />
              <dt className="text-xl font-semibold leading-6 text-gray-300">
                BEST EQUIPMENTS
              </dt>
            </div>
            <div className="flex flex-col gap-10 bg-white/5 p-14">
              <Counter counttill={1000} />
              <dt className="text-xl font-semibold leading-6 text-gray-300">
                SATISFIED CLIENTS
              </dt>
            </div>
          </dl>
        </div>
      </motion.div>
    </div>
  );
};

export default CounterNumber;
