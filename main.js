import kaboom from "./libs/kaboom.mjs";
import { uiManager } from "./utils/UIManager.js";
import { load } from "./utils/loader.js";

kaboom({
	width: 1280,
	height: 720,
	letterbox: true,
});

// Load assets before display
load.assets();

const scenes = {
	menu: () => {
		uiManager.displayMainMenu();
	},
	controls: () => {},
	// Levels 1, 2 & 3
	1: () => {},
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
