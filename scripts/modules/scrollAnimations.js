const REVEAL_SELECTORS = ".about-card, .card, .proj-card, .exp-row, .contact-card";

export function initScrollAnimations() {
  const elements = document.querySelectorAll(REVEAL_SELECTORS);
  if (!elements.length) return;

  elements.forEach((el) => el.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.15 }
  );

  elements.forEach((el) => observer.observe(el));
}
