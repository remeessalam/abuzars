import homeicon from "../../../assets/images/aboutpagesectiononebg.jpeg";
import Component from "../../../assets/svg/Component4.svg";
import Button from "../../../component/Button/Button";
const Section = () => {
  return (
    <div
      className="relative flex justify-center items-center flex-col  min-h-full bg-[#080719] text-white overflow-hidden md:w-[95%] lg:w-[80%] w-full mx-auto"
      // bg-top bg-[length:100%_570px]
    >
      <div className="absolute -top-[16%] w-screen opacity-100 z-0 h-[545px]">
        <img src={homeicon} alt="" className="w-screen align-middle h-full" />
      </div>
      <div className="flex flex-col z-10 overflow-hidden">
        <div className="flex justify-center">
          <h3 className="text-[#F5F5F5] text-[10px] rounded-full border px-[18px] py-[10px] shadow-8xl shadow-white">
            {"About us".toUpperCase()}
          </h3>
        </div>
        <div className="flex justify-center">
          <h2 className="text-[35px] mt-10 md:mt-0 md:text-[54px] text-center leading-[30px] max-w-[90%] sm:max-w-[70%] md:leading-[65px]">
            Revolutionizing Industries, One Data-Driven Solution at a Time
          </h2>
        </div>
        <div className="flex justify-center mt-[10px]">
          <p className="max-w-[718px] text-center text-sm text-[#BABCC6]">
            BlueBillionaire.ai is a leading innovator in AI and data-driven
            business solutions, empowering companies to thrive in the digital
            era. We specialize in crafting tailored, transformative strategies
            that ensure our clients stay ahead of the curve.
          </p>
        </div>
        <div className="flex justify-center h-[43px] gap-3 mt-[24px]">
          <Button buttonName={"Join us"} border={true} />
          <Button buttonName={"Learn more"} border={false} />
        </div>
      </div>

      <h3 className="mt-[175px] z-10 max-w-[399px] font-medium text-lg text-white text-center">
        Trusted by the best brands around the world
      </h3>

      <div className="flex gap-3  h-[28px] mt-[24px]">
        <img src={Component} alt="" />
        <img src={Component} alt="" />
        <img src={Component} alt="" />
        <img src={Component} alt="" />
        <img src={Component} alt="" />
        <img src={Component} alt="" />
      </div>
    </div>
  );
};

export default Section;
