const yearsEl = document.getElementById("years");
const websiteEl = document.getElementById("website");
const appsEl = document.getElementById("apps");

//let year = 15;
//let website = 260;
//let apps = 27;

setInterval(yearCount, 70);
setInterval(websiteCount, 0.1);
setInterval(appsCount, 70);

let year = 0;
let website = 0;
let apps = 0;

function yearCount() {
    if (year < 16) {
        yearsEl.innerText = year;
        year = year + 1;
    }
}

function websiteCount() {
    if (website < 261) {
        websiteEl.innerText = website;
        website = website + 1;
    }
}

function appsCount() {
    if (apps < 28) {
        appsEl.innerText = apps;
        apps = apps + 1;
    }
}