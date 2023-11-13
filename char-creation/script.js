//~
//~ ------------------------------------------ CLASSES ------------------------------------------ //
//~

class Background {
    constructor() {
        this.str = 0;
        this.agi = 0;
        this.con = 0;
        this.int = 0;
        this.wis = 0;
        this.cha = 0;
        this.desc = null;
    }
}

class Race {
    constructor() {
        this.str = 0;
        this.agi = 0;
        this.con = 0;
        this.int = 0;
        this.wis = 0;
        this.cha = 0;
        this.desc = null;
    }
}

class Class {
    constructor() {
        this.str = 0;
        this.agi = 0;
        this.con = 0;
        this.int = 0;
        this.wis = 0;
        this.cha = 0;
        this.desc = null;
    }
}

class Character {
    constructor() {
        this.background = new Background();
        this.race = new Race();
        this.class = new Class();
    }

    getCombinedStats() {
        return {
            str: this.background.str + this.race.str + this.class.str,
            agi: this.background.agi + this.race.agi + this.class.agi,
            con: this.background.con + this.race.con + this.class.con,
            int: this.background.int + this.race.int + this.class.int,
            wis: this.background.wis + this.race.wis + this.class.wis,
            cha: this.background.cha + this.race.cha + this.class.cha,
        };
    }
}

//~
//~ ------------------------------------------ STATIC DATA ------------------------------------------ //
//~

const backgroundBonuses = {
    military:           { str: 3,   agi: 0,     con: 0,     int: 0,     wis: 0,     cha: 0  },
    troubledChildhood:  { str: 1,   agi: 1,     con: 1,     int: 0,     wis: 0,     cha: 0  },
    priviledged:        { str: 0,   agi: 0,     con: 0,     int: -1,    wis: 0,     cha: 4  },
    loneWolf:           { str: 0,   agi: 2,     con: 0,     int: 0,     wis: 1,     cha: 0  },
    scholar:            { str: 0,   agi: 0,     con: -1,    int: 3,     wis: 1,     cha: 0  },
    clinicallyInsane:   { str: 2,   agi: 0,     con: 1,     int: 2,     wis: -1,    cha: -1 },
    broken:             { str: 0,   agi: 0,     con: 0,     int: 0,     wis: 0,     cha: 0  }
}

const raceBonuses = {
    human:              { str: 0,   agi: 1,     con: 1,     int: 0,     wis: 0,     cha: 1  },
    elf:                { str: 0,   agi: 2,     con: 0,     int: 1,     wis: 0,     cha: 0  },
    dwarf:              { str: 0,   agi: 0,     con: 3,     int: 0,     wis: 0,     cha: 0  },
    orc:                { str: 3,   agi: 0,     con: 0,     int: 0,     wis: 0,     cha: 0  },
    undead:             { str: 0,   agi: 0,     con: 0,     int: 2,     wis: 1,     cha: 0  },
    dragonkin:          { str: 0,   agi: 0,     con: 0,     int: 1,     wis: 2,     cha: 0  }
}

const classBonuses = {
    soldier:            { str: 2,   agi: 0,     con: 2,     int: 0,     wis: 0,     cha: 0  },
    paladin:            { str: 1,   agi: 0,     con: 1,     int: 1,     wis: 1,     cha: 0  },
    cutthroat:          { str: 1,   agi: 3,     con: 0,     int: 0,     wis: 0,     cha: 0  },
    ranger:             { str: 0,   agi: 3,     con: 0,     int: 0,     wis: 1,     cha: 0  },
    sorcerer:           { str: 0,   agi: 0,     con: 0,     int: 3,     wis: 1,     cha: 0  },
    necromancer:        { str: 0,   agi: 0,     con: 0,     int: 1,     wis: 3,    cha: 0  }
}

const backgroundDescriptions = {
    military: '<b>Background:</b> As a high ranking officer,  you command a daunting presense.  You are feared but respected.',
    troubledChildhood: '<b>Background:</b> Abused by all you whom you loved,  you have gained a distrust of all.  It has made you stronger but at terrible costs.',
    priviledged: '<b>Background:</b> You were born with the silver spoon and never <i>really</i> take anything seriously.  All of your time has been focused on partying...you son of a bitch.',
    loneWolf: '<b>Background:</b> Tragedy left you to fend for yourself.  You have been wisened by your solutude and strengthened through trial and error.',
    scholar: '<b>Background:</b> Your whole existance you have been burried in books and scrolls.  The sun is your enemy but you area font of knowledge',
    clinicallyInsane: '<b>Background:</b> Persistant whispers in your ear have driven you from sanity.  Once a fine soldier,  now a madman.',
    broken: '<b>Background:</b> You are a husk of a being, withered and utterly mindless...until now?'
}

