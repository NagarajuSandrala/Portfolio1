// Google Analytics 4 loader. Kept out of index.html to avoid inline JavaScript.
(() => {
  const MEASUREMENT_ID = 'G-8XP2FC2TWD';

  const isLocal = ['localhost', '127.0.0.1', ''].includes(window.location.hostname);
  if (isLocal) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', MEASUREMENT_ID, { anonymize_ip: true });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.appendChild(script);
})();
