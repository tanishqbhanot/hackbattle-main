const socket = io();

console.log("Heyyyyyyyyyy.");

if (navigator.geolocation) {
    navigator.geolocation.watchPosition(
      (position)=> {
        const {latitude, longitude} = position.coords;
        socket.emit("send-location", {latitude, longitude});
    }, 
      (error)=>{
        console.error("error");
    },
    {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    }
  );
}

const map = new L.map("map").setView([0, 0], 10);

var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: "SHUTLr"
});

layer.addTo(map);

const markers = {};

socket.on("received-location", (data)=>{
  const {id, latitude, longitude} = data;
  map.setView([latitude, longitude], 19);
  if (markers[id]) {
    markers[id].setLatLng([latitude, longitude], );
  }
  else {
    markers[id] = L.marker([latitude, longitude]).addTo(map);
  }
});

socket.on("user-disconnected", (id) => {
  if(markers[id]) {
    map.removeLayer(markers[id]);
    delete markers[id];
  }
})

