import ReactPlayer from "react-player";
import video from "../../../assets/video/sectionsevenvideo.mp4";
const SectionSix = () => {
  return (
    <div
      className={`flex flex-col items-center mt-20 md:w-[95%] lg:w-[80%] w-full mx-auto `}
    >
      <h2 className="font-medium text-[44px] text-[#E8BA20] text-center">
        Embarking on a Journey of Data-Driven Innovation
      </h2>
      <div className="w-[70%] mt-2">
        <ReactPlayer
          url={video}
          loop={true}
          playsinline
          playing={true}
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default SectionSix;
