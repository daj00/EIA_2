namespace L11_2_GoldenerHerbst3 {

    export class Squirrel extends Moveable {

        constructor(_size: number, _position?: Vector) {
            super(_position);

            if (_position)
                this.position = _position;
            else
                this.position = new Vector(0, 0);

            this.velocity = new Vector(-200, 0);
        }

        public draw(): void {

            //Körper        
            crc2.beginPath();
            crc2.save();
            crc2.translate(-200 + this.position.x, 20 + this.position.y);
            crc2.fillStyle = "brown";
            crc2.arc(130, 19, 30, 0, 2 * Math.PI);
            crc2.arc(132, -23, 20, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();

            //Auge
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(125, -27, 2.5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();

            //Ohren
            crc2.beginPath();
            crc2.fillStyle = "darkred";
            crc2.arc(143, -38, 12, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();

            //Schwanz
            crc2.beginPath();
            crc2.fillStyle = "brown";
            crc2.arc(167, -10, 17, 0, 2 * Math.PI);
            crc2.arc(167, 0, 17, 0, 2 * Math.PI);
            crc2.arc(+ 160, 30, 17, 0, 2 * Math.PI);
            crc2.arc(165, 10, 16, 0, 2 * Math.PI);
            crc2.arc(165, 20, 16, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();

            crc2.restore();
            crc2.closePath();
            crc2.beginPath();
        }
    }
}