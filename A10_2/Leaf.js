"use strict";
var L10_2_GoldenerHerbstPolymorphie;
(function (L10_2_GoldenerHerbstPolymorphie) {
    class Leaf extends L10_2_GoldenerHerbstPolymorphie.Moveable {
        _size;
        constructor(_size, _position) {
            super(_position);
            if (_position)
                this.position = _position.copy();
            else
                this.position = new L10_2_GoldenerHerbstPolymorphie.Vector(0, 0);
            this.velocity = new L10_2_GoldenerHerbstPolymorphie.Vector(0, 0);
            this.velocity.random(100, 200);
        }
        draw() {
            let nParticles = 15;
            let radiusParticles = 10;
            let particle = new Path2D();
            let gradient = L10_2_GoldenerHerbstPolymorphie.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticles);
            particle.arc(0, 0, radiusParticles, 0, 0.9 * Math.PI);
            gradient.addColorStop(0, "orange");
            L10_2_GoldenerHerbstPolymorphie.crc2.save();
            L10_2_GoldenerHerbstPolymorphie.crc2.translate(this.position.x, this.position.y);
            L10_2_GoldenerHerbstPolymorphie.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                L10_2_GoldenerHerbstPolymorphie.crc2.save();
                L10_2_GoldenerHerbstPolymorphie.crc2.restore();
                let x = (Math.random() - 0.5) * this._size;
                let y = -(Math.random() * this._size);
                L10_2_GoldenerHerbstPolymorphie.crc2.translate(x, y);
                L10_2_GoldenerHerbstPolymorphie.crc2.fill(particle);
                L10_2_GoldenerHerbstPolymorphie.crc2.restore();
            }
            L10_2_GoldenerHerbstPolymorphie.crc2.restore();
            L10_2_GoldenerHerbstPolymorphie.crc2.closePath();
            L10_2_GoldenerHerbstPolymorphie.crc2.beginPath();
            particle.arc(0, 0, radiusParticles, 1, 0.8 * Math.PI);
            gradient.addColorStop(0, "red");
            L10_2_GoldenerHerbstPolymorphie.crc2.save();
            L10_2_GoldenerHerbstPolymorphie.crc2.translate(10 + this.position.y, 150 + this.position.x);
            L10_2_GoldenerHerbstPolymorphie.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                L10_2_GoldenerHerbstPolymorphie.crc2.save();
                let x = (Math.random() - 0.5) * this.size;
                let y = -(Math.random() * this.size);
                L10_2_GoldenerHerbstPolymorphie.crc2.translate(x, y);
                L10_2_GoldenerHerbstPolymorphie.crc2.fill(particle);
                L10_2_GoldenerHerbstPolymorphie.crc2.restore();
            }
            L10_2_GoldenerHerbstPolymorphie.crc2.restore();
            L10_2_GoldenerHerbstPolymorphie.crc2.closePath();
            L10_2_GoldenerHerbstPolymorphie.crc2.beginPath();
            particle.arc(0, 0, radiusParticles, 1, 0.8 * Math.PI);
            gradient.addColorStop(0, "green");
            L10_2_GoldenerHerbstPolymorphie.crc2.save();
            L10_2_GoldenerHerbstPolymorphie.crc2.translate(400 + this.position.x, this.position.y);
            L10_2_GoldenerHerbstPolymorphie.crc2.rotate(5);
            L10_2_GoldenerHerbstPolymorphie.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                L10_2_GoldenerHerbstPolymorphie.crc2.save();
                let x = (Math.random() - 0.5) * this.size;
                let y = -(Math.random() * this.size);
                L10_2_GoldenerHerbstPolymorphie.crc2.translate(x, y);
                L10_2_GoldenerHerbstPolymorphie.crc2.fill(particle);
                L10_2_GoldenerHerbstPolymorphie.crc2.restore();
            }
            L10_2_GoldenerHerbstPolymorphie.crc2.restore();
        }
    }
    L10_2_GoldenerHerbstPolymorphie.Leaf = Leaf;
})(L10_2_GoldenerHerbstPolymorphie || (L10_2_GoldenerHerbstPolymorphie = {}));
//# sourceMappingURL=Leaf.js.map