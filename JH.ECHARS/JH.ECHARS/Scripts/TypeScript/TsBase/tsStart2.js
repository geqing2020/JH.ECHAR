var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var startNew = /** @class */ (function (_super) {
    __extends(startNew, _super);
    function startNew() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return startNew;
}(Student));
function ShowT() {
    var aa = new Student("111", "222", "333");
    aa.ShowStudentA(aa);
}
Start();
//# sourceMappingURL=tsStart2.js.map