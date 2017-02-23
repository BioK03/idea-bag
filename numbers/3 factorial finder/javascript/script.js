
function submitForm(){
    var number = parseInt(document.querySelector("#number").value);

    var result = factorial(number);
    document.querySelector("#result").innerHTML = "Result : "+result;
}

function factorial(number){
    if(number == 1) return 1;
    return number*factorial(number-1);
}