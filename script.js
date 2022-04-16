const close = document.getElementById("close");
const modal = document.getElementById("modal");
const open = document.getElementsByClassName("btn");

close.addEventListener("click", (e) => {
  modal.style.display = "none";
});

open[0].addEventListener("click", () => {
  modal.style.display = "block";
});

window.onload = () => {
  setTimeout(() => {
    modal.style.display = "block";
    alert("please subscribe you cunt");
  }, 10000);
};
