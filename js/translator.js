import { bingoListJP } from './jp.js'
import { bingoListEN } from './en.js'

function translate() {
    for (i = 1; i <= 25; i++) {
        var textElement = document.getElementById("slot" + i).getElementsByClassName('text-container')[0];
        bingoListJP.forEach(jp, i => {
            if (jp["Desc"] === textElement.textContent) {
                textElement.textContent = bingoListEN[i]["Desc"];
                return;
            }
        });
        bingoListEN.forEach(en, i => {
            if (en["Desc"] === text) {
                textElement.textContent = bingoListJP[i]["Desc"];
                return;
            }
        });
    }
};

translate();