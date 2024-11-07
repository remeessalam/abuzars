import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const AppLayout = () => {
  return (
    <>
      <div className="flex flex-col justify-center  relative ">
        <Header />
        <div className="relative top-28 left-0">
          <div className="md:w-[95%] lg:w-[80%] w-full mx-auto">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;
