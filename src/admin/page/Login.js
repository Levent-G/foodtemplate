import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import TypographyComp from "../../components/TypographyComp";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [hata, setHata] = useState(false);
  const [yukleniyor, setYukleniyor] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  //LOGIN START ------------------------------------------------
  const LoginFunction = async (e) => {
    e.preventDefault();
    setHata(false);
    setYukleniyor(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setYukleniyor(false);
      navigate("/admin");
    } catch (error) {
      setHata(error.message);
      setYukleniyor(false);
    }
  };
  //LOGIN END --------------------------------------------------
  return (
    <div className="text-center w-1/2 justify-center ml-auto mr-auto mt-12 h-screen">
      <TypographyComp variant="h3" component="h3" value=" Auth Admin" />
      <form onSubmit={LoginFunction}>
        <TextField
          value={email}
          id="outlined-basic"
          label="Email"
          variant="outlined"
          required
          className="w-full mt-5"
          autoComplete="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          value={password}
          id="outlined-password-input"
          label="Password"
          type="password"
          required
          autoComplete="current-password"
          className="w-full mt-5"
          onChange={(e) => setPassword(e.target.value)}
        />
        {yukleniyor && (
          <span className="bg-blue-500 p-5 w-full text-white rounded-lg">
            Yükleniyor lütfen bekleyiniz...
          </span>
        )}
        {hata && (
          <span className="bg-red-500 p-5 w-full rounded-lg">{hata}</span>
        )}
        <button
          variant="contained"
          className=" bg-blue-950 p-4 text-white mt-5"
          type="submit"
        >
          LOGIN
        </button>
      </form>

      <p>
        Üyelik yoksa{" "}
        <Link to="/admin/register" className="text-red-500">
          Üye olunuz
        </Link>
      </p>
    </div>
  );
};

export default Login;
