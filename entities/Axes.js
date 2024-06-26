export class Axes {
	construtor(positions, swingDurations) {
		this.swingDurations = swingDurations;
		this.axes = [];
		for (const position of positions) {
			this.axes.push(
				add([
					sprite("axe"),
					area({
						shape: new Rect(vec2(0, 40), 30, 10),
						collisionIgnore: ["spiders", "flames"],
					}),
					pos(position),
					scale(4),
					anchor(vec2(0, -0.75)),
					state("swing-left", ["swing-left", "swing-right"]),
					rotate(),
					offscreen(),
					"axes",
				])
			);
		}
	}
}
