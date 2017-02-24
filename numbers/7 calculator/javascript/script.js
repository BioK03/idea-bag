
var equation = "0";

(function(){
    declareEvents();
    printEquation();
})();

function declareEvents(){
    var numberElements = document.getElementsByClassName("number");
    for(var i=0; i<numberElements.length; i++){
        numberElements[i].addEventListener("click", function(){
            if(equation == "0"){
                equation = "";
            }
            equation += this.innerHTML;

            printEquation();
        });
    }

    var operatorElements = document.getElementsByClassName("operator");
    for(var i=0; i<operatorElements.length; i++){
        operatorElements[i].addEventListener("click", function(){
            var lastCharacter = equation[equation.length-1];
            if(lastCharacter == "+" || lastCharacter == "-" || lastCharacter == "/" || lastCharacter == "*"){
                equation = equation.substr(0, equation.length-1) + this.innerHTML;
            }else{
                equation += this.innerHTML;
            }

            printEquation();
        });
    }

    document.getElementById("correction").addEventListener("click", function(){
        if(equation.length == 1){
            equation = "0";
        }else{
            equation = equation.substr(0, equation.length-1);
        }
        printEquation();
    });

    document.getElementById("reset").addEventListener("click", function(){
        equation = "0";
        printEquation();
    });

    document.getElementById("validate").addEventListener("click", function(){
        var result = 0;

        result = eval(equation);
        result = result.toString();

        if(result == Infinity || result == -Infinity){
            alert("Error : Forbidden operation");
        }else{
            equation = result;
        }

        document.getElementById("result").innerHTML = result;
    });
    
}

function printEquation(){
    document.querySelector("#result").innerHTML = equation;
}