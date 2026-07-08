const STORAGE_KEY = "theme";
const THEMES = ["aurora", "frost", "nebula", "ember"];

export function initTheme() {
  const buttons = document.querySelectorAll(".themes button");
  if (!buttons.length) return;

  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && THEMES.includes(stored)) {
    applyTheme(stored, buttons);
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const theme = btn.dataset.set;
      applyTheme(theme, buttons);
      localStorage.setItem(STORAGE_KEY, theme);
    });
  });
}

function applyTheme(theme, buttons) {
  document.documentElement.setAttribute("data-theme", theme);
  buttons.forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.set === theme));
  });
}
