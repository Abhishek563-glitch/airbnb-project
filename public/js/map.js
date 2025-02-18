mapboxgl.accessToken = mapToken;

const mapCoordinates =coordinates  ||  [77.209, 28.6139];

console.log(mapCoordinates);
console.log(coordinates);

if (mapCoordinates && Array.isArray(mapCoordinates) && mapCoordinates.length === 2) {
    const [longitude, latitude] = mapCoordinates;

    if (!isNaN(longitude) && !isNaN(latitude) && latitude >= -90 && latitude <= 90 && longitude >= -180 && longitude <= 180) {
        const map = new mapboxgl.Map({
            container: 'map',
            style: "mapbox://styles/mapbox/streets-v12",
            center: [longitude, latitude],
            zoom: 9,
        });

        console.log("Map initialized with valid coordinates:", mapCoordinates);

        new mapboxgl.Marker()
            .setLngLat(mapCoordinates)
            .addTo(map);
    } else {
        console.error("Invalid latitude or longitude values:", mapCoordinates);
    }
} else {
    console.error("Coordinates are missing or not in the correct format:", mapCoordinates);
}

