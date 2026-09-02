import { useEffect } from "react";

/**
 * Reveals any element marked with `data-reveal` as it scrolls into view.
 * Re-scans the DOM on route changes so new pages animate too.
 */
export function useScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced || !("IntersectionObserver" in window)) {
      document
        .querySelectorAll<HTMLElement>("[data-reveal], [data-reveal-stagger]")
        .forEach((el) => el.setAttribute("data-revealed", ""));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-revealed", "");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );

    const scan = () => {
      document
        .querySelectorAll<HTMLElement>("[data-reveal]:not([data-revealed]), [data-reveal-stagger]:not([data-revealed])")
        .forEach((el) => observer.observe(el));
    };

    // Delay the first scan so streamed/suspended chunks finish hydrating first.
    const startTimer = window.setTimeout(scan, 300);

    const mutation = new MutationObserver(() => scan());
    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.clearTimeout(startTimer);
      observer.disconnect();
      mutation.disconnect();
    };
  }, []);
}
