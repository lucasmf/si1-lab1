$(document).ready(function(){
  $("#cadastrar").click(function(){
    var text = $("#disciplina").val();
    $("#aprender").append("<li>"+text+"<button id=\"aprenda\">Aprender</button</li>");
  });
  $("#aprender").on("click", "#aprenda", function() {
    var parent = $(this).parent();
    var text = parent.text();
    parent.remove();
    $("#aprendidos").append("<li>"+text+"<button id=\"remove\">Remover</button</li>");
  });
  $("#aprendidos").on("click", "#remove", function() {
    $(this).parent().remove();
  });


});