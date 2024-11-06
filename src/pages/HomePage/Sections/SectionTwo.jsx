import sectionTwoImageOne from "../../../assets/images/sectionTwoImageOne.png";
const SectionTwo = () => {
  return (
    <div className="mt-[120px] w-full h-full">
      <div className="flex h-full">
        <div className="w-1/2 h-full">
          <img src={sectionTwoImageOne} alt="" width={642} height={580} />
        </div>
        <div className="w-1/2 bg-red-500">
          <h3 className="text-[#F5F5F5] text-[10px] rounded-full border px-[18px] py-[10px] shadow-8xl shadow-white">
            {"About us".toUpperCase()}
          </h3>
          <p>
            At BlueBillionaire.ai, we are passionately committed to delivering
            premium website design and exceptional services that exemplify our
            dedication to quality and excellence.
          </p>
          <p>
            We recognize that every business is unique, and our approach is
            rooted in a deep understanding of your specific needs and
            challenges. By doing so, we provide customized solutions that not
            only meet your expectations but also drive measurable results that
            can significantly impact your bottom line.
          </p>
          <button></button>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default SectionTwo;
