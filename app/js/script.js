const darkButton = document.getElementById("dark");
const lightButton = document.getElementById("light");

const setColorMode = () => {
  if (localStorage.getItem("colorMode") == "dark") {
    setDarkMode();
    darkButton.click();
  } else if (localStorage.getItem("colorMode") == "light") {
    setLightMode();
    lightButton.click();
  }
};

const checkIsLight = () => {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    lightButton.click();
  }
};

const setDarkMode = () => {
  document.querySelector("body").classList = "dark";
  localStorage.setItem("colorMode", "dark");
};

const setLightMode = () => {
  document.querySelector("body").classList = "light";
  localStorage.setItem("colorMode", "light");
};

setColorMode();

const radioButtons = document.querySelectorAll(".toggle__wrapper input");
for (let i = 0; i < radioButtons.length; i++) {
  radioButtons[i].addEventListener("click", (event) => {
    if (darkButton.checked) {
      setDarkMode();
    } else {
      setLightMode();
    }
  });
}

// const darkButton = document.getElementById("dark");
// const lightButton = document.getElementById("light");

// const setDarkMode = () => {
//   document.querySelector("body").classList = "dark";
//   localStorage.setItem("colorMode", "dark");
// };

// const setLightMode = () => {
//   document.querySelector("body").classList = "light";
//   localStorage.setItem("colorMode", "light");
// };

// const colorModeFromLocalStorage = () => {
//   return localStorage.getItem("colorMode");
// };

// const colorModeFromPreferences = () => {
//   return window.matchMedia("(prefers-color-scheme: dark)").matches
//     ? "dark"
//     : "light"; // If preference is set or does not match anything (light is default)
// };

// const loadAndUpdateColor = () => {
//   // local storage has precendence over the prefers-color-scheme
//   const color = colorModeFromLocalStorage() || colorModeFromPreferences();
//   color == "dark" ? darkButton.click() : lightButton.click();
// };

// // when the inputs are clicked, check which radio button is checked and change the color
// const radioButtons = document.querySelectorAll(".toggle__wrapper input");
// radioButtons.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     darkButton.checked ? setDarkMode() : setLightMode();
//   });
// });

// // when the prefers-color-scheme changes, this event will be emitted
// // event reflects the media query, if it matches, the new color is dark, else it is light
// window
//   .matchMedia("(prefers-color-scheme: dark)")
//   .addEventListener("change", (event) => {
//     event.matches ? darkButton.click() : lightButton.click();
//   });

// // Load the right color on startup - localStorage has precedence
// loadAndUpdateColor();
