import MainButton from "../MainButton";
import { motion } from "framer-motion";
function BlogBox({ img, title }) {
  return (
    <>
      <div className=" mx-auto p-10 rounded-2xl  shadow-gray-800 shadow-sm hover:shadow-gray-700">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            duration: 1.9,
            delay: 0.6,
          }}
        >
          <img src={img} alt="blog_img" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            duration: 1.9,
            delay: 0.7,
          }}
        >
          <p className="font-medium text-[14px] text-[#cfcccc] pt-8 pb-4">
            <i className="fa-solid fa-layer-group text-[#ff0336] text-[16px]"></i>
            &nbsp; By <b>Admin</b> | March 11, 2022 | Yoga
          </p>
          <h2 className="text-[3rem] font-bold mb-6 text-white">{title}</h2>
          <p className="font-medium text-[16px] text-[#cfcccc]  mb-24">
            Authoritatively disseminate multimedia based total linkage through
            market-driven methodolContinually transform integrated results
            vis-a-vis multidisciplinary manufacture Appropriately foster
            fullresearched innovation rather than backend supply. when an
            unknown printer took a galley.
          </p>
        </motion.div>
        <MainButton
          color={`!text-white`}
          bg={`bg-[#ff0336]`}
          text="Read now"
          arrowColor={`!text-white`}
          cN="pricing-cta blog-cta"
        />
      </div>
    </>
  );
}

export default BlogBox;
