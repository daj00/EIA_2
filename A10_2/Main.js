


"use strict";

var L10_2_GoldenerHerbstPolymorphie;
(function (L10_2_GoldenerHerbstPolymorphie) {
    window.addEventListener("load", handleLoad);
    let moveables = [];
    let imgData;
    function handleLoad(_event) {
        L10_2_GoldenerHerbstPolymorphie.canvas = document.querySelector("canvas");
        L10_2_GoldenerHerbstPolymorphie.crc2 = L10_2_GoldenerHerbstPolymorphie.canvas.getContext("2d");
        let golden = 0.62;
        let horizon = L10_2_GoldenerHerbstPolymorphie.crc2.canvas.height * golden;
        drawBackground();
        drawSun(new L10_2_GoldenerHerbstPolymorphie.Vector(150, 60));
        drawMountains(new L10_2_GoldenerHerbstPolymorphie.Vector(0, horizon), 75, 200, "grey", "white");
        drawMountains(new L10_2_GoldenerHerbstPolymorphie.Vector(0, horizon), 50, 150, "grey", "lightgrey");
        drawTrees(new L10_2_GoldenerHerbstPolymorphie.Vector(500, 100), "orange");
        drawTrees(new L10_2_GoldenerHerbstPolymorphie.Vector(700, 50), "red");
        drawTrees(new L10_2_GoldenerHerbstPolymorphie.Vector(900, 70), "green");
        drawNuts(new L10_2_GoldenerHerbstPolymorphie.Vector(500, 550), new L10_2_GoldenerHerbstPolymorphie.Vector(100, 50));
        drawFlower(new L10_2_GoldenerHerbstPolymorphie.Vector(250, 90));
        drawFlower(new L10_2_GoldenerHerbstPolymorphie.Vector(450, 100));
        imgData = L10_2_GoldenerHerbstPolymorphie.crc2.getImageData(0, 0, L10_2_GoldenerHerbstPolymorphie.canvas.width, L10_2_GoldenerHerbstPolymorphie.canvas.height);
        createClouds();
        createSquirrel();
        createLeaf();
        window.setInterval(update, 60);
    }
    function drawBackground() {
        let golden = 0.62;
        let gradient = L10_2_GoldenerHerbstPolymorphie.crc2.createLinearGradient(0, 0, 0, L10_2_GoldenerHerbstPolymorphie.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(1, "darkgreen");
        L10_2_GoldenerHerbstPolymorphie.crc2.fillStyle = gradient;
        L10_2_GoldenerHerbstPolymorphie.crc2.fillRect(0, 0, L10_2_GoldenerHerbstPolymorphie.crc2.canvas.width, L10_2_GoldenerHerbstPolymorphie.crc2.canvas.height);
    }
    function drawSun(_position) {
        let r1 = 30;
        let r2 = 150;
        let gradient = L10_2_GoldenerHerbstPolymorphie.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        L10_2_GoldenerHerbstPolymorphie.crc2.save();
        L10_2_GoldenerHerbstPolymorphie.crc2.translate(_position.x, _position.y);
        L10_2_GoldenerHerbstPolymorphie.crc2.fillStyle = gradient;
        L10_2_GoldenerHerbstPolymorphie.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        L10_2_GoldenerHerbstPolymorphie.crc2.fill();
        L10_2_GoldenerHerbstPolymorphie.crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        L10_2_GoldenerHerbstPolymorphie.crc2.save();
        L10_2_GoldenerHerbstPolymorphie.crc2.translate(_position.x, _position.y);
        L10_2_GoldenerHerbstPolymorphie.crc2.beginPath();
        L10_2_GoldenerHerbstPolymorphie.crc2.moveTo(0, 0);
        L10_2_GoldenerHerbstPolymorphie.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            L10_2_GoldenerHerbstPolymorphie.crc2.lineTo(x, y);
        } while (x < L10_2_GoldenerHerbstPolymorphie.crc2.canvas.width);
        L10_2_GoldenerHerbstPolymorphie.crc2.lineTo(x, 0);
        L10_2_GoldenerHerbstPolymorphie.crc2.closePath();
        let gradient = L10_2_GoldenerHerbstPolymorphie.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        L10_2_GoldenerHerbstPolymorphie.crc2.fillStyle = gradient;
        L10_2_GoldenerHerbstPolymorphie.crc2.fill();
        L10_2_GoldenerHerbstPolymorphie.crc2.restore();
    }
    function drawTrees(_position, _color) {
        //Strunk
        L10_2_GoldenerHerbstPolymorphie.crc2.beginPath();
        L10_2_GoldenerHerbstPolymorphie.crc2.fillStyle = "brown";
        L10_2_GoldenerHerbstPolymorphie.crc2.fillRect(_position.x + -300, _position.y + 400, 25, 110);
        //Tree
        L10_2_GoldenerHerbstPolymorphie.crc2.beginPath();
        L10_2_GoldenerHerbstPolymorphie.crc2.fillStyle = _color;
        L10_2_GoldenerHerbstPolymorphie.crc2.arc(_position.x - 310, _position.y + 360, 50, 0, 2 * Math.PI);
        L10_2_GoldenerHerbstPolymorphie.crc2.arc(_position.x - 250, _position.y + 320, 50, 0, 2 * Math.PI);
        L10_2_GoldenerHerbstPolymorphie.crc2.arc(_position.x - 260, _position.y + 360, 50, 0, 2 * Math.PI);
        L10_2_GoldenerHerbstPolymorphie.crc2.arc(_position.x - 300, _position.y + 320, 50, 0, 2 * Math.PI);
        L10_2_GoldenerHerbstPolymorphie.crc2.closePath();
        L10_2_GoldenerHerbstPolymorphie.crc2.fill();
        L10_2_GoldenerHerbstPolymorphie.crc2.restore();
    }
    function drawNuts(_position, _size) {
        let nParticles = 10;
        let radiusParticles = 5;
        let particle = new Path2D();
        let gradient = L10_2_GoldenerHerbstPolymorphie.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticles);
        particle.arc(0, 0, radiusParticles, 0, 2 * Math.PI);
        gradient.addColorStop(0, "brown");
        L10_2_GoldenerHerbstPolymorphie.crc2.save();
        L10_2_GoldenerHerbstPolymorphie.crc2.translate(_position.x, _position.y);
        L10_2_GoldenerHerbstPolymorphie.crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            L10_2_GoldenerHerbstPolymorphie.crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            L10_2_GoldenerHerbstPolymorphie.crc2.translate(x, y);
            L10_2_GoldenerHerbstPolymorphie.crc2.fill(particle);
            L10_2_GoldenerHerbstPolymorphie.crc2.restore();
        }
        L10_2_GoldenerHerbstPolymorphie.crc2.restore();
    }
    function drawFlower(_position) {
        //Flower
        L10_2_GoldenerHerbstPolymorphie.crc2.beginPath();
        L10_2_GoldenerHerbstPolymorphie.crc2.save();
        L10_2_GoldenerHerbstPolymorphie.crc2.fillStyle = "green";
        L10_2_GoldenerHerbstPolymorphie.crc2.fillRect(_position.x + 100, _position.y + 400, 5, 20);
        L10_2_GoldenerHerbstPolymorphie.crc2.restore();
        L10_2_GoldenerHerbstPolymorphie.crc2.beginPath();
        L10_2_GoldenerHerbstPolymorphie.crc2.fillStyle = "lightblue";
        L10_2_GoldenerHerbstPolymorphie.crc2.arc(_position.x + 100, _position.y + 382, 8, 0, 2 * Math.PI);
        L10_2_GoldenerHerbstPolymorphie.crc2.arc(_position.x + 98, _position.y + 387, 8, 0, 2 * Math.PI);
        L10_2_GoldenerHerbstPolymorphie.crc2.arc(_position.x + 110, _position.y + 383, 8, 0, 2 * Math.PI);
        L10_2_GoldenerHerbstPolymorphie.crc2.arc(_position.x + 113, _position.y + 390, 8, 0, 2 * Math.PI);
        L10_2_GoldenerHerbstPolymorphie.crc2.arc(_position.x + 113, _position.y + 395, 8, 0, 2 * Math.PI);
        L10_2_GoldenerHerbstPolymorphie.crc2.arc(_position.x + 112, _position.y + 397, 8, 0, 2 * Math.PI);
        L10_2_GoldenerHerbstPolymorphie.crc2.arc(_position.x + 104, _position.y + 400, 8, 0, 2 * Math.PI);
        L10_2_GoldenerHerbstPolymorphie.crc2.arc(_position.x + 100, _position.y + 400, 8, 0, 2 * Math.PI);
        L10_2_GoldenerHerbstPolymorphie.crc2.arc(_position.x + 98, _position.y + 394, 8, 0, 2 * Math.PI);
        L10_2_GoldenerHerbstPolymorphie.crc2.fill();
        L10_2_GoldenerHerbstPolymorphie.crc2.closePath();
        L10_2_GoldenerHerbstPolymorphie.crc2.restore();
    }
    function createClouds() {
        //console.log("Create Clouds");
        for (let i = 0; i < 1; i++) {
            let cloud = new L10_2_GoldenerHerbstPolymorphie.Cloud(0.5);
            moveables.push(cloud);
        }
    }
    function createSquirrel() {
        //console.log("create Squirrel");
        for (let i = 0; i < 1; i++) {
            let squirrel = new L10_2_GoldenerHerbstPolymorphie.Squirrel(0.5, new L10_2_GoldenerHerbstPolymorphie.Vector(0.5, 500));
            moveables.push(squirrel);
        }
    }
    function createLeaf() {
        //console.log("create Leave");
        for (let i = 0; i < 10; i++) {
            let leaf = new L10_2_GoldenerHerbstPolymorphie.Leaf(0.5, new L10_2_GoldenerHerbstPolymorphie.Vector(200, 500));
            moveables.push(leaf);
        }
    }
    function update() {
        console.log("Update");
        L10_2_GoldenerHerbstPolymorphie.crc2.clearRect(0, 0, L10_2_GoldenerHerbstPolymorphie.crc2.canvas.width, L10_2_GoldenerHerbstPolymorphie.crc2.canvas.height);
        L10_2_GoldenerHerbstPolymorphie.crc2.putImageData(imgData, 0, 0);
        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
    }
})(L10_2_GoldenerHerbstPolymorphie || (L10_2_GoldenerHerbstPolymorphie = {}));
//# sourceMappingURL=Main.js.map