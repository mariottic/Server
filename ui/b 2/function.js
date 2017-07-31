function render_table(e) {
  $("#table").empty();
  for (var i = 0; i < e.length; i++) {
    var server = e[i];
    var tr = $("<tr>");
    $("#table").append(tr);
    var td = $("<td>"+server.place+"</td>");
    tr.append(td);
    var td1 = $("<td>"+server.carbinet+"</td>");
    tr.append(td1);
    var td2 = $("<td>"+server.slot+"</td>");
    tr.append(td2);
    var date = $("<td>"+server.date+"</td>");
    tr.append(date);
    var serial = $("<td>"+server.serial+"</td>");
    tr.append(serial);
    var brandr = $("<td>"+server.brandr+"</td>");
    tr.append(brandr);
    var model = $("<td>"+server.model+"</td>");
    tr.append(model);
    var cpu = $("<td>"+server.cpu+"</td>");
    tr.append(cpu);
    var mem = $("<td>"+server.mem+"</td>");
    tr.append(mem);
    var disk = $("<td>"+server.disk+"</td>");
    tr.append(disk);
    var ip  = $("<td>"+server.ip+"</td>");
    tr.append(ip);
    var state  = $("<td>"+server.state+"</td>");
    tr.append(state);
    var login = $("<td>"+server.login+"</td>");
    tr.append(login);
    var service = $("<td>"+server.service+"</td>");
    tr.append(service);
    var os = $("<td>"+server.os+"</td>");
    tr.append(os);
    var id = $("<td class='id'>"+server.id+"</td>");
    tr.append(id);
    var del= $("<td>"+"<button class='btn_delete'>"+"删除"+"</button>"+"</td>");
    tr.append(del);
  }


  $("btn_delete").click(function(){
    var id =$(this)[0].parentNode.parentNode.querySelector(".id").innerHTML
    $.ajax({
      url:"http://localhost:8080/"+id,
      async:false,
      method:"DELETE",
      success : function(e){
        window.location.reload();
      }
    })
  })
}

$('#search_btn').click(function(){
   var text = $('#search_input').val()

   $.ajax({
      url:"http://localhost:8080/",
      async:false,
      success : function(e){
        console.log(e);
        var e = e.filter(function(server){
          if(server == null || server.place == null) return false;
          return server.place.indexOf(text) >= 0
        })
        render_table(e);
      }
   })
})




$( document ).ready(function() {
  $.ajax(
    {
      url:"http://localhost:8080/",
      async:false,
      success : function(e){
        console.log(e);
        e.sort(function(a,b){return a.id - b.id});
        render_table(e);
      }
    }
  )
})
