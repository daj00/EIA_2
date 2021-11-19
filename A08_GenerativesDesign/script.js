"use strict";
//Zusammenarbeit mit Eileen Harr
var generativeArt;
(function (generativeArt) {
    let crc2;
    window.addEventListener("load", load);
    function load(_event) {
        let canvas = document.querySelector("canvas"); //Zugriff auf html 
        crc2 = canvas.getContext("2d");
        for (let i = 0; i < 29; i++) {
            drawAngular();
            drawCircle();
        }
    }
    function drawAngular() {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        crc2.beginPath();
        crc2.moveTo(generateX(600), generateY(600));
        crc2.lineTo(generateX(600), generateY(600));
        crc2.lineTo(generateX(400), generateY(600));
        crc2.lineTo(generateX(600), generateY(600));
        crc2.lineTo(generateX(600), generateY(600));
        crc2.lineTo(generateX(100), generateY(600)); //haben mit den Zahlen gespielt, um zu schauen, was sich verädnert.
        crc2.lineTo(generateX(600), generateY(600));
        crc2.fillStyle = "#" + randomColor; //Zufällige  Farben werden generiert.
        crc2.strokeStyle = "#" + randomColor;
        crc2.lineWidth = 3;
        crc2.stroke();
        crc2.fill();
    }
    function drawCircle() {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        crc2.beginPath();
        crc2.arc(generateX(600), generateY(450), generateCircleNumber(50), 0, 2 * Math.PI);
        crc2.fillStyle = "#" + randomColor;
        crc2.strokeStyle = "#" + randomColor;
        crc2.lineWidth = 3;
        crc2.stroke();
        crc2.fill();
    }
    function generateX(_x) {
        let x = Math.random() * _x;
        return x;
    }
    function generateY(_y) {
        let y = Math.random() * _y;
        return y;
    }
    function generateCircleNumber(_g) {
        let g = Math.random() * _g;
        return g;
    }
})(generativeArt || (generativeArt = {}));
//# sourceMappingURL=script.js.map