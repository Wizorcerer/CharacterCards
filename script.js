const characters = [
    {
        image: "images/Gerald.webp", hpbtnid: 'ger', fullid: 'fger', healthid: 'gerhp',
        name: 'Gerald the Inevitable', race: 'Grung', level: 2, class: ' Fighter', alignment: 'Neutral Good', maxHealth: 19,
        ac: '11', health: 19, initiative: 3,speed: '25/25', 
        strength: 8, dexterity: 17, constitution: 15, intelligence: 11, wisdom: 13, charisma: 15,
        acrobatics: 3, animal: 1, arcana: 0, athletics: -1, deception: 2, history: 0, insight: 1, intimidation: 2, investigation: 0,
        medicine: 1, nature: 0, perception: 1, performance: 2, persuasion: 2, religion: 0, sleight: 3, stealth: 3, survival: 1
    },
    {
        image: "images/Illvenator-Sh'var.png", hpbtnid: 'ill', fullid: 'fill', healthid: 'illhp',
        name: 'Yorrim Grimm', race: '-', level: 1, class: ' Warlock', alignment: '-', maxHealth: 10,
        ac: '14', health: 10, initiative: 3,speed: 30, 
        strength: 8, dexterity: 16, constitution: 14, intelligence: 15, wisdom: 10, charisma: 11,
        acrobatics: 3, animal: 0, arcana: 2, athletics: -1, deception: 0, history: 2, insight: 0, intimidation: 0, investigation: 2,
        medicine: 0, nature: 2, perception: 0, performance: 0, persuasion: 0, religion: 2, sleight: 3, stealth: 3, survival: 0
    },
    {
        image: "images/Eladrin.png", hpbtnid: 'aran', fullid: 'faran', healthid: 'aranhp',
        name: 'Arannis', race: 'Eladrin(Winter)', level: 1, class: ' Ranger', alignment: 'Chaotic Good', maxHealth: '-',
        ac: '-', health: '-', initiative: '-', speed: 30, 
        strength: 16, dexterity: 16, constitution: 10, intelligence: 6, wisdom: 18, charisma: 6,
        acrobatics: 3, animal: 4, arcana: -2, athletics: 3, deception: -2, history: -2, insight: 4, intimidation: -2, investigation: -2,
        medicine: 4, nature: -2, perception: "4'", performance: -2, persuasion: -2, religion: -2, sleight: 3, stealth: 3, survival: 4, 
    },
    {
        image: "images/", hpbtnid: 'sun', fullid: 'fsun', healthid: 'sunhp',
        name: 'Sunlit Shadow', race: 'Rock Drake', level: 1, class: ' -', alignment: 'Lawful Good', maxHealth: '-',
        ac: '-', health: 64, initiative: '-', speed: '50/80', 
        strength: 22, dexterity: 17, constitution: 14, intelligence: 8, wisdom: 10, charisma: 3,
        acrobatics: 3, animal: 0, arcana: 2, athletics: -1, deception: 0, history: 2, insight: 0, intimidation: 0, investigation: 2,
        medicine: 0, nature: 2, perception: 0, performance: 0, persuasion: 0, religion: 2, sleight: 3, stealth: "3'", survival: 0
    }
]

let characterList = document.getElementById('character-list');
let target = "a";
const gerald = characters.find(obj => obj.name === "Gerald the Inevitable");
const yorrim = characters.find(obj => obj.name === "Yorrim Grimm");
const arannis = characters.find(obj => obj.name === "Arannis");
const sunlit = characters.find(obj => obj.name === "Sunlit Shadow");
const input = document.querySelector('#box');
const num = input.value;
const popUp = document.querySelector('.input');
const finalize = document.querySelector('#finalize');

