export class Player {
	constructor(
		posX,
		posY,
		speed,
		jumpForce,
		numberOfLives,
		currentLevelScene,
		isInTerminalScene
	) {
		this.isInTerminalScene = isInTerminalScene;
		this.currentLevelScene = currentLevelScene;
		this.initialX = posX;
		this.initialY = posY;
		this.makePlayer();
		this.setplayerControls();
		this.speed = speed;
		this.jumpForce = jumpForce;
		this.lives = numberOfLives;
		this.previousHeight = this.gameObj.pos.y;
	}
	makePlayer() {
		this.gameObj = add([
			sprite("wolly", { anim: "idle" }),
			area({ shape: new Rect(vec2(0, 3), 8, 8) }),
			anchor("center"),
			pos(this.initialX, this.initialY),
			scale(4),
			body(),
			"wolly",
		]);
	}
	setplayerControls() {
		onKeyDown("left", () => {
			if (this.gameObj.curAnim() !== "run") this.gameObj.play("run");
			this.gameObj.flipX = true;
			this.gameObj.move(-this.speed, 0);
		});
		onKeyDown("right", () => {
			if (this.gameObj.curAnim() !== "run") this.gameObj.play("run");
			this.gameObj.flipX = false;
			this.gameObj.move(+this.speed, 0);
		});
		onKeyDown("space", () => {
			// Create a double jump
			// this.gameObj.jump(this.jumpForce);
			if (this.gameObj.isGrounded()) {
				this.gameObj.jump(this.jumpForce);
				play("jump");
			}
		});
	}
}
