var Contact = /** @class */ (function () {
    function Contact() {
    }
    Contact.prototype.submitContact = function () {
        window.location.replace("./home.html");
        alert("Contact information submitted!");
    };
    return Contact;
}());
var contactCtrl = new Contact();
