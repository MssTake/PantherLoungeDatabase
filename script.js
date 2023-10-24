// header

function drpdn(drop) {
   switch (drop) {
      case "plan":
         document.getElementById("plan").classList.toggle("show");
         break;
      case "m1":
         document.getElementById("m1").classList.toggle("show");
         break;
      case "m2":
         document.getElementById("m2").classList.toggle("show");
         break;
      case "m3":
         document.getElementById("m3").classList.toggle("show");
         break;
      case "m4":
         document.getElementById("m4").classList.toggle("show");
         break;
      case "m5":
         document.getElementById("m5").classList.toggle("show");
         break;
      case "m6":
         document.getElementById("m6").classList.toggle("show");
         break;
   }
}

window.onclick = function (userSelect) {
   if (!userSelect.target.matches("plan" || "m1" || "m2" || "m3" || "m4" || "m5" || "m6")) {
      document.getElementsByClassName("drpdnCntnt").classList.remove('show');
   }
}

// make a similar function for FAQ text
