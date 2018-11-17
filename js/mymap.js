function initMap(){
  var home = {lat: 36.632261, lng: 127.418938};
  var school = {lat: 36.630682, lng: 127.459258};
  var church = {lat: 36.625481, lng: 127.438071};
  var mountain = {lat: 36.635119, lng: 127.411972};
  var park = {lat: 36.629463, lng: 127.432550}; 
  var busterminal = {lat: 36.625090, lng: 127.432120}; 
  var middleschool = {lat: 36.630858, lng: 127.433554}; 
  var cafe = {lat: 36.631549, lng: 127.426850};
  var movietheather = {lat: 36.632655, lng: 127.460420};

  var map = new google.maps.Map(
    document.getElementById('map'), {
    zoom: 14, center: home
    }
  );

  var marker1 = new google.maps.Marker({
    position: home,
    map: map
  });

  var marker2 = new google.maps.Marker({
    position: school,
    map: map
  });

  var marker3 = new google.maps.Marker({
    position: church,
    map: map
  });

  var marker4 = new google.maps.Marker({
    position: mountain,
    map: map
  });

  var marker5 = new google.maps.Marker({
    position: park,
    map: map
  });

  var marker6 = new google.maps.Marker({
    position: busterminal,
    map: map
  });

  var marker7 = new google.maps.Marker({
    position: middleschool,
    map: map
  });

  var marker8 = new google.maps.Marker({
    position: cafe,
    map: map
  });

  var marker9 = new google.maps.Marker({
    position: movietheather,
    map: map
  });
}