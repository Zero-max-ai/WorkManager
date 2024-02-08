import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeSelector } from "./context/ThemeToggle.js";
import { useRecoilValue } from "recoil";

import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import SettingPage from "./pages/SettingPage.jsx";

const routes = [
  { path: "/", ele: <HomePage /> },
  { path: "/login", ele: <LoginPage /> },
  { path: "/signup", ele: <SignupPage /> },
  { path: "/about", ele: <AboutPage /> },
  { path: "/dashboard", ele: <DashboardPage /> },
  { path: "/account", ele: <SettingPage /> },
];

const App = () => {
  const theme = useRecoilValue(ThemeSelector);
  return (
    <BrowserRouter>
      <div className={`min-h-screen max-w-screen ${theme}`}>
        <NavBar />
        <Routes>
          {routes.map(({ path, ele }) => {
            return <Route key={path} path={path} element={ele} />;
          })}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
