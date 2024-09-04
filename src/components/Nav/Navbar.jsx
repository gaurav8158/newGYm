import { useState } from "react";
import Logo from "../../images/logo/logo.svg";
import NavList from "../Nav/NavList";
import { Link } from "react-router-dom";
import LogoSide from "../../../public/homepage/newmainlogo.png";

function Navbar() {
  const [spin, setSpin] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [sidebar, setSideBar] = useState(false);
  const [hamburger, setHamburger] = useState(false);

  const joinSpin = () => {
    setSpin(true);
  };

  const stopSpin = () => {
    setSpin(false);
  };

  // sticky navbar - bg black
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  // logo
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // sidebar
  const sideBar = () => {
    setSideBar(!sidebar);
  };

  // hamburger menu
  const hamburgerMenu = () => {
    setHamburger(!hamburger);
  };

  return (
    <>
      <nav
        className={`flex  flex-row bg-transparent items-center justify-between py-6 px-12  fixed top-0 left-0 right-0 w-full z-50 ${
          sticky ? "shadow-xl !bg-black" : ""
        }`}
      >
        <Link onClick={() => window.top(0, 0)} to="/">
          <img
            src={LogoSide}
            alt="logo_img"
            onClick={goTop}
            className=" md1000:h-16  h-24 "
          />
        </Link>
        <div className="navlist-nav">
          <NavList />
        </div>
        <div className="flex items-center gap-10">
          <div className="flex gap-10">
            {/* mobile menu -------------- */}

            {/* hamburger menu */}
            <div
              className={`flex top-0 flex-col fixed w-full   h-screen bg-white z-[9999999999] py-[60px] px-[40px] ease-in-out duration-500  
                ${hamburger ? "left-0" : "-left-[100%]"} `}
            >
              <i
                onClick={hamburgerMenu}
                className="fa-solid fa-xmark text-[#ff0336] text-[3.3rem] cursor-pointer self-end"
              ></i>

              {/* links */}
              <ul className="text-center flex flex-col gap-10 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                <li onClick={hamburgerMenu}>
                  <a
                    onClick={() => window.top(0, 0)}
                    className="text-[2rem] uppercase font-medium hover:text-[#ff0336] ease-in duration-200"
                    href="/#home"
                  >
                    Home
                  </a>
                </li>
                <li onClick={hamburgerMenu}>
                  <Link
                    onClick={() => window.top(0, 0)}
                    className="text-[2rem] font-medium hover:text-[#ff0336] ease-in duration-200"
                    to="/about"
                  >
                    About
                  </Link>
                </li>

                <li onClick={hamburgerMenu}>
                  <Link
                    onClick={() => window.top(0, 0)}
                    className="text-[2rem] font-medium hover:text-[#ff0336] ease-in duration-200"
                    to="/gallery/page-1"
                  >
                    Gallery
                  </Link>
                </li>
                {/* <li onClick={hamburgerMenu}>
                  <Link
                    onClick={() => window.top(0, 0)}
                    className="text-[2rem] font-medium hover:text-[#ff0336] ease-in duration-200"
                    to="/blog"
                  >
                    Blog
                  </Link>
                </li> */}
                <li onClick={hamburgerMenu}>
                  <Link
                    onClick={() => window.top(0, 0)}
                    className="text-[2rem] font-medium hover:text-[#ff0336] ease-in duration-200"
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
                {/* <li onClick={hamburgerMenu}>
                  <Link
                    onClick={() => window.top(0, 0)}
                    className="text-[2rem] font-medium hover:text-[#ff0336] ease-in duration-200"
                    to="/pricing"
                  >
                    Pricing
                  </Link>
                </li> */}
                {/* <li onClick={hamburgerMenu}>
                  <Link
                    onClick={() => window.top(0, 0)}
                    className="text-[2rem] font-medium hover:text-[#ff0336] ease-in duration-200"
                    to="/classes"
                  >
                    Classes
                  </Link>
                </li> */}
              </ul>
            </div>

            {/* hamburger */}
            <i
              onClick={hamburgerMenu}
              className="fa-bars fa-solid hidden text-white text-4xl cursor-pointer hover:text-[#FF0336] ease-in duration-200"
            ></i>
            {/* account */}
            {/* <Link onClick={goTop} to="/signup" title="signup_button">
              <i className="fa-regular fa-user  text-white text-4xl cursor-pointer hover:text-[#FF0336] ease-in duration-200"></i>
            </Link> */}
          </div>
          {/* spin box */}
          <div className="border-[rgb(255,255,255,0.3)] border-solid border-2  p-2 rounded-md min620:hidden">
            <Link
              onClick={goTop}
              to={"/contact"}
              onMouseEnter={joinSpin}
              onMouseLeave={stopSpin}
              className="flex items-center "
            >
              <i
                className={`fa-solid fa-plus bg-[#FF0336] text-white text-2xl py-3 px-4 rounded-md ${
                  spin ? "nav-btn-hover" : ""
                }`}
              ></i>
              <h3 className="text-white text-[14px] font-bold uppercase ml-4 mr-8 tracking-wider">
                join now
              </h3>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
