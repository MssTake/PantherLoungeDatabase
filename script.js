// make separate functions with the same element, probably

function drpdn() {
    document.getElementById("drpdn").classList.toggle("show");
}

window.onclick = function (userSelect) {
   if (!userSelect.target.matches('drpdn')) {
      document.getElementsByClassName("drpdnCntnt").classList.remove('show');
   }
}
