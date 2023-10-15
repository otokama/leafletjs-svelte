
const satelliteImageryURL =
	'https://api.maptiler.com/maps/satellite/{z}/{x}/{y}.jpg?key=GkYr5Cb2AvoR2Id4tCHT';
const mapTilerURL =
	'https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}@2x.png?key=GkYr5Cb2AvoR2Id4tCHT';
const cartoMapURL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

function getGooglePlaceCoordinates(place) {
	const loc = place.geometry.location;
	if (!loc) {
		return null;
	}
	return [loc.lat(), loc.lng()];
}

function getTooltipOffsetCoor(polygon) {
	const offset_x = (polygon._pxBounds.max.x - polygon._pxBounds.min.x) / 2;
	const offset_y = (-1 * (polygon._pxBounds.max.y - polygon._pxBounds.min.y)) / 2;
	return [offset_x, offset_y];
}

export { cartoMapURL, mapTilerURL, satelliteImageryURL };

