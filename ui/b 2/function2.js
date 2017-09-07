



$(document).ready(function() {
  $(".save_btn").click(function(){
   var place= $('#place').val()
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
   var myDate = new Date();

   if(date<=myDate.getFullYear())
   {

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

       },
        success :function(){
          window.location.href="./server.html";
        }
     });
   }
   else {
     alert ("wrong data");
     window.location.reload()}

  })
})
