
function submitForm(){
    var text = document.querySelector("#text").value;
    var result = "";

    var words = text.split(" ");
    for(var i = 0; i<words.length; i++){
        result += words[i]+((isInOrder(words[i]))?" - in order":" - not in order")+"<br/>";
    }

    document.querySelector("#result").innerHTML = "Result : "+result;
}

function isInOrder(text){
    var ascii = 0;

    for(var i=0; i<text.length; i++){
        if(text.charCodeAt(i) < ascii){return false;}
        ascii = text.charCodeAt(i);
    }

    return true;
}