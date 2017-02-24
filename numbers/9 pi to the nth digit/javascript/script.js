
function submitForm(){
    var number = parseInt(document.querySelector("#number").value);

    console.log(Math.PI * Math.pow(10, number));

    var result = Math.round((Math.PI * Math.pow(10, number) )%10).toString().charAt(0);

    var piResult = Math.round(Math.PI * Math.pow(10, number))/Math.pow(10, number);
    
    document.querySelector("#result").innerHTML = "Pi to the Nth digit : "+piResult+"<br/>Digit : "+result;
}

