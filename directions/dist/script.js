let color = "purple";
let number = 10;
let word = "cool";

if (color === "purple") {
  $(".sever").css("background", "purple");
}

if (number > 100) {
    $(".vychod").text("whoah, that's a big number.");
  } else {
    $(".vychod").text("just a regular number, please.");
  }
  
  if (word === "cool") {
    $(".jih").text("Power of DOM");
  } else {
    $(".zapad").text("Power of DOM");
  }
