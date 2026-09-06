maptilersdk.config.apiKey = map_api;

const map = new maptilersdk.Map({
  container: "map", // container's id or the HTML element to render the map
  style: maptilersdk.MapStyle.STREETS.DARK,
  center: listing.geometry.coordinates,
  zoom: 10,
});

const markerElement = document.createElement("i");

markerElement.className = "fa-regular fa-compass";
markerElement.style.fontSize = "25px";

const marker = new maptilersdk.Marker({ element: markerElement })
  .setLngLat(listing.geometry.coordinates)
  .setPopup(
    new maptilersdk.Popup({ offset: 25 }).setHTML(
      "<h4>listing.title!</h4><p>exact location provided after provided!</p>;",
    ),
  )
  .addTo(map);
