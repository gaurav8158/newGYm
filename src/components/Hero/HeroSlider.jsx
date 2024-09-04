// import React from "react";
// import img1 from "../../../public/homepage/Slider/img1.jpg";
// import img2 from "../../../public/homepage/Slider/img4.jpg";
// import img3 from "../../../public/homepage/Slider/img5.jpg";
// import img4 from "../../../public/homepage/Slider/img6.jpg";
// import img5 from "../../../public/homepage/Slider/img7.jpg";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const HeroSlider = () => {
//   const settings = {
//     dots: false,
//     lazyLoad: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     initialSlide: 2,
//     autoplay: true,           // Enable autoplay
//     autoplaySpeed: 3000,
//   };
//   return (
//     <div className="slider-container">
//       <Slider {...settings} >
//         <div >
//           <img src={img1}  />
//         </div>
//         <div>
//           <img src={img2} />
//         </div>
//         <div>
//           <img src={img3} />
//         </div>
//         <div>
//           <img src={img4} />
//         </div>
//         <div>
//           <img src={img5} />
//         </div>
//       </Slider>
//     </div>
//   );
// };

// export default HeroSlider;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSlider = () => {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full ">
      <Slider {...settings}>
      
        <div>
          <img
            src="/homepage/Slider/img6.jpg"
            alt="Slide 2"
            className="w-full h-full min-h-screen object-cover "
          />
        </div>
        <div>
          <img
            src="/homepage/Slider/img7.jpg"
            alt="Slide 1"
            className="w-full h-full min-h-screen object-cover "
          />
        </div>
        
        <div>
          <img
            src="/homepage/Slider/img4.jpg"
            alt="Slide 4"
            className="w-full h-full min-h-screen object-cover "
          />
        </div>
        <div>
          <img
            src="/homepage/Slider/img1.jpg"
            alt="Slide 3"
            className="w-full h-full min-h-screen  object-cover"
          />
        </div>
        <div>
          <img
            src="/homepage/Slider/img5.jpg"
            alt="Slide 5"
            className="w-full h-full min-h-screen object-cover "
          />
        </div>
      </Slider>
    </div>
  );
};

export default HeroSlider;
