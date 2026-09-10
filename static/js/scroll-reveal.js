/**
 * Quiet scroll reveals — sister-site pattern, reduced-motion safe.
 * Elements: [data-reveal] or .scp-reveal
 */
(function () {
  var nodes = document.querySelectorAll("[data-reveal], .scp-reveal");
  if (!nodes.length) return;

  var reveal = function (el) {
    el.classList.add("is-revealed");
  };

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    nodes.forEach(reveal);
    return;
  }

  if (!("IntersectionObserver" in window)) {
    nodes.forEach(reveal);
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        reveal(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
  );

  nodes.forEach(function (el) {
    var rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) {
      reveal(el);
      return;
    }
    observer.observe(el);
  });
})();
