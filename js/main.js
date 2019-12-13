let fa = document.getElementsByClassName('fa');
let active = document.getElementsByClassName('mobilMenu');
fa[1].onclick = function() {
  active[0].classList.add("active");
}
fa[0].onclick = function() {
  active[0].classList.remove("active");
}