characters.forEach(character => {
    let html = 
    `<div class="card">
        <img class="image" src=${character.image}>
        <h2 class="name">${character.name}</h2>
        <div class="info">
            <p><strong>Race: </strong><span id="race">${character.race}</span></p>
            <p id="class"><strong>Class: Lv</strong><span id="level">${character.level}</span><span>${character.class}</span></p>
            <p id="alignment"><strong>Alignment: </strong><span id="alignment">${character.alignment}</span></p>
            <p id="maxHealth"><strong>Max Health: </strong><span id="max">${character.maxHealth}</span></p>
        </div>
        <div class="stats">
            <p><strong>Str: </strong><span id="strength">${character.strength}</span></p>
            <p id="dexterity"><strong>Dex: </strong><span>${character.dexterity}</span></p>
            <p id="constitution"><strong>Con: </strong><span>${character.constitution}</span></p>
            <p id="intelligence"><strong>Int: </strong><span>${character.intelligence}</span></p>
            <p id="wisdom"><strong>Wis: </strong><span>${character.wisdom}</span></p>
            <p id="charisma"><strong>Cha: </strong><span>${character.charisma}</span></p>
        </div>
        <button id=${character.hpbtnid} class="buttons">Health</button>
        <button id=${character.fullid} class="buttons">Heal (Full)</button>
    </div>
    <div class="secondary">
        <div id="top">
            <img id="shield" src="images/Shield-removebg-preview.png">
            <img id="wing" src="images/wings-removebg-preview.png">
            <img id="heart" src="images/heart-removebg-preview.png">
            <p id="armorClass" class="smstat"><strong>AC</strong><span id="ac">${character.ac}</span></p>
            <p id="initiative" class="smstat"><strong>Initiative</strong><span id="initiate">${character.initiative}</span></p>
            <p id="hp" class="smstat"><strong>Health</strong><span id="health-${character.healthid}">${character.health}</span></p>
        </div>
        <div id="other">
            <h2>Equipment</h2>
            <p></p>
            <h2>Proficiencies and Languages</h2>
            <p></p>
            <h2>Feats</h2>
            <p></p>
        </div>
        <div id="skills">
            <p><strong>Acrobatics: </strong><span id="acrobatics">${character.acrobatics}</span></p>
            <p><strong>Animal Handling: </strong><span id="animal">${character.animal}</span></p>
            <p><strong>Arcana: </strong><span id="arcana">${character.arcana}</span></p>
            <p><strong>Athletics: </strong><span id="athletics">${character.athletics}</span></p>
            <p><strong>Deception: </strong><span id="deception">${character.deception}</span></p>
            <p><strong>History: </strong><span id="history">${character.history}</span></p>
            <p><strong>Insight: </strong><span id="insight">${character.insight}</span></p>
            <p><strong>Intimidation: </strong><span id="intimidation">${character.intimidation}</span></p>
            <p><strong>Investigation: </strong><span id="investigation">${character.investigation}</span></p>
            <p><strong>Medicine: </strong><span id="medicine">${character.medicine}</span></p>
            <p><strong>Nature: </strong><span id="nature">${character.nature}</span></p>
            <p><strong>Perception: </strong><span id="perception">${character.perception}</span></p>
            <p><strong>Performance: </strong><span id="performance">${character.performance}</span></p>
            <p><strong>Persuasion: </strong><span id="persuasion">${character.persuasion}</span></p>
            <p><strong>Religion: </strong><span id="religion">${character.religion}</span></p>
            <p><strong>Sleight of Hand: </strong id="sleight"><span>${character.sleight}</span></p>
            <p><strong>Stealth: </strong><span id="stealth">${character.stealth}</span></p>
            <p><strong>Survival: </strong><span id="survival">${character.survival}</span></p>
        </div>
    </div>
    `;
    characterList.innerHTML += html;
});

function geraldHeal() {
    popUp.classList.remove('input');
    target = gerald;
}
function geraldFHeal() {
    gerald.health = gerald.maxHealth;
    document.querySelector('#health-gerhp').textContent = gerald.maxHealth;
    target = gerald;
}

function illHeal() {
    popUp.classList.remove('input');
    target = yorrim;
}
function illFHeal() {
    yorrim.health = yorrim.maxHealth;
    document.querySelector('#health-illhp').textContent = yorrim.maxHealth;
    target = yorrim;
}

function aranHeal() {
    popUp.classList.remove('input');
    target = arannis;
}
function aranFHeal() {
    arannis.health = arannis.maxHealth;
    document.querySelector('#health-aranhp').textContent = arannis.maxHealth;
    target = arannis;
}

function sunHeal() {
    popUp.classList.remove('input');
    target = sunlit;
}
function sunFHeal() {
    sunlit.health = sunlit.maxHealth;
    document.querySelector('#health-sunhp').textContent = sunlit.maxHealth;
    target = sunlit;
}

const button1 = document.getElementById('ger');
const button2 = document.getElementById('fger');
button1.addEventListener('click', geraldHeal);
button2.addEventListener('click', geraldFHeal);

const button3 = document.getElementById('ill');
const button4 = document.getElementById('fill');
button3.addEventListener('click', illHeal);
button4.addEventListener('click', illFHeal);

const button5 = document.getElementById('aran');
const button6 = document.getElementById('faran');
button5.addEventListener('click', aranHeal);
button6.addEventListener('click', aranFHeal);

const button7 = document.getElementById('sun');
const button8 = document.getElementById('fsun');
button7.addEventListener('click', sunHeal);
button8.addEventListener('click', sunFHeal);

finalize.addEventListener('click', rem);
input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        rem();
    }
});
function rem () {
    const num = Number(input.value);
    popUp.classList.add('input');
    target.health = Number(target.health) + num;
    document.querySelector(`#health-${target.healthid}`).textContent = target.health;
}

//characters.forEach(char => {
//    document.getElementById(char.hpbtnid).addEventListener('click', () => {
//        popUp.classList.remove('input');
//        target = char;
//    });
//    document.getElementById(char.fullid).addEventListener('click', () => {
//        char.health = Number(char.maxHealth) || char.maxHealth;
//        document.querySelector(`#health-${char.healthid}`).textContent = char.health;
//        target = char;
//    });
//});