let currentPhoto = 0;
let imagesData = [
	{
		photo: 'images/Manhattan.jpg',
		title: 'USA, New York City, Manhattan',
		description: 'Midtown Manhattan is the central portion of the New York City borough of Manhattan. Midtown is home to some of the city`s most prominent buildings, including the Empire State Building, the Chrysler Building, the Hudson Yards Redevelopment Project, the headquarters of the United Nations, Grand Central Terminal, and Rockefeller Center, as well as tourist destinations such as Broadway and Times Square.'
	},

	{
		photo: 'images/Riomaggiore.jpg',
		title: 'Italy, Cinque Terre, Riomaggiore',
		description: 'The Cinque Terre is a coastal area within Liguria, in the northwest of Italy. It lies in the west of La Spezia, and comprises five villages: Monterosso al Mare, Vernazza, Corniglia, Manarola, and Riomaggiore. The coastline, the five villages, and the surrounding hillsides are all part of the Cinque Terre National Park a UNESCO World Heritage Site.'
	},

	{
		photo: 'images/Ponte de Lima.jpg',
		title: 'Portugal, Ponte de Lima, Camino',
		description: 'Ponte de Lima is one of the most characterful and charming towns of northern Portugal, if not the whole of the country. The town sits on the southern banks of the slow-flowing Lima River, and this location has been the main river crossing since the Romans constructed a bridge in 1AD.'
	},

	{
		photo: 'images/Zeeland.jpg',
		title: 'Netherlands, Zeeland Coast',
		description: 'Zeeland is the westernmost and least populous province of the Netherlands. Large parts of Zeeland are below sea level. In the summer, its beaches make it a popular destination for tourists.'
	},

	{
		photo: 'images/Padron.jpg',
		title: 'Spain, Padrón Monastery, Camino',
		description: 'Padrón is a concello (Galician for municipality) in the Province of A Coruña, in Galicia. In modern days, the town is the last stop on the Portuguese Way path of the Camino de Santiago. '
	},

	{
		photo: 'images/Brooklyn Bridge.jpg',
		title: 'USA, New York, Brooklyn Bridge',
		description: 'The Brooklyn Bridge is a hybrid cable-stayed/suspension bridge in New York City, spanning the East River between the boroughs of Manhattan and Brooklyn. Opened on May 24, 1883, the Brooklyn Bridge was the first fixed crossing across the East River. It was also the longest suspension bridge in the world at the time, with a main span of 1,595.5 feet (486.3 m) and a deck height of 127 ft (38.7 m) above mean high water.'
	},

	{
		photo: 'images/HP.jpg',
		title: 'Warner Bros Studio Tour London',
		description: 'Step on to authentic sets, discover the magic behind spellbinding special effects and explore the behind-the-scenes secrets of the Harry Potter film series. Discover the iconic Hogwarts Great Hall and explore the Forbidden Forest, all before boarding the original Hogwarts Express at Platform 9 ¾ and wandering down Diagon Alley. Located at the Studios where all eight films were produced, the Studio Tour showcases the British talent, imagination and artistry that went into making the impossible a reality on screen. Visitors will relive the magic through the eyes of the filmmakers who brought the Harry Potter film series to life.'
	},

	{
		photo: 'images/Fuerteventura.jpg',
		title: 'Canary Islands, Fuerteventura',
		description: 'Fuerteventura is one of the Canary Islands, in the Atlantic Ocean and is part of the North Africa region, politically part of Spain. At 1,659.74 square kilometres, it is the second largest of the Canary Islands, after Tenerife. It was declared a biosphere reserve by UNESCO in May 2009.'
	},

	{
		photo: 'images/Germany.jpg',
		title: 'Germany, Berlin',
		description: 'The Brandenburg Gate is an 18th-century neoclassical monument in Berlin, built on the orders of Prussian king Frederick William II after the temporary restoration of order during the Batavian Revolution. One of the best-known landmarks of Germany, it was built on the site of a former city gate that marked the start of the road from Berlin to the town of Brandenburg an der Havel, which used to be capital of the Margraviate of Brandenburg. '
	},
];

let loadPhoto = (photoNumber) => {
	$('#photo').attr('src', imagesData[photoNumber].photo);
	$('#photo-title').text(imagesData[photoNumber].title);
	$('.thumbnail-container div').remove('.this-arrow');
	$(`*[data-number="${photoNumber}"]`).parent().prepend('<div class="this-arrow"></div>');
}

let i = 0;
imagesData.forEach((data) => {
	$('.thumbnail-container').append(`<div style="position: relative"><div class="hidden-title">${data.title}<div class="hidden-arrow"></div></div><img src="${data.photo}" class="thumbnail" data-number="${i}"></img></div>`);
	i++;
});

loadPhoto(currentPhoto);

$('.thumbnail').click((event) => {
	currentPhoto = $(event.target).attr('data-number');
	loadPhoto(currentPhoto);
});

$('#right-arrow').click(() => {
	currentPhoto++;
	currentPhoto = currentPhoto % 9;
	loadPhoto(currentPhoto);
});

$('#left-arrow').click(() => {
	currentPhoto--;
	currentPhoto = (currentPhoto + 9) % 9;
	loadPhoto(currentPhoto);
});

$('.text-container').hover(() => {
	$('#photo-description').text(imagesData[currentPhoto].description);
}, () => {
	$('#photo-description').text("");
});

$('.thumbnail').hover((event) => {
	$(event.target).parent().children('.hidden-title').css('visibility', 'unset');
}, (event) => {
	$(event.target).parent().children('.hidden-title').css('visibility', 'hidden');
});