var request = require('superagent');

request
        .get('/consult')

        .end(function (err, res) {

            console.log(res);

        });







function carregarDados() {

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
    
}
var id = getUrlVars()["id"];
   $.get('/consult', function (pontos) {

   var PizzariaID;
   var PizzariaNome;
   var PizzariaEndereco;
   
        $.each(pontos, function (index, ponto) {
          if(index == (id-1)){
                PizzariaID= ponto.id;
                PizzariaNome= ponto.Nome;
                PizzariaEndereco= ponto.Endereco;
                console.log("index:" +index );
          }
           
        });

$('#divNome').html(PizzariaNome);
$('#divEndereco').html(PizzariaEndereco);
  
  

  
    });

}

$(document).ready(function () {
    
    
    carregarDados();
});