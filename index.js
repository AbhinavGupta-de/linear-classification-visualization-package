class LinearClassification {
	constructor(canvasWidth = 800, canvasHeight = 600) {
		this.canvasWidth = canvasWidth;
		this.canvasHeight = canvasHeight;
		this.points = [];
		this.lineCoefficients = {};
		this.guessedLine = {};
		this.guessedLinePoints = [];
		this.isGuessed = false;
		this.setupCanvas();
	}

	setupCanvas() {
		createCanvas(this.canvasWidth, this.canvasHeight);
	}

	addPoint(x, y) {
		let point = createVector(x, y);
		if (this.isGuessed) {
			this.guessedLinePoints.push(point);
		} else {
			this.points.push(point);
		}
	}

	calculateLine() {
		let xSum = 0,
			ySum = 0,
			xySum = 0,
			xxSum = 0;
		for (let point of this.points) {
			xSum += point.x;
			ySum += point.y;
			xySum += point.x * point.y;
			xxSum += point.x * point.x;
		}
		let n = this.points.length;
		let m = (n * xySum - xSum * ySum) / (n * xxSum - xSum * xSum);
		let b = (ySum - m * xSum) / n;
		this.lineCoefficients.m = m;
		this.lineCoefficients.b = b;
	}

	drawLine() {
		stroke(255, 0, 0);
		strokeWeight(2);
		let x1 = 0;
		let y1 = this.lineCoefficients.m * x1 + this.lineCoefficients.b;
		let x2 = this.canvasWidth;
		let y2 = this.lineCoefficients.m * x2 + this.lineCoefficients.b;
		line(x1, y1, x2, y2);
	}

	guessLine() {
		if (this.guessedLinePoints.length < 2) {
			return;
		}
		let [p1, p2] = this.guessedLinePoints;
		let m = (p2.y - p1.y) / (p2.x - p1.x);
		let b = p1.y - m * p1.x;
		this.guessedLine.m = m;
		this.guessedLine.b = b;
		stroke(0, 0, 255);
		strokeWeight(2);
		line(p1.x, p1.y, p2.x, p2.y);
		this.drawLine();

		if (this.guessedLine.m !== undefined && this.guessedLine.b !== undefined) {
			let score = Math.sqrt(
				Math.abs(
					Math.pow(this.lineCoefficients.b - this.guessedLine.b, 2) -
						Math.pow(this.lineCoefficients.m - this.guessedLine.m, 2)
				)
			);
			noStroke();
			textSize(20);
			text(`Score: ${score}`, this.canvasWidth / 2, this.canvasHeight - 50);
		}
	}

	drawPoints() {
		noStroke();
		for (let point of this.points) {
			let distance = this.calculateDistance(point);
			let colorValue = map(distance, 0, this.canvasHeight / 2, 255, 0);
			fill(255 - colorValue, colorValue, colorValue / 10);
			ellipse(point.x, point.y, 10, 10);
		}
	}

	calculateDistance(point) {
		let { m, b } = this.lineCoefficients;
		let numerator = abs(m * point.x - point.y + b);
		let denominator = sqrt(m * m + 1);
		return numerator / denominator;
	}

	render() {
		background(0);
		this.drawPoints();
		if (this.points.length >= 15) {
			this.calculateLine();
			this.isGuessed = true;
			this.guessLine();
		}
		noStroke();
		fill(255);
		textAlign(CENTER);
		textSize(20);
		let remainingPoints = 15 - this.points.length;
		text(
			`Points remaining: ${remainingPoints}`,
			this.canvasWidth / 2,
			this.canvasHeight - 20
		);
	}

	mousePressed(x, y) {
		this.addPoint(x, y);
	}
}
