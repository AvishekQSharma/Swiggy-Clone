import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Zesty.png";
import { RiArrowDownSLine } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { CiDiscount1 } from "react-icons/ci";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { BsCart2 } from "react-icons/bs";
import SideBar from "../SideBar/SideBar";
import LeftSideBar from "../SideBar/LeftSideBar";

const Header = () => {
  const [showLeftSideBar, setShowLeftSideBar] = useState(false);
  const [showRightSideBar, setShowRightSideBar] = useState(false);

  const toggleLeftSideBar = () => {
    setShowLeftSideBar(!showLeftSideBar);
  };
  const toggleRightSideBar = () => {
    setShowRightSideBar(!showRightSideBar);
  };
  const toggleSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  const link = [
    {
      icon: <IoSearchOutline />,
      name: "Search",
      link: "/search",
    },
    {
      icon: <CiDiscount1 />,
      name: "Offers",
      sup: "New",
      link: "/offers",
    },
    {
      icon: <IoHelpBuoyOutline />,
      name: "Help",
      link: "/Helps",
    },
    {
      icon: <FiUser />,
      name: "SignIn",
    },
    {
      icon: <BsCart2 />,
      name: "Cart",
      sup: "(0)",
      link: "/Carts",
    },
  ];

  return (
    <>
      {(showLeftSideBar || showRightSideBar) && (
        <div
          className="Black-Overlay w-full h-full fixed z-40 bg-black opacity-50"
          onClick={() => {
            setShowLeftSideBar(false);
            setShowRightSideBar(false);
          }}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 w-[754px] h-full bg-white z-50 duration-500 transform ${
          showRightSideBar ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <SideBar hideSideMenu={toggleSideBar} />
      </div>

      <div
        className={`fixed top-0 left-0 w-[650px] h-full  bg-white z-50 duration-500 transform ${
          showLeftSideBar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <LeftSideBar hideSideMenu={toggleLeftSideBar} />
      </div>

      <header className="p-[15px] shadow-xl">
        <div className="max-w-[1200px] mx-auto flex items-center">
          <div className="w-[70px] hover:scale-125 transition-all duration-500 cursor-pointer">
            <img src={logo} alt="Logo" className="w-full" />
          </div>

          <div>
            <span className="font-bold border-b-[3px] pr-3">Kolkata</span>
            Thakurpukur, India
            <RiArrowDownSLine
              onClick={toggleRightSideBar}
              fontSize={25}
              className="inline text-[#12ff01] cursor-pointer"
            />
          </div>

          <nav className="flex list-none gap-5 ml-auto text-[18px] font-semibold">
            {link.map((link, index) => (
              <li
                key={index}
                className="flex items-center hover:text-[#12ff01] gap-2 cursor-pointer"
              >
                {link.link ? (
                  <Link to={link.link} className="flex items-center gap-2">
                    {link.icon}
                    {link.name}
                  </Link>
                ) : (
                  <div
                    className="flex items-center gap-2"
                    onClick={() => {
                      if (link.name === "SignIn") {
                        toggleLeftSideBar();
                      }
                    }}
                  >
                    {link.icon}
                    {link.name}
                  </div>
                )}
                <sup className="text-[#12ff01]">{link.sup}</sup>
              </li>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
