$( document ).ready(function() {

var liHigh = {'background-color':'white', 'color':'black'};

var liNot  = {'border':'none', 'background-color':'transparent', 'color':'white'};

$("#redDiv").hide();

$("#greenDiv").hide();

$("#purpleDiv").hide();

$("#tealDiv").hide();

$("#steelblueDiv").hide();

$("#saddlebrownDiv").hide();

$("#darkorangeDiv").hide();

$("#firebrickDiv").hide();

$("#lightcoralDiv").hide();

var hideoptions = { "direction" : "left", "mode" : "hide"};
var hide2options = { "direction" : "right", "mode" : "hide"};

var showoptions = {"direction" : "right","mode" : "show"};
var show2options = {"direction" : "left","mode" : "show"};

if($('#blueDiv').is(':visible'))
{  
    $("li").css(liNot); 
    $("li").eq(1).css(liHigh);       
}
// $("#blueDiv").on('click', function(){
// $( "#blueDiv" ).effect( "slide", hideoptions, 1000); //notice, no callback
// $( "#redDiv" ).effect( "slide", showoptions, 1000);
// });

// $("#redDiv").on('click', function(){
// $( "#redDiv" ).effect( "slide", hideoptions, 1000); //notice, no callback
// $( "#greenDiv" ).effect( "slide", showoptions, 1000);
// });

// Navigational Links //

// Career Objective //

$("li").eq(1).on('click', function(){

if ($('#blueDiv').is(':visible')){

//Do Nothing

}

else if ($('#redDiv').is(':visible')){

        $( "#redDiv" ).effect( "slide", hide2options, 1000);
        $( "#blueDiv" ).effect( "slide", show2options, 1000);

if($('#blueDiv').is(':visible')) {
            
        $("li").css(liNot);
        $("li").eq(1).css(liHigh);
}
}

else if ($('#greenDiv').is(':visible')){

        $( "#greenDiv" ).effect( "slide", hide2options, 100);
        $( "#redDiv" ).effect( "slide", show2options, 100, function(){
        $( "#redDiv" ).effect( "slide", hide2options, 100);
        $( "#blueDiv" ).effect( "slide", show2options, 100);

if($('#blueDiv').is(':visible')) {
            
        $("li").css(liNot);
        $("li").eq(1).css(liHigh);
}
});
}

else if ($('#purpleDiv').is(':visible')){

        $( "#purpleDiv" ).effect( "slide", hide2options, 100);
        $( "#greenDiv" ).effect( "slide", show2options, 100, function(){
        $( "#greenDiv" ).effect( "slide", hide2options, 100);
        $( "#redDiv" ).effect( "slide", show2options, 100, function(){
        $( "#redDiv" ).effect( "slide", hide2options, 100);
        $( "#blueDiv" ).effect( "slide", show2options, 100);

if($('#blueDiv').is(':visible')) {
            
        $("li").css(liNot);
        $("li").eq(1).css(liHigh);
}
});
});
}

else if ($('#tealDiv').is(':visible')){

        $( "#tealDiv" ).effect( "slide", hide2options, 100);
        $( "#purpleDiv" ).effect( "slide", show2options, 100, function(){
        $( "#purpleDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(2).css(liHigh);
        $( "#greenDiv" ).effect( "slide", show2options, 100, function(){
        $( "#greenDiv" ).effect( "slide", hide2options, 100);
        $( "#redDiv" ).effect( "slide", show2options, 100, function(){
        $( "#redDiv" ).effect( "slide", hide2options, 100);
        $( "#blueDiv" ).effect( "slide", show2options, 100);

if($('#blueDiv').is(':visible')) {
            
        $("li").css(liNot);
        $("li").eq(1).css(liHigh);
}
});
});
});
}

else if ($('#steelblueDiv').is(':visible')){

        $( "#steelblueDiv" ).effect( "slide", hide2options, 100);
        $( "#tealDiv" ).effect( "slide", show2options, 100, function(){
        $( "#tealDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(3).css(liHigh);
        $( "#purpleDiv" ).effect( "slide", show2options, 100, function(){
        $( "#purpleDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(2).css(liHigh);
        $( "#greenDiv" ).effect( "slide", show2options, 100, function(){
        $( "#greenDiv" ).effect( "slide", hide2options, 100);
        $( "#redDiv" ).effect( "slide", show2options, 100, function(){
        $( "#redDiv" ).effect( "slide", hide2options, 100);
        $( "#blueDiv" ).effect( "slide", show2options, 100);

if($('#blueDiv').is(':visible')) {
            
        $("li").css(liNot);
        $("li").eq(1).css(liHigh);
}
});
});
});
});
}

else if ($('#saddlebrownDiv').is(':visible')){

        $( "#saddlebrownDiv" ).effect( "slide", hide2options, 100);
        $( "#steelblueDiv" ).effect( "slide", show2options, 100, function(){
        $( "#steelblueDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(4).css(liHigh);
        $( "#tealDiv" ).effect( "slide", show2options, 100, function(){
        $( "#tealDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(3).css(liHigh);
        $( "#purpleDiv" ).effect( "slide", show2options, 100, function(){
        $( "#purpleDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(2).css(liHigh);
        $( "#greenDiv" ).effect( "slide", show2options, 100, function(){
        $( "#greenDiv" ).effect( "slide", hide2options, 100);
        $( "#redDiv" ).effect( "slide", show2options, 100, function(){
        $( "#redDiv" ).effect( "slide", hide2options, 100);
        $( "#blueDiv" ).effect( "slide", show2options, 100);

if($('#blueDiv').is(':visible')) {
            
        $("li").css(liNot);
        $("li").eq(1).css(liHigh);
}
});
});
});
});
});
}

else if ($('#darkorangeDiv').is(':visible')){

        $( "#darkorangeDiv" ).effect( "slide", hide2options, 100);
        $( "#saddlebrownDiv" ).effect( "slide", show2options, 100, function(){
        $( "#saddlebrownDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(5).css(liHigh);
        $( "#steelblueDiv" ).effect( "slide", show2options, 100, function(){
        $( "#steelblueDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(4).css(liHigh);
        $( "#tealDiv" ).effect( "slide", show2options, 100, function(){
        $( "#tealDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(3).css(liHigh);
        $( "#purpleDiv" ).effect( "slide", show2options, 100, function(){
        $( "#purpleDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(2).css(liHigh);
        $( "#greenDiv" ).effect( "slide", show2options, 100, function(){
        $( "#greenDiv" ).effect( "slide", hide2options, 100);
        $( "#redDiv" ).effect( "slide", show2options, 100, function(){
        $( "#redDiv" ).effect( "slide", hide2options, 100);
        $( "#blueDiv" ).effect( "slide", show2options, 100);

if($('#blueDiv').is(':visible')) {
            
        $("li").css(liNot);
        $("li").eq(1).css(liHigh);
}
});
});
});
});
});
});
}

else if ($('#firebrickDiv').is(':visible')){

        $( "#firebrickDiv" ).effect( "slide", hide2options, 100);
        $( "#darkorangeDiv" ).effect( "slide", show2options, 100, function(){
        $( "#darkorangeDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(6).css(liHigh);
        $( "#saddlebrownDiv" ).effect( "slide", show2options, 100, function(){
        $( "#saddlebrownDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(5).css(liHigh);
        $( "#steelblueDiv" ).effect( "slide", show2options, 100, function(){
        $( "#steelblueDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(4).css(liHigh);
        $( "#tealDiv" ).effect( "slide", show2options, 100, function(){
        $( "#tealDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(3).css(liHigh);
        $( "#purpleDiv" ).effect( "slide", show2options, 100, function(){
        $( "#purpleDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(2).css(liHigh);
        $( "#greenDiv" ).effect( "slide", show2options, 100, function(){
        $( "#greenDiv" ).effect( "slide", hide2options, 100);
        $( "#redDiv" ).effect( "slide", show2options, 100, function(){
        $( "#redDiv" ).effect( "slide", hide2options, 100);
        $( "#blueDiv" ).effect( "slide", show2options, 100);

if($('#blueDiv').is(':visible')) {
            
        $("li").css(liNot);
        $("li").eq(1).css(liHigh);
}
});
});
});
});
});
});
});
}

else if ($('#lightcoralDiv').is(':visible')){

        $( "#lightcoralDiv" ).effect( "slide", hide2options, 100);
        $( "#firebrickDiv" ).effect( "slide", show2options, 100, function(){
        $( "#firebrickDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(7).css(liHigh);
        $( "#darkorangeDiv" ).effect( "slide", show2options, 100, function(){
        $( "#darkorangeDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(6).css(liHigh);
        $( "#saddlebrownDiv" ).effect( "slide", show2options, 100, function(){
        $( "#saddlebrownDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(5).css(liHigh);
        $( "#steelblueDiv" ).effect( "slide", show2options, 100, function(){
        $( "#steelblueDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(4).css(liHigh);
        $( "#tealDiv" ).effect( "slide", show2options, 100, function(){
        $( "#tealDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(3).css(liHigh);
        $( "#purpleDiv" ).effect( "slide", show2options, 100, function(){
        $( "#purpleDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(2).css(liHigh);
        $( "#greenDiv" ).effect( "slide", show2options, 100, function(){
        $( "#greenDiv" ).effect( "slide", hide2options, 100);
        $( "#redDiv" ).effect( "slide", show2options, 100, function(){
        $( "#redDiv" ).effect( "slide", hide2options, 100);
        $( "#blueDiv" ).effect( "slide", show2options, 100);

if($('#blueDiv').is(':visible')) {
            
        $("li").css(liNot);
        $("li").eq(1).css(liHigh);
}
});
});
});
});
});
});
});
}); 
}

});

// End of Career Objective //

// Education //

$("li").eq(2).on('click', function(){

if ($('#blueDiv').is(':visible')){

        $( "#blueDiv" ).effect( "slide", hideoptions, 1000);
        $( "#redDiv" ).effect( "slide", showoptions, 1000);
        $("li").css(liNot);
        $("li").eq(2).css(liHigh);

}

else if ($('#redDiv').is(':visible')){

// Do Nothing

}

else if ($('#greenDiv').is(':visible')){


// Do Nothing

}

else if ($('#purpleDiv').is(':visible')){


// Do Nothing

}

else if ($('#tealDiv').is(':visible')){

        $( "#tealDiv" ).effect( "slide", hide2options, 100);
        $( "#purpleDiv" ).effect( "slide", show2options, 100, function(){
        $( "#purpleDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(2).css(liHigh);
        $( "#greenDiv" ).effect( "slide", show2options, 100, function(){
        $( "#greenDiv" ).effect( "slide", hide2options, 100);
        $( "#redDiv" ).effect( "slide", show2options, 100);

if($('#redDiv').is(':visible')) {
            
        $("li").css(liNot);
        $("li").eq(2).css(liHigh);
}
});
});
}

else if ($('#steelblueDiv').is(':visible')){

        $( "#steelblueDiv" ).effect( "slide", hide2options, 100);
        $( "#tealDiv" ).effect( "slide", show2options, 100, function(){
        $( "#tealDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(3).css(liHigh);
        $( "#purpleDiv" ).effect( "slide", show2options, 100, function(){
        $( "#purpleDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(2).css(liHigh);
        $( "#greenDiv" ).effect( "slide", show2options, 100, function(){
        $( "#greenDiv" ).effect( "slide", hide2options, 100);
        $( "#redDiv" ).effect( "slide", show2options, 100);

if($('#redDiv').is(':visible')) {
            
        $("li").css(liNot);
        $("li").eq(2).css(liHigh);
}
});
});
});

}

else if ($('#saddlebrownDiv').is(':visible')){

        $( "#saddlebrownDiv" ).effect( "slide", hide2options, 100);
        $( "#steelblueDiv" ).effect( "slide", show2options, 100, function(){
        $( "#steelblueDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(4).css(liHigh);
        $( "#tealDiv" ).effect( "slide", show2options, 100, function(){
        $( "#tealDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(3).css(liHigh);
        $( "#purpleDiv" ).effect( "slide", show2options, 100, function(){
        $( "#purpleDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(2).css(liHigh);
        $( "#greenDiv" ).effect( "slide", show2options, 100, function(){
        $( "#greenDiv" ).effect( "slide", hide2options, 100);
        $( "#redDiv" ).effect( "slide", show2options, 100);

if($('#redDiv').is(':visible')) {
            
        $("li").css(liNot);
        $("li").eq(2).css(liHigh);
}
});
});
});
});
}

else if ($('#darkorangeDiv').is(':visible')){

        $( "#darkorangeDiv" ).effect( "slide", hide2options, 100);
        $( "#saddlebrownDiv" ).effect( "slide", show2options, 100, function(){
        $( "#saddlebrownDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(5).css(liHigh);
        $( "#steelblueDiv" ).effect( "slide", show2options, 100, function(){
        $( "#steelblueDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(4).css(liHigh);
        $( "#tealDiv" ).effect( "slide", show2options, 100, function(){
        $( "#tealDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(3).css(liHigh);
        $( "#purpleDiv" ).effect( "slide", show2options, 100, function(){
        $( "#purpleDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(2).css(liHigh);
        $( "#greenDiv" ).effect( "slide", show2options, 100, function(){
        $( "#greenDiv" ).effect( "slide", hide2options, 100);
        $( "#redDiv" ).effect( "slide", show2options, 100);

if($('#redDiv').is(':visible')) {
            
        $("li").css(liNot);
        $("li").eq(2).css(liHigh);
}
});
});
});
});
});
}

else if ($('#firebrickDiv').is(':visible')){

        $( "#firebrickDiv" ).effect( "slide", hide2options, 100);
        $( "#darkorangeDiv" ).effect( "slide", show2options, 100, function(){
        $( "#darkorangeDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(6).css(liHigh);
        $( "#saddlebrownDiv" ).effect( "slide", show2options, 100, function(){
        $( "#saddlebrownDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(5).css(liHigh);
        $( "#steelblueDiv" ).effect( "slide", show2options, 100, function(){
        $( "#steelblueDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(4).css(liHigh);
        $( "#tealDiv" ).effect( "slide", show2options, 100, function(){
        $( "#tealDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(3).css(liHigh);
        $( "#purpleDiv" ).effect( "slide", show2options, 100, function(){
        $( "#purpleDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(2).css(liHigh);
        $( "#greenDiv" ).effect( "slide", show2options, 100, function(){
        $( "#greenDiv" ).effect( "slide", hide2options, 100);
        $( "#redDiv" ).effect( "slide", show2options, 100);

if($('#redDiv').is(':visible')) {
            
        $("li").css(liNot);
        $("li").eq(2).css(liHigh);
}
});
});
});
});
});
});
}

else if ($('#lightcoralDiv').is(':visible')){

        $( "#lightcoralDiv" ).effect( "slide", hide2options, 100);
        $( "#firebrickDiv" ).effect( "slide", show2options, 100, function(){
        $( "#firebrickDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(7).css(liHigh);
        $( "#darkorangeDiv" ).effect( "slide", show2options, 100, function(){
        $( "#darkorangeDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(6).css(liHigh);
        $( "#saddlebrownDiv" ).effect( "slide", show2options, 100, function(){
        $( "#saddlebrownDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(5).css(liHigh);
        $( "#steelblueDiv" ).effect( "slide", show2options, 100, function(){
        $( "#steelblueDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(4).css(liHigh);
        $( "#tealDiv" ).effect( "slide", show2options, 100, function(){
        $( "#tealDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(3).css(liHigh);
        $( "#purpleDiv" ).effect( "slide", show2options, 100, function(){
        $( "#purpleDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(2).css(liHigh);
        $( "#greenDiv" ).effect( "slide", show2options, 100, function(){
        $( "#greenDiv" ).effect( "slide", hide2options, 100);
        $( "#redDiv" ).effect( "slide", show2options, 100);

if($('#redDiv').is(':visible')) {
            
        $("li").css(liNot);
        $("li").eq(2).css(liHigh);
}
});
});
});
});
});
});
});
}

});

// End of Education //

// IT Skills //

$("li").eq(3).on('click', function(){

if ($('#blueDiv').is(':visible')){

        $( "#blueDiv" ).effect( "slide", hideoptions, 100);
        $( "#redDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#redDiv" ).effect( "slide", hideoptions, 100);
        $("li").css(liNot);
        $("li").eq(2).css(liHigh);
        $( "#greenDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#greenDiv" ).effect( "slide", hideoptions, 100);
        $( "#purpleDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#purpleDiv" ).effect( "slide", hideoptions, 100);
        $( "#tealDiv" ).effect( "slide", showoptions, 100);

        if($('#tealDiv').is(':visible')) {
                    
                $("li").css(liNot);
                $("li").eq(3).css(liHigh);
        }

});
});
});
}

else if ($('#redDiv').is(':visible')){

        $( "#redDiv" ).effect( "slide", hideoptions, 100);
        $( "#greenDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#greenDiv" ).effect( "slide", hideoptions, 100);
        $( "#purpleDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#purpleDiv" ).effect( "slide", hideoptions, 100);
        $( "#tealDiv" ).effect( "slide", showoptions, 100);

        if($('#tealDiv').is(':visible')) {
                    
                $("li").css(liNot);
                $("li").eq(3).css(liHigh);
        }

});
});

}

else if ($('#greenDiv').is(':visible')){

        $( "#greenDiv" ).effect( "slide", hideoptions, 100);
        $( "#purpleDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#purpleDiv" ).effect( "slide", hideoptions, 100);
        $( "#tealDiv" ).effect( "slide", showoptions, 100);

        if($('#tealDiv').is(':visible')) {
                    
                $("li").css(liNot);
                $("li").eq(3).css(liHigh);
        }

});

}

else if ($('#purpleDiv').is(':visible')){

        $( "#purpleDiv" ).effect( "slide", hideoptions, 1000);
        $( "#tealDiv" ).effect( "slide", showoptions, 1000);

        if($('#tealDiv').is(':visible')) {
                    
                $("li").css(liNot);
                $("li").eq(3).css(liHigh);
        }

}

else if ($('#tealDiv').is(':visible')){

// Do Nothing

}

else if ($('#steelblueDiv').is(':visible')){

        $( "#steelblueDiv" ).effect( "slide", hide2options, 1000);
        $( "#tealDiv" ).effect( "slide", show2options, 1000);

if($('#tealDiv').is(':visible')) {
            
        $("li").css(liNot);
        $("li").eq(3).css(liHigh);
}

}

else if ($('#saddlebrownDiv').is(':visible')){

        $( "#saddlebrownDiv" ).effect( "slide", hide2options, 100);
        $( "#steelblueDiv" ).effect( "slide", show2options, 100, function(){
        $( "#steelblueDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(4).css(liHigh);
        $( "#tealDiv" ).effect( "slide", show2options, 100);

if($('#tealDiv').is(':visible')) {
            
        $("li").css(liNot);
        $("li").eq(3).css(liHigh);
}
});
}

else if ($('#darkorangeDiv').is(':visible')){

        $( "#darkorangeDiv" ).effect( "slide", hide2options, 100);
        $( "#saddlebrownDiv" ).effect( "slide", show2options, 100, function(){
        $( "#saddlebrownDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(5).css(liHigh);
        $( "#steelblueDiv" ).effect( "slide", show2options, 100, function(){
        $( "#steelblueDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(4).css(liHigh);
        $( "#tealDiv" ).effect( "slide", show2options, 100);

if($('#tealDiv').is(':visible')) {
            
        $("li").css(liNot);
        $("li").eq(3).css(liHigh);
}
});
});
}

else if ($('#firebrickDiv').is(':visible')){

        $( "#firebrickDiv" ).effect( "slide", hide2options, 100);
        $( "#darkorangeDiv" ).effect( "slide", show2options, 100, function(){
        $( "#darkorangeDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(6).css(liHigh);
        $( "#saddlebrownDiv" ).effect( "slide", show2options, 100, function(){
        $( "#saddlebrownDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(5).css(liHigh);
        $( "#steelblueDiv" ).effect( "slide", show2options, 100, function(){
        $( "#steelblueDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(4).css(liHigh);
        $( "#tealDiv" ).effect( "slide", show2options, 100);

if($('#tealDiv').is(':visible')) {
            
        $("li").css(liNot);
        $("li").eq(3).css(liHigh);
}
});
});
});
}

else if ($('#lightcoralDiv').is(':visible')){

        $( "#lightcoralDiv" ).effect( "slide", hide2options, 100);
        $( "#firebrickDiv" ).effect( "slide", show2options, 100, function(){
        $( "#firebrickDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(7).css(liHigh);
        $( "#darkorangeDiv" ).effect( "slide", show2options, 100, function(){
        $( "#darkorangeDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(6).css(liHigh);
        $( "#saddlebrownDiv" ).effect( "slide", show2options, 100, function(){
        $( "#saddlebrownDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(5).css(liHigh);
        $( "#steelblueDiv" ).effect( "slide", show2options, 100, function(){
        $( "#steelblueDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(4).css(liHigh);
        $( "#tealDiv" ).effect( "slide", show2options, 100);

if($('#tealDiv').is(':visible')) {
            
        $("li").css(liNot);
        $("li").eq(3).css(liHigh);
}
});
});
});
});
}

});

// End of IT Skills //

// Experience //

$("li").eq(4).on('click', function(){

if ($('#blueDiv').is(':visible')){

        $( "#blueDiv" ).effect( "slide", hideoptions, 100);
        $( "#redDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#redDiv" ).effect( "slide", hideoptions, 100);
        $("li").css(liNot);
        $("li").eq(2).css(liHigh);
        $( "#greenDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#greenDiv" ).effect( "slide", hideoptions, 100);
        $( "#purpleDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#purpleDiv" ).effect( "slide", hideoptions, 100);
        $("li").css(liNot);
        $("li").eq(3).css(liHigh);
        $( "#tealDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#tealDiv" ).effect( "slide", hideoptions, 100);
        $( "#steelblueDiv" ).effect( "slide", showoptions, 100);

        if($('#steelblueDiv').is(':visible')) {
                    
                $("li").css(liNot);
                $("li").eq(4).css(liHigh);
        }

});
});
});
});
}

else if ($('#redDiv').is(':visible')){

        $( "#redDiv" ).effect( "slide", hideoptions, 100);
        $( "#greenDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#greenDiv" ).effect( "slide", hideoptions, 100);
        $( "#purpleDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#purpleDiv" ).effect( "slide", hideoptions, 100);
        $("li").css(liNot);
        $("li").eq(3).css(liHigh);
        $( "#tealDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#tealDiv" ).effect( "slide", hideoptions, 100);
        $( "#steelblueDiv" ).effect( "slide", showoptions, 100);

        if($('#steelblueDiv').is(':visible')) {
                    
                $("li").css(liNot);
                $("li").eq(4).css(liHigh);
        }

});
});
});

}

else if ($('#greenDiv').is(':visible')){

        $( "#greenDiv" ).effect( "slide", hideoptions, 100);
        $( "#purpleDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#purpleDiv" ).effect( "slide", hideoptions, 100);
        $("li").css(liNot);
        $("li").eq(3).css(liHigh);
        $( "#tealDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#tealDiv" ).effect( "slide", hideoptions, 100);
        $( "#steelblueDiv" ).effect( "slide", showoptions, 100);

        if($('#steelblueDiv').is(':visible')) {
                    
                $("li").css(liNot);
                $("li").eq(4).css(liHigh);
        }

});
});

}

else if ($('#purpleDiv').is(':visible')){

        $( "#purpleDiv" ).effect( "slide", hideoptions, 100);
        $("li").css(liNot);
        $("li").eq(3).css(liHigh);
        $( "#tealDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#tealDiv" ).effect( "slide", hideoptions, 100);
        $( "#steelblueDiv" ).effect( "slide", showoptions, 100);

        if($('#steelblueDiv').is(':visible')) {
                    
                $("li").css(liNot);
                $("li").eq(4).css(liHigh);
        }

});

}

else if ($('#tealDiv').is(':visible')){

        $( "#tealDiv" ).effect( "slide", hideoptions, 1000);
        $( "#steelblueDiv" ).effect( "slide", showoptions, 1000);

        if($('#steelblueDiv').is(':visible')) {
                    
                $("li").css(liNot);
                $("li").eq(4).css(liHigh);
        }

}

else if ($('#steelblueDiv').is(':visible')){

// Do Nothing

}

else if ($('#saddlebrownDiv').is(':visible')){

        $( "#saddlebrownDiv" ).effect( "slide", hide2options, 1000);
        $( "#steelblueDiv" ).effect( "slide", show2options, 1000);

        if($('#steelblueDiv').is(':visible')) {
                    
                $("li").css(liNot);
                $("li").eq(4).css(liHigh);
        }
}

else if ($('#darkorangeDiv').is(':visible')){

        $( "#darkorangeDiv" ).effect( "slide", hide2options, 100);
        $( "#saddlebrownDiv" ).effect( "slide", show2options, 100, function(){
        $( "#saddlebrownDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(5).css(liHigh);
        $( "#steelblueDiv" ).effect( "slide", show2options, 100);

        if($('#steelblueDiv').is(':visible')) {
                    
                $("li").css(liNot);
                $("li").eq(4).css(liHigh);
        }
});
}

else if ($('#firebrickDiv').is(':visible')){

        $( "#firebrickDiv" ).effect( "slide", hide2options, 100);
        $( "#darkorangeDiv" ).effect( "slide", show2options, 100, function(){
        $( "#darkorangeDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(6).css(liHigh);
        $( "#saddlebrownDiv" ).effect( "slide", show2options, 100, function(){
        $( "#saddlebrownDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(5).css(liHigh);
        $( "#steelblueDiv" ).effect( "slide", show2options, 100);
        if($('#steelblueDiv').is(':visible')) {
                    
                $("li").css(liNot);
                $("li").eq(4).css(liHigh);
        }
});
});
}

else if ($('#lightcoralDiv').is(':visible')){

        $( "#lightcoralDiv" ).effect( "slide", hide2options, 100);
        $( "#firebrickDiv" ).effect( "slide", show2options, 100, function(){
        $( "#firebrickDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(7).css(liHigh);
        $( "#darkorangeDiv" ).effect( "slide", show2options, 100, function(){
        $( "#darkorangeDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(6).css(liHigh);
        $( "#saddlebrownDiv" ).effect( "slide", show2options, 100, function(){
        $( "#saddlebrownDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(5).css(liHigh);
        $( "#steelblueDiv" ).effect( "slide", show2options, 100);

        if($('#steelblueDiv').is(':visible')) {
                    
                $("li").css(liNot);
                $("li").eq(4).css(liHigh);
        }
});
});
});
}

});

// End of Experience //

// Skills //

$("li").eq(5).on('click', function(){

if ($('#blueDiv').is(':visible')){

        $( "#blueDiv" ).effect( "slide", hideoptions, 100);
        $( "#redDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#redDiv" ).effect( "slide", hideoptions, 100);
        $("li").css(liNot);
        $("li").eq(2).css(liHigh);
        $( "#greenDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#greenDiv" ).effect( "slide", hideoptions, 100);
        $( "#purpleDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#purpleDiv" ).effect( "slide", hideoptions, 100);
        $("li").css(liNot);
        $("li").eq(3).css(liHigh);
        $( "#tealDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#tealDiv" ).effect( "slide", hideoptions, 100);
        $("li").css(liNot);
        $("li").eq(4).css(liHigh);
        $( "#steelblueDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#steelblueDiv" ).effect( "slide", hideoptions, 100);
        $( "#saddlebrownDiv" ).effect( "slide", showoptions, 100);

        if($('#saddlebrownDiv').is(':visible')) {
                    
                $("li").css(liNot);
                $("li").eq(5).css(liHigh);
        }

});
});
});
});
});
}

else if ($('#redDiv').is(':visible')){

        $( "#redDiv" ).effect( "slide", hideoptions, 100);
        $("li").css(liNot);
        $("li").eq(2).css(liHigh);
        $( "#greenDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#greenDiv" ).effect( "slide", hideoptions, 100);
        $( "#purpleDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#purpleDiv" ).effect( "slide", hideoptions, 100);
        $("li").css(liNot);
        $("li").eq(3).css(liHigh);
        $( "#tealDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#tealDiv" ).effect( "slide", hideoptions, 100);
        $("li").css(liNot);
        $("li").eq(4).css(liHigh);
        $( "#steelblueDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#steelblueDiv" ).effect( "slide", hideoptions, 100);
        $( "#saddlebrownDiv" ).effect( "slide", showoptions, 100);

        if($('#saddlebrownDiv').is(':visible')) {
                    
                $("li").css(liNot);
                $("li").eq(5).css(liHigh);
        }

});
});
});
});

}

else if ($('#greenDiv').is(':visible')){

        $( "#greenDiv" ).effect( "slide", hideoptions, 100);
        $( "#purpleDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#purpleDiv" ).effect( "slide", hideoptions, 100);
        $("li").css(liNot);
        $("li").eq(3).css(liHigh);
        $( "#tealDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#tealDiv" ).effect( "slide", hideoptions, 100);
        $("li").css(liNot);
        $("li").eq(4).css(liHigh);
        $( "#steelblueDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#steelblueDiv" ).effect( "slide", hideoptions, 100);
        $( "#saddlebrownDiv" ).effect( "slide", showoptions, 100);

        if($('#saddlebrownDiv').is(':visible')) {
                    
                $("li").css(liNot);
                $("li").eq(5).css(liHigh);
        }

});
});
});

}

else if ($('#purpleDiv').is(':visible')){

        $( "#purpleDiv" ).effect( "slide", hideoptions, 100);
        $("li").css(liNot);
        $("li").eq(3).css(liHigh);
        $( "#tealDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#tealDiv" ).effect( "slide", hideoptions, 100);
        $("li").css(liNot);
        $("li").eq(4).css(liHigh);
        $( "#steelblueDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#steelblueDiv" ).effect( "slide", hideoptions, 100);
        $( "#saddlebrownDiv" ).effect( "slide", showoptions, 100);

        if($('#saddlebrownDiv').is(':visible')) {
                    
                $("li").css(liNot);
                $("li").eq(5).css(liHigh);
        }

});
});

}

else if ($('#tealDiv').is(':visible')){

        $( "#tealDiv" ).effect( "slide", hideoptions, 100);
        $("li").css(liNot);
        $("li").eq(4).css(liHigh);
        $( "#steelblueDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#steelblueDiv" ).effect( "slide", hideoptions, 100);
        $( "#saddlebrownDiv" ).effect( "slide", showoptions, 100);

        if($('#saddlebrownDiv').is(':visible')) {
                    
                $("li").css(liNot);
                $("li").eq(5).css(liHigh);
        }

});

}

