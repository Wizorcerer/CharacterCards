const characters = [
    {
        image: "images/Gerald.webp", hpbtnid: 'ger', fullid: 'fger', healthid: 'gerhp',
        name: 'Gerald the Inevitable', race: 'Grung', level: 2, class: ' Fighter', alignment: 'Neutral Good', maxHealth: 19,
        ac: '11', health: 19, initiative: 3,speed: '25/25', 
        sp1: 1, sp2: 1, sp3: 1, sp4: 1, sp5: 1, sp6: 1, sp7: 1, sp8: 1, sp9: 1,
        strength: 8, dexterity: 17, constitution: 15, intelligence: 11, wisdom: 13, charisma: 15,
        acrobatics: 3, animal: 1, arcana: 0, athletics: -1, deception: 2, history: 0, insight: 1, intimidation: 2, investigation: 0,
        medicine: 1, nature: 0, perception: 1, performance: 2, persuasion: 2, religion: 0, sleight: 3, stealth: 3, survival: 1
    },
    {
        image: "images/Illvenator-Sh'var.png", hpbtnid: 'ill', fullid: 'fill', healthid: 'illhp',
        name: 'Yorrim Grimm', race: '-', level: 1, class: ' Warlock', alignment: '-', maxHealth: 10,
        ac: '14', health: 10, initiative: 3,speed: 30, 
        sp1: 1, sp2: 1, sp3: 1, sp4: 1, sp5: 1, sp6: 1, sp7: 1, sp8: 1, sp9: 1,
        strength: 8, dexterity: 16, constitution: 14, intelligence: 15, wisdom: 10, charisma: 11,
        acrobatics: 3, animal: 0, arcana: 2, athletics: -1, deception: 0, history: 2, insight: 0, intimidation: 0, investigation: 2,
        medicine: 0, nature: 2, perception: 0, performance: 0, persuasion: 0, religion: 2, sleight: 3, stealth: 3, survival: 0
    },
    {
        image: "images/Eladrin.png", hpbtnid: 'aran', fullid: 'faran', healthid: 'aranhp',
        name: 'Arannis', race: 'Eladrin(Winter)', level: 1, class: ' Ranger', alignment: 'Chaotic Good', maxHealth: '-',
        ac: '-', health: '-', initiative: '-', speed: 30, 
        sp1: 1, sp2: 1, sp3: 1, sp4: 1, sp5: 1, sp6: 1, sp7: 1, sp8: 1, sp9: 1,
        strength: 16, dexterity: 16, constitution: 10, intelligence: 6, wisdom: 18, charisma: 6,
        acrobatics: 3, animal: 4, arcana: -2, athletics: 3, deception: -2, history: -2, insight: 4, intimidation: -2, investigation: -2,
        medicine: 4, nature: -2, perception: "4'", performance: -2, persuasion: -2, religion: -2, sleight: 3, stealth: 3, survival: 4, 
    },
    {
        image: "images/SunlitShadow.jpg", hpbtnid: 'sun', fullid: 'fsun', healthid: 'sunhp',
        name: 'Sunlit Shadow', race: 'Rock Drake', level: 1, class: ' Companion', alignment: 'Lawful Good', maxHealth: 64,
        ac: '18', health: 64, initiative: '-', speed: '50/80', 
        sp1: 1, sp2: 1, sp3: 1, sp4: 1, sp5: 1, sp6: 1, sp7: 1, sp8: 1, sp9: 1,
        strength: 22, dexterity: 17, constitution: 14, intelligence: 8, wisdom: 10, charisma: 3,
        acrobatics: 3, animal: 0, arcana: -1, athletics: 6, deception: -4, history: -1, insight: 0, intimidation: 0, investigation: -1,
        medicine: 0, nature: 0, perception: 0, performance: -4, persuasion: -4, religion: -1, sleight: 3, stealth: "3'", survival: 0
    }
    /*
    {
        image: "images/", hpbtnid: '', fullid: '', healthid: '',
        name: , race: , level: , class: , alignment: , maxHealth ,
        ac: , health: , initiative: , speed: , 
        sp1: , sp2: , sp3: , sp4: , sp5: , sp6: , sp7: , sp8: , sp9: , 
        strength: , dexterity: , constitution: , intelligence: , wisdom: , charisma: , 
        acrobatics: , animal: , arcana: , athletics: , deception: , history: , insight: , intimidation: , investigation: ,
        medicine: , nature: , perception: , performance: , persuasion: , religion: , sleight: , stealth: , survival: 
    }
    */
]

let characterList = document.getElementById('character-list');
let target = "a";
const input = document.querySelector('#box');
const num = input.value;
const popUp = document.querySelector('.input');
const finalize = document.querySelector('#finalize');

characters.forEach(character => {
    let html = `
    <div class="pair">
    <div class="card">
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
        <div class="btncontainer">
            <button id=${character.hpbtnid} class="buttons">Health</button>
            <button id=${character.fullid} class="buttons">Heal (Full)</button>
            <select class="buttons" name="Spell slots">
                <option>Level 1 spells (${character.sp1})</option>
                <option>Level 2 spells (${character.sp2})</option>
                <option>Level 3 spells (${character.sp3})</option>
                <option>Level 4 spells (${character.sp4})</option>
                <option>Level 5 spells (${character.sp5})</option>
                <option>Level 6 spells (${character.sp6})</option>
                <option>Level 7 spells (${character.sp7})</option>
                <option>Level 8 spells (${character.sp8})</option>
                <option>Level 9 spells (${character.sp9})</option>
            </select>
        </div>
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
    </div>
    `;
    characterList.innerHTML += html;
});

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

characters.forEach(char => {
    document.getElementById(char.hpbtnid).addEventListener('click', () => {
        console.log('Clicked:', char.hpbtnid);
        console.log('popUp element:', popUp);
        popUp.classList.remove('input');
        target = char;
    });
    document.getElementById(char.fullid).addEventListener('click', () => {
        char.health = Number(char.maxHealth) || char.maxHealth;
        document.querySelector(`#health-${char.healthid}`).textContent = char.health;
        target = char;
    });
});