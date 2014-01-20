/* RUN THIS WHEN THE DOCUMENT LOADS */
var time=1;
$(function() {
    setTimeout(addTimeItem, 10000)
    
});

function addTimeItem(){
    time++;
    var i = '<div class="timeitem" id="ti'+time+'"><div class="cheerBar">'
    
    var r = Math.floor((Math.random()*8)+1)
    for (var a=0; a<=r; a++) {
        i=i+'<div class="onecheer"></div>'
    }
    i=i+'</div><div class="timeBar">'+time+':00</div></div>'
    $('.timecontainer').append(i);

    
    $('.timecontainer').width($('.timecontainer').width()+50)

    if ($('.timecontainer').width() > $('.timeline').width()) {
        $( ".timecontainer" ).animate({'marginLeft' : "-=50px"});
    }
    setTimeout(addTimeItem, 10000)

}

