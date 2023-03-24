console.log("[LOG] catchphrases.js: loaded");

const catchphrases =
[
    "What are we doin' today?",
    "Did you even read that error?",
    "Simplicity is the soul of efficiency",
    "Fix the cause, not the symptom",
    "Stay calm and debug",
    "It's not a bug, it's a feature in disguise",
    "Code is poetry, let's make it beautiful",
    "There are no shortcuts to any place worth going",
    "Code is never finished, only abandoned",
    "The best way to predict the future is to write it",
    "Make it work, make it right, make it fast",
    "In the middle of every difficulty lies opportunity",
    "Don't let yesterday take up too much of today",
    "Make sure to only test your code in production",
    "Programming is easy, it's debugging that's hard",
    "I'm not arguing, I'm just explaining why I'm right",
    "I have a 'print' statement and I'm not afraid to use it",
    "Goin' on Stack Overflow again?",
    "I'm not procrastinating, I'm just optimizing for future laziness",
    "Hippity poppity, your code is now from my property",
    "Code not working?",
    "brain.exe not responding",
];


var cpid =
Math.floor(Math.random() * catchphrases.length);

document.getElementById("catchphrase").innerHTML = catchphrases[cpid];