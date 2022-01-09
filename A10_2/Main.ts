/*Zusammenarbeit mit Verena Rothweiler und Neslisah Koc */

namespace L10_2_GoldenerHerbstPolymorphie {

    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement | null;
    let moveables: Moveable[] = [];
    let imgData: ImageData;


    function handleLoad(_event: Event): void {
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        let golden: number = 0.62;
        let horizon: number = crc2.canvas.height * golden;

        drawBackground();
        drawSun(new Vector(150, 60));
        drawMountains(new Vector(0, horizon), 75, 200, "grey", "white");
        drawMountains(new Vector(0, horizon), 50, 150, "grey", "lightgrey");
        drawTrees(new Vector(500, 100), "orange");
        drawTrees(new Vector(700, 50), "red");
        drawTrees(new Vector(900, 70), "green");
        drawNuts(new Vector(500, 550), new Vector(100, 50));
        drawFlower(new Vector(250, 90));
        drawFlower(new Vector(450, 100));

        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        createClouds();
        createSquirrel();
        createLeaf();
        window.setInterval(update, 60);


    }

    function drawBackground(): void {
        let golden: number = 0.62;
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(1, "darkgreen");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    function drawSun(_position: Vector): void {
        let r1: number = 30;
        let r2: number = 150;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }

    function drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        let stepMin: number = 50;
        let stepMax: number = 150;
        let x: number = 0;

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);

        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = -_min - Math.random() * (_max - _min);

            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);
        crc2.closePath();


        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);

        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();
    }

    function drawTrees(_position: Vector, _color: string): void {
        //Strunk
        crc2.beginPath();
        crc2.fillStyle = "brown";
        crc2.fillRect(_position.x + -300, _position.y + 400, 25, 110);
        //Tree
        crc2.beginPath();
        crc2.fillStyle = _color;
        crc2.arc(_position.x - 310, _position.y + 360, 50, 0, 2 * Math.PI);
        crc2.arc(_position.x - 250, _position.y + 320, 50, 0, 2 * Math.PI);
        crc2.arc(_position.x - 260, _position.y + 360, 50, 0, 2 * Math.PI);
        crc2.arc(_position.x - 300, _position.y + 320, 50, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.restore();


    }

    function drawNuts(_position: Vector, _size: Vector): void {
        let nParticles: number = 10;
        let radiusParticles: number = 5;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticles);

        particle.arc(0, 0, radiusParticles, 0, 2 * Math.PI);
        gradient.addColorStop(0, "brown");


        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }

    function drawFlower(_position: Vector): void {
        //Flower
        crc2.beginPath();
        crc2.save();
        crc2.fillStyle = "green";
        crc2.fillRect(_position.x + 100, _position.y + 400, 5, 20);
        crc2.restore();
        crc2.beginPath();
        crc2.fillStyle = "lightblue";
        crc2.arc(_position.x + 100, _position.y + 382, 8, 0, 2 * Math.PI);
        crc2.arc(_position.x + 98, _position.y + 387, 8, 0, 2 * Math.PI);
        crc2.arc(_position.x + 110, _position.y + 383, 8, 0, 2 * Math.PI);
        crc2.arc(_position.x + 113, _position.y + 390, 8, 0, 2 * Math.PI);
        crc2.arc(_position.x + 113, _position.y + 395, 8, 0, 2 * Math.PI);
        crc2.arc(_position.x + 112, _position.y + 397, 8, 0, 2 * Math.PI);
        crc2.arc(_position.x + 104, _position.y + 400, 8, 0, 2 * Math.PI);
        crc2.arc(_position.x + 100, _position.y + 400, 8, 0, 2 * Math.PI);
        crc2.arc(_position.x + 98, _position.y + 394, 8, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
        crc2.restore();


    }

    function createClouds(): void {
        //console.log("Create Clouds");
        for (let i: number = 0; i < 1; i++) {
            let cloud: Cloud = new Cloud(0.5);
            moveables.push(cloud);
        }


    }
    function createSquirrel(): void {
        //console.log("create Squirrel");
        for (let i: number = 0; i < 1; i++) {
            let squirrel: Squirrel = new Squirrel(0.5, new Vector(0.5, 500));
            moveables.push(squirrel);
        }

    }

    function createLeaf(): void {
        //console.log("create Leave");
        for (let i: number = 0; i < 10; i++) {
            let leaf: Leaf = new Leaf(0.5, new Vector(200, 500));
            moveables.push(leaf);
        }
    }

    function update(): void {
        console.log("Update");
        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imgData, 0, 0);
        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();

        }


    }

}