else if ($('#steelblueDiv').is(':visible')){

        $( "#steelblueDiv" ).effect( "slide", hideoptions, 1000);
        $( "#saddlebrownDiv" ).effect( "slide", showoptions, 1000);

        if($('#saddlebrownDiv').is(':visible')) {
                    
                $("li").css(liNot);
                $("li").eq(5).css(liHigh);
        }

}

else if ($('#saddlebrownDiv').is(':visible')){

// Do Nothing

}

else if ($('#darkorangeDiv').is(':visible')){

        $( "#darkorangeDiv" ).effect( "slide", hide2options, 1000);
        $( "#saddlebrownDiv" ).effect( "slide", show2options, 1000);

        if($('#saddlebrownDiv').is(':visible')) {
                    
                $("li").css(liNot);
                $("li").eq(5).css(liHigh);
        }
}

else if ($('#firebrickDiv').is(':visible')){

        $( "#firebrickDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(6).css(liHigh);
        $( "#darkorangeDiv" ).effect( "slide", show2options, 100, function(){
        $( "#darkorangeDiv" ).effect( "slide", hide2options, 100);
        $( "#saddlebrownDiv" ).effect( "slide", show2options, 100);
                    
        if($('#saddlebrownDiv').is(':visible')) {
                    
                $("li").css(liNot);
                $("li").eq(5).css(liHigh);
        }
});
}

else if ($('#lightcoralDiv').is(':visible')){

        $( "#lightcoralDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(7).css(liHigh);
        $( "#firebrickDiv" ).effect( "slide", show2options, 100, function(){
        $( "#firebrickDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(6).css(liHigh);
        $( "#darkorangeDiv" ).effect( "slide", show2options, 100, function(){
        $( "#darkorangeDiv" ).effect( "slide", hide2options, 100);
        $( "#saddlebrownDiv" ).effect( "slide", show2options, 100);

        if($('#saddlebrownDiv').is(':visible')) {
                    
                $("li").css(liNot);
                $("li").eq(5).css(liHigh);
        }
});
});
}

});

// End of Skills //

// Achievements //

$("li").eq(6).on('click', function(){

if ($('#blueDiv').is(':visible')){

        $( "#blueDiv" ).effect( "slide", hideoptions, 100);
        $( "#redDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#redDiv" ).effect( "slide", hideoptions, 100);
        $("li").css(liNot);
        $("li").eq(2).css(liHigh);
        $( "#greenDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#greenDiv" ).effect( "slide", hideoptions, 100);
        $( "#purpleDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#purpleDiv" ).effect( "slide", hideoptions, 100);
        $("li").css(liNot);
        $("li").eq(3).css(liHigh);
        $( "#tealDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#tealDiv" ).effect( "slide", hideoptions, 100);
        $("li").css(liNot);
        $("li").eq(4).css(liHigh);
        $( "#steelblueDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#steelblueDiv" ).effect( "slide", hideoptions, 100);
        $("li").css(liNot);
        $("li").eq(5).css(liHigh);
        $( "#saddlebrownDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#saddlebrownDiv" ).effect( "slide", hideoptions, 100);
        $( "#darkorangeDiv" ).effect( "slide", showoptions, 100);

        if($('#darkorangeDiv').is(':visible')) {
                    
                $("li").css(liNot);
                $("li").eq(6).css(liHigh);
        }

});
});
});
});
});
});
}

