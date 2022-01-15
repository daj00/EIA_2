"use strict";
/*Eileen Harr nutzte dies als Inspiration
*/
var L11_1_GoldenerHerbst_Advanced;
(function (L11_1_GoldenerHerbst_Advanced) {
    window.addEventListener("load", handleLoad);
    let moveables = [];
    let imgData;
    L11_1_GoldenerHerbst_Advanced.nutPos = [];
    function handleLoad(_event) {
        L11_1_GoldenerHerbst_Advanced.canvas = document.querySelector("canvas");
        L11_1_GoldenerHerbst_Advanced.crc2 = L11_1_GoldenerHerbst_Advanced.canvas.getContext("2d");
        let golden = 0.62;
        let horizon = L11_1_GoldenerHerbst_Advanced.crc2.canvas.height * golden;
        drawBackground();
        drawSun(new L11_1_GoldenerHerbst_Advanced.Vector(150, 60));
        drawMountains(new L11_1_GoldenerHerbst_Advanced.Vector(0, horizon), 75, 200, "grey", "white");
        drawMountains(new L11_1_GoldenerHerbst_Advanced.Vector(0, horizon), 50, 150, "grey", "lightgrey");
        drawTrees(new L11_1_GoldenerHerbst_Advanced.Vector(500, 100), "orange");
        drawTrees(new L11_1_GoldenerHerbst_Advanced.Vector(700, 50), "red");
        drawTrees(new L11_1_GoldenerHerbst_Advanced.Vector(900, 70), "green");
        drawFlower(new L11_1_GoldenerHerbst_Advanced.Vector(250, 90));
        drawFlower(new L11_1_GoldenerHerbst_Advanced.Vector(450, 100));
        imgData = L11_1_GoldenerHerbst_Advanced.crc2.getImageData(0, 0, L11_1_GoldenerHerbst_Advanced.canvas.width, L11_1_GoldenerHerbst_Advanced.canvas.height);
        createClouds();
        createSquirrel();
        createLeaf();
        L11_1_GoldenerHerbst_Advanced.canvas.addEventListener("click", createNut);
        window.setInterval(update, 60);
    }
    function drawBackground() {
        let golden = 0.62;
        let gradient = L11_1_GoldenerHerbst_Advanced.crc2.createLinearGradient(0, 0, 0, L11_1_GoldenerHerbst_Advanced.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(1, "darkgreen");
        L11_1_GoldenerHerbst_Advanced.crc2.fillStyle = gradient;
        L11_1_GoldenerHerbst_Advanced.crc2.fillRect(0, 0, L11_1_GoldenerHerbst_Advanced.crc2.canvas.width, L11_1_GoldenerHerbst_Advanced.crc2.canvas.height);
    }
    function drawSun(_position) {
        let r1 = 30;
        let r2 = 150;
        let gradient = L11_1_GoldenerHerbst_Advanced.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        L11_1_GoldenerHerbst_Advanced.crc2.save();
        L11_1_GoldenerHerbst_Advanced.crc2.translate(_position.x, _position.y);
        L11_1_GoldenerHerbst_Advanced.crc2.fillStyle = gradient;
        L11_1_GoldenerHerbst_Advanced.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        L11_1_GoldenerHerbst_Advanced.crc2.fill();
        L11_1_GoldenerHerbst_Advanced.crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        L11_1_GoldenerHerbst_Advanced.crc2.save();
        L11_1_GoldenerHerbst_Advanced.crc2.translate(_position.x, _position.y);
        L11_1_GoldenerHerbst_Advanced.crc2.beginPath();
        L11_1_GoldenerHerbst_Advanced.crc2.moveTo(0, 0);
        L11_1_GoldenerHerbst_Advanced.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            L11_1_GoldenerHerbst_Advanced.crc2.lineTo(x, y);
        } while (x < L11_1_GoldenerHerbst_Advanced.crc2.canvas.width);
        L11_1_GoldenerHerbst_Advanced.crc2.lineTo(x, 0);
        L11_1_GoldenerHerbst_Advanced.crc2.closePath();
        let gradient = L11_1_GoldenerHerbst_Advanced.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        L11_1_GoldenerHerbst_Advanced.crc2.fillStyle = gradient;
        L11_1_GoldenerHerbst_Advanced.crc2.fill();
        L11_1_GoldenerHerbst_Advanced.crc2.restore();
    }
    function drawTrees(_position, _color) {
        //Strunk
        L11_1_GoldenerHerbst_Advanced.crc2.beginPath();
        L11_1_GoldenerHerbst_Advanced.crc2.fillStyle = "brown";
        L11_1_GoldenerHerbst_Advanced.crc2.fillRect(_position.x + -300, _position.y + 400, 25, 110);
        //Tree
        L11_1_GoldenerHerbst_Advanced.crc2.beginPath();
        L11_1_GoldenerHerbst_Advanced.crc2.fillStyle = _color;
        L11_1_GoldenerHerbst_Advanced.crc2.arc(_position.x - 310, _position.y + 360, 50, 0, 2 * Math.PI);
        L11_1_GoldenerHerbst_Advanced.crc2.arc(_position.x - 250, _position.y + 320, 50, 0, 2 * Math.PI);
        L11_1_GoldenerHerbst_Advanced.crc2.arc(_position.x - 260, _position.y + 360, 50, 0, 2 * Math.PI);
        L11_1_GoldenerHerbst_Advanced.crc2.arc(_position.x - 300, _position.y + 320, 50, 0, 2 * Math.PI);
        L11_1_GoldenerHerbst_Advanced.crc2.closePath();
        L11_1_GoldenerHerbst_Advanced.crc2.fill();
        L11_1_GoldenerHerbst_Advanced.crc2.restore();
    }
    function drawFlower(_position) {
        //Flower
        L11_1_GoldenerHerbst_Advanced.crc2.beginPath();
        L11_1_GoldenerHerbst_Advanced.crc2.save();
        L11_1_GoldenerHerbst_Advanced.crc2.fillStyle = "green";
        L11_1_GoldenerHerbst_Advanced.crc2.fillRect(_position.x + 100, _position.y + 400, 5, 20);
        L11_1_GoldenerHerbst_Advanced.crc2.restore();
        L11_1_GoldenerHerbst_Advanced.crc2.beginPath();
        L11_1_GoldenerHerbst_Advanced.crc2.fillStyle = "lightblue";
        L11_1_GoldenerHerbst_Advanced.crc2.arc(_position.x + 100, _position.y + 382, 8, 0, 2 * Math.PI);
        L11_1_GoldenerHerbst_Advanced.crc2.arc(_position.x + 98, _position.y + 387, 8, 0, 2 * Math.PI);
        L11_1_GoldenerHerbst_Advanced.crc2.arc(_position.x + 110, _position.y + 383, 8, 0, 2 * Math.PI);
        L11_1_GoldenerHerbst_Advanced.crc2.arc(_position.x + 113, _position.y + 390, 8, 0, 2 * Math.PI);
        L11_1_GoldenerHerbst_Advanced.crc2.arc(_position.x + 113, _position.y + 395, 8, 0, 2 * Math.PI);
        L11_1_GoldenerHerbst_Advanced.crc2.arc(_position.x + 112, _position.y + 397, 8, 0, 2 * Math.PI);
        L11_1_GoldenerHerbst_Advanced.crc2.arc(_position.x + 104, _position.y + 400, 8, 0, 2 * Math.PI);
        L11_1_GoldenerHerbst_Advanced.crc2.arc(_position.x + 100, _position.y + 400, 8, 0, 2 * Math.PI);
        L11_1_GoldenerHerbst_Advanced.crc2.arc(_position.x + 98, _position.y + 394, 8, 0, 2 * Math.PI);
        L11_1_GoldenerHerbst_Advanced.crc2.fill();
        L11_1_GoldenerHerbst_Advanced.crc2.closePath();
        L11_1_GoldenerHerbst_Advanced.crc2.restore();
    }
    function createClouds() {
        //console.log("Create Clouds");
        for (let i = 0; i < 1; i++) {
            let cloud = new L11_1_GoldenerHerbst_Advanced.Cloud(0.5);
            moveables.push(cloud);
        }
    }
    function createSquirrel() {
        //console.log("create Squirrel");
        for (let i = 0; i < 1; i++) {
            let squirrel = new L11_1_GoldenerHerbst_Advanced.Squirrel(0.5, new L11_1_GoldenerHerbst_Advanced.Vector(0.5, 500));
            moveables.push(squirrel);
        }
    }
    function createLeaf() {
        //console.log("create Leave");
        for (let i = 0; i < 10; i++) {
            let leaf = new L11_1_GoldenerHerbst_Advanced.Leaf(0.5, new L11_1_GoldenerHerbst_Advanced.Vector(200, 500));
            moveables.push(leaf);
        }
    }
    function update() {
        console.log("Update");
        L11_1_GoldenerHerbst_Advanced.crc2.clearRect(0, 0, L11_1_GoldenerHerbst_Advanced.crc2.canvas.width, L11_1_GoldenerHerbst_Advanced.crc2.canvas.height);
        L11_1_GoldenerHerbst_Advanced.crc2.putImageData(imgData, 0, 0);
        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
            console.log(moveables);
        }
    }
    //inspiriert von Eyüp Öcal
    function createNut(_event) {
        console.log(_event);
        // tslint:disable-next-line: typedef
        let nut = new L11_1_GoldenerHerbst_Advanced.Nut(new L11_1_GoldenerHerbst_Advanced.Vector(_event.offsetX, _event.offsetY));
        moveables.push(nut);
        let placeNut = new L11_1_GoldenerHerbst_Advanced.Vector(_event.offsetX, _event.offsetY);
        L11_1_GoldenerHerbst_Advanced.nutPos.push(placeNut);
    }
})(L11_1_GoldenerHerbst_Advanced || (L11_1_GoldenerHerbst_Advanced = {}));
//# sourceMappingURL=Main.js.map