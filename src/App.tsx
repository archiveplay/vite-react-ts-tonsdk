import '@/App.css'
import { Routes, Route, NavLink } from "react-router";
import { Home } from '@/pages/Home'
import { About } from '@/pages/About'
import { FlexBoxRow } from './components/styled/styled';

function App() {
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
    </>

  )
}

export default App
