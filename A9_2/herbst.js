"use strict";
var Herbscht;
(function (Herbscht) {
    let moveables = [];
    window.addEventListener("load", handleload);
    let imgData;
    let golden = 0.62;
    function handleload(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas) {
            return;
        }
        Herbscht.crc2 = canvas.getContext("2d");
        background();
        mountains({ x: 0, y: 600 }, 50, 320, "grey", "white");
        mountains({ x: 0, y: 600 }, 70, 160, "grey", "white");
        trees({ x: 550, y: 200 }, { x: 200, y: 200 }, "darkred");
        trees({ x: 800, y: 300 }, { x: 400, y: 400 }, "orange");
        trees({ x: 1000, y: 150 }, { x: 200, y: 200 }, "darkgreen");
        trees({ x: 300, y: 250 }, { x: 400, y: 400 }, "darkgreen");
        trees({ x: 1200, y: 250 }, { x: 200, y: 200 }, "darkred");
        squirrel({ x: 50, y: 730 }, { x: 250, y: 250 });
        squirrel({ x: 650, y: 750 }, { x: 250, y: 250 });
        nuts({ x: 300, y: 730 }, { x: 130, y: 75 });
        bushes({ x: 700, y: 250 }, { x: 300, y: 200 }, "green");
        bushes({ x: 280, y: 280 }, { x: 300, y: 200 }, "darkgreen");
        imgData = Herbscht.crc2.getImageData(0, 0, canvas.width, canvas.height);
        createMoveable(1);
        window.setInterval(update, 20);
    }
    function background() {
        console.log("Background is drawing");
        let gradient = Herbscht.crc2.createLinearGradient(0, 0, 0, Herbscht.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "pink");
        gradient.addColorStop(1, "green");
        Herbscht.crc2.fillStyle = gradient;
        Herbscht.crc2.fillRect(0, 0, Herbscht.crc2.canvas.width, Herbscht.crc2.canvas.height);
    }
    function mountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains");
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        Herbscht.crc2.save();
        Herbscht.crc2.translate(_position.x, _position.y);
        Herbscht.crc2.beginPath();
        Herbscht.crc2.moveTo(0, 0);
        Herbscht.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            Herbscht.crc2.lineTo(x, y);
        } while (x < Herbscht.crc2.canvas.width);
        Herbscht.crc2.lineTo(x, 0);
        Herbscht.crc2.closePath();
        let gradient = Herbscht.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        Herbscht.crc2.fillStyle = gradient;
        Herbscht.crc2.fill();
        Herbscht.crc2.restore();
    }
    function trees(_position, _size, _color) {
        //Stamm
        Herbscht.crc2.beginPath();
        Herbscht.crc2.fillStyle = "brown";
        Herbscht.crc2.fillRect(_position.x + -300, _position.y + 400, 25, 110);
        //Krone
        Herbscht.crc2.beginPath();
        Herbscht.crc2.fillStyle = _color;
        Herbscht.crc2.arc(_position.x - 250, _position.y + 320, 100, 0, 2 * Math.PI);
        Herbscht.crc2.arc(_position.x - 300, _position.y + 320, 80, 0, 2 * Math.PI);
        Herbscht.crc2.closePath();
        Herbscht.crc2.fill();
        Herbscht.crc2.restore();
    }
    function squirrel(_position, _size) {
        //Körper
        Herbscht.crc2.beginPath();
        Herbscht.crc2.fillStyle = "brown";
        Herbscht.crc2.arc(_position.x + 130, _position.y + 19, 30, 0, 2 * Math.PI);
        Herbscht.crc2.arc(_position.x + 132, _position.y + -23, 20, 0, 2 * Math.PI);
        Herbscht.crc2.closePath();
        Herbscht.crc2.fill();
        //Augen
        Herbscht.crc2.beginPath();
        Herbscht.crc2.fillStyle = "black";
        Herbscht.crc2.arc(_position.x + 125, _position.y + -27, 2.5, 0, 2 * Math.PI);
        Herbscht.crc2.closePath();
        Herbscht.crc2.fill();
        //Ohren
        Herbscht.crc2.beginPath();
        Herbscht.crc2.fillStyle = "darkred";
        Herbscht.crc2.arc(_position.x + 143, _position.y + -38, 12, 0, 2 * Math.PI);
        Herbscht.crc2.closePath();
        Herbscht.crc2.fill();
        //Schwanz
        Herbscht.crc2.beginPath();
        Herbscht.crc2.fillStyle = "darkred";
        Herbscht.crc2.arc(_position.x + 170, _position.y + -10, 17, 0, 2 * Math.PI);
        Herbscht.crc2.arc(_position.x + 167, _position.y + 0, 17, 0, 2 * Math.PI);
        Herbscht.crc2.arc(_position.x + 150, _position.y + 30, 17, 0, 2 * Math.PI);
        Herbscht.crc2.arc(_position.x + 165, _position.y + 10, 16, 0, 2 * Math.PI);
        Herbscht.crc2.arc(_position.x + 165, _position.y + 20, 16, 0, 2 * Math.PI);
        Herbscht.crc2.closePath();
        Herbscht.crc2.fill();
    }
    function nuts(_position, _size) {
        console.log("Nuts", _position, _size);
        let nParticles = 10;
        let rParcticles = 5;
        let particle = new Path2D();
        let gradient = Herbscht.crc2.createRadialGradient(0, 0, 0, 0, 0, rParcticles);
        particle.arc(0, 0, rParcticles, 0, 2 * Math.PI);
        gradient.addColorStop(0, "black");
        Herbscht.crc2.save();
        Herbscht.crc2.translate(_position.x, _position.y);
        Herbscht.crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            Herbscht.crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            Herbscht.crc2.translate(x, y);
            Herbscht.crc2.fill(particle);
            Herbscht.crc2.restore();
        }
        Herbscht.crc2.restore();
    }
    function bushes(_position, _size, _color) {
        //Stäucher
        Herbscht.crc2.beginPath();
        Herbscht.crc2.fillStyle = "green";
        Herbscht.crc2.fillRect(_position.x + 100, _position.y + 400, 5, 20);
        Herbscht.crc2.closePath();
        Herbscht.crc2.fill();
        Herbscht.crc2.beginPath();
        Herbscht.crc2.fillStyle = _color;
        Herbscht.crc2.arc(_position.x + 113, _position.y + 395, 25, 0, 2 * Math.PI);
        Herbscht.crc2.arc(_position.x + 104, _position.y + 400, 25, 0, 2 * Math.PI);
        Herbscht.crc2.arc(_position.x + 98, _position.y + 394, 25, 0, 2 * Math.PI);
        Herbscht.crc2.closePath();
        Herbscht.crc2.fill();
    }
    function createMoveable(_nMoveable) {
        console.log("Create Moveables");
        for (let i = 0; i < _nMoveable; i++) {
            let move1 = new Herbscht.Cloud(2, 0, 100);
            let move2 = new Herbscht.Squirrel(2.0, 50, 350);
            let move3 = new Herbscht.Leave(20, -51, 500);
            console.log("MOVEABLE: " + move1);
            console.log("MOVEABLE: " + move2);
            console.log("MOVEABLE: " + move3);
            moveables.push(move1);
            moveables.push(move2);
            moveables.push(move3);
        }
    }
    function update() {
        console.log("Update");
        Herbscht.crc2.putImageData(imgData, 0, 0);
        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
    }
})(Herbscht || (Herbscht = {}));
//# sourceMappingURL=herbst.js.map