document.addEventListener('DOMContentLoaded', function () {
  // setup material ui components
  var sidenav = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sidenav, {});

  var parallax = document.querySelectorAll('.parallax');
  M.Parallax.init(parallax, {});

  // light / dark mode toggle
  const btnToggleSchemeEls = document.querySelectorAll('.btn-toggle-scheme');
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  const currentTheme = localStorage.getItem("theme");
  const bodyEl = document.querySelector('body');

  if (currentTheme === 'dark') {

  }

  btnToggleSchemeEls.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const isLightTheme = bodyEl.classList.contains('theme-light');
      const bodyTheme = isLightTheme ? 'theme-light' : 'theme-dark';
      const newTheme = isLightTheme ? 'theme-dark' : 'theme-light';
  
      bodyEl.classList.add(newTheme);
      bodyEl.classList.remove(bodyTheme);
  
      const schemeIconEl = btn.querySelector('.icon');
        schemeIconEl.className = 'icon';
  
        var iconClass = bodyTheme === 'theme-light' ? 'sun' : 'moon';
        schemeIconEl.classList.add(iconClass);

        localStorage.setItem("theme", newTheme);
    });
  });


//   // Select the button
// const btn = document.querySelector(".btn-toggle");
// // Check for dark mode preference at the OS level
// const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
//  
// // Get the user's theme preference from local storage, if it's available
// const currentTheme = localStorage.getItem("theme");
// // If the user's preference in localStorage is dark...
// if (currentTheme == "dark") {
//   // ...let's toggle the .dark-theme class on the body
//   document.body.classList.toggle("dark-mode");
// // Otherwise, if the user's preference in localStorage is light...
// } else if (currentTheme == "light") {
//   // ...let's toggle the .light-theme class on the body
//   document.body.classList.toggle("light-mode");
// }
//  
// // Listen for a click on the button 
// btn.addEventListener("click", function() {
//   // If the user's OS setting is dark and matches our .dark-mode class...
//   if (prefersDarkScheme.matches) {
//     // ...then toggle the light mode class
//     document.body.classList.toggle("light-mode");
//     // ...but use .dark-mode if the .light-mode class is already on the body,
//     var theme = document.body.classList.contains("light-mode") ? "light" : "dark";
//   } else {
//     // Otherwise, let's do the same thing, but for .dark-mode
//     document.body.classList.toggle("dark-mode");
//     var theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
//   }
//   // Finally, let's save the current preference to localStorage to keep using it
//   localStorage.setItem("theme", theme);
// });

});