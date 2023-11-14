//~
//~ ------------------------------------------ CLASSES ------------------------------------------ //
//~

class Stats {
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

class Background        extends Stats {}
class Race              extends Stats {}
class characterClass    extends Stats {}

class Character {
    constructor() {
        this.background = new Background();
        this.race = new Race();
        this.class = new characterClass();
    }

    getCombinedStats() {
        const { background, race, charactercharacterClass } = this;
        return {
            str: background.str + race.str + charactercharacterClass.str,
            agi: background.agi + race.agi + charactercharacterClass.agi,
            con: background.con + race.con + charactercharacterClass.con,
            int: background.int + race.int + charactercharacterClass.int,
            wis: background.wis + race.wis + charactercharacterClass.wis,
            cha: background.cha + race.cha + charactercharacterClass.cha
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
    military:           'As a high ranking officer,  you command a daunting presense.  You are feared but respected.',
    troubledChildhood:  'Abused by all you whom you loved,  you have gained a distrust of all.  It has made you stronger but at terrible costs.',
    priviledged:        'You were born with the silver spoon and never <i>really</i> take anything seriously.  All of your time has been focused on partying...you son of a bitch.',
    loneWolf:           'Tragedy left you to fend for yourself.  You have been wisened by your solutude and strengthened through trial and error.',
    scholar:            'Your whole existance you have been burried in books and scrolls.  The sun is your enemy but you are a font of knowledge',
    clinicallyInsane:   'Persistant whispers in your ear have driven you from sanity.  Once a fine soldier,  now a madman.',
    broken:             'You are a husk of a being, withered and utterly mindless...until now?'
}

const raceDescriptions = {
    human:              'Humans are versatile and adaptable beings, known for their diversity, ambition, and resilience across various cultures and endeavors.',
    elf:                'Elves are graceful and ethereal beings, possessing an affinity for nature, arcane wisdom, and a long, storied lifespan filled with artistry and grace.',
    dwarf:              'Dwarves are resilient and industrious, stout folk with a deep connection to craftsmanship, mining, and a rich heritage of loyalty and honor.',
    orc:                'Orcs are fierce and robust warriors, known for their strength, tribal unity, and a powerful, relentless demeanor in battle.',
    undead:             'Undead were once-living creatures reanimated through dark magic, bearing a spectral existence with a haunting nature and varied, often eerie abilities.',
    dragonkin:          'Dragonkin are beings with demonic & draconic heritage, embodying the aspects of the corupted dragons that created them such as resilience, demonic affinity, and often possessing a majestic presence and fierce loyalty. A confusing combination of dragon and demon.'
}

const classDescriptions = {
    soldier:            'A <b>Soldier</b> is a disciplined and versatile combatant trained in various weaponry and tactics, skilled in both offense and defense on the battlefield.',
    paladin:            'A <b>Paladin</b> is a devout and righteous warrior, blending martial prowess with divine magic in service of justice and honor.',
    cutthroat:          'A <b>Cutthroat</b> is a cunning and ruthless rogue, specializing in stealth, sabotage, and deadly precision in combat and subterfuge.',
    ranger:             'A <b>Ranger</b> is a skilled outdoorsman and marksman, adept in wilderness survival, tracking, and mastering both ranged and close combat.',
    sorcerer:           'A <b>Sorcerer</b> is a spellcaster wielding innate, raw magic, harnessing mystical powers through bloodlines or inherent arcane gifts, shaping reality with unbridled potential.',
    necromancer:        'A <b>Necromancer</b> is a dark conjurer harnessing the forbidden arts of death and decay, commanding the undead and wielding sinister, macabre magic. Necromancers are hated by all.'
}


let myCharacter = new Character();


//~
//~ ------------------------------------------ EVENT LISTENERS ------------------------------------------ //
//~

document.getElementById('charBackground').addEventListener('change', function (event) {
    updateCharacterFromEvent(event, 'background', backgroundBonuses, backgroundDescriptions);
});

document.getElementById('charRace').addEventListener('change', function (event) {
    updateCharacterFromEvent(event, 'race', raceBonuses, raceDescriptions);
});

document.getElementById('charClass').addEventListener('change', function (event) {
    updateCharacterFromEvent(event, 'class', classBonuses, classDescriptions);
});

//~
//~ ------------------------------------------ FUNCTIONS ------------------------------------------ //
//~


// updateCharacterFromEvent() is the main function,  others are support.
function updateCharacterFromEvent(event, characterAttribute, bonuses, descriptions) {
    const selectedValue = event.target.value;
    updateHTML(`${characterAttribute}Desc`, `<b>${capitalizeFirstLetter(characterAttribute)}: </b>` + `${descriptions[selectedValue]}`);
    updateCharacter(myCharacter[characterAttribute], bonuses[selectedValue], descriptions[selectedValue]);
    updateCurrentStatInfluences();
}

function updateHTML(element, change) {
    let htmlElement = document.getElementById(element);
    if (htmlElement) {
        htmlElement.innerHTML = change;
    } else {
        console.error(`Element ID '${element}' not found.`);
    }
}

function updateCharacter(target, bonus, description) {
    target.str = bonus.str || 0;
    target.agi = bonus.agi || 0;
    target.con = bonus.con || 0;
    target.int = bonus.int || 0;
    target.wis = bonus.wis || 0;
    target.cha = bonus.cha || 0;
    target.desc = description;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
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