else if ($('#redDiv').is(':visible')){

        $( "#redDiv" ).effect( "slide", hideoptions, 100);
        $("li").css(liNot);
        $("li").eq(2).css(liHigh);
        $( "#greenDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#greenDiv" ).effect( "slide", hideoptions, 100);
        $( "#purpleDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#purpleDiv" ).effect( "slide", hideoptions, 100);
        $("li").css(liNot);
        $("li").eq(3).css(liHigh);
        $( "#tealDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#tealDiv" ).effect( "slide", hideoptions, 100);
        $("li").css(liNot);
        $("li").eq(4).css(liHigh);
        $( "#steelblueDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#steelblueDiv" ).effect( "slide", hideoptions, 100);
        $("li").css(liNot);
        $("li").eq(5).css(liHigh);
        $( "#saddlebrownDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#saddlebrownDiv" ).effect( "slide", hideoptions, 100);
        $( "#darkorangeDiv" ).effect( "slide", showoptions, 100);

        if($('#darkorangeDiv').is(':visible')) {
                    
                $("li").css(liNot);
                $("li").eq(6).css(liHigh);
        }

});
});
});
});
});

}

else if ($('#greenDiv').is(':visible')){

        $( "#greenDiv" ).effect( "slide", hideoptions, 100);
        $( "#purpleDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#purpleDiv" ).effect( "slide", hideoptions, 100);
        $("li").css(liNot);
        $("li").eq(3).css(liHigh);
        $( "#tealDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#tealDiv" ).effect( "slide", hideoptions, 100);
        $("li").css(liNot);
        $("li").eq(4).css(liHigh);
        $( "#steelblueDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#steelblueDiv" ).effect( "slide", hideoptions, 100);
        $("li").css(liNot);
        $("li").eq(5).css(liHigh);
        $( "#saddlebrownDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#saddlebrownDiv" ).effect( "slide", hideoptions, 100);
        $( "#darkorangeDiv" ).effect( "slide", showoptions, 100);

        if($('#darkorangeDiv').is(':visible')) {
                    
                $("li").css(liNot);
                $("li").eq(6).css(liHigh);
        }

});
});
});
});

}

