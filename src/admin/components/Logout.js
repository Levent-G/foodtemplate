import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { auth } from "../../firebase/firebase";
import { signOut } from "firebase/auth";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
const Logout = (props) => {
  const { girisKullanici } = useContext(AuthContext);
  return (
    <div>
      <div>
        {props.props ? (
          <>
            <AccountCircleIcon className="mr-2 float-left" />
            <p className="float-left uppercase">
              {girisKullanici.displayName}{" "}
            </p>
            <button onClick={() => signOut(auth)} className="pl-4 text-red-200">
              Çıkış <LogoutIcon />
            </button>
          </>
        ) : (
          <button onClick={() => signOut(auth)} >
            Çıkış <LogoutIcon />
          </button>
        )}
      </div>
    </div>
  );
};

export default Logout;
