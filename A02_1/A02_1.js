"use strict";
// Zusammenarbeit mit Eileen Harr 
var EventInspector;
(function (EventInspector) {
    // Variablen for function handload
    let div0;
    let div1;
    // install load listener on window - load -> handleload
    window.addEventListener("load", handleLoad);
    // handleLoad -> install mouse move listener on doc. -> install click-and-keyup-listener in doc., body and all divs
    function handleLoad(_event) {
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);
        div0.addEventListener("click", logInfo);
        div1.addEventListener("click", logInfo);
        div0.addEventListener("keyup", logInfo);
        div1.addEventListener("keyup", logInfo);
    }
    // install load listener on window - mouse move -> setInfoBox
    window.addEventListener("mousemove", setInfoBox);
    // setInfoBox -> display mouse posi. and events target in span-element -> set style attribute top and left of span to mouseposi. + offset
    function setInfoBox(_event) {
        let x = _event.clientX;
        let y = _event.clientY;
        let position = document.querySelector("span");
        let target = _event.target;
        position.innerHTML = "Event target:" + target + "" + "<br>" + "x:" + x + " " + "px" + " " + "&" + " " + "y:" + y + " " + "px";
        position.style.left = (_event.clientX + 5) + "px";
        position.style.top = (_event.clientY + 10) + "px";
    }
    // install load listener on window - click -> logInfo
    window.addEventListener("click", logInfo);
    // install load listener on window - key up -> logInfo
    window.addEventListener("keyup", logInfo);
    // logInfo -> log events type, target, currentTarget and the whole event object to the browser-console
    function logInfo(_event) {
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event);
    }
})(EventInspector || (EventInspector = {}));
//# sourceMappingURL=A02_1.js.map