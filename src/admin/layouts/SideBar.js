import React, { useState } from "react";
import DehazeIcon from "@mui/icons-material/Dehaze";

import Navbar from "./Navbar";
import Logout from "../components/Logout";
const SideBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  console.log(showMenu);
  return (
    <div>
      <div
        className={`${
          showMenu
            ? "bg-[#181A20] w-1/10 h-screen float-left text-white"
            : "bg-[#181A20]  w-[60px] h-screen float-left text-white"
        }`}
      >
        <div className="p-5">
          <button
            className="float-right w-full mb-5"
            onClick={() => setShowMenu(!showMenu)}
          >
            <DehazeIcon />
          </button>


          <Logout props={showMenu}/>
          <Navbar props={showMenu}/>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
