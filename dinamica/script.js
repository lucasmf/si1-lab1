$(document).ready(function(){
  $("#cadastrar").click(function(){
    var text = $("#disciplina").val();
    $("#aprender").append("<li class=\"list-group-item\">"
      +text
      +"<button id =\"addBtn\" type=\"button\" class=\"btn btn-default btn-lg btn-xs btn-success\"><span class=\"glyphicon glyphicon-ok\"></span></button>"
      +"<button id =\"removeBtn\" type=\"button\" class=\"btn btn-default btn-lg btn-xs btn-danger\"><span class=\"glyphicon glyphicon-remove\"></span></button>");
  });
  $("#aprender").on("click", "#addBtn", function() {
    var parent = $(this).parent();
    var text = parent.text();
    parent.remove();
    $("#aprendidos").append("<li class=\"list-group-item\">"
      +text
      +"<button id =\"removeBtn\" type=\"button\" class=\"btn btn-default btn-lg btn-xs btn-danger\"><span class=\"glyphicon glyphicon-remove\"></span></button>");
  });
  $("#aprender").on("click", "#removeBtn", function() {
    $(this).parent().remove();
  });
  $("#aprendidos").on("click", "#removeBtn", function() {
    $(this).parent().remove();
  });
});
