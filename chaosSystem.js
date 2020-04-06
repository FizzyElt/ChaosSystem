class ChaosSystem {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}


class TinkerBell extends ChaosSystem {
    constructor(x, y) {
        super(x, y)
        this.x = x || -0.72
        this.y = y || -0.64
    }
    nextStatus() {
        let nextX = (this.x * this.x) - (this.y * this.y) + (0.9 * this.x) + (-0.6013 * this.y)
        let nextY = (2 * this.x * this.y) + (2 * this.x) + (0.5 * this.y)
        this.x = nextX
        this.y = nextY
    }
    draw() {
        drawDot(350 + this.x * 250, 150 - this.y * 180)
    }
} 


class Duffing extends ChaosSystem {
    constructor(x, y) {
        super(x, y)
        this.x = x || -0.1
        this.y = y || -0.1
    }
    nextStatus() {
        let nextX = this.y
        let nextY = -(0.2 * this.x) + (2.75 * this.y) - (this.y * this.y * this.y)
        this.x = nextX
        this.y = nextY
    }
    draw() {
        drawDot(250 + this.x * 140, 250 - this.y * 130)
    }
}


class Henon extends ChaosSystem {
    constructor(x, y) {
        super(x, y)
        this.x = x || 0.1
        this.y = y || -0.2
    }
    nextStatus() {
        let nextX = 1 - (1.4 * this.x * this.x) + this.y
        let nextY = 0.3 * this.x
        this.x = nextX
        this.y = nextY
    }
    draw() {
        drawDot(250 + this.x * 180, 250 - this.y * 600)
    }
}