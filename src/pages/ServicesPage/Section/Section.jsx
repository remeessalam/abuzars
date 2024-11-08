import homeicon from "../../../assets/png/homePageBackground.png";
import Button from "../../../component/Button/Button";
import servicesgameicon from "../../../assets/png/servicesgameicon.png";
import blockchain from "../../../assets/png/blockchain.png";
import ar from "../../../assets/png/ar.png";
import software from "../../../assets/png/software.png";
import sbc from "../../../assets/png/sbc.png";
import it from "../../../assets/png/it.png";
import consulting from "../../../assets/png/consulting.png";
import bottomimage from "../../../assets/images/homepagebottomimage.jpeg";
import Component from "../../../assets/svg/Component4.svg";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

const animation = { duration: 20000, easing: (t) => t };

const servicesDetails = [
  {
    icon: servicesgameicon,
    heading: "Game Development",
    paragraph:
      "Embark on a journey of unforgettable gaming experiences with BlueBillionaire.ai, where our expert team of game developers brings your visions to life. ",
  },
  {
    icon: blockchain,
    heading: "Blockchain lutions",
    paragraph:
      "At BlueBillionaire.ai, we provide cutting-edge blockchain development services that revolutionize the security.",
  },
  {
    icon: ar,
    heading: "Augmented Reality & Virtual Reality",
    paragraph:
      "Transform customer experiences with our cutting-edge AR/VR solutions.",
  },
  {
    icon: software,
    heading: "Custom Software Development",
    paragraph:
      "Embark on a journey of unforgettable gaming experiences with BlueBillionaire.ai, where our expert team of game developers brings your visions to life.",
  },
  {
    icon: it,
    heading: "IT Infrastructure Services",
    paragraph:
      "Embark on a journey of unforgettable gaming experiences with BlueBillionaire.ai, where our expert team of game developers brings your visions to life. ",
  },
  {
    icon: sbc,
    heading: "Cyber Security Solutions",
    paragraph:
      "Build a robust IT infrastructure that supports your growth ambitions. Our comprehensive services include strategic.",
  },
  {
    icon: consulting,
    heading: "Game Development",
    paragraph:
      "Embark on a journey of unforgettable gaming experiences with BlueBillionaire.ai, where our expert team of game developers brings your visions to life.",
  },
  {
    icon: servicesgameicon,
    heading: "Game Development",
    paragraph:
      "Embark on a journey of unforgettable gaming experiences with BlueBillionaire.ai, where our expert team of game developers brings your visions to life.",
  },
  {
    icon: consulting,
    heading: "IT Consultant & Services",
    paragraph:
      "Connect IT and Business for Unparalleled Success with Our Expert Consulting, Aligning IT Infrastructure with Business Goals.",
  },
];
const Section = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,

    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    slides: {
      perView: 7,
      spacing: 10,
    },
  });
  return (
    <>
      <div
        className="relative flex mt-44 z-0 h-[90vh] items-center bg-cover bg-center flex-col  w-screen mx-auto  min-h-full bg-[#080719] text-white overflow-hidden"
        style={{ backgroundImage: `url(${homeicon})` }}
      >
        <div className="flex flex-col z-10 overflow-hidden ">
          <div className="flex justify-center">
            <h3 className="text-[#F5F5F5] text-[10px] rounded-full border px-[18px] py-[10px] shadow-8xl shadow-white">
              {"our services".toUpperCase()}
            </h3>
          </div>
          <div className="flex justify-center mt-[10px]">
            <p className="max-w-[718px] sm:px-0 px-3 text-center text-sm text-[#BABCC6]">
              At AUTH AI SOLUTIONS, we are not just committed to driving growth;
              we also cultivate a culture of continuous learning and innovation
              within our team. Our passionate engineers and data scientists are
              encouraged to explore new ideas, push boundaries, and embrace the
              latest advancements in AI technology.
            </p>
          </div>
          <div className="flex justify-center h-[43px] gap-3 mt-[24px]">
            <Button buttonName={"Get started"} border={true} />
            <Button buttonName={"Learn more"} border={false} />
          </div>
        </div>
      </div>
      <div className="flex text-white gap-5 relative -top-[45vh] flex-wrap justify-center mt-20 ">
        {servicesDetails.map((ser, indx) => (
          <div
            key={indx}
            className="flex flex-col bg-[#091828d1] items-center max-w-[317px] p-6 rounded-xl"
          >
            <img
              src={ser.icon}
              alt="servicesgameicon"
              className="w-[62px] h-[62px]"
            />
            <h3 className="font-medium text-[28px] text-center leading-8">
              {ser.heading}
            </h3>
            <p className="font-normal text-center text-base text-[#B5B3B3]">
              {ser.paragraph}
            </p>
            <button className="bg-button-gradient text-lg font-medium px-6 py-1 rounded-3xl mt-6">
              Learn More
            </button>
          </div>
        ))}
        <div className="flex items-center flex-col mt-20 text-center">
          <img src={bottomimage} alt="bottomimage" />
          <h4 className="text-white w-80">
            Trusted by the best brands around the world
          </h4>
        </div>

        <div ref={sliderRef} className="relative flex  mt-[24px] keen-slider">
          <div className="absolute top-0 left-0 w-28 h-full bg-gradient-to-r from-[#080719] to-transparent pointer-events-none z-10"></div>

          {[...Array(10)].map((_, idx) => (
            <div key={idx} className="keen-slider__slide">
              <img src={Component} alt={`Slide ${idx + 1} h-[28px]`} />
            </div>
          ))}
          <div className="absolute top-0 right-0 w-28 h-full bg-gradient-to-l from-[#080719] to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
    </>
  );
};

export default Section;
