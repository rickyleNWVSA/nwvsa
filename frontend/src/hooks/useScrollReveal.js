import { useEffect } from "react";

/*
 * useScrollReveal — shared page-entrance animations.
 *
 * This logic used to live inside Home.jsx. It was lifted into a hook so EVERY
 * page can reuse the exact same behavior (and so the animation code lives in one
 * place). Drop `useScrollReveal()` at the top of any page whose markup uses the
 * matching classes:
 *   - .reveal        → fades/slides in when scrolled into view
 *   - .goal-card /
 *     .event-card /
 *     .school-chip   → animate in with a staggered delay
 *   - <nav>          → gains a stronger blurred background once you scroll down
 *   - .stat-num      → eases in when it becomes visible
 *
 * All observers/listeners are cleaned up on unmount, so navigating between
 * routes never leaks them.
 */
export default function useScrollReveal() {
  useEffect(() => {
    // ── SCROLL REVEAL ──
    const reveals = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    reveals.forEach((el) => revealObserver.observe(el));

    // ── STAGGER CHILDREN ──
    document
      .querySelectorAll(
        ".goals-grid .goal-card, .events-grid .event-card, .schools-grid .school-chip",
      )
      .forEach((el, i) => {
        el.style.transitionDelay = `${i * 0.06}s`;
      });

    // ── NAV BLUR ON SCROLL ──
    const nav = document.querySelector("nav");
    const onScroll = () => {
      if (!nav) return;
      nav.style.background =
        window.scrollY > 40
          ? "rgba(255,255,255,0.92)"
          : "rgba(255,255,255,0.82)";
    };
    window.addEventListener("scroll", onScroll);

    // ── STAT OBSERVER ──
    const statNums = document.querySelectorAll(".stat-num");
    const statObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.transition = "opacity 0.6s ease";
            statObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 },
    );
    statNums.forEach((el) => statObserver.observe(el));

    return () => {
      revealObserver.disconnect();
      statObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
}
