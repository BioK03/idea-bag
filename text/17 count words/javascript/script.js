
function submitForm(){
    var text = document.querySelector("#text").value;
    var result = 0;

    var words = text.split(" ");
    for(var i=0; i<words.length; i++){
        if(words[i].length == 1){
            if(words[i].toLowerCase().match(/[a-z]/i)){
                result++;
            } 
        }else{
            result ++;
        }
        
    }

    document.querySelector("#result").innerHTML = "Result : "+result+" words";
}

