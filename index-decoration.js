document.addEventListener("DOMContentLoaded", () => {
  const greetingElement = document.querySelector("#greeting");
  let greeting = "Hallo,";
  const hour = new Date().getHours();

  if (hour >= 6 && hour < 12) {
    greeting = "Good Morning,";
  } else if (hour > 12 && hour < 17) {
    greeting = "Good Afternoon,";
  } else if (hour >= 17 && hour < 21) {
    greeting = "Good Evening,";
  }

  if (greetingElement) {
    greetingElement.textContent = greeting;
  }

  const roundel = document.querySelector("#roundel");
  if (!roundel) {
    return;
  }

  const icons = [
    { icon: "CV", id: "cv" },
    { icon: "☀", id: "sun" },
    { icon: "♡", id: "heart" },
    { icon: "⌘", id: "place-of-interest" },
    { icon: "↪", id: "return" },
    { icon: "℅", id: "care-of" },
    { icon: "⏻", id: "power" },
    { icon: "🌀", id: "spiral" },
  ];
  let isHovering = false;

  roundel.addEventListener("mouseenter", () => {
    if (isHovering) {
      return;
    }
    isHovering = true;

    const selectedIcon = icons[Math.floor(Math.random() * icons.length)];
    const icon = document.createElement("span");
    icon.className = "icon-text";
    icon.id = selectedIcon.id;
    icon.textContent = selectedIcon.icon;
    roundel.replaceChildren(icon);
  });

  roundel.addEventListener("mouseleave", () => {
    isHovering = false;
  });
});
