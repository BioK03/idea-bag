

function submitForm(){
    var text = document.querySelector("#text").value;
    var words = text.split(" ");
    var result = "";

    for(var i=0; i<words.length; i++){
        result += inverseWord(words[i])+"ay ";
    }

    document.querySelector("#result").innerHTML = "Result : "+result;
}

function inverseWord(text){
    text = text.toString();
    var result = "";
    for(var i=0; i<text.length; i++){
        result = text[i] + result;
    }
    return result;
}