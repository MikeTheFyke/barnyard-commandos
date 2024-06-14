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
}