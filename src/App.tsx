import "@/App.css";
import { Routes, Route, NavLink, useLocation } from "react-router";
import { Home } from "@/pages/Home";
import { About } from "@/pages/About";
import { Settings } from "@/pages/Settings";
import { BackButton } from "@twa-dev/sdk/react";
import { Payment } from "./pages/Payment";
import { Tabbar, FixedLayout } from "@telegram-apps/telegram-ui";
import { TabbarItem } from "@telegram-apps/telegram-ui/dist/components/Layout/Tabbar/components/TabbarItem/TabbarItem";

function App() {
  const { pathname } = useLocation();
  console.log("pathname", pathname);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>

      <FixedLayout vertical="bottom">
        <Tabbar>
          <NavLink to="/" style={{ flexGrow: 1 }}>
            <TabbarItem
              style={{ width: "100%" }}
              title="home"
              text="Home"
              selected={pathname === "/"}
            />
          </NavLink>
          <NavLink to="/about" style={{ flexGrow: 1 }}>
            <TabbarItem
              style={{ width: "100%" }}
              text="About"
              selected={pathname === "/about"}
            />
          </NavLink>
          <NavLink to="/settings" style={{ flexGrow: 1 }}>
            <TabbarItem
              style={{ width: "100%" }}
              text="Settings"
              selected={pathname === "/settings"}
            />
          </NavLink>
          <NavLink to="/payment" style={{ flexGrow: 1 }}>
            <TabbarItem
              style={{ width: "100%" }}
              text="Payment"
              selected={pathname === "/payment"}
            />
          </NavLink>
        </Tabbar>
      </FixedLayout>
      {pathname !== "/" && <BackButton />}
    </>
  );
}

export default App;
