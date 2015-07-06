var geocoder;
var map;
var marker;
var idInfoBoxAberto;
var infoBox = [];

function abrirInfoBox(id, marker) {
    if (typeof (idInfoBoxAberto) == 'number' && typeof (infoBox[idInfoBoxAberto]) == 'object') {
        infoBox[idInfoBoxAberto].close();
    }

    infoBox[id].open(map, marker);
    idInfoBoxAberto = id;
}


function carregarPontos() {


    $.getJSON('js/pontos.json', function (pontos) {

        $.each(pontos, function (index, ponto) {

            var marker = new google.maps.Marker({
                icon: 'img/pizza.png',
                position: new google.maps.LatLng(ponto.Latitude, ponto.Longitude),
                title: "Meu ponto personalizado! :-D",
                map: map



            });

            var myOptions = {
                content: "<p>Conteúdo do InfoBox</p>",
                pixelOffset: new google.maps.Size(-150, 0)
            };

            infoBox[ponto.Id] = new InfoBox(myOptions);
            infoBox[ponto.Id].marker = marker;

            infoBox[ponto.Id].listener = google.maps.event.addListener(marker, 'click', function (e) {
                abrirInfoBox(ponto.Id, marker);
            });

        });


    });

}

function initialize() {
    function getUrlVars() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
            vars[key] = value;
        });
        return vars;
    }

    var first = getUrlVars()["latitude"];
    var second = getUrlVars()["longitude"];
    var latlng = new google.maps.LatLng(first, second);
    var options = {
        zoom: 5,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("mapa"), options);

    geocoder = new google.maps.Geocoder();

    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        icon: 'img/ico_1.png',
        animation: google.maps.Animation.BOUNCE
    });

    marker.setPosition(latlng);
    map.setZoom(14);
}

$(document).ready(function () {

    initialize();

    carregarPontos();

    function carregarNoMapa(endereco) {
        geocoder.geocode({'address': endereco + ', Brasil', 'region': 'BR'}, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[0]) {
                    var latitude = results[0].geometry.location.lat();
                    var longitude = results[0].geometry.location.lng();

                    $('#txtEndereco').val(results[0].formatted_address);
                    $('#txtLatitude').val(latitude);
                    $('#txtLongitude').val(longitude);

                    var location = new google.maps.LatLng(latitude, longitude);
                    marker.setPosition(location);
                    map.setCenter(location);
                    map.setZoom(16);
                }
            }
        })
    }

    $("#btnEndereco").click(function () {

        if ($(this).val() != "")
            carregarNoMapa($("#txtEndereco").val());

    });

    $("#txtEndereco").blur(function () {
        if ($(this).val() != "")
            carregarNoMapa($(this).val());
    });

    google.maps.event.addListener(marker, 'drag', function () {
        geocoder.geocode({'latLng': marker.getPosition()}, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[0]) {
                    $('#txtEndereco').val(results[0].formatted_address);
                    $('#txtLatitude').val(marker.getPosition().lat());
                    $('#txtLongitude').val(marker.getPosition().lng());
                }
            }
        });
    });

    $("#txtEndereco").autocomplete({
        source: function (request, response) {
            geocoder.geocode({'address': request.term + ', Brasil', 'region': 'BR'}, function (results, status) {
                response($.map(results, function (item) {
                    return {
                        label: item.formatted_address,
                        value: item.formatted_address,
                        latitude: item.geometry.location.lat(),
                        longitude: item.geometry.location.lng()
                    }
                }));
            })
        },
        select: function (event, ui) {
            $("#txtLatitude").val(ui.item.latitude);
            $("#txtLongitude").val(ui.item.longitude);
            var location = new google.maps.LatLng(ui.item.latitude, ui.item.longitude);
            marker.setPosition(location);
            map.setCenter(location);
            map.setZoom(16);
        }
    });



    $("form").submit(function (event) {

        /*event.preventDefault();
         
         var endereco = $("#txtEndereco").val();
         var latitude = $("#txtLatitude").val();
         var longitude = $("#txtLongitude").val();
         
         alert("Endereço: " + endereco + "\nLatitude: " + latitude + "\nLongitude: " + longitude);
         */
    });

});