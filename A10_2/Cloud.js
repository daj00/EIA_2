"use strict";
var L10_2_GoldenerHerbstPolymorphie;
(function (L10_2_GoldenerHerbstPolymorphie) {
    class Cloud extends L10_2_GoldenerHerbstPolymorphie.Moveable {
        constructor(_size, _position) {
            super(_position);
            if (_position)
                this.position = _position;
            else
                this.position = new L10_2_GoldenerHerbstPolymorphie.Vector(20, 100);
            this.velocity = new L10_2_GoldenerHerbstPolymorphie.Vector(100, 0);
            this.size = _size;
        }
        draw() {
            L10_2_GoldenerHerbstPolymorphie.crc2.beginPath();
            let radiusParticle = 3000;
            let particle = new Path2D();
            let gradient = L10_2_GoldenerHerbstPolymorphie.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.9)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 1)");
            L10_2_GoldenerHerbstPolymorphie.crc2.save();
            L10_2_GoldenerHerbstPolymorphie.crc2.translate(-200 + this.position.x, -50 + this.position.y);
            L10_2_GoldenerHerbstPolymorphie.crc2.fillStyle = gradient;
            L10_2_GoldenerHerbstPolymorphie.crc2.arc(10, 30, 25, 0, 2 * Math.PI);
            L10_2_GoldenerHerbstPolymorphie.crc2.arc(50, 25, 40, 0, 2 * Math.PI);
            L10_2_GoldenerHerbstPolymorphie.crc2.arc(90, 20, 35, 0, 2 * Math.PI);
            L10_2_GoldenerHerbstPolymorphie.crc2.arc(130, 20, 25, 0, 2 * Math.PI);
            L10_2_GoldenerHerbstPolymorphie.crc2.closePath();
            L10_2_GoldenerHerbstPolymorphie.crc2.fill();
            L10_2_GoldenerHerbstPolymorphie.crc2.restore();
            L10_2_GoldenerHerbstPolymorphie.crc2.beginPath();
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.9)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 1)");
            L10_2_GoldenerHerbstPolymorphie.crc2.save();
            L10_2_GoldenerHerbstPolymorphie.crc2.translate(-100 + this.position.x, 80 + this.position.y);
            L10_2_GoldenerHerbstPolymorphie.crc2.fillStyle = gradient;
            L10_2_GoldenerHerbstPolymorphie.crc2.arc(10, 30, 25, 0, 2 * Math.PI);
            L10_2_GoldenerHerbstPolymorphie.crc2.arc(50, 25, 40, 0, 2 * Math.PI);
            L10_2_GoldenerHerbstPolymorphie.crc2.arc(90, 20, 35, 0, 2 * Math.PI);
            L10_2_GoldenerHerbstPolymorphie.crc2.arc(130, 20, 25, 0, 2 * Math.PI);
            L10_2_GoldenerHerbstPolymorphie.crc2.closePath();
            L10_2_GoldenerHerbstPolymorphie.crc2.fill();
            L10_2_GoldenerHerbstPolymorphie.crc2.restore();
        }
        move(_timeslice) {
            super.move(1 / 50);
            console.log("move Cloud");
        }
    }
    L10_2_GoldenerHerbstPolymorphie.Cloud = Cloud;
})(L10_2_GoldenerHerbstPolymorphie || (L10_2_GoldenerHerbstPolymorphie = {}));
//# sourceMappingURL=Cloud.js.map