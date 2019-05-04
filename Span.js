class Span{
	constructor(name, stageObj, img, parenId, pawnArrayB, pawnArrayW, index){
		//this.container=container;
		this.img=img;
		this.move=[];///// span값을 입력할 div객체 저장
		this.pawnArrayB=pawnArrayB; //폰 처음 움직임을 제어하기 위한 폰객체를 담은 배열
		this.pawnArrayW=pawnArrayW; //폰 처음 움직임을 제어하기 위한 폰객체를 담은 배열
		this.parenId=parenId;
		this.stageObj=stageObj; // undo를 위한 이미지가 전에 있던 div
		this.indexB=index-8;//폰 처음 움직임을 제어하기 위한 변수
		this.indexW=index-48;
		this.x=parseInt(this.parenId.substring(1));	///아이디값을 하나하나 잘라서 숫자로 얻어옴   ex  id:18 >>> 1 리턴  현재이미지의 x좌표
		this.y=parseInt(this.parenId.substring(0,1));///아이디값을 하나하나 잘라서 숫자로 얻어옴   ex  id:18 >>> 8 리턴 현재이미지의 y좌표

		if(name=="KING"){ // 완성
			if(this.img.id=="BLACK"){
				this.SW=0; // 남서방향
				this.NW=0; // 북서방향
				this.NE=0; // 북동방향
				this.SE=0; // 남동방향
				for(var i=this.x;i<(this.x+1);i++){
					this.SE++;
					this.makeSpan(this.stageObj, this.img);					
					for(var a=0;a<stageArray.length;a++){
						if(stageArray[a].div.id==(this.y+this.SE)+""+(i+1)){
							if(stageArray[a].div.hasChildNodes()){ // div 자식이 어떤 노드가 있는지 확인 자식 있으면 span 생성 안함
								var node=stageArray[a].div.firstChild;								
								if(node.id=="BLACK"){							
								}else if(node.id=="WHITE"){
									stageArray[a].div.appendChild(this.span); //div에 span 추가						
									spanArray.push(stageArray[a]);
									spanArray2.push(this.span);								
								}
							}else{
								stageArray[a].div.appendChild(this.span); //div에 span 추가							
								spanArray2.push(this.span)
								spanArray.push(stageArray[a]);
							}
						}
					}				
				}			
				for(var i=this.x;i>(this.x-1);i--){
					this.SW++;
					this.makeSpan(this.stageObj, this.img);					
					for(var a=0;a<stageArray.length;a++){		
						if(stageArray[a].div.id==(this.y+this.SW)+""+(i-1)){
							if(stageArray[a].div.hasChildNodes()){	
								var node=stageArray[a].div.firstChild;								
								if(node.id=="BLACK"){															
								}else if(node.id=="WHITE"){
									stageArray[a].div.appendChild(this.span); //div에 span 추가						
									spanArray.push(stageArray[a]);
									spanArray2.push(this.span);								
								}															
							}else{
								stageArray[a].div.appendChild(this.span); //div에 span 추가		
								spanArray2.push(this.span)
								spanArray.push(stageArray[a]);
							}
						}
					}
				}			
				for(var i=this.x;i<(this.x+1);i++){
					this.NE--;
					this.makeSpan(this.stageObj, this.img);					
					for(var a=0;a<stageArray.length;a++){					
						if(stageArray[a].div.id==(this.y+this.NE)+""+(i+1)){
							if(stageArray[a].div.hasChildNodes()){ // div 자식이 어떤 노드가 있는지 확인 자식 있으면 span 생성 안함		
								var node=stageArray[a].div.firstChild;								
								if(node.id=="BLACK"){																
								}else if(node.id=="WHITE"){
									stageArray[a].div.appendChild(this.span); //div에 span 추가						
									spanArray.push(stageArray[a]);
									spanArray2.push(this.span);							
								}														
							}else{
								stageArray[a].div.appendChild(this.span); //div에 span 추가				
								spanArray2.push(this.span)
								spanArray.push(stageArray[a]);
							}
						}
					}				
				}			
				for(var i=this.x;i>(this.x-1);i--){
					this.NW--;
					this.makeSpan(this.stageObj, this.img);				
					for(var a=0;a<stageArray.length;a++){		
						if(stageArray[a].div.id==(this.y+this.NW)+""+(i-1)){
							if(stageArray[a].div.hasChildNodes()){	
								var node=stageArray[a].div.firstChild;								
								if(node.id=="BLACK"){														
								}else if(node.id=="WHITE"){
									stageArray[a].div.appendChild(this.span); //div에 span 추가						
									spanArray.push(stageArray[a]);
									spanArray2.push(this.span);								
								}																
							}else{
								stageArray[a].div.appendChild(this.span); //div에 span 추가				
								spanArray2.push(this.span)
								spanArray.push(stageArray[a]);
							}
						}
					}
				}
				for(var i=this.x;i<(this.x+1);i++){
					this.makeSpan(this.stageObj, this.img);					
					for(var a=0;a<stageArray.length;a++){
						if(stageArray[a].div.id==this.y+""+(i+1)){
							if(stageArray[a].div.hasChildNodes()){ // div 자식이 어떤 노드가 있는지 확인 자식 있으면 span 생성 안함
								var node=stageArray[a].div.firstChild;								
								if(node.id=="BLACK"){							
								}else if(node.id=="WHITE"){
									stageArray[a].div.appendChild(this.span); //div에 span 추가						
									spanArray.push(stageArray[a]);
									spanArray2.push(this.span);								
								}
							}else{
								stageArray[a].div.appendChild(this.span); //div에 span 추가							
								spanArray2.push(this.span)
								spanArray.push(stageArray[a]);
							}
						}
					}				
				}
				for(var i=this.x;i>(this.x-1);i--){
					this.makeSpan(this.stageObj, this.img);					
					for(var a=0;a<stageArray.length;a++){		
						if(stageArray[a].div.id==this.y+""+(i-1)){
							if(stageArray[a].div.hasChildNodes()){	
								var node=stageArray[a].div.firstChild;								
								if(node.id=="BLACK"){														
								}else if(node.id=="WHITE"){
									stageArray[a].div.appendChild(this.span); //div에 span 추가						
									spanArray.push(stageArray[a]);
									spanArray2.push(this.span);								
								}															
							}else{
								stageArray[a].div.appendChild(this.span); //div에 span 추가		
								spanArray2.push(this.span)
								spanArray.push(stageArray[a]);
							}
						}
					}
				}
				for(var i=this.y;i<(this.y+1);i++){
					this.makeSpan(this.stageObj, this.img);					
					for(var a=0;a<stageArray.length;a++){
						if(stageArray[a].div.id==(i+1)+""+this.x){
							if(stageArray[a].div.hasChildNodes()){ // div 자식이 어떤 노드가 있는지 확인 자식 있으면 span 생성 안함		
								var node=stageArray[a].div.firstChild;								
								if(node.id=="BLACK"){														
								}else if(node.id=="WHITE"){
									stageArray[a].div.appendChild(this.span); //div에 span 추가						
									spanArray.push(stageArray[a]);
									spanArray2.push(this.span);								
								}														
							}else{
								stageArray[a].div.appendChild(this.span); //div에 span 추가				
								spanArray2.push(this.span)
								spanArray.push(stageArray[a]);
							}
						}
					}				
				}
				for(var i=this.y;i>(this.y-1);i--){
					this.makeSpan(this.stageObj, this.img);				
					for(var a=0;a<stageArray.length;a++){		
						if(stageArray[a].div.id==(i-1)+""+this.x){
							if(stageArray[a].div.hasChildNodes()){	
								var node=stageArray[a].div.firstChild;								
								if(node.id=="BLACK"){															
								}else if(node.id=="WHITE"){
									stageArray[a].div.appendChild(this.span); //div에 span 추가						
									spanArray.push(stageArray[a]);
									spanArray2.push(this.span);
								}																
							}else{
								stageArray[a].div.appendChild(this.span); //div에 span 추가				
								spanArray2.push(this.span)
								spanArray.push(stageArray[a]);
							}
						}
					}
				}
			}
			if(this.img.id=="WHITE"){
				this.SW=0; // 남서방향
				this.NW=0; // 북서방향
				this.NE=0; // 북동방향
				this.SE=0; // 남동방향
				for(var i=this.x;i<(this.x+1);i++){
					this.SE++;
					this.makeSpan(this.stageObj, this.img);					
					for(var a=0;a<stageArray.length;a++){
						if(stageArray[a].div.id==(this.y+this.SE)+""+(i+1)){
							if(stageArray[a].div.hasChildNodes()){ // div 자식이 어떤 노드가 있는지 확인 자식 있으면 span 생성 안함
								var node=stageArray[a].div.firstChild;								
								if(node.id=="WHITE"){							
								}else if(node.id=="BLACK"){
									stageArray[a].div.appendChild(this.span); //div에 span 추가						
									spanArray.push(stageArray[a]);
									spanArray2.push(this.span);								
								}
							}else{
								stageArray[a].div.appendChild(this.span); //div에 span 추가							
								spanArray2.push(this.span)
								spanArray.push(stageArray[a]);
							}
						}
					}				
				}			
				for(var i=this.x;i>(this.x-1);i--){
					this.SW++;
					this.makeSpan(this.stageObj, this.img);					
					for(var a=0;a<stageArray.length;a++){		
						if(stageArray[a].div.id==(this.y+this.SW)+""+(i-1)){
							if(stageArray[a].div.hasChildNodes()){	
								var node=stageArray[a].div.firstChild;								
								if(node.id=="WHITE"){															
								}else if(node.id=="BLACK"){
									stageArray[a].div.appendChild(this.span); //div에 span 추가						
									spanArray.push(stageArray[a]);
									spanArray2.push(this.span);								
								}															
							}else{
								stageArray[a].div.appendChild(this.span); //div에 span 추가		
								spanArray2.push(this.span)
								spanArray.push(stageArray[a]);
							}
						}
					}
				}			
				for(var i=this.x;i<(this.x+1);i++){
					this.NE--;
					this.makeSpan(this.stageObj, this.img);					
					for(var a=0;a<stageArray.length;a++){					
						if(stageArray[a].div.id==(this.y+this.NE)+""+(i+1)){
							if(stageArray[a].div.hasChildNodes()){ // div 자식이 어떤 노드가 있는지 확인 자식 있으면 span 생성 안함		
								var node=stageArray[a].div.firstChild;								
								if(node.id=="WHITE"){																
								}else if(node.id=="BLACK"){
									stageArray[a].div.appendChild(this.span); //div에 span 추가						
									spanArray.push(stageArray[a]);
									spanArray2.push(this.span);							
								}														
							}else{
								stageArray[a].div.appendChild(this.span); //div에 span 추가				
								spanArray2.push(this.span)
								spanArray.push(stageArray[a]);
							}
						}
					}				
				}			
				for(var i=this.x;i>(this.x-1);i--){
					this.NW--;
					this.makeSpan(this.stageObj, this.img);				
					for(var a=0;a<stageArray.length;a++){		
						if(stageArray[a].div.id==(this.y+this.NW)+""+(i-1)){
							if(stageArray[a].div.hasChildNodes()){	
								var node=stageArray[a].div.firstChild;								
								if(node.id=="WHITE"){														
								}else if(node.id=="BLACK"){
									stageArray[a].div.appendChild(this.span); //div에 span 추가						
									spanArray.push(stageArray[a]);
									spanArray2.push(this.span);								
								}																
							}else{
								stageArray[a].div.appendChild(this.span); //div에 span 추가				
								spanArray2.push(this.span)
								spanArray.push(stageArray[a]);
							}
						}
					}
				}
				for(var i=this.x;i<(this.x+1);i++){
					this.makeSpan(this.stageObj, this.img);					
					for(var a=0;a<stageArray.length;a++){
						if(stageArray[a].div.id==this.y+""+(i+1)){
							if(stageArray[a].div.hasChildNodes()){ // div 자식이 어떤 노드가 있는지 확인 자식 있으면 span 생성 안함
								var node=stageArray[a].div.firstChild;								
								if(node.id=="WHITE"){							
								}else if(node.id=="BLACK"){
									stageArray[a].div.appendChild(this.span); //div에 span 추가						
									spanArray.push(stageArray[a]);
									spanArray2.push(this.span);								
								}
							}else{
								stageArray[a].div.appendChild(this.span); //div에 span 추가							
								spanArray2.push(this.span)
								spanArray.push(stageArray[a]);
							}
						}
					}				
				}
				for(var i=this.x;i>(this.x-1);i--){
					this.makeSpan(this.stageObj, this.img);					
					for(var a=0;a<stageArray.length;a++){		
						if(stageArray[a].div.id==this.y+""+(i-1)){
							if(stageArray[a].div.hasChildNodes()){	
								var node=stageArray[a].div.firstChild;								
								if(node.id=="WHITE"){														
								}else if(node.id=="BLACK"){
									stageArray[a].div.appendChild(this.span); //div에 span 추가						
									spanArray.push(stageArray[a]);
									spanArray2.push(this.span);								
								}															
							}else{
								stageArray[a].div.appendChild(this.span); //div에 span 추가		
								spanArray2.push(this.span)
								spanArray.push(stageArray[a]);
							}
						}
					}
				}
				for(var i=this.y;i<(this.y+1);i++){
					this.makeSpan(this.stageObj, this.img);					
					for(var a=0;a<stageArray.length;a++){
						if(stageArray[a].div.id==(i+1)+""+this.x){
							if(stageArray[a].div.hasChildNodes()){ // div 자식이 어떤 노드가 있는지 확인 자식 있으면 span 생성 안함		
								var node=stageArray[a].div.firstChild;								
								if(node.id=="WHITE"){														
								}else if(node.id=="BLACK"){
									stageArray[a].div.appendChild(this.span); //div에 span 추가						
									spanArray.push(stageArray[a]);
									spanArray2.push(this.span);								
								}														
							}else{
								stageArray[a].div.appendChild(this.span); //div에 span 추가				
								spanArray2.push(this.span)
								spanArray.push(stageArray[a]);
							}
						}
					}				
				}
				for(var i=this.y;i>(this.y-1);i--){
					this.makeSpan(this.stageObj, this.img);				
					for(var a=0;a<stageArray.length;a++){		
						if(stageArray[a].div.id==(i-1)+""+this.x){
							if(stageArray[a].div.hasChildNodes()){	
								var node=stageArray[a].div.firstChild;								
								if(node.id=="WHITE"){															
								}else if(node.id=="BLACK"){
									stageArray[a].div.appendChild(this.span); //div에 span 추가						
									spanArray.push(stageArray[a]);
									spanArray2.push(this.span);
								}																
							}else{
								stageArray[a].div.appendChild(this.span); //div에 span 추가				
								spanArray2.push(this.span)
								spanArray.push(stageArray[a]);
							}
						}
					}
				}
			}
		}	
		if(name=="ROK"){ // 완성
			if(this.img.id=="BLACK"){
				for(var i=this.x+1;i<9;i++){
					this.makeSpan(this.stageObj, this.img);					
					for(var a=0;a<stageArray.length;a++){
						if(stageArray[a].div.id==this.y+""+i){
							if(stageArray[a].div.hasChildNodes()){ // div 자식이 어떤 노드가 있는지 확인 자식 있으면 span 생성 안함
								var node=stageArray[a].div.firstChild;								
								if(node.id=="BLACK"){
									i=9;
								}else if(node.id=="WHITE"){
									stageArray[a].div.appendChild(this.span); //div에 span 추가						
									spanArray.push(stageArray[a]);
									spanArray2.push(this.span);	
									i=9;
								}
							}else{
								stageArray[a].div.appendChild(this.span); //div에 span 추가							
								spanArray2.push(this.span);	
								spanArray.push(stageArray[a]);
							}
						}
					}				
				}
				for(var i=this.x-1;i>0;i--){
					this.makeSpan(this.stageObj, this.img);					
					for(var a=0;a<stageArray.length;a++){		
						if(stageArray[a].div.id==this.y+""+i){
							if(stageArray[a].div.hasChildNodes()){	
								var node=stageArray[a].div.firstChild;								
								if(node.id=="BLACK"){
									i=0;
								}else if(node.id=="WHITE"){
									stageArray[a].div.appendChild(this.span); //div에 span 추가						
									spanArray.push(stageArray[a]);
									spanArray2.push(this.span);
									i=0;
								}															
							}else{
								stageArray[a].div.appendChild(this.span); //div에 span 추가		
								spanArray2.push(this.span);	
								spanArray.push(stageArray[a]);
							}
						}
					}
				}
				for(var i=this.y+1;i<9;i++){
					this.makeSpan(this.stageObj, this.img);					
					for(var a=0;a<stageArray.length;a++){
						if(stageArray[a].div.id==i+""+this.x){
							if(stageArray[a].div.hasChildNodes()){ // div 자식이 어떤 노드가 있는지 확인 자식 있으면 span 생성 안함		
								var node=stageArray[a].div.firstChild;								
								if(node.id=="BLACK"){
									i=9;
								}else if(node.id=="WHITE"){
									stageArray[a].div.appendChild(this.span); //div에 span 추가						
									spanArray.push(stageArray[a]);
									spanArray2.push(this.span);
									i=9;
								}															
							}else{
								stageArray[a].div.appendChild(this.span); //div에 span 추가				
								spanArray2.push(this.span);	
								spanArray.push(stageArray[a]);
							}
						}
					}				
				}
				for(var i=this.y-1;i>0;i--){
					this.makeSpan(this.stageObj, this.img);				
					for(var a=0;a<stageArray.length;a++){		
						if(stageArray[a].div.id==i+""+this.x){
							if(stageArray[a].div.hasChildNodes()){	
								var node=stageArray[a].div.firstChild;								
								if(node.id=="BLACK"){
									i=0;
								}else if(node.id=="WHITE"){
									stageArray[a].div.appendChild(this.span); //div에 span 추가						
									spanArray.push(stageArray[a]);
									spanArray2.push(this.span);
									i=0;
								}																
							}else{
								stageArray[a].div.appendChild(this.span); //div에 span 추가				
								spanArray2.push(this.span);	
								spanArray.push(stageArray[a]);
							}
						}
					}
				}
			}
			if(this.img.id=="WHITE"){
				for(var i=this.x+1;i<9;i++){
					this.makeSpan(this.stageObj, this.img);					
					for(var a=0;a<stageArray.length;a++){
						if(stageArray[a].div.id==this.y+""+i){
							if(stageArray[a].div.hasChildNodes()){ // div 자식이 어떤 노드가 있는지 확인 자식 있으면 span 생성 안함
								var node=stageArray[a].div.firstChild;								
								if(node.id=="WHITE"){
									i=9;
								}else if(node.id=="BLACK"){
									stageArray[a].div.appendChild(this.span); //div에 span 추가						
									spanArray.push(stageArray[a]);
									spanArray2.push(this.span);	
									i=9;
								}
							}else{
								stageArray[a].div.appendChild(this.span); //div에 span 추가							
								spanArray2.push(this.span);	
								spanArray.push(stageArray[a]);
							}
						}
					}				
				}
				for(var i=this.x-1;i>0;i--){
					this.makeSpan(this.stageObj, this.img);					
					for(var a=0;a<stageArray.length;a++){		
						if(stageArray[a].div.id==this.y+""+i){
							if(stageArray[a].div.hasChildNodes()){	
								var node=stageArray[a].div.firstChild;								
								if(node.id=="WHITE"){
									i=0;
								}else if(node.id=="BLACK"){
									stageArray[a].div.appendChild(this.span); //div에 span 추가						
									spanArray.push(stageArray[a]);
									spanArray2.push(this.span);
									i=0;
								}															
							}else{
								stageArray[a].div.appendChild(this.span); //div에 span 추가		
								spanArray2.push(this.span);	
								spanArray.push(stageArray[a]);
							}
						}
					}
				}
				for(var i=this.y+1;i<9;i++){
					this.makeSpan(this.stageObj, this.img);					
					for(var a=0;a<stageArray.length;a++){
						if(stageArray[a].div.id==i+""+this.x){
							if(stageArray[a].div.hasChildNodes()){ // div 자식이 어떤 노드가 있는지 확인 자식 있으면 span 생성 안함		
								var node=stageArray[a].div.firstChild;								
								if(node.id=="WHITE"){
									i=9;
								}else if(node.id=="BLACK"){
									stageArray[a].div.appendChild(this.span); //div에 span 추가						
									spanArray.push(stageArray[a]);
									spanArray2.push(this.span);
									i=9;
								}															
							}else{
								stageArray[a].div.appendChild(this.span); //div에 span 추가				
								spanArray2.push(this.span);	
								spanArray.push(stageArray[a]);
							}
						}
					}				
				}
				for(var i=this.y-1;i>0;i--){
					this.makeSpan(this.stageObj, this.img);				
					for(var a=0;a<stageArray.length;a++){		
						if(stageArray[a].div.id==i+""+this.x){
							if(stageArray[a].div.hasChildNodes()){	
								var node=stageArray[a].div.firstChild;								
								if(node.id=="WHITE"){
									i=0;
								}else if(node.id=="BLACK"){
									stageArray[a].div.appendChild(this.span); //div에 span 추가						
									spanArray.push(stageArray[a]);
									spanArray2.push(this.span);
									i=0;
								}																
							}else{
								stageArray[a].div.appendChild(this.span); //div에 span 추가				
								spanArray2.push(this.span);	
								spanArray.push(stageArray[a]);
							}
						}
					}
				}
			}
		}
		if(name=="QUEEN"){ //완성		
			if(this.img.id=="BLACK"){
				this.SW=0; // 남서방향
				this.NW=0; // 북서방향
				this.NE=0; // 북동방향
				this.SE=0; // 남동방향
				for(var i=this.x;i<9;i++){
					this.SE++;
					this.makeSpan(this.stageObj, this.img);					
					for(var a=0;a<stageArray.length;a++){
						if(stageArray[a].div.id==(this.y+this.SE)+""+(i+1)){
							if(stageArray[a].div.hasChildNodes()){ // div 자식이 어떤 노드가 있는지 확인 자식 있으면 span 생성 안함
								var node=stageArray[a].div.firstChild;								
								if(node.id=="BLACK"){
									i=9;
								}else if(node.id=="WHITE"){
									stageArray[a].div.appendChild(this.span); //div에 span 추가						
									spanArray.push(stageArray[a]);
									spanArray2.push(this.span);
								
									i=9;
								}
							}else{
								stageArray[a].div.appendChild(this.span); //div에 span 추가
								spanArray.push(stageArray[a]);
								spanArray2.push(this.span);
							
							}
						}
					}				
				}			
				for(var i=this.x;i>0;i--){
					this.SW++;
					this.makeSpan(this.stageObj, this.img);					
					for(var a=0;a<stageArray.length;a++){		
						if(stageArray[a].div.id==(this.y+this.SW)+""+(i-1)){
							if(stageArray[a].div.hasChildNodes()){	
								var node=stageArray[a].div.firstChild;								
								if(node.id=="BLACK"){
									i=0;								
								}else if(node.id=="WHITE"){
									stageArray[a].div.appendChild(this.span); //div에 span 추가														
									spanArray.push(stageArray[a]);
									spanArray2.push(this.span);
									i=0;
								}															
							}else{
								stageArray[a].div.appendChild(this.span); //div에 span 추가		
								spanArray.push(stageArray[a]);
								spanArray2.push(this.span);
							}
						}
					}
				}						
				for(var i=this.x;i<9;i++){
					this.NE--;
					this.makeSpan(this.stageObj, this.img);					
					for(var a=0;a<stageArray.length;a++){
						
						if(stageArray[a].div.id==(this.y+this.NE)+""+(i+1)){
							if(stageArray[a].div.hasChildNodes()){ // div 자식이 어떤 노드가 있는지 확인 자식 있으면 span 생성 안함		
								var node=stageArray[a].div.firstChild;								
								if(node.id=="BLACK"){
									i=9;								
								}else if(node.id=="WHITE"){
									stageArray[a].div.appendChild(this.span); //div에 span 추가						
									spanArray2.push(this.span);
									spanArray.push(stageArray[a]);
									
									i=9;
								}								
								
							}else{
								stageArray[a].div.appendChild(this.span); //div에 span 추가				
								spanArray2.push(this.span);
								spanArray.push(stageArray[a]);
							}
						}
					}				
				}			
				for(var i=this.x;i>0;i--){
					this.NW--;
					this.makeSpan(this.stageObj, this.img);				
					for(var a=0;a<stageArray.length;a++){		
						if(stageArray[a].div.id==(this.y+this.NW)+""+(i-1)){
							if(stageArray[a].div.hasChildNodes()){	
								var node=stageArray[a].div.firstChild;								
								if(node.id=="BLACK"){
									i=0;								
								}else if(node.id=="WHITE"){
									stageArray[a].div.appendChild(this.span); //div에 span 추가						
									spanArray2.push(this.span);
									spanArray.push(stageArray[a]);
									
									i=0;
								}									
								
							}else{
								stageArray[a].div.appendChild(this.span); //div에 span 추가				
								spanArray2.push(this.span);
								spanArray.push(stageArray[a]);
							}
						}
					}
				}
				for(var i=this.x+1;i<9;i++){
					this.makeSpan(this.stageObj, this.img);					
					for(var a=0;a<stageArray.length;a++){
						if(stageArray[a].div.id==this.y+""+i){
							if(stageArray[a].div.hasChildNodes()){ // div 자식이 어떤 노드가 있는지 확인 자식 있으면 span 생성 안함
								var node=stageArray[a].div.firstChild;								
								if(node.id=="BLACK"){
									i=9;
								}else if(node.id=="WHITE"){
									stageArray[a].div.appendChild(this.span); //div에 span 추가						
									spanArray2.push(this.span);
									spanArray.push(stageArray[a]);
									
									i=9;
								}
							}else{
								stageArray[a].div.appendChild(this.span); //div에 span 추가							
								spanArray2.push(this.span);
								spanArray.push(stageArray[a]);
							}
						}
					}				
				}
				for(var i=this.x-1;i>0;i--){
					this.makeSpan(this.stageObj, this.img);					
					for(var a=0;a<stageArray.length;a++){		
						if(stageArray[a].div.id==this.y+""+i){
							if(stageArray[a].div.hasChildNodes()){	
								var node=stageArray[a].div.firstChild;								
								if(node.id=="BLACK"){
									i=0;								
								}else if(node.id=="WHITE"){
									stageArray[a].div.appendChild(this.span); //div에 span 추가						
									spanArray2.push(this.span);
									spanArray.push(stageArray[a]);
									
									i=0;
								}															
							}else{
								stageArray[a].div.appendChild(this.span); //div에 span 추가		
								spanArray2.push(this.span);
								spanArray.push(stageArray[a]);
							}
						}
					}
				}
				for(var i=this.y+1;i<9;i++){
					this.makeSpan(this.stageObj, this.img);					
					for(var a=0;a<stageArray.length;a++){
						if(stageArray[a].div.id==i+""+this.x){
							if(stageArray[a].div.hasChildNodes()){ // div 자식이 어떤 노드가 있는지 확인 자식 있으면 span 생성 안함		
								var node=stageArray[a].div.firstChild;								
								if(node.id=="BLACK"){
									i=9;								
								}else if(node.id=="WHITE"){
									stageArray[a].div.appendChild(this.span); //div에 span 추가						
									spanArray2.push(this.span);
									spanArray.push(stageArray[a]);								
									i=9;
								}															
							}else{
								stageArray[a].div.appendChild(this.span); //div에 span 추가				
								spanArray2.push(this.span);
								spanArray.push(stageArray[a]);
							}
						}
					}				
				}
				for(var i=this.y-1;i>0;i--){
					this.makeSpan(this.stageObj, this.img);				
					for(var a=0;a<stageArray.length;a++){		
						if(stageArray[a].div.id==i+""+this.x){
							if(stageArray[a].div.hasChildNodes()){	
								var node=stageArray[a].div.firstChild;								
								if(node.id=="BLACK"){
									i=0;								
								}else if(node.id=="WHITE"){
									stageArray[a].div.appendChild(this.span); //div에 span 추가						
									spanArray2.push(this.span);
									spanArray.push(stageArray[a]);
									
									i=0;
								}									
								
							}else{
								stageArray[a].div.appendChild(this.span); //div에 span 추가				
								spanArray2.push(this.span);
								spanArray.push(stageArray[a]);
							}
						}
					}
				}
			}
			if(this.img.id=="WHITE"){
				this.SW=0; // 남서방향
				this.NW=0; // 북서방향
				this.NE=0; // 북동방향
				this.SE=0; // 남동방향
				for(var i=this.x;i<9;i++){
					this.SE++;
					this.makeSpan(this.stageObj, this.img);					
					for(var a=0;a<stageArray.length;a++){
						if(stageArray[a].div.id==(this.y+this.SE)+""+(i+1)){
							if(stageArray[a].div.hasChildNodes()){ // div 자식이 어떤 노드가 있는지 확인 자식 있으면 span 생성 안함
								var node=stageArray[a].div.firstChild;								
								if(node.id=="WHITE"){
									i=9;
								}else if(node.id=="BLACK"){
									stageArray[a].div.appendChild(this.span); //div에 span 추가						
									spanArray.push(stageArray[a]);
									spanArray2.push(this.span);
									
									i=9;
								}
							}else{
								stageArray[a].div.appendChild(this.span); //div에 span 추가
								spanArray.push(stageArray[a]);
								spanArray2.push(this.span);
							
							}
						}
					}				
				}			
				for(var i=this.x;i>0;i--){
					this.SW++;
					this.makeSpan(this.stageObj, this.img);					
					for(var a=0;a<stageArray.length;a++){		
						if(stageArray[a].div.id==(this.y+this.SW)+""+(i-1)){
							if(stageArray[a].div.hasChildNodes()){	
								var node=stageArray[a].div.firstChild;								
								if(node.id=="WHITE"){
									i=0;								
								}else if(node.id=="BLACK"){
									stageArray[a].div.appendChild(this.span); //div에 span 추가														
									spanArray.push(stageArray[a]);
									spanArray2.push(this.span);
									i=0;
								}															
							}else{
								stageArray[a].div.appendChild(this.span); //div에 span 추가		
								spanArray.push(stageArray[a]);
								spanArray2.push(this.span);
							}
						}
					}
				}						
				for(var i=this.x;i<9;i++){
					this.NE--;
					this.makeSpan(this.stageObj, this.img);					
					for(var a=0;a<stageArray.length;a++){						
						if(stageArray[a].div.id==(this.y+this.NE)+""+(i+1)){
							if(stageArray[a].div.hasChildNodes()){ // div 자식이 어떤 노드가 있는지 확인 자식 있으면 span 생성 안함		
								var node=stageArray[a].div.firstChild;								
								if(node.id=="WHITE"){
									i=9;								
								}else if(node.id=="BLACK"){
									stageArray[a].div.appendChild(this.span); //div에 span 추가						
									spanArray2.push(this.span);
									spanArray.push(stageArray[a]);									
									i=9;
								}																
							}else{
								stageArray[a].div.appendChild(this.span); //div에 span 추가				
								spanArray2.push(this.span);
								spanArray.push(stageArray[a]);
							}
						}
					}				
				}			
				for(var i=this.x;i>0;i--){
					this.NW--;
					this.makeSpan(this.stageObj, this.img);				
					for(var a=0;a<stageArray.length;a++){		
						if(stageArray[a].div.id==(this.y+this.NW)+""+(i-1)){
							if(stageArray[a].div.hasChildNodes()){	
								var node=stageArray[a].div.firstChild;								
								if(node.id=="WHITE"){
									i=0;								
								}else if(node.id=="BLACK"){
									stageArray[a].div.appendChild(this.span); //div에 span 추가						
									spanArray2.push(this.span);
									spanArray.push(stageArray[a]);									
									i=0;
								}																	
							}else{
								stageArray[a].div.appendChild(this.span); //div에 span 추가				
								spanArray2.push(this.span);
								spanArray.push(stageArray[a]);
							}
						}
					}
				}
				for(var i=this.x+1;i<9;i++){
					this.makeSpan(this.stageObj, this.img);					
					for(var a=0;a<stageArray.length;a++){
						if(stageArray[a].div.id==this.y+""+i){
							if(stageArray[a].div.hasChildNodes()){ // div 자식이 어떤 노드가 있는지 확인 자식 있으면 span 생성 안함
								var node=stageArray[a].div.firstChild;								
								if(node.id=="WHITE"){
									i=9;
								}else if(node.id=="BLACK"){
									stageArray[a].div.appendChild(this.span); //div에 span 추가						
									spanArray2.push(this.span);
									spanArray.push(stageArray[a]);								
									i=9;
								}
							}else{
								stageArray[a].div.appendChild(this.span); //div에 span 추가							
								spanArray2.push(this.span);
								spanArray.push(stageArray[a]);
							}
						}
					}				
				}
				for(var i=this.x-1;i>0;i--){
					this.makeSpan(this.stageObj, this.img);					
					for(var a=0;a<stageArray.length;a++){		
						if(stageArray[a].div.id==this.y+""+i){
							if(stageArray[a].div.hasChildNodes()){	
								var node=stageArray[a].div.firstChild;								
								if(node.id=="WHITE"){
									i=0;								
								}else if(node.id=="BLACK"){
									stageArray[a].div.appendChild(this.span); //div에 span 추가						
									spanArray2.push(this.span);
									spanArray.push(stageArray[a]);									
									i=0;
								}															
							}else{
								stageArray[a].div.appendChild(this.span); //div에 span 추가		
								spanArray2.push(this.span);
								spanArray.push(stageArray[a]);
							}
						}
					}
				}
				for(var i=this.y+1;i<9;i++){
					this.makeSpan(this.stageObj, this.img);					
					for(var a=0;a<stageArray.length;a++){
						if(stageArray[a].div.id==i+""+this.x){
							if(stageArray[a].div.hasChildNodes()){ // div 자식이 어떤 노드가 있는지 확인 자식 있으면 span 생성 안함		
								var node=stageArray[a].div.firstChild;								
								if(node.id=="WHITE"){
									i=9;								
								}else if(node.id=="BLACK"){
									stageArray[a].div.appendChild(this.span); //div에 span 추가						
									spanArray2.push(this.span);
									spanArray.push(stageArray[a]);								
									i=9;
								}															
							}else{
								stageArray[a].div.appendChild(this.span); //div에 span 추가				
								spanArray2.push(this.span);
								spanArray.push(stageArray[a]);
							}
						}
					}				
				}
				for(var i=this.y-1;i>0;i--){
					this.makeSpan(this.stageObj, this.img);				
					for(var a=0;a<stageArray.length;a++){		
						if(stageArray[a].div.id==i+""+this.x){
							if(stageArray[a].div.hasChildNodes()){	
								var node=stageArray[a].div.firstChild;								
								if(node.id=="WHITE"){
									i=0;								
								}else if(node.id=="BLACK"){
									stageArray[a].div.appendChild(this.span); //div에 span 추가						
									spanArray2.push(this.span);
									spanArray.push(stageArray[a]);								
									i=0;
								}																	
							}else{
								stageArray[a].div.appendChild(this.span); //div에 span 추가				
								spanArray2.push(this.span);
								spanArray.push(stageArray[a]);
							}
						}
					}
				}
			}

		}
		if(name=="BISHOP"){ //완성
			if(this.img.id=="BLACK"){
				this.SW=0; // 남서방향
				this.NW=0; // 북서방향
				this.NE=0; // 북동방향
				this.SE=0; // 남동방향
				for(var i=this.x;i<9;i++){
					this.SE++;
					this.makeSpan(this.stageObj, this.img);					
					for(var a=0;a<stageArray.length;a++){
						if(stageArray[a].div.id==(this.y+this.SE)+""+(i+1)){
							if(stageArray[a].div.hasChildNodes()){ // div 자식이 어떤 노드가 있는지 확인 자식 있으면 span 생성 안함
								var node=stageArray[a].div.firstChild;								
								if(node.id=="BLACK"){
									i=9;
								}else if(node.id=="WHITE"){
									stageArray[a].div.appendChild(this.span); //div에 span 추가						
									spanArray2.push(this.span);
									spanArray.push(stageArray[a]);
									i=9;
								}
							}else{
								stageArray[a].div.appendChild(this.span); //div에 span 추가							
								spanArray2.push(this.span);
								spanArray.push(stageArray[a]);
							}
						}
					}				
				}			
				for(var i=this.x;i>0;i--){
					this.SW++;
					this.makeSpan(this.stageObj, this.img);					
					for(var a=0;a<stageArray.length;a++){		
						if(stageArray[a].div.id==(this.y+this.SW)+""+(i-1)){
							if(stageArray[a].div.hasChildNodes()){	
								var node=stageArray[a].div.firstChild;								
								if(node.id=="BLACK"){
									i=0;								
								}else if(node.id=="WHITE"){
									stageArray[a].div.appendChild(this.span); //div에 span 추가							
									spanArray2.push(this.span);
									spanArray.push(stageArray[a]);

									i=0;	
								}															
							}else{
								stageArray[a].div.appendChild(this.span); //div에 span 추가		
								spanArray2.push(this.span);
								spanArray.push(stageArray[a]);
							}
						}
					}
				}			
				for(var i=this.x;i<9;i++){
					this.NE--;
					this.makeSpan(this.stageObj, this.img);					
					for(var a=0;a<stageArray.length;a++){
						
						if(stageArray[a].div.id==(this.y+this.NE)+""+(i+1)){
							if(stageArray[a].div.hasChildNodes()){ // div 자식이 어떤 노드가 있는지 확인 자식 있으면 span 생성 안함		
								var node=stageArray[a].div.firstChild;								
								if(node.id=="BLACK"){
									i=9;								
								}else if(node.id=="WHITE"){
									stageArray[a].div.appendChild(this.span); //div에 span 추가
									spanArray2.push(this.span);
									spanArray.push(stageArray[a]);
									i=9;
								}								
								
							}else{
								stageArray[a].div.appendChild(this.span); //div에 span 추가				
								spanArray2.push(this.span);
								spanArray.push(stageArray[a]);
							}
						}
					}				
				}			
				for(var i=this.x;i>0;i--){
					this.NW--;
					this.makeSpan(this.stageObj, this.img);				
					for(var a=0;a<stageArray.length;a++){		
						if(stageArray[a].div.id==(this.y+this.NW)+""+(i-1)){
							if(stageArray[a].div.hasChildNodes()){	
								var node=stageArray[a].div.firstChild;								
								if(node.id=="BLACK"){
									i=0;								
								}else if(node.id=="WHITE"){
									stageArray[a].div.appendChild(this.span); //div에 span 추가						
									spanArray2.push(this.span);
									spanArray.push(stageArray[a]);							
									i=0;	
								}															
							}else{
								stageArray[a].div.appendChild(this.span); //div에 span 추가				
								spanArray2.push(this.span);
								spanArray.push(stageArray[a]);
							}
						}
					}
				}
			}
			if(this.img.id=="WHITE"){
				this.SW=0; // 남서방향
				this.NW=0; // 북서방향
				this.NE=0; // 북동방향
				this.SE=0; // 남동방향
				for(var i=this.x;i<9;i++){
					this.SE++;
					this.makeSpan(this.stageObj, this.img);					
					for(var a=0;a<stageArray.length;a++){
						if(stageArray[a].div.id==(this.y+this.SE)+""+(i+1)){
							if(stageArray[a].div.hasChildNodes()){ // div 자식이 어떤 노드가 있는지 확인 자식 있으면 span 생성 안함
								var node=stageArray[a].div.firstChild;								
								if(node.id=="WHITE"){
									i=9;
								}else if(node.id=="BLACK"){
									stageArray[a].div.appendChild(this.span); //div에 span 추가						
									spanArray2.push(this.span);
									spanArray.push(stageArray[a]);
									i=9;
								}
							}else{
								stageArray[a].div.appendChild(this.span); //div에 span 추가							
								spanArray2.push(this.span);
								spanArray.push(stageArray[a]);
							}
						}
					}				
				}			
				for(var i=this.x;i>0;i--){
					this.SW++;
					this.makeSpan(this.stageObj, this.img);					
					for(var a=0;a<stageArray.length;a++){		
						if(stageArray[a].div.id==(this.y+this.SW)+""+(i-1)){
							if(stageArray[a].div.hasChildNodes()){	
								var node=stageArray[a].div.firstChild;								
								if(node.id=="WHITE"){
									i=0;								
								}else if(node.id=="BLACK"){
									stageArray[a].div.appendChild(this.span); //div에 span 추가							
									spanArray2.push(this.span);
									spanArray.push(stageArray[a]);

									i=0;	
								}															
							}else{
								stageArray[a].div.appendChild(this.span); //div에 span 추가		
								spanArray2.push(this.span);
								spanArray.push(stageArray[a]);
							}
						}
					}
				}			
				for(var i=this.x;i<9;i++){
					this.NE--;
					this.makeSpan(this.stageObj, this.img);					
					for(var a=0;a<stageArray.length;a++){
						
						if(stageArray[a].div.id==(this.y+this.NE)+""+(i+1)){
							if(stageArray[a].div.hasChildNodes()){ // div 자식이 어떤 노드가 있는지 확인 자식 있으면 span 생성 안함		
								var node=stageArray[a].div.firstChild;								
								if(node.id=="WHITE"){
									i=9;								
								}else if(node.id=="BLACK"){
									stageArray[a].div.appendChild(this.span); //div에 span 추가
									spanArray2.push(this.span);
									spanArray.push(stageArray[a]);
									i=9;
								}								
								
							}else{
								stageArray[a].div.appendChild(this.span); //div에 span 추가				
								spanArray2.push(this.span);
								spanArray.push(stageArray[a]);
							}
						}
					}				
				}			
				for(var i=this.x;i>0;i--){
					this.NW--;
					this.makeSpan(this.stageObj, this.img);				
					for(var a=0;a<stageArray.length;a++){		
						if(stageArray[a].div.id==(this.y+this.NW)+""+(i-1)){
							if(stageArray[a].div.hasChildNodes()){	
								var node=stageArray[a].div.firstChild;								
								if(node.id=="WHITE"){
									i=0;								
								}else if(node.id=="BLACK"){
									stageArray[a].div.appendChild(this.span); //div에 span 추가						
									spanArray2.push(this.span);
									spanArray.push(stageArray[a]);							
									i=0;	
								}															
							}else{
								stageArray[a].div.appendChild(this.span); //div에 span 추가				
								spanArray2.push(this.span);
								spanArray.push(stageArray[a]);
							}
						}
					}
				}
			}
		}
		if(name=="PAWN"){ //  진짜 완성		
			if(this.img.id=="BLACK"){
				if(this.img.name==0){ //폰 처음 최대 2칸 이동할수있는 if문
					for(var i=1;i<3;i++){
			
						for(var a=0;a<stageArray.length;a++){
							if(stageArray[a].div.id==(this.y+i)+""+this.x){
								if(stageArray[a].div.hasChildNodes()){ // div 자식이 어떤 노드가 있는지 확인 자식 있으면 span 생성 안함		
									var node=stageArray[a].div.firstChild;								
									if(node.id=="BLACK" || node.id=="WHITE"){
										i+=2;									
									}
									break;
								}else if(stageArray[a+8].div.hasChildNodes()){
									var node=stageArray[a+8].div.firstChild;								
									if(node.id=="BLACK" || node.id=="WHITE"){
										i+=2;
									}
									this.makePawnSpan(this.stageObj, this.img, this.pawnArrayB[this.indexB]);
									stageArray[a].div.appendChild(this.span); //div에 span 추가		
									spanArray.push(stageArray[a]);
									spanArray2.push(this.span);
									break;
								}else{
									this.makePawnSpan(this.stageObj, this.img, this.pawnArrayB[this.indexB]);
									stageArray[a].div.appendChild(this.span); //div에 span 추가		
									spanArray.push(stageArray[a]);
									spanArray2.push(this.span);
								}							
							}
						}
					}
					for(var i=(this.y+1);i<(this.y+2);i++){
						for(var a=0;a<stageArray.length;a++){
							if(stageArray[a].div.id==i+""+(this.x-1)){
								if(stageArray[a].div.hasChildNodes()){ // div 자식이 어떤 노드가 있는지 확인 자식 있으면 span 생성 안함		
									var node=stageArray[a].div.firstChild;								
									if(node.id=="WHITE"){
										this.makePawnSpan(this.stageObj, this.img, this.pawnArrayB[this.indexB]);
										stageArray[a].div.appendChild(this.span); 				
										spanArray.push(stageArray[a]);	
										spanArray2.push(this.span);														
									}															
								}
							}
						}									
						for(var a=0;a<stageArray.length;a++){
							if(stageArray[a].div.id==i+""+(this.x+1)){
								if(stageArray[a].div.hasChildNodes()){ // div 자식이 어떤 노드가 있는지 확인 자식 있으면 span 생성 안함		
									var node=stageArray[a].div.firstChild;								
									if(node.id=="WHITE"){
										this.makePawnSpan(this.stageObj, this.img, this.pawnArrayB[this.indexB]);	
										stageArray[a].div.appendChild(this.span); 				
										spanArray.push(stageArray[a]);	
										spanArray2.push(this.span);
									}															
								}
							}
						}
					}
				}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
				else{ // 여기부터 처음 움직이고 그 다음부터한칸씩 이동하는 문장
					for(var i=this.y+1;i<(this.y+2);i++){
						this.makePawnSpan(this.stageObj, this.img, this.pawnArrayB[this.indexB]);					
						for(var a=0;a<stageArray.length;a++){
							if(stageArray[a].div.id==i+""+this.x){
								if(stageArray[a].div.hasChildNodes()){ // div 자식이 어떤 노드가 있는지 확인 자식 있으면 span 생성 안함		
									var node=stageArray[a].div.firstChild;								
									if(node.id=="BLACK"){		
									}															
								}else{
									stageArray[a].div.appendChild(this.span); //div에 span 추가				
									spanArray.push(stageArray[a]);
									spanArray2.push(this.span);
								}
							}
						}
						//대각선에 적이 있을때 span 생김									
						for(var a=0;a<stageArray.length;a++){
							if(stageArray[a].div.id==i+""+(this.x-1)){
								if(stageArray[a].div.hasChildNodes()){ // div 자식이 어떤 노드가 있는지 확인 자식 있으면 span 생성 안함		
									var node=stageArray[a].div.firstChild;								
									if(node.id=="WHITE"){
										this.makePawnSpan(this.stageObj, this.img, this.pawnArrayB[this.indexB]);
										stageArray[a].div.appendChild(this.span); 				
										spanArray.push(stageArray[a]);	
										spanArray2.push(this.span);														
									}															
								}
							}
						}									
						for(var a=0;a<stageArray.length;a++){
							if(stageArray[a].div.id==i+""+(this.x+1)){
								if(stageArray[a].div.hasChildNodes()){ // div 자식이 어떤 노드가 있는지 확인 자식 있으면 span 생성 안함		
									var node=stageArray[a].div.firstChild;								
									if(node.id=="WHITE"){
										this.makePawnSpan(this.stageObj, this.img, this.pawnArrayB[this.indexB]);	
										stageArray[a].div.appendChild(this.span); 				
										spanArray.push(stageArray[a]);	
										spanArray2.push(this.span);
									}															
								}
							}
						}									
					}				
				}
			}
			if(this.img.id=="WHITE"){
				if(this.img.name==0){ //폰 처음 최대 2칸 이동할수있는 if문
					for(var i=-1;i>-3;i--){		
						for(var a=0;a<stageArray.length;a++){
							if(stageArray[a].div.id==(this.y+i)+""+this.x){
								if(stageArray[a].div.hasChildNodes()){ // div 자식이 어떤 노드가 있는지 확인 자식 있으면 span 생성 안함		
									var node=stageArray[a].div.firstChild;								
									if(node.id=="BLACK" || node.id=="WHITE"){
										i-=2;									
									}
									break;
								}else if(stageArray[a-8].div.hasChildNodes()){
									var node=stageArray[a-8].div.firstChild;								
									if(node.id=="BLACK" || node.id=="WHITE"){
										i-=2;
									}
									this.makePawnSpan(this.stageObj, this.img, this.pawnArrayW[this.indexW]);
									stageArray[a].div.appendChild(this.span); //div에 span 추가		
									spanArray.push(stageArray[a]);
									spanArray2.push(this.span);
									break;
								}else{
									this.makePawnSpan(this.stageObj, this.img, this.pawnArrayW[this.indexW]);
									stageArray[a].div.appendChild(this.span); //div에 span 추가		
									spanArray.push(stageArray[a]);
									spanArray2.push(this.span);
								}							
							}
						}
					}
					for(var i=(this.y-1);i>(this.y-2);i--){
						for(var a=0;a<stageArray.length;a++){
							if(stageArray[a].div.id==i+""+(this.x-1)){
								if(stageArray[a].div.hasChildNodes()){ // div 자식이 어떤 노드가 있는지 확인 자식 있으면 span 생성 안함		
									var node=stageArray[a].div.firstChild;								
									if(node.id=="BLACK"){
										this.makePawnSpan(this.stageObj, this.img, this.pawnArrayW[this.indexW]);
										stageArray[a].div.appendChild(this.span); 				
										spanArray.push(stageArray[a]);	
										spanArray2.push(this.span);														
									}															
								}
							}
						}									
						for(var a=0;a<stageArray.length;a++){
							if(stageArray[a].div.id==i+""+(this.x+1)){
								if(stageArray[a].div.hasChildNodes()){ // div 자식이 어떤 노드가 있는지 확인 자식 있으면 span 생성 안함		
									var node=stageArray[a].div.firstChild;								
									if(node.id=="BLACK"){
										this.makePawnSpan(this.stageObj, this.img, this.pawnArrayW[this.indexW]);	
										stageArray[a].div.appendChild(this.span); 				
										spanArray.push(stageArray[a]);	
										spanArray2.push(this.span);
									}															
								}
							}
						}
					}
				}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
				else{
					for(var i=this.y-1;i>(this.y-2);i--){
						this.makePawnSpan(this.stageObj, this.img, this.pawnArrayW[this.indexW]);					
						for(var a=0;a<stageArray.length;a++){
							if(stageArray[a].div.id==i+""+this.x){
								if(stageArray[a].div.hasChildNodes()){ // div 자식이 어떤 노드가 있는지 확인 자식 있으면 span 생성 안함		
									var node=stageArray[a].div.firstChild;								
									if(node.id=="WHITE"){													
									}															
								}else{
									stageArray[a].div.appendChild(this.span); //div에 span 추가				
									spanArray.push(stageArray[a]);
									spanArray2.push(this.span);
								}
							}
						}
						//대각선에 적이 있을때 span 생김									
						for(var a=0;a<stageArray.length;a++){
							if(stageArray[a].div.id==i+""+(this.x-1)){
								if(stageArray[a].div.hasChildNodes()){ // div 자식이 어떤 노드가 있는지 확인 자식 있으면 span 생성 안함		
									var node=stageArray[a].div.firstChild;								
									if(node.id=="BLACK"){
										this.makePawnSpan(this.stageObj, this.img, this.pawnArrayW[this.indexW]);
										stageArray[a].div.appendChild(this.span); 				
										spanArray.push(stageArray[a]);	
										spanArray2.push(this.span);														
									}															
								}
							}
						}									
						for(var a=0;a<stageArray.length;a++){
							if(stageArray[a].div.id==i+""+(this.x+1)){
								if(stageArray[a].div.hasChildNodes()){ // div 자식이 어떤 노드가 있는지 확인 자식 있으면 span 생성 안함		
									var node=stageArray[a].div.firstChild;								
									if(node.id=="BLACK"){
										this.makePawnSpan(this.stageObj, this.img, this.pawnArrayW[this.indexW]);	
										stageArray[a].div.appendChild(this.span); 				
										spanArray.push(stageArray[a]);	
										spanArray2.push(this.span);
									}															
								}
							}
						}									
					}				
				}
			}
		}
		if(name=="KNIGHT"){ //완성
			if(this.img.id=="BLACK"){
				for(var i=1;i<3;i++){
					this.makeSpan(this.stageObj, this.img);					
					for(var a=0;a<stageArray.length;a++){
						if(stageArray[a].div.id==(this.y+2)+""+((this.x-3)+(i*2))){
							if(stageArray[a].div.hasChildNodes()){ // div 자식이 어떤 노드가 있는지 확인 자식 있으면 span 생성 안함		
								var node=stageArray[a].div.firstChild;	

								if(node.id=="BLACK"){
																
								}else if(node.id=="WHITE"){
									stageArray[a].div.appendChild(this.span); //div에 span 추가						
									spanArray.push(stageArray[a]);
									spanArray2.push(this.span);
									
								}															
							}else{
								stageArray[a].div.appendChild(this.span); //div에 span 추가				
								spanArray2.push(this.span);
								spanArray.push(stageArray[a]);
							}
						}
					}
					
					this.makeSpan(this.stageObj, this.img);					
					for(var a=0;a<stageArray.length;a++){
						if(stageArray[a].div.id==(this.y-2)+""+((this.x-3)+(i*2))){
							if(stageArray[a].div.hasChildNodes()){ // div 자식이 어떤 노드가 있는지 확인 자식 있으면 span 생성 안함		
								var node=stageArray[a].div.firstChild;	

								if(node.id=="BLACK"){
																
								}else if(node.id=="WHITE"){
									stageArray[a].div.appendChild(this.span); //div에 span 추가						
									spanArray.push(stageArray[a]);
									spanArray2.push(this.span);
								
								}																
							}else{
								stageArray[a].div.appendChild(this.span); //div에 span 추가				
								spanArray2.push(this.span);
								spanArray.push(stageArray[a]);
							}
						}
					}
					this.makeSpan(this.stageObj, this.img);					
					for(var a=0;a<stageArray.length;a++){
						if(stageArray[a].div.id==((this.y-3)+(i*2))+""+(this.x-2)){
							if(stageArray[a].div.hasChildNodes()){ // div 자식이 어떤 노드가 있는지 확인 자식 있으면 span 생성 안함		
								var node=stageArray[a].div.firstChild;	
		
								if(node.id=="BLACK"){
																
								}else if(node.id=="WHITE"){
									stageArray[a].div.appendChild(this.span); //div에 span 추가						
									spanArray.push(stageArray[a]);
									spanArray2.push(this.span);
									
								}																
							}else{
								stageArray[a].div.appendChild(this.span); //div에 span 추가				
								spanArray2.push(this.span);
								spanArray.push(stageArray[a]);
							}
						}
					}
					this.makeSpan(this.stageObj, this.img);					
					for(var a=0;a<stageArray.length;a++){
						if(stageArray[a].div.id==((this.y-3)+(i*2))+""+(this.x+2)){
							if(stageArray[a].div.hasChildNodes()){ // div 자식이 어떤 노드가 있는지 확인 자식 있으면 span 생성 안함		
								var node=stageArray[a].div.firstChild;	

								if(node.id=="BLACK"){
																
								}else if(node.id=="WHITE"){
									stageArray[a].div.appendChild(this.span); //div에 span 추가						
									spanArray.push(stageArray[a]);
									spanArray2.push(this.span);
									
								}																
							}else{
								stageArray[a].div.appendChild(this.span); //div에 span 추가				
								spanArray2.push(this.span);
								spanArray.push(stageArray[a]);
							}
						}
					}
				}
			}
			if(this.img.id=="WHITE"){
				for(var i=1;i<3;i++){
					this.makeSpan(this.stageObj, this.img);					
					for(var a=0;a<stageArray.length;a++){
						if(stageArray[a].div.id==(this.y+2)+""+((this.x-3)+(i*2))){
							if(stageArray[a].div.hasChildNodes()){ // div 자식이 어떤 노드가 있는지 확인 자식 있으면 span 생성 안함		
								var node=stageArray[a].div.firstChild;	
								if(node.id=="WHITE"){																
								}else if(node.id=="BLACK"){
									stageArray[a].div.appendChild(this.span); //div에 span 추가						
									spanArray.push(stageArray[a]);
									spanArray2.push(this.span);									
								}															
							}else{
								stageArray[a].div.appendChild(this.span); //div에 span 추가				
								spanArray2.push(this.span);
								spanArray.push(stageArray[a]);
							}
						}
					}					
					this.makeSpan(this.stageObj, this.img);					
					for(var a=0;a<stageArray.length;a++){
						if(stageArray[a].div.id==(this.y-2)+""+((this.x-3)+(i*2))){
							if(stageArray[a].div.hasChildNodes()){ // div 자식이 어떤 노드가 있는지 확인 자식 있으면 span 생성 안함		
								var node=stageArray[a].div.firstChild;	
								if(node.id=="WHITE"){															
								}else if(node.id=="BLACK"){
									stageArray[a].div.appendChild(this.span); //div에 span 추가						
									spanArray.push(stageArray[a]);
									spanArray2.push(this.span);							
								}																
							}else{
								stageArray[a].div.appendChild(this.span); //div에 span 추가				
								spanArray2.push(this.span);
								spanArray.push(stageArray[a]);
							}
						}
					}
					this.makeSpan(this.stageObj, this.img);					
					for(var a=0;a<stageArray.length;a++){
						if(stageArray[a].div.id==((this.y-3)+(i*2))+""+(this.x-2)){
							if(stageArray[a].div.hasChildNodes()){ // div 자식이 어떤 노드가 있는지 확인 자식 있으면 span 생성 안함		
								var node=stageArray[a].div.firstChild;			
								if(node.id=="WHITE"){																
								}else if(node.id=="BLACK"){
									stageArray[a].div.appendChild(this.span); //div에 span 추가						
									spanArray.push(stageArray[a]);
									spanArray2.push(this.span);								
								}																
							}else{
								stageArray[a].div.appendChild(this.span); //div에 span 추가				
								spanArray2.push(this.span);
								spanArray.push(stageArray[a]);
							}
						}
					}
					this.makeSpan(this.stageObj, this.img);					
					for(var a=0;a<stageArray.length;a++){
						if(stageArray[a].div.id==((this.y-3)+(i*2))+""+(this.x+2)){
							if(stageArray[a].div.hasChildNodes()){ // div 자식이 어떤 노드가 있는지 확인 자식 있으면 span 생성 안함		
								var node=stageArray[a].div.firstChild;	
								if(node.id=="WHITE"){																
								}else if(node.id=="BLACK"){
									stageArray[a].div.appendChild(this.span); //div에 span 추가						
									spanArray.push(stageArray[a]);
									spanArray2.push(this.span);								
								}																
							}else{
								stageArray[a].div.appendChild(this.span); //div에 span 추가				
								spanArray2.push(this.span);
								spanArray.push(stageArray[a]);
							}
						}
					}
				}
			}
		}
	}
	//폰을 제외한 모든 말을 제어하는 스판
	makeSpan(stageObj, img){
		this.img=img;
		this.span=document.createElement("span");
		this.span.style.width=30+"px";
		this.span.style.height=30+"px";
		this.span.style.background="blue";
		this.span.style.zIndex="3";
		this.span.style.position="absolute";
		this.span.style.float="left";
		this.span.style.left=35+"px";
		this.span.style.top=35+"px";
		this.span.style.opacity=0.7;
		this.span.style.borderRadius=15+"px";
		this.stageObj=stageObj;

		//span 클릭후 움직이는 이벤트
		this.span.addEventListener("click", function(){
			var parent=this.parentNode;/// 말을 이동시킬 div
			parent.appendChild(img);
			arriveSt.push(parent); //말이 이동할 div
			//moveEffect();

			undoPic.push([img,0]); // undo를 위한 이미지 저장 여기서 0 은 적을 죽였는지 안죽였는지 확인하기 위해 사용
			undoStage.push(stageObj); // undo를 위한 div저장
			min=timeCnt;
			changeTurn(img);
			removeObj(parent); // 말을 이동시킬 div에 적군이미지를 없애기위해 매개변수로 이동시킬 div를 매개변수로 준다.
			console.log(undoPic);
		});
	}
	//폰을 제어하는 스판
	makePawnSpan(stageObj, img, pawnObj){
		this.img=img;
		this.span=document.createElement("span");
		this.span.style.width=30+"px";
		this.span.style.height=30+"px";
		this.span.style.background="blue";
		this.span.style.zIndex="3";
		this.span.style.position="absolute";
		this.span.style.float="left";
		this.span.style.left=35+"px";
		this.span.style.top=35+"px";
		this.span.style.opacity=0.7;
		this.span.style.borderRadius=15+"px";
		this.stageObj=stageObj;
		this.pawnObj=pawnObj;
		
		//span 클릭후 움직이는 이벤트
		this.span.addEventListener("click", function(){
			var parent=this.parentNode;/// 말을 이동시킬 div
			console.log(parent.firstChild.name);
			parent.appendChild(img);
			if(parent.firstChild.name != "KING"){ //폰이 마지막칸 가서 왕을 잡았을때 게임을 끝내고 다른 말로 바꾸지 못하게 하는 조건문
				lastPawn(parent.id, parent, img, this);
			}

			min=timeCnt;
			pawnFirstMove(img); /// 폰이 처음 움직이고 2칸 못움직이게 바꿔주는 함수
			
			undoPic.push([img, 0]);
			undoStage.push(stageObj);
						
			changeTurn(img);// 턴 바꿔주는 함수
			removeObj(parent);	
			console.log(undoPic);
		});			
	}
	
	moveEffect(){
		this.startid = startSt[0].id;
		this.arriveid = arriveSt[0].id;
		this.img=moveImg[0];
		this.moveA=[];
		this.SSDIV=[];
		this.xx=parseInt(this.startid.substring(1));	///아이디값을 하나하나 잘라서 숫자로 얻어옴   ex  id:18 >>> 1 리턴  현재이미지의 x좌표
		this.yy=parseInt(this.startid.substring(0,1));
		this.xxx=parseInt(this.arriveid.substring(1));	///아이디값을 하나하나 잘라서 숫자로 얻어옴   ex  id:18 >>> 1 리턴  현재이미지의 x좌표
		this.yyy=parseInt(this.arriveid.substring(0,1));

		if(xx==xxx){
			if(yy<yyy){
				for(var i=yy;i<(yyy+1);i++){
					moveA.push(i);
				}
			}
		}
		for(var a=0;a<stageArray.length;a++){
			for(var i=0;moveA.length;i++){
				if(stageArray[a].div.id==this.xx+""+moveA[i]){
					this.SSDIV.push(stageArray[a].div);
				}
			}
		}
		for(var i=0;i<this.SSDIV.length;i++){
			this.SSDIV[i].appendCHild(this.img);
		}
	}
	
}