export class Player {
	heightDelta = 0;
	isMoving = false;
	isRespawning = false;
	coyoteLapse = 0.1;
	apples = 0;
	lives = 3;

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
			scale(2),
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

	enableCoinPickup() {
		this.gameObj.onCollide("apple", (apple) => {
			this.apples++;
			destroy(apple);
			play("apple");
		});
	}

	setplayerControls() {
		onKeyDown("left", () => {
			if (this.gameObj.curAnim() !== "run") this.gameObj.play("run");
			this.gameObj.flipX = true;
			if (!this.isRespawning) this.gameObj.move(-this.speed, 0);
			this.isMoving = true;
		});

		onKeyDown("right", () => {
			if (this.gameObj.curAnim() !== "run") {
				this.gameObj.play("run");
				this.gameObj.flipX = false;
			}
			if (!this.isRespawning) this.gameObj.move(this.speed, 0);
			this.isMoving = true;
		});

		onKeyDown("space", () => {
			if (!this.gameObj.isGrounded() && this.hasJumpedOnce) {
				return;
			}
			if (time() - this.timeSinceLastGrounded > time.coyoteLapse) {
				return;
			}
			this.gameObj.jump(this.jumpForce);
			if (this.gameObj.curAnim() !== "jump") play("jump");
			this.hasJumpedOnce = true;
		});

		onKeyDown("z", () => {
			if (this.gameObj.isGrounded() && this.gameObj.curAnim() !== "shoot") {
				this.gameObj.play("shoot");
			}
		});

		onKeyRelease(() => {
			if (
				isKeyReleased("right") ||
				isKeyReleased("left") ||
				isKeyReleased("z")
			) {
				this.gameObj.play("idle");
				this.isMoving = false;
			}
		});
	}
	respawnPlayer() {
		if (this.lives > 0) {
			this.lives--;
			this.gameObj.pos = vec2(this.initialX, this.initialY);
			this.isRespawning = true;
			setTimeout(() => (this.isRespawning = false), 1000);
			return;
		}
		go("gameover");
	}
	update() {
		onUpdate(() => {
			if (this.gameObj.isGrounded()) {
				this.hasJumpedOnce = false;
				this.timeSinceLastGrounded = time();
			}

			this.heightDelta = this.previousHeight - this.gameObj.pos.y;
			this.previousheight = this.gameObj.pos.y;

			if (!this.isMoving && this.gameObj.curAnim() !== "idle") {
				this.gameObj.play("idle");
			}

			if (
				!this.gameObj.isGrounded() &&
				this.heightDelta > -100 &&
				this.gameObj.curAnim() !== "jump-up"
			) {
				this.gameObj.play("jump-up");
			}

			if (
				!this.gameObj.isGrounded() &&
				this.heightDelta < -100 &&
				this.gameObj.curAnim() !== "jump-down"
			) {
				this.gameObj.play("jump-down");
			}

			if (this.gameObj.pos.y > 1400) {
				play("hit", { speed: 1.5 });
				this.respawnPlayer();
			}
		});
	}

	updateLives(livesCountUI) {
		onUpdate(() => {
			livesCountUI.text = this.lives;
		});
	}

	updateAppleCount(appleCountUI) {
		onUpdate(() => {
			appleCountUI.text = ` ${this.apples}   / ${appleCountUI.fullAppleCount}`;
		});
	}
}
