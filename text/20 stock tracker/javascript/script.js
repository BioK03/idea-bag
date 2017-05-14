var stockTracker = {
    duration: 30,
    indices: [],
    checkQuotes: function(){

        for(var i=0; i<stockTracker.indices.length; i++){
            stockTracker.xhr(stockTracker.indices[i]);
        }

        setTimeout(function(){
            stockTracker.checkQuotes();
        }, duration*1000);
        
    },

    xhr: function(id){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                parseXML(id, this.responseXML);
            }
        };
        xhr.open("GET", "http://www.webservicex.net/stockquote.asmx/GetQuote?symbol="+id.toUpperCase());
        xhr.send();
    },

    parseXML: function(id, xml){
        var result = "";
        var resultDiv = document.querySelector("#"+id);

        var last = xml.getElementsByTagName("Last")[0].nodeValue;
        var percentageChange = xml.getElementsByTagName("PercentageChange")[0].nodeValue;
        var name = xml.getElementsByTagName("Name")[0].nodeValue;
        var change = parseInt(xml.getElementsByTagName("Change")[0].nodeValue);

        result = name+"<br/><span class='"+((change>0)?"positive":negative)+"'>"+percentageChange+"</span><br/>"+last;

        resultDiv.innerHTML = result;

    }
};

stockTracker.checkQuotes();


function submitForm(){
    var text = document.querySelector("#text").value;
    var resultDiv = document.querySelector("#result");

    resultDiv.innerHTML += "<span class='stock' id='"+text+"'></span>";
    stockTracker.indices.push(text);
}

function submitFormDuration(){
    stockTracker.duration = parseInt(document.querySelector("#duration").value);
}