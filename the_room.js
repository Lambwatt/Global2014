var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var intervalsPerFrame = 5;
var interval_count = 0;
var frame = 0;
var numWalkFrames = 4;

var lifeSpan = 8;
var baseLife = 2;

var wallWidth = 16;
var backWallHeight = 162;//317 * 803
var characterWidth = 64;
var characterHeight = 130;
var showPlayer = false;

var door_start_x = 429;
var door_end_x = 509;

var allStop = false;

var charVel = 1;

var numCharacters = 12;

var genWidth = canvas.width - characterWidth - wallWidth - wallWidth;
console.log("genWidth = "+genWidth);
var genHeight = canvas.height - characterHeight - backWallHeight - wallWidth;
console.log("genHeight = "+genHeight);

var topBoundary = backWallHeight;
var botBoundary = backWallHeight+genHeight;
var leftBoundary = wallWidth;
var rightBoundary = leftBoundary + genWidth;

drawRoom();

var persons = [];
for(var i = 0; i<5; i++){
	persons.push(document.getElementById("C"+(i)));
}

var staticRenderFunc = function(){

	ctx.fillStyle = "rgb(100,200,6)";
	for(var i in characters){
		if(showPlayer){
			//console.log("going to check life. character life = "+characters[i].life);
			if(characters[i].life<0){
				//console.log("here?")
//				ctx.fillStyle = "rgb(100,20,60)";	
				ctx.drawImage(persons[4], characters[i].x, characters[i].y, characterWidth, characterHeight);
				//drawFrame(ctx, frame, characters[i].x, characters[i].y, characterWidth, characterHeight, characters[i].animIndex);
//				ctx.fillStyle = "rgb(100,200,6)";
			}else{
					ctx.drawImage(persons[characters[i].colour], characters[i].x, characters[i].y, characterWidth, characterHeight);			}
		}else
			//console.log(JSON.stringify(persons[characters[i].colour]));
			ctx.drawImage(persons[characters[i].colour], characters[i].x, characters[i].y, characterWidth, characterHeight);
	}
}

var dirFuncs = [];
var animMod = [0,0,1,1];

dirFuncs[0] = function(character, i){
	character.y -= charVel;
	if(character.y<topBoundary){ 

		console.log("start?: "+(character.x > door_start_x)+" end: "+(character.x > door_end_x)+" life: "+(character.life<0));
		if(character.x > door_start_x && character.x < door_end_x  && character.life<0){
			if(character.y<=0){
				allStop=true;
			}
		}else{
			character.y = topBoundary;
		}
		//If in door way, ignore boundary. check for completion.
	}
	var j = parseInt(i);
	while(j>0 && characters[j-1].y > character.y){
		var tmp = characters[j-1];
		characters[j-1] = character;
		characters[j] = tmp;
		j--;
	}
}

dirFuncs[1] = function(character, i){
	character.y += charVel;
	if(character.y>botBoundary) character.y = botBoundary;

	var j = parseInt(i);
	while(j<characters.length-1 && characters[j+1].y < character.y){
		var tmp = characters[j+1];
		characters[j+1] = character;
		characters[j] = tmp;
		j++;
	}
	
}

dirFuncs[2] = function(character){
	character.x += charVel;
	if(character.x>rightBoundary) character.x = rightBoundary;

}

dirFuncs[3] = function(character){
	character.x -= charVel;
	if(character.x<leftBoundary) character.x = leftBoundary;

}

var stepRenderFunc = function(){
	ctx.fillStyle = "rgb(100,200,6)";
	for(var i in characters){
		//console.log("drawing character "+JSON.stringify(characters[i]));
		//ctx.fillStyle = characters[i].colour;
		//drawFrame(ctx, frame,characters[i].x, characters[i].y, characterWidth, characterHeight);
		if(showPlayer){
			//console.log("going to check life. character life = "+characters[i].life);
			if(characters[i].life<0){
			//	console.log("here?");
			//	ctx.fillStyle = "rgb(100,20,60)";	
					ctx.drawImage(persons[4], characters[i].x, characters[i].y, characterWidth, characterHeight);
//				ctx.fillStyle = "rgb(100,200,6)";
			//	console.log("showed!");
			}else{
					//drawFrame(ctx, frame, characters[i].x, characters[i].y, characterWidth, characterHeight, characters[i].animIndex);
					ctx.drawImage(persons[characters[i].colour], characters[i].x, characters[i].y, characterWidth, characterHeight);
			}
		}else{
			//ctx.fillRect(characters[i].x, characters[i].y, characterWidth, characterHeight);//Use drawframe here instead
			ctx.drawImage(persons[characters[i].colour], characters[i].x, characters[i].y, characterWidth, characterHeight);
			//drawFrame(ctx, frame, characters[i].x, characters[i].y, characterWidth, characterHeight, characters[i].animIndex);
		}
		characters[i].currDir(characters[i], i);
	}

	//console.log("intervalCount: "+interval_count+". frame: "+frame+".");
	if(interval_count==0){ 
		frame = (++frame)%(numWalkFrames);
		//document.getElementById("frameNum").innerHTML = frame;
	}
	interval_count = (++interval_count)%intervalsPerFrame;

	if(frame == 0 || allStop){
		//Return to static functionality
		endStep();
		renderFunc = staticRenderFunc;
		interval_count = 0;
		console.log("over");
	}
}

