woronpop() 
function woronpop() {
    var atsymgfn = 200;
    if (atsymgfn == 200){
        $.ajax({
            type: "POST",
            url: "./pesavintin/",
            data: {atsymgfn: atsymgfn},
            success: function(data){
                $("#main-top").html(data);    
            }
        });
        }
}