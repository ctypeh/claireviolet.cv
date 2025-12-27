$(document).ready(function () {
  let greeting = "Hallo,";
  let hr = new Date().getHours();

  if (hr >= 6 && hr < 12) {
    greeting = "Good Morning,";
  } else if (hr == 12) {
    /*Leave Default*/
  } else if (hr > 12 && hr < 17) {
    greeting = "Good Afternoon,";
  } else if (hr >= 17 && hr < 21) {
    greeting = "Good Evening,";
  } else if (hr >= 21 || hr < 6) {
    /*Leave Default*/
  } else {
    /*Unknown, Leave Default*/
  }
  $("#greeting").html(greeting);

  let icons = [
    { icon: "CV", id: "cv" },
    { icon: "☀", id: "sun" },
    { icon: "♡", id: "heart" },
    { icon: "⌘", id: "place-of-interest" },
    { icon: "↪", id: "return" },
    { icon: "℅", id: "care-of" },
    { icon: "⏻", id: "power" },
    { icon: "&#127744;", id: "spiral" },
  ];
  let isHovering = false;

  $("#roundel").mouseenter(function () {
    if (isHovering) return; // prevent multiple rapid fires caused by child element
    isHovering = true;

    let rand = Math.floor(Math.random() * icons.length);
    $("#roundel").html(
      `<span class="icon-text" id="${icons[rand].id}">${icons[rand].icon}</span>`
    );
  });

  $("#roundel").mouseleave(function () {
    isHovering = false;
  });
});
