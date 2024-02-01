import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Home from "./pages/Home";
import HomePageAdmin from "./admin/page/HomePageAdmin"
import { useContext } from "react";
import { AuthContext } from "./admin/context/authContext";
import  Login  from "./admin/page/Login";
import Register from "./admin/page/Register";
import { ToastContainer } from "react-toastify";

function App() {
  const { girisKullanici } = useContext(AuthContext);

  const YonlendirmeKontrol = ({ children }) => {
    if (!girisKullanici) {
      return <Navigate to="/admin/login" />;
    }
    return children;
  };
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>    
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/admin">
            <Route
              index
              element={
                <YonlendirmeKontrol>
                  <HomePageAdmin />
                </YonlendirmeKontrol>
              }
            />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