else if ($('#purpleDiv').is(':visible')){

        $( "#purpleDiv" ).effect( "slide", hideoptions, 100);
        $("li").css(liNot);
        $("li").eq(3).css(liHigh);
        $( "#tealDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#tealDiv" ).effect( "slide", hideoptions, 100);
        $("li").css(liNot);
        $("li").eq(4).css(liHigh);
        $( "#steelblueDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#steelblueDiv" ).effect( "slide", hideoptions, 100);
        $("li").css(liNot);
        $("li").eq(5).css(liHigh);
        $( "#saddlebrownDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#saddlebrownDiv" ).effect( "slide", hideoptions, 100);
        $( "#darkorangeDiv" ).effect( "slide", showoptions, 100);

        if($('#darkorangeDiv').is(':visible')) {
                    
                $("li").css(liNot);
                $("li").eq(6).css(liHigh);
        }

});
});
});

}

else if ($('#tealDiv').is(':visible')){

        $( "#tealDiv" ).effect( "slide", hideoptions, 100);
        $("li").css(liNot);
        $("li").eq(4).css(liHigh);
        $( "#steelblueDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#steelblueDiv" ).effect( "slide", hideoptions, 100);
        $("li").css(liNot);
        $("li").eq(5).css(liHigh);
        $( "#saddlebrownDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#saddlebrownDiv" ).effect( "slide", hideoptions, 100);
        $( "#darkorangeDiv" ).effect( "slide", showoptions, 100);

        if($('#darkorangeDiv').is(':visible')) {
                    
                $("li").css(liNot);
                $("li").eq(6).css(liHigh);
        }

});
});

}

