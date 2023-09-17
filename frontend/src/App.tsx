// Important TODOs:
// 1. Figure out the backend infrastructure (possibly draw diagrams?).
// 2. Upload all of the existing chamber images to google drive via their own API.
// 3. Create a mongodb document for each and every chamber.
// 4. Create the about page.
// 5. At this stage you should consider creating a landing page if the user hasn't sign it yet.
// 6. Create the user profile page.
// 7. Create the stats page (if the user is a guest, store in local storage, otherwise in the server).
// 8. Create the page where a user can upload custom images where they could be curated by the developer?
// 9. Refactor and optimize.
// 10. Deploy the app.

import { Route, Routes } from "react-router-dom";

import BottomFooter from "./components/BottomFooter";
import Navbar from "./components/Navbar";
import Game from "./pages/Guessr";
import User from "./pages/User";
import Setting from "./pages/Setting";
import Stats from "./pages/Stats";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import NewImage from "./pages/NewImage";
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
        <Route path="/new-image" element={<NewImage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <BottomFooter />
    </main>
  );
};

export default App;
