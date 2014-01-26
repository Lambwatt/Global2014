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

var patches = 
[

{"width":296, "height":692, "max_id":4, "layer_names":["Torso","leg1","leg2","leg3"], "frames":[
	[{"id":0, "img":"frontman1legs1", "x":10, "y":506, "width":286, "height":186},
	{"id":1,"img":"frontman1", "x":21, "y":0, "width":275, "height":633}],

	[{"id":0,"img":"frontman1legs2", "x":10, "y":506, "width":286, "height":186},
	{"id":2,"img":"frontman1", "x":21, "y":0, "width":275, "height":633}],

	[{"id":0,"img":"frontman1legs3", "x":10, "y":506, "width":286, "height":186},
	{"id":3,"img":"frontman1", "x":21, "y":0, "width":275, "height":633}],

	[{"id":0,"img":"frontman1legs2", "x":10, "y":506, "width":286, "height":186},
	{"id":2,"img":"frontman1", "x":21, "y":0, "width":275, "height":633}]
]},

{"width":296, "height":692, "max_id":4, "layer_names":["Torso","leg1","leg2","leg3"], "frames":[
	[{"id":0, "img":"sidewalkingman1legs1", "x":83, "y":506, "width":213, "height":186},
	{"id":1,"img":"sidewalkingman1", "x":21, "y":0, "width":275, "height":633}],

	[{"id":0,"img":"sidewalkingman1legs2", "x":83, "y":506, "width":213, "height":186},
	{"id":2,"img":"sidewalkingman1", "x":21, "y":0, "width":275, "height":633}],

	[{"id":0,"img":"sidewalkingman1legs3", "x":83, "y":506, "width":213, "height":186},
	{"id":3,"img":"sidewalkingman1", "x":21, "y":0, "width":275, "height":633}],

	[{"id":0,"img":"sidewalkingman1legs2", "x":83, "y":506, "width":213, "height":186},
	{"id":2,"img":"sidewalkingman1", "x":21, "y":0, "width":275, "height":633}]
]},

{"width":296, "height":692, "max_id":4, "layer_names":["Torso","leg1","leg2","leg3"], "frames":[
	[{"id":0, "img":"frontman2legs1", "x":10, "y":506, "width":286, "height":186},
	{"id":1,"img":"frontman2", "x":21, "y":0, "width":275, "height":633}],

	[{"id":0,"img":"frontman2legs2", "x":10, "y":506, "width":286, "height":186},
	{"id":2,"img":"frontman2", "x":21, "y":0, "width":275, "height":633}],

	[{"id":0,"img":"frontman2legs3", "x":10, "y":506, "width":286, "height":186},
	{"id":3,"img":"frontman2", "x":21, "y":0, "width":275, "height":633}],

	[{"id":0,"img":"frontman2legs2", "x":10, "y":506, "width":286, "height":186},
	{"id":2,"img":"frontman2", "x":21, "y":0, "width":275, "height":633}]
]},

{"width":296, "height":692, "max_id":4, "layer_names":["Torso","leg1","leg2","leg3"], "frames":[
	[{"id":0, "img":"sidewalkingman2legs1", "x":83, "y":506, "width":213, "height":186},
	{"id":1,"img":"sidewalkingman2", "x":21, "y":0, "width":275, "height":633}],

	[{"id":0,"img":"sidewalkingman2legs2", "x":83, "y":506, "width":213, "height":186},
	{"id":2,"img":"sidewalkingman2", "x":21, "y":0, "width":275, "height":633}],

	[{"id":0,"img":"sidewalkingman2legs3", "x":83, "y":506, "width":213, "height":186},
	{"id":3,"img":"sidewalkingman2", "x":21, "y":0, "width":275, "height":633}],

	[{"id":0,"img":"sidewalkingman2legs2", "x":83, "y":506, "width":213, "height":186},
	{"id":2,"img":"sidewalkingman2", "x":21, "y":0, "width":275, "height":633}]
]}

/*{"width":296, "height":692, "max_id":4, "layer_names":["Torso","leg1","leg2","leg3"], "frames":[
	[{"id":0, "img":"frontman3legs1", "x":10, "y":506, "width":286, "height":186},
	{"id":1,"img":"frontman3", "x":21, "y":0, "width":275, "height":633}],

	[{"id":0,"img":"frontman3legs2", "x":10, "y":506, "width":286, "height":186},
	{"id":2,"img":"frontman3", "x":21, "y":0, "width":275, "height":633}],

	[{"id":0,"img":"frontman3legs3", "x":10, "y":506, "width":286, "height":186},
	{"id":3,"img":"frontman3", "x":21, "y":0, "width":275, "height":633}],

	[{"id":0,"img":"frontman3legs2", "x":10, "y":506, "width":286, "height":186},
	{"id":2,"img":"frontman3", "x":21, "y":0, "width":275, "height":633}]
]},

{"width":296, "height":692, "max_id":4, "layer_names":["Torso","leg1","leg2","leg3"], "frames":[
	[{"id":0, "img":"sidewalkingman3legs1", "x":83, "y":506, "width":213, "height":186},
	{"id":1,"img":"sidewalkingman3", "x":21, "y":0, "width":275, "height":633}],

	[{"id":0,"img":"sidewalkingman3legs2", "x":83, "y":506, "width":213, "height":186},
	{"id":2,"img":"sidewalkingman3", "x":21, "y":0, "width":275, "height":633}],

	[{"id":0,"img":"sidewalkingman3legs3", "x":83, "y":506, "width":213, "height":186},
	{"id":3,"img":"sidewalkingman3", "x":21, "y":0, "width":275, "height":633}],

	[{"id":0,"img":"sidewalkingman3legs2", "x":83, "y":506, "width":213, "height":186},
	{"id":2,"img":"sidewalkingman3", "x":21, "y":0, "width":275, "height":633}]
]},

{"width":296, "height":692, "max_id":4, "layer_names":["Torso","leg1","leg2","leg3"], "frames":[
	[{"id":0, "img":"frontman4legs1", "x":10, "y":506, "width":286, "height":186},
	{"id":1,"img":"frontman4", "x":21, "y":0, "width":275, "height":633}],

	[{"id":0,"img":"frontman4legs2", "x":10, "y":506, "width":286, "height":186},
	{"id":2,"img":"frontman4", "x":21, "y":0, "width":275, "height":633}],

	[{"id":0,"img":"frontman4legs3", "x":10, "y":506, "width":286, "height":186},
	{"id":3,"img":"frontman4", "x":21, "y":0, "width":275, "height":633}],

	[{"id":0,"img":"frontman4legs2", "x":10, "y":506, "width":286, "height":186},
	{"id":2,"img":"frontman4", "x":21, "y":0, "width":275, "height":633}]
]},

{"width":296, "height":692, "max_id":4, "layer_names":["Torso","leg1","leg2","leg3"], "frames":[
	[{"id":0, "img":"sidewalkingman4legs1", "x":83, "y":506, "width":213, "height":186},
	{"id":1,"img":"sidewalkingman4", "x":21, "y":0, "width":275, "height":633}],

	[{"id":0,"img":"sidewalkingman4legs2", "x":83, "y":506, "width":213, "height":186},
	{"id":2,"img":"sidewalkingman4", "x":21, "y":0, "width":275, "height":633}],

	[{"id":0,"img":"sidewalkingman4legs3", "x":83, "y":506, "width":213, "height":186},
	{"id":3,"img":"sidewalkingman4", "x":21, "y":0, "width":275, "height":633}],

	[{"id":0,"img":"sidewalkingman4legs2", "x":83, "y":506, "width":213, "height":186},
	{"id":2,"img":"sidewalkingman4", "x":21, "y":0, "width":275, "height":633}]
]}*/

]


//Frame rendering function
function drawFrame(canvas_context, frameNum, x, y, width, height, patchIndex, alpha){
	
	var patch = patches[patchIndex];

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
			/*if(l == canvas_selection_index){
				canvas_context.lineWidth = 5;
				canvas_context.strokeStyle = "rgb(100,200,100)";//Make thicker and more apparent	
				canvas_context.strokeRect(
					(patchLayers[l].x*widthRatio)+x, 
					(patchLayers[l].y*heightRatio)+y,
					patchLayers[l].width * widthRatio,
					patchLayers[l].height * heightRatio);
				canvas_context.lineWidth = 1;
			}		*/
		}

		
	}
		
	canvas_context.globalAlpha = oldAlpha;

}
