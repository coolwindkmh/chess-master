class Pawn{
	constructor(team, name, stageArray, index, flag, src){
		this.name=name;	
		this.stageArray=stageArray;
		this.spanArray=[];
		this.img=document.createElement("img");
		this.img.src=src;
		this.img.style.width=100+"px";
		this.img.style.height=100+"px";
		this.img.style.left=0+"px";
		this.img.style.top=0+"px";
		this.img.style.float="left";
		this.img.style.zIndex = "2";
		this.img.style.position="absolute";
		this.img.id=team;
		this.firstTime=0;
		this.flag=flag; //턴을 위한 true false
		this.stageArray[index].div.appendChild(this.img);
		this.img.name=0;

		this.img.addEventListener("click",()=>{
			if(this.flag){
				this.parenId=this.img.parentNode.id;
				this.preP=this.img.parentNode // undo를 위한 이미지가 전에 있던 div
				
				if(spanArray2.length==0){				
					createSpan(this.name, this.preP, this.img, this.parenId, index);
				}else{
					removeSpan();				
				}
			}
		});	
	}
}	