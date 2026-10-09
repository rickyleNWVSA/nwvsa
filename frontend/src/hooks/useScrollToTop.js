import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

/*
 * useScrollToTop — jumps the window to the top on every route change.
 *
 * React Router's client-side navigation doesn't reset scroll position like a
 * normal browser navigation does, so clicking a nav link while scrolled down
 * a page lands you at the same scroll depth on the new page. Hash links
 * (e.g. the footer's "/path#id" anchors) are plain <a> tags that trigger a
 * real navigation, so the browser already scrolls those correctly on its
 * own — this only needs to handle plain pathname changes.
 *
 * The clicked nav link is removed from the DOM when the old page unmounts
 * (every page renders its own <Navbar>), and the browser auto-focuses
 * *some* remaining link in its place — then auto-scrolls that newly
 * focused element into view (smoothly, per reset.css), overriding the
 * reset below with a scroll to wherever that link happens to sit. Blurring
 * first stops that from ever kicking in — and this needs useLayoutEffect
 * (not useEffect) to win that race: it fires before the browser paints the
 * new page, rather than after.
 */
export default function useScrollToTop() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if (hash) return;
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    // Explicit "instant" overrides the global `scroll-behavior: smooth`
    // (reset.css) — a page navigation should land at the top immediately,
    // not visibly animate there.
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);
}
