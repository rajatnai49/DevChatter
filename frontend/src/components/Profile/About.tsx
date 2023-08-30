import { BsCalendar3 } from "react-icons/bs";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { BiLeftArrow } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.user);

  return (
    <>
      <div className="flex flex-row text-white bg-black h-14 w-screen items-center opacity-90 sticky top-0 z-20">
        <p className="ml-4 text-xl">
          <BiLeftArrow onClick={() => navigate("/home")} />
        </p>
        <p className="text-xl font-bold ml-2">{user.name}</p>
      </div>
      <div className="w-screen relative text-white">
        <div className="w-[100%] h-28 bg-orange-400 relative">
          <img
            className="w-24 h-24 left-2 bg-slate-200 border-8 border-orange-400 absolute -bottom-10 rounded-full"
            alt="profile pic"
            src={user && user.avtar.url}
          ></img>
          <button
            className="border-slate-400 text-slate-300 border-2 absolute -bottom-11 right-2 p-1 px-2 rounded-3xl"
            title="Close Login"
          >
            Edit Profiles
          </button>
        </div>
        <div className="w-full mt-12 px-6 py-3">
          <p className="font-black text-2xl">{user.name}</p>
          <p className="text-slate-400 mt-2 text-sm">@{user.email}</p>
          <p className="text-slate-500 mt-2 text-xs flex items-center">
            <BsCalendar3 className="mr-2" /> Joined{" "}
            {new Date(user.createdAt).toLocaleString("default", {
              month: "long",
              year: "numeric",
            })}
          </p>
          <div className="flex flex-row w-[75%] mt-2">
            <div className="flex flex-row basis-1/2">
              <p className="mr-2 font-bold">{user.followers.length}</p>
              <p className="mr-1 font-thin opacity-75">Followers</p>
            </div>
            <div className="flex flex-row basis-1/2">
              <p className="mr-2 font-bold">{user.following.length}</p>
              <p className="mr-1 font-thin opacity-75">Following</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