var renderFunc = staticRenderFunc;

function drawRoom(){
	ctx.fillStyle = "rgb(0,0,0)";
	ctx.fillRect(0, 0, wallWidth, canvas.height);
	ctx.fillRect(canvas.width - wallWidth, 0, wallWidth, canvas.height);
	ctx.fillRect(0, canvas.height - wallWidth, canvas.width, wallWidth);

	//ctx.fillRect(wallWidth, 0, genWidth+characterWidth, backWallHeight);
}

function drawBackground(){
	//ctx.fillStyle = "rgb(0,0,0)";
	//ctx.fillRect(wallWidth, 0, genWidth+characterWidth, backWallHeight);
	
	ctx.drawImage(document.getElementById("bg"), wallWidth, 0, canvas.width-wallWidth - wallWidth, canvas.height-wallWidth);
	ctx.drawImage(document.getElementById("door"), wallWidth, 0, canvas.width-wallWidth - wallWidth, canvas.height);
}

//character = {"x":0, "y":0, "dir":[0,1,2,3], "life":10, "currDir":0, "colour":0, animDir:0};//
var characters = [];

for(var i = 0; i<numCharacters; i++){
	var newChar = {};

	newChar.x = Math.floor(Math.random()*genWidth)+wallWidth;
	newChar.y = Math.floor(Math.random()*genHeight)+backWallHeight;
	//console.log(newChar.x+" chosen from "+wallWidth+" to "+(genWidth+wallWidth));
	//console.log(newChar.y+" chosen from "+backWallHeight+" to "+(genHeight+backWallHeight));
	newChar.colour = Math.floor(Math.random()*12)%2;
	newChar.currDir = 0;
	newChar.animIndex = 0;
	newChar.dir = [0,0,0,0];
	assignDirections(newChar);
	characters.push(newChar);
}
characters = sortPeople(characters);

function printCharacters(){
	var returnString = "[";
	returnString+=characters[0].y;
	for(var i =1; i<characters.length; i++){	
		returnString+=", "+characters[i].y;
	}
	returnString+="]";
	console.log("Characters: "+returnString);
}

function sortPeople(people){
	
	if(people.length==1){
		return people;
	}

	var left = [];
	for(var i = 0; i<people.length/2; i++){
		left.push(people[i]);
	}	

	var right = []
	for(; i<people.length; i++){
		right.push(people[i]);
	}	

	left = sortPeople(left);
	right = sortPeople(right);

	var result = [];
	var j = 0;
	for(i=0; i+j<left.length+right.length;){
		if(i==left.length){	
			result.push(right[j]);
			j++;
		}else if(j==right.length){
			result.push(left[i]);
			i++;
		}else if(left[i].y<=right[j].y){
			result.push(left[i]);
			i++;
		}else{
			result.push(right[j]);
			j++;
		}
	}	

	var returnString = "[";
	returnString+=result[0].y;
	for(var i =1; i<result.length; i++){	
		returnString+=", "+result[i].y;
	}
	returnString+="]";
	console.log("returning: "+returnString);
	return result;
}

var player = characters[Math.floor(Math.random()*(numCharacters*4))%numCharacters];
player.life = -1;
assignPlayerDirections(player);


setInterval(function() {

		//clear canvas
		ctx.clearRect(wallWidth, 0, canvas.width-wallWidth - wallWidth, canvas.height-wallWidth);

		drawBackground();
		renderFunc();

				//draw frame in canvas
	/*	if(inStep){
    	drawFrame(canvas_context, frame, 0, 0, 96, 164);
		}

		//Slows frame rate from intended 30 fps
		if(playing && interval_count==0){ 
			frame = (++frame)%(patch.frames.length);
			//document.getElementById("frameNum").innerHTML = frame;
		}
		interval_count = (++interval_count)%intervalsPerFrame;		
		//document.getElementById("layerFeild").type = "hidden";//retrieve layer name if given //might be a relic of abandoned functionality
		//draw layers section
		drawLayers(frame);*/
	},30);


function step(dir){
	if(allStop) return;

	for(var i in characters){
	//	console.log("dirFuncs of "+characters[i].dir[dir]+" = "+dirFuncs[characters[i].dir[dir]]);
		characters[i].currDir = dirFuncs[characters[i].dir[dir]];
		characters[i].animIndex = characters[i].colour*2 + animMod[characters[i].dir[dir]];
	}
	
	renderFunc = stepRenderFunc;
}

function endStep(){
	for(var i in characters){
		characters[i].life--; 
		if(characters[i].life==0){
			assignDirections(characters[i]);
		}
	}
}

function assignDirections(character){
	for(var i = 0; i<4; i++){
		character.dir[i] = Math.floor(Math.random()*12)%4;
	}
	character.life = Math.floor(Math.random()*lifeSpan)+baseLife;
}

function assignPlayerDirections(character){
	var freeDirs = [false,false,false,false]
	for(var i = 0; i<4; i++){
		do{
		var dir	= Math.floor(Math.random()*12)%4;
		}while(freeDirs[dir]);
		character.dir[i] = dir;
		freeDirs[dir] = true;
	}
}


