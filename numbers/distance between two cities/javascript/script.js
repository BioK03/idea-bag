var location1;
var location2;

function submitForm() {

    var address1 = document.querySelector("#address1").value;
    var address2 = document.querySelector("#address2").value;
    console.log(address1+" "+address2);
    fetchAddress1(address1, address2);
    return false;
}


function fetchAddress1(address1, address2) {
    

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(xhr.responseText));
            var jsonLocation = JSON.parse(xhr.responseText)["results"][0]["geometry"]["location"];
            location1 = [jsonLocation.lat, jsonLocation.lng];

            fetchAddress2(address2);
            
            
        }
    };
    xhr.open("GET", "https://maps.googleapis.com/maps/api/geocode/json?address="+address1+"&key=AIzaSyDmFNSuYT9lWfr_mLlS0-pS0Td_EisY1Yo", true);
    xhr.send();
}

function fetchAddress2(address2){
    var xhr2 = new XMLHttpRequest();
    xhr2.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(xhr2.responseText));
            var jsonLocation = JSON.parse(xhr2.responseText)["results"][0]["geometry"]["location"];
            location2 = [jsonLocation.lat, jsonLocation.lng];

            calculateDistance(location1[0], location1[1], location2[0], location2[1]);
            
        }
    };
    xhr2.open("GET", "https://maps.googleapis.com/maps/api/geocode/json?address="+address2+"&key=AIzaSyDmFNSuYT9lWfr_mLlS0-pS0Td_EisY1Yo", true);
    xhr2.send();
}

function calculateDistance(lat1, lon1, lat2, lon2) {
    var R = 6371;
    var dLat = deg2rad(lat2-lat1);
    var dLon = deg2rad(lon2-lon1); 
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon/2) * Math.sin(dLon/2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c;
    d = Math.round(d*100)/100;
    document.querySelector("#distance").innerHTML = "Distance : "+d+" kms";
}

function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}