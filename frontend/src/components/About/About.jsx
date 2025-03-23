import React from "react";
import heroImg03 from "../../assets/images/heroImg03.jpeg";
import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
            {/* ========== about image ========== */}

            <div className="relative w-3/4 lg:w-1/2 xl:w-[720px] z-10 order-2 lg:order-1">
              <img src={heroImg03} alt="" />
              
            </div>

            {/* ========== About Content ========== */}
            <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
              <h2 className="heading">Proud to be one of the nation best</h2>
              <p className="text__para">
              Ranked among the best, we specialize in tackling healthcare challenges with a comprehensive approach. From diagnosis to treatment, we provide expert care, personalized support, and innovative solutions to enhance patient health and well-being.
              </p>
              <p className="text__para mt-[30px]">
              We combine advanced medical care with a personal touch to enhance patient outcomes and quality of life. Our dedication to excellence fuels innovation, ensuring effective solutions for even the most complex conditions.
              </p>
              <Link to="/">
                <button className="btn">Learn more</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
