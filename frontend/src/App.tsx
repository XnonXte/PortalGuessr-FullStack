import { Route, Routes } from "react-router-dom";
import BottomFooter from "./components/BottomFooter";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import User from "./pages/User";
import Setting from "./pages/Setting";
import Stats from "./pages/Stats";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import NewImage from "./pages/NewImage";

const App = () => {
  return (
    <main className="container text-pg-light">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/stats/:id" element={<Stats />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/new-image" element={<NewImage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <BottomFooter />
    </main>
  );
};

export default App;