const raceDescriptions = {
    human: '<b>Race: </b><b>Humans</b> are versatile and adaptable beings, known for their diversity, ambition, and resilience across various cultures and endeavors.',
    elf: '<b>Race: </b><b>Elves</b> are graceful and ethereal beings, possessing an affinity for nature, arcane wisdom, and a long, storied lifespan filled with artistry and grace.',
    dwarf: '<b>Race: </b><b>Dwarves</b> are resilient and industrious, stout folk with a deep connection to craftsmanship, mining, and a rich heritage of loyalty and honor.',
    orc: '<b>Race: </b><b>Orcs</b> are fierce and robust warriors, known for their strength, tribal unity, and a powerful, relentless demeanor in battle.',
    undead: '<b>Race: </b><b>Undead:</b> Once-living creatures reanimated through dark magic, bearing a spectral existence with a haunting nature and varied, often eerie abilities.',
    dragonkin: '<b>Race: </b><b>Dragonkin</b> are beings with demonic & draconic heritage, embodying the aspects of the corupted dragons that created them such as resilience, demonic affinity, and often possessing a majestic presence and fierce loyalty. A confusing combination of dragon and demon.'
}

const classDescriptions = {
    soldier: '<b>Class: </b>A <b>Soldier</b> is a disciplined and versatile combatant trained in various weaponry and tactics, skilled in both offense and defense on the battlefield.',
    paladin: '<b>Class: </b>A <b>Paladin</b> is a devout and righteous warrior, blending martial prowess with divine magic in service of justice and honor.',
    cutthroat: '<b>Class: </b>A <b>Cutthroat</b> is a cunning and ruthless rogue, specializing in stealth, sabotage, and deadly precision in combat and subterfuge.',
    ranger: '<b>Class: </b>A <b>Ranger</b> is a skilled outdoorsman and marksman, adept in wilderness survival, tracking, and mastering both ranged and close combat.',
    sorcerer: '<b>Class: </b>A <b>Sorcerer</b> is a spellcaster wielding innate, raw magic, harnessing mystical powers through bloodlines or inherent arcane gifts, shaping reality with unbridled potential.',
    necromancer: '<b>Class: </b>A <b>Necromancer</b> is a dark conjurer harnessing the forbidden arts of death and decay, commanding the undead and wielding sinister, macabre magic. Necromancers are hated by all.'
}


const myCharacter = new Character();


//~
//~ ------------------------------------------ EVENT LISTENERS ------------------------------------------ //
//~

let selectedBackground = document.getElementById('charBackground').value;
let selectedRace = document.getElementById('charRace').value;
let selectedClass = document.getElementById('charClass').value;

// get currently selected background, race, and class and update myCharacter & displayed stats

document.getElementById('charBackground').addEventListener('change', function () {
    selectedBackground = document.getElementById('charBackground').value;
    updateHTML('bkgDesc', backgroundDescriptions[selectedBackground]);
    updateCharacter(myCharacter.background, backgroundBonuses[selectedBackground], backgroundDescriptions[selectedBackground]);
    updateCurrentStatInfluences();
});

document.getElementById('charRace').addEventListener('change', function () {
    selectedRace = document.getElementById('charRace').value;
    updateHTML('raceDesc', raceDescriptions[selectedRace]);
    updateCharacter(myCharacter.race, raceBonuses[selectedRace], raceDescriptions[selectedRace]);
    updateCurrentStatInfluences();
});

document.getElementById('charClass').addEventListener('change', function () {
    selectedClass = document.getElementById('charClass').value;
    updateHTML('classDesc', classDescriptions[selectedClass]);
    updateCharacter(myCharacter.class, classBonuses[selectedClass], classDescriptions[selectedClass]);
    updateCurrentStatInfluences();
});

if (document.getElementById('charClass'))

//~
//~ ------------------------------------------ FUNCTIONS ------------------------------------------ //
//~

function updateHTML(element, change) {
    htmlElement = document.getElementById(element);
    htmlElement.innerHTML = change;
}

// parameters are: item to change, stats to change, and 
function updateCharacter(target, bonus, description) {
    target.str = bonus.str || 0;
    target.agi = bonus.agi || 0;
    target.con = bonus.con || 0;
    target.int = bonus.int || 0;
    target.wis = bonus.wis || 0;
    target.cha = bonus.cha || 0;
    target.desc = description;
}

function updateCurrentStatInfluences() {
    const combinedStats = myCharacter.getCombinedStats();

    updateHTML('bonusStr',`Strength: ${combinedStats.str}`);
    updateHTML('bonusAgi',`Agility: ${combinedStats.agi}`);
    updateHTML('bonusCon',`Constitution: ${combinedStats.con}`);
    updateHTML('bonusInt',`Intelligence: ${combinedStats.int}`);
    updateHTML('bonusWis',`Wisdom: ${combinedStats.wis}`);
    updateHTML('bonusCha',`Charisma: ${combinedStats.cha}`);
}