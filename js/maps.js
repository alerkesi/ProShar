	var markers = [
	{
		"town": 'Москва',//Город
		"lat": '54.993559',//Координаты
		"lng": '36.979218',//Координаты
		"count": '1'//Кол-во дилеров в городе
	},
	{
		"town": 'Пенза',
		"lat": '53.23544643',
		"lng": '45.00234543',
		"count": '2'
	},
	 {
		"town": 'Город, которого нет',
		"lat": '66.56898938',
		"lng": '58.81503762',
		"count": '3'
	},
	];
	window.onload = function () {
		LoadMap();
	}
	function LoadMap() {
		var gmarkers = [];
		var oz = new google.maps.LatLng(63.898731,58.139648);
		var MY_MAPTYPE_ID = 'ProShar';
		var mapOptions = {
			zoom: 4,
			scrollwheel: false,
			zoomControl: false,
			mapTypeControl: false,
			scaleControl: false,
			streetViewControl: false,
			rotateControl: false,
			fullscreenControl: false,
			center: oz,
			mapTypeControlOptions: {
				mapTypeIds: [MY_MAPTYPE_ID]
			},
			mapTypeId: MY_MAPTYPE_ID
		};
		var featureOpts = [
			{
				"featureType": "landscape",
				"elementType": "geometry",
				"stylers": [
					{ "color": "#211f1f" },
					{ "visibility": "simplified" }
				]
			},{
				"featureType": "water",
				"stylers": [
					{ "color": "#0a0909" }
				]
			},{
				"featureType": "administrative",
				"elementType": "labels.text",
				"stylers": [
					{ "visibility": "on" },
					{ "invert_lightness": true }
				]
			},{
				"featureType": "road",
				"elementType": "labels",
				"stylers": [
					{ "color": "#808080" }
				]
			},{
				"featureType": "road",
				"elementType": "labels",
				"stylers": [
					{ "visibility": "on" },
					{ "color": "#a5a5a5" }
				]
			},{
				"featureType": "poi",
				"elementType": "geometry",
				"stylers": [
					{ "color": "#211f1f" },
					{ "visibility": "off" }
				]
			},{
				"featureType": "poi",
				"elementType": "labels",
				"stylers": [
					{ "visibility": "off" }
				]
			},{
				"featureType": "transit.station",
				"elementType": "geometry",
				"stylers": [
					{ "visibility": "off" }
				]
			},{
				"featureType": "administrative",
				"elementType": "geometry",
				"stylers": [
					{ "color": "#808080" },
					{ "visibility": "on" }
				]
			},{
				"featureType": "road",
				"elementType": "geometry",
				"stylers": [
					{ "visibility": "on" },
					{ "color": "#808080" }
				]
			},{
				"featureType": "road",
				"elementType": "labels",
				"stylers": [
					{ "visibility": "off" }
				]
			},{
				"featureType": "transit",
				"elementType": "labels.text",
				"stylers": [
					{ "visibility": "on" },
					{ "color": "#ffffff" },
					{ "weight": 0.1 }
				]
			},{
				"featureType": "administrative",
				"elementType": "labels",
				"stylers": [
					{ "visibility": "on" },
					{ "weight": 0.1 },
					{ "color": "#9f9f9f" }
				]
			}
		];
		var map = new google.maps.Map(document.getElementById('map_canvas'),
		mapOptions);
		var styledMapOptions = {
			name: 'Proshar Style'
		};
		var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);
		map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
		
		var latlngbounds = new google.maps.LatLngBounds();	
		var image = new google.maps.MarkerImage('images/fill_logo.png',      
			new google.maps.Size(22, 21),      
			new google.maps.Point(0,0),      
			new google.maps.Point(0, 32));
		var imageActive = new google.maps.MarkerImage('images/fill_active.png',      
			new google.maps.Size(107, 103),
			new google.maps.Point(0,0),       
			new google.maps.Point(42.5, 73.5)); 

		//Create and open InfoWindow.
		var infoWindow = new google.maps.InfoWindow();

		for (var i = 0; i < markers.length; i++) {
			var data = markers[i];
			var myLatlng = new google.maps.LatLng(data.lat, data.lng);
			latlngbounds.extend(myLatlng);
			var marker = new google.maps.Marker({
				position: myLatlng,
				map: map,
				icon: image,  
				title: data.town
			});

			
 
			//Attach click event to the marker.
			(function (marker, data) {
				google.maps.event.addListener(marker, "click", function (e) {
					var text = '<div class="marker">'+
									'<div class="popup">'+
										'<div class="title_popup">'+ data.town +'</div>'+
										'<div class="diler">Дилеров: <span>('+ data.count +')</span></div>'+
										'<a href="#" onclick="mapsModal()" class="btn btn-default">подробнее</a>'+
									'</div>'+
								'</div>';
					infoWindow.setContent(text );
					infoWindow.open(map, marker);

					for (var i=0; i<gmarkers.length; i++) {
						gmarkers[i].setIcon(image);
					}
					this.setIcon(imageActive);
				});

			})(marker, data);
			
			gmarkers.push(marker);
		}
	}
