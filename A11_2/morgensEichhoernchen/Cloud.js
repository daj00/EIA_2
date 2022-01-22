"use strict";
var L11_2_GoldenerHerbst3;
(function (L11_2_GoldenerHerbst3) {
    class Cloud extends L11_2_GoldenerHerbst3.Moveable {
        constructor(_size, _position) {
            super(_position);
            if (_position)
                this.position = _position;
            else
                this.position = new L11_2_GoldenerHerbst3.Vector(20, 100);
            this.velocity = new L11_2_GoldenerHerbst3.Vector(100, 0);
            this.size = _size;
        }
        draw() {
            L11_2_GoldenerHerbst3.crc2.beginPath();
            let radiusParticle = 3000;
            let particle = new Path2D();
            let gradient = L11_2_GoldenerHerbst3.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.9)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 1)");
            L11_2_GoldenerHerbst3.crc2.save();
            L11_2_GoldenerHerbst3.crc2.translate(-200 + this.position.x, -50 + this.position.y);
            L11_2_GoldenerHerbst3.crc2.fillStyle = gradient;
            L11_2_GoldenerHerbst3.crc2.arc(10, 30, 25, 0, 2 * Math.PI);
            L11_2_GoldenerHerbst3.crc2.arc(50, 25, 40, 0, 2 * Math.PI);
            L11_2_GoldenerHerbst3.crc2.arc(90, 20, 35, 0, 2 * Math.PI);
            L11_2_GoldenerHerbst3.crc2.arc(130, 20, 25, 0, 2 * Math.PI);
            L11_2_GoldenerHerbst3.crc2.closePath();
            L11_2_GoldenerHerbst3.crc2.fill();
            L11_2_GoldenerHerbst3.crc2.restore();
            L11_2_GoldenerHerbst3.crc2.beginPath();
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.9)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 1)");
            L11_2_GoldenerHerbst3.crc2.save();
            L11_2_GoldenerHerbst3.crc2.translate(-100 + this.position.x, 80 + this.position.y);
            L11_2_GoldenerHerbst3.crc2.fillStyle = gradient;
            L11_2_GoldenerHerbst3.crc2.arc(10, 30, 25, 0, 2 * Math.PI);
            L11_2_GoldenerHerbst3.crc2.arc(50, 25, 40, 0, 2 * Math.PI);
            L11_2_GoldenerHerbst3.crc2.arc(90, 20, 35, 0, 2 * Math.PI);
            L11_2_GoldenerHerbst3.crc2.arc(130, 20, 25, 0, 2 * Math.PI);
            L11_2_GoldenerHerbst3.crc2.closePath();
            L11_2_GoldenerHerbst3.crc2.fill();
            L11_2_GoldenerHerbst3.crc2.restore();
        }
        move(_timeslice) {
            super.move(1 / 50);
        }
    }
    L11_2_GoldenerHerbst3.Cloud = Cloud;
})(L11_2_GoldenerHerbst3 || (L11_2_GoldenerHerbst3 = {}));
//# sourceMappingURL=Cloud.js.map