
$(document).ready(function(){
  $("#cadastrar").click(function(){
    var text = $("#disciplina").val();
    $("#aprender").append("<li class=\"list-group-item ng-binding ng-scope\">"
		+ text 
		+ "<span class=\"pull-right\">" 
		+ "<button id=\"addBtn\" type=\"button\" class=\"btn btn-xs btn-success\"><span class=\"glyphicon glyphicon-ok\"></span></button>"
        + "<button id=\"removeBtn\" type=\"button\" class=\"btn btn-xs btn-danger\"> <span class=\"glyphicon glyphicon-remove\"></span></button>"
        + "</span>"
        + "</li>");
  });
  $("#aprender").on("click", "#addBtn", function() {
    var parent = $(this).parent().parent();
    var text = parent.text();
    parent.remove();
    $("#aprendidos").append("<li class=\"list-group-item ng-binding ng-scope\">"
		+ text 
		+ "<span class=\"pull-right\">" 
        + "<button id=\"removeBtn\" type=\"button\" class=\"btn btn-xs btn-danger\"> <span class=\"glyphicon glyphicon-remove\"></span></button>"
        + "</span>"
        + "</li>");
      
  });
  $("#aprender").on("click", "#removeBtn", function() {
    $(this).parent().parent().remove();
  });
  $("#aprendidos").on("click", "#removeBtn", function() {
    $(this).parent().parent().remove();
  });
});
