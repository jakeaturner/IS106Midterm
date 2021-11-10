var Login = /** @class */ (function () {
    function Login() {
    }
    Login.prototype.login = function () {
        window.location.replace("./home.html");
        alert("Success!");
    };
    Login.prototype.logout = function () {
    };
    return Login;
}());
var loginCtrl = new Login();
