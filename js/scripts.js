$(document).ready(function(){
  $("form#survey").submit(function(event){
    event.preventDefault();
    $("input:checkbox[name=toWork]:checked").each(function(){
      var toWork = $(this).val();
      $(".resultWork").show();
      $(".resultWork").append(toWork + "<br>");
    });
    $("input:checkbox[name=toFun]:checked").each(function(){
      var toFun = $(this).val();
      $(".resultFun").show();
      $(".resultFun").append(toFun + "<br>");
    });
    $("#survey").hide();
  });



});
