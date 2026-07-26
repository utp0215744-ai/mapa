const origen = [19.0583, -98.1531]; 
const destino = [19.0601, -98.1402];

const rutaCoordenadas = [
  origen,
  [19.0615, -98.1510],
  [19.0608, -98.1460],
  destino
];

const map = L.map('map').setView(origen, 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap'
}).addTo(map);

L.marker(origen).addTo(map).bindPopup("Origen: PEPSI");
L.marker(destino).addTo(map).bindPopup("Destino: UTP");

L.polyline(rutaCoordenadas, {
  color: '#8A2BE2',
  weight: 6,
  opacity: 0.8
}).addTo(map);

const carIcon = L.icon({
  iconUrl: 'car.png',
  iconSize: [35, 35],
  iconAnchor: [17, 17]
});

const autoMarker = L.marker(origen, { icon: carIcon }).addTo(map);

function animarVehiculo(puntos, duracionPaso = 1000) {
  let indice = 0;

  function mover() {
    if (indice < puntos.length) {
      autoMarker.setLatLng(puntos[indice]);
      indice++;
      setTimeout(mover, duracionPaso);
    }
  }

  mover();
}

setTimeout(() => {
  animarVehiculo(rutaCoordenadas, 2000);
}, 1500);