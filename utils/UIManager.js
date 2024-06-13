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
		this.displayUIMessage(
			"Press Space for controls",
			vec2(center().x, center().y + 160)
		);
		onKeyPress("enter", () => {
			// Once Enter is typed the game will load level 1
			play("confirm-ui", { speed: 1.5 });
			go(1);
		});
		onKeyPress("space", () => {
			// Once Enter is typed the user will be redirected to the controls screen
			play("confirm-ui", { speed: 1.5 });
			go("controls");
		});
	}
	displayControlsMenu() {
		add([sprite("forest-background"), scale(4)]);
		const message = add([
			text("Controls", {
				size: 48,
				font: "round",
			}),
			area(),
			anchor("center"),
			pos(center().x, center().y - 200),
		]);
		const controlPrompts = add([
			// Create Children to use these corodinates
			pos(center().x + 30, center().y),
		]);
		// Add child component to control object
		controlPrompts.add([sprite("up"), pos(0, -80)]);
		controlPrompts.add([sprite("down")]);
		controlPrompts.add([sprite("left"), pos(-80, 0)]);
		controlPrompts.add([sprite("right"), pos(80, 0)]);
		controlPrompts.add([sprite("space"), pos(-200, 0)]);
		controlPrompts.add([
			text("Jump", {
				size: 24,
				font: "round",
			}),
			pos(-182, 100),
		]);
		controlPrompts.add([
			text("Move", {
				size: 24,
				font: "round",
			}),
			pos(20, 100),
		]);
		controlPrompts.add([
			text("Press space to return to main menu", {
				size: 24,
				font: "round",
			}),
			pos(-240, 300),
		]);
		onKeyPress("space", () => {
			// Once Space is typed the user will be redirected back to main screen
			play("confirm-ui", { speed: 1.5 });
			go("menu");
		});
	}
}

export const uiManager = new UIManager();
