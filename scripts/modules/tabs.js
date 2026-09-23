export function initTabs() {
  const tablist = document.querySelector('[role="tablist"]');
  if (!tablist) return;

  const tabs = Array.from(tablist.querySelectorAll('[role="tab"]'));
  if (!tabs.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => selectTab(tab, tabs));
    tab.addEventListener("keydown", (e) => handleKeydown(e, tab, tabs));
  });
}

function handleKeydown(e, tab, tabs) {
  const currentIndex = tabs.indexOf(tab);
  let nextIndex = null;

  if (e.key === "ArrowRight" || e.key === "ArrowDown") {
    nextIndex = (currentIndex + 1) % tabs.length;
  } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
    nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
  } else if (e.key === "Home") {
    nextIndex = 0;
  } else if (e.key === "End") {
    nextIndex = tabs.length - 1;
  } else {
    return;
  }

  e.preventDefault();
  tabs[nextIndex].focus();
  selectTab(tabs[nextIndex], tabs);
}

function selectTab(tab, tabs) {
  tabs.forEach((t) => {
    const selected = t === tab;
    t.setAttribute("aria-selected", String(selected));
    t.tabIndex = selected ? 0 : -1;
    const panel = document.getElementById(t.getAttribute("aria-controls"));
    if (panel) panel.hidden = !selected;
  });
}
