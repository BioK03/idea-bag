
function submitForm(){
    var text = document.querySelector("#text").value;
    var result = "<br/>";

    var words = text.split(" ");
    for(var i=0; i<words.length; i++){
        result += words[i]+" - "+((isPalindrome(words[i])?"palindrom":"not a palindrom")+"<br/>");
    }

    document.querySelector("#result").innerHTML = "Result : "+result;
}

function isPalindrome(text){
    var result = "";
    text = text.toString();
    for(var i=0; i<text.length; i++){
        result = text.charAt(i)+result;
    }
    return text == result;
}