else if ($('#steelblueDiv').is(':visible')){

        $( "#steelblueDiv" ).effect( "slide", hideoptions, 100);
        $("li").css(liNot);
        $("li").eq(5).css(liHigh);
        $( "#saddlebrownDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#saddlebrownDiv" ).effect( "slide", hideoptions, 100);
        $( "#darkorangeDiv" ).effect( "slide", showoptions, 100);

        if($('#darkorangeDiv').is(':visible')) {
                    
                $("li").css(liNot);
                $("li").eq(6).css(liHigh);
        }

});

}

else if ($('#saddlebrownDiv').is(':visible')){

        $( "#saddlebrownDiv" ).effect( "slide", hideoptions, 1000);
        $( "#darkorangeDiv" ).effect( "slide", showoptions, 1000);

        if($('#darkorangeDiv').is(':visible')) {
                    
                $("li").css(liNot);
                $("li").eq(6).css(liHigh);
        }

}

else if ($('#darkorangeDiv').is(':visible')){

// Do Nothing

}

else if ($('#firebrickDiv').is(':visible')){

        $( "#firebrickDiv" ).effect( "slide", hide2options, 1000);
        $( "#darkorangeDiv" ).effect( "slide", show2options, 1000);

        if($('#darkorangeDiv').is(':visible')) {
                    
                $("li").css(liNot);
                $("li").eq(6).css(liHigh);
        }
}

