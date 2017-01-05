L.mapbox.accessToken = 'pk.eyJ1IjoiYW5uYWJpYWxhcyIsImEiOiJjaWh3bzVybjUwMm92dGZraHFwcnY4bG16In0.j2Sl8c2UoLY_yHBjO1vAfQ';

	var map = L.mapbox.map('map', 'mapbox.dark', {
			attributionControl: false,
			zoomControl: false
		}) 
		// .setView([40.73997376331186, -74.1192626953125], 11);
		.setView([40.74959782183326, -74.0152359008789], 12);

	// Custom attribution via example at https://github.com/GovLab/www.thegovlab.org/blob/master/templates/contact.html

	var attribution = L.control.attribution();
		attribution.setPrefix('By Anna Bialas');
		attribution.addAttribution('Powered by &copy; <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <a href="http://mapbox.com/map-feedback/" class="mapbox-improve-map">Improve this map</a>');
	attribution.addTo(map);

	var zoom = L.control.zoom();
		zoom.setPosition('topright');
	zoom.addTo(map);
	
	map.scrollWheelZoom.disable();

	function stylem() {
	    return {
	        weight: 0.1,
	        opacity: 0.5,
	        color: '#FFF000',
	      };
	    }
	function stylebk() {
	    return {
	        weight: 0.1,
	        opacity: 0.5,
	        color: '#6CC83D',
	      };
	    }

	var geojsonbk;
	var geojsonm; 

	// Brooklyn loads first because it's a darker shade

	geojsonbk = L.geoJson(brooklyn, {
		style: stylebk
	}).addTo(map);	

	geojsonm = L.geoJson(manhattan, {
		style: stylem
	}).addTo(map);

	// Via Mike Bostock's http://bl.ocks.org/mapsam/e66a8d12c23e4bedd0ed

	window.togglem = false;
	window.togglebk = false;

	function toggleManhattan() {
  		if(!togglem) {
    		map.removeLayer(geojsonm);
  		} else {
    		map.addLayer(geojsonm);
  		}
  		togglem = !togglem;
	}

	function toggleBrooklyn() {
  		if(!togglebk) {
    		map.removeLayer(geojsonbk);
  		} else {
    		map.addLayer(geojsonbk);
  		}
  		togglebk = !togglebk;
	}