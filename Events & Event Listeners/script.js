$("button").on('click', (event) => {
    console.log("Yeah, you clicked me");
  });

  $("#first").click(() => {
    $("#first").text("Yeah, you clicked me.");
  });

  $("#second").click(() => {
    $("#first").text("Second one was clicked.");
    $("#second").text("Yeah, you clicked me.");
  });


$("#prettify").click(() => {
  $("#prettify").text("Yeah, you clicked me.");
  $("#second").text("Third one was clicked and colored all.");
  $("button").css("background", "red");
  $("button").css("color", "white");
  $("button").css("font-size", "20px");
  $("button").css("border", "0");
  $("button").css("border-radius", "5px");
  
});


