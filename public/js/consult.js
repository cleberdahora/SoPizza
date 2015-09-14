(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;
                if (!u && a)
                    return a(o, !0);
                if (i)
                    return i(o, !0);
                var f = new Error("Cannot find module '" + o + "'");
                throw f.code = "MODULE_NOT_FOUND", f
            }
            var l = n[o] = {exports: {}};
            t[o][0].call(l.exports, function (e) {
                var n = t[o][1][e];
                return s(n ? n : e)
            }, l, l.exports, e, t, n, r)
        }
        return n[o].exports
    }
    var i = typeof require == "function" && require;
    for (var o = 0; o < r.length; o++)
        s(r[o]);
    return s
})({1: [function (require, module, exports) {
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
                        vars[key] = decodeURIComponent(value);
                    });
                    return vars;

                }
                var id = getUrlVars()["id"];
                $.get('/consult', function (pontos) {

                    var PizzariaID;
                    var PizzariaNome;
                    var PizzariaEndereco;
                    var PizzariaEmail;
                    var PizzariaTelefone;
                    var PizzariaTelefone2;
                    var PizzariaWhatsApp;
                    var PizzariaLogo;
                    var PizzariaInformacoes;
                    var PizzariaDia1;
                    var PizzariaHorario1;
                    var PizzariaDia2;
                    var PizzariaHorario2;
                    var PizzariaDia3;
                    var PizzariaHorario3;

                    var PizzariaSabor1;
                    var PizzariaPreco1;
                    var PizzariaIngredientes1;

                    var PizzariaSabor2;
                    var PizzariaPreco2;
                    var PizzariaIngredientes2;

                    var PizzariaSabor3;
                    var PizzariaPreco3;
                    var PizzariaIngredientes3;

                    var PizzariaSabor4;
                    var PizzariaPreco4;
                    var PizzariaIngredientes4;

                    var PizzariaSabor5;
                    var PizzariaPreco5;
                    var PizzariaIngredientes5;

                    var PizzariaSabor6;
                    var PizzariaPreco6;
                    var PizzariaIngredientes6;

                    var PizzariaSabor7;
                    var PizzariaPreco7;
                    var PizzariaIngredientes7;

                    var PizzariaSabor8;
                    var PizzariaPreco8;
                    var PizzariaIngredientes8;

                    var PizzariaSabor9;
                    var PizzariaPreco9;
                    var PizzariaIngredientes9;

                    var PizzariaSabor10;
                    var PizzariaPreco10;
                    var PizzariaIngredientes10;

                    var PizzariaSabor11;
                    var PizzariaPreco11;
                    var PizzariaIngredientes11;

                    var PizzariaSabor12;
                    var PizzariaPreco12;
                    var PizzariaIngredientes12;

                    var PizzariaSabor13;
                    var PizzariaPreco13;
                    var PizzariaIngredientes13;

                    var PizzariaSabor14;
                    var PizzariaPreco14;
                    var PizzariaIngredientes14;

                    var PizzariaSabor15;
                    var PizzariaPreco15;
                    var PizzariaIngredientes15;

                    var PizzariaSabor16;
                    var PizzariaPreco16;
                    var PizzariaIngredientes16;

                    var PizzariaSabor17;
                    var PizzariaPreco17;
                    var PizzariaIngredientes17;

                    var PizzariaSabor18;
                    var PizzariaPreco18;
                    var PizzariaIngredientes18;

                    var PizzariaSabor19;
                    var PizzariaPreco19;
                    var PizzariaIngredientes19;

                    var PizzariaSabor20;
                    var PizzariaPreco20;
                    var PizzariaIngredientes20;

                    var PizzariaSabor21;
                    var PizzariaPreco21;
                    var PizzariaIngredientes21;

                    var PizzariaSabor22;
                    var PizzariaPreco22;
                    var PizzariaIngredientes22;

                    var PizzariaSabor23;
                    var PizzariaPreco23;
                    var PizzariaIngredientes23;

                    var PizzariaSabor24;
                    var PizzariaPreco24;
                    var PizzariaIngredientes24;

                    var PizzariaSabor25;
                    var PizzariaPreco25;
                    var PizzariaIngredientes25;

                    var PizzariaSabor26;
                    var PizzariaPreco26;
                    var PizzariaIngredientes26;

                    var PizzariaSabor27;
                    var PizzariaPreco27;
                    var PizzariaIngredientes27;

                    var PizzariaSabor28;
                    var PizzariaPreco28;
                    var PizzariaIngredientes28;

                    var PizzariaSabor29;
                    var PizzariaPreco29;
                    var PizzariaIngredientes29;

                    var PizzariaSabor30;
                    var PizzariaPreco30;
                    var PizzariaIngredientes30;

                    var PizzariaSabor31;
                    var PizzariaPreco31;
                    var PizzariaIngredientes31;

                    var PizzariaSabor32;
                    var PizzariaPreco32;
                    var PizzariaIngredientes32;

                    var PizzariaSabor33;
                    var PizzariaPreco33;
                    var PizzariaIngredientes33;

                    var PizzariaSabor34;
                    var PizzariaPreco34;
                    var PizzariaIngredientes34;

                    var PizzariaSabor35;
                    var PizzariaPreco35;
                    var PizzariaIngredientes35;


                    var PizzariaSabor36;
                    var PizzariaPreco36;
                    var PizzariaIngredientes36;

                    var PizzariaSabor37;
                    var PizzariaPreco37;
                    var PizzariaIngredientes37;

                    var PizzariaSabor38;
                    var PizzariaPreco38;
                    var PizzariaIngredientes38;

                    var PizzariaSabor39;
                    var PizzariaPreco39;
                    var PizzariaIngredientes39;

                    var PizzariaSabor40;
                    var PizzariaPreco40;
                    var PizzariaIngredientes40;

                    var PizzariaSabor41;
                    var PizzariaPreco41;
                    var PizzariaIngredientes41;

                    var PizzariaSabor42;
                    var PizzariaPreco42;
                    var PizzariaIngredientes42;

                    var PizzariaSabor43;
                    var PizzariaPreco43;
                    var PizzariaIngredientes43;

                    var PizzariaSabor44;
                    var PizzariaPreco44;
                    var PizzariaIngredientes44;

                    var PizzariaSabor45;
                    var PizzariaPreco45;
                    var PizzariaIngredientes45;

                    var PizzariaSabor46;
                    var PizzariaPreco46;
                    var PizzariaIngredientes46;

                    var PizzariaSabor47;
                    var PizzariaPreco47;
                    var PizzariaIngredientes47;

                    var PizzariaSabor48;
                    var PizzariaPreco48;
                    var PizzariaIngredientes48;

                    var PizzariaSabor49;
                    var PizzariaPreco49;
                    var PizzariaIngredientes49;

                    var PizzariaSabor50;
                    var PizzariaPreco50;
                    var PizzariaIngredientes50;

                    var PizzariaSabor51;
                    var PizzariaPreco51;
                    var PizzariaIngredientes51;

                    var PizzariaSabor52;
                    var PizzariaPreco52;
                    var PizzariaIngredientes52;

                    var PizzariaSabor53;
                    var PizzariaPreco53;
                    var PizzariaIngredientes53;

                    var PizzariaSabor54;
                    var PizzariaPreco54;
                    var PizzariaIngredientes54;

                    var PizzariaSabor55;
                    var PizzariaPreco55;
                    var PizzariaIngredientes55;

                    var PizzariaSabor56;
                    var PizzariaPreco56;
                    var PizzariaIngredientes56;

                    var PizzariaSabor57;
                    var PizzariaPreco57;
                    var PizzariaIngredientes57;

                    var PizzariaSabor58;
                    var PizzariaPreco58;
                    var PizzariaIngredientes58;

                    var PizzariaSabor59;
                    var PizzariaPreco59;
                    var PizzariaIngredientes59;

                    var PizzariaSabor60;
                    var PizzariaPreco60;
                    var PizzariaIngredientes60;

                    var PizzariaSabor61;
                    var PizzariaPreco61;
                    var PizzariaIngredientes61;

                    var PizzariaSabor62;
                    var PizzariaPreco62;
                    var PizzariaIngredientes62;

                    var PizzariaSabor63;
                    var PizzariaPreco63;
                    var PizzariaIngredientes63;

                    var PizzariaSabor64;
                    var PizzariaPreco64;
                    var PizzariaIngredientes64;

                    var PizzariaSabor65;
                    var PizzariaPreco65;
                    var PizzariaIngredientes65;

                    var PizzariaSabor66;
                    var PizzariaPreco66;
                    var PizzariaIngredientes66;

                    var PizzariaSabor67;
                    var PizzariaPreco67;
                    var PizzariaIngredientes67;

                    var PizzariaSabor68;
                    var PizzariaPreco68;
                    var PizzariaIngredientes68;

                    var PizzariaSabor69;
                    var PizzariaPreco69;
                    var PizzariaIngredientes69;

                    var PizzariaSabor70;
                    var PizzariaPreco70;
                    var PizzariaIngredientes70;

                    var PizzariaSabor71;
                    var PizzariaPreco71;
                    var PizzariaIngredientes71;

                    var PizzariaSabor72;
                    var PizzariaPreco72;
                    var PizzariaIngredientes72;

                    var PizzariaSabor73;
                    var PizzariaPreco73;
                    var PizzariaIngredientes73;

                    var PizzariaSabor74;
                    var PizzariaPreco74;
                    var PizzariaIngredientes74;

                    var PizzariaSabor75;
                    var PizzariaPreco75;
                    var PizzariaIngredientes75;

                    var PizzariaSabor76;
                    var PizzariaPreco76;
                    var PizzariaIngredientes76;

                    var PizzariaSabor77;
                    var PizzariaPreco77;
                    var PizzariaIngredientes77;

                    var PizzariaSabor78;
                    var PizzariaPreco78;
                    var PizzariaIngredientes78;


                    var PizzariaSabor79;
                    var PizzariaPreco79;
                    var PizzariaIngredientes79;

                    var PizzariaSabor80;
                    var PizzariaPreco80;
                    var PizzariaIngredientes80;

                    var PizzariaSabor81;
                    var PizzariaPreco81;
                    var PizzariaIngredientes81;

                    var PizzariaSabor82;
                    var PizzariaPreco82;
                    var PizzariaIngredientes82;


                    var PizzariaSabor83;
                    var PizzariaPreco83;
                    var PizzariaIngredientes83;


                    var PizzariaSabor84;
                    var PizzariaPreco84;
                    var PizzariaIngredientes84;


                    var PizzariaSabor85;
                    var PizzariaPreco85;
                    var PizzariaIngredientes85;


                    var PizzariaSabor86;
                    var PizzariaPreco86;
                    var PizzariaIngredientes86;


                    var PizzariaSabor87;
                    var PizzariaPreco87;
                    var PizzariaIngredientes87;


                    var PizzariaSabor88;
                    var PizzariaPreco88;
                    var PizzariaIngredientes88;


                    var PizzariaSabor89;
                    var PizzariaPreco89;
                    var PizzariaIngredientes89;


                    var PizzariaSabor90;
                    var PizzariaPreco90;
                    var PizzariaIngredientes90;


                    var PizzariaSabor91;
                    var PizzariaPreco91;
                    var PizzariaIngredientes91;


                    var PizzariaSabor92;
                    var PizzariaPreco92;
                    var PizzariaIngredientes92;


                    var PizzariaSabor93;
                    var PizzariaPreco93;
                    var PizzariaIngredientes93;


                    var PizzariaSabor94;
                    var PizzariaPreco94;
                    var PizzariaIngredientes94;


                    var PizzariaSabor95;
                    var PizzariaPreco95;
                    var PizzariaIngredientes95;


                    var PizzariaSabor96;
                    var PizzariaPreco96;
                    var PizzariaIngredientes96;


                    var PizzariaSabor97;
                    var PizzariaPreco97;
                    var PizzariaIngredientes97;


                    var PizzariaSabor98;
                    var PizzariaPreco98;
                    var PizzariaIngredientes98;

                    var PizzariaSabor99;
                    var PizzariaPreco99;
                    var PizzariaIngredientes99;

                    var PizzariaSabor100;
                    var PizzariaPreco100;
                    var PizzariaIngredientes100;

                    var PizzariaSabor101;
                    var PizzariaPreco101;
                    var PizzariaIngredientes101;

                    var PizzariaSabor102;
                    var PizzariaPreco102;
                    var PizzariaIngredientes102;

                    var PizzariaSabor103;
                    var PizzariaPreco103;
                    var PizzariaIngredientes103;

                    var PizzariaSabor104;
                    var PizzariaPreco104;
                    var PizzariaIngredientes104;

                    var PizzariaSabor105;
                    var PizzariaPreco105;
                    var PizzariaIngredientes105;

                    var PizzariaSabor105;
                    var PizzariaPreco105;
                    var PizzariaIngredientes105;

                    var PizzariaSabor106;
                    var PizzariaPreco106;
                    var PizzariaIngredientes106;

                    var PizzariaSabor107;
                    var PizzariaPreco107;
                    var PizzariaIngredientes107;

                    var PizzariaSabor108;
                    var PizzariaPreco108;
                    var PizzariaIngredientes108;

                    var PizzariaSabor108;
                    var PizzariaPreco108;
                    var PizzariaIngredientes108;

                    var PizzariaSabor108;
                    var PizzariaPreco108;
                    var PizzariaIngredientes108;

                    var PizzariaSabor109;
                    var PizzariaPreco109;
                    var PizzariaIngredientes109;

                    var PizzariaSabor110;
                    var PizzariaPreco110;
                    var PizzariaIngredientes110;

                    var PizzariaSabor111;
                    var PizzariaPreco111;
                    var PizzariaIngredientes111;

                    var PizzariaSabor112;
                    var PizzariaPreco112;
                    var PizzariaIngredientes112;

                    var PizzariaSabor113;
                    var PizzariaPreco113;
                    var PizzariaIngredientes113;

                    var PizzariaSabor114;
                    var PizzariaPreco114;
                    var PizzariaIngredientes114;

                    var PizzariaSabor115;
                    var PizzariaPreco115;
                    var PizzariaIngredientes115;


                    var imagem = 'http://res.cloudinary.com/hih0bvg21/image/upload/v1441298095/pizzalado_cm5rl9.png';
                    
                    var PizzariaFoto1;

 var PizzariaFoto2; var PizzariaFoto3; var PizzariaFoto4; var PizzariaFoto5; var PizzariaFoto6;



                    $.each(pontos, function (index, ponto) {
                        if (index == (id - 1)) {
                            PizzariaID = ponto.id;
                            PizzariaNome = ponto.Nome;
                            PizzariaEndereco = ponto.Endereco;
                            PizzariaEmail = ponto.Email;
                            PizzariaTelefone = ponto.Telefone;
                            PizzariaTelefone2 = ponto.Telefone;
                            PizzariaWhatsApp = ponto.Whatsapp;
                            PizzariaLogo = ponto.fotoLogo;
                            PizzariaFoto1 = ponto.foto1;
                            PizzariaFoto2 = ponto.foto2;
                            PizzariaFoto3 = ponto.foto3;
                            PizzariaFoto4 = ponto.foto4;
                            PizzariaFoto5 = ponto.foto5;
                            PizzariaFoto6 = ponto.foto6;
                            PizzariaInformacoes = ponto.Informacoes;
                            PizzariaDia1 = ponto.dia1;
                            PizzariaHorario1 = ponto.horario1;
                            PizzariaDia2 = ponto.dia2;
                            PizzariaHorario2 = ponto.horario2;
                            PizzariaDia3 = ponto.dia3;
                            PizzariaHorario3 = ponto.horario3;

                            PizzariaSabor1 = ponto.Sabor1;
                            PizzariaPreco1 = ponto.Preco1;
                            PizzariaIngredientes1 = ponto.Ingredientes1;

                            PizzariaSabor2 = ponto.Sabor2;
                            PizzariaPreco2 = ponto.Preco2;
                            PizzariaIngredientes2 = ponto.Ingredientes2;

                            PizzariaSabor3 = ponto.Sabor3;
                            PizzariaPreco3 = ponto.Preco3;
                            PizzariaIngredientes3 = ponto.Ingredientes3;

                            PizzariaSabor4 = ponto.Sabor4;
                            PizzariaPreco4 = ponto.Preco4;
                            PizzariaIngredientes4 = ponto.Ingredientes4;

                            PizzariaSabor5 = ponto.Sabor5;
                            PizzariaPreco5 = ponto.Preco5;
                            PizzariaIngredientes5 = ponto.Ingredientes5;

                            PizzariaSabor6 = ponto.Sabor6;
                            PizzariaPreco6 = ponto.Preco6;
                            PizzariaIngredientes6 = ponto.Ingredientes6;

                            PizzariaSabor7 = ponto.Sabor7;
                            PizzariaPreco7 = ponto.Preco7;
                            PizzariaIngredientes7 = ponto.Ingredientes7;

                            PizzariaSabor8 = ponto.Sabor8;
                            PizzariaPreco8 = ponto.Preco8;
                            PizzariaIngredientes8 = ponto.Ingredientes8;

                            PizzariaSabor9 = ponto.Sabor9;
                            PizzariaPreco9 = ponto.Preco9;
                            PizzariaIngredientes9 = ponto.Ingredientes9;

                            PizzariaSabor10 = ponto.Sabor10;
                            PizzariaPreco10 = ponto.Preco10;
                            PizzariaIngredientes10 = ponto.Ingredientes10;

                            PizzariaSabor11 = ponto.Sabor11;
                            PizzariaPreco11 = ponto.Preco11;
                            PizzariaIngredientes11 = ponto.Ingredientes11;

                            PizzariaSabor12 = ponto.Sabor12;
                            PizzariaPreco12 = ponto.Preco12;
                            PizzariaIngredientes12 = ponto.Ingredientes12;

                            PizzariaSabor13 = ponto.Sabor13;
                            PizzariaPreco13 = ponto.Preco13;
                            PizzariaIngredientes13 = ponto.Ingredientes13;

                            PizzariaSabor14 = ponto.Sabor14;
                            PizzariaPreco14 = ponto.Preco14;
                            PizzariaIngredientes14 = ponto.Ingredientes14;

                            PizzariaSabor15 = ponto.Sabor15;
                            PizzariaPreco15 = ponto.Preco15;
                            PizzariaIngredientes15 = ponto.Ingredientes15;

                            PizzariaSabor16 = ponto.Sabor16;
                            PizzariaPreco16 = ponto.Preco16;
                            PizzariaIngredientes16 = ponto.Ingredientes16;

                            PizzariaSabor17 = ponto.Sabor17;
                            PizzariaPreco17 = ponto.Preco17;
                            PizzariaIngredientes17 = ponto.Ingredientes17;

                            PizzariaSabor18 = ponto.Sabor18;
                            PizzariaPreco18 = ponto.Preco18;
                            PizzariaIngredientes18 = ponto.Ingredientes18;

                            PizzariaSabor19 = ponto.Sabor19;
                            PizzariaPreco19 = ponto.Preco19;
                            PizzariaIngredientes19 = ponto.Ingredientes19;

                            PizzariaSabor20 = ponto.Sabor20;
                            PizzariaPreco20 = ponto.Preco20;
                            PizzariaIngredientes20 = ponto.Ingredientes20;

                            PizzariaSabor21 = ponto.Sabor21;
                            PizzariaPreco21 = ponto.Preco21;
                            PizzariaIngredientes21 = ponto.Ingredientes21;

                            PizzariaSabor22 = ponto.Sabor22;
                            PizzariaPreco22 = ponto.Preco22;
                            PizzariaIngredientes22 = ponto.Ingredientes22;

                            PizzariaSabor23 = ponto.Sabor23;
                            PizzariaPreco23 = ponto.Preco23;
                            PizzariaIngredientes23 = ponto.Ingredientes23;

                            PizzariaSabor24 = ponto.Sabor24;
                            PizzariaPreco24 = ponto.Preco24;
                            PizzariaIngredientes24 = ponto.Ingredientes24;

                            PizzariaSabor25 = ponto.Sabor25;
                            PizzariaPreco25 = ponto.Preco25;
                            PizzariaIngredientes25 = ponto.Ingredientes25;

                            PizzariaSabor26 = ponto.Sabor26;
                            PizzariaPreco26 = ponto.Preco26;
                            PizzariaIngredientes26 = ponto.Ingredientes26;

                            PizzariaSabor27 = ponto.Sabor27;
                            PizzariaPreco27 = ponto.Preco27;
                            PizzariaIngredientes27 = ponto.Ingredientes27;

                            PizzariaSabor28 = ponto.Sabor28;
                            PizzariaPreco28 = ponto.Preco28;
                            PizzariaIngredientes28 = ponto.Ingredientes28;


                            PizzariaSabor29 = ponto.Sabor29;
                            PizzariaPreco29 = ponto.Preco29;
                            PizzariaIngredientes29 = ponto.Ingredientes29;


                            PizzariaSabor30 = ponto.Sabor30;
                            PizzariaPreco30 = ponto.Preco30;
                            PizzariaIngredientes30 = ponto.Ingredientes30;


                            PizzariaSabor31 = ponto.Sabor31;
                            PizzariaPreco31 = ponto.Preco31;
                            PizzariaIngredientes31 = ponto.Ingredientes31;


                            PizzariaSabor32 = ponto.Sabor32;
                            PizzariaPreco32 = ponto.Preco32;
                            PizzariaIngredientes32 = ponto.Ingredientes32;


                            PizzariaSabor33 = ponto.Sabor33;
                            PizzariaPreco33 = ponto.Preco33;
                            PizzariaIngredientes33 = ponto.Ingredientes33;


                            PizzariaSabor34 = ponto.Sabor34;
                            PizzariaPreco34 = ponto.Preco34;
                            PizzariaIngredientes34 = ponto.Ingredientes34;


                            PizzariaSabor35 = ponto.Sabor35;
                            PizzariaPreco35 = ponto.Preco35;
                            PizzariaIngredientes35 = ponto.Ingredientes35;


                            PizzariaSabor36 = ponto.Sabor36;
                            PizzariaPreco36 = ponto.Preco36;
                            PizzariaIngredientes36 = ponto.Ingredientes36;


                            PizzariaSabor37 = ponto.Sabor37;
                            PizzariaPreco37 = ponto.Preco37;
                            PizzariaIngredientes37 = ponto.Ingredientes37;


                            PizzariaSabor38 = ponto.Sabor38;
                            PizzariaPreco38 = ponto.Preco38;
                            PizzariaIngredientes38 = ponto.Ingredientes38;


                            PizzariaSabor39 = ponto.Sabor39;
                            PizzariaPreco39 = ponto.Preco39;
                            PizzariaIngredientes39 = ponto.Ingredientes39;


                            PizzariaSabor40 = ponto.Sabor40;
                            PizzariaPreco40 = ponto.Preco40;
                            PizzariaIngredientes40 = ponto.Ingredientes40;


                            PizzariaSabor41 = ponto.Sabor41;
                            PizzariaPreco41 = ponto.Preco41;
                            PizzariaIngredientes41 = ponto.Ingredientes41;


                            PizzariaSabor42 = ponto.Sabor42;
                            PizzariaPreco42 = ponto.Preco42;
                            PizzariaIngredientes42 = ponto.Ingredientes42;


                            PizzariaSabor43 = ponto.Sabor43;
                            PizzariaPreco43 = ponto.Preco43;
                            PizzariaIngredientes43 = ponto.Ingredientes43;


                            PizzariaSabor44 = ponto.Sabor44;
                            PizzariaPreco44 = ponto.Preco44;
                            PizzariaIngredientes44 = ponto.Ingredientes44;


                            PizzariaSabor45 = ponto.Sabor45;
                            PizzariaPreco45 = ponto.Preco45;
                            PizzariaIngredientes45 = ponto.Ingredientes45;


                            PizzariaSabor46 = ponto.Sabor46;
                            PizzariaPreco46 = ponto.Preco46;
                            PizzariaIngredientes46 = ponto.Ingredientes46;


                            PizzariaSabor47 = ponto.Sabor47;
                            PizzariaPreco47 = ponto.Preco47;
                            PizzariaIngredientes47 = ponto.Ingredientes47;


                            PizzariaSabor48 = ponto.Sabor48;
                            PizzariaPreco48 = ponto.Preco48;
                            PizzariaIngredientes48 = ponto.Ingredientes48;



                            PizzariaSabor49 = ponto.Sabor49;
                            PizzariaPreco49 = ponto.Preco49;
                            PizzariaIngredientes49 = ponto.Ingredientes49;


                            PizzariaSabor50 = ponto.Sabor50;
                            PizzariaPreco50 = ponto.Preco50;
                            PizzariaIngredientes50 = ponto.Ingredientes50;

                            PizzariaSabor51 = ponto.Sabor51;
                            PizzariaPreco51 = ponto.Preco51;
                            PizzariaIngredientes51 = ponto.Ingredientes51;

                            PizzariaSabor52 = ponto.Sabor52;
                            PizzariaPreco52 = ponto.Preco52;
                            PizzariaIngredientes52 = ponto.Ingredientes52;

                            PizzariaSabor53 = ponto.Sabor53;
                            PizzariaPreco53 = ponto.Preco53;
                            PizzariaIngredientes53 = ponto.Ingredientes53;

                            PizzariaSabor54 = ponto.Sabor54;
                            PizzariaPreco54 = ponto.Preco54;
                            PizzariaIngredientes54 = ponto.Ingredientes54;

                            PizzariaSabor55 = ponto.Sabor55;
                            PizzariaPreco55 = ponto.Preco55;
                            PizzariaIngredientes55 = ponto.Ingredientes55;

                            PizzariaSabor56 = ponto.Sabor56;
                            PizzariaPreco56 = ponto.Preco56;
                            PizzariaIngredientes56 = ponto.Ingredientes56;

                            PizzariaSabor57 = ponto.Sabor57;
                            PizzariaPreco57 = ponto.Preco57;
                            PizzariaIngredientes57 = ponto.Ingredientes57;

                            PizzariaSabor58 = ponto.Sabor58;
                            PizzariaPreco58 = ponto.Preco58;
                            PizzariaIngredientes58 = ponto.Ingredientes58;

                            PizzariaSabor59 = ponto.Sabor59;
                            PizzariaPreco59 = ponto.Preco59;
                            PizzariaIngredientes59 = ponto.Ingredientes59;

                            PizzariaSabor60 = ponto.Sabor60;
                            PizzariaPreco60 = ponto.Preco60;
                            PizzariaIngredientes60 = ponto.Ingredientes60;

                            PizzariaSabor61 = ponto.Sabor61;
                            PizzariaPreco61 = ponto.Preco61;
                            PizzariaIngredientes61 = ponto.Ingredientes61;

                            PizzariaSabor62 = ponto.Sabor62;
                            PizzariaPreco62 = ponto.Preco62;
                            PizzariaIngredientes62 = ponto.Ingredientes62;

                            PizzariaSabor63 = ponto.Sabor63;
                            PizzariaPreco63 = ponto.Preco63;
                            PizzariaIngredientes63 = ponto.Ingredientes63;


                            PizzariaSabor64 = ponto.Sabor64;
                            PizzariaPreco64 = ponto.Preco64;
                            PizzariaIngredientes64 = ponto.Ingredientes64;


                            PizzariaSabor65 = ponto.Sabor65;
                            PizzariaPreco65 = ponto.Preco65;
                            PizzariaIngredientes65 = ponto.Ingredientes65;


                            PizzariaSabor66 = ponto.Sabor66;
                            PizzariaPreco66 = ponto.Preco66;
                            PizzariaIngredientes66 = ponto.Ingredientes66;


                            PizzariaSabor67 = ponto.Sabor67;
                            PizzariaPreco67 = ponto.Preco67;
                            PizzariaIngredientes67 = ponto.Ingredientes67;


                            PizzariaSabor68 = ponto.Sabor68;
                            PizzariaPreco68 = ponto.Preco68;
                            PizzariaIngredientes68 = ponto.Ingredientes68;


                            PizzariaSabor69 = ponto.Sabor69;
                            PizzariaPreco69 = ponto.Preco69;
                            PizzariaIngredientes69 = ponto.Ingredientes69;


                            PizzariaSabor70 = ponto.Sabor70;
                            PizzariaPreco70 = ponto.Preco70;
                            PizzariaIngredientes70 = ponto.Ingredientes70;


                            PizzariaSabor71 = ponto.Sabor71;
                            PizzariaPreco71 = ponto.Preco71;
                            PizzariaIngredientes71 = ponto.Ingredientes71;


                            PizzariaSabor72 = ponto.Sabor72;
                            PizzariaPreco72 = ponto.Preco72;
                            PizzariaIngredientes72 = ponto.Ingredientes72;


                            PizzariaSabor73 = ponto.Sabor73;
                            PizzariaPreco73 = ponto.Preco73;
                            PizzariaIngredientes73 = ponto.Ingredientes73;


                            PizzariaSabor74 = ponto.Sabor74;
                            PizzariaPreco74 = ponto.Preco74;
                            PizzariaIngredientes74 = ponto.Ingredientes74;


                            PizzariaSabor75 = ponto.Sabor75;
                            PizzariaPreco75 = ponto.Preco75;
                            PizzariaIngredientes75 = ponto.Ingredientes75;


                            PizzariaSabor76 = ponto.Sabor76;
                            PizzariaPreco76 = ponto.Preco76;
                            PizzariaIngredientes76 = ponto.Ingredientes76;


                            PizzariaSabor77 = ponto.Sabor77;
                            PizzariaPreco77 = ponto.Preco77;
                            PizzariaIngredientes77 = ponto.Ingredientes77;


                            PizzariaSabor78 = ponto.Sabor78;
                            PizzariaPreco78 = ponto.Preco78;
                            PizzariaIngredientes78 = ponto.Ingredientes78;


                            PizzariaSabor79 = ponto.Sabor79;
                            PizzariaPreco79 = ponto.Preco79;
                            PizzariaIngredientes79 = ponto.Ingredientes79;


                            PizzariaSabor80 = ponto.Sabor80;
                            PizzariaPreco80 = ponto.Preco80;
                            PizzariaIngredientes80 = ponto.Ingredientes80;


                            PizzariaSabor81 = ponto.Sabor81;
                            PizzariaPreco81 = ponto.Preco81;
                            PizzariaIngredientes81 = ponto.Ingredientes81;


                            PizzariaSabor82 = ponto.Sabor82;
                            PizzariaPreco82 = ponto.Preco82;
                            PizzariaIngredientes82 = ponto.Ingredientes82;


                            PizzariaSabor83 = ponto.Sabor83;
                            PizzariaPreco83 = ponto.Preco83;
                            PizzariaIngredientes83 = ponto.Ingredientes83;


                            PizzariaSabor84 = ponto.Sabor84;
                            PizzariaPreco84 = ponto.Preco84;
                            PizzariaIngredientes84 = ponto.Ingredientes84;


                            PizzariaSabor85 = ponto.Sabor85;
                            PizzariaPreco85 = ponto.Preco85;
                            PizzariaIngredientes85 = ponto.Ingredientes85;


                            PizzariaSabor86 = ponto.Sabor86;
                            PizzariaPreco86 = ponto.Preco86;
                            PizzariaIngredientes86 = ponto.Ingredientes86;


                            PizzariaSabor87 = ponto.Sabor87;
                            PizzariaPreco87 = ponto.Preco87;
                            PizzariaIngredientes87 = ponto.Ingredientes87;


                            PizzariaSabor88 = ponto.Sabor88;
                            PizzariaPreco88 = ponto.Preco88;
                            PizzariaIngredientes88 = ponto.Ingredientes88;


                            PizzariaSabor89 = ponto.Sabor89;
                            PizzariaPreco89 = ponto.Preco89;
                            PizzariaIngredientes89 = ponto.Ingredientes89;


                            PizzariaSabor90 = ponto.Sabor90;
                            PizzariaPreco90 = ponto.Preco90;
                            PizzariaIngredientes90 = ponto.Ingredientes90;

                            PizzariaSabor91 = ponto.Sabor91;
                            PizzariaPreco91 = ponto.Preco91;
                            PizzariaIngredientes91 = ponto.Ingredientes91;

                            PizzariaSabor92 = ponto.Sabor92;
                            PizzariaPreco92 = ponto.Preco92;
                            PizzariaIngredientes92 = ponto.Ingredientes92;

                            PizzariaSabor93 = ponto.Sabor93;
                            PizzariaPreco93 = ponto.Preco93;
                            PizzariaIngredientes93 = ponto.Ingredientes93;

                            PizzariaSabor94 = ponto.Sabor94;
                            PizzariaPreco94 = ponto.Preco94;
                            PizzariaIngredientes94 = ponto.Ingredientes94;

                            PizzariaSabor95 = ponto.Sabor95;
                            PizzariaPreco95 = ponto.Preco95;
                            PizzariaIngredientes95 = ponto.Ingredientes95;

                            PizzariaSabor96 = ponto.Sabor96;
                            PizzariaPreco96 = ponto.Preco96;
                            PizzariaIngredientes96 = ponto.Ingredientes96;

                            PizzariaSabor97 = ponto.Sabor97;
                            PizzariaPreco97 = ponto.Preco97;
                            PizzariaIngredientes97 = ponto.Ingredientes97;

                            PizzariaSabor98 = ponto.Sabor98;
                            PizzariaPreco98 = ponto.Preco98;
                            PizzariaIngredientes98 = ponto.Ingredientes98;

                            PizzariaSabor99 = ponto.Sabor99;
                            PizzariaPreco99 = ponto.Preco99;
                            PizzariaIngredientes99 = ponto.Ingredientes99;

                            PizzariaSabor100 = ponto.Sabor100;
                            PizzariaPreco100 = ponto.Preco100;
                            PizzariaIngredientes100 = ponto.Ingredientes100;

                            PizzariaSabor100 = ponto.Sabor100;
                            PizzariaPreco100 = ponto.Preco100;
                            PizzariaIngredientes100 = ponto.Ingredientes100;

                            PizzariaSabor101 = ponto.Sabor101;
                            PizzariaPreco90 = ponto.Preco101;
                            PizzariaIngredientes101 = ponto.Ingredientes101;

                            PizzariaSabor101 = ponto.Sabor101;
                            PizzariaPreco101 = ponto.Preco101;
                            PizzariaIngredientes101 = ponto.Ingredientes101;

                            PizzariaSabor102 = ponto.Sabor102;
                            PizzariaPreco102 = ponto.Preco102;
                            PizzariaIngredientes102 = ponto.Ingredientes102;

                            PizzariaSabor103 = ponto.Sabor103;
                            PizzariaPreco103 = ponto.Preco103;
                            PizzariaIngredientes103 = ponto.Ingredientes103;

                            PizzariaSabor104 = ponto.Sabor104;
                            PizzariaPreco104 = ponto.Preco104;
                            PizzariaIngredientes104 = ponto.Ingredientes104;

                            PizzariaSabor105 = ponto.Sabor105;
                            PizzariaPreco105 = ponto.Preco105;
                            PizzariaIngredientes105 = ponto.Ingredientes105;

                            PizzariaSabor106 = ponto.Sabor106;
                            PizzariaPreco106 = ponto.Preco106;
                            PizzariaIngredientes106 = ponto.Ingredientes106;

                            PizzariaSabor107 = ponto.Sabor107;
                            PizzariaPreco107 = ponto.Preco107;
                            PizzariaIngredientes107 = ponto.Ingredientes107;

                            PizzariaSabor108 = ponto.Sabor108;
                            PizzariaPreco108 = ponto.Preco108;
                            PizzariaIngredientes108 = ponto.Ingredientes108;

                            PizzariaSabor109 = ponto.Sabor109;
                            PizzariaPreco109 = ponto.Preco109;
                            PizzariaIngredientes109 = ponto.Ingredientes109;


                            PizzariaSabor110 = ponto.Sabor110;
                            PizzariaPreco110 = ponto.Preco110;
                            PizzariaIngredientes109 = ponto.Ingredientes110;


                            PizzariaSabor111 = ponto.Sabor111;
                            PizzariaPreco111 = ponto.Preco111;
                            PizzariaIngredientes111 = ponto.Ingredientes111;


                            PizzariaSabor112 = ponto.Sabor112;
                            PizzariaPreco112 = ponto.Preco112;
                            PizzariaIngredientes112 = ponto.Ingredientes112;


                            PizzariaSabor113 = ponto.Sabor113;
                            PizzariaPreco113 = ponto.Preco113;
                            PizzariaIngredientes113 = ponto.Ingredientes113;


                            PizzariaSabor114 = ponto.Sabor114;
                            PizzariaPreco114 = ponto.Preco114;
                            PizzariaIngredientes114 = ponto.Ingredientes114;


                            PizzariaSabor115 = ponto.Sabor115;
                            PizzariaPreco115 = ponto.Preco115;
                            PizzariaIngredientes115 = ponto.Ingredientes115;








                            //console.log("index:" +index );
                        }

                    });


                    $('#divNome').html(PizzariaNome);
                    $('#divEndereco').html(PizzariaEndereco);
                    $('#divEmail').html(PizzariaEmail);
                    $('#divTelefone').attr('href','tel:'+ PizzariaTelefone);
                    $('#divTelefone2').attr('href','tel:'+ PizzariaTelefone2);
                    $('#divWhatsapp').html(PizzariaWhatsApp);
                    $('#divLogo').attr('src', PizzariaLogo);
                    $('#foto1').attr('src', PizzariaFoto1);
                    $('#foto2').attr('src', PizzariaFoto2);
                    $('#foto3').attr('src', PizzariaFoto3);
                    $('#foto4').attr('src', PizzariaFoto4);
                    $('#foto5').attr('src', PizzariaFoto5);
                    $('#foto6').attr('src', PizzariaFoto6);
                    
                    $('#divInformacoes').html(PizzariaInformacoes);
                    $('#divDia1').html(PizzariaDia1);
                    $('#divHorario1').html(PizzariaHorario1);
                    $('#divDia2').html(PizzariaDia2);
                    $('#divHorario2').html(PizzariaHorario2);
                    $('#divDia3').html(PizzariaDia3);
                    $('#divHorario3').html(PizzariaHorario3);

                    $('#divSabor1').html(PizzariaSabor1);
                    $('#divPreco1').html(PizzariaPreco1);
                    $('#divIngredientes1').html(PizzariaIngredientes1);
                    $('#imagem1').attr('src', imagem);


                    $('#divSabor2').html(PizzariaSabor2);
                    $('#divPreco2').html(PizzariaPreco2);
                    $('#divIngredientes2').html(PizzariaIngredientes2);
                    $('#imagem2').attr('src', imagem);


                    $('#divSabor3').html(PizzariaSabor3);
                    $('#divPreco3').html(PizzariaPreco3);
                    $('#divIngredientes3').html(PizzariaIngredientes3);
                    $('#imagem3').attr('src', imagem);


                    $('#divSabor4').html(PizzariaSabor4);
                    $('#divPreco4').html(PizzariaPreco4);
                    $('#divIngredientes4').html(PizzariaIngredientes4);
                    $('#imagem4').attr('src', imagem);


                    $('#divSabor5').html(PizzariaSabor5);
                    $('#divPreco5').html(PizzariaPreco5);
                    $('#divIngredientes5').html(PizzariaIngredientes5);
                    $('#imagem5').attr('src', imagem);


                    $('#divSabor6').html(PizzariaSabor6);
                    $('#divPreco6').html(PizzariaPreco6);
                    $('#divIngredientes6').html(PizzariaIngredientes6);
                    $('#imagem6').attr('src', imagem);


                    $('#divSabor7').html(PizzariaSabor7);
                    $('#divPreco7').html(PizzariaPreco7);
                    $('#divIngredientes7').html(PizzariaIngredientes7);
                    $('#imagem7').attr('src', imagem);


                    $('#divSabor8').html(PizzariaSabor8);
                    $('#divPreco8').html(PizzariaPreco8);
                    $('#divIngredientes8').html(PizzariaIngredientes8);
                    $('#imagem8').attr('src', imagem);


                    $('#divSabor9').html(PizzariaSabor9);
                    $('#divPreco9').html(PizzariaPreco9);
                    $('#divIngredientes9').html(PizzariaIngredientes9);
                    $('#imagem9').attr('src', imagem);


                    $('#divSabor10').html(PizzariaSabor10);
                    $('#divPreco10').html(PizzariaPreco10);
                    $('#divIngredientes10').html(PizzariaIngredientes10);
                    $('#imagem10').attr('src', imagem);
                    
                    $('#divSabor11').html(PizzariaSabor11);
                    $('#divPreco11').html(PizzariaPreco11);
                    $('#divIngredientes11').html(PizzariaIngredientes11);
                    $('#imagem11').attr('src', imagem);
                    
                    $('#divSabor11').html(PizzariaSabor11);
                    $('#divPreco11').html(PizzariaPreco11);
                    $('#divIngredientes11').html(PizzariaIngredientes11);
                    $('#imagem11').attr('src', imagem);
                    
                    $('#divSabor12').html(PizzariaSabor12);
                    $('#divPreco12').html(PizzariaPreco12);
                    $('#divIngredientes12').html(PizzariaIngredientes12);
                    $('#imagem12').attr('src', imagem);
                    
                    $('#divSabor13').html(PizzariaSabor13);
                    $('#divPreco13').html(PizzariaPreco13);
                    $('#divIngredientes13').html(PizzariaIngredientes13);
                    $('#imagem13').attr('src', imagem);
                    
                    $('#divSabor14').html(PizzariaSabor14);
                    $('#divPreco14').html(PizzariaPreco14);
                    $('#divIngredientes14').html(PizzariaIngredientes14);
                    $('#imagem14').attr('src', imagem);
                    
                    $('#divSabor15').html(PizzariaSabor15);
                    $('#divPreco15').html(PizzariaPreco15);
                    $('#divIngredientes15').html(PizzariaIngredientes15);
                    $('#imagem15').attr('src', imagem);
                    
                    $('#divSabor16').html(PizzariaSabor16);
                    $('#divPreco16').html(PizzariaPreco16);
                    $('#divIngredientes16').html(PizzariaIngredientes16);
                    $('#imagem16').attr('src', imagem);
                    
                    $('#divSabor17').html(PizzariaSabor17);
                    $('#divPreco17').html(PizzariaPreco17);
                    $('#divIngredientes17').html(PizzariaIngredientes17);
                    $('#imagem17').attr('src', imagem);
                    
                    $('#divSabor18').html(PizzariaSabor18);
                    $('#divPreco18').html(PizzariaPreco18);
                    $('#divIngredientes18').html(PizzariaIngredientes18);
                    $('#imagem18').attr('src', imagem);
                    
                    $('#divSabor19').html(PizzariaSabor19);
                    $('#divPreco19').html(PizzariaPreco19);
                    $('#divIngredientes19').html(PizzariaIngredientes19);
                    $('#imagem19').attr('src', imagem);
                    
                    $('#divSabor20').html(PizzariaSabor20);
                    $('#divPreco20').html(PizzariaPreco20);
                    $('#divIngredientes20').html(PizzariaIngredientes20);
                    $('#imagem20').attr('src', imagem);
                    
                    $('#divSabor21').html(PizzariaSabor21);
                    $('#divPreco21').html(PizzariaPreco21);
                    $('#divIngredientes21').html(PizzariaIngredientes21);
                    $('#imagem21').attr('src', imagem);
                    
                    $('#divSabor22').html(PizzariaSabor22);
                    $('#divPreco22').html(PizzariaPreco22);
                    $('#divIngredientes22').html(PizzariaIngredientes22);
                    $('#imagem22').attr('src', imagem);
                    
                    $('#divSabor23').html(PizzariaSabor23);
                    $('#divPreco23').html(PizzariaPreco23);
                    $('#divIngredientes23').html(PizzariaIngredientes23);
                    $('#imagem23').attr('src', imagem);
                    
                    $('#divSabor24').html(PizzariaSabor24);
                    $('#divPreco24').html(PizzariaPreco24);
                    $('#divIngredientes24').html(PizzariaIngredientes24);
                    $('#imagem24').attr('src', imagem);
                    
                    $('#divSabor25').html(PizzariaSabor25);
                    $('#divPreco25').html(PizzariaPreco25);
                    $('#divIngredientes25').html(PizzariaIngredientes25);
                    $('#imagem25').attr('src', imagem);
                    
                    $('#divSabor26').html(PizzariaSabor26);
                    $('#divPreco26').html(PizzariaPreco26);
                    $('#divIngredientes26').html(PizzariaIngredientes26);
                    $('#imagem26').attr('src', imagem);
                    
                    $('#divSabor27').html(PizzariaSabor27);
                    $('#divPreco27').html(PizzariaPreco27);
                    $('#divIngredientes27').html(PizzariaIngredientes27);
                    $('#imagem27').attr('src', imagem);
                    
                    $('#divSabor28').html(PizzariaSabor28);
                    $('#divPreco28').html(PizzariaPreco28);
                    $('#divIngredientes28').html(PizzariaIngredientes28);
                    $('#imagem28').attr('src', imagem);
                    
                    $('#divSabor29').html(PizzariaSabor29);
                    $('#divPreco29').html(PizzariaPreco29);
                    $('#divIngredientes29').html(PizzariaIngredientes29);
                    $('#imagem29').attr('src', imagem);
                    
                    $('#divSabor30').html(PizzariaSabor30);
                    $('#divPreco30').html(PizzariaPreco30);
                    $('#divIngredientes30').html(PizzariaIngredientes30);
                    $('#imagem30').attr('src', imagem);
                    
                    $('#divSabor31').html(PizzariaSabor31);
                    $('#divPreco31').html(PizzariaPreco31);
                    $('#divIngredientes31').html(PizzariaIngredientes31);
                    $('#imagem31').attr('src', imagem);
                    
                    $('#divSabor32').html(PizzariaSabor32);
                    $('#divPreco32').html(PizzariaPreco32);
                    $('#divIngredientes32').html(PizzariaIngredientes32);
                    $('#imagem32').attr('src', imagem);
                    
                    $('#divSabor33').html(PizzariaSabor33);
                    $('#divPreco33').html(PizzariaPreco33);
                    $('#divIngredientes33').html(PizzariaIngredientes33);
                    $('#imagem33').attr('src', imagem);
                    
                    $('#divSabor34').html(PizzariaSabor34);
                    $('#divPreco34').html(PizzariaPreco34);
                    $('#divIngredientes34').html(PizzariaIngredientes34);
                    $('#imagem34').attr('src', imagem);
                    
                    $('#divSabor35').html(PizzariaSabor35);
                    $('#divPreco35').html(PizzariaPreco35);
                    $('#divIngredientes35').html(PizzariaIngredientes35);
                    $('#imagem35').attr('src', imagem);
                    
                    $('#divSabor36').html(PizzariaSabor36);
                    $('#divPreco36').html(PizzariaPreco36);
                    $('#divIngredientes36').html(PizzariaIngredientes36);
                    $('#imagem36').attr('src', imagem);
                    
                    $('#divSabor37').html(PizzariaSabor37);
                    $('#divPreco37').html(PizzariaPreco37);
                    $('#divIngredientes37').html(PizzariaIngredientes37);
                    $('#imagem37').attr('src', imagem);
                    
                    $('#divSabor38').html(PizzariaSabor38);
                    $('#divPreco38').html(PizzariaPreco38);
                    $('#divIngredientes38').html(PizzariaIngredientes38);
                    $('#imagem38').attr('src', imagem);
                    
                    $('#divSabor39').html(PizzariaSabor39);
                    $('#divPreco39').html(PizzariaPreco39);
                    $('#divIngredientes39').html(PizzariaIngredientes39);
                    $('#imagem39').attr('src', imagem);
                    
                    $('#divSabor40').html(PizzariaSabor40);
                    $('#divPreco40').html(PizzariaPreco40);
                    $('#divIngredientes40').html(PizzariaIngredientes40);
                    $('#imagem40').attr('src', imagem);
                    
                    $('#divSabor41').html(PizzariaSabor41);
                    $('#divPreco41').html(PizzariaPreco41);
                    $('#divIngredientes41').html(PizzariaIngredientes41);
                    $('#imagem41').attr('src', imagem);
                    
                    $('#divSabor42').html(PizzariaSabor42);
                    $('#divPreco42').html(PizzariaPreco42);
                    $('#divIngredientes42').html(PizzariaIngredientes42);
                    $('#imagem42').attr('src', imagem);
                    
                    $('#divSabor43').html(PizzariaSabor43);
                    $('#divPreco43').html(PizzariaPreco43);
                    $('#divIngredientes43').html(PizzariaIngredientes43);
                    $('#imagem43').attr('src', imagem);
                    
                    $('#divSabor44').html(PizzariaSabor44);
                    $('#divPreco44').html(PizzariaPreco44);
                    $('#divIngredientes44').html(PizzariaIngredientes44);
                    $('#imagem44').attr('src', imagem);
                    
                    $('#divSabor45').html(PizzariaSabor45);
                    $('#divPreco45').html(PizzariaPreco45);
                    $('#divIngredientes45').html(PizzariaIngredientes45);
                    $('#imagem45').attr('src', imagem);
                    
                    $('#divSabor46').html(PizzariaSabor46);
                    $('#divPreco46').html(PizzariaPreco46);
                    $('#divIngredientes46').html(PizzariaIngredientes46);
                    $('#imagem46').attr('src', imagem);
                    
                    $('#divSabor47').html(PizzariaSabor47);
                    $('#divPreco47').html(PizzariaPreco47);
                    $('#divIngredientes47').html(PizzariaIngredientes47);
                    $('#imagem47').attr('src', imagem);
                    
                    $('#divSabor48').html(PizzariaSabor48);
                    $('#divPreco48').html(PizzariaPreco48);
                    $('#divIngredientes48').html(PizzariaIngredientes48);
                    $('#imagem48').attr('src', imagem);
                    
                    $('#divSabor49').html(PizzariaSabor49);
                    $('#divPreco49').html(PizzariaPreco49);
                    $('#divIngredientes49').html(PizzariaIngredientes49);
                    $('#imagem49').attr('src', imagem);
                    
                    $('#divSabor50').html(PizzariaSabor50);
                    $('#divPreco50').html(PizzariaPreco50);
                    $('#divIngredientes50').html(PizzariaIngredientes50);
                    $('#imagem50').attr('src', imagem);
                    
                    $('#divSabor51').html(PizzariaSabor51);
                    $('#divPreco51').html(PizzariaPreco51);
                    $('#divIngredientes51').html(PizzariaIngredientes51);
                    $('#imagem51').attr('src', imagem);
                    
                    $('#divSabor52').html(PizzariaSabor52);
                    $('#divPreco52').html(PizzariaPreco52);
                    $('#divIngredientes52').html(PizzariaIngredientes52);
                    $('#imagem52').attr('src', imagem);
                    
                    $('#divSabor53').html(PizzariaSabor53);
                    $('#divPreco53').html(PizzariaPreco53);
                    $('#divIngredientes53').html(PizzariaIngredientes53);
                    $('#imagem53').attr('src', imagem);
                    
                    $('#divSabor54').html(PizzariaSabor54);
                    $('#divPreco54').html(PizzariaPreco54);
                    $('#divIngredientes54').html(PizzariaIngredientes54);
                    $('#imagem54').attr('src', imagem);
                    
                    $('#divSabor55').html(PizzariaSabor55);
                    $('#divPreco55').html(PizzariaPreco55);
                    $('#divIngredientes55').html(PizzariaIngredientes55);
                    $('#imagem55').attr('src', imagem);
                    
                    $('#divSabor56').html(PizzariaSabor56);
                    $('#divPreco56').html(PizzariaPreco56);
                    $('#divIngredientes56').html(PizzariaIngredientes56);
                    $('#imagem56').attr('src', imagem);
                    
                    $('#divSabor57').html(PizzariaSabor57);
                    $('#divPreco57').html(PizzariaPreco57);
                    $('#divIngredientes57').html(PizzariaIngredientes57);
                    $('#imagem57').attr('src', imagem);
                    
                    $('#divSabor58').html(PizzariaSabor58);
                    $('#divPreco58').html(PizzariaPreco58);
                    $('#divIngredientes58').html(PizzariaIngredientes58);
                    $('#imagem58').attr('src', imagem);
                    
                    $('#divSabor59').html(PizzariaSabor59);
                    $('#divPreco59').html(PizzariaPreco59);
                    $('#divIngredientes59').html(PizzariaIngredientes59);
                    $('#imagem59').attr('src', imagem);
                    
                    $('#divSabor60').html(PizzariaSabor60);
                    $('#divPreco60').html(PizzariaPreco60);
                    $('#divIngredientes60').html(PizzariaIngredientes60);
                    $('#imagem60').attr('src', imagem);
                    
                    $('#divSabor61').html(PizzariaSabor61);
                    $('#divPreco61').html(PizzariaPreco61);
                    $('#divIngredientes61').html(PizzariaIngredientes61);
                    $('#imagem61').attr('src', imagem);
                    
                    $('#divSabor62').html(PizzariaSabor62);
                    $('#divPreco62').html(PizzariaPreco62);
                    $('#divIngredientes62').html(PizzariaIngredientes62);
                    $('#imagem62').attr('src', imagem);
                    
                    $('#divSabor63').html(PizzariaSabor63);
                    $('#divPreco63').html(PizzariaPreco63);
                    $('#divIngredientes63').html(PizzariaIngredientes63);
                    $('#imagem63').attr('src', imagem);
                    
                    $('#divSabor64').html(PizzariaSabor64);
                    $('#divPreco64').html(PizzariaPreco64);
                    $('#divIngredientes64').html(PizzariaIngredientes64);
                    $('#imagem64').attr('src', imagem);
                    
                    $('#divSabor65').html(PizzariaSabor65);
                    $('#divPreco65').html(PizzariaPreco65);
                    $('#divIngredientes65').html(PizzariaIngredientes65);
                    $('#imagem65').attr('src', imagem);
                    
                    $('#divSabor66').html(PizzariaSabor66);
                    $('#divPreco66').html(PizzariaPreco66);
                    $('#divIngredientes66').html(PizzariaIngredientes66);
                    $('#imagem66').attr('src', imagem);
                    
                    $('#divSabor67').html(PizzariaSabor67);
                    $('#divPreco67').html(PizzariaPreco67);
                    $('#divIngredientes67').html(PizzariaIngredientes67);
                    $('#imagem67').attr('src', imagem);
                    
                    $('#divSabor68').html(PizzariaSabor68);
                    $('#divPreco68').html(PizzariaPreco68);
                    $('#divIngredientes68').html(PizzariaIngredientes68);
                    $('#imagem68').attr('src', imagem);
                    
                    $('#divSabor69').html(PizzariaSabor69);
                    $('#divPreco69').html(PizzariaPreco69);
                    $('#divIngredientes69').html(PizzariaIngredientes69);
                    $('#imagem69').attr('src', imagem);
                    
                    $('#divSabor70').html(PizzariaSabor70);
                    $('#divPreco70').html(PizzariaPreco70);
                    $('#divIngredientes70').html(PizzariaIngredientes70);
                    $('#imagem70').attr('src', imagem);
                    
                    $('#divSabor71').html(PizzariaSabor71);
                    $('#divPreco71').html(PizzariaPreco71);
                    $('#divIngredientes71').html(PizzariaIngredientes71);
                    $('#imagem71').attr('src', imagem);
                    
                    $('#divSabor72').html(PizzariaSabor72);
                    $('#divPreco72').html(PizzariaPreco72);
                    $('#divIngredientes72').html(PizzariaIngredientes72);
                    $('#imagem72').attr('src', imagem);
                    
                    $('#divSabor73').html(PizzariaSabor73);
                    $('#divPreco73').html(PizzariaPreco73);
                    $('#divIngredientes73').html(PizzariaIngredientes73);
                    $('#imagem73').attr('src', imagem);
                    
                    $('#divSabor74').html(PizzariaSabor74);
                    $('#divPreco74').html(PizzariaPreco74);
                    $('#divIngredientes74').html(PizzariaIngredientes74);
                    $('#imagem74').attr('src', imagem);
                    
                    $('#divSabor75').html(PizzariaSabor75);
                    $('#divPreco75').html(PizzariaPreco75);
                    $('#divIngredientes75').html(PizzariaIngredientes75);
                    $('#imagem75').attr('src', imagem);
                    
                    $('#divSabor76').html(PizzariaSabor76);
                    $('#divPreco76').html(PizzariaPreco76);
                    $('#divIngredientes76').html(PizzariaIngredientes76);
                    $('#imagem76').attr('src', imagem);
                    
                    $('#divSabor77').html(PizzariaSabor77);
                    $('#divPreco77').html(PizzariaPreco77);
                    $('#divIngredientes77').html(PizzariaIngredientes77);
                    $('#imagem77').attr('src', imagem);
                    
                    $('#divSabor78').html(PizzariaSabor78);
                    $('#divPreco78').html(PizzariaPreco78);
                    $('#divIngredientes78').html(PizzariaIngredientes78);
                    $('#imagem78').attr('src', imagem);
                    
                    $('#divSabor79').html(PizzariaSabor79);
                    $('#divPreco79').html(PizzariaPreco79);
                    $('#divIngredientes79').html(PizzariaIngredientes79);
                    $('#imagem79').attr('src', imagem);
                    
                    $('#divSabor80').html(PizzariaSabor80);
                    $('#divPreco80').html(PizzariaPreco80);
                    $('#divIngredientes80').html(PizzariaIngredientes80);
                    $('#imagem80').attr('src', imagem);
                    
                    $('#divSabor81').html(PizzariaSabor81);
                    $('#divPreco81').html(PizzariaPreco81);
                    $('#divIngredientes81').html(PizzariaIngredientes81);
                    $('#imagem81').attr('src', imagem);
                    
                    $('#divSabor82').html(PizzariaSabor82);
                    $('#divPreco82').html(PizzariaPreco82);
                    $('#divIngredientes82').html(PizzariaIngredientes82);
                    $('#imagem82').attr('src', imagem);
                    
                    $('#divSabor83').html(PizzariaSabor83);
                    $('#divPreco83').html(PizzariaPreco83);
                    $('#divIngredientes83').html(PizzariaIngredientes83);
                    $('#imagem83').attr('src', imagem);
                    
                    $('#divSabor84').html(PizzariaSabor84);
                    $('#divPreco84').html(PizzariaPreco84);
                    $('#divIngredientes84').html(PizzariaIngredientes84);
                    $('#imagem84').attr('src', imagem);
                    
                    $('#divSabor85').html(PizzariaSabor85);
                    $('#divPreco85').html(PizzariaPreco85);
                    $('#divIngredientes85').html(PizzariaIngredientes85);
                    $('#imagem85').attr('src', imagem);
                    
                    $('#divSabor86').html(PizzariaSabor86);
                    $('#divPreco86').html(PizzariaPreco86);
                    $('#divIngredientes86').html(PizzariaIngredientes86);
                    $('#imagem86').attr('src', imagem);
                    
                    $('#divSabor87').html(PizzariaSabor87);
                    $('#divPreco87').html(PizzariaPreco87);
                    $('#divIngredientes87').html(PizzariaIngredientes87);
                    $('#imagem87').attr('src', imagem);
                    
                    $('#divSabor88').html(PizzariaSabor88);
                    $('#divPreco88').html(PizzariaPreco88);
                    $('#divIngredientes88').html(PizzariaIngredientes88);
                    $('#imagem88').attr('src', imagem);
                    
                    $('#divSabor89').html(PizzariaSabor89);
                    $('#divPreco89').html(PizzariaPreco89);
                    $('#divIngredientes89').html(PizzariaIngredientes89);
                    $('#imagem89').attr('src', imagem);
                    
                    $('#divSabor90').html(PizzariaSabor90);
                    $('#divPreco90').html(PizzariaPreco90);
                    $('#divIngredientes90').html(PizzariaIngredientes90);
                    $('#imagem90').attr('src', imagem);
                    
                    $('#divSabor91').html(PizzariaSabor91);
                    $('#divPreco91').html(PizzariaPreco91);
                    $('#divIngredientes91').html(PizzariaIngredientes91);
                    $('#imagem91').attr('src', imagem);
                    
                    $('#divSabor92').html(PizzariaSabor92);
                    $('#divPreco92').html(PizzariaPreco92);
                    $('#divIngredientes92').html(PizzariaIngredientes92);
                    $('#imagem92').attr('src', imagem);
                    
                    $('#divSabor93').html(PizzariaSabor93);
                    $('#divPreco93').html(PizzariaPreco93);
                    $('#divIngredientes93').html(PizzariaIngredientes93);
                    $('#imagem93').attr('src', imagem);
                    
                    $('#divSabor94').html(PizzariaSabor94);
                    $('#divPreco94').html(PizzariaPreco94);
                    $('#divIngredientes94').html(PizzariaIngredientes94);
                    $('#imagem94').attr('src', imagem);
                    
                    $('#divSabor95').html(PizzariaSabor95);
                    $('#divPreco95').html(PizzariaPreco95);
                    $('#divIngredientes').html(PizzariaIngredientes95);
                    $('#imagem95').attr('src', imagem);
                    
                    $('#divSabor96').html(PizzariaSabor96);
                    $('#divPreco96').html(PizzariaPreco96);
                    $('#divIngredientes96').html(PizzariaIngredientes96);
                    $('#imagem96').attr('src', imagem);
                    
                    $('#divSabor97').html(PizzariaSabor97);
                    $('#divPreco97').html(PizzariaPreco97);
                    $('#divIngredientes97').html(PizzariaIngredientes97);
                    $('#imagem97').attr('src', imagem);
                    
                    $('#divSabor98').html(PizzariaSabor98);
                    $('#divPreco98').html(PizzariaPreco98);
                    $('#divIngredientes98').html(PizzariaIngredientes98);
                    $('#imagem98').attr('src', imagem);
                    
                    $('#divSabor99').html(PizzariaSabor99);
                    $('#divPreco99').html(PizzariaPreco99);
                    $('#divIngredientes99').html(PizzariaIngredientes99);
                    $('#imagem99').attr('src', imagem);
                    
                    $('#divSabor100').html(PizzariaSabor100);
                    $('#divPreco100').html(PizzariaPreco100);
                    $('#divIngredientes100').html(PizzariaIngredientes100);
                    $('#imagem100').attr('src', imagem);
                    
                    $('#divSabor101').html(PizzariaSabor101);
                    $('#divPreco101').html(PizzariaPreco101);
                    $('#divIngredientes101').html(PizzariaIngredientes101);
                    $('#imagem101').attr('src', imagem);
                    
                    $('#divSabor102').html(PizzariaSabor102);
                    $('#divPreco102').html(PizzariaPreco102);
                    $('#divIngredientes102').html(PizzariaIngredientes102);
                    $('#imagem102').attr('src', imagem);
                    
                    $('#divSabor103').html(PizzariaSabor103);
                    $('#divPreco103').html(PizzariaPreco103);
                    $('#divIngredientes103').html(PizzariaIngredientes103);
                    $('#imagem103').attr('src', imagem);
                    
                    $('#divSabor104').html(PizzariaSabor104);
                    $('#divPreco104').html(PizzariaPreco104);
                    $('#divIngredientes104').html(PizzariaIngredientes104);
                    $('#imagem104').attr('src', imagem);
                    
                    $('#divSabor105').html(PizzariaSabor105);
                    $('#divPreco105').html(PizzariaPreco105);
                    $('#divIngredientes105').html(PizzariaIngredientes105);
                    $('#imagem105').attr('src', imagem);
                    
                    $('#divSabor106').html(PizzariaSabor106);
                    $('#divPreco106').html(PizzariaPreco106);
                    $('#divIngredientes106').html(PizzariaIngredientes106);
                    $('#imagem106').attr('src', imagem);
                    
                    $('#divSabor107').html(PizzariaSabor107);
                    $('#divPreco107').html(PizzariaPreco107);
                    $('#divIngredientes107').html(PizzariaIngredientes107);
                    $('#imagem107').attr('src', imagem);
                    
                    $('#divSabor108').html(PizzariaSabor108);
                    $('#divPreco108').html(PizzariaPreco108);
                    $('#divIngredientes108').html(PizzariaIngredientes108);
                    $('#imagem108').attr('src', imagem);
                    
                    $('#divSabor109').html(PizzariaSabor109);
                    $('#divPreco109').html(PizzariaPreco109);
                    $('#divIngredientes109').html(PizzariaIngredientes109);
                    $('#imagem109').attr('src', imagem);
                    
                    $('#divSabor110').html(PizzariaSabor110);
                    $('#divPreco110').html(PizzariaPreco110);
                    $('#divIngredientes110').html(PizzariaIngredientes110);
                    $('#imagem110').attr('src', imagem);
                    
                    $('#divSabor111').html(PizzariaSabor111);
                    $('#divPreco111').html(PizzariaPreco111);
                    $('#divIngredientes111').html(PizzariaIngredientes111);
                    $('#imagem111').attr('src', imagem);
                    
                    $('#divSabor112').html(PizzariaSabor112);
                    $('#divPreco112').html(PizzariaPreco112);
                    $('#divIngredientes112').html(PizzariaIngredientes112);
                    $('#imagem112').attr('src', imagem);
                    
                    $('#divSabor113').html(PizzariaSabor113);
                    $('#divPreco113').html(PizzariaPreco113);
                    $('#divIngredientes113').html(PizzariaIngredientes113);
                    $('#imagem113').attr('src', imagem);
                    
                    $('#divSabor114').html(PizzariaSabor114);
                    $('#divPreco114').html(PizzariaPreco114);
                    $('#divIngredientes114').html(PizzariaIngredientes114);
                    $('#imagem114').attr('src', imagem);
                    

                    $('#divSabor115').html(PizzariaSabor115);
                    $('#divPreco115').html(PizzariaPreco115);
                    $('#divIngredientes115').html(PizzariaIngredientes115);
                    $('#imagem115').attr('src', imagem);
                    
                     if (PizzariaSabor27 == "")
                    {
                        $("#imagem27").css("display", "none");
                    }
                     if (PizzariaSabor28 == "")
                    {
                        $("#imagem28").css("display", "none");
                    }
                     if (PizzariaSabor29 == "")
                    {
                        $("#imagem29").css("display", "none");
                    }
                     if (PizzariaSabor30 == "")
                    {
                        $("#imagem30").css("display", "none");
                    }
                     if (PizzariaSabor31 == "")
                    {
                        $("#imagem31").css("display", "none");
                    }
                     if (PizzariaSabor32 == "")
                    {
                        $("#imagem32").css("display", "none");
                    }
                     if (PizzariaSabor33 == "")
                    {
                        $("#imagem33").css("display", "none");
                    }
                     if (PizzariaSabor34 == "")
                    {
                        $("#imagem34").css("display", "none");
                    }
                     if (PizzariaSabor35 == "")
                    {
                        $("#imagem35").css("display", "none");
                    }
                     if (PizzariaSabor36 == "")
                    {
                        $("#imagem36").css("display", "none");
                    }
                     if (PizzariaSabor37 == "")
                    {
                        $("#imagem37").css("display", "none");
                    }
                     if (PizzariaSabor38 == "")
                    {
                        $("#imagem38").css("display", "none");
                    }
                     if (PizzariaSabor39 == "")
                    {
                        $("#imagem39").css("display", "none");
                    }
                   
                    if (PizzariaSabor40 == "")
                    {
                        $("#imagem40").css("display", "none");
                    }
                    if (PizzariaSabor41 == "")
                    {
                        $("#imagem41").css("display", "none");
                    }
                    if (PizzariaSabor42 == "")
                    {
                        $("#imagem42").css("display", "none");
                    }
                    if (PizzariaSabor43 == "")
                    {
                        $("#imagem43").css("display", "none");
                    }
                    if (PizzariaSabor44 == "")
                    {
                        $("#imagem44").css("display", "none");
                    }
                    if (PizzariaSabor45 == "")
                    {
                        $("#imagem45").css("display", "none");
                    }
                    if (PizzariaSabor46 == "")
                    {
                        $("#imagem46").css("display", "none");
                    }
                    if (PizzariaSabor47 == "")
                    {
                        $("#imagem47").css("display", "none");
                    }
                    if (PizzariaSabor48 == "")
                    {
                        $("#imagem48").css("display", "none");
                    }
                    if (PizzariaSabor49 == "")
                    {
                        $("#imagem49").css("display", "none");
                    }
                    if (PizzariaSabor50 == "")
                    {
                        $("#imagem50").css("display", "none");
                    }
                    if (PizzariaSabor51 == "")
                    {
                        $("#imagem51").css("display", "none");
                    }
                    if (PizzariaSabor52 == "")
                    {
                        $("#imagem52").css("display", "none");
                    }
                    if (PizzariaSabor53 == "")
                    {
                        $("#imagem53").css("display", "none");
                    }
                    if (PizzariaSabor54 == "")
                    {
                        $("#imagem54").css("display", "none");
                    }
                    if (PizzariaSabor55 == "")
                    {
                        $("#imagem55").css("display", "none");
                    }
                    if (PizzariaSabor56 == "")
                    {
                        $("#imagem56").css("display", "none");
                    }
                    if (PizzariaSabor57 == "")
                    {
                        $("#imagem57").css("display", "none");
                    }
                    if (PizzariaSabor58 == "")
                    {
                        $("#imagem58").css("display", "none");
                    }
                    if (PizzariaSabor59 == "")
                    {
                        $("#imagem59").css("display", "none");
                    }
                    if (PizzariaSabor60 == "")
                    {
                        $("#imagem60").css("display", "none");
                        $("#divSabor60").css("display", "none");
                        $("#divIngredientes60").css("display", "none");
                        $("#divPreco60").css("display", "none");
                        
                    }
                    if (PizzariaSabor61 == "")
                    {
                        $("#imagem61").css("display", "none");
                        $("#divIngredientes61").css("display", "none");
                        $("#divPreco61").css("display", "none");
                    }
                    if (PizzariaSabor62 == "")
                    {
                        $("#imagem62").css("display", "none");
                        $("#divIngredientes62").css("display", "none");
                        $("#divPreco62").css("display", "none");
                    }
                    if (PizzariaSabor63 == "")
                    {
                        $("#imagem63").css("display", "none");
                        $("#divIngredientes63").css("display", "none");
                        $("#divPreco63").css("display", "none");
                    }
                    if (PizzariaSabor64 == "")
                    {
                        $("#imagem64").css("display", "none");
                        $("#divIngredientes64").css("display", "none");
                        $("#divPreco64").css("display", "none");
                    }
                    if (PizzariaSabor65 == "")
                    {
                        $("#imagem65").css("display", "none");
                        $("#divIngredientes65").css("display", "none");
                        $("#divPreco65").css("display", "none");
                    }
                    if (PizzariaSabor66 == "")
                    {   
                        $("#imagem66").css("display", "none");
                        $("#div66").css("display", "none");
                        $("#divIngredientes66").css("display", "none");
                        $("#divPreco66").css("display", "none");
                    }
                    if (PizzariaSabor67 == "")
                    {
                        $("#imagem67").css("display", "none");
                        $("#divIngredientes67").css("display", "none");
                        $("#divPreco67").css("display", "none");
                        
                    }
                    if (PizzariaSabor68 == "")
                    {
                        $("#imagem68").css("display", "none");
                        $("#divIngredientes68").css("display", "none");
                        $("#divPreco68").css("display", "none");
                        
                    }
                    if (PizzariaSabor69 == "")
                    {
                        $("#imagem69").css("display", "none");
                       $("#divIngredientes69").css("display", "none");
                        $("#divPreco69").css("display", "none");
                    }
                    if (PizzariaSabor70 == "")
                    {
                        $("#imagem70").css("display", "none");
                        $("#divIngredientes70").css("display", "none");
                        $("#divPreco70").css("display", "none");
                    }
                    if (PizzariaSabor71 == "")
                    {
                        $("#imagem71").css("display", "none");
                       $("#divIngredientes71").css("display", "none");
                        $("#divPreco71").css("display", "none");
                    }
                    if (PizzariaSabor72 == "")
                    {
                        $("#imagem72").css("display", "none");
                        $("#divIngredientes72").css("display", "none");
                        $("#divPreco72").css("display", "none");
                    }
                    if (PizzariaSabor73 == "")
                    {
                        $("#imagem73").css("display", "none");
                        $("#divIngredientes73").css("display", "none");
                        $("#divPreco73").css("display", "none");
                    }
                    if (PizzariaSabor74 == "")
                    {
                        $("#imagem74").css("display", "none");
                        $("#divIngredientes74").css("display", "none");
                        $("#divPreco74").css("display", "none");
                    }
                    if (PizzariaSabor75 == "")
                    {
                        $("#imagem75").css("display", "none");
                        $("#divIngredientes75").css("display", "none");
                        $("#divPreco75").css("display", "none");
                    }
                    if (PizzariaSabor76 == "")
                    {
                        $("#imagem76").css("display", "none");
                        $("#divIngredientes76").css("display", "none");
                        $("#divPreco91").css("display", "none");
                    }
                    if (PizzariaSabor77 == "")
                    {
                        $("#imagem77").css("display", "none");
                        $("#divIngredientes77").css("display", "none");
                        $("#divPreco77").css("display", "none");
                    }
                    if (PizzariaSabor78 == "")
                    {
                        $("#imagem78").css("display", "none");
                        $("#divIngredientes78").css("display", "none");
                        $("#divPreco78").css("display", "none");
                    }
                    if (PizzariaSabor79 == "")
                    {
                        $("#imagem79").css("display", "none");
                        $("#divIngredientes79").css("display", "none");
                        $("#divPreco79").css("display", "none");
                    }
                    if (PizzariaSabor80 == "")
                    {
                        $("#imagem80").css("display", "none");
                        $("#divIngredientes80").css("display", "none");
                        $("#divPreco80").css("display", "none");
                    }
                    if (PizzariaSabor81 == "")
                    {
                        $("#imagem81").css("display", "none");
                        $("#divIngredientes81").css("display", "none");
                        $("#divPreco81").css("display", "none");
                    }
                    if (PizzariaSabor82 == "")
                    {
                        $("#imagem82").css("display", "none");
                        $("#divIngredientes82").css("display", "none");
                        $("#divPreco82").css("display", "none");
                    }
                    if (PizzariaSabor83 == "")
                    {
                        $("#imagem83").css("display", "none");
                        $("#divIngredientes83").css("display", "none");
                        $("#divPreco83").css("display", "none");
                    }
                    if (PizzariaSabor84 == "")
                    {
                        $("#imagem84").css("display", "none");
                        $("#divIngredientes84").css("display", "none");
                        $("#divPreco84").css("display", "none");
                    }
                    if (PizzariaSabor85 == "")
                    {
                        $("#imagem85").css("display", "none");
                        $("#divIngredientes85").css("display", "none");
                        $("#divPreco85").css("display", "none");
                    }
                    
                    if (PizzariaSabor86 == "")
                    {
                        $("#imagem86").css("display", "none");
                        $("#divIngredientes86").css("display", "none");
                        $("#divPreco86").css("display", "none");
                    }
                    if (PizzariaSabor87 == "")
                    {
                        $("#imagem87").css("display", "none");
                        $("#divIngredientes87").css("display", "none");
                        $("#divPreco87").css("display", "none");
                    }
                    if (PizzariaSabor88 == "")
                    {
                        $("#imagem88").css("display", "none");
                        $("#divIngredientes88").css("display", "none");
                        $("#divPreco88").css("display", "none");
                    }
                    if (PizzariaSabor89 == "")
                    {
                        $("#imagem89").css("display", "none"); 
                        $("#divIngredientes89").css("display", "none");
                        $("#divPreco89").css("display", "none");
                    }
                    if (PizzariaSabor90 == "")
                    {
                        $("#imagem90").css("display", "none");
                        
                        $("#divIngredientes90").css("display", "none");
                        $("#divPreco90").css("display", "none");
                    }
                    if (PizzariaSabor91 == "")
                    {
                        $("#imagem91").css("display", "none");
                        
                        $("#divIngredientes91").css("display", "none");
                        $("#divPreco91").css("display", "none");
                    }
                    if (PizzariaSabor92 == "")
                    {
                        $("#imagem92").css("display", "none");
                        $("#divIngredientes92").css("display", "none");
                        $("#divPreco92").css("display", "none");
                    }
                    if (PizzariaSabor93 == "")
                    {
                        $("#imagem93").css("display", "none");
                        $("#divIngredientes93").css("display", "none");
                        $("#divPreco93").css("display", "none");
                    }
                    if (PizzariaSabor94 == "")
                    {
                        $("#imagem94").css("display", "none");
                    }
                    if (PizzariaSabor95 == "")
                    {
                        $("#imagem95").css("display", "none");
                    }
                    if (PizzariaSabor96 == "")
                    {
                        $("#imagem96").css("display", "none");
                    }
                    if (PizzariaSabor97 == "")
                    {
                        $("#imagem97").css("display", "none");
                    }
                    if (PizzariaSabor98 == "")
                    {
                        $("#imagem98").css("display", "none");
                    }
                    if (PizzariaSabor99 == "")
                    {
                        $("#imagem99").css("display", "none");
                    }
                    if (PizzariaSabor100 == "")
                    {
                        $("#imagem100").css("display", "none");
                    }
                    if (PizzariaSabor101 == "")
                    {
                        $("#imagem101").css("display", "none");
                    }
                    if (PizzariaSabor102 == "")
                    {
                        $("#imagem102").css("display", "none");
                    }
                    if (PizzariaSabor103 == "")
                    {
                        $("#imagem103").css("display", "none");
                    }
                    if (PizzariaSabor104 == "")
                    {
                        $("#imagem104").css("display", "none");
                    }
                    if (PizzariaSabor105 == "")
                    {
                        $("#imagem105").css("display", "none");
                    }
                    if (PizzariaSabor106 == "")
                    {
                        $("#imagem106").css("display", "none");
                    }
                    if (PizzariaSabor107 == "")
                    {
                        $("#imagem107").css("display", "none");
                    }
                    if (PizzariaSabor108 == "")
                    {
                        $("#imagem108").css("display", "none");
                    }
                    if (PizzariaSabor109 == "")
                    {
                        $("#imagem109").css("display", "none");
                    }
                    if (PizzariaSabor110 == "")
                    {
                        $("#imagem110").css("display", "none");
                    }
                    if (PizzariaSabor111 == "")
                    {
                        $("#imagem111").css("display", "none");
                    }
                    if (PizzariaSabor112 == "")
                    {
                        $("#imagem112").css("display", "none");
                    }
                    if (PizzariaSabor113 == "")
                    {
                        $("#imagem113").css("display", "none");
                    }
                    if (PizzariaSabor114 == "")
                    {
                        $("#imagem114").css("display", "none");
                    }
                    
                    
                    if (PizzariaSabor115 == "")
                    {
                        $("#imagem115").css("display", "none");
                    }
                });

            }

            $(document).ready(function () {


                carregarDados();
            });
        }, {"superagent": 2}], 2: [function (require, module, exports) {
            /**
             * Module dependencies.
             */

            var Emitter = require('emitter');
            var reduce = require('reduce');

            /**
             * Root reference for iframes.
             */

            var root = 'undefined' == typeof window
                    ? (this || self)
                    : window;

            /**
             * Noop.
             */

            function noop() {
            }
            ;

            /**
             * Check if `obj` is a host object,
             * we don't want to serialize these :)
             *
             * TODO: future proof, move to compoent land
             *
             * @param {Object} obj
             * @return {Boolean}
             * @api private
             */

            function isHost(obj) {
                var str = {}.toString.call(obj);

                switch (str) {
                    case '[object File]':
                    case '[object Blob]':
                    case '[object FormData]':
                        return true;
                    default:
                        return false;
                }
            }

            /**
             * Determine XHR.
             */

            request.getXHR = function () {
                if (root.XMLHttpRequest
                        && (!root.location || 'file:' != root.location.protocol
                                || !root.ActiveXObject)) {
                    return new XMLHttpRequest;
                } else {
                    try {
                        return new ActiveXObject('Microsoft.XMLHTTP');
                    } catch (e) {
                    }
                    try {
                        return new ActiveXObject('Msxml2.XMLHTTP.6.0');
                    } catch (e) {
                    }
                    try {
                        return new ActiveXObject('Msxml2.XMLHTTP.3.0');
                    } catch (e) {
                    }
                    try {
                        return new ActiveXObject('Msxml2.XMLHTTP');
                    } catch (e) {
                    }
                }
                return false;
            };

            /**
             * Removes leading and trailing whitespace, added to support IE.
             *
             * @param {String} s
             * @return {String}
             * @api private
             */

            var trim = ''.trim
                    ? function (s) {
                        return s.trim();
                    }
            : function (s) {
                return s.replace(/(^\s*|\s*$)/g, '');
            };

            /**
             * Check if `obj` is an object.
             *
             * @param {Object} obj
             * @return {Boolean}
             * @api private
             */

            function isObject(obj) {
                return obj === Object(obj);
            }

            /**
             * Serialize the given `obj`.
             *
             * @param {Object} obj
             * @return {String}
             * @api private
             */

            function serialize(obj) {
                if (!isObject(obj))
                    return obj;
                var pairs = [];
                for (var key in obj) {
                    if (null != obj[key]) {
                        pairs.push(encodeURIComponent(key)
                                + '=' + encodeURIComponent(obj[key]));
                    }
                }
                return pairs.join('&');
            }

            /**
             * Expose serialization method.
             */

            request.serializeObject = serialize;

            /**
             * Parse the given x-www-form-urlencoded `str`.
             *
             * @param {String} str
             * @return {Object}
             * @api private
             */

            function parseString(str) {
                var obj = {};
                var pairs = str.split('&');
                var parts;
                var pair;

                for (var i = 0, len = pairs.length; i < len; ++i) {
                    pair = pairs[i];
                    parts = pair.split('=');
                    obj[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
                }

                return obj;
            }

            /**
             * Expose parser.
             */

            request.parseString = parseString;

            /**
             * Default MIME type map.
             *
             *     superagent.types.xml = 'application/xml';
             *
             */

            request.types = {
                html: 'text/html',
                json: 'application/json',
                xml: 'application/xml',
                urlencoded: 'application/x-www-form-urlencoded',
                'form': 'application/x-www-form-urlencoded',
                'form-data': 'application/x-www-form-urlencoded'
            };

            /**
             * Default serialization map.
             *
             *     superagent.serialize['application/xml'] = function(obj){
             *       return 'generated xml here';
             *     };
             *
             */

            request.serialize = {
                'application/x-www-form-urlencoded': serialize,
                'application/json': JSON.stringify
            };

            /**
             * Default parsers.
             *
             *     superagent.parse['application/xml'] = function(str){
             *       return { object parsed from str };
             *     };
             *
             */

            request.parse = {
                'application/x-www-form-urlencoded': parseString,
                'application/json': JSON.parse
            };

            /**
             * Parse the given header `str` into
             * an object containing the mapped fields.
             *
             * @param {String} str
             * @return {Object}
             * @api private
             */

            function parseHeader(str) {
                var lines = str.split(/\r?\n/);
                var fields = {};
                var index;
                var line;
                var field;
                var val;

                lines.pop(); // trailing CRLF

                for (var i = 0, len = lines.length; i < len; ++i) {
                    line = lines[i];
                    index = line.indexOf(':');
                    field = line.slice(0, index).toLowerCase();
                    val = trim(line.slice(index + 1));
                    fields[field] = val;
                }

                return fields;
            }

            /**
             * Return the mime type for the given `str`.
             *
             * @param {String} str
             * @return {String}
             * @api private
             */

            function type(str) {
                return str.split(/ *; */).shift();
            }
            ;

            /**
             * Return header field parameters.
             *
             * @param {String} str
             * @return {Object}
             * @api private
             */

            function params(str) {
                return reduce(str.split(/ *; */), function (obj, str) {
                    var parts = str.split(/ *= */)
                            , key = parts.shift()
                            , val = parts.shift();

                    if (key && val)
                        obj[key] = val;
                    return obj;
                }, {});
            }
            ;

            /**
             * Initialize a new `Response` with the given `xhr`.
             *
             *  - set flags (.ok, .error, etc)
             *  - parse header
             *
             * Examples:
             *
             *  Aliasing `superagent` as `request` is nice:
             *
             *      request = superagent;
             *
             *  We can use the promise-like API, or pass callbacks:
             *
             *      request.get('/').end(function(res){});
             *      request.get('/', function(res){});
             *
             *  Sending data can be chained:
             *
             *      request
             *        .post('/user')
             *        .send({ name: 'tj' })
             *        .end(function(res){});
             *
             *  Or passed to `.send()`:
             *
             *      request
             *        .post('/user')
             *        .send({ name: 'tj' }, function(res){});
             *
             *  Or passed to `.post()`:
             *
             *      request
             *        .post('/user', { name: 'tj' })
             *        .end(function(res){});
             *
             * Or further reduced to a single call for simple cases:
             *
             *      request
             *        .post('/user', { name: 'tj' }, function(res){});
             *
             * @param {XMLHTTPRequest} xhr
             * @param {Object} options
             * @api private
             */

            function Response(req, options) {
                options = options || {};
                this.req = req;
                this.xhr = this.req.xhr;
                // responseText is accessible only if responseType is '' or 'text' and on older browsers
                this.text = ((this.req.method != 'HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text')) || typeof this.xhr.responseType === 'undefined')
                        ? this.xhr.responseText
                        : null;
                this.statusText = this.req.xhr.statusText;
                this.setStatusProperties(this.xhr.status);
                this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
                // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
                // getResponseHeader still works. so we get content-type even if getting
                // other headers fails.
                this.header['content-type'] = this.xhr.getResponseHeader('content-type');
                this.setHeaderProperties(this.header);
                this.body = this.req.method != 'HEAD'
                        ? this.parseBody(this.text ? this.text : this.xhr.response)
                        : null;
            }

            /**
             * Get case-insensitive `field` value.
             *
             * @param {String} field
             * @return {String}
             * @api public
             */

            Response.prototype.get = function (field) {
                return this.header[field.toLowerCase()];
            };

            /**
             * Set header related properties:
             *
             *   - `.type` the content type without params
             *
             * A response of "Content-Type: text/plain; charset=utf-8"
             * will provide you with a `.type` of "text/plain".
             *
             * @param {Object} header
             * @api private
             */

            Response.prototype.setHeaderProperties = function (header) {
                // content-type
                var ct = this.header['content-type'] || '';
                this.type = type(ct);

                // params
                var obj = params(ct);
                for (var key in obj)
                    this[key] = obj[key];
            };

            /**
             * Parse the given body `str`.
             *
             * Used for auto-parsing of bodies. Parsers
             * are defined on the `superagent.parse` object.
             *
             * @param {String} str
             * @return {Mixed}
             * @api private
             */

            Response.prototype.parseBody = function (str) {
                var parse = request.parse[this.type];
                return parse && str && (str.length || str instanceof Object)
                        ? parse(str)
                        : null;
            };

            /**
             * Set flags such as `.ok` based on `status`.
             *
             * For example a 2xx response will give you a `.ok` of __true__
             * whereas 5xx will be __false__ and `.error` will be __true__. The
             * `.clientError` and `.serverError` are also available to be more
             * specific, and `.statusType` is the class of error ranging from 1..5
             * sometimes useful for mapping respond colors etc.
             *
             * "sugar" properties are also defined for common cases. Currently providing:
             *
             *   - .noContent
             *   - .badRequest
             *   - .unauthorized
             *   - .notAcceptable
             *   - .notFound
             *
             * @param {Number} status
             * @api private
             */

            Response.prototype.setStatusProperties = function (status) {
                // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
                if (status === 1223) {
                    status = 204;
                }

                var type = status / 100 | 0;

                // status / class
                this.status = status;
                this.statusType = type;

                // basics
                this.info = 1 == type;
                this.ok = 2 == type;
                this.clientError = 4 == type;
                this.serverError = 5 == type;
                this.error = (4 == type || 5 == type)
                        ? this.toError()
                        : false;

                // sugar
                this.accepted = 202 == status;
                this.noContent = 204 == status;
                this.badRequest = 400 == status;
                this.unauthorized = 401 == status;
                this.notAcceptable = 406 == status;
                this.notFound = 404 == status;
                this.forbidden = 403 == status;
            };

            /**
             * Return an `Error` representative of this response.
             *
             * @return {Error}
             * @api public
             */

            Response.prototype.toError = function () {
                var req = this.req;
                var method = req.method;
                var url = req.url;

                var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
                var err = new Error(msg);
                err.status = this.status;
                err.method = method;
                err.url = url;

                return err;
            };

            /**
             * Expose `Response`.
             */

            request.Response = Response;

            /**
             * Initialize a new `Request` with the given `method` and `url`.
             *
             * @param {String} method
             * @param {String} url
             * @api public
             */

            function Request(method, url) {
                var self = this;
                Emitter.call(this);
                this._query = this._query || [];
                this.method = method;
                this.url = url;
                this.header = {};
                this._header = {};
                this.on('end', function () {
                    var err = null;
                    var res = null;

                    try {
                        res = new Response(self);
                    } catch (e) {
                        err = new Error('Parser is unable to parse the response');
                        err.parse = true;
                        err.original = e;
                        return self.callback(err);
                    }

                    self.emit('response', res);

                    if (err) {
                        return self.callback(err, res);
                    }

                    if (res.status >= 200 && res.status < 300) {
                        return self.callback(err, res);
                    }

                    var new_err = new Error(res.statusText || 'Unsuccessful HTTP response');
                    new_err.original = err;
                    new_err.response = res;
                    new_err.status = res.status;

                    self.callback(err || new_err, res);
                });
            }

            /**
             * Mixin `Emitter`.
             */

            Emitter(Request.prototype);

            /**
             * Allow for extension
             */

            Request.prototype.use = function (fn) {
                fn(this);
                return this;
            }

            /**
             * Set timeout to `ms`.
             *
             * @param {Number} ms
             * @return {Request} for chaining
             * @api public
             */

            Request.prototype.timeout = function (ms) {
                this._timeout = ms;
                return this;
            };

            /**
             * Clear previous timeout.
             *
             * @return {Request} for chaining
             * @api public
             */

            Request.prototype.clearTimeout = function () {
                this._timeout = 0;
                clearTimeout(this._timer);
                return this;
            };

            /**
             * Abort the request, and clear potential timeout.
             *
             * @return {Request}
             * @api public
             */

            Request.prototype.abort = function () {
                if (this.aborted)
                    return;
                this.aborted = true;
                this.xhr.abort();
                this.clearTimeout();
                this.emit('abort');
                return this;
            };

            /**
             * Set header `field` to `val`, or multiple fields with one object.
             *
             * Examples:
             *
             *      req.get('/')
             *        .set('Accept', 'application/json')
             *        .set('X-API-Key', 'foobar')
             *        .end(callback);
             *
             *      req.get('/')
             *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
             *        .end(callback);
             *
             * @param {String|Object} field
             * @param {String} val
             * @return {Request} for chaining
             * @api public
             */

            Request.prototype.set = function (field, val) {
                if (isObject(field)) {
                    for (var key in field) {
                        this.set(key, field[key]);
                    }
                    return this;
                }
                this._header[field.toLowerCase()] = val;
                this.header[field] = val;
                return this;
            };

            /**
             * Remove header `field`.
             *
             * Example:
             *
             *      req.get('/')
             *        .unset('User-Agent')
             *        .end(callback);
             *
             * @param {String} field
             * @return {Request} for chaining
             * @api public
             */

            Request.prototype.unset = function (field) {
                delete this._header[field.toLowerCase()];
                delete this.header[field];
                return this;
            };

            /**
             * Get case-insensitive header `field` value.
             *
             * @param {String} field
             * @return {String}
             * @api private
             */

            Request.prototype.getHeader = function (field) {
                return this._header[field.toLowerCase()];
            };

            /**
             * Set Content-Type to `type`, mapping values from `request.types`.
             *
             * Examples:
             *
             *      superagent.types.xml = 'application/xml';
             *
             *      request.post('/')
             *        .type('xml')
             *        .send(xmlstring)
             *        .end(callback);
             *
             *      request.post('/')
             *        .type('application/xml')
             *        .send(xmlstring)
             *        .end(callback);
             *
             * @param {String} type
             * @return {Request} for chaining
             * @api public
             */

            Request.prototype.type = function (type) {
                this.set('Content-Type', request.types[type] || type);
                return this;
            };

            /**
             * Set Accept to `type`, mapping values from `request.types`.
             *
             * Examples:
             *
             *      superagent.types.json = 'application/json';
             *
             *      request.get('/agent')
             *        .accept('json')
             *        .end(callback);
             *
             *      request.get('/agent')
             *        .accept('application/json')
             *        .end(callback);
             *
             * @param {String} accept
             * @return {Request} for chaining
             * @api public
             */

            Request.prototype.accept = function (type) {
                this.set('Accept', request.types[type] || type);
                return this;
            };

            /**
             * Set Authorization field value with `user` and `pass`.
             *
             * @param {String} user
             * @param {String} pass
             * @return {Request} for chaining
             * @api public
             */

            Request.prototype.auth = function (user, pass) {
                var str = btoa(user + ':' + pass);
                this.set('Authorization', 'Basic ' + str);
                return this;
            };

            /**
             * Add query-string `val`.
             *
             * Examples:
             *
             *   request.get('/shoes')
             *     .query('size=10')
             *     .query({ color: 'blue' })
             *
             * @param {Object|String} val
             * @return {Request} for chaining
             * @api public
             */

            Request.prototype.query = function (val) {
                if ('string' != typeof val)
                    val = serialize(val);
                if (val)
                    this._query.push(val);
                return this;
            };

            /**
             * Write the field `name` and `val` for "multipart/form-data"
             * request bodies.
             *
             * ``` js
             * request.post('/upload')
             *   .field('foo', 'bar')
             *   .end(callback);
             * ```
             *
             * @param {String} name
             * @param {String|Blob|File} val
             * @return {Request} for chaining
             * @api public
             */

            Request.prototype.field = function (name, val) {
                if (!this._formData)
                    this._formData = new root.FormData();
                this._formData.append(name, val);
                return this;
            };

            /**
             * Queue the given `file` as an attachment to the specified `field`,
             * with optional `filename`.
             *
             * ``` js
             * request.post('/upload')
             *   .attach(new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
             *   .end(callback);
             * ```
             *
             * @param {String} field
             * @param {Blob|File} file
             * @param {String} filename
             * @return {Request} for chaining
             * @api public
             */

            Request.prototype.attach = function (field, file, filename) {
                if (!this._formData)
                    this._formData = new root.FormData();
                this._formData.append(field, file, filename);
                return this;
            };

            /**
             * Send `data`, defaulting the `.type()` to "json" when
             * an object is given.
             *
             * Examples:
             *
             *       // querystring
             *       request.get('/search')
             *         .end(callback)
             *
             *       // multiple data "writes"
             *       request.get('/search')
             *         .send({ search: 'query' })
             *         .send({ range: '1..5' })
             *         .send({ order: 'desc' })
             *         .end(callback)
             *
             *       // manual json
             *       request.post('/user')
             *         .type('json')
             *         .send('{"name":"tj"})
             *         .end(callback)
             *
             *       // auto json
             *       request.post('/user')
             *         .send({ name: 'tj' })
             *         .end(callback)
             *
             *       // manual x-www-form-urlencoded
             *       request.post('/user')
             *         .type('form')
             *         .send('name=tj')
             *         .end(callback)
             *
             *       // auto x-www-form-urlencoded
             *       request.post('/user')
             *         .type('form')
             *         .send({ name: 'tj' })
             *         .end(callback)
             *
             *       // defaults to x-www-form-urlencoded
             *      request.post('/user')
             *        .send('name=tobi')
             *        .send('species=ferret')
             *        .end(callback)
             *
             * @param {String|Object} data
             * @return {Request} for chaining
             * @api public
             */

            Request.prototype.send = function (data) {
                var obj = isObject(data);
                var type = this.getHeader('Content-Type');

                // merge
                if (obj && isObject(this._data)) {
                    for (var key in data) {
                        this._data[key] = data[key];
                    }
                } else if ('string' == typeof data) {
                    if (!type)
                        this.type('form');
                    type = this.getHeader('Content-Type');
                    if ('application/x-www-form-urlencoded' == type) {
                        this._data = this._data
                                ? this._data + '&' + data
                                : data;
                    } else {
                        this._data = (this._data || '') + data;
                    }
                } else {
                    this._data = data;
                }

                if (!obj || isHost(data))
                    return this;
                if (!type)
                    this.type('json');
                return this;
            };

            /**
             * Invoke the callback with `err` and `res`
             * and handle arity check.
             *
             * @param {Error} err
             * @param {Response} res
             * @api private
             */

            Request.prototype.callback = function (err, res) {
                var fn = this._callback;
                this.clearTimeout();
                fn(err, res);
            };

            /**
             * Invoke callback with x-domain error.
             *
             * @api private
             */

            Request.prototype.crossDomainError = function () {
                var err = new Error('Origin is not allowed by Access-Control-Allow-Origin');
                err.crossDomain = true;
                this.callback(err);
            };

            /**
             * Invoke callback with timeout error.
             *
             * @api private
             */

            Request.prototype.timeoutError = function () {
                var timeout = this._timeout;
                var err = new Error('timeout of ' + timeout + 'ms exceeded');
                err.timeout = timeout;
                this.callback(err);
            };

            /**
             * Enable transmission of cookies with x-domain requests.
             *
             * Note that for this to work the origin must not be
             * using "Access-Control-Allow-Origin" with a wildcard,
             * and also must set "Access-Control-Allow-Credentials"
             * to "true".
             *
             * @api public
             */

            Request.prototype.withCredentials = function () {
                this._withCredentials = true;
                return this;
            };

            /**
             * Initiate request, invoking callback `fn(res)`
             * with an instanceof `Response`.
             *
             * @param {Function} fn
             * @return {Request} for chaining
             * @api public
             */

            Request.prototype.end = function (fn) {
                var self = this;
                var xhr = this.xhr = request.getXHR();
                var query = this._query.join('&');
                var timeout = this._timeout;
                var data = this._formData || this._data;

                // store callback
                this._callback = fn || noop;

                // state change
                xhr.onreadystatechange = function () {
                    if (4 != xhr.readyState)
                        return;

                    // In IE9, reads to any property (e.g. status) off of an aborted XHR will
                    // result in the error "Could not complete the operation due to error c00c023f"
                    var status;
                    try {
                        status = xhr.status
                    } catch (e) {
                        status = 0;
                    }

                    if (0 == status) {
                        if (self.timedout)
                            return self.timeoutError();
                        if (self.aborted)
                            return;
                        return self.crossDomainError();
                    }
                    self.emit('end');
                };

                // progress
                var handleProgress = function (e) {
                    if (e.total > 0) {
                        e.percent = e.loaded / e.total * 100;
                    }
                    self.emit('progress', e);
                };
                if (this.hasListeners('progress')) {
                    xhr.onprogress = handleProgress;
                }
                try {
                    if (xhr.upload && this.hasListeners('progress')) {
                        xhr.upload.onprogress = handleProgress;
                    }
                } catch (e) {
                    // Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
                    // Reported here:
                    // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
                }

                // timeout
                if (timeout && !this._timer) {
                    this._timer = setTimeout(function () {
                        self.timedout = true;
                        self.abort();
                    }, timeout);
                }

                // querystring
                if (query) {
                    query = request.serializeObject(query);
                    this.url += ~this.url.indexOf('?')
                            ? '&' + query
                            : '?' + query;
                }

                // initiate request
                xhr.open(this.method, this.url, true);

                // CORS
                if (this._withCredentials)
                    xhr.withCredentials = true;

                // body
                if ('GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !isHost(data)) {
                    // serialize stuff
                    var serialize = request.serialize[this.getHeader('Content-Type')];
                    if (serialize)
                        data = serialize(data);
                }

                // set header fields
                for (var field in this.header) {
                    if (null == this.header[field])
                        continue;
                    xhr.setRequestHeader(field, this.header[field]);
                }

                // send stuff
                this.emit('request', this);
                xhr.send(data);
                return this;
            };

            /**
             * Expose `Request`.
             */

            request.Request = Request;

            /**
             * Issue a request:
             *
             * Examples:
             *
             *    request('GET', '/users').end(callback)
             *    request('/users').end(callback)
             *    request('/users', callback)
             *
             * @param {String} method
             * @param {String|Function} url or callback
             * @return {Request}
             * @api public
             */

            function request(method, url) {
                // callback
                if ('function' == typeof url) {
                    return new Request('GET', method).end(url);
                }

                // url first
                if (1 == arguments.length) {
                    return new Request('GET', method);
                }

                return new Request(method, url);
            }

            /**
             * GET `url` with optional callback `fn(res)`.
             *
             * @param {String} url
             * @param {Mixed|Function} data or fn
             * @param {Function} fn
             * @return {Request}
             * @api public
             */

            request.get = function (url, data, fn) {
                var req = request('GET', url);
                if ('function' == typeof data)
                    fn = data, data = null;
                if (data)
                    req.query(data);
                if (fn)
                    req.end(fn);
                return req;
            };

            /**
             * HEAD `url` with optional callback `fn(res)`.
             *
             * @param {String} url
             * @param {Mixed|Function} data or fn
             * @param {Function} fn
             * @return {Request}
             * @api public
             */

            request.head = function (url, data, fn) {
                var req = request('HEAD', url);
                if ('function' == typeof data)
                    fn = data, data = null;
                if (data)
                    req.send(data);
                if (fn)
                    req.end(fn);
                return req;
            };

            /**
             * DELETE `url` with optional callback `fn(res)`.
             *
             * @param {String} url
             * @param {Function} fn
             * @return {Request}
             * @api public
             */

            request.del = function (url, fn) {
                var req = request('DELETE', url);
                if (fn)
                    req.end(fn);
                return req;
            };

            /**
             * PATCH `url` with optional `data` and callback `fn(res)`.
             *
             * @param {String} url
             * @param {Mixed} data
             * @param {Function} fn
             * @return {Request}
             * @api public
             */

            request.patch = function (url, data, fn) {
                var req = request('PATCH', url);
                if ('function' == typeof data)
                    fn = data, data = null;
                if (data)
                    req.send(data);
                if (fn)
                    req.end(fn);
                return req;
            };

            /**
             * POST `url` with optional `data` and callback `fn(res)`.
             *
             * @param {String} url
             * @param {Mixed} data
             * @param {Function} fn
             * @return {Request}
             * @api public
             */

            request.post = function (url, data, fn) {
                var req = request('POST', url);
                if ('function' == typeof data)
                    fn = data, data = null;
                if (data)
                    req.send(data);
                if (fn)
                    req.end(fn);
                return req;
            };

            /**
             * PUT `url` with optional `data` and callback `fn(res)`.
             *
             * @param {String} url
             * @param {Mixed|Function} data or fn
             * @param {Function} fn
             * @return {Request}
             * @api public
             */

            request.put = function (url, data, fn) {
                var req = request('PUT', url);
                if ('function' == typeof data)
                    fn = data, data = null;
                if (data)
                    req.send(data);
                if (fn)
                    req.end(fn);
                return req;
            };

            /**
             * Expose `request`.
             */

            module.exports = request;

        }, {"emitter": 3, "reduce": 4}], 3: [function (require, module, exports) {

            /**
             * Expose `Emitter`.
             */

            module.exports = Emitter;

            /**
             * Initialize a new `Emitter`.
             *
             * @api public
             */

            function Emitter(obj) {
                if (obj)
                    return mixin(obj);
            }
            ;

            /**
             * Mixin the emitter properties.
             *
             * @param {Object} obj
             * @return {Object}
             * @api private
             */

            function mixin(obj) {
                for (var key in Emitter.prototype) {
                    obj[key] = Emitter.prototype[key];
                }
                return obj;
            }

            /**
             * Listen on the given `event` with `fn`.
             *
             * @param {String} event
             * @param {Function} fn
             * @return {Emitter}
             * @api public
             */

            Emitter.prototype.on =
                    Emitter.prototype.addEventListener = function (event, fn) {
                        this._callbacks = this._callbacks || {};
                        (this._callbacks[event] = this._callbacks[event] || [])
                                .push(fn);
                        return this;
                    };

            /**
             * Adds an `event` listener that will be invoked a single
             * time then automatically removed.
             *
             * @param {String} event
             * @param {Function} fn
             * @return {Emitter}
             * @api public
             */

            Emitter.prototype.once = function (event, fn) {
                var self = this;
                this._callbacks = this._callbacks || {};

                function on() {
                    self.off(event, on);
                    fn.apply(this, arguments);
                }

                on.fn = fn;
                this.on(event, on);
                return this;
            };

            /**
             * Remove the given callback for `event` or all
             * registered callbacks.
             *
             * @param {String} event
             * @param {Function} fn
             * @return {Emitter}
             * @api public
             */

            Emitter.prototype.off =
                    Emitter.prototype.removeListener =
                    Emitter.prototype.removeAllListeners =
                    Emitter.prototype.removeEventListener = function (event, fn) {
                        this._callbacks = this._callbacks || {};

                        // all
                        if (0 == arguments.length) {
                            this._callbacks = {};
                            return this;
                        }

                        // specific event
                        var callbacks = this._callbacks[event];
                        if (!callbacks)
                            return this;

                        // remove all handlers
                        if (1 == arguments.length) {
                            delete this._callbacks[event];
                            return this;
                        }

                        // remove specific handler
                        var cb;
                        for (var i = 0; i < callbacks.length; i++) {
                            cb = callbacks[i];
                            if (cb === fn || cb.fn === fn) {
                                callbacks.splice(i, 1);
                                break;
                            }
                        }
                        return this;
                    };

            /**
             * Emit `event` with the given args.
             *
             * @param {String} event
             * @param {Mixed} ...
             * @return {Emitter}
             */

            Emitter.prototype.emit = function (event) {
                this._callbacks = this._callbacks || {};
                var args = [].slice.call(arguments, 1)
                        , callbacks = this._callbacks[event];

                if (callbacks) {
                    callbacks = callbacks.slice(0);
                    for (var i = 0, len = callbacks.length; i < len; ++i) {
                        callbacks[i].apply(this, args);
                    }
                }

                return this;
            };

            /**
             * Return array of callbacks for `event`.
             *
             * @param {String} event
             * @return {Array}
             * @api public
             */

            Emitter.prototype.listeners = function (event) {
                this._callbacks = this._callbacks || {};
                return this._callbacks[event] || [];
            };

            /**
             * Check if this emitter has `event` handlers.
             *
             * @param {String} event
             * @return {Boolean}
             * @api public
             */

            Emitter.prototype.hasListeners = function (event) {
                return !!this.listeners(event).length;
            };

        }, {}], 4: [function (require, module, exports) {

            /**
             * Reduce `arr` with `fn`.
             *
             * @param {Array} arr
             * @param {Function} fn
             * @param {Mixed} initial
             *
             * TODO: combatible error handling?
             */

            module.exports = function (arr, fn, initial) {
                var idx = 0;
                var len = arr.length;
                var curr = arguments.length == 3
                        ? initial
                        : arr[idx++];

                while (idx < len) {
                    curr = fn.call(null, curr, arr[idx], ++idx, arr);
                }

                return curr;
            };
        }, {}]}, {}, [1]);
