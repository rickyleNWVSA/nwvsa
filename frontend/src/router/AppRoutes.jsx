import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import MeetTheTeams from "../pages/MeetTheTeams.jsx";
import About from "../pages/About.jsx";
import Events from "../pages/Events.jsx";
import CPP from "../pages/CPP.jsx";
import Opportunities from "../pages/Opportunities.jsx";
import Donations from "../pages/Donations.jsx";

import AlbumCarouselDemo from "../pages/AlbumCarouselDemo.jsx";

/*
 * AppRoutes — the single source of truth for "which URL renders which page".
 *
 * Keeping the route map here (instead of in App.jsx) means:
 *   - App.jsx stays a thin shell (later: global layout, providers, etc.)
 *   - adding a page is a one-line change in ONE predictable place
 *
 * To add a page:
 *   1. import it above
 *   2. add a <Route path="/your-path" element={<YourPage />} />
 */
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/teams" element={<MeetTheTeams />} />
      <Route path="/about" element={<About />} />
      <Route path="/events" element={<Events />} />
      <Route path="/cpp" element={<CPP />} />
      <Route path="/opportunities" element={<Opportunities />} />
      <Route path="/donations" element={<Donations />} />

      <Route path="/carousel-demo" element={<AlbumCarouselDemo />} />
      {/* catch-all: any unknown URL falls back to Home (put a real 404 here later) */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default AppRoutes;
