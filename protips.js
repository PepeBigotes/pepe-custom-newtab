console.log("[LOG] protips.js: loaded");

const protips =
[
    "Pro Tip: Use CTRL + T to open a new tab",
    "Pro Tip: Use CTRL + W to close the current tab",
    "Pro Tip: Use CTRL + SHIFT + T to re-open a recently closed tab",
    "Pro Tip: Use CTRL + N to open a new window",
    "Pro Tip: Use CTRL + SHIFT + N to open a new incognito window",
    "Pro Tip: Use CTRL (+ SHIFT) + TAB to quickly switch between tabs",
    "Pro Tip: Use F5 (or CTRL + R) to refresh the current page",
    "Pro Tip: Use F6 (or CTRL + L) to quickly access the search/url bar",
    "Pro Tip: Use CTRL + D to bookmark a page",
    "Pro Tip: Use CTRL + SHIFT + D to bookmark all open tabs",
    "Pro Tip: You can jump to a specific tab using CTRL + 1-9",
    "Pro Tip: You can move tabs using CTRL + SHIFT + PgUp/PgDn",
    "Pro Tip: You can search for keywords using F3 (or CTRL + F)",
    "Pro Tip: You can open Chrome's task manager using SHIFT + ESC",
    "Pro Tip: You can use CTRL and + or - to change se size of the page",
    "Pro Tip: You can use CTRL + O to open a file inside your browser",
    "Cool Combo: (CTRL + C) + (CTRL + T) + (CTRL + V)",
    "Cool Combo: (CTRL + C) + (CTRL + L) + (CTRL + V)",
];


var cpid =
Math.floor(Math.random() * protips.length);

document.getElementById("protip").innerHTML = protips[cpid];