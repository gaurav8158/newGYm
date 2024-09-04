import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import SocialIcons from "../components/Footer/SocialIcons";

function Login() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    selectedClass: "",
    comment: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url =
      "https://script.google.com/macros/s/AKfycbwrVRSnU-bbZqWjdDQ54buNc2Z7Sh2i319FecA0exT5zKXvNE8xFD5rwdkXIfT-U1cc/exec";

    const formValues = {
      fullName: document.querySelector('input[name="fullName"]').value,
      email: document.querySelector('input[name="email"]').value,
      selectedClass: document.querySelector('select[name="selectedClass"]')
        .value,
      comment: document.querySelector('textarea[name="comment"]').value,
    };

    // Create a new FormData object
    const formData = new FormData();
    formData.append("fullName", formValues.fullName);
    formData.append("email", formValues.email);
    formData.append("selectedClass", formValues.selectedClass);
    formData.append("comment", formValues.comment);

    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData, // Send FormData object
      });

      // Read response as text
      const textResponse = await response.text();

      // Check if response text includes the success message
      if (textResponse.includes("Form submitted successfully!")) {
        alert("Form submitted successfully!");
        // Reset form (assuming form state is managed via React state)
        setFormData({
          fullName: "",
          email: "",
          selectedClass: "",
          comment: "",
        });
      } else {
        alert("Form submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      alert("There was an error submitting the form. Please try again.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="bg-[#151515]">
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            Contact Us
          </h1>
        </div>
        <div className="py-[12rem] page-padding grid grid-cols-2 container gap-10 items-center md1000:grid-cols-1">
          <div className="md1000:w-[60%] md1000:flex md1000:flex-col md1000:mx-auto min800:w-[90%] min620:w-full">
            <h2 className="text-white text-[36px] font-bold leading-[1.2]">
              We are here for help you! To Shape Your Body.
            </h2>
            <p className="text-[16px] w-[95%] text-[#c4c1c1] font-medium my-[40px]">
              At The Power Squad Gym, we are dedicated to helping you achieve
              the body of your dreams. Our expert trainers and nutritionists
              will work with you to create a personalized fitness and nutrition
              plan that helps you reach your specific goals.
            </p>
            <div className="grid grid-cols-2 grid-rows-2 gap-y-20 min620:grid-cols-1 min620:mx-auto">
              <div className="flex flex-col relative">
                <h3 className="text-[2rem] text-white font-bold mb-10">
                  New Delhi, INDIA
                </h3>
                <span className="bg-[#ff0336] w-[50px] h-[4px] absolute top-[33px]"></span>
                <p className="text-[15px] font-medium text-[#c4c1c1]">
                  ENTIRE UPPER FLOOR, C-30A, C-30B,
                  <br /> and, near JVTS GARDEN, Block C,
                  <br />
                  Chhatarpur Extension, New Delhi, Delhi 110074
                </p>
              </div>
              <div className="flex flex-col relative">
                <h3 className="text-[2rem] font-bold text-white mb-10">
                  Opening Hours
                </h3>
                <span className="bg-[#ff0336] w-[50px]  h-[4px] absolute top-[33px]"></span>
                <div className="text-[15px] font-medium text-[#c4c1c1]">
                  <p>Mon to Sat: 06:00am - 12:30pm(day)</p>
                  <p>04:00pm - 11:00pm(evening)</p>
                  <p>Sunday: 05:00pm - 10:00pm(evening)</p>
                </div>
              </div>
              <div className="flex flex-col relative">
                <h3 className="text-[2rem] font-bold mb-10 text-white">
                  Information
                </h3>
                <span className="bg-[#ff0336] w-[50px] h-[4px] absolute top-[33px]"></span>
                <div className="text-[15px] font-medium text-[#c4c1c1]">
                  <p>+91-7982566366, +91-9818081774</p>
                  <p>&nbsp;thepowersquadgym@gmail.com</p>
                </div>
              </div>
              <div className="flex flex-col relative">
                <h3 className="text-[2rem] font-bold mb-10 text-white">
                  Follow Us On
                </h3>
                <span className="bg-[#ff0336] w-[50px] h-[4px] absolute top-[33px]"></span>
                <SocialIcons />
              </div>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col pt-[30px] pr-[50px] pb-[50px] pl-[45px] bg-[#0a0909] relative md1000:w-[65%] md1000:flex md1000:flex-col md1000:mx-auto md1000:mt-14 min800:w-[90%] min620:w-full text-white"
          >
            <h3 className="text-[28px] font-bold mb-14">Leave Us Your Info</h3>
            <span className="bg-[#ff0336] w-[50px] h-[4px] absolute top-[77px]"></span>
            <input
              name="fullName"
              className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid bg-transparent border-[#e4e4e4] outline-none mb-8"
              placeholder="Full Name *"
              type="text"
              required
              value={formData.fullName}
              onChange={handleChange}
            />
            <input
              required
              name="email"
              className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid bg-transparent border-[#e4e4e4] outline-none mb-8"
              placeholder="Email Address *"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
            <select
              required
              name="selectedClass"
              className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid bg-transparent border-[#e4e4e4] outline-none mb-8"
              value={formData.selectedClass}
              onChange={handleChange}
            >
              <option className="bg-black" value="">
                Select Class
              </option>
              <option className="bg-black" value="Body Building">
                Body Building
              </option>
              <option className="bg-black" value="Boxing">
                Boxing
              </option>
              <option className="bg-black" value="Running">
                Running
              </option>
              <option className="bg-black" value="Fitness">
                Fitness
              </option>
              <option className="bg-black" value="Yoga">
                Yoga
              </option>
              <option className="bg-black" value="Workout">
                Workout
              </option>
              <option className="bg-black" value="Katate">
                Zumba
              </option>
              <option className="bg-black" value="Meditation">
                Meditation
              </option>
              <option className="bg-black" value="Cycling">
                Cycling
              </option>
            </select>
            <textarea
              name="comment"
              placeholder="Comment"
              className="w-full py-[12px] px-[20px] bg-transparent h-[140px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
              value={formData.comment}
              onChange={handleChange}
            ></textarea>
            <button
              type="submit"
              className="text-white bg-[#ff0336] w-fit py-[15px] px-[30px] font-bold text-[14px] uppercase self-center mt-6"
            >
              submit now
            </button>
          </form>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.5855378256465!2d77.17569467491208!3d28.492025940448446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1e7e7e3749cf%3A0x4dd69edc0ca8437b!2sThe%20Power%20Squad%20Gym!5e0!3m2!1sen!2sin!4v1691331512453!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="pb-[14rem] md1000:pb-[8rem]"
        ></iframe>
      </section>
      <Footer />
    </>
  );
}

export default Login;
