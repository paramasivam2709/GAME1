// ...existing code...
function initialize() {
    // Stackly Salem office coordinates
    var stacklySalem = new google.maps.LatLng(11.6643, 78.1460);

    var myOptions = {
        zoom: 16,
        center: stacklySalem,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
        mapTypeControl: false,
        zoomControl: false,
        streetViewControl: false,
    }
    var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);

    // Info window for Stackly Salem office
    var infoContent = '<div style="font-weight:700">Stackly Salem Office</div><div>Salem, Tamil Nadu, India</div>';
    var infowindow = new google.maps.InfoWindow({ content: infoContent });

    var marker = new google.maps.Marker({
        map: map,
        position: stacklySalem,
        title: 'Stackly Salem Office'
    });

    google.maps.event.addListener(marker, "click", function() {
        infowindow.open(map, marker);
    });
}
google.maps.event.addDomListener(window, 'load', initialize);
// ...existing code...