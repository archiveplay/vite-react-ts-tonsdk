import "@/App.css";
import { Routes, Route, NavLink, useLocation } from "react-router";
import { Home } from "@/pages/Home";
import { About } from "@/pages/About";
import { Settings } from "@/pages/Settings";
import { FlexBoxRow } from "./components/styled/styled";
import { BackButton } from "@twa-dev/sdk/react";
import { Payment } from "./pages/Payment";

function App() {
  const { pathname } = useLocation();

  return (
    <>
      <FlexBoxRow>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Settings
        </NavLink>
        <NavLink
          to="/payment"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Payment
        </NavLink>
      </FlexBoxRow>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      {pathname !== "/" && <BackButton />}
    </>
  );
}

export default App;
