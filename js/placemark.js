ymaps.ready(init);

function init(){

    var myMap;

    myMap = new ymaps.Map("map", {
        center: [59.939140, 30.321418],
        zoom: 17,
        controls: ["smallMapDefaultSet"]
    });


    var myPlacemark = new ymaps.Placemark([59.938667, 30.323073] , {},
        { iconLayout: "default#image",
          iconImageHref: "img/map-marker.png",
          iconImageSize: [231, 190],
          iconImageOffset: [-55, -205] });

    myMap.geoObjects.add(myPlacemark);

}
