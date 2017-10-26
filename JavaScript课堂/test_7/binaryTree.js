/*
* 2017/10/26 create by guojufeng
* 具体源码分析见二叉树解析
*/

function BinaryTree(){
	// 创建一个根节点
	var Node = function(key){
		this.key = key;
		this.left = null;
		this.right = null;
	}
	// 开始构造二叉树 api
	var oRoot = null;//空的根节点
	this.startBinaryTree = function(key){//设置一个开始的接口方法
		var newNode = new Node(key);//每次执行都创建一个新的节点
		if(!(oRoot === null)){
			createBinary(oRoot,newNode);//第一个值以后的值,把他们当做新节点给了根的孩子们，让他们依次当爸爸妈妈。
		}else{
			oRoot = newNode;//把第一次创建的节点给了根。
		}
	};
	// 创造二叉树 函数
	var createBinary = function(node,newNode){//设置一个创造的方法
		if(node.key > newNode.key){//后边的新值比当前值小的话，放左边，否则放右边
			if(node.left === null){//左边有没有位置，没位置也放不下，没位置就在左边这里继续和左边的值判断，如果小于左边的值，放左边值的孩子层的左边，反之大就放右边
				node.left = newNode;
			}else{
				createBinary(node.left,newNode);
			}
		}else{
			if(node.right === null){
				node.right = newNode;
			}else{
				createBinary(node.right,newNode);
			}
		}
	};
	// 遍历二叉树的接口 api
	this.startTraversal = function(type,callback){
		if(type === "DLR"){
			console.log("前序遍历");
			prevTra(oRoot,callback);
		}else if(type === "LDR"){
			console.log("中序遍历");
			centerTra(oRoot,callback);//遍历要从oRoot开始，然后一层一层向下找，找到起点开始遍历
		}else if(type === "LRD"){
			console.log("后序遍历");
			backTra(oRoot,callback);
		}
	};
	// 遍历二叉树——前序遍历DLR
	var prevTra = function(node,callback){
			//前序遍历的顺序就是根左右，所以先node.key、再node.left、最后node.right
		if(!(node === null)){
			callback(node.key);
			prevTra(node.left,callback);
			prevTra(node.right,callback);
		}
	};
	// 遍历二叉树——中序遍历LDR
	// 中序排序最后得到的结果是可以按照顺序排列的。
	var centerTra = function(node,callback){
			//中序遍历的顺序就是左根右，所以先node.left、再node.key、最后node.right
		if(!(node === null)){
			centerTra(node.left,callback);
			callback(node.key);
			centerTra(node.right,callback);
		}
	};
	// 遍历二叉树——后序遍历LRD
	var backTra = function(node,callback){
			//后序遍历的顺序就是左右根，所以先node.left、再node.right、最后node.key
		if(!(node === null)){
			backTra(node.left,callback);
			backTra(node.right,callback);
			callback(node.key);
		}
	};
}