"use strict";
const subject = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
const verb = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
const object = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
//console.log(subject, verb, object);
for (let i = 6; i >= 1; i--) {
    //console.log(i);
    console.log(getVerse(subject, verb, object));
}
function getVerse(_subject, _verb, _object) {
    let vers = "";
    let randomS = Math.floor(Math.random() * _subject.length); //such eine zufällige Stelle aus dem Array subject
    let splicedS = _subject.splice(randomS, 1)[0]; //umwandlung von einer number zu einem string
    vers = vers + " " + splicedS; //Ausgabe des subjektes
    let randomV = Math.floor(Math.random() * _verb.length);
    let splicedV = _verb.splice(randomV, 1)[0];
    vers = vers + " " + splicedV;
    let randomO = Math.floor(Math.random() * _object.length);
    let splicedO = _object.splice(randomO, 1)[0];
    vers = vers + " " + splicedO;
    return vers;
}
//# sourceMappingURL=skript.js.map