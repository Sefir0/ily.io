window.onload=function() {
	canv=document.getElementById("gc");
	ctx=canv.getContext("2d");
	document.addEventListener("keydown",keyPush);
	setInterval(game,2000/15);
}
px=py=20;	// dépard de serpent
canv_per_carreau=40;
largeur_carreau=20;
ax=ay=15; // position fruit
xv=yv=0; // direction de la marche
trail=[];
tail = 1;
function game() {
	px+=xv;
	py+=yv;
	if(px<0) {
		px= canv_per_carreau-1;
	}
	if(px>canv_per_carreau-1) {
		px= 0;
	}
	if(py<0) {
		py= canv_per_carreau-1;
	}
	if(py>canv_per_carreau-1) {
		py= 0;
	}
	ctx.fillStyle="rgb(60,179,113)"; // couleur herbe
	ctx.fillRect(0,0,canv.width,canv.height);
 
	ctx.fillStyle="green";
	for(var i=0;i<trail.length;i++) {
		ctx.fillRect(trail[i].x*largeur_carreau,trail[i].y*largeur_carreau,largeur_carreau-2,largeur_carreau-2);
		if(trail[i].x==px && trail[i].y==py) {
			tail = 5;
		}
	}
	trail.push({x:px,y:py});
	while(trail.length>tail) {
	trail.shift();
	}
 
	if(ax==px && ay==py) {
		tail++;
		ax=Math.floor(Math.random()*canv_per_carreau);
		ay=Math.floor(Math.random()*canv_per_carreau);
	}
	ctx.fillStyle="rgb(209, 121, 6)"; // couleur moustarde
	ctx.fillRect(ax*largeur_carreau,ay*largeur_carreau,largeur_carreau-2,largeur_carreau-2);
}
/*
function keyPush(evt) {
	switch(evt.key) {
		case "ArrowLeft":
			xv=-1;yv=0;
			break;
		case "ArrowUp":
			xv=0;yv=-1;
			break;
		case "ArrowRight":
			xv=1;yv=0;
			break;
		case "ArrowDown":
			xv=0;yv=1;
			break;
	}
}*/
// tourner en seulement avec les flèche D et G
function keyPush(evt) {
	if (evt.keyCode == '39' || evt.keyCode == '80') {
       // right arrow
	   if (xv==0 && yv==0){
		   xv=1;yv=0;
	   }
	   else if(xv==1 && yv==0){
		   xv=0;yv=1;
	   }
	   else if(xv==0 && yv==1){
		   xv=-1;yv=0;
	   }
	   else if(xv==-1 && yv==0){
		   xv=0;yv=-1;
	   }
	   else if(xv==0 && yv==-1){
		   xv=1;yv=0;
	   }
	}
	else if (evt.keyCode == '37' || evt.keyCode == '65') {
       // right arrow
	   if (xv==0 && yv==0){
		   xv=-1;yv=0;
	   }
	   else if(xv==-1 && yv==0){
		   xv=0;yv=1;
	   }
	   else if(xv==0 && yv==1){
		   xv=1;yv=0;
	   }
	   else if(xv==1 && yv==0){
		   xv=0;yv=-1;
	   }
	   else if(xv==0 && yv==-1){
		   xv=-1;yv=0;
	   }
	}
}

