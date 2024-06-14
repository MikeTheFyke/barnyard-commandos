import kaboom from "./libs/kaboom.mjs";
import { uiManager } from "./utils/UIManager.js";
import { load } from "./utils/loader.js";
import { level1Layout, level1Mappings } from "./content/level1/level1Layout.js";
import { Level } from "./utils/Level.js";
import { Player } from "./entities/Player.js";
import { attachCamera } from "./utils/Camera.js";

kaboom({
	width: 1280,
	height: 720,
	letterbox: true,
});

// Load assets before display
load.assets();
load.sounds();
load.fonts();

const scenes = {
	menu: () => {
		uiManager.displayMainMenu();
	},
	controls: () => {
		uiManager.displayControlsMenu();
	},
	// Levels 1, 2 & 3
	1: () => {
		setGravity(1400);

		const level1 = new Level();
		level1.drawBackground("background-barnyard_320");
		level1.drawMapLayout(level1Layout, level1Mappings);

		const player = new Player(1500, 100, 400, 650, 3, 1, false);

		attachCamera(player.gameObj, 0, 200);

		level1.drawWaves("water", "wave");
	},
	2: () => {},
	3: () => {},
	gameover: () => {},
	end: () => {},
};

// Instead of manually calling each scene object we will map though to call all of them in one loop
for (const key in scenes) {
	scene(key, scenes[key]);
}

// Kaboom requires a default screen to run, here i will use menu
go("menu");
