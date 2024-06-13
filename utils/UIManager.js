class UIManager {
	displayUIMessage(content, position) {
		const message = add([
			text(content, {
				size: 24,
				font: "round",
			}),
			area(),
			anchor("center"),
			pos(position),
		]);
	}
	displayMainMenu() {
		add([sprite("forest-background"), scale(4)]);
		add([
			sprite("logo"),
			area(),
			anchor("center"),
			pos(center().x, center().y - center().y / 2),
			scale(8),
		]);
		this.displayUIMessage(
			"Press Enter to start game",
			vec2(center().x, center().y + 100)
		);
		onKeyPress("enter", () => {
			// Once Enter is typed the user will be redirected to the controls screen
			play("confirm-ui", { speed: 1.5 });
			go("controls");
		});
	}
}

export const uiManager = new UIManager();
