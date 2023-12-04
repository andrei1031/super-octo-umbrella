var mymap = L.map('map').setView([16.384114750000002, 120.59481175], 20);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(mymap);

var marker = L.marker([16.384114750000002,120.59481175]).addTo(mymap);


marker.bindPopup("<b>Hello!</b><br>This is where i live").openPopup();
