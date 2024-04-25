var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person2 = /** @class */ (function () {
    function Person2(name) {
        this.name = name;
    }
    Person2.prototype.display = function () {
        console.log(this.name);
    };
    return Person2;
}());
var Employee2 = /** @class */ (function (_super) {
    __extends(Employee2, _super);
    function Employee2(name, code) {
        var _this = _super.call(this, name) || this; // must call super()
        _this.empCode = code;
        return _this;
    }
    Employee2.prototype.find = function (name) {
        return new Employee2(name, 1);
    };
    return Employee2;
}(Person2));
var emp = new Employee2("James", 100);
emp.display(); //James
var emp2 = emp.find('Steve');
