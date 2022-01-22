"use strict";
var L11_2_GoldenerHerbst4;
(function (L11_2_GoldenerHerbst4) {
    class Leaf extends L11_2_GoldenerHerbst4.Moveable {
        _size;
        constructor(_size, _position) {
            super(_position);
            if (_position)
                this.position = _position.copy();
            else
                this.position = new L11_2_GoldenerHerbst4.Vector(0, 0);
            this.velocity = new L11_2_GoldenerHerbst4.Vector(0, 0);
            this.velocity = L11_2_GoldenerHerbst4.Vector.getRandom(100, 200);
        }
        draw() {
            let nParticles = 15;
            let radiusParticles = 10;
            let particle = new Path2D();
            let gradient = L11_2_GoldenerHerbst4.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticles);
            particle.arc(0, 0, radiusParticles, 0, 0.9 * Math.PI);
            gradient.addColorStop(0, "red");
            L11_2_GoldenerHerbst4.crc2.save();
            L11_2_GoldenerHerbst4.crc2.translate(-130 + this.position.x, -70 + this.position.y);
            L11_2_GoldenerHerbst4.crc2.fillStyle = gradient;
            for (let drawn = 5; drawn < nParticles; drawn++) {
                L11_2_GoldenerHerbst4.crc2.save();
                L11_2_GoldenerHerbst4.crc2.restore();
                let x = (Math.random() - 0.5) * this._size;
                let y = -(Math.random() * this._size);
                L11_2_GoldenerHerbst4.crc2.translate(x, y);
                L11_2_GoldenerHerbst4.crc2.fill(particle);
                L11_2_GoldenerHerbst4.crc2.restore();
            }
            L11_2_GoldenerHerbst4.crc2.restore();
            L11_2_GoldenerHerbst4.crc2.closePath();
        }
    }
    L11_2_GoldenerHerbst4.Leaf = Leaf;
})(L11_2_GoldenerHerbst4 || (L11_2_GoldenerHerbst4 = {}));
//# sourceMappingURL=Leaf.js.map