else if ($('#lightcoralDiv').is(':visible')){

        $( "#lightcoralDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(7).css(liHigh);
        $( "#firebrickDiv" ).effect( "slide", show2options, 100, function(){
        $( "#firebrickDiv" ).effect( "slide", hide2options, 100);
        $("li").css(liNot);
        $("li").eq(6).css(liHigh);
        $( "#darkorangeDiv" ).effect( "slide", show2options, 100);

        if($('#darkorangeDiv').is(':visible')) {
                    
                $("li").css(liNot);
                $("li").eq(6).css(liHigh);
        }
});
}

});

// End of Achievements //

// References //

$("li").eq(7).on('click', function(){

if ($('#blueDiv').is(':visible')){

        $( "#blueDiv" ).effect( "slide", hideoptions, 100);
        $( "#redDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#redDiv" ).effect( "slide", hideoptions, 100);
        $("li").css(liNot);
        $("li").eq(2).css(liHigh);
        $( "#greenDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#greenDiv" ).effect( "slide", hideoptions, 100);
        $( "#purpleDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#purpleDiv" ).effect( "slide", hideoptions, 100);
        $("li").css(liNot);
        $("li").eq(3).css(liHigh);
        $( "#tealDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#tealDiv" ).effect( "slide", hideoptions, 100);
        $("li").css(liNot);
        $("li").eq(4).css(liHigh);
        $( "#steelblueDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#steelblueDiv" ).effect( "slide", hideoptions, 100);
        $("li").css(liNot);
        $("li").eq(5).css(liHigh);
        $( "#saddlebrownDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#saddlebrownDiv" ).effect( "slide", hideoptions, 100);
        $("li").css(liNot);
        $("li").eq(6).css(liHigh);
        $( "#darkorangeDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#darkorangeDiv" ).effect( "slide", hideoptions, 100);
        $( "#firebrickDiv" ).effect( "slide", showoptions, 100);

        if($('#firebrickDiv').is(':visible')) {
                    
                $("li").css(liNot);
                $("li").eq(7).css(liHigh);
        }

});
});
});
});
});
});
});
}

else if ($('#redDiv').is(':visible')){

        $( "#redDiv" ).effect( "slide", hideoptions, 100);
        $("li").css(liNot);
        $("li").eq(2).css(liHigh);
        $( "#greenDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#greenDiv" ).effect( "slide", hideoptions, 100);
        $( "#purpleDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#purpleDiv" ).effect( "slide", hideoptions, 100);
        $("li").css(liNot);
        $("li").eq(3).css(liHigh);
        $( "#tealDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#tealDiv" ).effect( "slide", hideoptions, 100);
        $("li").css(liNot);
        $("li").eq(4).css(liHigh);
        $( "#steelblueDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#steelblueDiv" ).effect( "slide", hideoptions, 100);
        $("li").css(liNot);
        $("li").eq(5).css(liHigh);
        $( "#saddlebrownDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#saddlebrownDiv" ).effect( "slide", hideoptions, 100);
        $("li").css(liNot);
        $("li").eq(6).css(liHigh);
        $( "#darkorangeDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#darkorangeDiv" ).effect( "slide", hideoptions, 100);
        $( "#firebrickDiv" ).effect( "slide", showoptions, 100);

        if($('#firebrickDiv').is(':visible')) {
                    
                $("li").css(liNot);
                $("li").eq(7).css(liHigh);
        }

});
});
});
});
});
});

}

else if ($('#greenDiv').is(':visible')){

        $( "#greenDiv" ).effect( "slide", hideoptions, 100);
        $( "#purpleDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#purpleDiv" ).effect( "slide", hideoptions, 100);
        $("li").css(liNot);
        $("li").eq(3).css(liHigh);
        $( "#tealDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#tealDiv" ).effect( "slide", hideoptions, 100);
        $("li").css(liNot);
        $("li").eq(4).css(liHigh);
        $( "#steelblueDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#steelblueDiv" ).effect( "slide", hideoptions, 100);
        $("li").css(liNot);
        $("li").eq(5).css(liHigh);
        $( "#saddlebrownDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#saddlebrownDiv" ).effect( "slide", hideoptions, 100);
        $("li").css(liNot);
        $("li").eq(6).css(liHigh);
        $( "#darkorangeDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#darkorangeDiv" ).effect( "slide", hideoptions, 100);
        $( "#firebrickDiv" ).effect( "slide", showoptions, 100);

        if($('#firebrickDiv').is(':visible')) {
                    
                $("li").css(liNot);
                $("li").eq(7).css(liHigh);
        }

});
});
});
});
});

}

