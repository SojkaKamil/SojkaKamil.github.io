let names = ['Bob', 'Bill', 'Boris','Kamil'];

names.forEach((name) => {
    $('ul').append('<li>'+ name + '</li>');
 
})

$('li:last-child').css('font-weight', 'bold');

$('body').append('<h2>Added with javascript</h2>');
$('body').append("<p>This block was added using JavaScript's jQuery library. How awesome!</p>");