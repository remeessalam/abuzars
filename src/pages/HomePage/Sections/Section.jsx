import homeicon from "../../../assets/png/homePageBackground.png";
import homePageImage1 from "../../../assets/images/homePageImage1.jpeg";
import homePageBottomImage from "../../../assets/images/homePageBottomImage.jpeg";
import Component from "../../../assets/svg/Component4.svg";
import Button from "../../../component/Button/Button";
const Section = () => {
  return (
    <div
      className="relative flex justify-center items-center flex-col md:w-[95%] lg:w-[80%] w-full mx-auto  min-h-full bg-[#080719] text-white overflow-hidden"
      // bg-top bg-[length:100%_570px]
    >
      <div className="absolute -top-[16%] w-full opacity-100 z-0 h-full">
        <img src={homeicon} alt="" className="w-full align-middle h-full" />
      </div>
      <div className="flex flex-col z-10 overflow-hidden">
        <div className="flex justify-center">
          <h3 className="text-[#F5F5F5] text-[10px] rounded-full border px-[18px] py-[10px] shadow-8xl shadow-white">
            {"Welcome to BlueBillionaire.ai".toUpperCase()}
          </h3>
        </div>
        <div className="flex justify-center">
          <h2 className="text-[54px] text-center leading-[65px]">
            Embarking on a Journey <br /> of Data-Driven <br /> Innovation
          </h2>
        </div>
        <div className="flex justify-center mt-[58px]">
          <p className="max-w-[718px] text-center text-sm text-[#BABCC6]">
            Where Data Meets Innovation: Empowering Your Business with Smart
            Insights <br /> Imagine a world where data transcends mere numbers
            to become the key that unlocks limitless possibilities.
            <br /> At BlueBillionaire.ai, we don’t just process data—we unleash
            its transformative power.
          </p>
        </div>
        <div className="flex justify-center h-[43px] gap-3 mt-[24px]">
          {/* <button>Get started</button>
          <button>Lern more</button> */}
          <Button buttonName={"Get started"} border={true} />
          <Button buttonName={"Learn more"} border={false} />
        </div>
      </div>
      <div className="flex flex-col items-center mt-[80px]  z-10">
        <div className="h-[365px] overflow-hidden w-[77.1%]">
          <img
            className="rounded-t-[82px] h-[420px] w-full"
            src={homePageImage1}
            alt="homePageImage1"
            // width={780}
            // height={520}
          />
        </div>
        <div className="bg-[#080719] h-[100px] " />
        {/* w-[780px] */}
        <img
          src={homePageBottomImage}
          alt="homePageBottomImage"
          //   className="w-[780px]"
        />
      </div>

      <h3 className="mt-[38px] z-10 max-w-[339px] font-medium text-lg text-white text-center">
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
