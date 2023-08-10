import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import LoginForm from "./LoginForm";
import { IoMdClose } from "react-icons/io";

function Login({ closeLogin }) {
  return (
    <motion.div className="flex flex-col h-[100%] w-[100%] bg-black text-white p-8 ">
      <div className="flex items-center justify-between w-full">
        <button className="mr-auto" title="Close Login" onClick={closeLogin}>
          <IoMdClose className="text-2xl" />
        </button>
        <div className="flex items-center">
          <img className="w-12 h-12" src="/images/logo.svg" alt="" />
        </div>
      </div>

      <div className="my-10 text-3xl font-black">
        <p>Welcome back</p>
        <LoginForm />
      </div>
    </motion.div>
  );
}

export default Login;
