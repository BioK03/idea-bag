
function submitForm(){
    var text = document.querySelector("#text").value;
    var result = "";

    result = reverseString(text);

    document.querySelector("#result").innerHTML = "Result : "+result;
}

function reverseString(text){
    var result = "";
    text = text.toString();
    for(var i=0; i<text.length; i++){
        result = text.charAt(i)+result;
    }
    return result;
}