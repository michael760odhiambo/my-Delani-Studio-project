
 
$(document).ready(function(){
    $("#icons1").click(function(){
        $("#icons1").hide();
        $("#hiden1").show();
    });
});
$(document).ready(function(){
    $("#hiden1").click(function(){
        $("#icons1").show();
        $("#hiden1").hide();
    });
});

$(document).ready(function(){
    $("#icons2").click(function(){
        $("#icons2").hide();
        $("#hiden2").show();
    });
});
$(document).ready(function(){
    $("#hiden2").click(function(){
        $("#icons2").show();
        $("#hiden2").hide();
    });
});

$(document).ready(function(){
    $("#icons3").click(function(){
        $("#icons3").hide();
        $("#hiden3").show();
    });
});
$(document).ready(function(){
    $("#hiden3").click(function(){
        $("#icons3").show();
        $("#hiden3").hide();
    });
});

$(document).ready(function(){
    $("form#form").submit(function(event){
        var name = $("input#name").val();
        var email = $("input#email").val();
        var text = $("input#text").val();

        if($("input#name").val() /*&& $("input#email").val() && $("input#text").val()*/ !=""){
            alert(name +". "+ "We have received your message." + "Thank you for reaching out to us.")
        }else {
            alert("your data is invalid")
        }
        event.preventDefault();
    });
});

$(document).ready(function(){
    $("#col1").hover(function(){
        $(.colo).show();
    })
})