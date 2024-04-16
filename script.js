function question(head, answer) {
  // hides default header
  document.getElementById("head0").style.visibility = "hidden";
  document.getElementById("head0").style.transition = ".5s";
  document.getElementById("head0").style.height = "0";
  document.getElementById("head0").style.display = "none";
  // hides the map
  document.getElementById("map").style.height = "0";
  document.getElementById("map").style.display = "none";
  // shows the question and answer
  document.getElementById("headers").hidden = false;
  document.getElementById("headers").innerHTML =
    document.getElementById(head).innerHTML;
  document.getElementById("answers").innerHTML =
    document.getElementById(answer).textContent;
}
