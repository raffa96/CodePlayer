function updateOutput() {
  $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val() + "</body></html>");
  document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());
}

$(".toggleButton").hover(function() {
  $(this).addClass("highlightedButton");
}, function() {
  $(this).removeClass("highlightedButton");
});

$(".toggleButton").click(function() {
  $(this).toggleClass("active");
  $(this).removeClass("highlightedButton");

  var selectedPanel = $(this).attr("id") + "Panel";
  $("#" + selectedPanel).toggleClass("hidden");
  var activePanel = 4 - $('.hidden').length;
  $(".panel").width(($(window).width() / activePanel) - 5);
});

$(".panel").height($(window).height() - $("#header").height());
$(".panel").width(($(window).width() / 2) - 5);

updateOutput();

$("textarea").on('change keyup paste', function() {
  updateOutput();
});
