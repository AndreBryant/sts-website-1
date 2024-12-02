window.addEventListener("load", () => {
  var darkToggle = document.querySelector(".toggler");
  var all = document.querySelector("*");
  var value =
    localStorage.getItem("value") !== null
      ? Number(localStorage.getItem("value"))
      : 0;

  function doThis() {
    all.style.filter = `invert(${value})`;
    darkToggle.childNodes[0].src =
      value === 1 ? "./img/dark.svg" : "./img/light.svg";
  }

  doThis();

  darkToggle.addEventListener("click", () => {
    value = value === 0 ? 1 : 0;
    localStorage.setItem("value", value);
    doThis();
  });

  darkToggle.addEventListener("mousedown", () => {
    darkToggle.classList.add("active");
    setTimeout(() => {
      darkToggle.classList.remove("active");
    }, 1000);
  });
});
