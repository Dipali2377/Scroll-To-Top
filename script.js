let mybutton = document.getElementById("mybtn");

window.onscroll = function () {
  ScrollFunction();
};

function ScrollFunction() {
  if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function MyFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
