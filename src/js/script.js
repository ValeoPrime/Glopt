ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map", {
            center: [55.75368682, 37.62671549],
            zoom: 16,
        }),

        myPlacemarkWithContent = new ymaps.Placemark([55.75399400, 37.62209300], {
            hintContent: 'Собственный значок метки с контентом',
            balloonContent: 'А эта — новогодняя',
            iconContent: '12'
        }, {
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../img/icons/metka__icon.png',
            // Размеры метки.
            iconImageSize: [51, 63],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            
        });

    myMap.geoObjects
        .add(myPlacemarkWithContent);
    myMap.behaviors.disable('scrollZoom');
    }
