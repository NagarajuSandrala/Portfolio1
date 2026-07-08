import { setFooterYear } from "./modules/footer.js";
import { initTheme } from "./modules/theme.js";
import { initScrollAnimations } from "./modules/scrollAnimations.js";

document.addEventListener("DOMContentLoaded", () => {
  setFooterYear();
  initTheme();
  initScrollAnimations();
});
