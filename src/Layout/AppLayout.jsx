import { Outlet } from "react-router-dom";
import Header from "./Header";

const AppLayout = () => {
  return (
    <>
      <div className="flex flex-col justify-center  relative ">
        <Header />
        <div className="relative top-28 left-0">
          <div className="w-[90%] mx-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppLayout;
