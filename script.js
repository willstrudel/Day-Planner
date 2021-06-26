
console.log("script imported");

var dayDisplay = $('#current-Day'); 
dayDisplay.text(moment().format('dddd, MMMM Do, YYYY'));


var plannerText = $("textarea");
var saveFile = $(".saveBtn");


function storeLocal(){
    console.log("I'm here");

    localStorage.getItem('textarea', JSON.stringify(data)); 
    document.getElementById('') 
}



$(document).ready(function(){
    $('.saveBtn').each(function(){
        $(this).click(function(event){
            console.log("button clicked");
            var div = event.target;
            if (div.matches('.saveBtn')) {
                storeLocal(div);
            }
        });
    })

})



