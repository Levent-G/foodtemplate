import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { auth } from "../../firebase/firebase";
import { signOut } from "firebase/auth";
const HomePageAdmin = () => {
  const { girisKullanici } = useContext(AuthContext);
  console.log(girisKullanici);
  return (
    <div>
      {girisKullanici.displayName}
      <button onClick={() => signOut(auth)}>Çıkış</button>
    </div>
  );
};

export default HomePageAdmin;
