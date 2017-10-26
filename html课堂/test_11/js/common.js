// window.onload=function(){
	// var mySwiper = new Swiper('.swiper-container',{
 //    pagination: '.pagination',
 //    loop:true,    
 //    grabCursor: true,
 //    paginationClickable: true
 //  })
 //  $('.arrow-left').on('click', function(e){
 //    e.preventDefault()
 //    mySwiper.swipePrev()
 //  })
 //  $('.arrow-right').on('click', function(e){
 //    e.preventDefault()
 //    mySwiper.swipeNext()
 //  })
// };
$(function(){
	var oLi = $(".swiper-container li");
	var oSpan = $(".pagination span");
	var oA = $(".pagination a");
	var oPrev = $(".swiper-left");
	var oNext = $(".swiper-right");
	var active = "active";
	var cur = "cur";
	var length =  oLi.length;
	var num = 0;
	var stringAct = '<a class="active pagination-num" href="javascript:;"></a>';
	var string = '<a class="pagination-num" href="javascript:;"></a>';
	// 添加应有数目的小圆点
	for (var i = 0; i < length; i++) {
		if (i==0) {
			oSpan.append(stringAct);
		}else{
			oSpan.append(string);
		}
	}
	// 函数包
	// function addObj(num){
	// 	$(oLi).eq(num).addClass(cur).siblings("li").removeClass(cur);
	// 	$(".pagination a").eq(num).addClass(active).siblings("a").removeClass(active);
	// }
	// 点击图标切换页面
	$(".pagination a").click(function(){
		var index = $(this).index();
		$(this).addClass(active).siblings("a").removeClass(active);
		$(oLi).eq(index).addClass(cur).siblings("li").removeClass(cur);
		num = index;
		return num;
	})
	// 点击右翻页
	oNext.click(function(){
		num++;
		if(num == length){
			num = 0;
		}
		$(oLi).eq(num).addClass(cur).siblings("li").removeClass(cur);
		$(".pagination a").eq(num).addClass(active).siblings("a").removeClass(active);
	})
	// 点击左翻页
	oPrev.click(function(){
		num--;
		if(num < 0 ){
			num = length-1;
		}
		$(oLi).eq(num).addClass(cur).siblings("li").removeClass(cur);
		$(".pagination a").eq(num).addClass(active).siblings("a").removeClass(active);
	})
})