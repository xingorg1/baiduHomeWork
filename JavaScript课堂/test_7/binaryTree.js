/*
* 2017/10/16 create by guojufeng
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
	this.startTraversal = function(callback){
		traversalBinary(oRoot,callback);//遍历要从oRoot开始，然后一层一层向下找，找到起点开始遍历
	}
	// 遍历二叉树——中序遍历
	var traversalBinary = function(node,callback){
		if(!(node === null)){
			traversalBinary(node.left,callback);//中序遍历的书序就是左根右，所以先node.left、再node.key、最后node.right
			callback(node.key);//得到当前遍历的值然后当参数传给callback函数，然后。看自己的需求，遍历到当前值时自己需要什么操作就写在callback里
			traversalBinary(node.right,callback);
		}
	}
}