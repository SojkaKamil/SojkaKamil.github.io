$('button').click(() => {
	$('.todos').append(`<div class="todos-container">${$('input').val()}<img src="trash.png" alt="trash" class="delete"></img><img src="check1.png" alt="check" class="check"></img></div>`);
	$('input').val("");

	$('.todos').css('font-family', `'Oxygen', sans-serif`);
	$('.todos').css('font-weight', 'bold');
	$('.todos').css('letter-spacing', '1px');

	$('.todos-container').css('position', 'relative');

	$('.check').css('position', 'absolute');
	$('.check').css('right', '0px');
	$('.check').css('height', '20px');

	
	$('.delete').css('position', 'absolute');
	$('.delete').css('right', '25px');
	$('.delete').css('height', '20px');

	$('.todos-container').css('margin', '15px 0px');

	$('.todos-container').off().on('click', '.check',(event) => {
		if($(event.target).css('content') === 'normal'){
			$( ).css('content', 'url("./check2.png")');
		} else if($(event.target).css('content')[$(event.target).css('content').length-7] === '1'){
			$(event.target).css('content', 'url("./check2.png")');
		} else {
			$(event.target).css('content', 'url("./check1.png")');
		}

		if ($(event.target).parent().css('color') === 'rgb(68, 68, 68)') {
			$(event.target).parent().css('color', '#CCC');
		} else {
			$(event.target).parent().css('color', '#444');
		}
	});

	$('.todos-container').on('click', '.delete', (event) => {
		$(event.target).parent().remove();
	 });
});