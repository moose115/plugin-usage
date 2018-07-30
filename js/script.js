var templateCar = document.getElementById('template-car-cell').innerHTML;

Mustache.parse(templateCar);

var cells = document.querySelectorAll('.carousel-cell');

cells.forEach(function (item, index) {
  item.innerHTML = Mustache.render(templateCar, carArray[index]);
});


var elem = document.querySelector('.carousel');
var flkty = new Flickity(elem, {
  // options
  wrapAround: true,
  pageDots: false,
  hash: true
});

var returnButton = document.getElementById('return');
returnButton.addEventListener('click', function () {
  flkty.select(0, true, false)
})

var progressBar = document.querySelector('.progress-bar')

flkty.on('scroll', function (progress) {
  progress = Math.max(0, Math.min(1, progress));
  progressBar.style.width = progress * 100 + '%';
});

window.initMap = function () {
  // The map, centered at Uluru
  var map = new google.maps.Map(
    document.getElementById('map'), { zoom: 4, center: carArray[0].coords });
  // The marker asignment
  carArray.forEach(function (element, index) {
    // Here every marker get's his own coord
    var marker = new google.maps.Marker({ position: element.coords, map: map });
    //This listener binds cell changing to markers
    marker.addListener('click', function () {
      //Cell change
      isMarkerClicked = true;
      flkty.select(index, true, false);
      isMarkerClicked = false;
    })
  });

  var isMarkerClicked; // Control var
  flkty.on('change', function (index) {
    if(!isMarkerClicked) {
      map.panTo(carArray[index].coords);
    }
  });

};


