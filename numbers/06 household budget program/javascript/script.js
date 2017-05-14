
var household = [
    {
        title: "Utilities",
        entries: [
            {
                title: "Scotch",
                amount: +2.30
            }
        ]
    }

];

function submitForm(){

    var title = document.querySelector("#title").value;
    var category = document.querySelector("#category").value;
    var amount = document.querySelector("#amount").value;

    if(title == "" || category == "" || amount == "")
    {
        printHousehold();
        return;
    }

    if(! isCategoryListed(category)){
        household.push({title: category, entries: []});
    }

    insertInCategory(title, amount, category);

    document.querySelector("#title").value = "";
    document.querySelector("#category").value = "";
    document.querySelector("#amount").value = "";

    printHousehold();
}

function isCategoryListed(category){
    for(var i=0; i<household.length; i++){
        if(household[i].title == category){
            return true;
        }
    }
    return false;
}

function insertInCategory(title, amount, category){
    for(var i=0; i<household.length; i++){
        if(household[i].title == category){
            household[i].entries.push({title: title, amount: amount});
            return;
        }
    }
}

function updateCategoryList(){

    var htmlResult = "";
    for(var i=0; i<household.length; i++){
        htmlResult += "<option value='"+household[i].title+"'/>";
    }

    document.querySelector("#categories").innerHTML = htmlResult;
}

function printHousehold(){
    var table = document.querySelector("#results");

    var htmlResult = "<tr><th>CATEGORY</th><th>TITLE</th><th>AMOUNT</th></tr>";

    var totalAmount = 0.0;

    for(var i=0; i<household.length; i++){
        var resultForCategory = "";
        var amountForCategory = 0.0;

        for(var j=0; j<household[i].entries.length; j++){
            resultForCategory += "<tr><td></td><td>"+household[i].entries[j].title+
                                "</td><td class='"+((household[i].entries[j].amount > 0)?"positive'> + ":"negative'> ")+household[i].entries[j].amount+" €</td></tr>";
            amountForCategory += parseFloat(household[i].entries[j].amount);
        }

        amountForCategory = (Math.round(amountForCategory*100))/100;

        resultForCategory = "<tr><td></td></tr><tr><td><b>"+household[i].title+"</b></td><td></td><td class='"+((amountForCategory > 0)?"positive'><b> + ":"negative'><b> ")+amountForCategory+" €</b></td></tr>"+resultForCategory;

        htmlResult += resultForCategory;
        totalAmount += parseFloat(amountForCategory);
    }

    htmlResult += "<tr><td></td></tr><tr><td><b>Total</b></td><td></td><td class='"+((amountForCategory > 0)?"positive'><b> + ":"negative'> <b>")+totalAmount+" €</b></td></tr>";

    table.innerHTML = htmlResult;

}

(function(){
    printHousehold();
    updateCategoryList();
})();