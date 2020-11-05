const map = L.map('mapid').setView([-23.6705526,-46.4625083], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
})

function addMarker({id, name, lat, lng}) {

  const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
  }).setContent(`${name} <a href="/orphanage?id=${id}"><img src="/images/arrow-white.svg"></a>`)
  
  L.marker([lat,lng], {icon}).addTo(map)
      .bindPopup(popup);

}

const orphanagesSpan = document.querySelectorAll('.orphanages span')
orphanagesSpan.forEach(orphanageElement => {
  const orphanage ={
    id: orphanageElement.dataset.id,
    name: orphanageElement.dataset.name,
    lat: orphanageElement.dataset.lat,
    lng: orphanageElement.dataset.lng
  }
  addMarker(orphanage)
})
