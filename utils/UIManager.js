class UIManager {
	displayMainMenu() {
		add([sprite("forest-background"), scale(4)]);
		add([
			sprite("logo"),
			area(),
			anchor("center"),
			pos(center().x, center().y - center().y / 2),
			scale(8),
		]);
	}
}

export const uiManager = new UIManager();
