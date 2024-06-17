export class Player {
	isRespawning = false;

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

	enablePassthrough() {
		this.gameObj.onBeforePhysicsResolve((collision) => {
			if (collision.target.is("passthrough") && this.gameObj.isJumping()) {
				collision.preventResolution();
			}
			if (collision.target.is("passthrough") && isKeyDown("down")) {
				collision.preventResolution();
			}
		});
	}

	setplayerControls() {
		onKeyDown("left", () => {
			if (this.gameObj.curAnim() !== "run") this.gameObj.play("run");
			this.gameObj.flipX = true;
			if (!this.isRespawning) this.gameObj.move(-this.speed, 0);
		});
		onKeyDown("right", () => {
			if (this.gameObj.curAnim() !== "run") this.gameObj.play("run");
			this.gameObj.flipX = false;
			if (!this.isRespawning) this.gameObj.move(this.speed, 0);
		});
		onKeyDown("space", () => {
			// Create a double jump
			// this.gameObj.jump(this.jumpForce);
			if (this.gameObj.isGrounded() && !this.isRespawning) {
				this.gameObj.jump(this.jumpForce);
				play("jump");
			}
		});
		onKeyRelease(() => {
			if (isKeyReleased("right") || isKeyReleased("left"))
				this.gameObj.play("idle");
		});
	}
	respawnPlayer() {
		if (this.lives > 0) {
			this.gameObj.pos = vec2(this.initialX, this.initialY);
			this.isRespawning = true;
			setTimeout(() => (this.isRespawning = false), 1000);
			return;
		}
	}
	update() {
		onUpdate(() => {
			if (this.gameObj.pos.y > 1100) {
				play("hit", { speed: 1.5 });
				this.respawnPlayer();
			}
		});
	}
}
