function UrlSearch()
{
   var name,value;
   var str=location.href;
   var num=str.indexOf("?")
   str=str.substr(num+1);
   var arr=str.split("&");
   for(var i=0;i < arr.length;i++){
      num=arr[i].indexOf("=");
      if(num>0){
       name=arr[i].substring(0,num);
       value=arr[i].substr(num+1);
       this[name]=value;
      }
   }
}

function render_table1() {
  var data=new UrlSearch();
  $("#table1").empty();
    var tr = $("<td>");
    $("#table1").append(tr);
    var place = $("<input id='place' value="+data.place+">"+"</input>"+"<br>");
    tr.append(place);
    var carbinet = $("<input id='carbinet' value="+data.carbinet+">"+"</input>"+"<br>");
    tr.append(carbinet);
    var slot = $("<input id='slot' value="+data.slot+">"+"</input>"+"<br>");
    tr.append(slot);
    var date = $("<input id='date' value="+data.date+">"+"</input>"+"<br>");
    tr.append(date);
    var serial = $("<input id='serial' value="+data.serial+">"+"</input>"+"<br>");
    tr.append(serial);
    var brandr = $("<input id='brandr' value="+data.brandr+">"+"</input>"+"<br>");
    tr.append(brandr);
    var model = $("<input id='model' value="+data.model+">"+"</input>"+"<br>");
    tr.append(model);
    var cpu = $("<input id='cpu' value="+data.cpu+">"+"</input>"+"<br>");
    tr.append(cpu);
    var mem = $("<input id='mem' value="+data.mem+">"+"</input>"+"<br>");
    tr.append(mem);
    var disk = $("<input id='disk' value="+data.disk+">"+"</input>"+"<br>");
    tr.append(disk);
    var ip = $("<input id='ip' value="+data.ip+">"+"</input>"+"<br>");
    tr.append(ip);
    var state = $("<input id='state' value="+data.state+">"+"</input>"+"<br>");
    tr.append(state);
    var login = $("<input  id='login' value="+data.login+">"+"</input>"+"<br>");
    tr.append(login);
    var server = $("<input id='service' value="+data.service+">"+"</input>"+"<br>");
    tr.append(server);
    var os = $("<input id='os' value="+data.os+">"+"</input>"+"<br>");
    tr.append(os);
    var btm=$("<button class='save1_btn'>"+"</button>"+"<br>");
    tr.append(btm);
}
$(document).ready(function() {
  render_table1();
    $(".save1_btn").click(function(){
     var data=new UrlSearch();
     var place= $('#place').val();
     var carbinet = $('#carbinet').val()
     var slot = $('#slot').val()
     var date = $('#date').val()
     var serial = $('#serial').val()
     var brandr = $('#brandr').val()
     var model = $('#model').val()
     var cpu = $('#cpu').val()
     var mem = $('#mem').val()
     var disk = $('#disk').val()
     var ip = $('#ip').val()
     var state = $('#state').val()
     var login = $('#login').val()
     var service = $('#service').val()
     var os = $('#os').val()
     var id=data.id
   $.ajax({
     url:"http://47.93.14.169:8080/A/save" ,
     method:"POST",
     data: {
       place: place,
       carbinet:carbinet,
       slot:slot,
       date:date,
       serial:serial,
       brandr:brandr,
       model:model,
       cpu:cpu,
       mem:mem,
       disk:disk,
       ip:ip,
       state:state,
       login:login,
       service:service,
       os:os,
       id:id,
     },
      success :function(){
        window.location.href="./server.html";
      }
   })
 })
 })
