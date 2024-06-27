import kaboom from "./libs/kaboom.mjs";
import { uiManager } from "./utils/UIManager.js";
import { load } from "./utils/loader.js";
import { level1Layout, level1Mappings } from "./content/level1/level1Layout.js";
import { level1Config } from "./content/level1/config.js";
import { level2Layout, level2Mappings } from "./content/level2/level2Layout.js";
import { level2Config } from "./content/level2/config.js";
import { level3Layout, level3Mappings } from "./content/level3/level3Layout.js";
import { level3Config } from "./content/level3/config.js";
import { Level } from "./utils/Level.js";
import { Player } from "./entities/Player.js";
import { Spiders } from "./entities/Spiders.js";
import { Projectiles } from "./entities/Projectiles.js";
import { Axes } from "./entities/Axes.js";
import { Saws } from "./entities/Saws.js";
import { Birds } from "./entities/Birds.js";
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

		const player = new Player(
			level1Config.playerStartPosX,
			level1Config.playerStartPosY,
			level1Config.playerSpeed,
			level1Config.jumpForce,
			level1Config.numberOfLives,
			1,
			false
		);

		player.enablePassthrough();
		player.enableCoinPickup();
		player.enableMobVulnerability();
		player.update();

		const spiders = new Spiders(
			level1Config.spiderPositions.map((spiderPos) => spiderPos()),
			level1Config.spiderRanges,
			level1Config.spiderDurations,
			level1Config.spiderType
		);
		spiders.setMovementPattern();
		spiders.enablePassthrough();

		const fish = new Projectiles(
			level1Config.fishPositions.map((fishPos) => fishPos()),
			level1Config.fishRanges,
			"fish"
		);
		fish.setMovementPattern();

		attachCamera(player.gameObj, 0, 200);

		level1.drawWaves("water", "wave");

		uiManager.addDarkBg();

		uiManager.displayAppleCount(player);
		uiManager.displayLivesCount(player);

		player.updateAppleCount(uiManager.appleCountUI);
		player.updateLives(uiManager.livesCountUI);
	},
	2: () => {
		setGravity(1400);

		const level2 = new Level();
		level2.drawBackground("background-castle");
		level2.drawMapLayout(level2Layout, level2Mappings);

		const player = new Player(
			level2Config.playerStartPosX,
			level2Config.playerStartPosY,
			level2Config.playerSpeed,
			level2Config.jumpForce,
			level2Config.numberOfLives,
			2,
			false
		);

		player.enablePassthrough();
		player.enableCoinPickup();
		player.enableMobVulnerability();
		player.update();

		const spiders = new Spiders(
			level2Config.spiderPositions.map((spiderPos) => spiderPos()),
			level2Config.spiderRanges,
			level2Config.spiderDurations,
			level2Config.spiderType
		);
		spiders.setMovementPattern();
		spiders.enablePassthrough();

		const flames = new Projectiles(
			level2Config.flamesPositions.map((flamesPos) => flamesPos()),
			level2Config.flamesRanges,
			"flames"
		);
		flames.setMovementPattern();

		const axes = new Axes(
			level2Config.axesPositions.map((axesPos) => axesPos()),
			level2Config.axesSwingDurations
		);
		axes.setMovementPattern();

		const saws = new Saws(
			level2Config.sawPositions.map((sawPos) => sawPos()),
			level2Config.sawRanges
		);
		saws.setMovementPattern();

		attachCamera(player.gameObj, 0, 200);

		level2.drawWaves("lava", "wave");

		uiManager.addDarkBg();

		uiManager.displayAppleCount(player);
		uiManager.displayLivesCount(player);

		player.updateAppleCount(uiManager.appleCountUI);
		player.updateLives(uiManager.livesCountUI);
	},
	3: () => {
		setGravity(1400);

		const level3 = new Level();
		level3.drawBackground("background-sky-0");
		level3.drawBackground("background-sky-1");
		level3.drawBackground("background-sky-2");
		level3.drawMapLayout(level3Layout, level3Mappings);

		const player = new Player(
			level3Config.playerStartPosX,
			level3Config.playerStartPosY,
			level3Config.playerSpeed,
			level3Config.jumpForce,
			level3Config.numberOfLives,
			2,
			false
		);

		const birds = new Birds(
			level3Config.birdPositions.map((birdPos) => birdPos()),
			level3Config.birdRanges
		);
		birds.setMovementPattern();

		player.enablePassthrough();
		player.enableCoinPickup();
		player.enableMobVulnerability();
		player.update();

		attachCamera(player.gameObj, 0, 200);

		level3.drawWaves("clouds", "wave");

		uiManager.addDarkBg();

		uiManager.displayAppleCount(player);
		uiManager.displayLivesCount(player);

		player.updateAppleCount(uiManager.appleCountUI);
		player.updateLives(uiManager.livesCountUI);
	},
	gameover: () => {
		uiManager.displayGameOverScreen();
	},
	end: () => {
		uiManager.displayEndGameScreen();
	},
};

for (const key in scenes) {
	scene(key, scenes[key]);
}

go("menu");
