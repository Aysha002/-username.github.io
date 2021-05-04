// Карта
function initMap() {
	var opt = {
		center:{lat:43.225203256214385, lng:76.89174316849228},
		zoom: 12
	}

	var map =new google.maps.Map(document.getElementById("map"), opt);

	
	var icon2 = {
		url:"https://upload.wikimedia.org/wikipedia/en/2/2c/Lay%E2%80%99s_Chips_2019_Logo.png",
		scaledSize: new google.maps.Size(30, 30),
		origin: new google.maps.Point(0, 0),
		anchor: new google.maps.Point(0, 0)
	};
	var icon3 = {
		url:"https://upload.wikimedia.org/wikipedia/en/2/2c/Lay%E2%80%99s_Chips_2019_Logo.png",
		scaledSize: new google.maps.Size(30, 30),
		origin: new google.maps.Point(0, 0),
		anchor: new google.maps.Point(0, 0)
	};
	
	var marker2 = new google.maps.Marker({
		position: {lat:43.20587470662501, lng:76.8981804699459},
		map: map,
		icon: icon2
	});
	var marker3 = new google.maps.Marker({
		position: {lat:43.227704885900316, lng:76.86384819414167},
		map: map,
		icon: icon3
	});
	
}


$(document).ready(function(){
  $(".h1").click(function(){
    $(".text1").toggle(500);
  });
    $(".h2").click(function(){
    $(".text2").toggle(500);
  });
      $(".h3").click(function(){
    $(".text3").toggle(500);
  });
});


 AOS.init();

function changeCursor(){
  document.body.style.cursor = "url('chips1.png')";

}
