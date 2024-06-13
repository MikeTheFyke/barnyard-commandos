import kaboom from "./libs/kaboom.mjs";

kaboom({
	width: 1280,
	height: 720,
	letterbox: true,
});

const scenes = {
	menu: () => {
		add([text("Test"), pos(640, 360)]);
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
