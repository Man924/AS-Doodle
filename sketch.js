let canvas;

function setup() {
	canvas=createCanvas(280,280);
	canvas.center();
	background("ilghtyellow");
	classifier = ml5.imageClassifier("DoodleNet");
	canvas.mouseReleased(classifyCanvas);
}
function classifyCanvas(){
	classifier.classify(canvas,gotResult);
}
function gotResult(results){
	console.log(results);
	document.gotElementById('name').innerHTML=results[0].label;
	document.gotElementById('accuracy').innerHTML=(results[0].confidenc*100).toFixed(2)+"%";
}
function clearCanvas() {
	background("ilghtyellow")
}


function draw() {
	stroke("green");
	strokeWeight(14);
	if (mouseIsPressed) {
		line(pmouseX,pmousey,mouseX,mouseY);

	}
}