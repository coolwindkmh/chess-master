class ChessPieces{
	constructor(container){
	
	
	this.img=document.createElement("img");
	this.img.src="./img/chess-queen.png";
	this.img.style.width=100+"px";
	this.img.style.height=100+"px";
	this.img.style.left=0+"px";
	this.img.style.top=0+"px";
	this.img.style.float="left";
	this.img.style.zIndex = "2";
	this.img.style.position="absolute";
	

	container.appendChild(this.img);
	
	
	}
}	