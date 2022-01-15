"use strict";
var L11_1_GoldenerHerbst_Advanced;
(function (L11_1_GoldenerHerbst_Advanced) {
    class Leaf extends L11_1_GoldenerHerbst_Advanced.Moveable {
        _size;
        constructor(_size, _position) {
            super(_position);
            if (_position)
                this.position = _position.copy();
            else
                this.position = new L11_1_GoldenerHerbst_Advanced.Vector(0, 0);
            this.velocity = new L11_1_GoldenerHerbst_Advanced.Vector(0, 0);
            this.velocity = L11_1_GoldenerHerbst_Advanced.Vector.getRandom(100, 200);
        }
        draw() {
            let nParticles = 15;
            let radiusParticles = 10;
            let particle = new Path2D();
            let gradient = L11_1_GoldenerHerbst_Advanced.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticles);
            particle.arc(0, 0, radiusParticles, 0, 0.9 * Math.PI);
            gradient.addColorStop(0, "orange");
            L11_1_GoldenerHerbst_Advanced.crc2.save();
            L11_1_GoldenerHerbst_Advanced.crc2.translate(this.position.x, this.position.y);
            L11_1_GoldenerHerbst_Advanced.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                L11_1_GoldenerHerbst_Advanced.crc2.save();
                L11_1_GoldenerHerbst_Advanced.crc2.restore();
                let x = (Math.random() - 0.5) * this._size;
                let y = -(Math.random() * this._size);
                L11_1_GoldenerHerbst_Advanced.crc2.translate(x, y);
                L11_1_GoldenerHerbst_Advanced.crc2.fill(particle);
                L11_1_GoldenerHerbst_Advanced.crc2.restore();
            }
            L11_1_GoldenerHerbst_Advanced.crc2.restore();
            L11_1_GoldenerHerbst_Advanced.crc2.closePath();
            L11_1_GoldenerHerbst_Advanced.crc2.beginPath();
            particle.arc(0, 0, radiusParticles, 1, 0.8 * Math.PI);
            gradient.addColorStop(0, "red");
            L11_1_GoldenerHerbst_Advanced.crc2.save();
            L11_1_GoldenerHerbst_Advanced.crc2.translate(10 + this.position.y, 150 + this.position.x);
            L11_1_GoldenerHerbst_Advanced.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                L11_1_GoldenerHerbst_Advanced.crc2.save();
                let x = (Math.random() - 0.5) * this.size;
                let y = -(Math.random() * this.size);
                L11_1_GoldenerHerbst_Advanced.crc2.translate(x, y);
                L11_1_GoldenerHerbst_Advanced.crc2.fill(particle);
                L11_1_GoldenerHerbst_Advanced.crc2.restore();
            }
            L11_1_GoldenerHerbst_Advanced.crc2.restore();
            L11_1_GoldenerHerbst_Advanced.crc2.closePath();
            L11_1_GoldenerHerbst_Advanced.crc2.beginPath();
            particle.arc(0, 0, radiusParticles, 1, 0.8 * Math.PI);
            gradient.addColorStop(0, "green");
            L11_1_GoldenerHerbst_Advanced.crc2.save();
            L11_1_GoldenerHerbst_Advanced.crc2.translate(400 + this.position.x, this.position.y);
            L11_1_GoldenerHerbst_Advanced.crc2.rotate(5);
            L11_1_GoldenerHerbst_Advanced.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                L11_1_GoldenerHerbst_Advanced.crc2.save();
                let x = (Math.random() - 0.5) * this.size;
                let y = -(Math.random() * this.size);
                L11_1_GoldenerHerbst_Advanced.crc2.translate(x, y);
                L11_1_GoldenerHerbst_Advanced.crc2.fill(particle);
                L11_1_GoldenerHerbst_Advanced.crc2.restore();
            }
            L11_1_GoldenerHerbst_Advanced.crc2.restore();
        }
    }
    L11_1_GoldenerHerbst_Advanced.Leaf = Leaf;
})(L11_1_GoldenerHerbst_Advanced || (L11_1_GoldenerHerbst_Advanced = {}));
//# sourceMappingURL=Leaf.js.map