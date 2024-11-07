import profileImage from "../../../assets/images/profileimage.jpeg";
import vector from "../../../assets/svg/vector.svg";
const SectionFive = () => {
  return (
    <div className="w-full flex-col flex items-center mt-20 text-white">
      <div>
        <h3 className="text-[#F5F5F5] text-[10px] w-fit rounded-full border px-[18px] py-[10px] shadow-8xl shadow-white z-10">
          {"Testimonials".toUpperCase()}
        </h3>
      </div>
      <div className="mt-2">
        <h3 className="text-[54px] text-center leading-[65px]">
          Hear what our customers
          <br /> have to say about us
        </h3>
      </div>
      <div className="mt-28">
        <div className="mt-5">
          <div className="w-[324px] h-[224px] p-5 bg-[#0E0E21] rounded-md">
            <div className="flex w-full items-center justify-between">
              <img
                src={profileImage}
                alt="profileImage"
                className="rounded-full h-10"
                width={40}
              />
              <div>
                <h2>Lilly jorge</h2>
                <p className="font-normal text-sm text-[#858892]">
                  CEO - Text Soulutions Inc.
                </p>
              </div>
              <div className="flex justify-center items-center shadow-9xl shadow-white w-8 h-8 rounded-full border border-[#3D96FF]">
                <img src={vector} alt="vector" />
              </div>
            </div>
            <div className="mt-4">
              <p className="font-normal text-[9px] text-[#BABCC6] leading-6">
                We were looking for a way to improve the security and
                transparency of our financial transactions. BlueBillionaire.ai
                developed a bespoke blockchain solution that has revolutionized
                our operations. We now experience faster transaction times,
                increased security, and enhanced trust with our partners.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <div className="w-[324px] h-[224px] p-5 bg-[#0E0E21] rounded-md">
            <div className="flex w-full items-center justify-between">
              <img
                src={profileImage}
                alt="profileImage"
                className="rounded-full h-10"
                width={40}
              />
              <div>
                <h2>Lilly jorge</h2>
                <p className="font-normal text-sm text-[#858892]">
                  CEO - Text Soulutions Inc.
                </p>
              </div>
              <div className="flex justify-center items-center shadow-9xl shadow-white w-8 h-8 rounded-full border border-[#3D96FF]">
                <img src={vector} alt="vector" />
              </div>
            </div>
            <div className="mt-4">
              <p className="font-normal text-[9px] text-[#BABCC6] leading-6">
                We were looking for a way to improve the security and
                transparency of our financial transactions. BlueBillionaire.ai
                developed a bespoke blockchain solution that has revolutionized
                our operations. We now experience faster transaction times,
                increased security, and enhanced trust with our partners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
