
function submitForm(){
    var text = document.querySelector("#text").value;
    var result = "";

    result = countVowels(text);

    document.querySelector("#result").innerHTML = "Result : "+result;
}

function countVowels(text){
    var result = 0;
    text = text.toString();
    for(var i=0; i<text.length; i++){
        var character = text.charAt(i).toLowerCase();
        if(character == "a" || character == "e" || character == "i" || character == "o" || character == "u" || character == "y"){
            result++;
        }
    }
    return result;
}