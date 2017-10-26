$(function(){
	$(".about-num span").click(function(){
		var $index = $(this).index();
		$(this).addClass("cur").siblings("span").removeClass("cur");
		var $left = -(1280 * $index);
		$(".about-our ul").animate({"left":$left},500)
	})
})