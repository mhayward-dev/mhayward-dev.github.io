document.addEventListener('DOMContentLoaded', function() {
    var sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav, {});

    var parallax = document.querySelectorAll('.parallax');
    M.Parallax.init(parallax, {});
  });