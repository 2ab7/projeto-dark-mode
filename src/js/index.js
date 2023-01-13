const changeThemeBtn = document.querySelector("#change-theme");

// TOGGLE DARK MODE
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

// LOAD LIGHT OR DARK MODE
function loadTheme(){
    const darkMode = localStorage.getItem("dark");

    if(darkMode){
        toggleDarkMode();
    }
}
loadTheme()

changeThemeBtn.addEventListener("change", function () {
  toggleDarkMode();

  // SAVE OR REMOVE DARK MODE
  localStorage.removeItem("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark", 1);
  }
});
