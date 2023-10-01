/* Trello for PortalGuessr's frontend: https://trello.com/b/NgVubCDX/portalguessr-fullstack*/

// TODO: Fixed the bug where the game wouldn't fetch new questions after restarting.

import { Route, Routes } from "react-router-dom";

import Container from "react-bootstrap/Container";

import MainFooter from "./components/MainFooter";
import Navbar from "./components/Navbar";
import Guessr from "./pages/Guessr";
import User from "./pages/User";

import Setting from "./pages/Setting";
import Stats from "./pages/Stats";
import NotFound from "./pages/NotFound";
import About from "./pages/About";

import "./css/App.css";

const App = () => {
  return (
    <main className="text-pg-light">
      <Container>
        <Navbar />
        <Routes>
          <Route path="/" element={<Guessr />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/stats/:id" element={<Stats />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <MainFooter />
      </Container>
    </main>
  );
};

export default App;
