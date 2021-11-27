"use strict";
var goldenerHerbst;
(function (goldenerHerbst) {
    window.addEventListener("load", handleLoad);
    let crc2;
    let golden = 0.62;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        background();
        clouds({ x: 300, y: 125 }, { x: 250, y: 75 });
        clouds({ x: 800, y: 300 }, { x: 250, y: 75 });
        mountains({ x: 0, y: 600 }, 50, 320, "grey", "white");
        mountains({ x: 0, y: 600 }, 70, 160, "grey", "white");
        trees({ x: 550, y: 200 }, { x: 200, y: 200 }, "orange");
        trees({ x: 800, y: 300 }, { x: 400, y: 400 }, "darkred");
        trees({ x: 1000, y: 150 }, { x: 200, y: 200 }, "darkgreen");
        trees({ x: 300, y: 250 }, { x: 400, y: 400 }, "darkgreen");
        trees({ x: 1200, y: 250 }, { x: 200, y: 200 }, "orange");
        squirrel({ x: 50, y: 730 }, { x: 250, y: 250 });
        squirrel({ x: 650, y: 750 }, { x: 250, y: 250 });
        nuts({ x: 300, y: 730 }, { x: 130, y: 75 });
        leaf({ x: 500, y: 800 }, { x: 1000, y: 400 });
        leaf2({ x: 500, y: 800 }, { x: 1000, y: 400 });
        bushes({ x: 700, y: 250 }, { x: 300, y: 200 }, "green");
        bushes({ x: 280, y: 280 }, { x: 300, y: 200 }, "darkgreen");
    }
    function background() {
        console.log("Background");
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "pink");
        gradient.addColorStop(1, "green");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function clouds(_position, _size) {
        console.log("Cloud", _position, _size);
        let nParticles = 40;
        let rParcticles = 50; // r=radius
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, rParcticles);
        particle.arc(0, 0, rParcticles, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(30, 50%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(30, 50%, 100%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function mountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains");
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
        crc2.lineTo(x, 0);
        crc2.closePath();
        let gradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }
    function trees(_position, _size, _color) {
        //Stamm
        crc2.beginPath();
        crc2.fillStyle = "brown";
        crc2.fillRect(_position.x + -300, _position.y + 400, 25, 110);
        //Krone
        crc2.beginPath();
        crc2.fillStyle = _color;
        crc2.arc(_position.x - 250, _position.y + 320, 100, 0, 2 * Math.PI);
        crc2.arc(_position.x - 300, _position.y + 320, 80, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.restore();
    }
    function squirrel(_position, _size) {
        //Körper
        crc2.beginPath();
        crc2.fillStyle = "brown";
        crc2.arc(_position.x + 130, _position.y + 19, 30, 0, 2 * Math.PI);
        crc2.arc(_position.x + 132, _position.y + -23, 20, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        //Augen
        crc2.beginPath();
        crc2.fillStyle = "black";
        crc2.arc(_position.x + 125, _position.y + -27, 2.5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        //Ohren
        crc2.beginPath();
        crc2.fillStyle = "brown";
        crc2.arc(_position.x + 143, _position.y + -38, 12, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        //Schwanz
        crc2.beginPath();
        crc2.fillStyle = "darkred";
        crc2.arc(_position.x + 170, _position.y + -10, 17, 0, 2 * Math.PI);
        crc2.arc(_position.x + 167, _position.y + 0, 17, 0, 2 * Math.PI);
        crc2.arc(_position.x + 150, _position.y + 30, 17, 0, 2 * Math.PI);
        crc2.arc(_position.x + 165, _position.y + 10, 16, 0, 2 * Math.PI);
        crc2.arc(_position.x + 165, _position.y + 20, 16, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }
    function nuts(_position, _size) {
        console.log("Nuts", _position, _size);
        let nParticles = 10;
        let rParcticles = 5;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, rParcticles);
        particle.arc(0, 0, rParcticles, 0, 2 * Math.PI);
        gradient.addColorStop(0, "black");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function leaf(_position, _size) {
        console.log("Leave", _position, _size);
        let nParticles = 15;
        let rParcticles = 10;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, rParcticles);
        particle.arc(0, 0, rParcticles, 0, 0.9 * Math.PI);
        gradient.addColorStop(0, "orange");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function leaf2(_position, _size) {
        console.log("Leave2", _position, _size);
        let nParticles = 15;
        let rParcticles = 10;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, rParcticles);
        particle.arc(0, 0, rParcticles, 1, 0.8 * Math.PI);
        gradient.addColorStop(0, "red");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function bushes(_position, _size, _color) {
        //Stäucher
        crc2.beginPath();
        crc2.fillStyle = "green";
        crc2.fillRect(_position.x + 100, _position.y + 400, 5, 20);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = _color;
        crc2.arc(_position.x + 113, _position.y + 395, 25, 0, 2 * Math.PI);
        crc2.arc(_position.x + 104, _position.y + 400, 25, 0, 2 * Math.PI);
        crc2.arc(_position.x + 98, _position.y + 394, 25, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }
})(goldenerHerbst || (goldenerHerbst = {}));
//# sourceMappingURL=code.js.map