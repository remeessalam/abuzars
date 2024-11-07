import homeicon from "../../../assets/png/homePageBackground.png";
import sectionthreeimageone from "../../../assets/images/sectionthreeimageone.gif";
import sectionthreeimagetwo from "../../../assets/images/sectionthreeimagetwo.jpeg";
import sectionthreeimagethree from "../../../assets/images/sectionthreeimagethree.png";
import cloud from "../../../assets/svg/cloud.svg";
import setting from "../../../assets/svg/setting.svg";
const SectionThree = () => {
  return (
    <div className="relative flex flex-col items-center text-white md:mt-[120px] mt-[60px]">
      <div className="absolute -top-[16%] w-full opacity-100 z-0 h-full">
        <img
          src={homeicon}
          alt="homeicon"
          className="w-full align-middle h-full"
        />
      </div>
      <div>
        <h3 className="text-[#F5F5F5] text-[10px] w-fit rounded-full border px-[18px] py-[10px] shadow-8xl shadow-white z-10">
          {"Our solution".toUpperCase()}
        </h3>
      </div>
      <div className="mt-3 z-10">
        <h2 className="text-[54px] text-center leading-[65px]">
          Meet Our process
        </h2>
      </div>
      <div className="mt-3 z-10">
        <p className="text-center text-sm text-[#BABCC6] max-w-[523px]">
          At BlueBillionaire.ai, we believe that our success is deeply
          intertwined with the effectiveness of our processes. Our streamlined
          approach ensures that your projects are executed with precision,
          efficiency, and a focus on delivering exceptional results.
        </p>
      </div>
      <div className="flex justify-center w-full">
        <div className="relative flex justify-center z-10 mt-[51px]  w-[90vw]">
          <img
            src={sectionthreeimageone}
            alt="AI image"
            className=" rounded-2xl w-[78%] h-[365px]"
          />
          <img
            src={sectionthreeimagetwo}
            alt="AI image"
            className="absolute -bottom-[75px] -left-[4.5rem] opacity-55 rounded-2xl w-[32%] h-[260px]"
          />
          <img
            src={sectionthreeimagethree}
            alt="AI image"
            className="absolute -right-[115px] top-12 opacity-70 rounded-2xl w-[40%] h-[190px]"
          />
        </div>
      </div>
      <div className="w-full flex flex-wrap gap-10 z-10 mt-28 justify-center">
        <div className="relative">
          <div>
            <img src={cloud} alt="cloud" />
            <h4 className="text-2xl font-medium mt-4">
              Understanding Your Needs
            </h4>
          </div>
          <p className="text-sm font-normal mt-2 text-[#BABCC6] max-w-[318px] pl-[18px]">
            They emphasize building strong partnerships and ensure open
            communication throughout the project lifecycle.
          </p>
          <div
            className="absolute hidden lg:block top-[5px] -left-7 h-[100px] w-[1px]"
            style={{
              backgroundImage:
                "linear-gradient(0deg, rgba(0,0,0,0.6937368697478992) 0%, rgba(255,255,255,0.929030987394958) 100%)",
            }}
          />
          <div
            className="absolute hidden lg:block top-[115px] -left-7 h-[45px] w-[1px]"
            style={{
              backgroundImage:
                "linear-gradient(0deg, rgba(0,0,0,0.6937368697478992) 0%, rgba(255,255,255,0.929030987394958) 100%)",
            }}
          />
        </div>

        <div className="relative ">
          <div>
            <img src={setting} alt="setting" />
            <h4 className="text-2xl font-medium mt-4">
              Data Acquisition and Analysis
            </h4>
          </div>
          <p className="text-sm font-normal mt-2 text-[#BABCC6] max-w-[318px] pl-[18px]">
            Their AI expertise focuses on analyzing unstructured data to
            generate actionable insights
          </p>
          <div
            className="absolute hidden lg:block top-[5px] -left-7 h-[100px] w-[1px]"
            style={{
              backgroundImage:
                "linear-gradient(0deg, rgba(0,0,0,0.6937368697478992) 0%, rgba(255,255,255,0.929030987394958) 100%)",
            }}
          />
          <div
            className="absolute hidden lg:block top-[115px] -left-7 h-[45px] w-[1px]"
            style={{
              backgroundImage:
                "linear-gradient(0deg, rgba(0,0,0,0.6937368697478992) 0%, rgba(255,255,255,0.929030987394958) 100%)",
            }}
          />
        </div>

        <div className="relative">
          <div>
            <img src={cloud} alt="cloud" />
            <h4 className="text-2xl font-medium mt-4">
              Customized Solution Development
            </h4>
          </div>
          <p className="text-sm font-normal mt-2 text-[#BABCC6] max-w-[318px] pl-[18px]">
            Based on Client needs, we recommend a solution from their service
            offerings from our Wide Range of Services
          </p>
          <div
            className="absolute hidden lg:block top-[5px] -left-7 h-[100px] w-[1px]"
            style={{
              backgroundImage:
                "linear-gradient(0deg, rgba(0,0,0,0.6937368697478992) 0%, rgba(255,255,255,0.929030987394958) 100%)",
            }}
          />
          <div
            className="absolute hidden lg:block top-[115px] -left-7 h-[45px] w-[1px]"
            style={{
              backgroundImage:
                "linear-gradient(0deg, rgba(0,0,0,0.6937368697478992) 0%, rgba(255,255,255,0.929030987394958) 100%)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionThree;