import React, { useState } from "react";
import DehazeIcon from '@mui/icons-material/Dehaze';
const SideBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <div
        className={`${
          showMenu
            ? "bg-[#181A20] w-1/10 h-screen float-left text-white"
            : "bg-[#181A20]  w-1/6 h-screen float-left text-white"
        }`}
      >
        <div>
          <button
            className="float-right w-full"
            onClick={() => setShowMenu(!showMenu)}
          >
            <DehazeIcon/>
          </button>
          Sidebar
        </div>
      </div>
    </div>
  );
};

export default SideBar;
