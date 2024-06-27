class UIManager {
	displayLivesCount(player) {
		this.livesCountUI = add([
			text(`${player.lives}`, {
				size: 50,
				font: "round",
			}),
			pos(center().x + center().x - center().x / 8, 10),
			color(255, 0, 0),
			fixed(),
		]);
		this.livesCountUI.add([
			sprite("lives-icon"),
			pos(-75, -5),
			scale(3),
			fixed(),
		]);
	}

	displayAppleCount(player) {
		this.appleCountUI = add([
			text(player.apples, {
				size: 50,
				font: "round",
			}),
			{
				fullAppleCount: get("apple", {
					recursive: true,
				}).length,
			},
			pos(70, 10),
			fixed(),
		]);
		this.appleCountUI.add([
			sprite("apple-icon"),
			pos(-60, 0),
			scale(3),
			fixed(),
		]);
	}

	addDarkBg() {
		add([sprite("background-ARMY"), pos(0, 0), scale(4, 0.4), fixed()]);
		add([rect(330, 55), pos(5, 5), color(0, 100, 0), fixed()]);
		add([
			rect(120, 55),
			pos(center().x + center().x - 160, 5),
			color(0, 100, 0),
			fixed(),
		]);
		add([circle(80), pos(center(0).x, 30), color(0, 100, 0), fixed()]);
		add([
			sprite("rams-256"),
			area(),
			anchor("center"),
			pos(center().x, 40),
			scale(0.5),
			fixed(),
		]);
	}

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
		add([sprite("background-ARMY"), scale(4)]);
		add([
			sprite("logo-128"),
			area(),
			anchor("center"),
			pos(center().x, center().y - center().y / 2),
			scale(6),
		]);
		add([
			sprite("porks-256"),
			area(),
			anchor("center"),
			pos(
				center().x - center().x / 2 - center().x / 8,
				center().y + center().y / 3
			),
			scale(1.5),
		]);
		add([
			sprite("rams-256"),
			area(),
			anchor("center"),
			pos(
				center().x + center().x / 2 + center().x / 8,
				center().y + center().y / 3
			),
			scale(1.5),
		]);
		this.displayUIMessage(
			"Press Enter to start game",
			vec2(center().x, center().y + 100)
		);
		this.displayUIMessage(
			"Press Space for controls",
			vec2(center().x, center().y + 240)
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
		add([sprite("background-ARMY"), scale(4)]);
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
	displayGameOverScreen() {
		add([rect(1280, 720), color(0, 0, 0)]);
		add([
			text("Game Over!", { size: 50, font: "round" }),
			area(),
			anchor("center"),
			pos(center()),
		]);

		this.displayBlinkingUIMessage(
			"Press ENTER to Start Game",
			vec2(center().x, center().y + 100)
		);
		onKeyPress("enter", () => {
			play("confirm-ui");
			go(1);
		});
	}

	displayEndGameScreen() {
		add([rect(1280, 720), collor(0, 0, 0)]);
		add([
			text("you Won! Thanks for Playing!", { size: 50, font: "round" }),
			area(),
			anchor("center"),
			pos(center()),
		]);

		this.displayBlinkingUIMessage(
			"Press ENTER to Play Again",
			vec2(center().x, center().y + 100)
		);

		onKeyPress("enter", () => {
			play("confirm-ui");
			go("menu");
		});
	}
}

export const uiManager = new UIManager();
