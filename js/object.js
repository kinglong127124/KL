//原型和继承http://www.cnblogs.com/ljchow/archive/2010/06/08/1753526.html
function A(x) {
        this.x = x;
        this.z = 'z';
        this.getData = function () {
            this.d = "d";
        };
    }
    debugger;

    A.prototype.a = "a";
    function B(x, y) {
        this.y = y;
        A.call(this, x);
    }
    B.prototype.b1 = function () {
        alert("b1");
    }
    B.prototype = new A();
    B.prototype.b2 = function () {
        alert("b2");
    }
    B.prototype.constructor = B;
    var obj = new B(1, 3);
    console.log(obj);