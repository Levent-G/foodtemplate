import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { auth } from "../../firebase/firebase";
import { signOut } from "firebase/auth";
import SideBar from "../layouts/SideBar";
const HomePageAdmin = () => {
  const { girisKullanici } = useContext(AuthContext);
  console.log(girisKullanici);
  return (
    <div>
      <div >
        <SideBar />
        <div>
          {girisKullanici.displayName}
          <button onClick={() => signOut(auth)}>Çıkış</button>
        </div>
      </div>
    </div>
  );
};

export default HomePageAdmin;
