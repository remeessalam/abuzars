import userimage from "../../../assets/images/userimage.jpeg";
import userimage2 from "../../../assets/images/userimage2.jpeg";
import linkedinvector from "../../../assets/svg/linkedinvector.svg";
const SectionThree = () => {
  return (
    <div className="flex items-center flex-col text-white mt-12">
      <div>
        <h3 className="text-[#F5F5F5] text-[10px] w-fit rounded-full border px-[18px] py-[10px] shadow-8xl shadow-white z-10">
          {"our team".toUpperCase()}
        </h3>
      </div>
      <div>
        <h2 className="text-[38px] text-center leading-[45px] mt-4 font-extrabold">
          Meet the team
          <br /> behind
          <span className="text-[#F1D578]"> BlueBillionaire.ai</span>
        </h2>
      </div>
      <div className="flex md:flex-row flex-col gap-5 mt-12">
        <div className="bg-aboutas-gradient w-[300px] sm:w-[370px]">
          <img
            src={userimage}
            alt="userimage"
            className="w-[300px] sm:w-[370px]"
          />
          <div className="flex flex-col px-5 items-center py-3">
            <h3 className="flex w-full gap-3 justify-center items-center text-[#F1D578]  font-bold text-xl">
              Mohammed Abuzar Ahmed
              <span className="w-8 h-8 flex justify-center items-center">
                <img src={linkedinvector} alt="" />
              </span>
            </h3>
            <p>
              Ceo/Chairman/Founder of <br />
              BlueBillionaire.ai
            </p>
          </div>
        </div>
        <div className="bg-aboutas-gradient w-[300px] sm:w-[370px]">
          <img
            src={userimage2}
            alt="userimage"
            className="w-[300px] sm:w-[370px]"
          />
          <div className="flex flex-col px-5 items-center py-3">
            <h3 className="flex w-full gap-3 justify-center items-center text-[#F1D578]  font-bold text-xl">
              Mohammed Sohail
              <span>
                <img src={linkedinvector} alt="" />
              </span>
            </h3>
            <p className="text-center text-2xl font-bold">
              Legal Head of <br />
              BlueBillionaire.ai
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
