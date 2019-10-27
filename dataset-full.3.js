/* eslint-disable */
// FAQ 1.6.1
// CoK 19: done spells, artefacts
// Done stats for: Elves, Dwarfs, The Herd, Empire of Dust, Abyssals, Ratkin, Varangur
// Done new units for: Elves, Dwarfs, The Herd, Abyssals, Ratkin, Empire of Dust

var _mTypes = ["Infantry", "Heavy Infantry", "Large Infantry", "Swarm", "Cavalry", "Large Cavalry", "Chariot", "War Engine", "Monster", "Titan"];
var _mTypesAbbr = ["Inf", "Heavy Inf", "Lrg Inf", "Swarm", "Cav", "Lrg Cav", "Cht", "War Eng", "Mon", "Ttn"];
var _mTypesIndex = ["I","HI","LI","S","C","LC","Ch","W","M","T"];
var _mCountsIndex = ["T","R","H","L","He","W","M","Ti"];
var _mCountsLabel = ["Troop","Regiment","Horde","Legion",1,1,1,1];
var _mCountsSectionUnit = [1,0,0,0,4,3,2,5];

const fullJSON = `[
  {
    "faction": "Basilea",
    "alignment": 0,
    "units": [
      {
        "name": "Men-at-Arms Spearmen",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          "10",
          "20",
          "40"
        ],
        "unitStrength": [
          "1",
          "3",
          "4"
        ],
        "att": [
          "12",
          "15",
          "30"
        ],
        "nerve": [
          "9/11",
          "13/15",
          "20/22"
        ],
        "values": [
          80,
          125,
          205
        ],
        "unlocks": [],
        "special": "Iron Resolve, Phalanx",
        "options": [
          "Upgrade with a Veteran Command, increasing the unit’s rout & waver values by +1"
        ],
        "ovals": [
          {
            "T": 5,
            "R": 10,
            "H": 15
          }
        ],
        "keywords": "Keywords: Human, Men-at-Arms",
        "mType": "I",
        "stats": [
          "5",
          "4+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Paladin Foot Guard",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          "10",
          "20"
        ],
        "unitStrength": [
          "1",
          "3"
        ],
        "att": [
          "10",
          "12"
        ],
        "nerve": [
          "11/13",
          "15/17"
        ],
        "values": [
          100,
          150
        ],
        "unlocks": [],
        "special": "Headstrong, Iron Resolve",
        "options": [
          "Upgrade to Paladin Defenders [1] (Regiment only) - Gain Aura (Elite (Melee) - Paladin Infantry only)",
          "Exchange shields for two-handed weapons, lowering Defence to 4+ and gaining Crushing Strength (1)",
          "Aegis Fragment"
        ],
        "ovals": [
          15,
          0,
          5
        ],
        "keywords": "Keywords: Human, Paladin",
        "mType": "I",
        "stats": [
          "5",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Sisterhood Infantry",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          "10",
          "20",
          "40"
        ],
        "unitStrength": [
          "1",
          "3",
          "4"
        ],
        "att": [
          "12",
          "15",
          "30"
        ],
        "nerve": [
          "10/12",
          "14/16",
          "21/23"
        ],
        "values": [
          95,
          145,
          240
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Iron Resolve, Vicious (Melee), Wild Charge (D3)",
        "options": [],
        "ovals": [],
        "keywords": "Keywords: Human, Sisterhood",
        "mType": "I",
        "stats": [
          "5",
          "4+",
          "-",
          "3+"
        ]
      },
      {
        "name": "Men-at-Arms Swordsmen",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          "10",
          "20",
          "40"
        ],
        "unitStrength": [
          "1",
          "3",
          "4"
        ],
        "att": [
          "10",
          "12",
          "25"
        ],
        "nerve": [
          "9/11",
          "13/15",
          "20/22"
        ],
        "values": [
          70,
          105,
          175
        ],
        "unlocks": [],
        "special": "Iron Resolve",
        "options": [
          "Upgrade with a Veteran Command, increasing the unit’s rout & waver values by +1"
        ],
        "ovals": [
          {
            "T": 5,
            "R": 10,
            "H": 15
          }
        ],
        "keywords": "Keywords: Human, Men-at-Arms",
        "mType": "I",
        "stats": [
          "5",
          "4+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Sisterhood Scouts*",
        "irregular": 1,
        "limit": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          "10",
          "20"
        ],
        "unitStrength": [
          "1",
          "2"
        ],
        "att": [
          "8",
          "10"
        ],
        "nerve": [
          "10/12",
          "14/16"
        ],
        "values": [
          120,
          160
        ],
        "unlocks": [],
        "special": "Iron Resolve, Scout Bows: 24”, Steady Aim, Vicious (Ranged)",
        "options": [],
        "ovals": [],
        "keywords": "Keywords: Human, Sisterhood, Tracker",
        "mType": "I",
        "stats": [
          "5",
          "4+",
          "4+",
          "3+"
        ]
      },
      {
        "name": "Paladin Knights",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          "5",
          "10",
          "20"
        ],
        "unitStrength": [
          "1",
          "3",
          "4"
        ],
        "att": [
          "8",
          "16",
          "32"
        ],
        "nerve": [
          "12/14",
          "15/17",
          "22/24"
        ],
        "values": [
          135,
          210,
          355
        ],
        "unlocks": [],
        "special": "Headstrong, Iron Resolve, Thunderous Charge (2)",
        "options": [
          "Aegis Fragment"
        ],
        "ovals": [
          5
        ],
        "keywords": "Keywords: Human, Paladin",
        "mType": "C",
        "stats": [
          "8",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Sisterhood Panther Lancers",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          "5",
          "10"
        ],
        "unitStrength": [
          "1",
          "3"
        ],
        "att": [
          "8",
          "16"
        ],
        "nerve": [
          "11/13",
          "14/16"
        ],
        "values": [
          115,
          175
        ],
        "unlocks": [],
        "special": "Iron Resolve, Nimble, Thunderous Charge (1), Vicious (Melee)",
        "options": [],
        "ovals": [],
        "keywords": "Keywords: Human, Sisterhood",
        "mType": "C",
        "stats": [
          "10",
          "4+",
          "-",
          "3+"
        ]
      },
      {
        "name": "Sisterhood Panther Chariot*",
        "irregular": 1,
        "limit": 0,
        "unitType": [
          "T",
          "R",
          "H",
          "L"
        ],
        "models": [
          "2",
          "3",
          "4",
          "6"
        ],
        "unitStrength": [
          "1",
          "2",
          "3",
          "4"
        ],
        "att": [
          "10",
          "15",
          "20",
          "25"
        ],
        "nerve": [
          "12/14",
          "14/16",
          "16/18",
          "19/21"
        ],
        "values": [
          145,
          180,
          225,
          260
        ],
        "unlocks": [],
        "special": "Iron Resolve, Thunderous Charge (2), Vicious (Melee)",
        "options": [],
        "ovals": [],
        "keywords": "Keywords: Human, Sisterhood",
        "mType": "Ch",
        "stats": [
          "8",
          "4+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Gur Panthers*",
        "irregular": 1,
        "limit": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          "5",
          "10"
        ],
        "unitStrength": [
          "1",
          "3"
        ],
        "att": [
          "6",
          "12"
        ],
        "nerve": [
          "9/11",
          "12/14"
        ],
        "values": [
          85,
          130
        ],
        "unlocks": [],
        "special": "Nimble, Pathfinder, Vicious (Melee)",
        "options": [],
        "ovals": [],
        "keywords": "Keywords: Beast",
        "mType": "C",
        "stats": [
          "10",
          "4+",
          "-",
          "3+"
        ]
      },
      {
        "name": "Men-at-Arms Crossbowmen",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          "10",
          "20",
          "40"
        ],
        "unitStrength": [
          "1",
          "2",
          "3"
        ],
        "att": [
          "8",
          "10",
          "20"
        ],
        "nerve": [
          "9/11",
          "13/15",
          "20/22"
        ],
        "values": [
          100,
          130,
          230
        ],
        "unlocks": [],
        "special": "Iron Resolve Crossbows: 24”, Piercing (1), Pot Shot",
        "options": [],
        "ovals": [],
        "keywords": "Keywords: Human, Men-at-Arms",
        "mType": "I",
        "stats": [
          "5",
          "5+",
          "5+",
          "4+"
        ]
      },
      {
        "name": "Ogre Palace Guard",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          "3",
          "6"
        ],
        "unitStrength": [
          "2",
          "3"
        ],
        "att": [
          "9",
          "18"
        ],
        "nerve": [
          "12/14",
          "15/17"
        ],
        "values": [
          140,
          235
        ],
        "unlocks": [],
        "special": "Brutal, Crushing Strength (2), Iron Resolve",
        "options": [],
        "ovals": [],
        "keywords": "Keywords: Ogre",
        "mType": "LI",
        "stats": [
          "6",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Elohi*",
        "irregular": 1,
        "limit": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          "3",
          "6"
        ],
        "unitStrength": [
          "2",
          "3"
        ],
        "att": [
          "9",
          "18"
        ],
        "nerve": [
          "-/14",
          "-/17"
        ],
        "values": [
          160,
          270
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Fly, Inspiring, Iron Resolve",
        "options": [],
        "ovals": [],
        "keywords": "Keywords: Angelic",
        "mType": "LI",
        "stats": [
          "10",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Heavy Arbalest",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "W"
        ],
        "models": [
          "1"
        ],
        "unitStrength": [
          "0"
        ],
        "att": [
          "2"
        ],
        "nerve": [
          "10/12"
        ],
        "values": [
          85
        ],
        "unlocks": [],
        "special": "Iron Resolve Heavy Arbalest: 48”, Blast (D3), Piercing (2), Reload",
        "options": [],
        "ovals": [],
        "keywords": "Keywords: Human, Men-at-Arms",
        "mType": "W",
        "stats": [
          "5",
          "-",
          "4+",
          "4+"
        ]
      },
      {
        "name": "Phoenix",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "Ti"
        ],
        "models": [
          "1"
        ],
        "unitStrength": [
          "1"
        ],
        "att": [
          "5"
        ],
        "nerve": [
          "14/16"
        ],
        "values": [
          195
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Fly, Nimble, Radiance of Life, Regeneration (4+) Spells Fireball (10), Heal (5) Spellcaster: 0",
        "options": [],
        "ovals": [],
        "keywords": "Keywords: Angelic, Flamebound, Majestic",
        "mType": "Ti",
        "stats": [
          "10",
          "3+",
          "-",
          "3+"
        ]
      },
      {
        "name": "Bearer of the Holy Icon",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "He"
        ],
        "models": [
          "1"
        ],
        "unitStrength": [
          "0"
        ],
        "att": [
          "1"
        ],
        "nerve": [
          "10/12"
        ],
        "values": [
          50
        ],
        "unlocks": [],
        "special": "Individual, Inspiring, Iron Resolve",
        "options": [
          "Mount on a Horse, increasing Speed to 8 and changing to Hero (Cav - Height: 3)"
        ],
        "ovals": [
          25
        ],
        "keywords": "Keywords: Human",
        "mType": "I",
        "stats": [
          "5",
          "5+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Dictator",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "He"
        ],
        "models": [
          "1"
        ],
        "unitStrength": [
          "0"
        ],
        "att": [
          "4"
        ],
        "nerve": [
          "12/14"
        ],
        "values": [
          90
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Duelist, Individual, Inspiring, Iron Resolve, Mighty",
        "options": [],
        "ovals": [],
        "keywords": "Keywords: Human",
        "mType": "I",
        "stats": [
          "5",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Ur-Elohi",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "He"
        ],
        "models": [
          "1"
        ],
        "unitStrength": [
          "1"
        ],
        "att": [
          "6"
        ],
        "nerve": [
          "-/15"
        ],
        "values": [
          200
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Dread, Fly, Inspiring, Iron Resolve, Nimble",
        "options": [],
        "ovals": [],
        "keywords": "Keywords: Angelic",
        "mType": "LI",
        "stats": [
          "10",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Paladin Chaplain",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "He"
        ],
        "models": [
          "1"
        ],
        "unitStrength": [
          "0"
        ],
        "att": [
          "3"
        ],
        "nerve": [
          "11/13"
        ],
        "values": [
          55
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Headstrong, Individual, Iron Resolve Spellcaster: 1",
        "options": [
          "Mount on a Horse, increasing Speed to 8 and changing to Hero (Cav - Height: 3)",
          "Heal (2)",
          "Aegis Fragment"
        ],
        "ovals": [
          25,
          10,
          5
        ],
        "keywords": "Keywords: Human, Paladin",
        "mType": "I",
        "stats": [
          "5",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "High Paladin",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "He"
        ],
        "models": [
          "1"
        ],
        "unitStrength": [
          "0"
        ],
        "att": [
          "5"
        ],
        "nerve": [
          "13/15"
        ],
        "values": [
          95
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Headstrong, Individual, Inspiring, Iron Resolve, Mighty Spellcaster: 0",
        "options": [
          "Mount on a Horse, increasing Speed to 8 and changing to Hero (Cav - Height: 3)",
          "Heal (2)",
          "Aegis Fragment"
        ],
        "ovals": [
          35,
          10,
          5
        ],
        "keywords": "Keywords: Human, Paladin",
        "mType": "I",
        "stats": [
          "5",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Abbess",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "He"
        ],
        "models": [
          "1"
        ],
        "unitStrength": [
          "0"
        ],
        "att": [
          "6"
        ],
        "nerve": [
          "12/14"
        ],
        "values": [
          90
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Iron Resolve, Iron Resolve, Inspiring (Sisterhood only), Vicious (Melee), Wild Charge (D3)",
        "options": [
          "Mount on a Gur Panther, losing Wild Charge (D3) but increasing Speed to 10 and changing to Hero (Cav – Height: 3)"
        ],
        "ovals": [
          30
        ],
        "keywords": "Keywords: Human, Sisterhood",
        "mType": "I",
        "stats": [
          "5",
          "3+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Priest",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "He"
        ],
        "models": [
          "1"
        ],
        "unitStrength": [
          "0"
        ],
        "att": [
          "1"
        ],
        "nerve": [
          "11/13"
        ],
        "values": [
          75
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Individual, Inspiring, Iron Resolve Spells Heal (3) Spellcaster: 1",
        "options": [
          "Mount on a Horse, increasing Speed to 8 and changing to Hero (Cav - Height: 3)",
          "Bane Chant (2)",
          "Bastion (1) [1]",
          "Martyr’s Prayer (7) [1]"
        ],
        "ovals": [
          25,
          20,
          10,
          35
        ],
        "keywords": "Keywords: Human",
        "mType": "I",
        "stats": [
          "5",
          "4+",
          "-",
          "4+"
        ]
      },
      {
        "name": "War Wizard",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "He"
        ],
        "models": [
          "1"
        ],
        "unitStrength": [
          "0"
        ],
        "att": [
          "1"
        ],
        "nerve": [
          "10/12"
        ],
        "values": [
          75
        ],
        "unlocks": [],
        "special": "Individual, Iron Resolve Spells Fireball (10) Spellcaster: 2",
        "options": [
          "Mount on a Horse, increasing Speed to 8 and changing to Hero (Cav – Height: 3)",
          "Bane Chant (2)",
          "Lightning Bolt (4)",
          "Wind Blast (6)"
        ],
        "ovals": [
          25,
          20,
          30,
          25
        ],
        "keywords": "Keywords: Human",
        "mType": "I",
        "stats": [
          "5",
          "5+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Abbess on Panther Chariot",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "He"
        ],
        "models": [
          "1"
        ],
        "unitStrength": [
          "1"
        ],
        "att": [
          "6"
        ],
        "nerve": [
          "14/16"
        ],
        "values": [
          145
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Inspiring (Sisterhood only), Iron Resolve, Nimble, Thunderous Charge (1), Vicious (Melee)",
        "options": [],
        "ovals": [],
        "keywords": "Keywords: Human, Sisterhood",
        "mType": "Ch",
        "stats": [
          "8",
          "3+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Ogre Palace Guard Captain",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "He"
        ],
        "models": [
          "1"
        ],
        "unitStrength": [
          "1"
        ],
        "att": [
          "5"
        ],
        "nerve": [
          "13/15"
        ],
        "values": [
          115
        ],
        "unlocks": [],
        "special": "Brutal, Crushing Strength (2), Inspiring (Ogre only), Iron Resolve, Nimble",
        "options": [],
        "ovals": [],
        "keywords": "Keywords: Ogre",
        "mType": "LI",
        "stats": [
          "6",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "High Paladin on Dragon",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "He"
        ],
        "models": [
          "1"
        ],
        "unitStrength": [
          "1"
        ],
        "att": [
          "10"
        ],
        "nerve": [
          "-/19"
        ],
        "values": [
          310
        ],
        "unlocks": [],
        "special": "Crushing Strength (3), Fly, Inspiring, Iron Resolve, Nimble Dragon’s Breath: 12”, Steady Aim Spellcaster: 0",
        "options": [
          "Heal (4)",
          "Aegis Fragment"
        ],
        "ovals": [
          15,
          5
        ],
        "keywords": "Keywords: Draconic, Human, Paladin",
        "mType": "Ti",
        "stats": [
          "10",
          "3+",
          "4+",
          "5+"
        ]
      },
      {
        "name": "Danor the Wizard [1]",
        "irregular": 0,
        "limit": 1,
        "unitType": [
          "He"
        ],
        "models": [
          "1"
        ],
        "unitStrength": [
          "0"
        ],
        "att": [
          "1"
        ],
        "nerve": [
          "10/12"
        ],
        "values": [
          105
        ],
        "unlocks": [],
        "special": "Individual, Iron Resolve Spells Bane Chant (2), Fireball (4), Heal (2), Lightning Bolt (2), Wind Blast (3) Staff of Silibar: After using a spell, Danor may immediately use another different spell he possesses on his basic profile (not an upgrade), against the same or a different target. He may continue to do this until he has used each of his spells once in any of his Ranged phases. Spellcaster: 1",
        "options": [],
        "ovals": [],
        "keywords": "Keywords: Human",
        "mType": "I",
        "stats": [
          "5",
          "5+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Gnaeus Sallustis [1]",
        "irregular": 0,
        "limit": 1,
        "unitType": [
          "He"
        ],
        "models": [
          "1"
        ],
        "unitStrength": [
          "1"
        ],
        "att": [
          "7"
        ],
        "nerve": [
          "15/17"
        ],
        "values": [
          180
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Headstrong, Inspiring, Iron Resolve, Nimble Spellcaster: 1",
        "options": [
          "Heal (4)"
        ],
        "ovals": [
          20
        ],
        "keywords": "Keywords: Beast, Human, Paladin",
        "mType": "LC",
        "stats": [
          "9",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Jullius, Dragon of Heaven [1]",
        "irregular": 0,
        "limit": 1,
        "unitType": [
          "He"
        ],
        "models": [
          "1"
        ],
        "unitStrength": [
          "1"
        ],
        "att": [
          "8"
        ],
        "nerve": [
          "-/16"
        ],
        "values": [
          315
        ],
        "unlocks": [],
        "special": "Crushing Strength (3), Dread, Elite (Melee), Fly, Iron Resolve, Nimble, Very Inspiring Spells Fireball (8) Spellcaster: 0",
        "options": [],
        "ovals": [],
        "keywords": "Keywords: Angelic",
        "mType": "LI",
        "stats": [
          "10",
          "3+",
          "-",
          "6+"
        ]
      },
      {
        "name": "Samacris, Mother of Phoenixes [1]",
        "irregular": 0,
        "limit": 1,
        "unitType": [
          "He"
        ],
        "models": [
          "1"
        ],
        "unitStrength": [
          "1"
        ],
        "att": [
          "3"
        ],
        "nerve": [
          "-/15"
        ],
        "values": [
          195
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Fly, Inspiring, Iron Resolve, Nimble, Radiance of Life, Regeneration (5+) Spells Fireball (8), Heal (5) Purging Flame: This unit’s Fireball spell is resolved with Piercing (1). Spellcaster: 2",
        "options": [],
        "ovals": [],
        "keywords": "Keywords: Angelic, Flamebound",
        "mType": "LI",
        "stats": [
          "10",
          "3+",
          "-",
          "5+"
        ]
      }
    ]
  },
  {
    "faction": "Dwarfs",
    "alignment": 0,
    "units": [
      {
        "name": "Ironclad",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          "10",
          "20",
          "40"
        ],
        "unitStrength": [
          "1",
          "3",
          "4"
        ],
        "att": [
          "10",
          "12",
          "25"
        ],
        "nerve": [
          "10/12",
          "14/16",
          "21/23"
        ],
        "values": [
          70,
          110,
          180
        ],
        "unlocks": [],
        "special": "Headstrong",
        "options": [
          "Throwing Mastiff"
        ],
        "ovals": [
          15
        ],
        "keywords": "Keywords: Dwarf",
        "mType": "I",
        "stats": [
          "4",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Shieldbreakers",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          "10",
          "20",
          "40"
        ],
        "unitStrength": [
          "1",
          "3",
          "4"
        ],
        "att": [
          "10",
          "12",
          "25"
        ],
        "nerve": [
          "10/12",
          "14/16",
          "21/23"
        ],
        "values": [
          80,
          125,
          205
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Headstrong",
        "options": [
          "Throwing Mastiff"
        ],
        "ovals": [
          15
        ],
        "keywords": "Keywords: Dwarf",
        "mType": "I",
        "stats": [
          "4",
          "3+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Bulwarkers",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          "10",
          "20",
          "40"
        ],
        "unitStrength": [
          "1",
          "3",
          "4"
        ],
        "att": [
          "12",
          "15",
          "30"
        ],
        "nerve": [
          "10/12",
          "14/16",
          "21/23"
        ],
        "values": [
          90,
          135,
          225
        ],
        "unlocks": [],
        "special": "Headstrong, Phalanx",
        "options": [
          "Throwing Mastiff"
        ],
        "ovals": [
          15
        ],
        "keywords": "Keywords: Dwarf",
        "mType": "I",
        "stats": [
          "4",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Ironguard",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          "10",
          "20"
        ],
        "unitStrength": [
          "1",
          "3"
        ],
        "att": [
          "10",
          "12"
        ],
        "nerve": [
          "11/13",
          "15/17"
        ],
        "values": [
          100,
          150
        ],
        "unlocks": [],
        "special": "Headstrong",
        "options": [
          "Throwing Mastiff"
        ],
        "ovals": [
          15
        ],
        "keywords": "Keywords: Dwarf",
        "mType": "I",
        "stats": [
          "4",
          "3+",
          "-",
          "6+"
        ]
      },
      {
        "name": "Berserkers*",
        "irregular": 1,
        "limit": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          "10",
          "20"
        ],
        "unitStrength": [
          "1",
          "3"
        ],
        "att": [
          "15",
          "20"
        ],
        "nerve": [
          "-/13",
          "-/17"
        ],
        "values": [
          105,
          165
        ],
        "unlocks": [],
        "special": "Vicious (Melee), Wild Charge (D3) Vengeance: While Counter Charging, this unit has Crushing Strength (+1).",
        "options": [],
        "ovals": [],
        "keywords": "Keywords: Berserker, Dwarf",
        "mType": "I",
        "stats": [
          "5",
          "4+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Ironwatch Crossbows",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          "10",
          "20",
          "40"
        ],
        "unitStrength": [
          "1",
          "2",
          "3"
        ],
        "att": [
          "8",
          "10",
          "20"
        ],
        "nerve": [
          "10/12",
          "14/16",
          "21/23"
        ],
        "values": [
          100,
          135,
          235
        ],
        "unlocks": [],
        "special": "Headstrong Crossbows: 24”, Piercing (1), Pot Shot",
        "options": [],
        "ovals": [],
        "keywords": "Keywords: Dwarf, Ironwatch",
        "mType": "I",
        "stats": [
          "4",
          "5+",
          "5+",
          "4+"
        ]
      },
      {
        "name": "Rangers*",
        "irregular": 1,
        "limit": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          "10",
          "20"
        ],
        "unitStrength": [
          "1",
          "3"
        ],
        "att": [
          "10",
          "12"
        ],
        "nerve": [
          "10/12",
          "14/16"
        ],
        "values": [
          140,
          185
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Pathfinder, Scout Light Crossbows: 24”",
        "options": [],
        "ovals": [],
        "keywords": "Keywords: Dwarf, Tracker",
        "mType": "I",
        "stats": [
          "5",
          "4+",
          "4+",
          "4+"
        ]
      },
      {
        "name": "Sharpshooters",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "T"
        ],
        "models": [
          "10"
        ],
        "unitStrength": [
          "1"
        ],
        "att": [
          "5"
        ],
        "nerve": [
          "9/11"
        ],
        "values": [
          100
        ],
        "unlocks": [],
        "special": "Headstrong Long Rifles: 36”, Piercing (2), Reload Note: The front rank of models should be represented with large shields.",
        "options": [],
        "ovals": [],
        "keywords": "Keywords: Dwarf, Warsmith",
        "mType": "I",
        "stats": [
          "4",
          "5+",
          "4+",
          "5+"
        ]
      },
      {
        "name": "Ironwatch Rifles",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          "10",
          "20",
          "40"
        ],
        "unitStrength": [
          "1",
          "2",
          "3"
        ],
        "att": [
          "8",
          "10",
          "20"
        ],
        "nerve": [
          "10/12",
          "14/16",
          "21/23"
        ],
        "values": [
          115,
          150,
          265
        ],
        "unlocks": [],
        "special": "Headstrong Rifles: 24”, Piercing (2), Pot Shot",
        "options": [],
        "ovals": [],
        "keywords": "Keywords: Dwarf, Ironwatch",
        "mType": "I",
        "stats": [
          "4",
          "5+",
          "5+",
          "4+"
        ]
      },
      {
        "name": "Berserker Brock Riders",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          "5",
          "10"
        ],
        "unitStrength": [
          "1",
          "3"
        ],
        "att": [
          "13",
          "26"
        ],
        "nerve": [
          "-/15",
          "-/18"
        ],
        "values": [
          125,
          195
        ],
        "unlocks": [],
        "special": "Thunderous Charge (1), Vicious (Melee)",
        "options": [],
        "ovals": [],
        "keywords": "Keywords: Berserker, Dwarf",
        "mType": "C",
        "stats": [
          "8",
          "4+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Earth Elementals",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          "3",
          "6"
        ],
        "unitStrength": [
          "2",
          "3"
        ],
        "att": [
          "9",
          "18"
        ],
        "nerve": [
          "-/15",
          "-/18"
        ],
        "values": [
          130,
          220
        ],
        "unlocks": [],
        "special": "Brutal, Crushing Strength (1), Pathfinder, Shambling",
        "options": [],
        "ovals": [],
        "keywords": "Keywords: Earthbound",
        "mType": "LI",
        "stats": [
          "5",
          "4+",
          "-",
          "6+"
        ]
      },
      {
        "name": "Mastiff Hunting Pack*",
        "irregular": 1,
        "limit": 0,
        "unitType": [
          "R"
        ],
        "models": [
          "3"
        ],
        "unitStrength": [
          "1"
        ],
        "att": [
          "9"
        ],
        "nerve": [
          "11/13"
        ],
        "values": [
          65
        ],
        "unlocks": [],
        "special": "Crushing Strength (1 - Cavalry only)",
        "options": [
          "Throwing Mastiff"
        ],
        "ovals": [
          15
        ],
        "keywords": "Keywords: Beast",
        "mType": "S",
        "stats": [
          "6",
          "4+",
          "-",
          "3+"
        ]
      },
      {
        "name": "Ironbelcher Cannon",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "W"
        ],
        "models": [
          "1"
        ],
        "unitStrength": [
          "0"
        ],
        "att": [
          "2"
        ],
        "nerve": [
          "10/12"
        ],
        "values": [
          110
        ],
        "unlocks": [],
        "special": "Cannon: 48”, Blast (D3+1), Ignores Cover, Piercing (3), Reload, Shattering Grapeshot: 12”, Att: 10, Piercing (1) - This attack always hits on a 6+",
        "options": [],
        "ovals": [],
        "keywords": "Keywords: Dwarf, Warsmith",
        "mType": "W",
        "stats": [
          "4",
          "-",
          "5+",
          "5+"
        ]
      },
      {
        "name": "Battle Driller",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "M"
        ],
        "models": [
          "1"
        ],
        "unitStrength": [
          "0"
        ],
        "att": [
          "D6+6"
        ],
        "nerve": [
          "10/12"
        ],
        "values": [
          90
        ],
        "unlocks": [],
        "special": "Brutal, Crushing Strength (1), Headstrong, Individual",
        "options": [],
        "ovals": [],
        "keywords": "Keywords: Dwarf, Warsmith",
        "mType": "C",
        "stats": [
          "4",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Greater Earth Elemental",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "Ti"
        ],
        "models": [
          "1"
        ],
        "unitStrength": [
          "1"
        ],
        "att": [
          "10"
        ],
        "nerve": [
          "-/19"
        ],
        "values": [
          230
        ],
        "unlocks": [],
        "special": "Brutal, Crushing Strength (3), Shambling, Strider",
        "options": [],
        "ovals": [],
        "keywords": "Keywords: Earthbound",
        "mType": "Ti",
        "stats": [
          "6",
          "4+",
          "-",
          "6+"
        ]
      },
      {
        "name": "Steel Behemoth",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "M"
        ],
        "models": [
          "1"
        ],
        "unitStrength": [
          "1"
        ],
        "att": [
          "D6+12"
        ],
        "nerve": [
          "17/19"
        ],
        "values": [
          260
        ],
        "unlocks": [],
        "special": "Crushing Strength (3), Headstrong, Strider Flame Belcher: 12”, Att: 10, Piercing (1), Steady Aim",
        "options": [
          "Upgrade to Golloch’s Fury [1] - Gain Very Inspiring, Iron Resolve and exchanging its Flame Belcher for Golloch’s Gun: 18”, Att: 12, Piercing (2)"
        ],
        "ovals": [
          50
        ],
        "keywords": "Keywords: Warsmith",
        "mType": "Ch",
        "stats": [
          "4",
          "4+",
          "4+",
          "6+"
        ]
      },
      {
        "name": "Flame Belcher",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "W"
        ],
        "models": [
          "1"
        ],
        "unitStrength": [
          "0"
        ],
        "att": [
          "15"
        ],
        "nerve": [
          "10/12"
        ],
        "values": [
          90
        ],
        "unlocks": [],
        "special": "Flame Belcher: 12”, Steady Aim",
        "options": [],
        "ovals": [],
        "keywords": "Keywords: Dwarf, Flamesmith, Warsmith",
        "mType": "W",
        "stats": [
          "4",
          "-",
          "4+",
          "5+"
        ]
      },
      {
        "name": "Ironbelcher Organ Gun",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "W"
        ],
        "models": [
          "1"
        ],
        "unitStrength": [
          "0"
        ],
        "att": [
          "12"
        ],
        "nerve": [
          "10/12"
        ],
        "values": [
          90
        ],
        "unlocks": [],
        "special": "Organ Gun: 24”, Piercing (2), Reload",
        "options": [],
        "ovals": [],
        "keywords": "Keywords: Dwarf, Warsmith",
        "mType": "W",
        "stats": [
          "4",
          "-",
          "5+",
          "5+"
        ]
      },
      {
        "name": "Jarrun Bombard",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "W"
        ],
        "models": [
          "1"
        ],
        "unitStrength": [
          "0"
        ],
        "att": [
          "2"
        ],
        "nerve": [
          "10/12"
        ],
        "values": [
          110
        ],
        "unlocks": [],
        "special": "Blast It!: 48”, Blast (D3+1), Piercing (3), Pot Shot Lob It!: 60”, Blast (D3+1), Ignores Cover, Indirect, Piercing (1), Reload",
        "options": [],
        "ovals": [],
        "keywords": "Keywords: Dwarf, Warsmith",
        "mType": "W",
        "stats": [
          "4",
          "-",
          "5+",
          "5+"
        ]
      },
      {
        "name": "Dwarf Lord",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "He"
        ],
        "models": [
          "1"
        ],
        "unitStrength": [
          "0"
        ],
        "att": [
          "5"
        ],
        "nerve": [
          "13/15"
        ],
        "values": [
          105
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Headstrong, Individual, Inspiring, Mighty",
        "options": [
          "Horn of Heroes [1] - Friendly Core units within 6” of this unit can reroll failed Headstrong rolls"
        ],
        "ovals": [
          15
        ],
        "keywords": "Keywords: Dwarf",
        "mType": "I",
        "stats": [
          "4",
          "3+",
          "-",
          "6+"
        ]
      },
      {
        "name": "Berserker Lord",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "He"
        ],
        "models": [
          "1"
        ],
        "unitStrength": [
          "0"
        ],
        "att": [
          "7"
        ],
        "nerve": [
          "-/16"
        ],
        "values": [
          110
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Individual, Inspiring (Berserker only), Vicious (Melee), Wild Charge (D3)",
        "options": [
          "Mount on a Brock, losing Wild Charge (D3) but increasing Speed to 8 and changing to Hero (Cav – Height: 3)"
        ],
        "ovals": [
          30
        ],
        "keywords": "Keywords: Berserker, Dwarf",
        "mType": "I",
        "stats": [
          "5",
          "3+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Warsmith",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "He"
        ],
        "models": [
          "1"
        ],
        "unitStrength": [
          "0"
        ],
        "att": [
          "4"
        ],
        "nerve": [
          "11/13"
        ],
        "values": [
          95
        ],
        "unlocks": [],
        "special": "Aura (Elite (Ranged) - War Engines only), Individual, Inspiring (War Engines only) Pistol: 12”, Piercing (1)",
        "options": [],
        "ovals": [],
        "keywords": "Keywords: Dwarf, Warsmith",
        "mType": "I",
        "stats": [
          "4",
          "5+",
          "4+",
          "5+"
        ]
      },
      {
        "name": "Dwarf Army Standard Bearer",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "He"
        ],
        "models": [
          "1"
        ],
        "unitStrength": [
          "0"
        ],
        "att": [
          "1"
        ],
        "nerve": [
          "10/12"
        ],
        "values": [
          50
        ],
        "unlocks": [],
        "special": "Headstrong, Individual, Inspiring",
        "options": [],
        "ovals": [],
        "keywords": "Keywords: Dwarf",
        "mType": "I",
        "stats": [
          "4",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Dwarf Lord on Large Beast",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "He"
        ],
        "models": [
          "1"
        ],
        "unitStrength": [
          "1"
        ],
        "att": [
          "7"
        ],
        "nerve": [
          "15/17"
        ],
        "values": [
          200
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Headstrong, Inspiring, Nimble, Thunderous Charge (2)",
        "options": [],
        "ovals": [],
        "keywords": "Keywords: Beast, Dwarf",
        "mType": "LC",
        "stats": [
          "7",
          "3+",
          "-",
          "6+"
        ]
      },
      {
        "name": "Stone Priest",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "He"
        ],
        "models": [
          "1"
        ],
        "unitStrength": [
          "0"
        ],
        "att": [
          "1"
        ],
        "nerve": [
          "11/13"
        ],
        "values": [
          90
        ],
        "unlocks": [],
        "special": "Headstrong, Individual, Inspiring (Earthbound only) Stoneshapers: If this unit has taken the Bane Chant option (below) it may, after casting Surge on a Friendly Core Earthbound unit, immediately cast Bane Chant against the same target. Spells Surge (8) Spellcaster: 2",
        "options": [
          "Bane Chant (2)"
        ],
        "ovals": [
          20
        ],
        "keywords": "Keywords: Dwarf, Earthbound",
        "mType": "I",
        "stats": [
          "4",
          "5+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Steel Juggernaut",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "He"
        ],
        "models": [
          "1"
        ],
        "unitStrength": [
          "1"
        ],
        "att": [
          "5"
        ],
        "nerve": [
          "-/13"
        ],
        "values": [
          150
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Inspiring, Nimble Hand Cannon: 24”, Piercing (2), Steady Aim",
        "options": [],
        "ovals": [],
        "keywords": "Keywords: Dwarf, Warsmith",
        "mType": "LI",
        "stats": [
          "5",
          "3+",
          "5+",
          "6+"
        ]
      },
      {
        "name": "Garrek Heavyhand [1]",
        "irregular": 0,
        "limit": 1,
        "unitType": [
          "He"
        ],
        "models": [
          "1"
        ],
        "unitStrength": [
          "0"
        ],
        "att": [
          "5"
        ],
        "nerve": [
          "14/16"
        ],
        "values": [
          150
        ],
        "unlocks": [],
        "special": "Crushing Strength (3), Headstrong, Individual, Inspiring, Mighty, Regeneration (5+)",
        "options": [],
        "ovals": [],
        "keywords": "Keywords: Dwarf",
        "mType": "I",
        "stats": [
          "4",
          "3+",
          "-",
          "6+"
        ]
      },
      {
        "name": "Rordin the Dwarf [1]",
        "irregular": 0,
        "limit": 1,
        "unitType": [
          "He"
        ],
        "models": [
          "1"
        ],
        "unitStrength": [
          "0"
        ],
        "att": [
          "5"
        ],
        "nerve": [
          "13/15"
        ],
        "values": [
          125
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Individual, Inspiring, Mighty, Pathfinder Now I’m Angry: Once per game, after an enemy unit rolls to damage Rordin (whether in melee or with a ranged attack), the player can force the opponent to re-roll all successful rolls to damage. This effect lasts from that moment to the end of the enemy turn – all units rolling to damage Rordin must re-roll their successful rolls to damage.",
        "options": [],
        "ovals": [],
        "keywords": "Keywords: Dwarf",
        "mType": "I",
        "stats": [
          "4",
          "3+",
          "-",
          "6+"
        ]
      },
      {
        "name": "Flame Priest",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "He"
        ],
        "models": [
          "1"
        ],
        "unitStrength": [
          "0"
        ],
        "att": [
          "1"
        ],
        "nerve": [
          "11/13"
        ],
        "values": [
          65
        ],
        "unlocks": [],
        "special": "Individual Spells Fireball (6) Spellcaster: 1",
        "options": [
          "Bane Chant (2)",
          "Increase to Fireball (10)"
        ],
        "ovals": [
          20,
          15
        ],
        "keywords": "Keywords: Dwarf, Flamesmith",
        "mType": "I",
        "stats": [
          "4",
          "4+",
          "-",
          "5+"
        ]
      }
    ]
  },
  {
    "faction": "Elves",
    "alignment": 0,
    "special": "Sabre toothed hunting cat",
    "units": [
      {
        "name": "Kindred Tallspears",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          "10",
          "20",
          "40"
        ],
        "unitStrength": [
          "1",
          "3",
          "4"
        ],
        "att": [
          "12",
          "15",
          "30"
        ],
        "nerve": [
          "10/12",
          "14/16",
          "21/23"
        ],
        "values": [
          90,
          140,
          230
        ],
        "unlocks": [],
        "special": "Elite (Melee), Phalanx",
        "options": [],
        "ovals": [],
        "keywords": "Keywords: Elf, Kindred",
        "mType": "I",
        "stats": [
          "6",
          "4+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Hunters of the Wild*",
        "irregular": 1,
        "limit": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          "10",
          "20"
        ],
        "unitStrength": [
          "1",
          "3"
        ],
        "att": [
          "12",
          "15"
        ],
        "nerve": [
          "10/12",
          "14/16"
        ],
        "values": [
          105,
          160
        ],
        "unlocks": [],
        "special": "Pathfinder, Scout",
        "options": [],
        "ovals": [],
        "keywords": "Keywords: Verdant",
        "mType": "HI",
        "stats": [
          "5",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Forest Guard",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          "10",
          "20"
        ],
        "unitStrength": [
          "1",
          "3"
        ],
        "att": [
          "10",
          "12"
        ],
        "nerve": [
          "11/13",
          "15/17"
        ],
        "values": [
          105,
          165
        ],
        "unlocks": [],
        "special": "Elite (Melee), Pathfinder, Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "keywords": "Keywords: Elf, Tracker",
        "mType": "I",
        "stats": [
          "6",
          "3+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Shield Watch",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          "10",
          "20"
        ],
        "unitStrength": [
          "1",
          "3"
        ],
        "att": [
          "10",
          "12"
        ],
        "nerve": [
          "10/12",
          "14/16"
        ],
        "values": [
          100,
          155
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Elite (Melee)",
        "options": [],
        "ovals": [],
        "keywords": "Keywords: Elf",
        "mType": "I",
        "stats": [
          "6",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Palace Guard",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          "10",
          "20",
          "40"
        ],
        "unitStrength": [
          "1",
          "3",
          "4"
        ],
        "att": [
          "10",
          "12",
          "25"
        ],
        "nerve": [
          "11/13",
          "15/17",
          "22/24"
        ],
        "values": [
          105,
          160,
          265
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Elite (Melee)",
        "options": [],
        "ovals": [],
        "keywords": "Keywords: Elf",
        "mType": "I",
        "stats": [
          "6",
          "3+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Kindred Archers",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          "10",
          "20",
          "40"
        ],
        "unitStrength": [
          "1",
          "2",
          "3"
        ],
        "att": [
          "8",
          "10",
          "20"
        ],
        "nerve": [
          "10/12",
          "14/16",
          "21/23"
        ],
        "values": [
          90,
          120,
          210
        ],
        "unlocks": [],
        "special": "Bows: 24”, Elite (Ranged)",
        "options": [],
        "ovals": [],
        "keywords": "Keywords: Elf, Kindred",
        "mType": "I",
        "stats": [
          "6",
          "5+",
          "5+",
          "4+"
        ]
      },
      {
        "name": "Kindred Gladestalkers*",
        "irregular": 1,
        "limit": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          "10",
          "20"
        ],
        "unitStrength": [
          "1",
          "2"
        ],
        "att": [
          "8",
          "10"
        ],
        "nerve": [
          "10/12",
          "14/16"
        ],
        "values": [
          130,
          175
        ],
        "unlocks": [],
        "special": "Elite, Pathfinder, Scout Bows: 24”, Steady Aim",
        "options": [],
        "ovals": [],
        "keywords": "Keywords: Elf, Kindred, Tracker",
        "mType": "I",
        "stats": [
          "6",
          "4+",
          "4+",
          "3+"
        ]
      },
      {
        "name": "Stormwind Cavalry",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          "5",
          "10"
        ],
        "unitStrength": [
          "1",
          "3"
        ],
        "att": [
          "8",
          "16"
        ],
        "nerve": [
          "11/13",
          "14/16"
        ],
        "values": [
          140,
          215
        ],
        "unlocks": [],
        "special": "Elite (Melee), Thunderous Charge (2)",
        "options": [],
        "ovals": [],
        "keywords": "Keywords: Elf",
        "mType": "C",
        "stats": [
          "9",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Silverbreeze Cavalry*",
        "irregular": 1,
        "limit": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          "5",
          "10"
        ],
        "unitStrength": [
          "1",
          "2"
        ],
        "att": [
          "7",
          "14"
        ],
        "nerve": [
          "11/13",
          "14/16"
        ],
        "values": [
          130,
          200
        ],
        "unlocks": [],
        "special": "Nimble Shortbows: 18”, Elite (Ranged), Steady Aim",
        "options": [],
        "ovals": [],
        "keywords": "Keywords: Elf",
        "mType": "C",
        "stats": [
          "10",
          "4+",
          "4+",
          "4+"
        ]
      },
      {
        "name": "Therennian Sea Guard",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          "20",
          "40"
        ],
        "unitStrength": [
          "3",
          "4"
        ],
        "att": [
          "12",
          "25"
        ],
        "nerve": [
          "14/16",
          "21/23"
        ],
        "values": [
          165,
          290
        ],
        "unlocks": [],
        "special": "Elite (Melee), Phalanx Bows: 24”",
        "options": [],
        "ovals": [],
        "keywords": "Keywords: Elf",
        "mType": "I",
        "stats": [
          "6",
          "4+",
          "5+",
          "4+"
        ]
      },
      {
        "name": "Battlecats*",
        "irregular": 1,
        "limit": 0,
        "unitType": [
          "R"
        ],
        "models": [
          "3"
        ],
        "unitStrength": [
          "1"
        ],
        "att": [
          "9"
        ],
        "nerve": [
          "10/12"
        ],
        "values": [
          80
        ],
        "unlocks": [],
        "special": "Elite (Melee - Swarms only), Nimble, Vicious (Melee)",
        "options": [],
        "ovals": [],
        "keywords": "Keywords: Beast",
        "mType": "S",
        "stats": [
          "7",
          "4+",
          "-",
          "2+"
        ]
      },
      {
        "name": "Forest Shamblers*",
        "irregular": 1,
        "limit": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          "3",
          "6"
        ],
        "unitStrength": [
          "2",
          "3"
        ],
        "att": [
          "9",
          "18"
        ],
        "nerve": [
          "-/14",
          "-/17"
        ],
        "values": [
          120,
          200
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Pathfinder, Scout, Shambling",
        "options": [],
        "ovals": [],
        "keywords": "Keywords: Verdant",
        "mType": "LI",
        "stats": [
          "6",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "War Chariots*",
        "irregular": 1,
        "limit": 0,
        "unitType": [
          "T",
          "R",
          "H",
          "L"
        ],
        "models": [
          "2",
          "3",
          "4",
          "6"
        ],
        "unitStrength": [
          "1",
          "2",
          "3",
          "4"
        ],
        "att": [
          "8",
          "12",
          "16",
          "20"
        ],
        "nerve": [
          "12/14",
          "14/16",
          "16/18",
          "20/22"
        ],
        "values": [
          135,
          170,
          215,
          245
        ],
        "unlocks": [],
        "special": "Elite, Thunderous Charge (2) Shortbows: 18”, Att: [4/6/8/10], Steady Aim",
        "options": [],
        "ovals": [],
        "keywords": "Keywords: Elf",
        "mType": "Ch",
        "stats": [
          "8",
          "4+",
          "5+",
          "4+"
        ]
      },
      {
        "name": "Bolt Thrower",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "W"
        ],
        "models": [
          "1"
        ],
        "unitStrength": [
          "0"
        ],
        "att": [
          "2"
        ],
        "nerve": [
          "10/12"
        ],
        "values": [
          90
        ],
        "unlocks": [],
        "special": "Bolt Thrower: 48”, Blast (D3), Elite (Ranged), Piercing (2), Reload",
        "options": [],
        "ovals": [],
        "keywords": "Keywords: Elf, Kindred",
        "mType": "W",
        "stats": [
          "6",
          "-",
          "4+",
          "4+"
        ]
      },
      {
        "name": "Tree Herder",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "He"
        ],
        "models": [
          "1"
        ],
        "unitStrength": [
          "1"
        ],
        "att": [
          "9"
        ],
        "nerve": [
          "-/18"
        ],
        "values": [
          260
        ],
        "unlocks": [],
        "special": "Crushing Strength (3), Inspiring, Pathfinder, Radiance of Life, Scout, Strider Spells Surge (8) Spellcaster: 0",
        "options": [],
        "ovals": [],
        "keywords": "Keywords: Verdant",
        "mType": "M",
        "stats": [
          "6",
          "3+",
          "-",
          "6+"
        ]
      },
      {
        "name": "Elven King",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "He"
        ],
        "models": [
          "1"
        ],
        "unitStrength": [
          "0"
        ],
        "att": [
          "5"
        ],
        "nerve": [
          "13/15"
        ],
        "values": [
          100
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Elite (Melee), Individual, Inspiring, Mighty",
        "options": [
          "Mount on a Horse, increasing Speed to 9 and changing to Hero (Cav - Height: 3)",
          "Sabre-Toothed Hunting Cat",
          "The Shardblade [1] - Increase Melee to 2+"
        ],
        "ovals": [
          35,
          10,
          15
        ],
        "keywords": "Keywords: Elf",
        "mType": "I",
        "stats": [
          "6",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Dragon Breath",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "W"
        ],
        "models": [
          "1"
        ],
        "unitStrength": [
          "0"
        ],
        "att": [
          "12"
        ],
        "nerve": [
          "10/12"
        ],
        "values": [
          90
        ],
        "unlocks": [],
        "special": "Dragon Breath: 12”, Elite (Ranged), Steady Aim",
        "options": [],
        "ovals": [],
        "keywords": "Keywords: Draconic, Elf",
        "mType": "W",
        "stats": [
          "6",
          "-",
          "4+",
          "4+"
        ]
      },
      {
        "name": "Drakon Riders*",
        "irregular": 1,
        "limit": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          "3",
          "6"
        ],
        "unitStrength": [
          "2",
          "3"
        ],
        "att": [
          "9",
          "18"
        ],
        "nerve": [
          "12/14",
          "15/17"
        ],
        "values": [
          165,
          275
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Elite (Melee), Fly, Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "keywords": "Keywords: Draconic, Elf",
        "mType": "LC",
        "stats": [
          "10",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Lord on Drakon",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "He"
        ],
        "models": [
          "1"
        ],
        "unitStrength": [
          "1"
        ],
        "att": [
          "5"
        ],
        "nerve": [
          "13/15"
        ],
        "values": [
          170
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Elite (Melee), Fly, Inspiring, Nimble, Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "keywords": "Keywords: Draconic, Elf",
        "mType": "LC",
        "stats": [
          "10",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Noble War Chariot",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "He"
        ],
        "models": [
          "1"
        ],
        "unitStrength": [
          "1"
        ],
        "att": [
          "3"
        ],
        "nerve": [
          "11/13"
        ],
        "values": [
          100
        ],
        "unlocks": [],
        "special": "Elite, Nimble, Thunderous Charge (2) Shortbow: 18”, Steady Aim",
        "options": [],
        "ovals": [],
        "keywords": "Keywords: Elf",
        "mType": "Ch",
        "stats": [
          "8",
          "3+",
          "4+",
          "4+"
        ]
      },
      {
        "name": "Elven Prince",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "He"
        ],
        "models": [
          "1"
        ],
        "unitStrength": [
          "0"
        ],
        "att": [
          "3"
        ],
        "nerve": [
          "11/13"
        ],
        "values": [
          55
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Elite (Melee), Individual",
        "options": [
          "Mount on a Horse, increasing Speed to 9 and changing to Hero (Cav - Height: 3)",
          "Sabre-Toothed Hunting Cat"
        ],
        "ovals": [
          25,
          10
        ],
        "keywords": "Keywords: Elf",
        "mType": "I",
        "stats": [
          "6",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Army Standard Bearer",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "He"
        ],
        "models": [
          "1"
        ],
        "unitStrength": [
          "0"
        ],
        "att": [
          "1"
        ],
        "nerve": [
          "10/12"
        ],
        "values": [
          60
        ],
        "unlocks": [],
        "special": "Elite (Melee), Individual, Inspiring",
        "options": [
          "Mount on a Horse, increasing Speed to 9 and changing to Hero (Cav - Height: 3)"
        ],
        "ovals": [
          25
        ],
        "keywords": "Keywords: Elf",
        "mType": "I",
        "stats": [
          "6",
          "4+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Dragon Kindred Lord",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "He"
        ],
        "models": [
          "1"
        ],
        "unitStrength": [
          "1"
        ],
        "att": [
          "10"
        ],
        "nerve": [
          "17/19"
        ],
        "values": [
          315
        ],
        "unlocks": [],
        "special": "Crushing Strength (3), Elite (Melee), Fly, Inspiring, Nimble Dragon’s Breath: 12”, Steady Aim",
        "options": [],
        "ovals": [],
        "keywords": "Keywords: Draconic, Elf",
        "mType": "Ti",
        "stats": [
          "10",
          "3+",
          "4+",
          "5+"
        ]
      },
      {
        "name": "Elven Archmage",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "He"
        ],
        "models": [
          "1"
        ],
        "unitStrength": [
          "0"
        ],
        "att": [
          "1"
        ],
        "nerve": [
          "11/13"
        ],
        "values": [
          60
        ],
        "unlocks": [],
        "special": "Individual Master of Magic: This unit can re-roll all to hit rolls of a natural, unmodifed 1 with Bane Chant, Heal, Hex, Lightning Bolt, Mind Fog and Wind Blast. Spellcaster: 2",
        "options": [
          "Mount on a Horse, increasing Speed to 9 and changing to Hero (Cav - Height: 3)",
          "Bane Chant (2)",
          "Heal (4)",
          "Hex (3)",
          "Lightning Bolt (5)",
          "Mind Fog (2)",
          "Wind Blast (6)"
        ],
        "ovals": [
          25,
          20,
          30,
          15,
          35,
          15,
          25
        ],
        "keywords": "Keywords: Elf",
        "mType": "I",
        "stats": [
          "6",
          "5+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Madriga the Elf [1]",
        "irregular": 0,
        "limit": 1,
        "unitType": [
          "He"
        ],
        "models": [
          "1"
        ],
        "unitStrength": [
          "0"
        ],
        "att": [
          "3"
        ],
        "nerve": [
          "11/13"
        ],
        "values": [
          125
        ],
        "unlocks": [],
        "special": "Elite, Individual, Inspiring (Self only), Pathfinder, Stealthy, Scout Bow: 24”, Piercing (2) Trick Shot: Once per game, Madriga can use the following ranged weapon - Trick Shot: 48”, Att: 1, Blast (D6), Piercing (2), Ignores Cover.",
        "options": [],
        "ovals": [],
        "keywords": "Keywords: Elf, Tracker",
        "mType": "I",
        "stats": [
          "7",
          "3+",
          "3+",
          "4+"
        ]
      },
      {
        "name": "Argus Rodinar [1]",
        "irregular": 0,
        "limit": 1,
        "unitType": [
          "He"
        ],
        "models": [
          "1"
        ],
        "unitStrength": [
          "0"
        ],
        "att": [
          "-"
        ],
        "nerve": [
          "-/13"
        ],
        "values": [
          70
        ],
        "unlocks": [],
        "special": "Individual, Inspiring Altar of the Elements: As long as this unit is present and in play on the table, at the start of each ranged phase you may select a single Friendly Core unit on the battlefield regardless of range or line of sight. The unit is granted the Inspiring special rule until the start of your next turn.",
        "options": [],
        "ovals": [],
        "keywords": "Keywords: Elf, Shrine",
        "mType": "M",
        "stats": [
          "6",
          "-",
          "-",
          "5+"
        ]
      },
      {
        "name": "Tydarion Dragonlord [1]",
        "irregular": 0,
        "limit": 1,
        "unitType": [
          "He"
        ],
        "models": [
          "1"
        ],
        "unitStrength": [
          "1"
        ],
        "att": [
          "10"
        ],
        "nerve": [
          "18/20"
        ],
        "values": [
          345
        ],
        "unlocks": [],
        "special": "Brutal, Crushing Strength (4), Elite, Fly, Very Inspiring Dragon’s Breath: 12”, Att: 12, Steady Aim",
        "options": [],
        "ovals": [],
        "keywords": "Keywords: Draconic, Elf",
        "mType": "Ti",
        "stats": [
          "10",
          "3+",
          "4+",
          "5+"
        ]
      }
    ]
  }
]`;

