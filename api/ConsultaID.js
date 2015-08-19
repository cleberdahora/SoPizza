var request = require('superagent');

request
        .get('/consult')

        .end(function (err, res) {

            console.log(res);

        });

request
        .get('/cardap')

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
        var PizzariaLogo;

        $.each(pontos, function (index, ponto) {
            if (index == (id - 1)) {
                PizzariaID = ponto.id;
                PizzariaNome = ponto.Nome;
                PizzariaEndereco = ponto.Endereco;
                PizzariaLogo = ponto.Logo;
                //console.log("index:" +index );
            }

        });

        $('#divNome').html(PizzariaNome);
        $('#divEndereco').html(PizzariaEndereco);
        $('#divLogo').attr('src', PizzariaLogo);




    });
    $.get('/cardap', function (pontos) {

        var PizzaID;
        var PizzaTipo;
        var PizzaIngred;
        var PizzaPreco;
        var PizzaLogo;

        $.each(pontos, function (index, ponto) {
           
                PizzaID = ponto.id;
                PizzaTipo = ponto.Sabor;
                PizzaIngred = ponto.Ingredientes;
                PizzaPreco = ponto.Preco;
                PizzaLogo = ponto.Logo;
                //console.log("index:" +index );
            

        });

        




    });

}

$(document).ready(function () {


    carregarDados();
});