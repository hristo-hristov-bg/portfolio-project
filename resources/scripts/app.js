function codecademy() {
  const link =
    "<a href='https://github.com/hristo-hristov-bg/codecademy-projects'>https://github.com/hristo-hristov-bg/codecademy-projects</a>";
  document.getElementById("codecademy").innerHTML = link;
}

function typescript() {
  const link =
    "<a href='https://github.com/hristo-hristov-bg/typescript-course'>https://github.com/hristo-hristov-bg/typescript-course</a>";
  document.getElementById("typescript").innerHTML = link;
}

function cssCourse() {
  const link =
    "<a href='https://github.com/hristo-hristov-bg/css-course'>https://github.com/hristo-hristov-bg/css-course</a>";
  document.getElementById("css-course").innerHTML = link;
}

function softuni() {
  const link =
    "<a href='https://github.com/hristo-hristov-bg/SoftUni-Courses'>https://github.com/hristo-hristov-bg/SoftUni-Courses</a>";
  document.getElementById("softuni").innerHTML = link;
}

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
