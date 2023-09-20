import { useState, useEffect } from "react";
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";
import Feed from "../Feed/Feed";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import SideMenu from "../Menu/SideMenu";
import Chatters from "../Search/Chatters";
import Profile from "../Profile/Profile";

function Home() {
  const { user } = useSelector((state: RootState) => state.user);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);
  const [openProfile, setOpenProfile] = useState(false);

  const openProfileSection = () => {
    setOpenProfile(true);
  };

  const closeProfile = () => {
    setOpenProfile(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="w-screen text-white">
        {/* Mobile Layout */}
        {isMobile && (
          <>
            {user && <Menu />}
            <Feed isMobile={isMobile} />
            <Footer />
          </>
        )}

        {/* Laptop Layout */}
        {!isMobile && (
          <div className="w-screen px-24 grid grid-cols-5 text-white">
            <div className="col-span-1 border-r-1 p-2 border-gray-600">
              {user && (
                <SideMenu
                  isMobile={isMobile}
                  closeProfile={closeProfile}
                  openProfile={openProfileSection}
                />
              )}
            </div>
            <div className="col-span-2 ">
              {openProfile && (
                <Profile isMobile={isMobile} closeProfile={closeProfile} />
              )}
              {!openProfile && <Feed isMobile={isMobile} />}
            </div>
            <div className="col-span-2 border-l-1 p-2 border-gray-600">
              <Chatters />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
