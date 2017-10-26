// 更换图片和标题
var heading = document.querySelector("h1");
var myImg = document.querySelector("img");
myImg.onclick = function(){
	heading.innerText = "点击图片修改图片"
	var myImgSrc = myImg.getAttribute("src");
	// console.log(myImgSrc);
	var oldSrc = "images/firefox-icon.png";
	var newSrc = "images/firefox-icon2.png";
	if(myImgSrc == oldSrc){
		myImg.setAttribute("src",newSrc)
	}else{
		myImg.setAttribute("src",oldSrc)
	}
}
// 点击按钮更换名字

var myBtn = document.querySelector("button");
function changeUser(){
	var myName = prompt("请输入你的名字");
	// 调用一个叫 localStorage 的API， 它允许我们将数据存储在浏览器里以供后续调用。我们使用 localStorage 的 setItem() 函数来创建并将数据存储在 'name'参数里，然后将其值设置为包含用户输入的姓名的 myName 变量。
	localStorage.setItem('name',myName);
	if(myName){
		//  最后，我们将标题的 innerHTML(这里我自己改进成用了innerText，因为只更改了文本) 属性设置成加上用户姓名的字符串。
		heading.innerText = "Hello " + myName + " !,Welcome."
	}else{
		heading.innerText = "Hello " + "newbody" + " !,Welcome."
	}
}
// 这段代码首先用一个非运算符（逻辑非）来检查 name 数据是否存在。如果不存在， setUserName() 函数就会运行来创建它。如果存在（比如用户在之前创建过） 我们通过 getItem()调用存储过的 name 然后将 innerHTML 设置为加上用户姓名的字符串，就像我们在 setUserName()里做的一样。
if(!localStorage.getItem("name")){
	changeUser();
}else{
	var loaclName = localStorage.getItem("name");
	heading.innerText = "Hello " + loaclName + " !,Welcome."
}
// 最后，将下面的 onclick 事件处理器绑定到 按钮 上，这样当我们点击时， setUserName() 函数就会运行。这允许用户在任何想要的时候通过点击按钮来设置新的 name 。
myBtn.onclick = changeUser();
// localStorage 里的信息会持续到网站关闭，