else if ($('#purpleDiv').is(':visible')){

        $( "#purpleDiv" ).effect( "slide", hideoptions, 100);
        $("li").css(liNot);
        $("li").eq(3).css(liHigh);
        $( "#tealDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#tealDiv" ).effect( "slide", hideoptions, 100);
        $("li").css(liNot);
        $("li").eq(4).css(liHigh);
        $( "#steelblueDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#steelblueDiv" ).effect( "slide", hideoptions, 100);
        $("li").css(liNot);
        $("li").eq(5).css(liHigh);
        $( "#saddlebrownDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#saddlebrownDiv" ).effect( "slide", hideoptions, 100);
        $("li").css(liNot);
        $("li").eq(6).css(liHigh);
        $( "#darkorangeDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#darkorangeDiv" ).effect( "slide", hideoptions, 100);
        $( "#firebrickDiv" ).effect( "slide", showoptions, 100);

        if($('#firebrickDiv').is(':visible')) {
                    
                $("li").css(liNot);
                $("li").eq(7).css(liHigh);
        }

});
});
});
});

}

else if ($('#tealDiv').is(':visible')){

        $( "#tealDiv" ).effect( "slide", hideoptions, 100);
        $("li").css(liNot);
        $("li").eq(4).css(liHigh);
        $( "#steelblueDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#steelblueDiv" ).effect( "slide", hideoptions, 100);
        $("li").css(liNot);
        $("li").eq(5).css(liHigh);
        $( "#saddlebrownDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#saddlebrownDiv" ).effect( "slide", hideoptions, 100);
        $("li").css(liNot);
        $("li").eq(6).css(liHigh);
        $( "#darkorangeDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#darkorangeDiv" ).effect( "slide", hideoptions, 100);
        $( "#firebrickDiv" ).effect( "slide", showoptions, 100);

        if($('#firebrickDiv').is(':visible')) {
                    
                $("li").css(liNot);
                $("li").eq(7).css(liHigh);
        }

});
});
});

}

else if ($('#steelblueDiv').is(':visible')){

        $( "#steelblueDiv" ).effect( "slide", hideoptions, 100);
        $("li").css(liNot);
        $("li").eq(5).css(liHigh);
        $( "#saddlebrownDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#saddlebrownDiv" ).effect( "slide", hideoptions, 100);
        $("li").css(liNot);
        $("li").eq(6).css(liHigh);
        $( "#darkorangeDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#darkorangeDiv" ).effect( "slide", hideoptions, 100);
        $( "#firebrickDiv" ).effect( "slide", showoptions, 100);

        if($('#firebrickDiv').is(':visible')) {
                    
                $("li").css(liNot);
                $("li").eq(7).css(liHigh);
        }

});
});

}

else if ($('#saddlebrownDiv').is(':visible')){

        $( "#saddlebrownDiv" ).effect( "slide", hideoptions, 100);
        $( "#darkorangeDiv" ).effect( "slide", showoptions, 100, function(){
        $( "#darkorangeDiv" ).effect( "slide", hideoptions, 100);
        $( "#firebrickDiv" ).effect( "slide", showoptions, 100);

        if($('#firebrickDiv').is(':visible')) {
                    
                $("li").css(liNot);
                $("li").eq(7).css(liHigh);
        }

});

        if($('#darkorangeDiv').is(':visible')) {
                    
                $("li").css(liNot);
                $("li").eq(6).css(liHigh);
        }

}

else if ($('#darkorangeDiv').is(':visible')){

        $( "#darkorangeDiv" ).effect( "slide", hideoptions, 1000);
        $( "#firebrickDiv" ).effect( "slide", showoptions, 1000);

        if($('#firebrickDiv').is(':visible')) {
                    
                $("li").css(liNot);
                $("li").eq(7).css(liHigh);
        }

}

else if ($('#firebrickDiv').is(':visible')){

//Do Nothing

}

else if ($('#lightcoralDiv').is(':visible')){

        $( "#lightcoralDiv" ).effect( "slide", hide2options, 1000);
        $( "#firebrickDiv" ).effect( "slide", show2options, 1000);

        if($('#firebrickDiv').is(':visible')) {
                    
                $("li").css(liNot);
                $("li").eq(7).css(liHigh);
        }
}

});

// End of References //

// First div clicks - No previous

$("#blueDiv").on('click', function(e){


    var x = e.pageX - this.offsetLeft;

    var width = $(this).width(),
        where = width / 2;
    if( x > where ){

    if(!$('#redDiv').is(':visible'))
{  
    $("li").css(liNot); 
    $("li").eq(2).css(liHigh);       
}

        $( "#blueDiv" ).effect( "slide", hideoptions, 1000); //notice, no callback
		$( "#redDiv" ).effect( "slide", showoptions, 1000);
    } else {
    }
});

// Second div clicks - No previous

$("#redDiv").on('click', function(e){

    var x = e.pageX - this.offsetLeft;

    var width = $(this).width(),
        where = width / 2;
    if( x > where ){

        $( "#redDiv" ).effect( "slide", hideoptions, 1000);
		$( "#greenDiv" ).effect( "slide", showoptions, 1000);

        if($('#greenDiv').is(':visible')) {

            $("li").css(liNot); 
            $("li").eq(2).css(liHigh);
        }

    }

    else {

        $( "#redDiv" ).effect( "slide", hide2options, 1000);
		$( "#blueDiv" ).effect( "slide", show2options, 1000);

        if($('#blueDiv').is(':visible')) {
            
            $("li").css(liNot);
            $("li").eq(1).css(liHigh);
        }

    }
});

// Third div clicks

$("#greenDiv").on('click', function(e){

    var x = e.pageX - this.offsetLeft;

    var width = $(this).width(),
        where = width / 2;

    if( x > where ){

        $( "#greenDiv" ).effect( "slide", hideoptions, 1000); //notice, no callback
        $( "#purpleDiv" ).effect( "slide", showoptions, 1000);

        if($('#purpleDiv').is(':visible')) {

            $("li").css(liNot); 
            $("li").eq(2).css(liHigh);
        }

    } else {
        $( "#greenDiv" ).effect( "slide", hide2options, 1000); //notice, no callback
		$( "#redDiv" ).effect( "slide", show2options, 1000);

        if($('#redDiv').is(':visible')) {
            
            $("li").css(liNot);
            $("li").eq(2).css(liHigh);
        }

    }
});

// Fourth div clicks

$("#purpleDiv").on('click', function(e){

    var x = e.pageX - this.offsetLeft;

    var width = $(this).width(),
        where = width / 2;
    if( x > where ){
        $( "#purpleDiv" ).effect( "slide", hideoptions, 1000); //notice, no callback
        $( "#tealDiv" ).effect( "slide", showoptions, 1000);

        if($('#tealDiv').is(':visible')) {

            $("li").css(liNot); 
            $("li").eq(3).css(liHigh);
        }

    } else {
        $( "#purpleDiv" ).effect( "slide", hide2options, 1000); //notice, no callback
        $( "#greenDiv" ).effect( "slide", show2options, 1000);

        if($('#greenDiv').is(':visible')) {
            
            $("li").css(liNot);
            $("li").eq(2).css(liHigh);
        }

    }
});

