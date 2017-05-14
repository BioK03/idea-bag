var result = "";

var tails = 0;
var heads = 0;


function coinflip() {
    var random = Math.random();
    var tempString = "";

    if(random > 0.5){
        tails++;
        tempString = "It's a tail !";
    }else{
        heads++;
        tempString = "It's a head !";
    }

    document.querySelector("#result").innerHTML = tempString+"<br/>"+tails+"T, "+heads+"H";
}