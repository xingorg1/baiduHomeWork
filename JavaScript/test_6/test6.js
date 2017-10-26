window.onload = function(){
	var oBtns = document.querySelectorAll('.row input[type="button"]');
	var oTxtInput = document.querySelector('.row input[type="text"]');
	var oConfBtn = document.querySelectorAll('.del-pop input[type="button"]');
	var oTxtData = document.querySelector('.text-data');
	var oNoData = document.querySelector('.no-data');
	var oPopBox = document.querySelector('.pop');
	var oDelPop = document.querySelector('.del-pop');
	var oClose = document.querySelector('.close');
	var oUl = document.querySelector(".rank-box ul");
	
	var aTxt = [];

	delSelf();// 点击li删除自身

	oBtns[0].onclick = function(){	//从左边插入结构
		createLI(0)
	}
	oBtns[1].onclick = function(){	//从右边插入结构
		createLI(1)
	}
	oBtns[2].onclick = function(){	//从左边删除结构
		deleteLI(0)
	}
	oBtns[3].onclick = function(){	//从右边删除结构
		deleteLI(1)
	}
	oBtns[4].onclick = function(){	//查找对应结构
		searchTxt()
	}
	oClose.onclick = function(){	// 关闭弹窗
		oPop(0,0,"")
	}
	// 封装
	// 删除li自身
	function delSelf(){
		var oLiSlef = document.querySelectorAll(".rank-box ul li");
		for (var i = 0; i < oLiSlef.length; i++) {
			oLiSlef[i].onclick = function(){
				oPop(1,1,this.innerText);
				confirmPop(this);
			}
		}
	}
	// 插入结构函数
	function createLI(v){
		var sTxt = oTxtData.value;
		aTxt = sTxt.split(/[,，.。、\s\n]/);//重点注意这个正则的设计
		if(aTxt[0] == ""){//判断没输入内容时不插入结构
			 oPop(0,1,"姐姐，你没写东西让我插入什么啊！");
		}else{
			for (var i = 0; i < aTxt.length; i++) {
				if(aTxt[i] != ""){
					var oLi = document.createElement("li");
					oLi.innerText = aTxt[i];
					if(v == 0){
						oUl.insertBefore(oLi,oUl.children[0]);
					}else{
						oUl.appendChild(oLi);
					}
				}
			}
		}
		oTxtData.value = "";//文本框中的文字使用过后，清空文本框
		delSelf();//给新加的li添加上删除自身的效果，不至于新加的就没有这个功能
	}
	// 删除结构
	function deleteLI(v){
		var nLilength = oUl.children.length;
		if(nLilength <= 0){
			oPop(0,1,"没了还删删删个球球！");
		}else{
			if(v == 0){//判断是左删除还是右删除
				var sToptxt = oUl.children[0].innerText;
				var delIndex = oUl.children[0];
			}else{
				var sToptxt = oUl.children[(nLilength-1)].innerText;
				var delIndex = oUl.children[(nLilength-1)];
			}
			oPop(1,1,sToptxt);
			confirmPop(delIndex);
		}
	}

	// 重点来了，查找字段！！
	function searchTxt(){
		var searchV = oTxtInput.value;
		var oLiSlef = document.querySelectorAll(".rank-box ul li");
		if(oLiSlef.length <= 0){
			oPop(0,1,"没数据你要找什么！")
		}else{
			for (var i = 0; i < oLiSlef.length; i++) {
				oLiSlef[i].className = "";
				var onlySearchV = searchV.split("");//这里注意了，只传一个空的双引号(即不传参)
				for (var a = 0; a < onlySearchV.length; a++) {
					if(oLiSlef[i].innerText.indexOf(onlySearchV[a]) >= 0){
						oLiSlef[i].className = "mask";
					}
				}
			}
		}
		//老套路 最后清空文本框
		oTxtInput.value = "";
	} 


	// 弹窗函数
	function oPop(type,num,txt){
		if(type == 0){//一类弹窗，只弹出提示层
			oPopBox.style.transform = "scale("+num+")";
			oPopBox.children[0].innerText = txt;
		}else{//一类弹窗，弹出删除警告层
			oDelPop.style.transform = "scale("+num+")";
			oDelPop.children[0].children[0].innerText = txt;
		}
	}
	
	// 删除提示弹窗
	function confirmPop(site){
		// 确定删除
		oConfBtn[0].onclick = function(){
			oPop(1,0,"");
			// 点击确定删除结构时，删除的动作要比弹窗晚.2s(时间看效果定)，不然看不到删的那个动态
			setTimeout(function(){
				oUl.removeChild(site);
				var nLilength = oUl.children.length;
				if(nLilength == 0){
					oNoData.style.display = "block";
				}
			},200);
		}
		// 取消删除
		oConfBtn[1].onclick = function(){
			oPop(1,0,"")
		}
	}
	
	
}

