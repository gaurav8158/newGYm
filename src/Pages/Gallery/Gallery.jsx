import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { useEffect } from "react";

function Gallery() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="bg-[#151515]">
        <div className="login-banner  relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            Gallery
          </h1>
        </div>
        <div className="container  page-padding py-[10rem]">
          <Outlet />
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Gallery;
