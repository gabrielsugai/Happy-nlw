const map = L.map('mapid').setView([-23.6705526,-46.4625083], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
})

const popup = L.popup({
  closeButton: false,
  className: 'map-popup',
  minWidth: 240,
  minHeight: 240
}).setContent('Ex Orfanato <a href="orphanage.html?id=1" class=""choose-orphanage"> <img src="./public/images/arrow-white.svg"></a>')

L.marker([-23.6705526,-46.4625083], {icon}).addTo(map)
    .bindPopup(popup);
