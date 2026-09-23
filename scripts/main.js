import { setFooterYear } from "./modules/footer.js";
import { initTheme } from "./modules/theme.js";
import { initScrollAnimations } from "./modules/scrollAnimations.js";
import { initTabs } from "./modules/tabs.js";

document.addEventListener("DOMContentLoaded", () => {
  setFooterYear();
  initTheme();
  initScrollAnimations();
  initTabs();
});
