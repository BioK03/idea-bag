
function submitForm(){
    var number = parseInt(document.querySelector("#number").value);

    console.log(Math.PI * Math.pow(10, number));

    var result = Math.round((Math.PI * Math.pow(10, number) )%10);
    
    document.querySelector("#result").innerHTML = "Result : "+result;
}

