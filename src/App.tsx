import "@/App.css";
import { Routes, Route, useLocation, useNavigate } from "react-router";
import { Home } from "@/pages/Home";
import { About } from "@/pages/About";
import { Settings } from "@/pages/Settings";
import { BackButton } from "@twa-dev/sdk/react";
import { Payment } from "./pages/Payment";
import { Tabbar, FixedLayout } from "@telegram-apps/telegram-ui";
import { TabbarItem } from "@telegram-apps/telegram-ui/dist/components/Layout/Tabbar/components/TabbarItem/TabbarItem";

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>

      <FixedLayout vertical="bottom">
        <Tabbar className="tab-bar">
          <TabbarItem
            style={{ flexGrow: 1 }}
            title="home"
            text="Home"
            selected={pathname === "/"}
            onClick={() => navigate("/")}
          />
          <TabbarItem
            style={{ flexGrow: 1 }}
            text="About"
            selected={pathname === "/about"}
            onClick={() => navigate("/about")}
          />
          <TabbarItem
            style={{ flexGrow: 1 }}
            text="Settings"
            selected={pathname === "/settings"}
            onClick={() => navigate("/settings")}
          />
          <TabbarItem
            style={{ flexGrow: 1 }}
            text="Payment"
            selected={pathname === "/payment"}
            onClick={() => navigate("/payment")}
          />
        </Tabbar>
      </FixedLayout>
      {pathname !== "/" && <BackButton />}
    </>
  );
}

export default App;
