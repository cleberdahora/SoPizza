$(document).ready(function(){
$("#btnVerMais").click(function (event) {
       event.preventDefault();
        var div2 =$("#btnVerMais");
        var div = $("#fundo");
        var div3 =$("#btnVerMenos");
        div.animate({ marginTop:'40', height:'600'});
        
        div2.animate({fontSize:'10',width:'40',height:'20'});
        
        div3.animate({fontSize:'22',width:'120',height:'40'});
       
       
    });
    $("#btnVerMenos").click(function (event) {
       event.preventDefault();
        var div2 =$("#btnVerMais");
        var div = $("#fundo");
        var div3 =$("#btnVerMenos");
       
        div.animate({ marginTop:'300', height:'300'});
        
        div3.animate({fontSize:'10',width:'40',height:'20'});
        
        div2.animate({fontSize:'22',width:'120',height:'40'});
       
    });
     });