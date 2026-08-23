"use client";

import { useEffect } from "react";

const staggerPattern = [0, 80, 140, 200, 260, 320];

export default function ScrollAnimator() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-scroll-reveal]"),
    );

    if (elements.length === 0) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    if (CSS.supports("animation-timeline: view()")) {
      return;
    }

    elements.forEach((element, index) => {
      const delay =
        element.dataset.revealDelay ?? `${staggerPattern[index % staggerPattern.length]}ms`;

      element.style.setProperty("--reveal-delay", delay);
    });

    const revealVisibleElements = () => {
      const viewportTrigger = window.innerHeight * 0.88;

      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < viewportTrigger && rect.bottom > window.innerHeight * 0.08;

        element.classList.toggle("is-visible", isVisible);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.16,
      },
    );

    elements.forEach((element) => observer.observe(element));
    revealVisibleElements();

    window.addEventListener("scroll", revealVisibleElements, { passive: true });
    window.addEventListener("resize", revealVisibleElements);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", revealVisibleElements);
      window.removeEventListener("resize", revealVisibleElements);
    };
  }, []);

  return null;
}
