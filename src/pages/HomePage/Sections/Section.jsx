import homeicon from "../../../assets/png/homePageBackground.png";
import homePageImage1 from "../../../assets/images/homePageImage1.jpeg";
import homePageBottomImage from "../../../assets/images/homePageBottomImage.jpeg";
const Section = () => {
  return (
    <div
      className="relative flex justify-center items-center flex-col w-full min-h-full bg-[#080719] text-white overflow-hidden"
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
        <div className="flex justify-center h-[43px] border mt-[24px]">
          <button>Get started</button>
          <button>Lern more</button>
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

      <h3 className="mt-[38px] max-w-[339px] font-medium text-lg text-white z-20 text-center">
        Trusted by the best brands around the world
      </h3>

      <div className="w-[500px] bg-violet-600 h-[28px] mt-[24px]">
        some animation
      </div>
    </div>
  );
};

export default Section;
