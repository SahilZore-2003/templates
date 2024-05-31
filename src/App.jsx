import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";
import AuthRoute from "./components/AuthRoute";
import { useDispatch, useSelector } from "react-redux";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomePage from "./pages/app/HomePage";
import MyHomePage from "./pages/app/MyHomePage"
import MyCoursePage from "./pages/app/MyCoursePage"
import ThirdTemplateHome from "./pages/app/ThirdTemplateHome"
import CoursePage from "./pages/app/CoursePage";
import FourthTemplateHome from "./pages/app/FourthTemplateHome"
import FifthTemplateHome from "./pages/app/FifthTemplateHome"
import FifthTemplateHomeCopy from "./pages/app/FifthTemplateHomeCopy"
import Layout from "./dashboard/Layout"
import Dashboard from "./dashboard/Dashboard"
import { useEffect } from "react";
import { axiosInstance } from "./config/axios";
import { CONST } from "./config";
import { signOut } from "./redux/slices/userSlice";
import SiteRoute from "./components/SiteRoute";
import FifthTemplateCourse from "./pages/app/FifthTemplateCourse";
import SixthTemplateHome from "./pages/app/SixthTemplateHome";
import DarkLightTemplate from "./pages/app/DarkLightTemplate";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axiosInstance.get(CONST.uri.auth.PING);
  //     } catch (err) {
  //       dispatch(signOut());
  //       console.log(err);
  //     }
  //   };
  //   // fetchData();
  // }, []);

  return (
    <BrowserRouter>
      {/* header */}
      {/* <Nav /> */}
      <Routes>
        {/* <Route path="/app/dashboard" element={<Dashboard />} /> */}
        <Route element={<SiteRoute />}>
          <Route path="/" element={<FifthTemplateHome />} />
          <Route path=":sitename/:id" element={<CoursePage />} />
          <Route element={<AuthRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route path="/dashboard" element={<Layout />}>
            <Route path="" element={<Dashboard />} />
            {/* <Route path="/statics" element={<Dashboard />} /> */}
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
