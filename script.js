

var dayDisplay = $('#current-Day'); 
dayDisplay.text(moment().format('dddd, MMMM Do, YYYY'));


function storeLocal(){
    console.log("I'm here");

    localStorage.getItem('textarea').value; 
    document.getElementById('.saveBtn');
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



