"use strict";
const subjects = ["Harry", "Hermine", "Ron", "hagrid", "Snape", "Dumbledore"];
const verbs = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
const objects = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumteribers", "Dementoren"];
console.log(subjects, verbs, objects);
for (let i = 6; i >= 1; i--) {
    //console.log(i); 
    console.log(getVerses(subjects, verbs, objects));
}
function getVerses(_subjects, _verbs, _objects) {
    let vers = ""; //erstellt den Vers
    let randomS = Math.floor(Math.random() * _subjects.length); //Mathfloor rundet die Zahlen. Such eine zufällige Stelle aus dem Array subjects
    let splicedS = _subjects.splice(randomS, 1)[0]; //umwandlung von einer number zu einem string
    vers = vers + " " + splicedS; //Ausgabe des subjektes
    let randomV = Math.floor(Math.random() * _verbs.length);
    let splicedV = _verbs.splice(randomV, 1)[0];
    vers = vers + " " + splicedV;
    let randomO = Math.floor(Math.random() * _objects.length);
    let splicedO = _objects.splice(randomO, 1)[0];
    vers = vers + " " + splicedO;
    return vers;
}
//# sourceMappingURL=1.js.map