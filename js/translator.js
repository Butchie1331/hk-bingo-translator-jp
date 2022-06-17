function translate() {
    for (i = 1; i <= 25; i++) {
        document.getElementById("slot" + i).getElementsByClassName('text-container')[0].textContent = "test";
    }
};

translate();