import bg from "../../../assets/png/sectionfourbg.png";
const SectionFour = () => {
  return (
    <div className="w-full relative mt-40 h-[634px]">
      <div className="absloute top-0">
        <img src={bg} alt="Backgroun-Image" className="h-[354px]" />
      </div>
      <div className="absolute top-0 w-full text-white text-center mt-20">
        <div className="w-full flex justify-center flex-col text-center">
          <h3 className="text-2xl font-medium">
            The easiest way to
            <br /> power <br />
            up your business with AI
          </h3>
          <p className="text-sm font-normal text-[#BABCC6] max-w-[550px] mx-auto mt-5">
            Where Data Meets Innovation: Empowering Your Business with Smart
            Insights Imagine a world where data transcends mere numbers to
            become the key that unlocks limitless possibilities. At
            BlueBillionaire.ai, we don’t just process data—we unleash its
            transformative power.
          </p>
          <button className="mt-8">Get Started</button>
        </div>
      </div>
      <div className="w-full h-20 bg-[#121739]" />
    </div>
  );
};

export default SectionFour;
