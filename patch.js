/*window.requestAnimFrame = (function(callback) {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function(callback) {
          window.setTimeout(callback, 1000 / 60);
        };
	})();*/

// Check for the various File API support.
if (window.File && window.FileReader && window.FileList && window.Blob) {
  console.log("Great success! All the File APIs are supported");

} else {
  alert('The File APIs are not fully supported in this browser.');
}

var patch = {"width":96, "height":164, "max_id":3, "layer_names":["leg1","leg2","torso"], "frames":[
	[{"id":0, "img":"leg", "x":71, "y":100, "width":317, "height":803},
	{"id":1,"img":"leg", "x":25, "y":80, "width":317, "height":803},
	{"id":2,"img":"torso", "x":0, "y":0, "width":96, "height":96}],

	[{"id":0,"img":"leg", "x":71, "y":80, "width":32, "height":64},
	{"id":1,"img":"leg", "x":25, "y":100, "width":32, "height":64},
	{"id":2,"img":"torso", "x":16, "y":16, "width":96, "height":96}]]}


//Frame rendering function
function drawFrame(canvas_context, frameNum, x, y, width, height, alpha){
	
	var oldAlpha = canvas_context.globalAlpha;

	if(alpha){
		canvas_context.globalAlpha = alpha;
	}

	if(patch.frames.length != 0){
		//get layers for a frame and set width and height if they are not provided.
		var patchLayers = patch.frames[frameNum];
		if(width!=null && height!=null){
			var widthRatio = width/patch.width;
			var heightRatio = height/patch.height;
		}
		else{
			var widthRatio = 1;
			var heightRatio = 1;
		}
	
		//draw each layer
		for(var l = 0; l< patchLayers.length; l++){
			canvas_context.drawImage(document.getElementById(patchLayers[l].img), 
				(patchLayers[l].x*widthRatio)+x, 
				(patchLayers[l].y*heightRatio)+y,
				patchLayers[l].width * widthRatio,
				patchLayers[l].height * heightRatio);
	
			//if selected, show selection highlighting
			if(l == canvas_selection_index){
				canvas_context.lineWidth = 5;
				canvas_context.strokeStyle = "rgb(100,200,100)";//Make thicker and more apparent	
				canvas_context.strokeRect(
					(patchLayers[l].x*widthRatio)+x, 
					(patchLayers[l].y*heightRatio)+y,
					patchLayers[l].width * widthRatio,
					patchLayers[l].height * heightRatio);
				canvas_context.lineWidth = 1;
			}		
		}

		
	}
		
	canvas_context.globalAlpha = oldAlpha;

}
