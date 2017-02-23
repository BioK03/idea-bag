var taxes = [
    {label: "Albania", amount: 0.2},
    {label: "Austria", amount: 0.2},
    {label: "Belarus", amount: 0.2},
    {label: "Belgium - 21%", amount: 0.21},
    {label: "Belgium - 12% (Foodstuffs, social housing, books, ...)", amount: 0.12},
    {label: "Belgium - 6% (Soft drinks, Medical, Cutural events, ...)", amount: 0.06},
    {label: "Bosnia and Herzegovina", amount: 0.17},
    {label: "Bulagria", amount: 0.2},
    {label: "Croatia - 25%", amount: 0.25},
    {label: "Croatia - 13% - Reduced rate", amount: 0.06},
    {label: "Cyprus - 19%", amount: 0.19},
    {label: "Cyprus - 8% (Transport, restaurants)", amount: 0.08},
    {label: "Cyprus - 5% (Foodstuffs, Medical, ...)", amount: 0.05},
    {label: "Czech Republic - 21%", amount: 0.21},
    {label: "Czech Republic - 15% (Foodstuffs, Cultural, books, ...)", amount: 0.15},
    {label: "Czech Republic - 10% (Newspapers, Pharmaceutical, ...)", amount: 0.1},
    {label: "Denmark - 22%", amount: 0.22},
    {label: "Denmark - 0% - Reduced rate", amount: 0.0},
    {label: "Estonia - 20%", amount: 0.2},
    {label: "Estonia - 9% - Reduced rate", amount: 0.09},
    {label: "Finland - 20%", amount: 0.2},
    {label: "Finland - 14% (Foodstuffs, ...)", amount: 0.14},
    {label: "Finland - 10% (Pharmaceutical, ...)", amount: 0.1},
    {label: "France - 20%", amount: 0.2},
    {label: "France - 10% (Foodstuffs, Pharmaceutical, ...)", amount: 0.1},
    {label: "France - 5.5% (Cultural, Medical, ...)", amount: 0.055},
    {label: "France - 2.1% (Newspapers, ...)", amount: 0.021},
    {label: "France - 0% (Transport)", amount: 0.0},
    {label: "Germany - 19%", amount: 0.19},
    {label: "Germany - 7% - Reduced rate", amount: 0.07},
    {label: "Georgia", amount: 0.18},
    {label: "Greece - 24%", amount: 0.24},
    {label: "Greece - 13% - Reduced rate", amount: 0.13},
    {label: "Hungary", amount: 0.27},
    {label: "Iceland - 24%", amount: 0.24},
    {label: "Iceland - 12% - Reduced rate", amount: 0.12},
    {label: "Ireland", amount: 0.22},
    {label: "Italy", amount: 0.22},
    {label: "Latvia - 21%", amount: 0.21},
    {label: "Latvia - 12% (Foodstuffs, Pharmaceutical, Medical, ...)", amount: 0.12},
    {label: "Latvia - 0% (Transport)", amount: 0.0},
    {label: "Liechtenstein", amount: 0.08},
    {label: "Lituania", amount: 0.21},
    {label: "Luxembourg", amount: 0.7},
    {label: "Macedonia", amount: 0.18},
    {label: "Malta", amount: 0.18},
    {label: "Montenegro", amount: 0.17},
    {label: "Netherlands - 21%", amount: 0.21},
    {label: "Netherlands - 6% (Foodstuffs, Soft drinks, ...)", amount: 0.06},
    {label: "Netherlands - 0% (Transport, ...)", amount: 0.0},
    {label: "Norway - 25%", amount: 0.25},
    {label: "Norway - 15% - Reduced rate", amount: 0.15},
    {label: "Norway - 10% - Reduced rate", amount: 0.1},
    {label: "Poland - 23%", amount: 0.23},
    {label: "Poland - 8% (Foodstuffs, Pharmaceutical, Medical, ...)", amount: 0.08},
    {label: "Poland - 5% (Foodstuffs, ...)", amount: 0.05},
    {label: "Portugal - 23%", amount: 0.23},
    {label: "Portugal - 13% (Foodstuffs, ...)", amount: 0.13},
    {label: "Portugal - 6% (Pharmaceutical, Medical)", amount: 0.06},
    {label: "Portugal - 0% (Transport)", amount: 0.0},
    {label: "Romania - 19%", amount: 0.19},
    {label: "Romania - 9% (Foodstuffs, Pharmaceutical, ...)", amount: 0.09},
    {label: "Romania - 5% (Books, Newspapers, ...)", amount: 0.05},
    {label: "Romania - 4% - Reduced rate", amount: 0.04},
    {label: "Serbia", amount: 0.20},
    {label: "Slovakia - 20%", amount: 0.2},
    {label: "Slovakia - 10% - Reduced rate", amount: 0.1},
    {label: "Slovenia - 22%", amount: 0.22},
    {label: "Slovenia - 9.5% - Reduced rate", amount: 0.095},
    {label: "Spain - 21%", amount: 0.21},
    {label: "Spain - 10% (Foodstuffs, Pharmaceutical, Medical, ...)", amount: 0.1},
    {label: "Spain - 4% (Foodstuffs, Pharmaceutical, Newspapers, ...)", amount: 0.04},
    {label: "Sweden - 25%", amount: 0.25},
    {label: "Sweden - 12% (Foodstuffs, ...)", amount: 0.12},
    {label: "Sweden - 6% (Transport, Books, ...)", amount: 0.06},
    {label: "Switzerland - 8%", amount: 0.08},
    {label: "Switzerland - 2.5% - Reduced rate", amount: 0.025},
    {label: "Ukraine", amount: 0.2},
    {label: "United Knigdom - 20%", amount: 0.2},
    {label: "United Knigdom - 5% (Renovations, housing, ...)", amount: 0.05},
    {label: "United Knigdom - 0% (Books, Renovations, Medical, ...)", amount: 0.0},
];

(function(){
    var result = "";
    for(var i=0; i<taxes.length; i++){
        result += '<option value="'+taxes[i].amount+'">'+taxes[i].label+'</option>';
    }
    document.querySelector("#country").innerHTML = result;
})();

function submitForm(){
    var amount = parseFloat(document.querySelector("#country").value);
    var price = parseFloat(document.querySelector("#htprice").value);

    document.querySelector("#tax").innerHTML = "Tax : "+roundPrice(amount*price);
    document.querySelector("#ttcprice").innerHTML = "Final Price : "+roundPrice(price+(amount*price));
    
}

function roundPrice(price){
    return Math.round(price * 100)/100;
}