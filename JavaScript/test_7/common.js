window.onload = function(){
	var binaryTree = new BinaryTree();//引进二叉树
	var aTraversal = [];
	var arr = [1,63,7,2,54,3,8,44];
	arr.forEach(function(key){
		binaryTree.startBinaryTree(key);//构造二叉树
	});
	var callBack = function(key){
		console.log(key);
		aTraversal.push(key);
	}
	binaryTree.startTraversal(callBack);//遍历二叉树
	console.log(aTraversal);
}