(function() {
  const b = (localStorage.getItem("panicbutton") || "p").toLowerCase();
  const l = localStorage.getItem("paniclink") || "https://www.google.com";

  window.addEventListener("keydown", e => {
    if (e.key.toLowerCase() === b) window.location.href = l;
  });
})();
