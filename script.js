<<<<<<< HEAD
var head = [
  "<h1>What is the Panther Lounge?</h1>",
  "<h1>What does it do?</h1>",
  "<h1>How were items previously cataloged?</h1>",
  "<h1>What was wrong with the old checkout system?</h1>",
  "<h1>How is our project better than the old systems?</h1>",
];
var answer = [
  "<p> The Panther Lounge is recreational space open to all Florida Tech students. The lounge is owned by Florida Tech&#x27s Student Government Association, but it is co-run by The Anime Club and the Florida Institute of Technology Science Fiction and Fantasy Club (FITSSFF).</p>",
  "<p> The Panther Lounge Database and Checkout System is a web application designed to help both Anime Club and FITSSFF catalog and organize their expansive libraries. The web application is also designed to make the checkout system for members and club librarians to use.</p>",
  "<p> Items were previously cataloged on a series of spreadsheets. Both clubs end up with a number of newly-dontated items each semester, so catalogging them often becomes unnecessarily tedious for both librarians, who are already busy with classwork. </p>",
  "<p> Each club had their own Google Form. Members would fill out either form to notify an item was being checked out. Both Google Forms are disconnected to the aforementioned spreadsheets. Items were often difficult to track, In extreme cases, items were stolen, sometimes by non-members. </p>",
  "<p> The catalogs and checkout system will be localized on the web app. Localizating the two will make it easier for members and librarians from both clubs so catalog, checkout, and track items. This will also help both clubs with holding members accountable in the event an item goes missing.</p>",
];

// shows the question and answer
function question(number) {
  document.getElementById("headers").innerHTML = head[number];
  document.getElementById("answers").innerHTML = answer[number];
=======
function question(head, answer) {
  // hides default header
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
>>>>>>> d76bf77 (fixing faq)
}
