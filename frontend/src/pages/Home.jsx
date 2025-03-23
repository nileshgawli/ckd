import React from "react";
import heroImage01 from "../assets/images/heroImg01.jpeg";
import heroImage02 from "../assets/images/heroImg02.jpeg";
// import heroImage03 from "../assets/images/heroImg03.jpeg";
import heroImage04 from "../assets/images/heroImg04.jpeg";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import featureimg from "../assets/images/heroImg05.jpeg";
import faqImg from "../assets/images/faq-img.png";
import videoIcon from "../assets/images/video-icon.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";
import ServiceList from "../components/Services/ServiceList";
import DoctorList from "../components/Doctors/DoctorList";
import FaqList from "../components/Faq/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {
  const navigate = useNavigate(); // Get the navigate function from useNavigate
  const bookAppointment = async () => {
    toast.success("Find your Doctor");
    navigate("/doctors"); // Redirect to the /doctors route
  };
  return (
    <>
      {/* ========== Hero Section ========== */}
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* ========== Hero Content ========== */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[45px] md:leading-[70px]">
                A Smarter Way to Health Empowering patients to live healthier, longer lives.
                </h1>
                <p className="text__para">
                We’ve built a healthcare platform designed to help diagnose, treat, and manage seven major diseases. Our goal is to improve patients' quality of life with accurate insights, personalized treatment plans, and continuous support.
                </p>
                <button onClick={bookAppointment} className="btn">
                  Request an Appointment
                </button>
              </div>
              {/* ========== Hero Counter */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Years of Experience</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Clinic Location</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Patient Satisfaction</p>
                </div>
              </div>
            </div>
            {/* ========== Hero Content ========== */}

            <div className="flex gap-[30px] justify-end">
              <div>
                <img src={heroImage01} className="w-full rounded-md  " alt="" />
              </div>
              <div className="mt-[30px]">
                <img src={heroImage02} className="w-full rounded-md   mb-[30px]" alt="" />
                <img src={heroImage04} className="w-full rounded-md  " alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ========== Hero Section End ========== */}

      {/* ========== About Section ========== */}
      <About />
      {/* ========== About Section end ========== */}

      {/* ========== Services Section ========== */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our medical services</h2>
            <p className="text__para text-center">
              World-class care for everyone. Our health system offers
              unmathched, expert health care.
            </p>
          </div>
          <ServiceList />
        </div>
      </section>
      {/* ========== Services Section end ========== */}

      {/* ========== Feature Section ========== */}
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            {/* ========== Feature Content ========== */}
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Get Virtual treatment <br />
                anytime
              </h2>
              <ul className="pl-4">
                <li className="text__para">
                  1. Schedule the appointment directly.
                </li>
                <li className="text__para">
                  2. Search for your physicians here and conatc their office.{" "}
                </li>
                <li className="text__para">
                  3. Schedule the appointment directly.
                </li>
              </ul>
              <Link to="/">
                <button className="btn">Learn More</button>
              </Link>
            </div>

            {/* ========== Feature Image ========== */}
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={heroImage04} className="w-3/4" alt="" />

              <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] roundeed-[10px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                      Tue, 24
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">
                      10:00AM
                    </p>
                  </div>
                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                    <img src={videoIcon} alt="" />
                  </span>
                </div>

                <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
                  Consultation
                </div>
                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img src={avatarIcon} alt="" />
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
                    Abdul Wahab
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ========== Feature Section end ========== */}

      {/* ========== Our Great Doctors Section ========== */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our greate doctors</h2>
            <p className="text__para text-center">
              World-class care for everyone. Our health system offers
              unmathched, expert health care.
            </p>
          </div>
          <DoctorList />
        </div>
      </section>
      {/* ========== Our Great Doctors Section end ========== */}

      {/* ========== Faqs Section ========== */}
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={featureimg} alt="" className="w-[600px]" />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="heading">
                Most questions asked by our beloved customers
              </h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>
      {/* ========== Faqs Section end ========== */}

      {/* ========== Testimonial Section ========== */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What our patients say</h2>
            <p className="text__para text-center">
              World-class care for everyone. Our health system offers
              unmathched, expert health care.
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
      {/* ========== Testimonial Section end ========== */}
    </>
  );
};

export default Home;
