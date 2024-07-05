const gameModeSelect = document.getElementById("modes");
const mapSelect = document.getElementById("map");
const modifierSelect = document.getElementById("modifier");
const generateButton = document.getElementById("generateButton");
const resultParagraph = document.getElementById("result");
const infoButton = document.getElementById("infoButton");
const supportButton = document.getElementById("supportButton");
const resultWindow = document.getElementById("resultWindow");
const closeResultButton = document.getElementById("closeResultButton");
const page = document.body;

const modes = {
    "HOT_ZONE": {
        "maps": ["Dueling Beetles",
                 "Open Buisness",
                "Parallel Plays"]
    },
    "GEM_GRAB": {
        "maps": ["Double Swoosh",
                 "Hard Rock Mine",
                "Undermine"]
    },
    "HEIST": {
        "maps": ["Hot Potato",
                 "Kaboom Canyon",
                "Safe Zone"]
    },
    "BRAWL_BALL": {
        "maps": ["Center Stage",
                 "Galaxy Arena",
                "Penalty Kick",
                "Pinball Dreams",
                "Retina"]
    },
    "KNOCKOUT": {
        "maps": ["Belle's Rock",
                 "Flaring Phoenix",
                "Out In The Open"]
    },
    "BOUNTY": {
        "maps": ["Canal Grande",
                 "Hide Out",
                "Shooting Star"]
    }
};

const bestBrawlers = {
    "CLASSIC": {
        "Dueling Beetles": ["Sandy", "Jessie", "Dynamike"],
        "Open Buisness": ["Poco", "Kit", "Draco"],
        "Parallel Plays": ["Surge", "Bibi", "8-Bit"],

        "Double Swoosh": ["Lily", "Jessie", "Frank"],
        "Hard Rock Mine": ["Spike", "Leon", "Edgar"],
        "Undermine": ["Tara", "Sandy", "Gene"],

        "Hot Potato": ["Melodie", "Draco", "Chuck"],
        "Kaboom Canyon": ["Jessie", "Colt", "Colette"],
        "Safe Zone": ["Colt", "Colette", "Chuck"],

        "Center Stage": ["Rico", "Jacky", "Frank"],
        "Galaxy Arena": ["Rico", "Dynamike", "Bibi"],
        "Penalty Kick": ["Rico", "Dynamike", "Bibi"],
        "Pinball Dreams": ["Lily", "Frank", "Colette"],
        "Retina": ["Melodie", "Lily", "Draco"],

        "Belle's Rock": ["Piper", "Edgar", "Dynamike"],
        "Flaring Phoenix": ["Kit", "Draco", "Byron"],
        "Out In The Open": ["Piper", "Brock", "Angelo"],

        "Canal Grande": ["Edgar", "Dynamike", "Colt"],
        "Hide Out": ["Piper", "Dynamike", "Colt"],
        "Shooting Star": ["Piper", "Nani", "Angelo"]
    },
    "TIMED_DETONATION": {
        "Dueling Beetles": [],
        "Open Buisness": [],
        "Parallel Plays": [],

        "Double Swoosh": [],
        "Hard Rock Mine": [],
        "Undermine": [],

        "Hot Potato": [],
        "Kaboom Canyon": [],
        "Safe Zone": [],

        "Center Stage": [],
        "Galaxy Arena": [],
        "Penalty Kick": [],
        "Pinball Dreams": [],
        "Retina": [],

        "Belle's Rock": [],
        "Flaring Phoenix": [],
        "Out In The Open": [],

        "Canal Grande": [],
        "Hide Out": [],
        "Shooting Star": []
    },
    "BIG_FRIEND": {
        "Dueling Beetles": [],
        "Open Buisness": [],
        "Parallel Plays": [],

        "Double Swoosh": [],
        "Hard Rock Mine": [],
        "Undermine": [],

        "Hot Potato": [],
        "Kaboom Canyon": [],
        "Safe Zone": [],

        "Center Stage": [],
        "Galaxy Arena": [],
        "Penalty Kick": [],
        "Pinball Dreams": [],
        "Retina": [],

        "Belle's Rock": [],
        "Flaring Phoenix": [],
        "Out In The Open": [],

        "Canal Grande": [],
        "Hide Out": [],
        "Shooting Star": []
    },
    "QUICKFIRE": {
        "Dueling Beetles": [],
        "Open Buisness": [],
        "Parallel Plays": [],

        "Double Swoosh": [],
        "Hard Rock Mine": [],
        "Undermine": [],

        "Hot Potato": [],
        "Kaboom Canyon": [],
        "Safe Zone": [],

        "Center Stage": [],
        "Galaxy Arena": [],
        "Penalty Kick": [],
        "Pinball Dreams": [],
        "Retina": [],

        "Belle's Rock": [],
        "Flaring Phoenix": [],
        "Out In The Open": [],

        "Canal Grande": [],
        "Hide Out": [],
        "Shooting Star": []
    }
};

