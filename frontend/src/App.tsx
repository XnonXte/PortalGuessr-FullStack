/* Trello for PortalGuessr's frontend: https://trello.com/b/NgVubCDX/portalguessr-fullstack*/

import { Route, Routes } from "react-router-dom";

import MainFooter from "./components/MainFooter";
import Navbar from "./components/Navbar";
import Game from "./pages/Guessr";
import User from "./pages/User";
import Setting from "./pages/Setting";
import Stats from "./pages/Stats";
import NotFound from "./pages/NotFound";
import About from "./pages/About";

import "./styles/css/App.css";

const App = () => {
  return (
    <main className="container text-pg-light">
      <Navbar />
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/stats/:id" element={<Stats />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <MainFooter />
    </main>
  );
};

export default App;
