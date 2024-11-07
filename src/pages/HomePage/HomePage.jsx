import Section from "./Sections/Section";
import SectionFive from "./Sections/SectionFive";
import SectionFour from "./Sections/SectionFour";
import SectionSeven from "./Sections/SectionSeven";
import SectionSix from "./Sections/SectionSix";
// import SectionThree from "./Sections/SectionThree";
import SectionTwo from "./Sections/SectionTwo";
const HomePage = () => {
  return (
    <>
      <Section />;
      <SectionTwo />
      {/* <SectionThree /> */}
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
    </>
  );
};

export default HomePage;
