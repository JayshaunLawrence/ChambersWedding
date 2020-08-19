const year = new Date().getFullYear();
const fourthOfJuly = new Date(2021, 6, 4).getTime();
console.log(fourthOfJuly);

// countdown
let timer = setInterval(function() {

  // get today's date
  const today = new Date().getTime();

  // get the difference
  const diff = fourthOfJuly - today;

  // math
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // display
  document.getElementById("timer").innerHTML =
    "<div class=\"days\"> \
  <div class=\"numbers\">" + days + "</div><div class=\"text\">days</div> </div> \
<div class=\"hours\"> \
  <div class=\"numbers\">" + hours + "</div><div class=\"text\">hours</div> </div> \
<div class=\"minutes\"> \
  <div class=\"numbers\">" + minutes + "</div><div class=\"text\">mins</div> </div> \
<div class=\"seconds\"> \
  <div class=\"numbers\">" + seconds + "</div><div class=\"text\">secs</div> </div> \
</div>";

}, 1000);