// Fifth div clicks

$("#tealDiv").on('click', function(e){

    var x = e.pageX - this.offsetLeft;

    var width = $(this).width(),
        where = width / 2;
    if( x > where ){
        $( "#tealDiv" ).effect( "slide", hideoptions, 1000); //notice, no callback
        $( "#steelblueDiv" ).effect( "slide", showoptions, 1000);

        if($('#steelblueDiv').is(':visible')) {

            $("li").css(liNot); 
            $("li").eq(4).css(liHigh);
        }

    } else {
        $( "#tealDiv" ).effect( "slide", hide2options, 1000); //notice, no callback
        $( "#purpleDiv" ).effect( "slide", show2options, 1000);

        if($('#purpleDiv').is(':visible')) {
            
            $("li").css(liNot);
            $("li").eq(2).css(liHigh);
        }

    }
});

// Sixth div clicks

$("#steelblueDiv").on('click', function(e){

    var x = e.pageX - this.offsetLeft;

    var width = $(this).width(),
        where = width / 2;
    if( x > where ){
        $( "#steelblueDiv" ).effect( "slide", hideoptions, 1000); //notice, no callback
        $( "#saddlebrownDiv" ).effect( "slide", showoptions, 1000);

        if($('#saddlebrownDiv').is(':visible')) {

            $("li").css(liNot); 
            $("li").eq(5).css(liHigh);
        }

    } else {
        $( "#steelblueDiv" ).effect( "slide", hide2options, 1000); //notice, no callback
        $( "#tealDiv" ).effect( "slide", show2options, 1000);

        if($('#tealDiv').is(':visible')) {
            
            $("li").css(liNot);
            $("li").eq(3).css(liHigh);
        }
    }
});

// Seventh div clicks

$("#saddlebrownDiv").on('click', function(e){

    var x = e.pageX - this.offsetLeft;

    var width = $(this).width(),
        where = width / 2;
    if( x > where ){
        $( "#saddlebrownDiv" ).effect( "slide", hideoptions, 1000); //notice, no callback
        $( "#darkorangeDiv" ).effect( "slide", showoptions, 1000);

        if($('#darkorangeDiv').is(':visible')) {

            $("li").css(liNot); 
            $("li").eq(6).css(liHigh);
        }

    } else {
        $( "#saddlebrownDiv" ).effect( "slide", hide2options, 1000); //notice, no callback
        $( "#steelblueDiv" ).effect( "slide", show2options, 1000);

        if($('#steelblueDiv').is(':visible')) {
            
            $("li").css(liNot);
            $("li").eq(4).css(liHigh);
        }

    }
});

// Eighth div clicks - No previous

$("#darkorangeDiv").on('click', function(e){

    var x = e.pageX - this.offsetLeft;

    var width = $(this).width(),
        where = width / 2;
    if( x > where ){
        $( "#darkorangeDiv" ).effect( "slide", hideoptions, 1000); //notice, no callback
        $( "#firebrickDiv" ).effect( "slide", showoptions, 1000);

        if($('#firebrickDiv').is(':visible')) {

            $("li").css(liNot); 
            $("li").eq(7).css(liHigh);
        }
    } else {
        $( "#darkorangeDiv" ).effect( "slide", hide2options, 1000); //notice, no callback
        $( "#saddlebrownDiv" ).effect( "slide", show2options, 1000);

        if($('#saddlebrownDiv').is(':visible')) {
            
            $("li").css(liNot);
            $("li").eq(5).css(liHigh);
        }

    }
});

// Nineth div clicks - No previous

$("#firebrickDiv").on('click', function(e){

    var x = e.pageX - this.offsetLeft;

    var width = $(this).width(),
        where = width / 2;
    if( x > where ){
        $( "#firebrickDiv" ).effect( "slide", hideoptions, 1000); //notice, no callback
        $( "#lightcoralDiv" ).effect( "slide", showoptions, 1000);

        if($('#lightcoralDiv').is(':visible')) {

            $("li").css(liNot); 
        }

    } else {
        $( "#firebrickDiv" ).effect( "slide", hide2options, 1000); //notice, no callback
        $( "#darkorangeDiv" ).effect( "slide", show2options, 1000);

        if($('#darkorangeDiv').is(':visible')) {
            
            $("li").css(liNot);
            $("li").eq(6).css(liHigh);
        }
    }
});

// Tenth div clicks - No previous

$("#lightcoralDiv").on('click', function(e){

    var x = e.pageX - this.offsetLeft;

    var width = $(this).width(),
        where = width / 2;
    if( x > where ){
        }
        

    else {
        $( "#lightcoralDiv" ).effect( "slide", hide2options, 1000); //notice, no callback
        $( "#firebrickDiv" ).effect( "slide", show2options, 1000);

        if($('#firebrickDiv').is(':visible')) {
            
            $("li").css(liNot);
            $("li").eq(7).css(liHigh);
        }
    }
});


$("#restartBtn").on('click', function(){

        $( "#lightcoralDiv" ).effect( "slide", hide2options, 100); //notice, no callback
        $( "#firebrickDiv" ).effect( "slide", show2options, 100, function(){
            $( "#firebrickDiv" ).effect( "slide", hide2options, 100);            
            $("li").css(liNot);
            $("li").eq(7).css(liHigh);

            $( "#darkorangeDiv" ).effect( "slide", show2options, 100, function(){
            $( "#darkorangeDiv" ).effect( "slide", hide2options, 100);            
            $("li").css(liNot);
            $("li").eq(6).css(liHigh);

            $( "#saddlebrownDiv" ).effect( "slide", show2options, 100, function(){//notice, no callback
            $( "#saddlebrownDiv" ).effect( "slide", hide2options, 100);             
            $("li").css(liNot);
            $("li").eq(5).css(liHigh);

            $( "#steelblueDiv" ).effect( "slide", show2options, 100, function(){ //notice, no callback
            $( "#steelblueDiv" ).effect( "slide", hide2options, 100);            
            $("li").css(liNot);
            $("li").eq(4).css(liHigh);

            $( "#tealDiv" ).effect( "slide", show2options, 100, function(){ //notice, no callback
            $( "#tealDiv" ).effect( "slide", hide2options, 100);             
            $("li").css(liNot);
            $("li").eq(3).css(liHigh);

            $( "#purpleDiv" ).effect( "slide", show2options, 100, function(){ //notice, no callback
            $( "#purpleDiv" ).effect( "slide", hide2options, 100);
            $("li").css(liNot);
            $("li").eq(2).css(liHigh);

            $( "#greenDiv" ).effect( "slide", show2options, 100, function(){ //notice, no callback
            $( "#greenDiv" ).effect( "slide", hide2options, 100);
            $("li").css(liNot);
            $("li").eq(2).css(liHigh);

            $( "#redDiv" ).effect( "slide", show2options, 100, function(){ //notice, no callback
            $( "#redDiv" ).effect( "slide", hide2options, 100);
            $("li").css(liNot);
            $("li").eq(2).css(liHigh);
            $( "#blueDiv" ).effect( "slide", show2options, 100);
            if($('#blueDiv').is(':visible')) {
            
            $("li").css(liNot);
            $("li").eq(1).css(liHigh);
        }
            });});});});});});});});

    });

    $("#mobileNav").click(function(){
        $("#navContent").slideToggle("slow");
    });

});