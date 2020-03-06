jQuery(document).ready(function($) {
			var maLatitude;		/*Variable gobale contenant la latitude*/
			var maLongitude;	/*Variable gobale contenant la longitude*/	
		
			if (navigator.geolocation)
				navigator.geolocation.getCurrentPosition(showPosition);
			else
			alert("Votre navigateur ne prend pas en compte la géolocalisation HTML5");
			});	
			
			function showPosition(position){
				maLatitude= position.coords.latitude;
				maLongitude= position.coords.longitude;	
				alert(maLatitude + ", " + maLongitude );
		}	