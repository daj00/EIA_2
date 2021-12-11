"use strict";
var Herbscht;
(function (Herbscht) {
    class Leave extends Herbscht.Moveable {
        constructor(_position, _x, _y) {
            super(_position);
            this.position = new Herbscht.Vector(_x, _y);
            this.velocity = new Herbscht.Vector(0, 0);
            this.velocity.scale(5);
        }
        move(_timeslice) {
            let offset = new Herbscht.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < -50) {
                this.velocity.set(40, -20);
                this.velocity.scale(5);
            }
            if (this.position.y < 500) {
                this.velocity.set(50, 10);
                this.velocity.scale(5);
            }
            if (this.position.x > 1000) {
                this.position.x = -100;
                this.velocity.scale(5);
            }
            if (this.position.y > 600) {
                this.velocity.set(50, -10);
                this.velocity.scale(5);
            }
        }
        draw() {
            Herbscht.crc2.resetTransform();
            Herbscht.crc2.translate(this.position.x, this.position.y);
            Herbscht.crc2.restore();
            leaf({ x: 500, y: 800 }, { x: 1000, y: 400 });
            leaf2({ x: 500, y: 800 }, { x: 1000, y: 400 });
        }
    }
    Herbscht.Leave = Leave;
    function leaf(_position, _size) {
        console.log("Leave", _position, _size);
        let nParticles = 15;
        let rParcticles = 10;
        let particle = new Path2D();
        let gradient = Herbscht.crc2.createRadialGradient(0, 0, 0, 0, 0, rParcticles);
        particle.arc(0, 0, rParcticles, 0, 0.9 * Math.PI);
        gradient.addColorStop(0, "orange");
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
    function leaf2(_position, _size) {
        console.log("Leave2", _position, _size);
        let nParticles = 15;
        let rParcticles = 10;
        let particle = new Path2D();
        let gradient = Herbscht.crc2.createRadialGradient(0, 0, 0, 0, 0, rParcticles);
        particle.arc(0, 0, rParcticles, 1, 0.8 * Math.PI);
        gradient.addColorStop(0, "red");
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
})(Herbscht || (Herbscht = {}));
//# sourceMappingURL=leave.js.map