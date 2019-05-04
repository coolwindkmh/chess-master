/*타일 하나 만들는 객체*/
class Stage{
	constructor(container, j, i, color1, color2){
		this.i=i;
		this.j=j;
		this.div=document.createElement("div");
		this.div.style.width=100+"px";
		this.div.style.height=100+"px";
		this.div.style.zIndex = "1";
		this.div.style.position="relative";
		
		this.div.style.float="left";
		this.div.id=this.j+""+this.i;
		if(j%2==0){
			if(i%2==0){
				
				this.div.style.background=color1;
			}else{
				this.div.style.background=color2;
			}
		}else{
			if(i%2==0){
				this.div.style.background=color2;
				
			}else{
				
				this.div.style.background=color1;
			}
		}
		container.appendChild(this.div);
	}
}

//punky #cba6d0  #77ffff