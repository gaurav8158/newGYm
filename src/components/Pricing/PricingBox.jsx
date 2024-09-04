import MainButton from "../MainButton";

function PricingBox({ img, price, tag }) {
  return (
    <>
      <div className="flex flex-col w-1/3 md1000:w-[40rem] bg-[#0e0b0b] shadow-xl hover:shadow-2xl relative min540:w-[100%]">
        <div
          style={{ transition: "all 0.3s" }}
          className="relative grayscale hover:grayscale-0"
        >
          <img src={img} alt="pricing_img" className="w-full h-full" />
          <div className="absolute  bg-[#0e0b0b] border text-white text-[20px] font-bold w-[25rem] text-center py-6 hover:text-[#ff0336] -bottom-[18px] left-0 right-0 mx-auto">
            {tag}
          </div>
        </div>
        <div className="flex flex-col items-center pt-[20px] pb-[50px]">
          {/* price */}
          <p className="text-center text-[55px] font-bold relative py-[10px] ">
            <span className="text-[30px] text-[#e2dcdc] absolute font-normal top-8 -left-[3rem]">
            ₹
            </span>
            <span className="text-[#e2dcdc]"> {price}</span>
            <span className="text-[22px] text-[#e2dcdc] absolute font-normal bottom-[25px] -right-[6rem]">
              p/m
            </span>
          </p>
          {/* text */}
          <div className="flex text-[#e2dcdc] flex-col text-[16px] font-medium text-center gap-8  ">
            <p>Free Hand</p>
            <p>Gym Fitness</p>
            <p>Weight Loss</p>
            <p>Personal Trainer</p>
            <p>Cycling</p>
          </div>

          <MainButton
            color={`!text-white`}
            bg={`bg-[#ff0336]`}
            text="purchase now"
            arrowColor={`!text-white`}
            cN="pricing-cta"
            goTo="/contact"
          />
        </div>
      </div>
    </>
  );
}

export default PricingBox;
