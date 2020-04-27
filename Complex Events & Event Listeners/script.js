
$('#b1').click(() => {
  console.log("Yeh, you clicked me.");
});

$('#b1').click(() => {
  $('#b1').text("Yeh, you clicked me");
});


$('#b2').click(() => {
  $('#b1').text("Second one was clicked");
  $('#b2').text("Yeh, you clicked me");
});

$('#b3').on('click',() =>{
  $('#b2').text("Third one was clicked and colored all");
  $('#b3').text("Yeh, you clicked me");
  let novabarva = document.getElementById("inputbarva").value;
  $('button').css('background', novabarva);
  $('button').css('color', 'white');
  $('button').css('font-size', '20px');
  $('button').css('padding', '20px');
  $('button').css('font-weight', 'bold');
  //$('button').css('border-radius', '25%');
  
});
