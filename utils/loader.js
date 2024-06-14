export const load = {
	fonts: () => {
		loadFont("Round", "./fonts/round9x13.ttf");
	},
	assets: () => {
		// Controls Screen
		loadSprite("up", "./assets/controls/Key_Arrow_Up_Dark.png");
		loadSprite("down", "./assets/controls/Key_Arrow_Down_Dark.png");
		loadSprite("left", "./assets/controls/Key_Arrow_Left_Dark.png");
		loadSprite("right", "./assets/controls/Key_Arrow_Right_Dark.png");
		loadSprite("space", "./assets/controls/Key_Space_Dark.png");
		// Main Screen
		loadSprite("logo", "./assets/Logo.png");
		loadSprite("logo-128", "./assets/barnyard/Logo_128.png");
		loadSprite("porks-256", "./assets/barnyard/Porks_Logo_256.png");
		loadSprite("rams-256", "./assets/barnyard/Rams_Logo_256.png");
		// Common
		loadSprite("forest-background", "./assets/Forest_Background_0.png");
		loadSprite("background-ARMY", "./assets/barnyard/Background_ARMY.png");
		loadSprite(
			"background-barnyard_320",
			"./assets/barnyard/Background_Barnyard_320.png"
		);
		// Game Sprites
		// loadSprite("player", "./assets/Player.png", {
		// 	sliceX: 4,
		// 	sliceY: 6,
		// 	anims: {
		// 		idle: {
		// 			from: 0,
		// 			to: 3,
		// 			loop: true,
		// 		},
		// 		run: {
		// 			from: 4,
		// 			to: 7,
		// 			loop: true,
		// 		},
		// 		"jump-up": 8,
		// 		"jump-down": 9,
		// 	},
		// });
		loadSprite("wolly", "./assets/barnyard/Wolly_192.png", {
			sliceX: 4,
			sliceY: 6,
			anims: {
				idle: {
					from: 0,
					to: 3,
					loop: true,
				},
				run: {
					from: 4,
					to: 7,
					loop: true,
				},
				"jump-up": 8,
				"jump-down": 9,
			},
		});
		// loadSprite("coin", "./assets/Coin.png");
		loadSprite("apple", "./assets/barnyard/Apple.png", {
			sliceX: 5,
			sliceY: 2,
			anims: {
				idle: {
					from: 0,
					to: 9,
					loop: true,
				},
			},
		});
		loadSprite("bridge", "./assets/Bridge.png");
		loadSprite("grass-tileset", "./assets/Grass_Tileset.png", {
			// How many tiles in this image ?
			sliceX: 3,
			sliceY: 4,
			// Specify Animations for tiles - Optinal Value
			// Maps through slices as frames from top row left to right, row by row
			anims: {
				// what frame to display tl = topLeft, tm = top middle etc ...
				tl: 0,
				tm: 1,
				tr: 2,
				ml: 3,
				mm: 4,
				mr: 5,
				bl: 6,
				bm: 7,
				br: 8,
			},
		});
		loadSprite("grass-oneway-tileset", "./assets/Grass_Oneway.png", {
			sliceX: 3,
			sliceY: 4,
			anims: {
				tl: 0,
				tm: 1,
				tr: 2,
				ml: 3,
				mm: 4,
				mr: 5,
				bl: 6,
				bm: 7,
				br: 8,
			},
		});
		loadSprite("water", "./assets/Water.png", {
			sliceX: 8,
			sliceY: 1,
			anims: {
				wave: {
					from: 0,
					to: 7,
					speed: 16,
					loop: true,
				},
				"wave-reversed": {
					from: 7,
					to: 0,
					speed: 16,
					loop: true,
				},
			},
		});
		loadSprite("fish-1", "./assets/Fish_1.png", {
			sliceX: 2,
			sliceY: 1,
			anims: {
				swim: { from: 0, to: 1, loop: true },
			},
		});
		loadSprite("fish-2", "./assets/Fish_2.png", {
			sliceX: 2,
			sliceY: 1,
			anims: {
				swim: { from: 0, to: 1, loop: true },
			},
		});
		loadSprite("castle-background", "./assets/Castle_Background_0.png");
		loadSprite("brick-tileset", "./assets/Brick_Tileset.png", {
			sliceX: 3,
			sliceY: 4,
			anims: {
				tl: 0,
				tm: 1,
				tr: 2,
				ml: 3,
				mm: 4,
				mr: 5,
				bl: 6,
				bm: 7,
				br: 8,
			},
		});
		loadSprite("brick-oneway-tileset", "./assets/Brick_Oneway.png", {
			sliceX: 3,
			sliceY: 4,
			anims: {
				tl: 0,
				tm: 1,
				tr: 2,
				ml: 3,
				mm: 4,
				mr: 5,
				bl: 6,
				bm: 7,
				br: 8,
			},
		});

		loadSprite("lava", "./assets/Lava.png", {
			sliceX: 8,
			sliceY: 1,
			anims: {
				wave: {
					from: 0,
					to: 7,
					speed: 16,
					loop: true,
				},
				"wave-reversed": {
					from: 7,
					to: 0,
					speed: 16,
					loop: true,
				},
			},
		});
		loadSprite("flame-1", "./assets/Flame_1.png", {
			sliceX: 2,
			sliceY: 1,
			anims: {
				burn: { from: 0, to: 1, loop: true },
			},
		});
		loadSprite("flame-2", "./assets/Flame_2.png", {
			sliceX: 2,
			sliceY: 1,
			anims: {
				burn: { from: 0, to: 1, loop: true },
			},
		});
		loadSprite("axe", "./assets/Axe_Trap.png");
		loadSprite("saw", "./assets/Circular_Saw.png");

		loadSprite("sky-background-0", "./assets/Sky_Background_0.png");
		loadSprite("sky-background-1", "./assets/Sky_Background_1.png");
		loadSprite("sky-background-2", "./assets/Sky_Background_2.png");

		loadSprite("rock-tileset", "./assets/Grass_Rock_Tileset.png", {
			sliceX: 3,
			sliceY: 4,
			anims: {
				tl: 0,
				tm: 1,
				tr: 2,
				ml: 3,
				mm: 4,
				mr: 5,
				bl: 6,
				bm: 7,
				br: 8,
			},
		});
		loadSprite("rock-oneway-tileset", "./assets/Grass_Rock_Oneway.png", {
			sliceX: 3,
			sliceY: 4,
			anims: {
				tl: 0,
				tm: 1,
				tr: 2,
				ml: 3,
				mm: 4,
				mr: 5,
				bl: 6,
				bm: 7,
				br: 8,
			},
		});
		loadSprite("clouds", "./assets/Clouds.png", {
			sliceX: 8,
			sliceY: 1,
			anims: {
				wave: {
					from: 0,
					to: 7,
					speed: 16,
					loop: true,
				},
				"wave-reversed": {
					from: 7,
					to: 0,
					speed: 16,
					loop: true,
				},
			},
		});
		loadSprite("bird-1", "./assets/Bird_1.png", {
			sliceX: 3,
			sliceY: 1,
			anims: {
				fly: {
					from: 0,
					to: 2,
					speed: 9,
					loop: true,
				},
			},
		});
		loadSprite("bird-2", "./assets/Bird_2.png", {
			sliceX: 3,
			sliceY: 1,
			anims: {
				fly: {
					from: 0,
					to: 2,
					speed: 9,
					loop: true,
				},
			},
		});
		loadSprite("water", "./assets/Water.png", {
			sliceX: 8,
			sliceY: 1,
			anims: {
				wave: {
					from: 0,
					to: 7,
					speed: 16,
					loop: true,
				},
			},
		});
	},
	sounds: () => {
		loadSound("confirm-ui", "./sounds/sounds_confirm-ui.wav");
		loadSound("jump", "./sounds/sounds_jump.wav");
		loadSound("hit", "./sounds/sounds_hit.wav");
	},
};
