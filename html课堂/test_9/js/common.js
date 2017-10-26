$(function(){
	$(".first-class>li").click(function(e){
		var $index = $(this).index();
		var $height = $(this).context.clientHeight;
		 e = window.event || e;
	   e.stopPropagation();
		if($height > 34){
			$(this).removeClass("cur");
			$(this).children(".sec-class").slideUp("fast");
			$(this).children(".sec-class").children("li").children(".thr-class").slideUp("fast");
			$(this).children(".sec-class").children("li").removeClass("cur");
		}else{
			$(this).addClass("cur").siblings("li").removeClass("cur");
			$(this).children(".sec-class").slideDown("fast");
			$(this).siblings("li").children(".sec-class").slideUp("fast");
			$(this).siblings("li").children(".sec-class").children("li").children(".thr-class").slideUp("fast");
			$(this).siblings("li").children(".sec-class").children("li").removeClass("cur");
		}
	});
	$(".sec-class>li").click(function(e){
		 e = window.event || e;
	   e.stopPropagation();
		var $index = $(this).index();
		var $height = $(this).context.clientHeight;
		if($height > 34){
			$(this).children(".thr-class").slideUp("fast");
			$(this).removeClass("cur");
			$(this).children(".thr-class").children("li").removeClass("cur");
		}else{
			$(this).addClass("cur").siblings("li").removeClass("cur");
			$(this).children(".thr-class").slideDown("fast");
			$(this).siblings("li").children(".thr-class").slideUp("fast");
			$(this).siblings("li").children(".thr-class").children("li").removeClass("cur");
		}
	});
	$(".thr-class>li").click(function(e){
		 e = window.event || e;
	   e.stopPropagation()
		$(this).addClass("cur").siblings("li").removeClass("cur");
		var question = confirm("你确定要跳转新页面吗","跳转成功");
		if(question){
			alert("恭喜答对了！")
		}else{
			alert("很遗憾，链接无效！")
		}
	})
	// item1-cont tab切换
	$(".item1-cont-box li").click(function(){
		var $index = $(this).index();
		$(this).addClass("cur").siblings("li").removeClass("cur");
		$(".item1-cont table").eq($index).removeClass("hide").siblings("table").addClass("hide");
	})

})