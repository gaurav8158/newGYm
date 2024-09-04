import { Link } from "react-router-dom";

function BlogBox({ date, title, description }) {
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "none",
    });
  };
  return (
    <>
      <div className="w-[37rem] min540:w-[100%] shadow-xl hover:shadow-2xl flex flex-col px-[3rem] py-[5rem]  border hover:border-[#FF0336] transition-transform ease-in-out rounded-xl ">
        {/* date */}
        <p className="text-[15px] font-bold text-[#878686] border-[#636262] border-solid rounded-full border-[1px] w-fit px-5 py-2 mb-6">
          {date}
        </p>
        {/* title */}
        <h3 className="text-[22px] font-bold py-5 text-white">{title}</h3>
        {/* desc */}
        <p className="text-[15px] text-[#7d7c7c] font-medium">{description}</p>
        {/* blog cta */}
        <Link
          to="/blog"
          onClick={goTop}
          className="text-[15px] uppercase font-bold mt-10 w-[16rem] h-[5rem] bg-[#FF0336] text-white text-center pt-[14px]"
        >
          Read more &nbsp; <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
    </>
  );
}

export default BlogBox;
