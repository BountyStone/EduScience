document.addEventListener('DOMContentLoaded', function() {
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 100,
        values: [10, 90],
        slide: function(event, ui) {
            console.log("Slider values: " + ui.values[0] + " - " + ui.values[1]);
        }
    });

    if (document.getElementById('google-map')) {
        initMap();
    }
});

function initMap() {
    const myLatLng = { lat: 49.577197, lng: 34.5658835 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: myLatLng,
    });

    new google.maps.Marker({
        position: myLatLng,
        map,
        title: "EduScience",
    });
}