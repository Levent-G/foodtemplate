import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Home from "./pages/Home";
import HomePageAdmin from "./admin/page/HomePageAdmin"
import { useContext } from "react";
import { AuthContext } from "./admin/context/authContext";
import  Login  from "./admin/page/Login";
import Register from "./admin/page/Register";
import { ToastContainer } from "react-toastify";
import MenuControl from "./admin/page/ControlPage/MenuControl";
import CardControl from "./admin/page/ControlPage/CardControl";
import FontAndFamilyControl from "./admin/page/ControlPage/FontAndFamilyControl";
import FooterControl from "./admin/page/ControlPage/FooterControl";
import HeaderControl from "./admin/page/ControlPage/HeaderControl";
import NewItemControl from "./admin/page/ControlPage/NewItemControl";

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
              path="home"
              index
              element={
                <YonlendirmeKontrol>
                  <HomePageAdmin />
                </YonlendirmeKontrol>
              }
            />
              <Route
              path="menucontrol"
              index
              element={
                <YonlendirmeKontrol>
                  <MenuControl />
                </YonlendirmeKontrol>
              }
            />
             <Route
              path="fontandfamily"
              index
              element={
                <YonlendirmeKontrol>
                  <FontAndFamilyControl />
                </YonlendirmeKontrol>
              }
            />
              <Route
              path="headercontrol"
              index
              element={
                <YonlendirmeKontrol>
                  <HeaderControl />
                </YonlendirmeKontrol>
              }
            />
             <Route
              path="cardcontrol"
              index
              element={
                <YonlendirmeKontrol>
                  <CardControl />
                </YonlendirmeKontrol>
              }
            />
             <Route
              path="newitem"
              index
              element={
                <YonlendirmeKontrol>
                  <NewItemControl />
                </YonlendirmeKontrol>
              }
            />
             <Route
              path="footercontrol"
              index
              element={
                <YonlendirmeKontrol>
                  <FooterControl />
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
