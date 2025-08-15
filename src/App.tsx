import '@/App.css'
import { Routes, Route, NavLink, useLocation } from "react-router";
import { Home } from '@/pages/Home'
import { About } from '@/pages/About'
import { FlexBoxRow } from './components/styled/styled';
import { BackButton } from '@twa-dev/sdk/react';

function App() {
  const { pathname } = useLocation()

  return (
    <>
      <FlexBoxRow>
        <NavLink to="/" className={({ isActive }) =>
          isActive ? "active" : ""
        }>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) =>
          isActive ? "active" : ""
        }>About</NavLink>
      </FlexBoxRow>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {pathname !== '/' && <BackButton />}
    </>
  )
}

export default App
