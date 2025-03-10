class Circle {
    constructor(xPos, yPos, radius) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }

    move(xOffset, yOffset) {
        this.xPos += xOffset;
        this.yPos += yOffset;
    }

    get surface() {
        return Math.PI * this.radius * this.radius;
    }
}

const myCircle = new Circle(0, 0, 10);
console.log(`Position du cercle: (${myCircle.xPos}, ${myCircle.yPos})`);
console.log(`Surface du cercle: ${myCircle.surface}`);

myCircle.move(5, 5);
console.log(`Nouvelle position du cercle: (${myCircle.xPos}, ${myCircle.yPos})`);
console.log(`Surface du cercle: ${myCircle.surface}`);

class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length) {
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }

    collides(otherRectangle) {
        return !(
            this.topLeftXPos + this.width < otherRectangle.topLeftXPos ||
            this.topLeftXPos > otherRectangle.topLeftXPos + otherRectangle.width ||
            this.topLeftYPos + this.length < otherRectangle.topLeftYPos ||
            this.topLeftYPos > otherRectangle.topLeftYPos + otherRectangle.length
        );
    }
}

const rect1 = new Rectangle(0, 0, 10, 10);
const rect2 = new Rectangle(5, 5, 10, 10);
const rect3 = new Rectangle(20, 20, 10, 10);

console.log(`rect1 et rect2 se chevauchent: ${rect1.collides(rect2)}`);
console.log(`rect1 et rect3 se chevauchent: ${rect1.collides(rect3)}`);
console.log(`rect2 et rect3 se chevauchent: ${rect2.collides(rect3)}`);

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const rectangles = [];
for (let i = 0; i < 1000; i++) {
    const topLeftXPos = randomInt(0, 100);
    const topLeftYPos = randomInt(0, 100);
    const width = randomInt(1, 20);
    const length = randomInt(1, 20);
    rectangles.push(new Rectangle(topLeftXPos, topLeftYPos, width, length));
}

const collidingRectangles = [];
for (let i = 0; i < rectangles.length; i++) {
    for (let j = i + 1; j < rectangles.length; j++) {
        if (rectangles[i].collides(rectangles[j])) {
            collidingRectangles.push([rectangles[i], rectangles[j]]);
        }
    }
}

console.log(`Nombre de collisions: ${collidingRectangles.length}`);
collidingRectangles.forEach((pair, index) => {
    console.log(`Collision ${index + 1}: Rect1 (${pair[0].topLeftXPos}, ${pair[0].topLeftYPos}) chevauche Rect2 (${pair[1].topLeftXPos}, ${pair[1].topLeftYPos})`);
});
