const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");

if (menuToggle && primaryNav) {
  const closeMenu = () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Mở điều hướng");
    primaryNav.classList.remove("is-open");
  };

  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    menuToggle.setAttribute("aria-label", isExpanded ? "Mở điều hướng" : "Đóng điều hướng");
    primaryNav.classList.toggle("is-open", !isExpanded);
  });

  primaryNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}

const currentYear = document.querySelector("#current-year");
if (currentYear) currentYear.textContent = String(new Date().getFullYear());

const hero = document.querySelector(".hero");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (hero) {
  let entranceStarted = false;

  const startHeroEntrance = () => {
    if (entranceStarted || document.visibilityState !== "visible") return;
    entranceStarted = true;
    document.removeEventListener("visibilitychange", startHeroEntrance);

    if (reducedMotion.matches) return;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => hero.classList.add("is-entrance-active"));
    });
  };

  document.addEventListener("visibilitychange", startHeroEntrance);
  startHeroEntrance();
}
