var darkmodeactive = localStorage.getItem("darkmode");
console.log("Dark mode is: " + darkmodeactive);

function labelDark() {
  $(".toggle-switch").attr("alt", "Go light");
  $(".toggle-switch").attr("title", "Go light");
}

function goDark() {
  console.log("Dark mode is active");
  labelDark();
  $("body").addClass("dark");
  refreshFavicon();
}

function stayDark() {
  goDark();
  localStorage.setItem("darkmode", true);
  darkmodeactive = localStorage.getItem("darkmode");
  console.log("Dark mode is: " + darkmodeactive + " and it will stay dark");
}

function labelLight() {
  $(".toggle-switch").attr("alt", "Go dark");
  $(".toggle-switch").attr("title", "Go dark");
}

function goLight() {
  console.log("Light mode is active");
  labelLight();
  $("body").removeClass("dark");
  refreshFavicon();
}

function stayLight() {
  goLight();
  localStorage.setItem("darkmode", false);
  darkmodeactive = localStorage.getItem("darkmode");
  console.log("Dark mode is: " + darkmodeactive + " and it will stay light");
}
window.matchMedia("(prefers-color-scheme: dark)").addListener(e => e.matches && stayDark());
window.matchMedia("(prefers-color-scheme: light)").addListener(e => e.matches && stayLight());
$(".toggle-switch").click(function () {
  if ($("body").hasClass("dark")) {
    stayLight();
  } else {
    stayDark();
  }
});
$(".label-light").click(function () {
  if ($("body").hasClass("dark")) {
    stayLight();
  }
});
$(".label-dark").click(function () {
  if (!$("body").hasClass("dark")) {
    stayDark();
  }
});
window.onload = function () {
  if (localStorage.darkmode == "true") {
    console.log("User manually selected dark mode from a past session");
    goDark();
  } else if (localStorage.darkmode == "false") {
    console.log("User manually selected light mode from a past session");
    goLight();
  } else {
    console.log("User hasn't selected dark or light mode from a past session, dark mode has been served by default and OS-level changes will automatically reflect");
    if ($("body").hasClass("dark")) {
      labelDark();
    } else {
      labelLight();
    }
  }
};


function refreshFavicon() {
  matchMedia('(prefers-color-scheme: dark)').matches
}