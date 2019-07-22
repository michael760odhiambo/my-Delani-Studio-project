$(document).ready(function(){
    $("#sec1").click(function(){
        $("#sec1").toggle();
        $("#sec2").toggle();
    })
})

(document).ready(function(){
    $("#sec2").click(function(){
        $("#sec1").toggle();
        $("#sec2").toggle();
    })
})