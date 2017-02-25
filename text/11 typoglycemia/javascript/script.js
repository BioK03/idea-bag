

function submitForm(){
    var text = document.querySelector("#text").value;
    var words = text.split(" ");
    var result = "";

    for(var i=0; i<words.length; i++){
        result += typoglycemia(words[i])+" ";
    }

    document.querySelector("#result").innerHTML = "Result : "+result;
}

function typoglycemia(text){
    text = text.toString();
    var result = "";
    
    result = text.substr(1, text.length-2).split('').sort(function(){return 0.5-Math.random()}).join('');
    result = text.charAt(0)+result+text.charAt(text.length-1);
    return result;
}