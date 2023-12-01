var ConsoleDisplay = /** @class */ (function () {
    function ConsoleDisplay() {
    }
    ConsoleDisplay.prototype.display = function (text) {
        console.log(text);
    };
    return ConsoleDisplay;
}());
var WebDisplay = /** @class */ (function () {
    function WebDisplay() {
        this.body = document.querySelector('body');
    }
    WebDisplay.prototype.display = function (text) {
        this.body.textContent = text;
    };
    return WebDisplay;
}());
var app = function (output) { return output.display('dupa'); };
app(new ConsoleDisplay());
try {
    app(new WebDisplay());
}
catch (e) { }
