var _BASE_ = "https://cors-anywhere.herokuapp.com/https://loanmanagement-squad5.herokuapp.com/";

var _AUTH_ = "auth/token/";
var _CLIENT_ = "clients/"


var getToken = function(){
    $("#btntoken").click(function(){
        user = $("#user").val();
        pass = $("#pass").val();    
        $.ajax({
            url: _BASE_ + _AUTH_,
            type: 'POST',
            dataType: 'json',
            crossDomain: true,
            headers: {'Access-Control-Allow-Origin': '*'},
            data : {
                username : user,
                password : pass
            },
            success : function(data) {
                $("#token").val(data.token)
            }, 
            error: function (jqXHR, textStatus, errorThrown) { 
                json = JSON.parse(jqXHR.responseText)
                $("#token").val('error: ' + json.non_field_errors[0]);
            }  
          })
    })
}

var getListClient = function(){    
    $("#btngetclients").click(function(){
        token = $("#token").val();    
        $.ajax({
            url: _BASE_ + _CLIENT_,
            type: 'GET',
            dataType: 'json',
            crossDomain: true,
            headers: {'Authorization': 'JWT ' + token},
            success : function(data) {
                pretty = JSON.stringify(data, undefined, 4);
                console.log(pretty)
                $("#listClients").val(pretty)
            }, 
            error: function (jqXHR, textStatus, errorThrown) { 
                $("#listClients").val(jqXHR.responseText)
            }  
          })
    })
}

var addClient = function(){    
    $("#btnaddclient").click(function(){
        token = $("#token").val();
        name = $("#nome").val();
        surname = $("#sobrenome").val();
        email = $("#email").val();
        telephone = $("#telefone").val();
        cpf = $("#cpf").val();    
        $.ajax({
            url: _BASE_ + _CLIENT_,
            type: 'POST',
            dataType: 'json',
            crossDomain: true,
            headers: {'Authorization': 'JWT ' + token},
            data : {
                name : name,
                surname : surname,
                email : email,
                telephone : telephone,
                cpf : cpf
            },
            success : function(data) {
                pretty = JSON.stringify(data, undefined, 4);
                $("#listClients").val(pretty)
            }, 
            error: function (jqXHR, textStatus, errorThrown) { 
                $("#listClients").val(jqXHR.responseText)
            }  
          })
    })
}

$(document).ready(function(){
	    
    getToken();  
    getListClient();
    addClient();
    
});