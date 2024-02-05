$(function() {

	$(".nicescroll").click(function(e) {
        e.preventDefault();
        var s = $(this).attr("href");
        console.log(s), $("html,body").animate({
            scrollTop: $(s).offset().top - 80
        }, "slow")
    });
 	
});

