//定义类
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}
Point.prototype.add = () => {
    console.log(55);
};
var p = new Point(1, 2);
console.log(p.x);
p.add();
console.log(p.toString(5,6));

typeof Point;
Point===Point.prototype.constructor;
console.log(typeof Point);
console.log(Point===Point.prototype.constructor);