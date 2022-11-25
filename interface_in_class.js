var Point = /** @class */ (function () {
    function Point(x, y) {
        var _this = this;
        this.x = x;
        this.y = y;
        this.showThePoint = function () {
            var res = _this.x * _this.y;
            return "xy = ".concat(res);
        };
    }
    return Point;
}());
var sdfsd = new Point(5, 2);
console.log(sdfsd.showThePoint());
