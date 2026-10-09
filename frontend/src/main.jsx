import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles/globals.css";
import App from "./App.jsx";

// The browser's own scroll restoration otherwise fights with
// useScrollToTop (AppRoutes.jsx) on every client-side navigation — it
// tries to restore whatever scroll position it has associated with the
// new history entry, landing well below the top even after we've
// explicitly scrolled to (0, 0). Taking manual control hands scroll
// position fully to our own code.
if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
