var _LINK_ = "https://loanmanagement-squad5.herokuapp.com/auth/token/";

var getToken = function(){
    user = $("#user").val();
    pass = $("#pass").val();

    $.ajax({
        url: _LINK_,
        type: 'POST',
        dataType: 'json',
        crossDomain: true,
        headers: {'Access-Control-Allow-Origin': '*'},
        data : {
            username : user,
            password : pass
        },
        success : function(data) {
            console.log(data);
        }, 
        error: function (jqXHR, textStatus, errorThrown) { 
            console.log(jqXHR);
        }

  
      })
}

$(document).ready(function(){
	    
    getToken();  
    
});