gameModeSelect.addEventListener("change", updateMapOptions);
modifierSelect.addEventListener("change", updateGenerateButton);
generateButton.addEventListener("click", generateFighters);

infoButton.addEventListener("click", () => {
    showInfo();
});

closeResultButton.addEventListener("click", () => {
    resultWindow.style.transition = "opacity 0.3s ease-in-out";
    resultWindow.style.opacity = "1";
    setTimeout(() => {
        resultWindow.style.opacity = "0";
    }, 10);
    setTimeout(() => {
        resultWindow.style.display = "none";
    }, 310);
});

supportButton.addEventListener("click", () => {
    showSupport();
});

closeResultButton.addEventListener("click", () => {
    resultWindow.style.transition = "opacity 0.3s ease-in-out";
    resultWindow.style.opacity = "1";
    setTimeout(() => {
        resultWindow.style.opacity = "0";
    }, 10);
    setTimeout(() => {
        resultWindow.style.display = "none";
    }, 310);
});

function updateMapOptions() {
    const selectedGameMode = gameModeSelect.value;
    if (selectedGameMode) {
        mapSelect.innerHTML = "";
        mapSelect.disabled = false;
        const maps = modes[selectedGameMode].maps;
        maps.forEach(map => {
            const option = document.createElement("option");
            option.value = map;
            option.text = map;
            mapSelect.appendChild(option);
        });
    } else {
        mapSelect.disabled = true;
        mapSelect.innerHTML = '<option value="">Pick mode first!</option>';
    }
}

function updateGenerateButton() {
    const gameModeSelected = gameModeSelect.value;
    const mapSelected = mapSelect.value;
    const modifierSelected = modifierSelect.value;
    if (gameModeSelected && mapSelected && modifierSelected) {
        generateButton.disabled = false;
    } else {
        generateButton.disabled = true;
    }
}

function generateFighters() {
    const map = mapSelect.value;
    const modifier = modifierSelect.value;

    const fightersList = bestBrawlers[modifier][map];

    resultParagraph.innerHTML = `<h2 style="font-size: 2em;">Best Brawlers</h2>`;
    resultParagraph.innerHTML += `${fightersList.join(", ")}`;
    resultWindow.style.display = "block";
    resultWindow.style.display = "block";
    resultWindow.style.transition = "opacity 0.3s ease-in-out";
    resultWindow.style.opacity = "0";
    setTimeout(() => {
        resultWindow.style.opacity = "1";
    }, 10);
}

function showInfo() {
    resultParagraph.innerHTML = "";

    const infoHeading = document.createElement("h2");
    infoHeading.style.fontSize = "2em";
    infoHeading.innerHTML = "Info<br>";
    resultParagraph.appendChild(infoHeading);

    const rbshInfo = document.createElement("p");
    rbshInfo.innerHTML = "RBSH Ver: #0005<br>Last update 05.07.24<br><br>";
    resultParagraph.appendChild(rbshInfo);

    const seasonInfo = document.createElement("p");
    seasonInfo.innerHTML = `Current ranked season: "Gods VS Monsters!" (28th)<br>`
    seasonInfo.innerHTML += `Future 29th ranked season: ???<br><br>`;
    resultParagraph.appendChild(seasonInfo);

    const targetDate = new Date("2024-07-31");
    const now = new Date();
    const timeRemaining = targetDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const seasonEndInfo = document.createElement("p");
    if (hours === 0) {
        seasonEndInfo.textContent = `28th Ranked season ends in: ${days}d;`;
    } else if (days === 0) {
        seasonEndInfo.textContent = `28th Ranked season is over!`;
    } else {
        seasonEndInfo.textContent = `28th Ranked season ends in: ${days}d ${hours}h`;
    }
    resultParagraph.appendChild(seasonEndInfo);

    resultWindow.style.display = "block";
    resultWindow.style.transition = "opacity 0.3s ease-in-out";
    resultWindow.style.opacity = "0";
    setTimeout(() => {
        resultWindow.style.opacity = "1";
    }, 10);
}

function showSupport() {
    resultParagraph.innerHTML = `<h2 style="font-size: 2em;">Support Author</h2>`;
    resultParagraph.innerHTML += `If you want to support the author of this site, you can do it below<br><br>`
    resultParagraph.innerHTML += `<a href="https://www.donationalerts.com/r/assequilent">Tap to support</a>`
    
    resultWindow.style.display = "block";
    resultWindow.style.transition = "opacity 0.3s ease-in-out";
    resultWindow.style.opacity = "0";
    setTimeout(() => {
        resultWindow.style.opacity = "1";
    }, 10);
}

updateMapOptions();