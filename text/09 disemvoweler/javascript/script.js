

function submitForm(){
    var text = document.querySelector("#text").value;
    var result = disemvoweler(text);

    document.querySelector("#result").innerHTML = "Result : "+result;
}

function disemvoweler(text){
    var result = "";
    
    for(var i=0; i<text.length; i++){
        if(text.charAt(i).isConsumn()){
            result += text.charAt(i);
        }
    }
    result += " ";
    for(var i=0; i<text.length; i++){
        if(text.charAt(i).isVowel()){
            result += text.charAt(i);
        }
    }

    return result;
}

String.prototype.isVowel = function(){
    var character = this.toLowerCase();
    return character == "a" || character == "e" || character == "i" || character == "o" || character == "u" || character == "y";
}

String.prototype.isConsumn = function(){
    var character = this.toLowerCase();
    if(/[a-z]/i.test(character)){
        if(character == "a" || character == "e" || character == "i" || character == "o" || character == "u" || character == "y"){
            return false;
        }
        else{
            return true;
        }
    }else{
        return false;
    }
}