var geocoder;
var map;
var marker;

function carregarNoMapa(endereco) {


    geocoder.geocode({'address': endereco + ', Brasil', 'region': 'BR'}, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[0]) {
                var latitude = results[0].geometry.location.lat();
                var longitude = results[0].geometry.location.lng();

                $('#txtEndereco').val(results[0].formatted_address);
                $('#txtLatitude').val(latitude);
                $('#txtLongitude').val(longitude);

                window.location = 'search.html?endereco=' + endereco + '&latitude=' + latitude + '&longitude=' + longitude;
            }
        }
    });
}
function initialize() {
    var latlng = new google.maps.LatLng(-18.8800397, -47.05878999999999);
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
        icon: 'http://res.cloudinary.com/hhktgqpms/image/upload/v1438017935/ico_1_eucvwo.png',
        animation: google.maps.Animation.BOUNCE
    });

    marker.setPosition(latlng);
}

$(document).ready(function () {
    initialize();

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
    $("#txtEndereco").blur(function () {
        if ($(this).val() != "")
        {
            carregarNoMapa($(this).val());



        }
    });

    $("#btnEndereco").click(function (event) {
       event.preventDefault();
        if($(this).val() != "")
        {
            event.preventDefault();
            var endereco = $("#txtEndereco").val();
            var latitude = $("#txtLatitude").val();
            var longitude = $("#txtLongitude").val();

            /*alert("Endereço: " + endereco + "\nLatitude: " + latitude + "\nLongitude: " + longitude);
             */

            /* window.location.href = "search.html";*/
            window.location = 'search.html?endereco=' + endereco + '&latitude=' + latitude + '&longitude=' + longitude;

        }

    });

    $("#btnEnviar").click(function (event) {
        event.preventDefault();

        function success(position) {
            var s = document.querySelector('#btnEnviar');

            if (s.className == 'success') {
                return;
            }




            var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;



            window.location = 'search.html?latitude=' + latitude + '&longitude=' + longitude;

        }

        function error(msg) {
            var s = document.querySelector('#status');
            s.innerHTML = typeof msg == 'string' ? msg : "falhou";
            s.className = 'fail';
        }

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        } else {
            error('Seu navegador não suporta <b style="color:black;background-color:#ffff66">Geolocalização</b>!');
        }


    });
});