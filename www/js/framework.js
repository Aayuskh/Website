var selected="home";
function gotoMap(obj){
    
    $("#"+selected+"Tab img").attr("src","img/"+selected+".png");
    $(obj).find("img").attr("src","img/map_w.png");
    
    selected="map";
}
function gotoHome(obj){
    go("./index.html");
    $("#"+selected+"Tab img").attr("src","img/"+selected+".png");
    $(obj).find("img").attr("src","img/home_w.png");
    
    selected="home";
}
function gotoTicket(obj){
go("./ticket.html");
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
function register(){
    var ref = window.open("https://www.portauthority.org/paac/CreateAccount/tabid/212/Default.aspx?returnurl=http%3a%2f%2fwww.portauthority.org%2fpaac%2fFaresPasses%2fFares.aspx", '_system', 'location=false');
}
function buy(){

}
function takepic(){
    alert("Please take a picture of yourself. Picture cannot be changed after taken.");
    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,destinationType: Camera.DestinationType.FILE_URI,correctOrientation:true });

}
function onSuccess(imageURI) {

    window.localStorage.setItem("studentPass", "true");
    window.localStorage.setItem("studentPass.img", imageURI);
    $('#studentRegistry').popup("close");
}

function onFail(message) {
    alert('Failed because: ' + message);
}

