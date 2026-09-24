let hideTimer;

export function initContactCopy() {
  const toast = document.getElementById("toast");
  const links = document.querySelectorAll(".contact-link[data-copy]");
  if (!toast || !links.length) return;

  links.forEach((link) => {
    link.addEventListener("click", () => {
      const value = link.dataset.copy;
      const label = link.dataset.copyLabel || "Contact";
      copyToClipboard(value);
      showToast(toast, `${label} copied: ${value}`);
    });
  });
}

function copyToClipboard(value) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(value).catch(() => fallbackCopy(value));
  } else {
    fallbackCopy(value);
  }
}

function fallbackCopy(value) {
  const input = document.createElement("textarea");
  input.value = value;
  input.style.position = "fixed";
  input.style.opacity = "0";
  document.body.appendChild(input);
  input.select();
  try {
    document.execCommand("copy");
  } catch {
    // Clipboard unavailable; the toast still shows the value for manual copy.
  }
  document.body.removeChild(input);
}

function showToast(toast, message) {
  clearTimeout(hideTimer);
  toast.textContent = message;
  toast.hidden = false;
  requestAnimationFrame(() => toast.classList.add("is-visible"));
  hideTimer = setTimeout(() => {
    toast.classList.remove("is-visible");
    setTimeout(() => {
      toast.hidden = true;
    }, 250);
  }, 2400);
}
