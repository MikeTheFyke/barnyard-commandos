export const load = {
	fonts: () => {
		loadFont("Round", "./fonts/round9x13.ttf");
	},
	assets: () => {
		loadSprite("forest-background", "./assets/Forest_Background_0.png"),
			loadSprite("logo", "./assets/Logo.png");
	},
};
