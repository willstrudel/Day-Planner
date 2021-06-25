var dayDisplay = $('#current-Day'); 
dayDisplay.text(moment().format('dddd, MMMM Do, YYYY'));


var plannerText = $("textarea");
var saveFile = $(".saveBtn");

function storeLocal(div){
    localStorage.getItem('textarea', []); 
    document.getElementById('') 
}

$('textarea').on('click', function(event){
    var div = event.target;
    if (div.matches('.saveBtn')) {
        storeLocal(div);
    }
});


