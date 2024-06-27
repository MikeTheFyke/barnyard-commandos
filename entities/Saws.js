export class Saws {
	constructor(positions, ranges) {
		this.positions = positions;
		this.ranges = ranges;
		this.saws = [];
		for (const position in this.positions) {
			this.saws.push(
				add([
					sprite("saw"),
					area(),
					anchor("center"),
					pos(position),
					scale(4),
					rotate(),
					state("rotate-left", ["rotate-left", "rotate-right"]),
					offscreen(),
					"saws",
				])
			);
		}
	}

	async moveAndRotate(saw, moveBy) {
		if (!saw.isOffScreen()) {
			play("saws", { volume: 0.3, seek: 10 });
		}
		await Promise.all([
			tween(
				saw.pos.x,
				saw.pos.x + moveBy,
				1,
				(posX) => (saw.pos.x = posX),
				easings.linear
			),
			tween(
				saw.angle,
				360,
				2,
				(currAngle) => (saw.angle = currAngle),
				easings.linear
			),
		]);
	}

	setMovementPattern() {
		/// Error: Bad value for lerp(): undefined, 90. Only number, Vec2 and Color is supported.
		/// kaboom.mjs Line 1343
		///
		// for (const [index, saw] of this.saws.entries()) {
		// 	const rotateLeft = saw.onStateEnter("rotate-left", async () => {
		// 		if (!saw.isOffScreen()) play("saws", { volume: 0.6, seek: 10 });
		// 		await this.moveAndRotate(saw, -this.ranges[index]);
		// 		saw.angle = 0;
		// 		saw.enterState("rotate-right");
		// 	});
		// 	const rotateRight = saw.onStateEnter("rotate-right", async () => {
		// 		if (!saw.isOffScreen()) play("saws", { volume: 0.8, seek: 10 });
		// 		await this.moveAndRotate(saw, this.ranges[index]);
		// 		saw.angle = 0;
		// 		saw.enterState("rotate-left");
		// 	});
		// 	onSceneLeave(() => {
		// 		rotateRight.cancel();
		// 		rotateLeft.cancel();
		// 	});
		// }
	}
}
