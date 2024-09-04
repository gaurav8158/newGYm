// import { useState } from "react";
// import { motion } from "framer-motion";

// const bmiData = [
//   { bmi: "Below 18.5", status: "Underweight" },
//   { bmi: "18.5 - 24.9", status: "Healthy" },
//   { bmi: "25.0 - 29.9", status: "Overweight" },
//   { bmi: "30.0 and Above", status: "Obese" },
// ];
// function BmiCalc() {
//   const [weight, setWeight] = useState(0);
//   const [height, setHeight] = useState(0);
//   const [bmi, setBmi] = useState("");
//   const [message, setMessage] = useState("");

//   let calcBmi = (e) => {
//     e.preventDefault();
//     if (weight === 0 || height === 0) {
//       alert("Please enter a valid weight and height");
//     } else {
//       let bmi = weight / ((height * height) / 10000);
//       setBmi(bmi.toFixed(1));

//       // logic for message
//       if (bmi < 20) {
//         setMessage("Underweight");
//       } else if (bmi >= 20 && bmi < 27) {
//         setMessage("Normal");
//       } else {
//         setMessage("Overweight");
//       }
//     }
//   };

//   return (
//     <>
//       <section className="bg-[#151515] py-[18rem]   relative">
//         <div className="container page-padding ">
//           <span className="w-full h-full absolute bg-transparent min620:bg-[#00000063] top-0 left-0"></span>
//           <div className="flex flex-row min800:flex-col">
//             <div className="flex-1 text-white w-[52rem] min620:w-[100%] relative">
//               <motion.p
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   type: "spring",
//                   duration: 1.9,
//                   delay: 0.6,
//                 }}
//                 className="text-3xl uppercase text-[#FF0336] font-medium"
//               >
//                 CHECK YOUR BODY
//               </motion.p>
//               <h2 className="text-[4rem] font-bold leading-[1.1] mb-8">
//                 Let's Calculate Your <span className="text-[#FF0336]">BMI</span>
//               </h2>
//               <p className="text-[16px] text-[#a1a1a1] min620:text-white">
//                 Easily determine your body mass index with our accurate
//                 calculation tool.
//               </p>
//               <div className="flex flex-col">
//                 <form className="flex w-full gap-6 h-[50px] mt-10 ">
//                   <input
//                     onChange={(e) => setWeight(e.target.value)}
//                     className="w-[50%] bg-transparent text-[14px] border-2 border-[#ffffff7d] pl-6  min450:text-black"
//                     type="text"
//                     placeholder="Weight / kg"
//                   ></input>
//                   <input
//                     onChange={(e) => setHeight(e.target.value)}
//                     className="w-[50%] bg-transparent text-[14px] border-2 border-[#ffffff7d] pl-6   min450:text-black"
//                     type="text"
//                     placeholder="Height / cm"
//                   ></input>
//                 </form>

//                 <p className="mt-10 gap-3 text-[16px] font-medium flex items-center w-full ">
//                   <span className="w-1/2">
//                     Your BMI is: &nbsp;
//                     <span className="text-[#ff0336]">{bmi}</span>
//                   </span>
//                   <span className="w-1/2">
//                     Your weight is: &nbsp;
//                     <span className="text-[#ff0336]">{message}</span>
//                   </span>
//                 </p>
//                 <button
//                   onClick={calcBmi}
//                   style={{ transition: "all 0.3s" }}
//                   type="submit"
//                   className="text-[15px] uppercase font-bold mt-10 bg-[#323232] w-[15rem] h-[5rem] hover:bg-[#FF0336]"
//                 >
//                   Calculate
//                 </button>
//               </div>
//             </div>

