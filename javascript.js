// console log to check version 
console.log(PIXI);
//Aliases
var Container = PIXI.Container,
	autoDetectRenderer = PIXI.autoDetectRenderer,
	loader = PIXI.loader,
	resources = PIXI.loader.resources,
	Sprite = PIXI.Sprite;

//set up renderer and stage
var renderer = autoDetectRenderer(256,256);
var stage = new Container();
document.body.appendChild(renderer.view);

//scales the window and changes the backgroud color to white
scaleToWindow(renderer.view, "0xFFFFFF");

//load an object
loader
.add("pixie96x48.png")
.load(setup);
//this function will run after it is loaded

function setup(){
	var pixie = new Sprite(
		loader.resources["pixie96x48.png"].texture
		);
// Add sprite to the stage
stage.addChild(pixie);
//render the stage
renderer.render(stage);
}