var templateCar = document.getElementById('template-car-cell').innerHTML;

Mustache.parse(templateCar);

var cells = document.querySelectorAll('.carousel-cell');

cells.forEach(function(item, index) {
  item.innerHTML = Mustache.render(templateCar, carArray[index]);
});


var elem = document.querySelector('.carousel');
var flkty = new Flickity( elem, {
  // options
  wrapAround: true,
  pageDots: false,
  hash: true
});

var returnButton = document.getElementById('return');
returnButton.addEventListener('click', function() {
  flkty.select( 0, true, false )
})

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});