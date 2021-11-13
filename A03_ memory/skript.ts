//In Zusammenarbeit mit Eileen Harr

namespace A03Memory {
    document.querySelector("button")?.addEventListener("click", start);
    let inputArray: string[] = [];
    let userInput: string;
    let mixedArray: string[] = [];
    let cardsSpan: HTMLSpanElement;
    let bg: string;
    let inputs: HTMLInputElement [];
    let formData: FormData;

    function start(): void {
        document.getElementById("fsSpecial")?.classList.add("isHidden");
        let userInputfeldWert: HTMLInputElement = <HTMLInputElement>document.getElementById("userInputfeld");
        userInput = userInputfeldWert.value;
        inputArray = userInput.split("");
        mixedArray = userInput.split("");

        mixIt(inputArray);
        createField();
    }
    function mixIt(_array: string[]): string[] {
        let currentIndex: number = mixedArray.length, randomIndex: number;
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [mixedArray[currentIndex], mixedArray[randomIndex]] = [mixedArray[randomIndex], mixedArray[currentIndex]];
        }
        console.log(inputArray);
        console.log(userInput);
        console.log(mixedArray);
        return _array;
    }

    function createField(): void {
        let letters: number = mixedArray.length - 1;
        while (letters >= 0) {
            let board: HTMLElement = <HTMLSpanElement>document.getElementById("Spielfeld");
            cardsSpan = document.createElement("span");
            board.appendChild(cardsSpan);
            cardsSpan.addEventListener("click", check);

            let letter: HTMLParagraphElement = <HTMLParagraphElement>document.createElement("p");
            cardsSpan.appendChild(letter);
            letter.innerHTML = mixedArray[letters];
            letters--;
            setTimeout(function (): void { letter.classList.add("isHidden"); }, 5000);
        }
                                                    //Haben wir bisher nicht lösen können, warum dat nicht geht
        formData = new FormData(document.forms[0]);
        bg = inputs[1].value;
        document.body.style.backgroundColor = bg;
    }
                                                    // Same here.
    function check(_event: MouseEvent): void {
        cardsSpan.classList.remove("isHidden");
        for (let i: number = 0; i <= mixedArray.length; i++) {
            let clickArray: string[] = [];
            let target: HTMLElement = <HTMLElement>_event.target;
            let textContent: string = <string>target.textContent;
            clickArray.push(textContent);
            if (inputArray[i] == clickArray[i] && i == mixedArray.length) {
                alert("Gut Gemacht! Gleich nochmal!");
            }
            else if (inputArray[i] != clickArray[i]) {
            alert("Versuche es nochmal.");

    }






}



}

}