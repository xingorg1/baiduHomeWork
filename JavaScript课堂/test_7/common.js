window.onload = function(){
	var binaryTree = new BinaryTree();//引进二叉树
	var oBtns = document.querySelectorAll("input[type='button']");
	var aTraversal = [];
	var arr = [1,3,7,2];
	var callBack = function(key){
		aTraversal.push(key);
	};
	var aDiv = document.querySelectorAll("div");
	console.log(aDiv)
	arr.forEach(function(key){
			binaryTree.startBinaryTree(key);//构造二叉树
	});
	// 点击按钮 执行函数
	oBtns[0].onclick = function(){
		binaryTree.startTraversal("DLR",callBack);//遍历二叉树
		console.log(aTraversal);
	};
	oBtns[1].onclick = function(){
		binaryTree.startTraversal("LDR",callBack);//遍历二叉树
		console.log(aTraversal);
	};
	oBtns[2].onclick = function(){
		binaryTree.startTraversal("LRD",callBack);//遍历二叉树
		console.log(aTraversal);
	};
}