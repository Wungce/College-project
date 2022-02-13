console.log("This is a tutorial");
document.querySelector(".cross").style.display = "none";

document.querySelector(".ham-cross").addEventListener("click", () => {
  document.querySelector(".side-bar").classList.toggle("go");

  if (document.querySelector(".side-bar").classList.contains("go")) {
    setTimeout(() => {
      document.querySelector(".ham").style.display = "inline";
    }, 300);
    document.querySelector(".cross").style.display = "none";
  } else {
    document.querySelector(".ham").style.display = "none";
    setTimeout(() => {
      document.querySelector(".cross").style.display = "inline";
    }, 300);
  }
});