//             <div className="flex-1 container mx-auto p-4">
//               <div className="overflow-x-auto">
//                 <table className="min-w-full text-2xl text-white bg-gray-800 bg-opacity-[60%] border border-gray-200 shadow-lg">
//                   <thead className="bg-black ">
//                     <tr>
//                       <th className="w-1/2 px-6 py-6 border border-gray-600 text-left">
//                         BMI
//                       </th>
//                       <th className="w-1/2 px-6 py-6 border border-gray-600 text-left">
//                         Weight Status
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {bmiData.map((item, index) => (
//                       <tr
//                         key={index}
//                         className="  hover:bg-gray-100 transition duration-300 ease-in-out"
//                       >
//                         <td
//                           className={`px-6 py-6 border ${
//                             index % 2 !== 0
//                               ? "bg-gray-800 bg-opacity-[70%]"
//                               : ""
//                           }  border-gray-600`}
//                         >
//                           {item.bmi}
//                         </td>
//                         <td
//                           className={`px-6 py-6 border border-gray-600  ${
//                             index % 2 !== 0
//                               ? "bg-gray-800 bg-opacity-[70%]"
//                               : ""
//                           } `}
//                         >
//                           {item.status}
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default BmiCalc;

import React, { useState } from "react";
import bmipic from "../../images/bmi/gymbmi.png";
const BmiCalc = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("0.0");
  const [range, setRange] = useState("");

  const calculateBMI = () => {
    if (!height && !weight) {
      alert("Please select a height and weight");
      return;
    } else if (!height) {
      alert("Please select a height");
      return;
    } else if (!weight) {
      alert("Please select a weight");
      return;
    }
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(1));
    displayBMIRange(bmiValue);
  };

  const displayBMIRange = (bmiValue) => {
    if (bmiValue < 18.5) {
      setRange("Underweight!");
    } else if (bmiValue < 25) {
      setRange("Healthy!");
    } else if (bmiValue < 30) {
      setRange("Overweight!");
    } else {
      setRange("Obese!");
    }
  };

  const resetInputs = () => {
    setHeight("");
    setWeight("");
    setBmi("0.0");
    setRange("");
  };

  return (
    <section className=" bg-[#151515]  py-[12rem] ">
      <div className="container page-padding flex flex-row md1000:flex-col md1000:items-center gap-[7rem] min620:p-0 min620:m-0 ">
        <div className="relative w-[50%] md1000:flex md1000:flex-col md1000:items-center md1000:text-center md1000:w-[85%]">
          <div className="bg-white shadow-xl rounded-lg  w-full max-w-[480px]">
            <div className="text-center rounded-tl-lg rounded-tr-lg p-8 bg-[#FF0336]  mb-6">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4349/4349072.png"
                alt=""
                className="mx-auto w-28"
              />
              <h1 className="text-4xl font-bold text-white bg-[#FF0336] rounded-t-lg p-4">
                BMI Calculator for Adults
              </h1>
            </div>
            <div className="bg-white rounded-bl-lg rounded-br-lg p-10 pt-0">
              <div className="mb-10  flex gap-10 justify-center m-auto w-full">
                <div className="mb-4 flex-1 gap-4 flex max-w-[100px] flex-col-reverse mt-10">
                  <label
                    htmlFor="height"
                    className="block text-2xl font-medium "
                  >
                    Height (cm):
                  </label>
                  <input
                    type="text"
                    id="height"
                    value={height}
                    onChange={(e) =>
                      setHeight(e.target.value.replace(/[^0-9]/g, ""))
                    }
                    className="w-full p-2 border-b-2  text-6xl font-bold  border-[#FF0336] outline-none  text-[#FF0336]  text-center"
                  />
                </div>
                <div className="mb-4  gap-4  flex-1 flex max-w-[100px]  flex-col-reverse mt-10">
                  <label
                    htmlFor="weight"
                    className="block text-2xl font-medium text-black"
                  >
                    Weight (kg):
                  </label>
                  <input
                    type="text"
                    id="weight"
                    value={weight}
                    onChange={(e) =>
                      setWeight(e.target.value.replace(/[^0-9]/g, ""))
                    }
                    className="w-full p-2 border-b-2  text-6xl font-bold  border-[#FF0336] outline-none  text-[#FF0336]  text-center"
                  />
                </div>
              </div>
              <div className="flex justify-between gap-4 mb-6">
                <button
                  onClick={resetInputs}
                  className="bg-[#f6d1d8] flex-1 text-2xl text-[#FF0336] border-2 border-[#FF0336] px-4 py-4 rounded-lg transition-all font-semibold hover:bg-[#FF0336] hover:text-white"
                >
                  Reset
                </button>
                <button
                  onClick={calculateBMI}
                  className="bg-[#f6d1d8] flex-1 text-2xl text-[#FF0336] border-2 border-[#FF0336] px-4 py-4 rounded-lg font-semibold transition-all hover:bg-[#FF0336] hover:text-white"
                >
                  Calculate
                </button>
              </div>
              <div className="text-center mb-6">
                <p className="text-8xl p-8 text-[#FF0336] font-bold">{bmi}</p>
                <p className="text-gray-900 font-medium text-2xl">
                  {range || "Please enter your height and weight."}
                </p>
              </div>
              <div className="h-[2px] w-full mt-4 flex">
                <div className="w-[25%] h-full bg-[#544ade]" />
                <div className="w-[25%] h-full bg-[#5eef29]" />
                <div className="w-[25%] h-full bg-[#ebe777]" />
                <div className="w-[25%] h-full bg-[#de4a4a]" />
              </div>

              <div className="flex mt-5 justify-between text-center">
                <div>
                  <h5 className="text-[#FF0336] text-xl font-semibold">
                    Underweight
                  </h5>

                  <p className="text-lg font-medium">Below 18.5</p>
                </div>
                <div>
                  <h5 className="text-[#FF0336]  text-xl font-semibold">
                    Healthy
                  </h5>

                  <p className="text-lg font-medium">18.5 - 24.9</p>
                </div>
                <div>
                  <h5 className="text-[#FF0336]  text-xl font-semibold">
                    Overweight
                  </h5>

                  <p className="text-lg font-medium">25 - 29.9</p>
                </div>
                <div>
                  <h5 className="text-[#FF0336]  text-xl font-semibold">
                    Obese
                  </h5>

                  <p className="text-lg font-medium">30 and Above</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-[600px]  w-[50%] max-h-[800px] md1000:hidden md1000:flex-col md1000:items-center md1000:text-center md1000:w-[85%]">
          <img
            src={bmipic}
            alt="bmipic"
            className="w-full h-full object-cover"
          />
          {/* bmipic */}
        </div>
      </div>
    </section>
  );
};

export default BmiCalc;
