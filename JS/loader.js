window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const mainContent = document.getElementById("mainContent");
  const body = document.querySelector("body");

  loader.style.transition = "opacity 0.4s ease";
  loader.style.opacity = "0";

  loader.addEventListener("transitionend", () => {
    loader.style.display = "none";
    mainContent.classList.remove("hidden");
    mainContent.classList.add("fade-in");
  });

  mainContent.addEventListener("transitionend", () => {
    body.classList.add("white-bg");
  });
});
