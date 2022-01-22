namespace L11_2_GoldenerHerbst3 {

    export class Leaf extends Moveable {

        private _size: number;

        constructor(_size: number, _position?: Vector) {
            super(_position);

            if (_position)
                this.position = _position.copy();
            else
                this.position = new Vector(0, 0);

            this.velocity = new Vector(0, 0);
            this.velocity = Vector.getRandom(100, 200);
        }

        public draw(): void {
            let nParticles: number = 15;
            let radiusParticles: number = 10;
            let particle: Path2D = new Path2D();
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticles);

            particle.arc(0, 0, radiusParticles, 0, 0.9 * Math.PI);
            gradient.addColorStop(0, "red");

            crc2.save();
            crc2.translate(-130 + this.position.x, -70 + this.position.y);

            crc2.fillStyle = gradient;

            for (let drawn: number = 5; drawn < nParticles; drawn++) {
                crc2.save();
                crc2.restore();
                let x: number = (Math.random() - 0.5) * this._size;
                let y: number = - (Math.random() * this._size);
                crc2.translate(x, y);
                crc2.fill(particle);
                crc2.restore();
            }
            crc2.restore();
            crc2.closePath();
        }
    }
}