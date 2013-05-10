var selected="home";
function gotoMap(obj){
    
    $("#"+selected+"Tab img").attr("src","img/"+selected+".png");
    $(obj).find("img").attr("src","img/map_w.png");
    
    selected="map";
}
function gotoHome(obj){
    
    $("#"+selected+"Tab img").attr("src","img/"+selected+".png");
    $(obj).find("img").attr("src","img/home_w.png");
    
    selected="home";
}
function gotoTicket(obj){
go("./setting.html");
    $("#"+selected+"Tab img").attr("src","img/"+selected+".png");
    $(obj).find("img").attr("src","img/ticket_w.png");
    
    selected="ticket";
    
}
function gotoSetting(obj){
    $("#"+selected+"Tab img").attr("src","img/"+selected+".png");
    $(obj).find("img").attr("src","img/setting_w.png");
    
    selected="setting";
}
function go(url){
    //$("#mainContainer").load(url);
    
    $.mobile.changePage(url);
}