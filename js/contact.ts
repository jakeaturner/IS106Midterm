class Contact {
    constructor() {

    }

    submitContact() {
        window.location.replace("./home.html");
        alert("Contact information submitted!");
    }
}

const contactCtrl = new Contact();