var _catalog = JSON.parse(fullJSON);

var _artefacts = [
  {
    name:"None",
    cost:0,
    type: "common"
  },
  {
    name:"Blade of Slashing",
    cost:5,
    type: "common"
  },
  {
    name:"Fire-Oil",
    cost:5,
    type: "common"
  },
  {
    name:"Healing Brew",
    cost:5,
    type: "common"
  },
  {
    name:"Liliana's Tear",
    cost:5,
    type: "common"
  },
  {
    name:"Mace of Crushing",
    cost:5,
    type: "common"
  },
  {
    name:"Staying Stone",
    cost:5,
    type: "common"
  },
  {
    name:"War-bow of Kaba",
    cost:5,
    type: "common"
  },
  {
    name:"Hann's Sanguinary Scripture",
    cost:10,
    type: "common"
  },
  {
    name:"Mead of Madness",
    cost:10,
    type: "common"
  },
  {
    name:"Pipes of Terror",
    cost:10,
    type: "common"
  },
  {
    name:"Piercing Arrow",
    cost:10,
    type: "common"
  },
  {
    name:"Aegis of the Elohi",
    cost:15,
    type: "common"
  },
  {
    name:"Blood of the Old King",
    cost:15,
    type: "common"
  },
  {
    name:"Chalice of Wrath",
    cost:15,
    type: "common"
  },
  {
    name:"Dwarven Ale",
    cost:15,
    type: "common"
  },
  {
    name:"Helm of Confidence",
    cost:15,
    type: "common"
  },
  {
    name:"Sacred Horn",
    cost:15,
    type: "common"
  },
  {
    name:"Sir Jesse's Boots of Striding",
    cost:15,
    type: "common"
  },
  {
    name:"Blessing of the Gods",
    cost:{"He": 20, "T": 20, "R": 20, "H": 30, "L": 30 },
    type: "common"
  },
  {
    name:"Brew of Haste",
    cost:20,
    type: "common"
  },
  {
    name:"Chant of Hate",
    cost:{"He": 20, "T": 20, "R": 20, "H": 30, "L": 30 },
    type: "common"
  },
  {
    name:"Dragonshard Shield",
    cost:20,
    type: "common"
  },
  {
    name:"Hammer of Measured Force",
    cost:20,
    type: "common"
  },
  {
    name:"Maccwar's Potion of the Caterpillar",
    cost:20,
    type: "common"
  },
  {
    name:"The Scrying Gem",
    cost:25,
    type: "common"
  },
  {
    name:"Diadem of Dragon-kind",
    cost:30,
    type: "common"
  },
  {
    name:"Brew of Strength",
    cost:{"He": 30, "T": 30, "R": 30, "H": 40, "L": 40 },
    type: "common"
  },
  {
    name:"Brew of Sharpness",
    cost:{"He": 30, "T": 35, "R": 35, "H": 45, "L": 45 },
    type: "common"
  },
  {
    name:"Wine of Elvenkind",
    cost:40,
    type: "common"
  },
  {
    name:"Crystal Pendant of Retribution",
    cost:50,
    type: "common"
  },
  {
    name:"Conjurer's Staff",
    cost:10,
    type: "heroic"
  },
  {
    name:"Darklord's Onyx Ring",
    cost:10,
    type: "heroic"
  },
  {
    name:"Mournful Blade",
    cost:15,
    type: "heroic"
  },
  {
    name:"Trickster's Wand",
    cost:15,
    type: "heroic"
  },
  {
    name:"Blade of the Beast Slayer",
    cost:20,
    type: "heroic"
  },
  {
    name:"Inspiring Talismman",
    cost:20,
    type: "heroic"
  },
  {
    name:"Tome of Darkness",
    cost:20,
    type: "heroic"
  },
  {
    name:"Lute of Insatiable Darkness",
    cost:25,
    type: "heroic"
  },
  {
    name:"Zephyr Crown",
    cost:25,
    type: "heroic"
  },
  {
    name:"Boots of Levitation",
    cost:30,
    type: "heroic"
  },
  {
    name:"Boots of the Seven Leagues",
    cost:30,
    type: "heroic"
  },
  {
    name:"Shroud of the Saint",
    cost:30,
    type: "heroic"
  },
  {
    name:"The Boomstick",
    cost:30,
    type: "heroic"
  },
  {
    name:"Wings of Honeymaze",
    cost:40,
    type: "heroic"
  }
]
