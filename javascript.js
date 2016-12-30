// console log to check version 
console.log(PIXI);
//Aliases
var Container = PIXI.Container,
	autoDetectRenderer = PIXI.autoDetectRenderer,
	loader = PIXI.loader,
	resources = PIXI.loader.resources,
	Sprite = PIXI.Sprite;
	
//set up renderer and stage
var renderer = autoDetectRenderer(512,512);
var stage = new Container();
document.body.appendChild(renderer.view);

//scales the window and changes the backgroud color to white
scaleToWindow(renderer.view, "0xFFFFFF");

//load an object
loader
.add("treasureHunter.json")
.load(setup);
//this function will run after it is loaded
var dungeon, explorer, treasure, door;
function setup(){
	//dungeon Texture
	var dungeonTexture = PIXI.utils.TextureCache["dungeon.png"];
	dungeon = new Sprite(dungeonTexture);
	stage.addChild(dungeon);
	// explorer
	explorer = new Sprite(
		resources["treasureHunter.json"].textures["explorer.png"]
		);
	explorer.x = 68;
	explorer.y = stage.height / 2 - explorer.height / 2;
	stage.addChild(explorer);
	//treasure chest
	var id = PIXI.loader.resources["treasureHunter.json"].textures;
	treasure = new Sprite(id["treasure.png"]);
	//positioning treasure
	treasure.x = stage.width - treasure.width -48;
	treasure.y = stage.height / 2 - treasure.height / 2;
	stage.addChild(treasure);
	//exit door
	door = new Sprite(id["door.png"]);
	door.position.set(32,0);
	stage.addChild(door);

//render the stage
renderer.render(stage);
}