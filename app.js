let isDarkMode = false;

const checkDarkMode = () => {
  if (localStorage.getItem("dark-mode") === "enabled") {
    document.body.classList.add("dark-mode");
    isDarkMode = true;
    document.getElementById("dark-mode-toggle").checked = true;
  } else {
    document.body.classList.add("light-mode");
  }
}
checkDarkMode();

const toggleDarkMode = () => {
  if (isDarkMode) {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
    localStorage.setItem("dark-mode", "disabled");
  } else {
    document.body.classList.remove("light-mode");
    ddocument.body.classList.add("dark-mode");
    localStorage.setItem("dark-mode", "enabled");
  }
  isDarkMode = !isDarkMode;
}
const darkModeToggle = document.getElementById("dark-mode-toggle");

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
