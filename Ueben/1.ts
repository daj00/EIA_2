

    const subjects: string[] = ["Harry", "Hermine", "Ron", "hagrid", "Snape", "Dumbledore"];
    const verbs: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    const objects: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumteribers", "Dementoren"];
    console.log(subjects, verbs, objects);



    for (let i: number = 6; i >= 1; i--) {
    //console.log(i); 
    console.log(getVerses(subjects, verbs, objects));
}   



    function getVerses(_subjects: string[], _verbs: string[], _objects: string[]): string {  //übernimmt die Werte aus den String-Arrays
        let vers: string = ""; //erstellt den Vers
    
        let randomS: number = Math.floor(Math.random() * _subjects.length); //Mathfloor rundet die Zahlen. Such eine zufällige Stelle aus dem Array subjects
        let splicedS: string = _subjects.splice(randomS, 1)[0];  //umwandlung von einer number zu einem string
        vers = vers + " " + splicedS; //Ausgabe des subjektes
    
        let randomV: number = Math.floor(Math.random() * _verbs.length);
        let splicedV: string = _verbs.splice(randomV, 1)[0];
        vers = vers + " " + splicedV;
    
        let randomO: number = Math.floor(Math.random() * _objects.length);
        let splicedO: string = _objects.splice(randomO, 1)[0];
        vers = vers + " " + splicedO;
    
        return vers;
    }
    