
function submitForm(){
    var number = parseInt(document.querySelector("#number").value);
    var result = "";
    if(number < 1 || number > 1000){
        document.querySelector("#result").innerHTML = "Number not in interval";
        return;
    }
    
    var numberString = number.toString();
    for(var i=0; i<numberString.length; i++){
        var tempNumber = parseInt(numberString.charAt(i) * (Math.pow(10, (numberString.length - i - 1))));
        var tempFigure = numberString.charAt(i);

        console.log(tempFigure+" "+(Math.pow(10, (numberString.length - i - 1)))+" "+tempNumber);

        if(tempNumber > 999){
            switch(tempNumber){
                case 1000: result += "M"; break;
                case 2000: result += "MM"; break;
                case 3000: result += "MMM"; break;
            }
        }

        if(tempNumber > 99 && tempNumber < 999){
            switch(tempNumber){
                case 900: result += "CM"; break;
                case 800: result += "DCCC"; break;
                case 700: result += "DCC"; break;
                case 600: result += "DC"; break;
                case 500: result += "D"; break;
                case 400: result += "CD"; break;
                case 300: result += "CCC"; break;
                case 200: result += "CC"; break;
                case 100: result += "C"; break;
            }
        }
        if(tempNumber < 100 && tempNumber > 9){
            switch(tempNumber){
                case 90: result += "XC"; break;
                case 80: result += "LXXX"; break;
                case 70: result += "LXX"; break;
                case 60: result += "LX"; break;
                case 50: result += "L"; break;
                case 40: result += "XL"; break;
                case 30: result += "XXX"; break;
                case 20: result += "XX"; break;
                case 10: result += "X"; break;
            }
        }
        if(tempNumber < 10) {
            switch(tempNumber){
                case 9: result += "IX"; break;
                case 8: result += "VIII"; break;
                case 7: result += "VII"; break;
                case 6: result += "VI"; break;
                case 5: result += "V"; break;
                case 4: result += "IV"; break;
                case 3: result += "III"; break;
                case 2: result += "II"; break;
                case 1: result += "I"; break;
            }
        }



    }
    
    document.querySelector("#result").innerHTML = "Result : "+result;
}

