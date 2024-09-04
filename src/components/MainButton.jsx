import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function MainButton({
  color,
  redirect,
  bg,
  cN,
  arrowColor,
  hover,
  text,
  goTo,
}) {
  const goTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <Link  to={goTo}>
   
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        duration: 1.9,
        delay: 0.8,
      }}
      onClick={redirect ? redirect : goTop}
     
      className={`text-[15px] cursor-pointer  ${color} ${bg} ${cN} text-center pt-[18px] font-[600] w-[20rem] h-[5.5rem] uppercase hero-cta relative ml-2 ${hover} `}
    >
      {text} &nbsp;
      <i className={`fa-solid fa-arrow-right text-[#FF0336] ${arrowColor}`}></i>
    </motion.div>
    </Link>
  );
}

export default MainButton;
