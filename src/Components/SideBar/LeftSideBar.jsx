import React, { useState } from "react";
import FloatingInput from "./FloatingInput";
import HandleCaptcha from "./handleCaptcha";

const LeftSideBar = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className=" ml-[150px] p-5 cursor-pointer ">
      {/* <i className="fa-solid fa-x text-[20px] cursor-pointer flex-end" />*/}
      <div className="flex justify-between p-2">
        <div>
          {isLogin ? (
            <>
              <p className="text-[30px]">Login</p>
              <p className="text-[15px]">
                or{" "}
                <span
                  className="text-[#12ff01] cursor-pointer"
                  onClick={toggleForm}
                >
                  create an account
                </span>
              </p>
            </>
          ) : (
            <>
              <p className="text-[30px]">Sign Up</p>
              <p className="text-[15px]">
                or{" "}
                <span
                  className="text-[#12ff01] cursor-pointer"
                  onClick={toggleForm}
                >
                  login
                </span>
              </p>
            </>
          )}
          <hr className="w-[50px] border-2 text-black" />
        </div>
        <div className="w-[100px]">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r" />
        </div>
      </div>

      <div className="py-4">
        {isLogin ? (
          <div className="border-1">
            <FloatingInput label="Phone Number" type="text" name="username" />
          </div>
        ) : (
          <div className="border-1">
            <FloatingInput label="Phone Number" type="text" name="phone" />
            <FloatingInput label="Full Name" type="text" name="fullname" />
            <FloatingInput label="Email" type="email" name="Email" />
          </div>
        )}
      </div>

      <button className="bg-[#11ff00] text-white py-3 w-full">
        {isLogin ? "Login" : "Continue"}
      </button>

      <p className="text-[12px] text-gray-400 font-light">
        By clicking on {isLogin ? "Login" : "Create a Account"}, I accept the{" "}
        <span className="text-[#000000] text-gray-800 font-semibold">
          Terms & Conditions & Privacy Policy
        </span>
      </p>
    </div>
  );
};

export default LeftSideBar;
