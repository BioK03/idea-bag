
function submitForm(){
    var number = parseInt(document.querySelector("#number").value);

    var result = number;
    var numberIterations = 0;
    var currentResult = number;
    console.log(currentResult.toString());

    while (currentResult > 2 && numberIterations < 50){
        currentResult = happynumber(currentResult);
        result += " > "+currentResult;
        numberIterations++;
    }

    if(currentResult == 1){
        result = "This number is happy :) ! <br/>"+result;
    } else {
        result = "This number is unhappy :( ! <br/>"+result;
    }
    
    document.querySelector("#result").innerHTML = "Result : "+result;
}

function happynumber(number){
    var stringNumber = number.toString();
    var result = 0;
    for(var i=0; i<stringNumber.length; i++){
        result += parseInt(stringNumber.charAt(i))*parseInt(stringNumber.charAt(i));
    }
    return result;
}