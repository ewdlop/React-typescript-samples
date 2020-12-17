"use strict";
exports.__esModule = true;
require("jasmine");
describe('Testing', function () {
    //type SUCC = (n: NUMBER) : NUMBER => (f: uF) => (x: any) => f(n(f)(x));
    var Zero = function (f) { return function (x) { return x; }; };
    var One = function (f) { return function (x) { return f(x); }; };
    var Two = function (f) { return function (x) { return f(f(x)); }; };
    var Three = function (f) { return function (x) { return f(f(f(x))); }; };
    var T = function (a) { return function (b) { return a; }; };
    var F = function (a) { return function (b) { return b; }; };
    var And = function (p) { return function (q) { return p(q)(p); }; };
    var Or = function (p) { return function (q) { return p(p)(q); }; };
    var Not = function (p) { return F(T); };
    var IfElse = function (p) { return function (q) { return function (m) { return p(q)(m); }; }; };
    it("Not T is F", function () {
        expect(Not(T)).toBe(F);
    });
});
