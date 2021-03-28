function shout(string) {
    return string.toUpperCase();
} 

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    let logShout = "HELLO";
    console.log(logShout);
}

function logWhisper(string) {
    let logWhisper = "hello";
    console.log(logWhisper);
}

function sayHiToGrandma(string) {
    let sayHiToGrandma;
    if (string === "hello") {
        return("I can\'t hear you!");
    } else if (string === "HELLO") {
        return("YES INDEED!");
    } else {
        return("I love you, too.");
    }
}

    