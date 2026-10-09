import { useState, useEffect } from "react";

/*
 * useMediaQuery — tracks whether a CSS media query currently matches.
 *
 * For cases where a breakpoint needs a genuinely different component tree
 * (not just different styles), e.g. MeetTheTeams swapping its 3D carousel for
 * a flat list on phones. Pure CSS can't do that on its own.
 */
export default function useMediaQuery(query) {
  const [matches, setMatches] = useState(
    () => typeof window !== "undefined" && window.matchMedia(query).matches,
  );

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}
