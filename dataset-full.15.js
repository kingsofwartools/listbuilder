/* eslint-disable */
// FAQ 1.6.1
// CoK 19: done spells, artefacts
// Done stats for: Elves, Dwarfs, The Herd, Empire of Dust, Abyssals, Ratkin, Varangur
// Done new units for: Elves, Dwarfs, The Herd, Abyssals, Ratkin, Empire of Dust

var _mTypes = ["Infantry", "Heavy Infantry", "Large Infantry", "Swarm", "Cavalry", "Large Cavalry", "Chariot", "War Engine", "Monster", "Titan"];
var _mTypesAbbr = ["Inf", "Heavy Inf", "Lrg Inf", "Swarm", "Cav", "Lrg Cav", "Cht", "War Eng", "Mon", "Ttn"];
var _mTypesIndex = ["I","HI","LI","S","C","LC","Ch","W","M","Ti"];
var _mCountsIndex = ["T","R","H","L","He","W","M","Ti"];
var _mCountsLabel = ["Troop","Regiment","Horde","Legion",1,1,1,1];
var _mCountsSectionUnit = [1,0,0,0,4,3,2,5];

const fullJSON = [
  {
    "faction": "Elves",
    "alignment": 0,
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
        "keywords": "Elf, Kindred",
        "mType": "I",
        "stats": [
          "6",
          "4+",
          "-",
          "4+"
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
        "keywords": "Elf, Tracker",
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
        "keywords": "Elf",
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
        "keywords": "Elf",
        "mType": "I",
        "stats": [
          "6",
          "3+",
          "-",
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
        "special": "Elite (Melee), Phalanx, Bows: 24”",
        "options": [],
        "ovals": [],
        "keywords": "Elf",
        "mType": "I",
        "stats": [
          "6",
          "4+",
          "5+",
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
        "keywords": "Verdant",
        "mType": "HI",
        "stats": [
          "5",
          "3+",
          "-",
          "5+"
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
        "keywords": "Elf, Kindred",
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
        "special": "Elite, Pathfinder, Scout, Bows: 24”, Steady Aim",
        "options": [],
        "ovals": [],
        "keywords": "Elf, Kindred, Tracker",
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
        "keywords": "Elf",
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
        "special": "Nimble, Shortbows: 18”, Elite (Ranged), Steady Aim",
        "options": [],
        "ovals": [],
        "keywords": "Elf",
        "mType": "C",
        "stats": [
          "10",
          "4+",
          "4+",
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
        "keywords": "Beast",
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
        "keywords": "Verdant",
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
        "special": "Elite, Thunderous Charge (2), Shortbows: 18”, Att: [4/6/8/10], Steady Aim",
        "options": [],
        "ovals": [],
        "keywords": "Elf",
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
        "keywords": "Elf, Kindred",
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
        "special": "Crushing Strength (3), Inspiring, Pathfinder, Radiance of Life, Scout, Strider Spells: Surge (8). Spellcaster: 0",
        "options": [],
        "ovals": [],
        "keywords": "Verdant",
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
        "keywords": "Elf",
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
        "keywords": "Draconic, Elf",
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
        "keywords": "Draconic, Elf",
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
        "keywords": "Draconic, Elf",
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
        "special": "Elite, Nimble, Thunderous Charge (2), Shortbow: 18”, Steady Aim",
        "options": [],
        "ovals": [],
        "keywords": "Elf",
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
        "keywords": "Elf",
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
        "keywords": "Elf",
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
        "special": "Crushing Strength (3), Elite (Melee), Fly, Inspiring, Nimble, Dragon’s Breath: 12”, Steady Aim",
        "options": [],
        "ovals": [],
        "keywords": "Draconic, Elf",
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
        "special": "Individual, Master of Magic: This unit can re-roll all to hit rolls of a natural, unmodifed 1 with Bane Chant, Heal, Hex, Lightning Bolt, Mind Fog and Wind Blast.. Spellcaster: 2",
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
        "keywords": "Elf",
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
        "special": "Elite, Individual, Inspiring (Self only), Pathfinder, Stealthy, Scout, Bow: 24”, Piercing (2), Trick Shot: Once per game, Madriga can use the following ranged, weapon - Trick Shot: 48”, Att: 1, Blast (D6), Piercing (2), Ignores Cover.",
        "options": [],
        "ovals": [],
        "keywords": "Elf, Tracker",
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
        "special": "Individual, Inspiring, Altar of the Elements: As long as this unit is present and in play on the table, at the start of each of your ranged phases you may select a single Friendly Core unit on the battlefield regardless of range or line of sight. The unit is granted the Inspiring special rule until the start of your next turn.",
        "options": [],
        "ovals": [],
        "keywords": "Elf, Shrine",
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
        "special": "Brutal, Crushing Strength (4), Elite, Fly, Nimble, Very Inspiring, Dragon’s Breath: 12”, Att: 12, Steady Aim",
        "options": [],
        "ovals": [],
        "keywords": "Draconic, Elf",
        "mType": "Ti",
        "stats": [
          "10",
          "3+",
          "4+",
          "5+"
        ]
      }
    ],
    "themes": [
      "Sylvan Kin",
      "Twilight Kin"
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
        "keywords": "Dwarf",
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
        "keywords": "Dwarf",
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
        "keywords": "Dwarf",
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
        "keywords": "Dwarf",
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
        "special": "Vicious (Melee), Wild Charge (D3), Vengeance: While Counter Charging, this unit has Crushing Strength (+1).",
        "options": [],
        "ovals": [],
        "keywords": "Berserker, Dwarf",
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
        "special": "Headstrong, Crossbows: 24”, Piercing (1), Pot Shot",
        "options": [],
        "ovals": [],
        "keywords": "Dwarf, Ironwatch",
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
        "special": "Crushing Strength (1), Pathfinder, Scout, Light Crossbows: 24”",
        "options": [],
        "ovals": [],
        "keywords": "Dwarf, Tracker",
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
        "special": "Headstrong, Long Rifles: 36”, Piercing (2), Reload, Note: The front rank of models should be represented with large shields.",
        "options": [],
        "ovals": [],
        "keywords": "Dwarf, Warsmith",
        "mType": "HI",
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
        "special": "Headstrong, Rifles: 24”, Piercing (2), Pot Shot",
        "options": [],
        "ovals": [],
        "keywords": "Dwarf, Ironwatch",
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
        "keywords": "Berserker, Dwarf",
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
        "keywords": "Earthbound",
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
        "keywords": "Beast",
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
        "special": "Cannon: 48”, Blast (D3+1), Ignores Cover, Piercing (3), Reload, Shattering, Grapeshot: 12”, Att: 10, Piercing (1) - This attack always hits on a 6+",
        "options": [],
        "ovals": [],
        "keywords": "Dwarf, Warsmith",
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
        "keywords": "Dwarf, Warsmith",
        "mType": "M",
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
          "12"
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
        "keywords": "Earthbound",
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
        "special": "Crushing Strength (3), Headstrong, Strider, Flame Belcher: 12”, Att: 10, Piercing (1), Steady Aim",
        "options": [
          "Upgrade to Golloch’s Fury [1] - Gain Very Inspiring, Iron Resolve and exchanging its Flame Belcher for Golloch’s Gun: 18”, Att: 12, Piercing (2)"
        ],
        "ovals": [
          50
        ],
        "keywords": "Warsmith",
        "mType": "M",
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
        "keywords": "Dwarf, Flamesmith, Warsmith",
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
        "keywords": "Dwarf, Warsmith",
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
        "special": "Blast It!: 48”, Blast (D3+1), Piercing (3), Pot Shot, Lob It!: 60”, Blast (D3+1), Ignores Cover, Indirect, Piercing (1), Reload",
        "options": [],
        "ovals": [],
        "keywords": "Dwarf, Warsmith",
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
          "Horn of Heroes [1] - Friendly Core units within 6” of this unit can reroll failed Headstrong rolls. This unique upgrade cannot be taken in addition to a magical artefact."
        ],
        "ovals": [
          15
        ],
        "keywords": "Dwarf",
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
        "keywords": "Berserker, Dwarf",
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
        "special": "Aura (Elite (Ranged) - War Engines only), Individual, Inspiring (War, Engines only), Pistol: 12”, Piercing (1)",
        "options": [],
        "ovals": [],
        "keywords": "Dwarf, Warsmith",
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
        "keywords": "Dwarf",
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
        "keywords": "Beast, Dwarf",
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
        "special": "Headstrong, Individual, Inspiring (Earthbound only), Stoneshapers: If this unit has taken the Bane Chant option (below) it may, after casting Surge on a Friendly Core Earthbound unit, immediately cast Bane Chant against the same target. Spells: Surge (8). Spellcaster: 2",
        "options": [
          "Bane Chant (2)"
        ],
        "ovals": [
          20
        ],
        "keywords": "Dwarf, Earthbound",
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
        "special": "Crushing Strength (2), Inspiring, Nimble, Hand Cannon: 24”, Piercing (2), Steady Aim",
        "options": [],
        "ovals": [],
        "keywords": "Dwarf, Warsmith",
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
        "keywords": "Dwarf",
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
        "special": "Crushing Strength (2), Individual, Inspiring, Mighty, Pathfinder, Now I’m Angry: Once per game, after an enemy unit rolls to damage Rordin (whether in melee or with a ranged attack), the player can force the opponent to re-roll all successful rolls to damage. This effect lasts from that moment to the end of the enemy turn – all units rolling to damage Rordin must re-roll their successful rolls to damage.",
        "options": [],
        "ovals": [],
        "keywords": "Dwarf",
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
        "special": "Individual Spells: Fireball (6). Spellcaster: 1",
        "options": [
          "Bane Chant (2)",
          "Increase to Fireball (10)"
        ],
        "ovals": [
          20,
          15
        ],
        "keywords": "Dwarf, Flamesmith",
        "mType": "I",
        "stats": [
          "4",
          "4+",
          "-",
          "5+"
        ]
      }
    ],
    "themes": [
      "Free Dwarfs"
    ]
  },
  {
    "faction": "Free Dwarfs",
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
        "keywords": "Dwarf",
        "mType": "I",
        "stats": [
          "4",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Berserkers",
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
        "special": "Vicious (Melee), Wild Charge (D3), Vengeance: While Counter Charging, this unit has Crushing Strength (+1).",
        "options": [],
        "ovals": [],
        "keywords": "Berserker, Dwarf",
        "mType": "I",
        "stats": [
          "5",
          "4+",
          "-",
          "4+"
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
        "keywords": "Beast",
        "mType": "S",
        "stats": [
          "6",
          "4+",
          "-",
          "3+"
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
        "keywords": "Earthbound",
        "mType": "LI",
        "stats": [
          "5",
          "4+",
          "-",
          "6+"
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
        "special": "Cannon: 48”, Blast (D3+1), Ignores Cover, Piercing (3), Reload, Shattering, Grapeshot: 12”, Att: 10, Piercing (1) - This attack always hits on a 6+",
        "options": [],
        "ovals": [],
        "keywords": "Dwarf, Warsmith",
        "mType": "W",
        "stats": [
          "4",
          "-",
          "5+",
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
        "keywords": "Beast, Dwarf",
        "mType": "LC",
        "stats": [
          "7",
          "3+",
          "-",
          "6+"
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
        "keywords": "Dwarf",
        "mType": "I",
        "stats": [
          "4",
          "4+",
          "-",
          "5+"
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
        "keywords": "Berserker, Dwarf",
        "mType": "I",
        "stats": [
          "5",
          "3+",
          "-",
          "4+"
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
        "keywords": "Dwarf",
        "mType": "I",
        "stats": [
          "4",
          "3+",
          "-",
          "6+"
        ]
      },
      {
        "name": "Free Dwarf Spear Levy*",
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
          "12",
          "15"
        ],
        "nerve": [
          "9/11",
          "13/15"
        ],
        "values": [
          80,
          120
        ],
        "unlocks": [],
        "special": "Pathfinder, Phalanx",
        "options": [
          "Throwing Mastiff"
        ],
        "ovals": [
          15
        ],
        "keywords": "Dwarf",
        "mType": "I",
        "stats": [
          "4",
          "4+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Free Dwarf Ironwatch Rifles",
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
        "special": "Pathfinder, Rifles: 24”, Piercing (2), Pot Shot",
        "options": [],
        "ovals": [],
        "keywords": "Dwarf",
        "mType": "I",
        "stats": [
          "4",
          "5+",
          "5+",
          "4+"
        ]
      },
      {
        "name": "Free Dwarf Ironwatch Crossbows",
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
        "special": "Pathfinder, Crossbows: 24”, Piercing (1), Pot Shot",
        "options": [],
        "ovals": [],
        "keywords": "Dwarf",
        "mType": "I",
        "stats": [
          "4",
          "5+",
          "5+",
          "4+"
        ]
      },
      {
        "name": "Free Dwarf Shieldbreakers",
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
          90,
          140,
          230
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Pathfinder, Scout",
        "options": [
          "Throwing Mastiff"
        ],
        "ovals": [
          15
        ],
        "keywords": "Dwarf",
        "mType": "I",
        "stats": [
          "4",
          "3+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Free Dwarf Rangers",
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
          140,
          185
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Pathfinder, Scout, Light Crossbows: 24”",
        "options": [
          "Upgrade to Hearneas’ Handpicked Rangers [1] (Regiment only) - Gaining Stealthy and Elite (Ranged) with Light Crossbows",
          "Throwing Mastiff"
        ],
        "ovals": [
          15,
          15
        ],
        "keywords": "Dwarf, Tracker",
        "mType": "I",
        "stats": [
          "5",
          "4+",
          "4+",
          "4+"
        ]
      },
      {
        "name": "Free Dwarf Brock Riders",
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
        "options": [
          "Gain the ranged attack - Throwing Axes: 12”, Att: [6/12], Ra: 5+, Steady Aim"
        ],
        "ovals": [
          {
            "T": 10,
            "R": 20
          }
        ],
        "keywords": "Berserker, Dwarf",
        "mType": "C",
        "stats": [
          "8",
          "4+",
          "-",
          "4+"
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
          "12"
        ],
        "nerve": [
          "-/19"
        ],
        "values": [
          230
        ],
        "unlocks": [],
        "special": "Brutal, Crushing Strength (3), Shambling, Strider",
        "options": [
          "Upgrade to Craggoth & Kholearm [1] - Gaining Spellcaster: 0, the Flamesmith keyword, the Inspiring (Self) and Scout special rules and Fireball (10) spell"
        ],
        "ovals": [
          25
        ],
        "keywords": "Earthbound",
        "mType": "Ti",
        "stats": [
          "6",
          "4+",
          "-",
          "6+"
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
        "special": "Blast It!: 48”, Blast (D3+1), Piercing (3), Pot Shot, Lob It!: 60”, Blast (D3+1), Ignores Cover, Indirect, Piercing (1), Reload",
        "options": [
          "Upgrade with Jarrun Iremonger [1] - Gaining Aura (Iron Resolve - War Engines only) and Shattering with both the Blast It! and Lob It! attacks"
        ],
        "ovals": [
          10
        ],
        "keywords": "Dwarf, Warsmith",
        "mType": "W",
        "stats": [
          "4",
          "-",
          "5+",
          "5+"
        ]
      },
      {
        "name": "Free Dwarf Lord",
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
        "special": "Crushing Strength (1), Individual, Inspiring, Mighty, Pathfinder",
        "options": [
          "Lord’s Jewel [1] - Gain Aura (Iron Resolve - Dwarf only)"
        ],
        "ovals": [
          15
        ],
        "keywords": "Dwarf",
        "mType": "I",
        "stats": [
          "4",
          "3+",
          "-",
          "6+"
        ]
      },
      {
        "name": "Ranger Captain",
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
          100
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Individual, Inspiring (Tracker only), Pathfinder, Scout, Light Crossbow: 24”",
        "options": [],
        "ovals": [],
        "keywords": "Dwarf, Tracker",
        "mType": "I",
        "stats": [
          "5",
          "3+",
          "4+",
          "5+"
        ]
      },
      {
        "name": "Sveri Egilax on Hellbrock [1]",
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
          "-/18"
        ],
        "values": [
          210
        ],
        "unlocks": [],
        "special": "Aura (Wild Charge (+1) - Berserker only), Crushing Strength (1), Inspiring, Nimble, Thunderous Charge (1), Vicious (Melee)",
        "options": [],
        "ovals": [],
        "keywords": "Berserker, Dwarf",
        "mType": "LC",
        "stats": [
          "8",
          "3+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Herneas the Hunter [1]",
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
          "12/14"
        ],
        "values": [
          135
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Individual, Inspiring (Tracker only), Pathfinder, Scout, Stealthy, The Skewerer: 24”, Piercing (2), Aimed Shot: When Herneas is given a Halt order, The Skewerer has 30” range and Piercing (3) for the remainder of the Turn.",
        "options": [],
        "ovals": [],
        "keywords": "Dwarf, Tracker",
        "mType": "I",
        "stats": [
          "5",
          "3+",
          "3+",
          "5+"
        ]
      },
      {
        "name": "Free Dwarf Stone Priest",
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
        "special": "Individual, Inspiring (Earthbound only), Stoneshapers: If this unit has taken the Bane Chant option (below) it may, after casting Surge on a Friendly Core Earthbound unit, immediately cast Bane Chant against the same target. Spells: Surge (8). Spellcaster: 2",
        "options": [
          "Bane Chant (2)",
          "Martyr’s Prayer (7) [1]"
        ],
        "ovals": [
          20,
          35
        ],
        "keywords": "Dwarf, Earthbound",
        "mType": "I",
        "stats": [
          "4",
          "5+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Free Dwarf Packmaster",
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
          "10/12"
        ],
        "values": [
          90
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Individual, Inspiring (Beast only), Pathfinder, Scout, Homing Mastiff: 12”, Att: 6, Piercing (1), This attack always hits on a 4+.",
        "options": [
          "Upgrade with Mastiff Munchberries [1] - Gaining Aura (Vicious (Ranged) - Throwing Mastiff and Homing Mastiff ranged attacks only)"
        ],
        "ovals": [
          10
        ],
        "keywords": "Dwarf",
        "mType": "I",
        "stats": [
          "4",
          "4+",
          "4+",
          "4+"
        ]
      }
    ],
    "masterList": "Dwarfs"
  },
  {
    "faction": "Northern Alliance",
    "alignment": 0,
    "units": [
      {
        "name": "Human Clansmen",
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
          90,
          140,
          230
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Wild Charge (1)",
        "options": [
          "Exchange shields for two-handed weapons, lowering Defence to 4+ and gaining Crushing Strength (2)"
        ],
        "ovals": [
          0
        ],
        "keywords": "Barbarian, Human",
        "mType": "I",
        "stats": [
          "5",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Dwarf Clansmen",
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
          75,
          115
        ],
        "unlocks": [],
        "special": "Fury, Wild Charge (1)",
        "options": [
          "Exchange shields for two-handed Frost Hammers, lowering Defence to 4+ and gaining Crushing Strength (1)"
        ],
        "ovals": [
          0
        ],
        "keywords": "Dwarf",
        "mType": "I",
        "stats": [
          "4",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Ice Naiads",
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
          90,
          140,
          230
        ],
        "unlocks": [],
        "special": "Ensnare, Regeneration (5+), Wild Charge (1)",
        "options": [],
        "ovals": [],
        "keywords": "Frostbound, Naiad",
        "mType": "I",
        "stats": [
          "5",
          "4+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Half-Elf Berserkers",
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
          "15",
          "20"
        ],
        "nerve": [
          "-/13",
          "-/17"
        ],
        "values": [
          115,
          180
        ],
        "unlocks": [],
        "special": "Iron Resolve, Thunderous Charge (1), Wild Charge (D3)",
        "options": [],
        "ovals": [],
        "keywords": "Berserker, Half-elf",
        "mType": "I",
        "stats": [
          "6",
          "3+",
          "-",
          "3+"
        ]
      },
      {
        "name": "Huscarls",
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
          "15",
          "20"
        ],
        "nerve": [
          "11/13",
          "15/17"
        ],
        "values": [
          145,
          225
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Fury, Wild Charge (1)",
        "options": [],
        "ovals": [],
        "keywords": "Barbarian, Human",
        "mType": "HI",
        "stats": [
          "5",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Pack Hunters*",
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
          "10",
          "12"
        ],
        "nerve": [
          "9/11",
          "13/15"
        ],
        "values": [
          110,
          145
        ],
        "unlocks": [],
        "special": "Pathfinder, Stealthy, Thunderous Charge (1), Wild Charge (1), Shortbows: 18”",
        "options": [
          "Exchange Shortbows for Javelins: 12”, Steady Aim, Piercing (1)"
        ],
        "ovals": [
          {
            "T": 5,
            "R": 10
          }
        ],
        "keywords": "Barbarian, Human, Tracker",
        "mType": "I",
        "stats": [
          "5",
          "4+",
          "4+",
          "3+"
        ]
      },
      {
        "name": "Elf Clansmen",
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
          90,
          120
        ],
        "unlocks": [],
        "special": "Bows: 24”, Elite (Ranged)",
        "options": [],
        "ovals": [],
        "keywords": "Elf",
        "mType": "I",
        "stats": [
          "6",
          "5+",
          "5+",
          "4+"
        ]
      },
      {
        "name": "Snow Foxes*",
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
          "10"
        ],
        "nerve": [
          "9/11"
        ],
        "values": [
          80
        ],
        "unlocks": [],
        "special": "Nimble, Pathfinder, Stealthy, Vicious (Melee)",
        "options": [],
        "ovals": [],
        "keywords": "Beast",
        "mType": "S",
        "stats": [
          "8",
          "5+",
          "-",
          "2+"
        ]
      },
      {
        "name": "Ice Elementals",
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
          "-/14",
          "-/17"
        ],
        "values": [
          145,
          240
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Shambling, Spells: Icy Breath (Att), Frostbite: This unit’s Icy Breath spell has the Piercing (1) modifier.. Spellcaster: 0",
        "options": [],
        "ovals": [],
        "keywords": "Frostbound",
        "mType": "LI",
        "stats": [
          "6",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Ice Kin Hunters*",
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
          135,
          180
        ],
        "unlocks": [],
        "special": "Elite, Pathfinder, Scout, Bows: 24”, Steady Aim, Ice-Tipped Arrows: If one or more points of damage are scored with this unit’s Bows attack, the target enemy unit is given the Frozen special rule.",
        "options": [],
        "ovals": [],
        "keywords": "Elf, Tracker",
        "mType": "I",
        "stats": [
          "6",
          "4+",
          "4+",
          "3+"
        ]
      },
      {
        "name": "Tundra Wolves*",
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
          "9",
          "18"
        ],
        "nerve": [
          "10/12",
          "13/15"
        ],
        "values": [
          115,
          180
        ],
        "unlocks": [],
        "special": "Nimble, Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "keywords": "Beast, Tundra Wolf",
        "mType": "C",
        "stats": [
          "9",
          "3+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Snow Trolls",
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
          "12/15",
          "15/18"
        ],
        "values": [
          130,
          220
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Regeneration (5+), Vicious (Melee), Wild Charge (1)",
        "options": [],
        "ovals": [],
        "keywords": "Troll",
        "mType": "MI",
        "stats": [
          "6",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Cavern Dweller",
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
          "D6+6"
        ],
        "nerve": [
          "16/18"
        ],
        "values": [
          210
        ],
        "unlocks": [],
        "special": "Crushing Strength (3), Lifeleech (3), Strider",
        "options": [],
        "ovals": [],
        "keywords": "Blind, Cannibal",
        "mType": "M",
        "stats": [
          "6",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Ice Kin Bolt Thrower",
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
          95
        ],
        "unlocks": [],
        "special": "Bolt Thrower: 48”, Blast (D3), Elite (Ranged), Piercing (2), Reload, Ice-Tipped Bolts: If one or more points of damage are scored with this unit’s Bolt Thrower attack, the target enemy unit is given the Frozen special rule.",
        "options": [],
        "ovals": [],
        "keywords": "Elf",
        "mType": "W",
        "stats": [
          "6",
          "-",
          "4+",
          "4+"
        ]
      },
      {
        "name": "Frost Giant",
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
          "D6+8"
        ],
        "nerve": [
          "18/20"
        ],
        "values": [
          230
        ],
        "unlocks": [],
        "special": "Brutal, Crushing Strength (4), Strider Spells: Icy Breath (8). Spellcaster: 0",
        "options": [],
        "ovals": [],
        "keywords": "Frostbound, Giant",
        "mType": "Ti",
        "stats": [
          "7",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Frostfang Cavalry",
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
          "15",
          "30"
        ],
        "nerve": [
          "12/14",
          "15/17"
        ],
        "values": [
          160,
          265
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Strider, Wild Charge (1)",
        "options": [],
        "ovals": [],
        "keywords": "Frostfang, Human",
        "mType": "LC",
        "stats": [
          "7",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Lord",
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
          110
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Individual, Mighty, Very Inspiring, Wild Charge (1)",
        "options": [
          "Horn of Winter [1] - Aura (Wild Charge (+1) - Infantry & Heavy Infantry only)",
          "Snow Fox"
        ],
        "ovals": [
          10,
          10
        ],
        "keywords": "Barbarian, Human",
        "mType": "HI",
        "stats": [
          "5",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Ice Kin Master Hunter",
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
          115
        ],
        "unlocks": [],
        "special": "Elite, Individual, Pathfinder, Scout, Stealthy, Bow: 24”, Piercing (1), Ice-Tipped Arrows: If one or more points of damage are scored with this unit’s Bow attack, the target enemy unit is given the Frozen special rule.",
        "options": [],
        "ovals": [],
        "keywords": "Elf, Tracker",
        "mType": "I",
        "stats": [
          "7",
          "3+",
          "3+",
          "4+"
        ]
      },
      {
        "name": "Thegn",
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
          50
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Individual, Wild Charge (1)",
        "options": [
          "Talanaar’s Standard [1] - Rally (1)",
          "Snow Fox"
        ],
        "ovals": [
          15,
          10
        ],
        "keywords": "Barbarian, Human",
        "mType": "HI",
        "stats": [
          "5",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Thegn on Frostfang",
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
          125
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Inspiring (Frostfang only), Nimble, Strider, Wild Charge (1)",
        "options": [
          "Snow Fox"
        ],
        "ovals": [
          10
        ],
        "keywords": "Barbarian, Frostfang, Human",
        "mType": "LC",
        "stats": [
          "7",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Lord on Frostfang",
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
          "8"
        ],
        "nerve": [
          "15/17"
        ],
        "values": [
          190
        ],
        "unlocks": [],
        "special": "Crushing Strength (3), Nimble, Strider, Very Inspiring, Wild Charge (1)",
        "options": [
          "Snow Fox"
        ],
        "ovals": [
          10
        ],
        "keywords": "Barbarian, Frostfang, Human",
        "mType": "LC",
        "stats": [
          "7",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Ice-Queen",
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
          80
        ],
        "unlocks": [],
        "special": "Ensnare, Individual, Very Inspiring (Frostbound only), Master of Ice: When targeting Friendly Core Frostbound units or Enemy units which have the Frozen special rule, this unit can reroll one of the dice that failed to hit with Bane Chant, Heal, Icy Breath, Wind Blast, Surge or Blizzard. Spells: Icy Breath (10). Spellcaster: 2",
        "options": [
          "Bane Chant (2)",
          "Heal (5)",
          "Surge (8) (replaces Icy Breath)",
          "Surge (8)",
          "Wind Blast (6)",
          "Blizzard (2) [1]"
        ],
        "ovals": [
          20,
          35,
          0,
          30,
          25,
          30
        ],
        "keywords": "Elf, Frostbound",
        "mType": "I",
        "stats": [
          "6",
          "5+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Ice Blade",
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
          "-/14"
        ],
        "values": [
          105
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Duelist, Individual, Inspiring (Half-Elf only), Wild Charge (D3)",
        "options": [
          "Snow Fox"
        ],
        "ovals": [
          10
        ],
        "keywords": "Berserker, Half-elf",
        "mType": "I",
        "stats": [
          "6",
          "3+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Lord on Chimera",
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
          320
        ],
        "unlocks": [],
        "special": "Crushing Strength (3), Elite (Melee), Fly, Nimble, Very Inspiring Spells: Icy Breath (10). Spellcaster: 0",
        "options": [],
        "ovals": [],
        "keywords": "Barbarian, Beast, Draconic, Human",
        "mType": "Ti",
        "stats": [
          "10",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Skald",
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
          "2"
        ],
        "nerve": [
          "10/12"
        ],
        "values": [
          55
        ],
        "unlocks": [],
        "special": "Individual, Inspiring, Throwing Axes: 12”, Piercing (1)",
        "options": [],
        "ovals": [],
        "keywords": "Human",
        "mType": "HI",
        "stats": [
          "5",
          "5+",
          "4+",
          "4+"
        ]
      },
      {
        "name": "Snow Troll Prime",
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
          "13/16"
        ],
        "values": [
          120
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Inspiring (Troll only), Nimble, Regeneration (5+), Vicious (Melee), Wild Charge (1)",
        "options": [],
        "ovals": [],
        "keywords": "Troll",
        "mType": "M",
        "stats": [
          "6",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Clarion [1]",
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
          95
        ],
        "unlocks": [],
        "special": "Dread, Individual, Very Inspiring, Throwing Axe: 12”, Piercing (1)",
        "options": [],
        "ovals": [],
        "keywords": "Emissary, Human",
        "mType": "C",
        "stats": [
          "8",
          "4+",
          "4+",
          "4+"
        ]
      },
      {
        "name": "Orlaf the Barbarian [1]",
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
          "6"
        ],
        "nerve": [
          "-/16"
        ],
        "values": [
          135
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Individual, Mighty, Vicious (Melee), Wild, Charge (D3), Unstoppable Whirlwind: Once per game, declare you are using this ability just before Orlaf attacks in a melee. For the rest of this Melee phase, Orlaf has 12 Attacks instead of 6.",
        "options": [],
        "ovals": [],
        "keywords": "Barbarian, Human",
        "mType": "I",
        "stats": [
          "5",
          "3+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Hrimm, Legendary Ice Giant [1]",
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
          "D6+10"
        ],
        "nerve": [
          "-/20"
        ],
        "values": [
          260
        ],
        "unlocks": [],
        "special": "Brutal, Crushing Strength (4), Strider, Very Inspiring (Frostbound only) Spells: Icy Breath (12). Spellcaster: 0",
        "options": [],
        "ovals": [],
        "keywords": "Frostbound, Giant",
        "mType": "Ti",
        "stats": [
          "7",
          "4+",
          "-",
          "5+"
        ]
      }
    ],
    "themes": [
      "Varangur"
    ]
  },
  {
    "faction": "Order of the Brothermark",
    "alignment": 0,
    "units": [
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
        "keywords": "Human, Men-at-Arms",
        "mType": "I",
        "stats": [
          "5",
          "4+",
          "-",
          "4+"
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
        "special": "Iron Resolve, Crossbows: 24”, Piercing (1), Pot Shot",
        "options": [],
        "ovals": [],
        "keywords": "Human, Men-at-Arms",
        "mType": "I",
        "stats": [
          "5",
          "5+",
          "5+",
          "4+"
        ]
      },
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
        "keywords": "Human, Men-at-Arms",
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
          "Aegis Fragment",
          "Exchange shields for two-handed weapons, lowering Defence to 4+ and gaining Crushing Strength (1)"
        ],
        "ovals": [
          15,
          5,
          0
        ],
        "keywords": "Human, Paladin",
        "mType": "I",
        "stats": [
          "5",
          "3+",
          "-",
          "5+"
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
        "keywords": "Human, Paladin",
        "mType": "C",
        "stats": [
          "8",
          "3+",
          "-",
          "5+"
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
        "keywords": "Ogre",
        "mType": "LI",
        "stats": [
          "6",
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
        "special": "Iron Resolve, Heavy Arbalest: 48”, Blast (D3), Piercing (2), Reload",
        "options": [],
        "ovals": [],
        "keywords": "Human, Men-at-Arms",
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
        "special": "Crushing Strength (1), Fly, Nimble, Radiance of Life, Regeneration (4+) Spells: Fireball (10), Heal (5). Spellcaster: 0",
        "options": [],
        "ovals": [],
        "keywords": "Angelic, Flamebound, Majestic",
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
        "keywords": "Human",
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
        "keywords": "Human",
        "mType": "I",
        "stats": [
          "5",
          "3+",
          "-",
          "5+"
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
        "special": "Crushing Strength (1), Individual, Inspiring, Iron Resolve, Spells: Heal (3), Cleanse: If one or more hits are scored by this unit’s Heal spell, the target unit is no longer Weakened or Hexed.. Spellcaster: 1",
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
        "keywords": "Human",
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
        "special": "Individual, Iron Resolve Spells: Fireball (10). Spellcaster: 2",
        "options": [
          "Mount on a Horse, increasing Speed to 8 and changing to Hero (Cav – Height: 3)",
          "Bane Chant (2)",
          "Lightning Bolt (4) (replaces Fireball)",
          "Lightning Bolt (4)",
          "Wind Blast (6)"
        ],
        "ovals": [
          25,
          20,
          0,
          30,
          25
        ],
        "keywords": "Human",
        "mType": "I",
        "stats": [
          "5",
          "5+",
          "-",
          "4+"
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
        "special": "Crushing Strength (3), Fly, Inspiring, Iron Resolve, Nimble, Dragon’s Breath: 12”, Steady Aim. Spellcaster: 0",
        "options": [
          "Heal (4)",
          "Aegis Fragment"
        ],
        "ovals": [
          15,
          5
        ],
        "keywords": "Draconic, Human, Paladin",
        "mType": "Ti",
        "stats": [
          "10",
          "3+",
          "4+",
          "5+"
        ]
      },
      {
        "name": "Villein Penitents*",
        "irregular": 1,
        "limit": 0,
        "unitType": [
          "R",
          "H",
          "L"
        ],
        "models": [
          "20",
          "40",
          "60"
        ],
        "unitStrength": [
          "2",
          "3",
          "4"
        ],
        "att": [
          "12",
          "25",
          "30"
        ],
        "nerve": [
          "11/14",
          "18/21",
          "24/27"
        ],
        "values": [
          90,
          150,
          215
        ],
        "unlocks": [],
        "special": "Crushing Strength (1)",
        "options": [],
        "ovals": [],
        "keywords": "Expendable, Human, Villein",
        "mType": "I",
        "stats": [
          "5",
          "5+",
          "-",
          "3+"
        ]
      },
      {
        "name": "Villein Bowmen",
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
          "8/10",
          "12/14",
          "19/21"
        ],
        "values": [
          70,
          95,
          165
        ],
        "unlocks": [],
        "special": "Phalanx, Bows: 24”",
        "options": [],
        "ovals": [],
        "keywords": "Human, Villein",
        "mType": "I",
        "stats": [
          "5",
          "6+",
          "5+",
          "3+"
        ]
      },
      {
        "name": "Order of the Abyssal Hunt",
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
          "12/14",
          "15/17"
        ],
        "values": [
          145,
          225
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Fury, Iron Resolve, Thunderous Charge (1), Vicious (Melee - Monsters and Titans only)",
        "options": [
          "The Gauntlet"
        ],
        "ovals": [
          10
        ],
        "keywords": "Human, Order, Tracker",
        "mType": "C",
        "stats": [
          "8",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Villein Skirmishers",
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
          "7",
          "14"
        ],
        "nerve": [
          "9/11",
          "12/14"
        ],
        "values": [
          95,
          145
        ],
        "unlocks": [],
        "special": "Nimble, Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "keywords": "Human, Villein",
        "mType": "C",
        "stats": [
          "9",
          "4+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Villein Siege Artillery",
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
          "9/11"
        ],
        "values": [
          90
        ],
        "unlocks": [],
        "special": "Artillery Strike: 48”, Blast (D3+1), Ignores Cover, Indirect, Piercing (3), Reload",
        "options": [],
        "ovals": [],
        "keywords": "Human, Villein",
        "mType": "W",
        "stats": [
          "5",
          "-",
          "5+",
          "4+"
        ]
      },
      {
        "name": "Exemplar Paladin",
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
        "special": "Crushing Strength (1), Elite (Melee), Headstrong, Individual, Inspiring, Iron Resolve, Mighty",
        "options": [
          "Mount on a Horse, increasing Speed to 8 and changing to Hero (Cav – Height: 3)",
          "The Gauntlet",
          "Lead from the Front [1] - Gain Rallying (1 - Infantry only)"
        ],
        "ovals": [
          35,
          10,
          10
        ],
        "keywords": "Human, Paladin",
        "mType": "I",
        "stats": [
          "5",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Exemplar Chaplain",
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
          60
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Elite (Melee), Individual, Iron Resolve, Rallying (1 - Villein only), Cleanse: If one or more hits are scored by this unit’s Heal spell, the target unit is no longer Weakened or Hexed.. Spellcaster: 1",
        "options": [
          "Mount on a Horse, increasing Speed to 8 and changing to Hero (Cav – Height: 3)",
          "Upgrade with Battle Hymns - Gaining Aura (Fury - Villein only)",
          "Heal (2)"
        ],
        "ovals": [
          25,
          5,
          10
        ],
        "keywords": "Human, Paladin",
        "mType": "I",
        "stats": [
          "5",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Exemplar Hunter",
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
        "special": "Elite (Melee), Crushing Strength (2), Individual, Iron Resolve, Mighty, Dragon Slayer: The unit gains Vicious (Melee - Monsters and Titans only) and doubles its attacks while attacking a Monster or Titan in melee.",
        "options": [
          "Mount on a Horse, increasing Speed to 8 and changing to Hero (Cav – Height: 3)",
          "The Gauntlet"
        ],
        "ovals": [
          35,
          10
        ],
        "keywords": "Human, Paladin, Tracker",
        "mType": "I",
        "stats": [
          "5",
          "3+",
          "-",
          "5+"
        ]
      }
    ],
    "masterList": "Basilea"
  },
  {
    "faction": "Salamanders",
    "alignment": 0,
    "units": [
      {
        "name": "Ghekkotah Warriors",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "T",
          "R",
          "H",
          "L"
        ],
        "models": [
          "10",
          "20",
          "40",
          "60"
        ],
        "unitStrength": [
          "1",
          "2",
          "3",
          "4"
        ],
        "att": [
          "10",
          "12",
          "25",
          "30"
        ],
        "nerve": [
          "8/10",
          "12/14",
          "19/21",
          "25/27"
        ],
        "values": [
          60,
          95,
          155,
          230
        ],
        "unlocks": [],
        "special": "Pathfinder, Vicious (Melee)",
        "options": [],
        "ovals": [],
        "keywords": "Expendable, Ghekkotah",
        "mType": "I",
        "stats": [
          "6",
          "5+",
          "-",
          "3+"
        ]
      },
      {
        "name": "Salamander Primes",
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
          90,
          135,
          225
        ],
        "unlocks": [],
        "special": "Crushing Strength (1)",
        "options": [
          "Exchange shields for two-handed weapons, lowering Defence to 4+ and increasing Crushing Strength to (2)",
          "Effigy of Fire"
        ],
        "ovals": [
          0,
          5
        ],
        "keywords": "Salamander",
        "mType": "HI",
        "stats": [
          "5",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Salamander Unblooded",
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
          "15",
          "30"
        ],
        "nerve": [
          "13/15",
          "20/22"
        ],
        "values": [
          120,
          200
        ],
        "unlocks": [],
        "special": "Thunderous Charge (1), Wild Charge (D3)",
        "options": [
          "Effigy of Fire"
        ],
        "ovals": [
          5
        ],
        "keywords": "Salamander",
        "mType": "HI",
        "stats": [
          "5",
          "4+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Ancients*",
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
          "-/13",
          "-/17"
        ],
        "values": [
          120,
          185
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Inspiring",
        "options": [
          "Effigy of Fire"
        ],
        "ovals": [
          5
        ],
        "keywords": "Salamander",
        "mType": "HI",
        "stats": [
          "4",
          "3+",
          "-",
          "6+"
        ]
      },
      {
        "name": "Salamander Ceremonial Guard",
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
          105,
          160,
          265
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Phalanx",
        "options": [
          "Effigy of Fire"
        ],
        "ovals": [
          5
        ],
        "keywords": "Salamander",
        "mType": "HI",
        "stats": [
          "5",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Corsairs*",
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
          "9/11",
          "13/15"
        ],
        "values": [
          130,
          170
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Firelocks: 18”, Piercing (1), Steady Aim",
        "options": [],
        "ovals": [],
        "keywords": "Corsair, Salamander",
        "mType": "HI",
        "stats": [
          "5",
          "4+",
          "4+",
          "4+"
        ]
      },
      {
        "name": "Kaisenor Lancers",
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
          "10",
          "20"
        ],
        "nerve": [
          "11/13",
          "14/16"
        ],
        "values": [
          125,
          195
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "keywords": "Reptilian, Salamander",
        "mType": "C",
        "stats": [
          "8",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Ember Sprites*",
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
          "1",
          "1"
        ],
        "att": [
          "7",
          "14"
        ],
        "nerve": [
          "-/11",
          "-/14"
        ],
        "values": [
          80,
          135
        ],
        "unlocks": [],
        "special": "Scout, Shambling, Vicious, Flame Belch: 12”, Steady Aim",
        "options": [],
        "ovals": [],
        "keywords": "Flamebound",
        "mType": "S",
        "stats": [
          "6",
          "5+",
          "4+",
          "3+"
        ]
      },
      {
        "name": "Ghekkotah Hunters*",
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
          "8/10",
          "12/14"
        ],
        "values": [
          95,
          125
        ],
        "unlocks": [],
        "special": "Pathfinder, Stealthy, Blowpipes: 18”, Vicious (Ranged)",
        "options": [
          "Exchange Blowpipes for Bows: 24”, Vicious (Ranged)"
        ],
        "ovals": [
          {
            "T": 5,
            "R": 10
          }
        ],
        "keywords": "Ghekkotah, Tracker",
        "mType": "I",
        "stats": [
          "7",
          "5+",
          "5+",
          "3+"
        ]
      },
      {
        "name": "Fire Elementals",
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
          "-/14",
          "-/17"
        ],
        "values": [
          130,
          220
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Pathfinder, Shambling, Vicious (Melee)",
        "options": [],
        "ovals": [],
        "keywords": "Flamebound",
        "mType": "LI",
        "stats": [
          "6",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Tyrants",
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
          "15",
          "30"
        ],
        "nerve": [
          "-/14",
          "-/17"
        ],
        "values": [
          145,
          240
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Wild Charge (D3)",
        "options": [
          "Effigy of Fire"
        ],
        "ovals": [
          5
        ],
        "keywords": "Berserker, Reptilian",
        "mType": "LI",
        "stats": [
          "6",
          "4+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Scorchwings*",
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
          "6",
          "12"
        ],
        "nerve": [
          "11/13",
          "14/16"
        ],
        "values": [
          120,
          200
        ],
        "unlocks": [],
        "special": "Fly, Nimble, Pathfinder, Thunderous Charge (1), Firesparks: 18”, Steady Aim",
        "options": [],
        "ovals": [],
        "keywords": "Flamebound",
        "mType": "LC",
        "stats": [
          "10",
          "3+",
          "4+",
          "3+"
        ]
      },
      {
        "name": "Greater Fire Elemental",
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
          "8"
        ],
        "nerve": [
          "-/18"
        ],
        "values": [
          175
        ],
        "unlocks": [],
        "special": "Crushing Strength (3), Pathfinder, Shambling, Vicious (Melee) Spells: Fireball (8). Spellcaster: 0",
        "options": [],
        "ovals": [],
        "keywords": "Flamebound",
        "mType": "M",
        "stats": [
          "6",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Lekelidon",
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
          "5"
        ],
        "nerve": [
          "11/13"
        ],
        "values": [
          85
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Caustic Spit: 18”, Piercing (1), Steady Aim",
        "options": [],
        "ovals": [],
        "keywords": "Reptilian",
        "mType": "M",
        "stats": [
          "6",
          "5+",
          "4+",
          "4+"
        ]
      },
      {
        "name": "Komodon",
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
          "3"
        ],
        "nerve": [
          "11/13"
        ],
        "values": [
          115
        ],
        "unlocks": [],
        "special": "Blast ((D3) - Melee), Crushing Strength (1), Vicious, Bile Spew: 36”, Blast (D3+1), Piercing (1)",
        "options": [],
        "ovals": [],
        "keywords": "Reptilian",
        "mType": "M",
        "stats": [
          "5",
          "5+",
          "5+",
          "4+"
        ]
      },
      {
        "name": "Fire Drake",
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
          "12"
        ],
        "nerve": [
          "16/18"
        ],
        "values": [
          210
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Nimble, Firebreath: 12”, Steady Aim",
        "options": [],
        "ovals": [],
        "keywords": "Flamebound, Reptilian",
        "mType": "Ti",
        "stats": [
          "7",
          "4+",
          "4+",
          "5+"
        ]
      },
      {
        "name": "Rhinosaur Cavalry",
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
          150,
          250
        ],
        "unlocks": [],
        "special": "Brutal, Crushing Strength (1), Thunderous Charge (2)",
        "options": [],
        "ovals": [],
        "keywords": "Reptilian, Salamander",
        "mType": "LC",
        "stats": [
          "7",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Ghekkotah Slasher",
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
          "8"
        ],
        "nerve": [
          "16/18"
        ],
        "values": [
          210
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Pathfinder, Sharpstick Thrower: 36”, Att: 2, Blast (D3), Piercing (2), Steady Aim",
        "options": [],
        "ovals": [],
        "keywords": "Beast, Ghekkotah",
        "mType": "Ti",
        "stats": [
          "7",
          "3+",
          "5+",
          "5+"
        ]
      },
      {
        "name": "Mage-Priest",
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
          90
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Individual, Inspiring (Flamebound only), Fuel for the Fire: While within 6” of another Friendly Core Flamebound unit, this unit can reroll all to hit rolls of a natural, unmodifed 1 with Fireball, Bane Chant, Heal and Surge. Spells: Fireball (10). Spellcaster: 2",
        "options": [
          "Mount on a Raptor, increasing Speed to 8 and changing to Hero (Cav – Height: 3)",
          "Bane Chant (3)",
          "Heal (3)",
          "Surge (8)",
          "Surge (8) (replaces Fireball)"
        ],
        "ovals": [
          25,
          30,
          20,
          30,
          0
        ],
        "keywords": "Flamebound, Salamander",
        "mType": "HI",
        "stats": [
          "5",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Battle Captain",
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
        "special": "Crushing Strength (2), Individual",
        "options": [
          "Mount on a Raptor, increasing Speed to 8 and changing to Hero (Cav – Height: 3)",
          "Path of Fire [1] - Gain Aura (Pathfinder - Heavy Infantry only)"
        ],
        "ovals": [
          25,
          15
        ],
        "keywords": "Salamander",
        "mType": "HI",
        "stats": [
          "5",
          "3+",
          "-",
          "5+"
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
        "special": "Crushing Strength (1), Fly, Nimble, Radiance of Life, Regeneration (4+) Spells: Fireball (10), Heal (5). Spellcaster: 0",
        "options": [],
        "ovals": [],
        "keywords": "Flamebound, Majestic",
        "mType": "Ti",
        "stats": [
          "10",
          "3+",
          "-",
          "3+"
        ]
      },
      {
        "name": "Clan Lord",
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
        "special": "Crushing Strength (2), Individual, Inspiring, Mighty",
        "options": [
          "Mount on a Raptor, increasing Speed to 8 changing to Hero (Cav – Height: 3)",
          "Effigy of Fire"
        ],
        "ovals": [
          35,
          5
        ],
        "keywords": "Salamander",
        "mType": "HI",
        "stats": [
          "5",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Herald",
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
        "special": "Crushing Strength (1), Individual, Inspiring",
        "options": [
          "Mount on a Raptor, increasing Speed to 8 and changing to Hero (Cav – Height: 3)"
        ],
        "ovals": [
          25
        ],
        "keywords": "Salamander",
        "mType": "HI",
        "stats": [
          "5",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Battle Captain on Rhinosaur",
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
          140
        ],
        "unlocks": [],
        "special": "Brutal, Crushing Strength (2), Nimble, Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "keywords": "Reptilian, Salamander",
        "mType": "LC",
        "stats": [
          "7",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Ghekkotah Clutch Warden",
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
          "10/12"
        ],
        "values": [
          95
        ],
        "unlocks": [],
        "special": "Duelist, Individual, Inspiring (Ghekkotah only), Pathfinder, Scout, Stealthy, Vicious, Blowpipes: 18”",
        "options": [],
        "ovals": [],
        "keywords": "Ghekkotah",
        "mType": "I",
        "stats": [
          "7",
          "3+",
          "4+",
          "4+"
        ]
      },
      {
        "name": "Firebrand [1]",
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
          "-/15"
        ],
        "values": [
          120
        ],
        "unlocks": [],
        "special": "Aura (Elite (Melee) - Corsair only), Crushing Strength (2), Duelist, Individual, Inspiring, Pistols: 12”, Piercing (1)",
        "options": [],
        "ovals": [],
        "keywords": "Corsair, Salamander",
        "mType": "HI",
        "stats": [
          "5",
          "3+",
          "4+",
          "5+"
        ]
      },
      {
        "name": "Artakl [1]",
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
          "11/13"
        ],
        "values": [
          135
        ],
        "unlocks": [],
        "special": "Duelist, Individual, Inspiring (Ghekkotah only), Pathfinder, Scout, Stealthy, Vicious, Monster Hunter: The unit has Piercing (2) with its Blowpipe, weapon when attacking Monsters and Titans. Blowpipe: 18”, Piercing (1)",
        "options": [],
        "ovals": [],
        "keywords": "Ghekkotah, Tracker",
        "mType": "I",
        "stats": [
          "7",
          "3+",
          "3+",
          "4+"
        ]
      },
      {
        "name": "Ghekkotah Skylord on Scorchwing",
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
          "4"
        ],
        "nerve": [
          "11/13"
        ],
        "values": [
          120
        ],
        "unlocks": [],
        "special": "Fly, Inspiring (Flamebound only), Nimble, Vicious, Firesparks: 18”, Steady Aim",
        "options": [],
        "ovals": [],
        "keywords": "Flamebound, Ghekkotah",
        "mType": "LC",
        "stats": [
          "10",
          "3+",
          "3+",
          "4+"
        ]
      },
      {
        "name": "Clan Lord on Fire Drake",
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
          "15"
        ],
        "nerve": [
          "17/19"
        ],
        "values": [
          300
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Fly, Inspiring, Nimble, Firebreath: 12”, Steady Aim",
        "options": [],
        "ovals": [],
        "keywords": "Flamebound, Reptilian, Salamander",
        "mType": "Ti",
        "stats": [
          "10",
          "4+",
          "4+",
          "5+"
        ]
      }
    ]
  },
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
        "keywords": "Human, Men-at-Arms",
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
        "keywords": "Human, Paladin",
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
        "keywords": "Human, Sisterhood",
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
        "keywords": "Human, Men-at-Arms",
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
        "special": "Iron Resolve, Scout, Bows: 24”, Steady Aim, Vicious (Ranged)",
        "options": [],
        "ovals": [],
        "keywords": "Human, Sisterhood, Tracker",
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
        "keywords": "Human, Paladin",
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
        "keywords": "Human, Sisterhood",
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
        "keywords": "Human, Sisterhood",
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
        "keywords": "Beast",
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
        "special": "Iron Resolve, Crossbows: 24”, Piercing (1), Pot Shot",
        "options": [],
        "ovals": [],
        "keywords": "Human, Men-at-Arms",
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
        "keywords": "Ogre",
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
        "keywords": "Angelic",
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
        "special": "Iron Resolve, Heavy Arbalest: 48”, Blast (D3), Piercing (2), Reload",
        "options": [],
        "ovals": [],
        "keywords": "Human, Men-at-Arms",
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
        "special": "Crushing Strength (1), Fly, Nimble, Radiance of Life, Regeneration (4+) Spells: Fireball (10), Heal (5). Spellcaster: 0",
        "options": [],
        "ovals": [],
        "keywords": "Angelic, Flamebound, Majestic",
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
        "keywords": "Human",
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
        "keywords": "Human",
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
        "keywords": "Angelic",
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
        "special": "Crushing Strength (1), Headstrong, Individual, Iron Resolve. Cleanse: If one or more hits are scored by this unit’s Heal spell, the target unit is no longer Weakened or Hexed.. Spellcaster: 1",
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
        "keywords": "Human, Paladin",
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
        "special": "Crushing Strength (1), Headstrong, Individual, Inspiring, Iron Resolve, Mighty. Spellcaster: 0",
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
        "keywords": "Human, Paladin",
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
        "special": "Crushing Strength (1), Iron Resolve, Iron Resolve, Individual, Inspiring (Sisterhood only), Vicious (Melee), Wild Charge (D3)",
        "options": [
          "Mount on a Gur Panther, losing Wild Charge (D3) but increasing Speed to 10 and changing to Hero (Cav – Height: 3)"
        ],
        "ovals": [
          30
        ],
        "keywords": "Human, Sisterhood",
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
        "special": "Crushing Strength (1), Individual, Inspiring, Iron Resolve, Spells: Heal (3), Cleanse: If one or more hits are scored by this unit’s Heal spell, the target unit is no longer Weakened or Hexed.. Spellcaster: 1",
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
        "keywords": "Human",
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
        "special": "Individual, Iron Resolve Spells: Fireball (10). Spellcaster: 2",
        "options": [
          "Mount on a Horse, increasing Speed to 8 and changing to Hero (Cav – Height: 3)",
          "Bane Chant (2)",
          "Lightning Bolt (4) (replaces Fireball)",
          "Lightning Bolt (4)",
          "Wind Blast (6)"
        ],
        "ovals": [
          25,
          20,
          0,
          30,
          25
        ],
        "keywords": "Human",
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
        "keywords": "Human, Sisterhood",
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
        "keywords": "Ogre",
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
        "special": "Crushing Strength (3), Fly, Inspiring, Iron Resolve, Nimble, Dragon’s Breath: 12”, Steady Aim. Spellcaster: 0",
        "options": [
          "Heal (4)",
          "Aegis Fragment"
        ],
        "ovals": [
          15,
          5
        ],
        "keywords": "Draconic, Human, Paladin",
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
        "special": "Individual, Iron Resolve, Spells: Bane Chant (2), Fireball (4), Heal (2), Lightning Bolt (2), Wind, Blast (3), Staff of Silibar: After using a spell, Danor may immediately use another different spell he possesses on his basic profile (not an upgrade), against the same or a different target. He may continue to do this until he has used each of his spells once in any of his Ranged phases.. Spellcaster: 1",
        "options": [],
        "ovals": [],
        "keywords": "Human",
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
        "special": "Crushing Strength (2), Headstrong, Inspiring, Iron Resolve, Nimble. Spellcaster: 1",
        "options": [
          "Heal (4)"
        ],
        "ovals": [
          20
        ],
        "keywords": "Beast, Human, Paladin",
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
        "special": "Crushing Strength (3), Dread, Elite (Melee), Fly, Iron Resolve, Nimble, Very Inspiring Spells: Fireball (8). Spellcaster: 0",
        "options": [],
        "ovals": [],
        "keywords": "Angelic",
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
        "special": "Crushing Strength (1), Fly, Inspiring, Iron Resolve, Nimble, Radiance of Life, Regeneration (5+), Spells: Fireball (8), Heal (5), Purging Flame: This unit’s Fireball spell is resolved with Piercing (1).. Spellcaster: 2",
        "options": [],
        "ovals": [],
        "keywords": "Angelic, Flamebound",
        "mType": "LI",
        "stats": [
          "10",
          "3+",
          "-",
          "5+"
        ]
      }
    ],
    "themes": [
      "Order of the Brothermark"
    ]
  },
  {
    "faction": "League of Rhordia",
    "alignment": 1,
    "units": [
      {
        "name": "Pole-Arms Block",
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
          "13/15",
          "20/22"
        ],
        "values": [
          105,
          175
        ],
        "unlocks": [],
        "special": "Crushing Strength (1)",
        "options": [
          "Indomitable Will"
        ],
        "ovals": [
          10
        ],
        "keywords": "Human",
        "mType": "I",
        "stats": [
          "5",
          "4+",
          "-",
          "3+"
        ]
      },
      {
        "name": "Spear Phalanx",
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
          "15",
          "30"
        ],
        "nerve": [
          "13/15",
          "20/22"
        ],
        "values": [
          120,
          200
        ],
        "unlocks": [],
        "special": "Phalanx",
        "options": [
          "Indomitable Will",
          "Exchange Spears for Pikes, gaining Ensnare"
        ],
        "ovals": [
          10,
          {
            "R": 20,
            "H": 30
          }
        ],
        "keywords": "Human",
        "mType": "I",
        "stats": [
          "5",
          "4+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Crossbow Block",
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
          85,
          115,
          200
        ],
        "unlocks": [],
        "special": "Crossbows: 24”, Piercing (1), Pot Shot",
        "options": [
          "Exchange Crossbows for Rifles: 24”, Piercing (2), Pot Shot"
        ],
        "ovals": [
          {
            "T": 10,
            "R": 15,
            "H": 25
          }
        ],
        "keywords": "Human",
        "mType": "I",
        "stats": [
          "5",
          "5+",
          "5+",
          "3+"
        ]
      },
      {
        "name": "Foot Guard",
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
          90,
          135,
          225
        ],
        "unlocks": [],
        "special": "-",
        "options": [
          "Indomitable Will",
          "Exchange shields for two-handed weapons, lowering Defence to 4+ and gaining Crushing Strength (1)"
        ],
        "ovals": [
          10,
          0
        ],
        "keywords": "Human, Knight",
        "mType": "I",
        "stats": [
          "5",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Cannon",
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
          "9/11"
        ],
        "values": [
          100
        ],
        "unlocks": [],
        "special": "Cannon: 48”, Blast (D3+1), Ignores Cover, Piercing (3), Reload, Shattering, Grapeshot: 12”, Att: 10, Piercing (1) - This attack always hits on a 6+.",
        "options": [],
        "ovals": [],
        "keywords": "Artillery, Human",
        "mType": "W",
        "stats": [
          "5",
          "-",
          "5+",
          "4+"
        ]
      },
      {
        "name": "Knights",
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
          "11/13",
          "14/16",
          "21/23"
        ],
        "values": [
          125,
          195,
          330
        ],
        "unlocks": [],
        "special": "Headstrong, Thunderous Charge (2)",
        "options": [
          "Indomitable Will"
        ],
        "ovals": [
          10
        ],
        "keywords": "Human, Knight",
        "mType": "C",
        "stats": [
          "8",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Mounted Scouts*",
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
          "10/12",
          "13/15"
        ],
        "values": [
          100,
          155
        ],
        "unlocks": [],
        "special": "Nimble, Shortbows: 18”, Steady Aim",
        "options": [
          "Exchange Shortbows for Blackpowder Weapons: 18”, Piercing (1), Steady Aim"
        ],
        "ovals": [
          {
            "T": 15,
            "R": 25
          }
        ],
        "keywords": "Human",
        "mType": "C",
        "stats": [
          "9",
          "4+",
          "5+",
          "3+"
        ]
      },
      {
        "name": "Mammoth",
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
          "12"
        ],
        "nerve": [
          "-/18"
        ],
        "values": [
          220
        ],
        "unlocks": [],
        "special": "Brutal, Crushing Strength (2), Strider, Thunderous Charge (2)",
        "options": [],
        "ovals": [],
        "keywords": "Beast",
        "mType": "M",
        "stats": [
          "7",
          "4+",
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
          "9/11"
        ],
        "values": [
          50
        ],
        "unlocks": [],
        "special": "Individual, Very Inspiring",
        "options": [
          "Mount on a Horse, increasing Speed to 8 and changing to Hero (Cav – Height: 3)"
        ],
        "ovals": [
          25
        ],
        "keywords": "Human",
        "mType": "I",
        "stats": [
          "5",
          "5+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Wizard",
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
        "special": "Individual Spells: Fireball (6). Spellcaster: 1",
        "options": [
          "Mount on a Horse, increasing Speed to 8 and changing to Hero (Cav – Height: 3)",
          "Mount on a Pegasus, losing Individual, gaining Fly and Nimble as well as increasing Speed to 10 and changing to Hero (Lrg Cav – Height: 4, Unit Strength: 1)",
          "Bane Chant (2)",
          "Heal (3)",
          "Lightning Bolt (3)",
          "Lightning Bolt (3) (replaces Fireball)",
          "Wind Blast (5)"
        ],
        "ovals": [
          25,
          35,
          20,
          20,
          20,
          0,
          20
        ],
        "keywords": "Human",
        "mType": "I",
        "stats": [
          "5",
          "5+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Halfling Braves",
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
          "2",
          "3"
        ],
        "att": [
          "12",
          "25"
        ],
        "nerve": [
          "12/14",
          "19/21"
        ],
        "values": [
          75,
          125
        ],
        "unlocks": [],
        "special": "Stealthy",
        "options": [],
        "ovals": [],
        "keywords": "Expendable, Halfling",
        "mType": "I",
        "stats": [
          "4",
          "5+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Halfling Knights",
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
          "10/12",
          "13/15"
        ],
        "values": [
          100,
          150
        ],
        "unlocks": [],
        "special": "Nimble, Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "keywords": "Halfling",
        "mType": "C",
        "stats": [
          "8",
          "4+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Honour Guard",
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
          "13/15",
          "16/18"
        ],
        "values": [
          145,
          240
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Iron Resolve, Thunderous Charge (2)",
        "options": [
          "Indomitable Will"
        ],
        "ovals": [
          10
        ],
        "keywords": "Aralez, Human",
        "mType": "LC",
        "stats": [
          "7",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Halfling Archers*",
        "irregular": 1,
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
          "2",
          "3"
        ],
        "att": [
          "10",
          "20"
        ],
        "nerve": [
          "12/14",
          "19/21"
        ],
        "values": [
          90,
          160
        ],
        "unlocks": [],
        "special": "Stealthy, Bows: 24”",
        "options": [],
        "ovals": [],
        "keywords": "Halfling",
        "mType": "I",
        "stats": [
          "4",
          "6+",
          "5+",
          "3+"
        ]
      },
      {
        "name": "Volley Gun",
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
          "9/11"
        ],
        "values": [
          80
        ],
        "unlocks": [],
        "special": "Volley Gun: 24”, Piercing (2), Reload",
        "options": [],
        "ovals": [],
        "keywords": "Artillery, Human",
        "mType": "W",
        "stats": [
          "4",
          "-",
          "5+",
          "4+"
        ]
      },
      {
        "name": "Duke",
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
          "12/14"
        ],
        "values": [
          85
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Individual, Mighty, Very Inspiring",
        "options": [
          "Mount on a Horse, increasing Speed to 8 and changing to Hero (Cav – Height: 3)"
        ],
        "ovals": [
          35
        ],
        "keywords": "Human",
        "mType": "I",
        "stats": [
          "5",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Halfling Master Sergeant",
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
          "10/12"
        ],
        "values": [
          60
        ],
        "unlocks": [],
        "special": "Individual, Stealthy, Very Inspiring (Halfling only)",
        "options": [
          "Mount on a Pony, increasing Speed to 8 and changing to Hero (Cav - Height: 3)",
          "Gain the ranged attack - Shortbow: 18”, Ra: 4+"
        ],
        "ovals": [
          25,
          10
        ],
        "keywords": "Halfling",
        "mType": "I",
        "stats": [
          "4",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Baron",
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
          "10/12"
        ],
        "values": [
          60
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Individual, Very Inspiring (Human only)",
        "options": [
          "Mount on a Horse, increasing Speed to 8 and changing to Hero (Cav – Height: 3)"
        ],
        "ovals": [
          25
        ],
        "keywords": "Human",
        "mType": "I",
        "stats": [
          "5",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Duke on Ancient Winged Aralez",
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
          230
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Fly, Iron Resolve, Nimble, Radiance of Life, Thunderous Charge (1), Very Inspiring",
        "options": [],
        "ovals": [],
        "keywords": "Aralez, Human",
        "mType": "M",
        "stats": [
          "10",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Baron on Aralez",
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
          145
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Iron Resolve, Nimble, Thunderous Charge (1), Very Inspiring (Human only)",
        "options": [],
        "ovals": [],
        "keywords": "Aralez, Human",
        "mType": "LC",
        "stats": [
          "8",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Battle Shrine [1]",
        "irregular": 0,
        "limit": 1,
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
          "6"
        ],
        "nerve": [
          "-/14"
        ],
        "values": [
          150
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Rallying (2) Spells: Lightning Bolt (6). Spellcaster: 0",
        "options": [],
        "ovals": [],
        "keywords": "Human, Shrine",
        "mType": "M",
        "stats": [
          "5",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Dogs of War [1]",
        "irregular": 0,
        "limit": 1,
        "unitType": [
          "H"
        ],
        "models": [
          "40"
        ],
        "unitStrength": [
          "4"
        ],
        "att": [
          "30"
        ],
        "nerve": [
          "20/22"
        ],
        "values": [
          270
        ],
        "unlocks": [],
        "special": "Ensnare, Phalanx",
        "options": [
          "Indomitable Will"
        ],
        "ovals": [
          10
        ],
        "keywords": "Human",
        "mType": "I",
        "stats": [
          "5",
          "4+",
          "-",
          "5+"
        ]
      }
    ],
    "masterList": "Kingdoms of Men"
  },
  {
    "faction": "Order of the Green Lady",
    "alignment": 1,
    "units": [
      {
        "name": "Naiad Ensnarers*",
        "irregular": 1,
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
          90,
          140,
          230
        ],
        "unlocks": [],
        "special": "Ensnare, Pathfinder, Regeneration (4+)",
        "options": [],
        "ovals": [],
        "keywords": "Naiad",
        "mType": "I",
        "stats": [
          "5",
          "4+",
          "-",
          "3+"
        ]
      },
      {
        "name": "Naiad Heartpiercers*",
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
          "9/11",
          "13/15"
        ],
        "values": [
          120,
          160
        ],
        "unlocks": [],
        "special": "Regeneration (4+), Harpoon-gun: 18”, Piercing (1), Steady Aim",
        "options": [],
        "ovals": [],
        "keywords": "Naiad",
        "mType": "I",
        "stats": [
          "5",
          "5+",
          "4+",
          "3+"
        ]
      },
      {
        "name": "Woodland Critters*",
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
          "1",
          "1"
        ],
        "att": [
          "12",
          "24"
        ],
        "nerve": [
          "9/11",
          "12/14"
        ],
        "values": [
          80,
          130
        ],
        "unlocks": [],
        "special": "Fly, Nimble, Pathfinder, Vicious (Melee)",
        "options": [],
        "ovals": [],
        "keywords": "Beast",
        "mType": "S",
        "stats": [
          "6",
          "5+",
          "-",
          "2+"
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
        "keywords": "Earthbound",
        "mType": "LI",
        "stats": [
          "5",
          "4+",
          "-",
          "6+"
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
          "12"
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
        "keywords": "Earthbound",
        "mType": "Ti",
        "stats": [
          "6",
          "4+",
          "-",
          "6+"
        ]
      },
      {
        "name": "Beast of Nature",
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
          "5"
        ],
        "nerve": [
          "15/17"
        ],
        "values": [
          150
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Pathfinder, Vicious",
        "options": [
          "Gain the ranged attack - Noxious Mist: 12”, Att: 10, Ra: 4+, Steady Aim",
          "Upgrade with Wings, increasing Speed to 10 and gaining Fly and Nimble",
          "Increase Attacks to 7"
        ],
        "ovals": [
          15,
          40,
          15
        ],
        "keywords": "Beast, Verdant",
        "mType": "M",
        "stats": [
          "7",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Unicorn",
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
          "12/14"
        ],
        "values": [
          120
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Individual, Inspiring, Pathfinder, Thunderous Charge (1) Spells: Heal (5). Spellcaster: 2",
        "options": [
          "Upgrade with Wings, losing Individual, gaining Fly and Nimble and changing to Hero (Lrg Cav - Height: 4, Unit Strength: 1)",
          "Lightning Bolt (5) (replaces Heal)",
          "Lightning Bolt (5)",
          "Wind Blast (5)",
          "Bastion (2) [1]"
        ],
        "ovals": [
          25,
          0,
          20,
          20,
          20
        ],
        "keywords": "Beast, Majestic",
        "mType": "C",
        "stats": [
          "10",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Pegasus",
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
          "3"
        ],
        "nerve": [
          "10/12"
        ],
        "values": [
          80
        ],
        "unlocks": [],
        "special": "Fly, Nimble, Pathfinder, Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "keywords": "Beast",
        "mType": "M",
        "stats": [
          "10",
          "3+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Druid",
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
          65
        ],
        "unlocks": [],
        "special": "Individual, Inspiring, Pathfinder Spells: Heal (2). Spellcaster: 1",
        "options": [
          "Mount on Forest Steed, increasing Speed to 9 and changing to Hero (Cav - Height: 3)",
          "Bane Chant (2)",
          "Lightning Bolt (2)",
          "Surge (4)",
          "Wind Blast (4)"
        ],
        "ovals": [
          25,
          20,
          10,
          10,
          15
        ],
        "keywords": "Verdant",
        "mType": "I",
        "stats": [
          "5",
          "5+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Naiad Stalker",
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
        "special": "Crushing Strength (1), Ensnare, Individual, Inspiring (Self only), Pathfinder, Regeneration (4+), Stealthy, Harpoon Gun: 18”, Piercing (1)",
        "options": [],
        "ovals": [],
        "keywords": "Naiad, Tracker",
        "mType": "I",
        "stats": [
          "6",
          "3+",
          "4+",
          "4+"
        ]
      },
      {
        "name": "Avatar of the Green Lady [1]",
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
          "13/15"
        ],
        "values": [
          185
        ],
        "unlocks": [],
        "special": "Fly, Individual, Inspiring, Regeneration (5+), Balance: At the start of each of your Turns, you may choose for this unit to have either Cloak of Death or Radiance of Life. Spells: Heal (6). Spellcaster: 3",
        "options": [],
        "ovals": [],
        "keywords": "Phantasm, Verdant",
        "mType": "I",
        "stats": [
          "10",
          "5+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Men-at-Arms Retainers",
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
        "special": "Headstrong",
        "options": [
          "Vial of Sacred Water"
        ],
        "ovals": [
          10
        ],
        "keywords": "Devoted, Human",
        "mType": "I",
        "stats": [
          "5",
          "4+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Order of the Brotherhood",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          "10",
          "20"
        ],
        "unitStrength": [
          "3",
          "4"
        ],
        "att": [
          "16",
          "32"
        ],
        "nerve": [
          "15/17",
          "22/24"
        ],
        "values": [
          200,
          340
        ],
        "unlocks": [],
        "special": "Headstrong, Thunderous Charge (2)",
        "options": [
          "Vial of Sacred Water",
          "Upgrade with the Banner of the Green Lady [1] - The unit gains Pathfinder"
        ],
        "ovals": [
          10,
          {
            "R": 15,
            "H": 20
          }
        ],
        "keywords": "Human, Order",
        "mType": "C",
        "stats": [
          "8",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Order of Redemption*",
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
          "10",
          "20"
        ],
        "nerve": [
          "12/14",
          "15/17"
        ],
        "values": [
          165,
          250
        ],
        "unlocks": [],
        "special": "Headstrong, Inspiring, Regeneration (5+), Thunderous Charge (2)",
        "options": [],
        "ovals": [],
        "keywords": "Human, Order, Sacred Water",
        "mType": "C",
        "stats": [
          "8",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Order of the Brotherhood on Foot",
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
          95,
          145
        ],
        "unlocks": [],
        "special": "Headstrong",
        "options": [
          "Vial of Sacred Water"
        ],
        "ovals": [
          10
        ],
        "keywords": "Human, Order",
        "mType": "I",
        "stats": [
          "5",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Water Elementals",
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
          "-/14",
          "-/17"
        ],
        "values": [
          130,
          220
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Regeneration (5+), Shambling, Strider",
        "options": [],
        "ovals": [],
        "keywords": "Sacred Water, Waterbound",
        "mType": "LI",
        "stats": [
          "7",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Greater Water Elemental",
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
          "8"
        ],
        "nerve": [
          "-/18"
        ],
        "values": [
          180
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Regeneration (5+), Shambling, Strider",
        "options": [],
        "ovals": [],
        "keywords": "Sacred Water, Waterbound",
        "mType": "M",
        "stats": [
          "7",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Exemplar Redeemer",
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
          "13/15"
        ],
        "values": [
          180
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Headstrong, Individual, Inspiring, Mighty, Regeneration (5+)",
        "options": [
          "Mount on a Winged Unicorn, losing Individual and Mighty, gaining Fly and Nimble as well as increasing Speed to 10 and changing to Hero (Lrg Cav – Height: 4, Unit Strength: 1)"
        ],
        "ovals": [
          25
        ],
        "keywords": "Human, Sacred Water",
        "mType": "C",
        "stats": [
          "8",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Exemplar of the Brotherhood",
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
          50
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Headstrong, Individual",
        "options": [
          "Mount on a Horse, increasing Speed to 8 and changing to Hero (Cav – Height: 3)",
          "Vial of Sacred Water"
        ],
        "ovals": [
          25,
          10
        ],
        "keywords": "Human",
        "mType": "I",
        "stats": [
          "5",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Order of the Forsaken*",
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
          155,
          255
        ],
        "unlocks": [],
        "special": "Fly, Headstrong, Thunderous Charge (2)",
        "options": [
          "Vial of Sacred Water"
        ],
        "ovals": [
          10
        ],
        "keywords": "Human, Order",
        "mType": "LC",
        "stats": [
          "10",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Devoted",
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
        "special": "Individual, Headstrong Spells: Heal (3). Spellcaster: 1",
        "options": [
          "Mount on Forest Steed, increasing Speed to 9 and changing to Hero (Cav - Height: 3)",
          "Gain Radiance of Life (Sacred Water only) [1]",
          "Icy Breath (6)",
          "Icy Breath (6) (replaces Heal)",
          "Surge (7)"
        ],
        "ovals": [
          25,
          15,
          20,
          0,
          25
        ],
        "keywords": "Devoted, Human, Sacred Water",
        "mType": "I",
        "stats": [
          "5",
          "5+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Exemplar Adjutant",
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
        "options": [
          "Mount on a Horse, increasing Speed to 8 and changing to Hero (Cav – Height: 3)"
        ],
        "ovals": [
          25
        ],
        "keywords": "Human",
        "mType": "I",
        "stats": [
          "5",
          "5+",
          "-",
          "4+"
        ]
      }
    ],
    "masterList": "Forces of Nature"
  },
  {
    "faction": "The Herd",
    "alignment": 1,
    "units": [
      {
        "name": "Hunters of the Wild",
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
        "keywords": "Verdant",
        "mType": "HI",
        "stats": [
          "5",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Centaur Bray Striders",
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
          "6",
          "12"
        ],
        "nerve": [
          "11/13",
          "14/16"
        ],
        "values": [
          105,
          160
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Pathfinder, Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "keywords": "Centaur",
        "mType": "C",
        "stats": [
          "8",
          "3+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Centaur Bray Hunters",
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
          "2"
        ],
        "att": [
          "6",
          "12"
        ],
        "nerve": [
          "11/13",
          "14/16"
        ],
        "values": [
          105,
          165
        ],
        "unlocks": [],
        "special": "Nimble, Pathfinder, Thunderous Charge (1), Shortbows: 18”, Steady Aim",
        "options": [],
        "ovals": [],
        "keywords": "Centaur, Tracker",
        "mType": "C",
        "stats": [
          "8",
          "4+",
          "5+",
          "3+"
        ]
      },
      {
        "name": "Woodland Critters*",
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
          "1",
          "1"
        ],
        "att": [
          "12",
          "24"
        ],
        "nerve": [
          "9/11",
          "12/14"
        ],
        "values": [
          80,
          130
        ],
        "unlocks": [],
        "special": "Fly, Nimble, Pathfinder, Vicious (Melee)",
        "options": [],
        "ovals": [],
        "keywords": "Beast",
        "mType": "S",
        "stats": [
          "6",
          "5+",
          "-",
          "2+"
        ]
      },
      {
        "name": "Forest Shamblers",
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
        "keywords": "Verdant",
        "mType": "LI",
        "stats": [
          "6",
          "4+",
          "-",
          "5+"
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
        "keywords": "Earthbound",
        "mType": "LI",
        "stats": [
          "5",
          "4+",
          "-",
          "6+"
        ]
      },
      {
        "name": "Beast of Nature",
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
          "5"
        ],
        "nerve": [
          "15/17"
        ],
        "values": [
          150
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Pathfinder, Vicious",
        "options": [
          "Gain the ranged attack - Noxious Mist: 12”, Att: 10, Ra: 4+, Steady Aim",
          "Upgrade with Wings, increasing Speed to 10 and gaining Fly and Nimble",
          "Increase Attacks to 7"
        ],
        "ovals": [
          15,
          40,
          15
        ],
        "keywords": "Beast, Verdant",
        "mType": "M",
        "stats": [
          "7",
          "3+",
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
          "12"
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
        "keywords": "Earthbound",
        "mType": "Ti",
        "stats": [
          "6",
          "4+",
          "-",
          "6+"
        ]
      },
      {
        "name": "Druid",
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
          65
        ],
        "unlocks": [],
        "special": "Individual, Inspiring, Pathfinder Spells: Heal (2). Spellcaster: 1",
        "options": [
          "Mount on Forest Steed, increasing Speed to 9 and changing to Hero (Cav - Height: 3)",
          "Bane Chant (2)",
          "Lightning Bolt (2)",
          "Surge (4)",
          "Wind Blast (4)"
        ],
        "ovals": [
          25,
          20,
          10,
          10,
          15
        ],
        "keywords": "Verdant",
        "mType": "I",
        "stats": [
          "5",
          "5+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Gladewalker Druid",
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
          "12/14"
        ],
        "values": [
          90
        ],
        "unlocks": [],
        "special": "Individual, Inspiring, Pathfinder Spells: Heal (4). Spellcaster: 2",
        "options": [
          "Mount on Forest Steed, increasing Speed to 9 and changing to Hero (Cav - Height: 3)",
          "Fireball (8)",
          "Hex (3)",
          "Surge (8) (replaces Heal)",
          "Surge (8)",
          "Blizzard (2) [1]"
        ],
        "ovals": [
          25,
          25,
          15,
          0,
          30,
          20
        ],
        "keywords": "Verdant",
        "mType": "HI",
        "stats": [
          "5",
          "5+",
          "-",
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
        "special": "Crushing Strength (3), Inspiring, Pathfinder, Radiance of Life, Scout, Strider Spells: Surge (8). Spellcaster: 0",
        "options": [],
        "ovals": [],
        "keywords": "Verdant",
        "mType": "M",
        "stats": [
          "6",
          "3+",
          "-",
          "6+"
        ]
      },
      {
        "name": "Forest Warden",
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
          90
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Nimble, Pathfinder, Scout Spells: Surge (4). Spellcaster: 0",
        "options": [],
        "ovals": [],
        "keywords": "Verdant",
        "mType": "LI",
        "stats": [
          "6",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Tribal Warriors",
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
          80,
          120,
          200
        ],
        "unlocks": [],
        "special": "Pathfinder, Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "keywords": "Herd",
        "mType": "I",
        "stats": [
          "6",
          "4+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Spirit Walkers",
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
          "-/11",
          "-/15",
          "-/22"
        ],
        "values": [
          105,
          160,
          265
        ],
        "unlocks": [],
        "special": "Pathfinder, Thunderous Charge (1), Wild Charge (D3)",
        "options": [],
        "ovals": [],
        "keywords": "Berserker, Herd, Phantasm",
        "mType": "I",
        "stats": [
          "6",
          "3+",
          "-",
          "3+"
        ]
      },
      {
        "name": "Tribal Spears",
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
          90,
          135,
          225
        ],
        "unlocks": [],
        "special": "Pathfinder, Phalanx, Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "keywords": "Herd",
        "mType": "I",
        "stats": [
          "6",
          "4+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Longhorns",
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
          "15",
          "20"
        ],
        "nerve": [
          "10/12",
          "14/16"
        ],
        "values": [
          135,
          205
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Pathfinder, Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "keywords": "Herd",
        "mType": "HI",
        "stats": [
          "6",
          "3+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Tribal Trappers*",
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
          "9/11",
          "13/15"
        ],
        "values": [
          90,
          120
        ],
        "unlocks": [],
        "special": "Pathfinder, Scout, Thunderous Charge (1), Shortbows: 18”",
        "options": [],
        "ovals": [],
        "keywords": "Herd, Tracker",
        "mType": "I",
        "stats": [
          "6",
          "5+",
          "5+",
          "3+"
        ]
      },
      {
        "name": "Minotaur Chariots*",
        "irregular": 1,
        "limit": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          "2",
          "3",
          "4"
        ],
        "unitStrength": [
          "1",
          "2",
          "3"
        ],
        "att": [
          "10",
          "15",
          "20"
        ],
        "nerve": [
          "12/15",
          "14/17",
          "16/19"
        ],
        "values": [
          170,
          210,
          265
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Fury, Strider, Thunderous Charge (2), Wild Charge (D3)",
        "options": [],
        "ovals": [],
        "keywords": "Herd, Minotaur",
        "mType": "Ch",
        "stats": [
          "6",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Wild Gur Panthers*",
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
        "keywords": "Beast",
        "mType": "C",
        "stats": [
          "10",
          "4+",
          "-",
          "3+"
        ]
      },
      {
        "name": "Harpies*",
        "irregular": 1,
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
          "8"
        ],
        "nerve": [
          "9/11"
        ],
        "values": [
          90
        ],
        "unlocks": [],
        "special": "Fly, Nimble, Pathfinder, Vicious (Melee)",
        "options": [],
        "ovals": [],
        "keywords": "Harpy",
        "mType": "HI",
        "stats": [
          "10",
          "4+",
          "-",
          "3+"
        ]
      },
      {
        "name": "Guardian Brutes",
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
          "15",
          "30"
        ],
        "nerve": [
          "12/14",
          "15/17"
        ],
        "values": [
          135,
          225
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Fury, Thunderous Charge (1), Wild Charge (D3)",
        "options": [],
        "ovals": [],
        "keywords": "Beast, Herd",
        "mType": "LI",
        "stats": [
          "6",
          "4+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Lycans",
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
          155,
          255
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Nimble, Pathfinder, Regeneration (5+)",
        "options": [],
        "ovals": [],
        "keywords": "Beast, Lycanthrope",
        "mType": "LI",
        "stats": [
          "9",
          "3+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Tribal Tracker",
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
          "10/12"
        ],
        "values": [
          80
        ],
        "unlocks": [],
        "special": "Individual, Inspiring (Tracker only), Pathfinder, Scout, Stealthy, Shortbow: 18”, Piercing (1)",
        "options": [
          "Sabre-Toothed Hunting Cat"
        ],
        "ovals": [
          10
        ],
        "keywords": "Herd, Tracker",
        "mType": "I",
        "stats": [
          "6",
          "4+",
          "4+",
          "4+"
        ]
      },
      {
        "name": "Great Chieftain on Minotaur Chariot",
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
          "13/16"
        ],
        "values": [
          140
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Fury, Inspiring, Nimble, Strider, Thunderous Charge (2), Wild Charge (D3)",
        "options": [
          "Gain the ranged attack - Shortbow: 18”, Ra: 4+"
        ],
        "ovals": [
          15
        ],
        "keywords": "Herd, Minotaur",
        "mType": "Ch",
        "stats": [
          "6",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Lycan Alpha",
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
          165
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Inspiring (Lycanthrope only), Nimble, Pathfinder, Regeneration (5+)",
        "options": [],
        "ovals": [],
        "keywords": "Beast, Lycanthrope",
        "mType": "LI",
        "stats": [
          "9",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Moonfang [1]",
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
          "6"
        ],
        "nerve": [
          "14/16"
        ],
        "values": [
          210
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Inspiring, Nimble, Pathfinder, Regeneration, (4+), Vicious (Melee), Primal Savagery: Friendly Core units that are Engaged with the same enemy unit as Moonfang have Vicious (Melee).",
        "options": [],
        "ovals": [],
        "keywords": "Beast, Lycanthrope",
        "mType": "LI",
        "stats": [
          "9",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Great Chieftain",
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
          "12/14"
        ],
        "values": [
          110
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Individual, Inspiring, Mighty, Pathfinder, Thunderous Charge (1)",
        "options": [
          "Gain the ranged attack - Shortbow : 18”, Ra: 4+",
          "Sabre-Toothed Hunting Cat"
        ],
        "ovals": [
          15,
          10
        ],
        "keywords": "Herd",
        "mType": "I",
        "stats": [
          "6",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Centaur Chief",
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
          110
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Individual, Inspiring (Centaur only), Mighty, Pathfinder",
        "options": [
          "Gain the ranged attack - Shortbow: 18”, Ra: 4+",
          "Sabre-Toothed Hunting Cat"
        ],
        "ovals": [
          10,
          10
        ],
        "keywords": "Centaur",
        "mType": "C",
        "stats": [
          "8",
          "3+",
          "-",
          "4+"
        ]
      }
    ],
    "masterList": "Forces of Nature"
  },
  {
    "faction": "Sylvan Kin",
    "alignment": 1,
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
        "keywords": "Elf, Kindred",
        "mType": "I",
        "stats": [
          "6",
          "4+",
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
        "keywords": "Elf, Kindred",
        "mType": "I",
        "stats": [
          "6",
          "5+",
          "5+",
          "4+"
        ]
      },
      {
        "name": "Stormwind Cavalry*",
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
        "keywords": "Elf",
        "mType": "C",
        "stats": [
          "9",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Forest Shamblers",
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
        "keywords": "Verdant",
        "mType": "LI",
        "stats": [
          "6",
          "4+",
          "-",
          "5+"
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
        "keywords": "Elf, Kindred",
        "mType": "W",
        "stats": [
          "6",
          "-",
          "4+",
          "4+"
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
          "The Shardblade [1] - Increase Melee to 2+"
        ],
        "ovals": [
          35,
          15
        ],
        "keywords": "Elf",
        "mType": "I",
        "stats": [
          "6",
          "3+",
          "-",
          "5+"
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
          "Mount on a Horse, increasing Speed to 9 and changing to Hero (Cav - Height: 3)"
        ],
        "ovals": [
          25
        ],
        "keywords": "Elf",
        "mType": "I",
        "stats": [
          "6",
          "3+",
          "-",
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
        "special": "Individual, Master of Magic: This unit can re-roll all to hit rolls of a natural, unmodifed 1 with Bane Chant, Heal, Hex, Lightning Bolt, Mind Fog and Wind Blast.. Spellcaster: 2",
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
        "keywords": "Elf",
        "mType": "I",
        "stats": [
          "6",
          "5+",
          "-",
          "4+"
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
        "keywords": "Elf",
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
        "special": "Crushing Strength (3), Elite (Melee), Fly, Inspiring, Nimble, Dragon’s Breath: 12”, Steady Aim",
        "options": [],
        "ovals": [],
        "keywords": "Draconic, Elf",
        "mType": "Ti",
        "stats": [
          "10",
          "3+",
          "4+",
          "5+"
        ]
      },
      {
        "name": "Boskwraiths",
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
          "20",
          "25"
        ],
        "nerve": [
          "10/12",
          "14/16"
        ],
        "values": [
          115,
          175
        ],
        "unlocks": [],
        "special": "Elite (Melee), Fury, Wild Charge (D3)",
        "options": [],
        "ovals": [],
        "keywords": "Boskwraith, Elf, Verdant",
        "mType": "I",
        "stats": [
          "6",
          "4+",
          "-",
          "3+"
        ]
      },
      {
        "name": "Forest Guard",
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
          165,
          270
        ],
        "unlocks": [],
        "special": "Elite (Melee), Pathfinder, Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "keywords": "Elf, Tracker",
        "mType": "I",
        "stats": [
          "6",
          "3+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Riverguard Treeleapers*",
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
          110,
          170
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Ensnare, Fly, Nimble, Pathfinder",
        "options": [],
        "ovals": [],
        "keywords": "Amphibian",
        "mType": "I",
        "stats": [
          "7",
          "4+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Hunters of the Wild",
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
        "keywords": "Verdant",
        "mType": "HI",
        "stats": [
          "5",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Wild Gur Panthers*",
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
        "keywords": "Beast",
        "mType": "C",
        "stats": [
          "10",
          "4+",
          "-",
          "3+"
        ]
      },
      {
        "name": "The Windborne [1]",
        "irregular": 0,
        "limit": 1,
        "unitType": [
          "T"
        ],
        "models": [
          "5"
        ],
        "unitStrength": [
          "1"
        ],
        "att": [
          "7"
        ],
        "nerve": [
          "11/13"
        ],
        "values": [
          165
        ],
        "unlocks": [],
        "special": "Elite, Nimble, Windborne Arrows: For each hit caused with this unit’s Wind Blast spell, in addition to moving the target, roll to damage as normal. Spells: Wind Blast (7). Spellcaster: 0",
        "options": [],
        "ovals": [],
        "keywords": "Elf",
        "mType": "C",
        "stats": [
          "10",
          "4+",
          "-",
          "4+"
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
        "special": "Nimble, Shortbows: 18”, Elite (Ranged), Steady Aim",
        "options": [
          "Deathroot Arrows"
        ],
        "ovals": [
          5
        ],
        "keywords": "Elf",
        "mType": "C",
        "stats": [
          "10",
          "4+",
          "4+",
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
        "special": "Elite, Pathfinder, Scout, Bows: 24”, Steady Aim Opions • Deathroot Arrows for +5 pts",
        "options": [],
        "ovals": [],
        "keywords": "Elf, Kindred, Tracker",
        "mType": "I",
        "stats": [
          "6",
          "4+",
          "4+",
          "3+"
        ]
      },
      {
        "name": "Archwraith",
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
          "-/13"
        ],
        "values": [
          80
        ],
        "unlocks": [],
        "special": "Elite (Melee), Individual, Inspiring (Boskwraith only), Wild Charge (D3)",
        "options": [],
        "ovals": [],
        "keywords": "Boskwraith, Elf, Verdant",
        "mType": "I",
        "stats": [
          "6",
          "3+",
          "-",
          "3+"
        ]
      },
      {
        "name": "Master Hunter",
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
          115
        ],
        "unlocks": [],
        "special": "Elite, Individual, Inspiring (Tracker only), Pathfinder, Scout, Stealthy, Bow: 24”, Piercing (1)",
        "options": [
          "Deathroot Arrows"
        ],
        "ovals": [
          5
        ],
        "keywords": "Elf, Tracker",
        "mType": "I",
        "stats": [
          "7",
          "3+",
          "3+",
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
        "special": "Crushing Strength (3), Inspiring, Pathfinder, Radiance of Life, Scout, Strider Spells: Surge (8). Spellcaster: 0",
        "options": [
          "Upgrade to The Wiltfather [1] - Losing Radiance of Life, increasing Attacks to 10 and Nerve to -/19 and gaining Aura (Elite - Verdant only) and Cloak of Death"
        ],
        "ovals": [
          40
        ],
        "keywords": "Verdant",
        "mType": "M",
        "stats": [
          "6",
          "3+",
          "-",
          "6+"
        ]
      },
      {
        "name": "Forest Warden",
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
          90
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Nimble, Pathfinder, Scout Spells: Surge (4). Spellcaster: 0",
        "options": [],
        "ovals": [],
        "keywords": "Verdant",
        "mType": "LI",
        "stats": [
          "6",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Avatar of the Green Lady [1]",
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
          "13/15"
        ],
        "values": [
          185
        ],
        "unlocks": [],
        "special": "Fly, Individual, Inspiring, Regeneration (5+), Balance: At the start of each of your Turns, you may choose for this unit to have either Cloak of Death or Radiance of Life. Spells: Heal (6). Spellcaster: 3",
        "options": [],
        "ovals": [],
        "keywords": "Phantasm, Verdant",
        "mType": "I",
        "stats": [
          "10",
          "5+",
          "-",
          "5+"
        ]
      },
      {
        "name": "El’Rik Nisleen [1]",
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
          "6"
        ],
        "nerve": [
          "-/14"
        ],
        "values": [
          160
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Elite (Melee), Individual, Inspiring, Mighty, Pathfinder, Wayfire: This unit’s Fireball spell has the Shattering special rule. Spells: Fireball (8). Spellcaster: 2",
        "options": [],
        "ovals": [],
        "keywords": "Elf",
        "mType": "I",
        "stats": [
          "7",
          "2+",
          "-",
          "5+"
        ]
      }
    ],
    "masterList": "Elves"
  },
  {
    "faction": "Trident Realm of Neritica",
    "alignment": 1,
    "units": [
      {
        "name": "Naiad Ensnarers",
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
          90,
          140,
          230
        ],
        "unlocks": [],
        "special": "Ensnare, Pathfinder, Regeneration (4+)",
        "options": [],
        "ovals": [],
        "keywords": "Naiad",
        "mType": "I",
        "stats": [
          "5",
          "4+",
          "-",
          "3+"
        ]
      },
      {
        "name": "Naiad Heartpiercers*",
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
          "9/11",
          "13/15"
        ],
        "values": [
          120,
          160
        ],
        "unlocks": [],
        "special": "Regeneration (4+), Harpoon-gun: 18”, Piercing (1), Steady Aim",
        "options": [],
        "ovals": [],
        "keywords": "Naiad",
        "mType": "I",
        "stats": [
          "5",
          "5+",
          "4+",
          "3+"
        ]
      },
      {
        "name": "Riverguard*",
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
          "10",
          "12"
        ],
        "nerve": [
          "9/11",
          "13/15"
        ],
        "values": [
          115,
          155
        ],
        "unlocks": [],
        "special": "Ensnare, Fly, Nimble, Pathfinder, Javelins: 12”, Steady Aim",
        "options": [
          "Poison Frog"
        ],
        "ovals": [
          5
        ],
        "keywords": "Amphibian, Tracker",
        "mType": "I",
        "stats": [
          "7",
          "5+",
          "5+",
          "4+"
        ]
      },
      {
        "name": "Thuul",
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
          "15",
          "20"
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
        "special": "Ensnare, Stealthy",
        "options": [],
        "ovals": [],
        "keywords": "Cephalopod",
        "mType": "I",
        "stats": [
          "6",
          "3+",
          "-",
          "3+"
        ]
      },
      {
        "name": "Riverguard Treeleapers",
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
          110,
          170
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Ensnare, Fly, Nimble, Pathfinder",
        "options": [
          "Poison Frog"
        ],
        "ovals": [
          5
        ],
        "keywords": "Amphibian",
        "mType": "I",
        "stats": [
          "7",
          "4+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Placoderms",
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
          "12",
          "15"
        ],
        "nerve": [
          "11/13",
          "14/16"
        ],
        "values": [
          105,
          165
        ],
        "unlocks": [],
        "special": "Phalanx",
        "options": [],
        "ovals": [],
        "keywords": "Placoderm",
        "mType": "HI",
        "stats": [
          "5",
          "4+",
          "-",
          "6+"
        ]
      },
      {
        "name": "Tidal Swarm*",
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
          "1",
          "1"
        ],
        "att": [
          "12",
          "24"
        ],
        "nerve": [
          "-/12",
          "-/15"
        ],
        "values": [
          70,
          120
        ],
        "unlocks": [],
        "special": "Ensnare, Nimble, Scout",
        "options": [],
        "ovals": [],
        "keywords": "Beast, Crustacean",
        "mType": "S",
        "stats": [
          "5",
          "5+",
          "-",
          "2+"
        ]
      },
      {
        "name": "Depth Horrors",
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
          110,
          185
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Ensnare",
        "options": [],
        "ovals": [],
        "keywords": "Deep One, Immortal",
        "mType": "LI",
        "stats": [
          "6",
          "3+",
          "-",
          "3+"
        ]
      },
      {
        "name": "Naiad Wyrmriders",
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
          130,
          220
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Pathfinder, Regeneration (4+)",
        "options": [],
        "ovals": [],
        "keywords": "Naga, Naiad",
        "mType": "LC",
        "stats": [
          "8",
          "3+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Riverguard Dambusters",
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
          155,
          260
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Fly, Nimble, Regeneration (6+), Strider, Thunderous Charge (2), Sticky Tongue: This unit’s Enthral spell only has a range of 12”. While casting Enthral, in addition to moving the target, roll to damage for each hit scored. Spells: Enthral [3/6]. Spellcaster: 0",
        "options": [
          "Poison Frog"
        ],
        "ovals": [
          5
        ],
        "keywords": "Amphibian",
        "mType": "LC",
        "stats": [
          "7",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Gigas",
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
          "6",
          "12"
        ],
        "nerve": [
          "12/14",
          "15/17"
        ],
        "values": [
          125,
          205
        ],
        "unlocks": [],
        "special": "Big Shield, Crushing Strength (2), Nimble, Vicious (Melee)",
        "options": [],
        "ovals": [],
        "keywords": "Crustacean",
        "mType": "MI",
        "stats": [
          "5",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Water Elementals",
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
          "-/14",
          "-/17"
        ],
        "values": [
          130,
          220
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Regeneration (5+), Shambling, Strider",
        "options": [],
        "ovals": [],
        "keywords": "Waterbound",
        "mType": "LI",
        "stats": [
          "7",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Nokken*",
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
          "1",
          "1"
        ],
        "att": [
          "7",
          "14"
        ],
        "nerve": [
          "-/11",
          "-/14"
        ],
        "values": [
          80,
          130
        ],
        "unlocks": [],
        "special": "Ensnare, Regeneration (5+), Shambling, Tidespray: 12”, Steady Aim",
        "options": [],
        "ovals": [],
        "keywords": "Waterbound",
        "mType": "S",
        "stats": [
          "6",
          "5+",
          "4+",
          "3+"
        ]
      },
      {
        "name": "Greater Water Elemental",
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
          "8"
        ],
        "nerve": [
          "-/18"
        ],
        "values": [
          180
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Regeneration (5+), Shambling, Strider",
        "options": [],
        "ovals": [],
        "keywords": "Waterbound",
        "mType": "M",
        "stats": [
          "7",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Coral Giant",
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
          "D6+6"
        ],
        "nerve": [
          "16/18"
        ],
        "values": [
          215
        ],
        "unlocks": [],
        "special": "Brutal, Crushing Strength (3), Ensnare, Iron Resolve, Strider",
        "options": [],
        "ovals": [],
        "keywords": "Giant, Waterbound",
        "mType": "Ti",
        "stats": [
          "7",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Kraken",
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
          "12"
        ],
        "nerve": [
          "17/19"
        ],
        "values": [
          240
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Ensnare, Regeneration (4+), Strider, Wild Charge (D3)",
        "options": [],
        "ovals": [],
        "keywords": "Beast, Cephalopod, Unleashed",
        "mType": "Ti",
        "stats": [
          "7",
          "4+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Knucker",
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
          "6"
        ],
        "nerve": [
          "13/15"
        ],
        "values": [
          150
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Ensnare, Nimble, Pathfinder, Stealthy, Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "keywords": "Naga",
        "mType": "M",
        "stats": [
          "9",
          "3+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Leviathan’s Bane",
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
          105
        ],
        "unlocks": [],
        "special": "Leviathan Bolts: 48”, Blast (D3), Piercing (3), Reload, Harpoon: After dealing damage with this unit’s Leviathan Bolts attack, you may choose to immediately cast Enthral (n) on the target unit, where (n) is the amount of damage inflicted with the Leviathan Bolts attack.. Spellcaster: 0",
        "options": [],
        "ovals": [],
        "keywords": "Naiad",
        "mType": "W",
        "stats": [
          "5",
          "-",
          "4+",
          "4+"
        ]
      },
      {
        "name": "Naiad Stalker",
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
        "special": "Crushing Strength (1), Ensnare, Individual, Inspiring (Self only), Pathfinder, Regeneration (4+), Stealthy, Harpoon Gun: 18”, Piercing (1)",
        "options": [],
        "ovals": [],
        "keywords": "Naiad, Tracker",
        "mType": "I",
        "stats": [
          "6",
          "3+",
          "4+",
          "4+"
        ]
      },
      {
        "name": "Naiad Wyrmrider Centurion",
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
          160
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Inspiring, Nimble, Pathfinder, Regeneration (4+), Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "keywords": "Naga, Naiad",
        "mType": "LC",
        "stats": [
          "8",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Thuul Aquamage",
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
          90
        ],
        "unlocks": [],
        "special": "Ensnare, Individual, Inspiring (Waterbound only), Stealthy Spells: Icy Breath (10). Spellcaster: 2",
        "options": [
          "Surge (8) (replaces Icy Breath)",
          "Surge (8)",
          "Weakness (2)",
          "Rising Tides [1] - Aura (Wild Charge (+1))"
        ],
        "ovals": [
          0,
          30,
          15,
          15
        ],
        "keywords": "Cephalopod",
        "mType": "I",
        "stats": [
          "6",
          "4+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Naiad Centurion",
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
          "12/14"
        ],
        "values": [
          115
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Individual, Inspiring, Mighty, Pathfinder, Regeneration (4+)",
        "options": [],
        "ovals": [],
        "keywords": "Naiad",
        "mType": "I",
        "stats": [
          "6",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Depth Horror Eternal",
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
          "-/16"
        ],
        "values": [
          115
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Ensnare, Inspiring (Deep One only), Nimble",
        "options": [],
        "ovals": [],
        "keywords": "Deep One, Immortal",
        "mType": "LI",
        "stats": [
          "6",
          "3+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Thuul Mythican",
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
          "11/13"
        ],
        "values": [
          80
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Ensnare, Individual, Inspiring (Cephalopod only), Stealthy. Spellcaster: 1",
        "options": [
          "Bane Chant (2)",
          "Lightning Bolt (3)",
          "Surge (6)",
          "Wind Blast (5)"
        ],
        "ovals": [
          20,
          20,
          20,
          20
        ],
        "keywords": "Cephalopod",
        "mType": "I",
        "stats": [
          "6",
          "3+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Naiad Envoy",
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
          "9/11"
        ],
        "values": [
          55
        ],
        "unlocks": [],
        "special": "Individual, Inspiring, Pathfinder, Regeneration (4+). Spellcaster: 0",
        "options": [
          "Horn of Ocean’s Fury [1] - Gain Aura (Fury - Infantry & Heavy Infantry only). This unique upgrade cannot be taken in conjunction with a magical artefact.",
          "Bastion (2) [1]"
        ],
        "ovals": [
          15,
          20
        ],
        "keywords": "Naiad",
        "mType": "I",
        "stats": [
          "5",
          "4+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Riverguard Sentinel",
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
          135
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Duelist, Ensnare, Fly, Individual, Inspiring, (Amphibian only), Pathfinder, Javelin: 12”",
        "options": [
          "Poison Frog"
        ],
        "ovals": [
          5
        ],
        "keywords": "Amphibian, Tracker",
        "mType": "I",
        "stats": [
          "7",
          "3+",
          "4+",
          "5+"
        ]
      },
      {
        "name": "Eckter [1]",
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
          "6"
        ],
        "nerve": [
          "12/14"
        ],
        "values": [
          165
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Ensnare, Individual, Inspiring, Mighty, Phalanx, Krakenmaw: While casting Wind Blast, in addition to moving the target, roll to damage for each hit scored. Spells: Wind Blast (8). Spellcaster: 0",
        "options": [],
        "ovals": [],
        "keywords": "Placoderm",
        "mType": "HI",
        "stats": [
          "5",
          "3+",
          "-",
          "6+"
        ]
      },
      {
        "name": "Trident King [1]",
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
          "12"
        ],
        "nerve": [
          "14/16"
        ],
        "values": [
          230
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Ensnare, Nimble, Regeneration (5+), Thunderous Charge (1), Very Inspiring, Tidespray: 12”, Piercing (1), Steady Aim",
        "options": [],
        "ovals": [],
        "keywords": "Masked, Naiad",
        "mType": "Ch",
        "stats": [
          "8",
          "4+",
          "4+",
          "5+"
        ]
      },
      {
        "name": "Riverguard Dambuster Sentinel",
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
          "12/14"
        ],
        "values": [
          150
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Fly, Inspiring (Amphibian only), Nimble, Regeneration (6+), Strider, Thunderous Charge (1), Sticky Tongue: This unit’s Enthral spell only has a range of 12”. While casting Enthral, in addition to moving the target, roll to damage for each hit scored. Spells: Enthral (4). Spellcaster: 0",
        "options": [
          "Poison Frog"
        ],
        "ovals": [
          5
        ],
        "keywords": "Amphibian",
        "mType": "M",
        "stats": [
          "7",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Siren",
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
          80
        ],
        "unlocks": [],
        "special": "Ensnare, Individual, Stealthy Spells: Enthral (5). Spellcaster: 1",
        "options": [
          "Drain Life (6)",
          "Hex (2)",
          "Heal (3)",
          "Mind Fog (1)",
          "Weakness (2)"
        ],
        "ovals": [
          30,
          10,
          20,
          10,
          15
        ],
        "keywords": "Naiad",
        "mType": "I",
        "stats": [
          "6",
          "4+",
          "-",
          "3+"
        ]
      }
    ]
  },
  {
    "faction": "Ogres",
    "alignment": 1,
    "units": [
      {
        "name": "Red Goblin Rabble*",
        "irregular": 1,
        "limit": 0,
        "unitType": [
          "R",
          "H",
          "L"
        ],
        "models": [
          "20",
          "40",
          "60"
        ],
        "unitStrength": [
          "2",
          "3",
          "4"
        ],
        "att": [
          "12",
          "25",
          "30"
        ],
        "nerve": [
          "12/14",
          "19/21",
          "25/27"
        ],
        "values": [
          75,
          125,
          180
        ],
        "unlocks": [],
        "special": "-",
        "options": [],
        "ovals": [],
        "keywords": "Goblin",
        "mType": "I",
        "stats": [
          "5",
          "5+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Red Goblin Spitters*",
        "irregular": 1,
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
          "2",
          "3"
        ],
        "att": [
          "10",
          "20"
        ],
        "nerve": [
          "12/14",
          "19/21"
        ],
        "values": [
          90,
          160
        ],
        "unlocks": [],
        "special": "Bows, 24”",
        "options": [],
        "ovals": [],
        "keywords": "Goblin",
        "mType": "I",
        "stats": [
          "5",
          "6+",
          "5+",
          "3+"
        ]
      },
      {
        "name": "Red Goblin Scouts*",
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
          "7",
          "14"
        ],
        "nerve": [
          "9/11",
          "12/14"
        ],
        "values": [
          100,
          155
        ],
        "unlocks": [],
        "special": "Nimble, Thunderous Charge (1), Vicious (Melee)",
        "options": [],
        "ovals": [],
        "keywords": "Beast, Goblin",
        "mType": "C",
        "stats": [
          "10",
          "4+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Red Goblin Scout Sniffs*",
        "irregular": 1,
        "limit": 0,
        "unitType": [
          "T"
        ],
        "models": [
          "5"
        ],
        "unitStrength": [
          "1"
        ],
        "att": [
          "7"
        ],
        "nerve": [
          "9/11"
        ],
        "values": [
          105
        ],
        "unlocks": [],
        "special": "Nimble, Vicious (Melee), Shortbows: 18”, Steady Aim",
        "options": [],
        "ovals": [],
        "keywords": "Beast, Goblin",
        "mType": "C",
        "stats": [
          "10",
          "4+",
          "5+",
          "3+"
        ]
      },
      {
        "name": "Red Goblin Sharpsticks*",
        "irregular": 1,
        "limit": 0,
        "unitType": [
          "R",
          "H",
          "L"
        ],
        "models": [
          "20",
          "40",
          "60"
        ],
        "unitStrength": [
          "2",
          "3",
          "4"
        ],
        "att": [
          "15",
          "30",
          "35"
        ],
        "nerve": [
          "12/14",
          "19/21",
          "25/27"
        ],
        "values": [
          95,
          155,
          230
        ],
        "unlocks": [],
        "special": "Phalanx",
        "options": [],
        "ovals": [],
        "keywords": "Goblin",
        "mType": "I",
        "stats": [
          "5",
          "5+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Warrior Chariots",
        "irregular": 0,
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
          "13/15",
          "15/17",
          "17/19",
          "20/22"
        ],
        "values": [
          170,
          215,
          270,
          310
        ],
        "unlocks": [],
        "special": "Brutal, Crushing Strength (1), Thunderous Charge (2)",
        "options": [],
        "ovals": [],
        "keywords": "Ogre",
        "mType": "Ch",
        "stats": [
          "8",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Boomer Chariots*",
        "irregular": 1,
        "limit": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          "2",
          "3"
        ],
        "unitStrength": [
          "1",
          "2"
        ],
        "att": [
          "8",
          "12"
        ],
        "nerve": [
          "11/13",
          "13/15"
        ],
        "values": [
          145,
          180
        ],
        "unlocks": [],
        "special": "Brutal, Crushing Strength (1), Boomsticks: 12”, Piercing (1), Steady Aim",
        "options": [],
        "ovals": [],
        "keywords": "Ogre",
        "mType": "Ch",
        "stats": [
          "8",
          "4+",
          "4+",
          "4+"
        ]
      },
      {
        "name": "Warriors",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "R",
          "H",
          "L"
        ],
        "models": [
          "3",
          "6",
          "12"
        ],
        "unitStrength": [
          "2",
          "3",
          "4"
        ],
        "att": [
          "9",
          "18",
          "36"
        ],
        "nerve": [
          "12/14",
          "15/17",
          "22/24"
        ],
        "values": [
          120,
          200,
          350
        ],
        "unlocks": [],
        "special": "Brutal, Crushing Strength (1)",
        "options": [
          "Exchange shields for two-handed weapons, lowering Defence to 4+ and increasing Crushing Strength to (2)",
          "Crocodog"
        ],
        "ovals": [
          0,
          5
        ],
        "keywords": "Ogre",
        "mType": "LI",
        "stats": [
          "6",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Boomers",
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
          230
        ],
        "unlocks": [],
        "special": "Brutal, Crushing Strength (1), Boomsticks: 12”, Piercing (1), Steady Aim",
        "options": [],
        "ovals": [],
        "keywords": "Ogre",
        "mType": "LI",
        "stats": [
          "6",
          "4+",
          "4+",
          "4+"
        ]
      },
      {
        "name": "Hunters",
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
          135,
          225
        ],
        "unlocks": [],
        "special": "Brutal, Crushing Strength (1), Ensnare, Pathfinder",
        "options": [
          "Crocodog"
        ],
        "ovals": [
          5
        ],
        "keywords": "Ogre, Tracker",
        "mType": "LI",
        "stats": [
          "7",
          "3+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Shooters*",
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
          "1",
          "2"
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
          230
        ],
        "unlocks": [],
        "special": "Brutal, Crushing Strength (1), Heavy Crossbows: 30”, Piercing (2), Pot Shot",
        "options": [],
        "ovals": [],
        "keywords": "Ogre",
        "mType": "LI",
        "stats": [
          "6",
          "4+",
          "5+",
          "4+"
        ]
      },
      {
        "name": "Berserker Braves",
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
          "15",
          "30"
        ],
        "nerve": [
          "-/15",
          "-/18"
        ],
        "values": [
          140,
          230
        ],
        "unlocks": [],
        "special": "Brutal, Crushing Strength (1), Wild Charge (D3)",
        "options": [],
        "ovals": [],
        "keywords": "Berserker, Ogre",
        "mType": "LI",
        "stats": [
          "6",
          "4+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Siege Breakers",
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
          145,
          240
        ],
        "unlocks": [],
        "special": "Big Shield, Brutal, Crushing Strength (2)",
        "options": [],
        "ovals": [],
        "keywords": "Ogre",
        "mType": "LI",
        "stats": [
          "6",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Red Goblin Blaster",
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
          "3"
        ],
        "nerve": [
          "-/10"
        ],
        "values": [
          65
        ],
        "unlocks": [],
        "special": "Blast (D6), Brutal, Crushing Strength (3), Makeshift Grenades: 12”, Blast (D3), Piercing (1) Boom! At the end of a Turn in which this unit scores a successful hit in melee, it is immediately Routed and removed from play.",
        "options": [],
        "ovals": [],
        "keywords": "Gizmo, Goblin",
        "mType": "M",
        "stats": [
          "5",
          "3+",
          "5+",
          "5+"
        ]
      },
      {
        "name": "Mammoth",
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
          "12"
        ],
        "nerve": [
          "-/18"
        ],
        "values": [
          220
        ],
        "unlocks": [],
        "special": "Brutal, Crushing Strength (2), Strider, Thunderous Charge (2)",
        "options": [],
        "ovals": [],
        "keywords": "Beast",
        "mType": "M",
        "stats": [
          "7",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Red Goblin Slasher",
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
          "8"
        ],
        "nerve": [
          "16/18"
        ],
        "values": [
          210
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Strider, Sharpstick Thrower: 36”, Att: 2, Blast (D3), Piercing (2), Steady Aim",
        "options": [],
        "ovals": [],
        "keywords": "Beast, Goblin",
        "mType": "Ti",
        "stats": [
          "7",
          "3+",
          "5+",
          "5+"
        ]
      },
      {
        "name": "Giant",
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
          "D6+8"
        ],
        "nerve": [
          "18/20"
        ],
        "values": [
          225
        ],
        "unlocks": [],
        "special": "Brutal, Crushing Strength (4), Fury, Strider",
        "options": [],
        "ovals": [],
        "keywords": "Giant",
        "mType": "Ti",
        "stats": [
          "7",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Army Standard",
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
          70
        ],
        "unlocks": [],
        "special": "Brutal, Crushing Strength (1), Inspiring, Nimble",
        "options": [
          "Mount on Chariot, increasing Speed to 8, gaining Thunderous Charge (1) and changing to Hero (Cht - Height: 4)"
        ],
        "ovals": [
          30
        ],
        "keywords": "Ogre",
        "mType": "LI",
        "stats": [
          "6",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Sergeant",
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
          110
        ],
        "unlocks": [],
        "special": "Brutal, Crushing Strength (2), Inspiring, Nimble",
        "options": [
          "Mount on Chariot, increasing Speed to 8, gaining Thunderous Charge (1) and changing to Hero (Cht - Height: 4)",
          "Crocodog",
          "Exchange shield for two-handed weapon, lowering Defence to 4+ and increasing Crushing Strength to (3) (Note: The two “Exchange shield” options cannot both be taken for the same unit)",
          "Exchange shield for Heavy Crossbow, lowering Defence to 4+ and gaining the ranged attack - Heavy Crossbow: 30”, Ra 5+, Piercing (2) (Note: The two “Exchange shield” options cannot both be taken for the same unit)"
        ],
        "ovals": [
          30,
          5,
          0,
          10
        ],
        "keywords": "Ogre",
        "mType": "LI",
        "stats": [
          "6",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Ogre Warlock",
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
          "2"
        ],
        "nerve": [
          "12/14"
        ],
        "values": [
          95
        ],
        "unlocks": [],
        "special": "Brutal, Crushing Strength (1), Inspiring (Berserker only), Nimble, Ogre Warlock: For each Friendly Core Large Infantry Regiment, Large Infantry Horde or Large Infantry Legion within 6”, increase the amount of dice rolled with Drain Life, Fireball, Lightning Bolt and Mind Fog by 1 to a maximum bonus of +3. Spells: Lightning Bolt (3). Spellcaster: 1",
        "options": [
          "Drain Life (5)",
          "Fireball (8)",
          "Mind Fog (1)",
          "Bloodboil [1]"
        ],
        "ovals": [
          20,
          25,
          10,
          30
        ],
        "keywords": "Berserker, Ogre",
        "mType": "LI",
        "stats": [
          "6",
          "4+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Boomer Sergeant",
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
          "4"
        ],
        "nerve": [
          "11/13"
        ],
        "values": [
          90
        ],
        "unlocks": [],
        "special": "Brutal, Crushing Strength (1), Nimble, Boomstick: 12”, Att: 8, Piercing (1), Steady Aim",
        "options": [],
        "ovals": [],
        "keywords": "Ogre",
        "mType": "LI",
        "stats": [
          "6",
          "4+",
          "4+",
          "4+"
        ]
      },
      {
        "name": "Berserker Bully",
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
          "8"
        ],
        "nerve": [
          "-/14"
        ],
        "values": [
          130
        ],
        "unlocks": [],
        "special": "Brutal, Crushing Strength (2), Inspiring (Berserker only), Nimble, Wild Charge (D3)",
        "options": [],
        "ovals": [],
        "keywords": "Berserker, Ogre",
        "mType": "LI",
        "stats": [
          "6",
          "3+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Red Goblin Biggit",
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
          "9/11"
        ],
        "values": [
          55
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Individual, Inspiring (Goblin only)",
        "options": [
          "Mount on a Fleabag, increasing Speed to 10 and changing to Hero (Cav - Height: 3)",
          "Exchange two-handed weapon for Shortbow, losing Crushing Strength but gaining the ranged attack - Shortbow: 18”, Ra: 4+"
        ],
        "ovals": [
          25,
          0
        ],
        "keywords": "Goblin",
        "mType": "I",
        "stats": [
          "5",
          "4+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Ogre Warlord",
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
          155
        ],
        "unlocks": [],
        "special": "Brutal, Crushing Strength (2), Inspiring, Nimble",
        "options": [
          "Mount on Chariot, increasing Speed to 8, gaining Thunderous Charge (1) and changing to Hero (Cht - Height: 4)",
          "Crocodog",
          "Exchange shield for two-handed weapon, lowering Defence to 4+ and increasing Crushing Strength to (3)"
        ],
        "ovals": [
          30,
          5,
          0
        ],
        "keywords": "Ogre",
        "mType": "LI",
        "stats": [
          "6",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Kuzlo & Madfall [1]",
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
          "5"
        ],
        "nerve": [
          "13/15"
        ],
        "values": [
          145
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Inspiring (Self only), Nimble, Pathfinder, Regeneration (4+), Vicious (Melee), Ravenous Lizard: While within 6” of this unit, all units, both, Friendly and Enemy. have -1 to their Waver and Rout Nerve values. Sticky Tongue: This unit’s Enthral spell only has a range of 12”. While casting Enthral, in addition to moving the target, roll to damage for each hit scored. Spells: Enthral (5), Hex (3). Spellcaster: 1",
        "options": [],
        "ovals": [],
        "keywords": "Goblin",
        "mType": "LC",
        "stats": [
          "8",
          "3+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Grokagamok [1]",
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
          250
        ],
        "unlocks": [],
        "special": "Blast (D3), Brutal, Crushing Strength (3), Nimble, Very Inspiring",
        "options": [],
        "ovals": [],
        "keywords": "Ogre",
        "mType": "LI",
        "stats": [
          "6",
          "3+",
          "-",
          "5+"
        ]
      }
    ]
  },
  {
    "faction": "Kingdoms of Men",
    "alignment": 1,
    "units": [
      {
        "name": "Shield Wall",
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
          65,
          100,
          165
        ],
        "unlocks": [],
        "special": "-",
        "options": [
          "Indomitable Will"
        ],
        "ovals": [
          10
        ],
        "keywords": "Human",
        "mType": "I",
        "stats": [
          "5",
          "4+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Spear Phalanx",
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
          "15",
          "30"
        ],
        "nerve": [
          "13/15",
          "20/22"
        ],
        "values": [
          120,
          200
        ],
        "unlocks": [],
        "special": "Phalanx",
        "options": [
          "Indomitable Will",
          "Exchange Spears for Pikes, gaining Ensnare"
        ],
        "ovals": [
          10,
          {
            "R": 20,
            "H": 30
          }
        ],
        "keywords": "Human",
        "mType": "I",
        "stats": [
          "5",
          "4+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Foot Guard",
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
          90,
          135,
          225
        ],
        "unlocks": [],
        "special": "-",
        "options": [
          "Indomitable Will",
          "Exchange shields for two-handed weapons, lowering Defence to 4+ and gaining Crushing Strength (1)"
        ],
        "ovals": [
          10,
          0
        ],
        "keywords": "Human, Knight",
        "mType": "I",
        "stats": [
          "5",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Fanatics",
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
          "-/11",
          "-/15",
          "-/22"
        ],
        "values": [
          95,
          145,
          240
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Wild Charge (D3)",
        "options": [],
        "ovals": [],
        "keywords": "Berserker, Human",
        "mType": "I",
        "stats": [
          "5",
          "3+",
          "-",
          "3+"
        ]
      },
      {
        "name": "Militia Mob*",
        "irregular": 1,
        "limit": 0,
        "unitType": [
          "R",
          "H",
          "L"
        ],
        "models": [
          "20",
          "40",
          "60"
        ],
        "unitStrength": [
          "2",
          "3",
          "4"
        ],
        "att": [
          "12",
          "25",
          "30"
        ],
        "nerve": [
          "11/14",
          "18/21",
          "24/27"
        ],
        "values": [
          70,
          115,
          170
        ],
        "unlocks": [],
        "special": "-",
        "options": [],
        "ovals": [],
        "keywords": "Expendable, Human",
        "mType": "I",
        "stats": [
          "5",
          "5+",
          "-",
          "3+"
        ]
      },
      {
        "name": "Pole-Arms Block",
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
          "13/15",
          "20/22"
        ],
        "values": [
          105,
          175
        ],
        "unlocks": [],
        "special": "Crushing Strength (1)",
        "options": [
          "Indomitable Will"
        ],
        "ovals": [
          10
        ],
        "keywords": "Human",
        "mType": "I",
        "stats": [
          "5",
          "4+",
          "-",
          "3+"
        ]
      },
      {
        "name": "Bowmen",
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
          75,
          100,
          175
        ],
        "unlocks": [],
        "special": "Bows: 24”",
        "options": [],
        "ovals": [],
        "keywords": "Human",
        "mType": "I",
        "stats": [
          "5",
          "5+",
          "5+",
          "3+"
        ]
      },
      {
        "name": "Knights",
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
          "11/13",
          "14/16",
          "21/23"
        ],
        "values": [
          125,
          195,
          330
        ],
        "unlocks": [],
        "special": "Headstrong, Thunderous Charge (2)",
        "options": [
          "Indomitable Will"
        ],
        "ovals": [
          10
        ],
        "keywords": "Human, Knight",
        "mType": "C",
        "stats": [
          "8",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Mounted Sergeants",
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
          "7",
          "14"
        ],
        "nerve": [
          "10/12",
          "13/15"
        ],
        "values": [
          100,
          150
        ],
        "unlocks": [],
        "special": "Nimble, Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "keywords": "Human",
        "mType": "C",
        "stats": [
          "9",
          "4+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Mounted Scouts*",
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
          "10/12",
          "13/15"
        ],
        "values": [
          100,
          155
        ],
        "unlocks": [],
        "special": "Nimble, Shortbows: 18”, Steady Aim",
        "options": [
          "Exchange Shortbows for Blackpowder Weapons: 18”, Piercing (1), Steady Aim"
        ],
        "ovals": [
          {
            "T": 15,
            "R": 25
          }
        ],
        "keywords": "Human",
        "mType": "C",
        "stats": [
          "9",
          "4+",
          "5+",
          "3+"
        ]
      },
      {
        "name": "Crossbow Block",
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
          85,
          115,
          200
        ],
        "unlocks": [],
        "special": "Crossbows: 24”, Piercing (1), Pot Shot",
        "options": [
          "Exchange Crossbows for Rifles: 24”, Piercing (2), Pot Shot"
        ],
        "ovals": [
          {
            "T": 10,
            "R": 15,
            "H": 25
          }
        ],
        "keywords": "Human",
        "mType": "I",
        "stats": [
          "5",
          "5+",
          "5+",
          "3+"
        ]
      },
      {
        "name": "Charioteers*",
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
          "11/13",
          "13/15",
          "15/17",
          "19/21"
        ],
        "values": [
          125,
          155,
          195,
          225
        ],
        "unlocks": [],
        "special": "Thunderous Charge (2), Shortbows: 18”, Att: [4/6/8/10], Steady Aim",
        "options": [],
        "ovals": [],
        "keywords": "Human",
        "mType": "Ch",
        "stats": [
          "9",
          "4+",
          "5+",
          "4+"
        ]
      },
      {
        "name": "Siege Artillery",
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
          "9/11"
        ],
        "values": [
          90
        ],
        "unlocks": [],
        "special": "Artillery Strike: 48”, Blast (D3+1), Ignores Cover, Indirect, Piercing (3), Reload",
        "options": [],
        "ovals": [],
        "keywords": "Artillery, Human",
        "mType": "W",
        "stats": [
          "5",
          "-",
          "5+",
          "4+"
        ]
      },
      {
        "name": "Ballista",
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
          "9/11"
        ],
        "values": [
          75
        ],
        "unlocks": [],
        "special": "Ballista: 48”, Blast (D3), Piercing (2), Reload",
        "options": [],
        "ovals": [],
        "keywords": "Artillery, Human",
        "mType": "W",
        "stats": [
          "5",
          "-",
          "4+",
          "4+"
        ]
      },
      {
        "name": "Cannon",
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
          "9/11"
        ],
        "values": [
          100
        ],
        "unlocks": [],
        "special": "Cannon: 48”, Blast (D3+1), Ignores Cover, Piercing (3), Reload, Shattering, Grapeshot: 12”, Att: 10, Piercing (1) - This attack always hits on a 6+.",
        "options": [],
        "ovals": [],
        "keywords": "Artillery, Human",
        "mType": "W",
        "stats": [
          "5",
          "-",
          "5+",
          "4+"
        ]
      },
      {
        "name": "Mammoth",
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
          "12"
        ],
        "nerve": [
          "-/18"
        ],
        "values": [
          220
        ],
        "unlocks": [],
        "special": "Brutal, Crushing Strength (2), Strider, Thunderous Charge (2)",
        "options": [],
        "ovals": [],
        "keywords": "Beast",
        "mType": "M",
        "stats": [
          "7",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Giant",
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
          "D6+8"
        ],
        "nerve": [
          "18/20"
        ],
        "values": [
          225
        ],
        "unlocks": [],
        "special": "Brutal, Crushing Strength (4), Fury, Strider",
        "options": [],
        "ovals": [],
        "keywords": "Giant",
        "mType": "Ti",
        "stats": [
          "7",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "General",
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
          "12/14"
        ],
        "values": [
          85
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Individual, Mighty, Very Inspiring",
        "options": [
          "Mount on a Horse, increasing Speed to 8 and changing to Hero (Cav – Height: 3)"
        ],
        "ovals": [
          35
        ],
        "keywords": "Human",
        "mType": "I",
        "stats": [
          "5",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "General on Pegasus",
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
          "4"
        ],
        "nerve": [
          "12/14"
        ],
        "values": [
          135
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Fly, Nimble, Very Inspiring",
        "options": [],
        "ovals": [],
        "keywords": "Beast, Human",
        "mType": "LC",
        "stats": [
          "10",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Hero on Pegasus",
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
          "10/12"
        ],
        "values": [
          90
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Fly, Nimble",
        "options": [
          "Indomitable Will"
        ],
        "ovals": [
          5
        ],
        "keywords": "Beast, Human",
        "mType": "LC",
        "stats": [
          "10",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "General on Winged Beast",
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
          "14/16"
        ],
        "values": [
          190
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Fly, Nimble, Thunderous Charge (1), Very Inspiring",
        "options": [],
        "ovals": [],
        "keywords": "Beast, Human",
        "mType": "M",
        "stats": [
          "10",
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
          "9/11"
        ],
        "values": [
          50
        ],
        "unlocks": [],
        "special": "Individual, Very Inspiring",
        "options": [
          "Mount on a Horse, increasing Speed to 8 and changing to Hero (Cav – Height: 3)"
        ],
        "ovals": [
          25
        ],
        "keywords": "Human",
        "mType": "I",
        "stats": [
          "5",
          "5+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Hero",
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
          "10/12"
        ],
        "values": [
          40
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Individual",
        "options": [
          "Indomitable Will",
          "Mount on a Horse, increasing Speed to 8 and changing to Hero (Cav – Height: 3)"
        ],
        "ovals": [
          5,
          25
        ],
        "keywords": "Human",
        "mType": "I",
        "stats": [
          "5",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Fanatic Instigator",
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
          "-/14"
        ],
        "values": [
          85
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Mighty, Wild Charge (D3)",
        "options": [],
        "ovals": [],
        "keywords": "Berserker, Human",
        "mType": "I",
        "stats": [
          "5",
          "3+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Assassin",
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
          "10/12"
        ],
        "values": [
          80
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Duelist, Individual, Stealthy, Vicious, Throwing Dagger: 12”, Piercing (1)",
        "options": [
          "Indomitable Will"
        ],
        "ovals": [
          5
        ],
        "keywords": "Human",
        "mType": "I",
        "stats": [
          "6",
          "3+",
          "4+",
          "4+"
        ]
      },
      {
        "name": "The Captain [1]",
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
          120
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Individual, Mighty, Rallying (1), Very, Inspiring, Master Tactician: You can redeploy D3 of your own units after deployment is finished, but before Scout moves are made.",
        "options": [
          "Mount on a Horse, increasing Speed to 8 and changing to Hero (Cav – Height: 3)"
        ],
        "ovals": [
          35
        ],
        "keywords": "Human",
        "mType": "I",
        "stats": [
          "5",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Wizard",
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
        "special": "Individual Spells: Fireball (6). Spellcaster: 1",
        "options": [
          "Mount on a Horse, increasing Speed to 8 and changing to Hero (Cav – Height: 3)",
          "Mount on a Pegasus, losing Individual, gaining Fly and Nimble as well as increasing Speed to 10 and changing to Hero (Lrg Cav – Height: 4, Unit Strength: 1)",
          "Bane Chant (2)",
          "Heal (3)",
          "Lightning Bolt (3)",
          "Lightning Bolt (3) (replaces Fireball)",
          "Wind Blast (5)"
        ],
        "ovals": [
          25,
          35,
          20,
          20,
          20,
          0,
          20
        ],
        "keywords": "Human",
        "mType": "I",
        "stats": [
          "5",
          "5+",
          "-",
          "4+"
        ]
      }
    ],
    "themes": [
      "League of Rhordia"
    ]
  },
  {
    "faction": "Forces of Nature",
    "alignment": 1,
    "units": [
      {
        "name": "Naiad Ensnarers",
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
          90,
          140,
          230
        ],
        "unlocks": [],
        "special": "Ensnare, Pathfinder, Regeneration (4+)",
        "options": [
          "Frenzied Otter"
        ],
        "ovals": [
          5
        ],
        "keywords": "Naiad",
        "mType": "I",
        "stats": [
          "5",
          "4+",
          "-",
          "3+"
        ]
      },
      {
        "name": "Hunters of the Wild",
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
        "keywords": "Verdant",
        "mType": "HI",
        "stats": [
          "5",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Naiad Heartpiercers*",
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
          "9/11",
          "13/15"
        ],
        "values": [
          120,
          160
        ],
        "unlocks": [],
        "special": "Regeneration (4+), Harpoon-gun: 18”, Piercing (1), Steady Aim",
        "options": [
          "Frenzied Otter"
        ],
        "ovals": [
          5
        ],
        "keywords": "Naiad",
        "mType": "I",
        "stats": [
          "5",
          "5+",
          "4+",
          "3+"
        ]
      },
      {
        "name": "Salamander Primes",
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
          90,
          135,
          225
        ],
        "unlocks": [],
        "special": "Crushing Strength (1)",
        "options": [
          "Exchange shields for two-handed weapons, lowering Defence to 4+ and increasing Crushing Strength to (2)"
        ],
        "ovals": [
          0
        ],
        "keywords": "Salamander",
        "mType": "HI",
        "stats": [
          "5",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Centaur Bray Striders",
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
          "6",
          "12"
        ],
        "nerve": [
          "11/13",
          "14/16"
        ],
        "values": [
          105,
          160
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Pathfinder, Thunderous Charge (1)",
        "options": [
          "Frenzied Otter"
        ],
        "ovals": [
          5
        ],
        "keywords": "Centaur",
        "mType": "C",
        "stats": [
          "8",
          "3+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Centaur Bray Hunters",
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
          "2"
        ],
        "att": [
          "6",
          "12"
        ],
        "nerve": [
          "11/13",
          "14/16"
        ],
        "values": [
          105,
          165
        ],
        "unlocks": [],
        "special": "Nimble, Pathfinder, Thunderous Charge (1), Shortbows: 18”, Steady Aim",
        "options": [
          "Frenzied Otter"
        ],
        "ovals": [
          5
        ],
        "keywords": "Centaur, Tracker",
        "mType": "C",
        "stats": [
          "8",
          "4+",
          "5+",
          "3+"
        ]
      },
      {
        "name": "Woodland Critters*",
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
          "1",
          "1"
        ],
        "att": [
          "12",
          "24"
        ],
        "nerve": [
          "9/11",
          "12/14"
        ],
        "values": [
          80,
          130
        ],
        "unlocks": [],
        "special": "Fly, Nimble, Pathfinder, Vicious (Melee)",
        "options": [],
        "ovals": [],
        "keywords": "Beast",
        "mType": "S",
        "stats": [
          "6",
          "5+",
          "-",
          "2+"
        ]
      },
      {
        "name": "Scorchwings*",
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
          "6",
          "12"
        ],
        "nerve": [
          "11/13",
          "14/16"
        ],
        "values": [
          120,
          200
        ],
        "unlocks": [],
        "special": "Fly, Nimble, Pathfinder, Thunderous Charge (1), Firesparks: 18”, Steady Aim",
        "options": [],
        "ovals": [],
        "keywords": "Flamebound",
        "mType": "LC",
        "stats": [
          "10",
          "3+",
          "4+",
          "3+"
        ]
      },
      {
        "name": "Naiad Wyrmriders",
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
          130,
          220
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Pathfinder, Regeneration (4+)",
        "options": [],
        "ovals": [],
        "keywords": "Naga, Naiad",
        "mType": "LC",
        "stats": [
          "8",
          "3+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Forest Shamblers",
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
        "keywords": "Verdant",
        "mType": "LI",
        "stats": [
          "6",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Air Elementals",
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
          "-/14",
          "-/17"
        ],
        "values": [
          130,
          220
        ],
        "unlocks": [],
        "special": "Fly, Nimble, Pathfinder, Shambling",
        "options": [],
        "ovals": [],
        "keywords": "Airbound",
        "mType": "LI",
        "stats": [
          "10",
          "3+",
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
        "keywords": "Earthbound",
        "mType": "LI",
        "stats": [
          "5",
          "4+",
          "-",
          "6+"
        ]
      },
      {
        "name": "Fire Elementals",
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
          "-/14",
          "-/17"
        ],
        "values": [
          130,
          220
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Pathfinder, Shambling, Vicious (Melee)",
        "options": [],
        "ovals": [],
        "keywords": "Flamebound",
        "mType": "LI",
        "stats": [
          "6",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Water Elementals",
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
          "-/14",
          "-/17"
        ],
        "values": [
          130,
          220
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Regeneration (5+), Shambling, Strider",
        "options": [],
        "ovals": [],
        "keywords": "Waterbound",
        "mType": "LI",
        "stats": [
          "7",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Beast of Nature",
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
          "5"
        ],
        "nerve": [
          "15/17"
        ],
        "values": [
          150
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Pathfinder, Vicious",
        "options": [
          "Gain the ranged attack - Noxious Mist: 12”, Att: 10, Ra: 4+, Steady Aim",
          "Upgrade with Wings, increasing Speed to 10 and gaining Fly and Nimble",
          "Increase Attacks to 7"
        ],
        "ovals": [
          15,
          40,
          15
        ],
        "keywords": "Beast, Verdant",
        "mType": "M",
        "stats": [
          "7",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Greater Air Elemental",
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
          "10"
        ],
        "nerve": [
          "-/18"
        ],
        "values": [
          180
        ],
        "unlocks": [],
        "special": "Fly, Nimble, Pathfinder, Shambling, Thunderous Charge (1). Spellcaster: 0",
        "options": [
          "Wind Blast (6)",
          "Lightning Bolt (3)"
        ],
        "ovals": [
          25,
          20
        ],
        "keywords": "Airbound",
        "mType": "M",
        "stats": [
          "10",
          "3+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Greater Fire Elemental",
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
          "8"
        ],
        "nerve": [
          "-/18"
        ],
        "values": [
          175
        ],
        "unlocks": [],
        "special": "Crushing Strength (3), Pathfinder, Shambling, Vicious (Melee) Spells: Fireball (8). Spellcaster: 0",
        "options": [],
        "ovals": [],
        "keywords": "Flamebound",
        "mType": "M",
        "stats": [
          "6",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Greater Water Elemental",
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
          "8"
        ],
        "nerve": [
          "-/18"
        ],
        "values": [
          180
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Regeneration (5+), Shambling, Strider",
        "options": [],
        "ovals": [],
        "keywords": "Waterbound",
        "mType": "M",
        "stats": [
          "7",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Pegasus",
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
          "3"
        ],
        "nerve": [
          "10/12"
        ],
        "values": [
          80
        ],
        "unlocks": [],
        "special": "Fly, Nimble, Pathfinder, Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "keywords": "Beast",
        "mType": "M",
        "stats": [
          "10",
          "3+",
          "-",
          "4+"
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
          "12"
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
        "keywords": "Earthbound",
        "mType": "Ti",
        "stats": [
          "6",
          "4+",
          "-",
          "6+"
        ]
      },
      {
        "name": "Hydra",
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
          "5*"
        ],
        "nerve": [
          "16/18"
        ],
        "values": [
          150
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Pathfinder, Regeneration (5+), Multiple Heads: In addition to the basic 5, the Hydra has a number of additional attacks equal to its current points of Damage.",
        "options": [],
        "ovals": [],
        "keywords": "Beast",
        "mType": "Ti",
        "stats": [
          "6",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Druid",
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
          65
        ],
        "unlocks": [],
        "special": "Individual, Inspiring, Pathfinder Spells: Heal (2). Spellcaster: 1",
        "options": [
          "Mount on Forest Steed, increasing Speed to 9 and changing to Hero (Cav - Height: 3)",
          "Bane Chant (2)",
          "Lightning Bolt (2)",
          "Surge (4)",
          "Wind Blast (4)"
        ],
        "ovals": [
          25,
          20,
          10,
          10,
          15
        ],
        "keywords": "Verdant",
        "mType": "I",
        "stats": [
          "5",
          "5+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Gladewalker Druid",
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
          "12/14"
        ],
        "values": [
          90
        ],
        "unlocks": [],
        "special": "Individual, Inspiring, Pathfinder Spells: Heal (4). Spellcaster: 2",
        "options": [
          "Mount on Forest Steed, increasing Speed to 9 and changing to Hero (Cav - Height: 3)",
          "Fireball (8)",
          "Hex (3)",
          "Surge (8) (replaces Heal)",
          "Surge (8)",
          "Blizzard (2) [1]"
        ],
        "ovals": [
          25,
          25,
          15,
          0,
          30,
          20
        ],
        "keywords": "Verdant",
        "mType": "HI",
        "stats": [
          "5",
          "5+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Centaur Chief",
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
          110
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Individual, Inspiring (Centaur only), Mighty, Pathfinder",
        "options": [
          "Frenzied Otter",
          "Gain the ranged attack - Shortbow: 18”, Ra: 4+"
        ],
        "ovals": [
          5,
          10
        ],
        "keywords": "Centaur",
        "mType": "C",
        "stats": [
          "8",
          "3+",
          "4+",
          "4+"
        ]
      },
      {
        "name": "Forest Warden",
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
          90
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Nimble, Pathfinder, Scout Spells: Surge (4). Spellcaster: 0",
        "options": [],
        "ovals": [],
        "keywords": "Verdant",
        "mType": "LI",
        "stats": [
          "6",
          "3+",
          "-",
          "5+"
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
        "special": "Crushing Strength (3), Inspiring, Pathfinder, Radiance of Life, Scout, Strider Spells: Surge (8). Spellcaster: 0",
        "options": [],
        "ovals": [],
        "keywords": "Verdant",
        "mType": "M",
        "stats": [
          "6",
          "3+",
          "-",
          "6+"
        ]
      },
      {
        "name": "Salamander Veteran",
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
          65
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Individual, Inspiring (Salamander only)",
        "options": [
          "Guiding Flame [1] - Gain Aura (Elite (Melee) - Salamander only). This unique upgrade cannot be taken in conjunction with a magical artefact."
        ],
        "ovals": [
          20
        ],
        "keywords": "Salamander",
        "mType": "HI",
        "stats": [
          "5",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Unicorn",
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
          "12/14"
        ],
        "values": [
          120
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Individual, Inspiring, Pathfinder, Thunderous Charge (1) Spells: Heal (5). Spellcaster: 2",
        "options": [
          "Upgrade with Wings, losing Individual, gaining Fly and Nimble and changing to Hero (Lrg Cav - Height: 4, Unit Strength: 1)",
          "Lightning Bolt (5) (replaces Heal)",
          "Lightning Bolt (5)",
          "Wind Blast (5)",
          "Bastion (2) [1]"
        ],
        "ovals": [
          25,
          0,
          20,
          20,
          20
        ],
        "keywords": "Beast, Majestic",
        "mType": "C",
        "stats": [
          "10",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Naiad Stalker",
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
        "special": "Crushing Strength (1), Ensnare, Individual, Inspiring (Self only), Pathfinder, Regeneration (4+), Stealthy, Harpoon Gun: 18”, Piercing (1)",
        "options": [
          "Frenzied Otter"
        ],
        "ovals": [
          5
        ],
        "keywords": "Naiad, Tracker",
        "mType": "I",
        "stats": [
          "6",
          "3+",
          "4+",
          "4+"
        ]
      },
      {
        "name": "Avatar of the Green Lady [1]",
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
          "13/15"
        ],
        "values": [
          185
        ],
        "unlocks": [],
        "special": "Fly, Individual, Inspiring, Regeneration (5+), Balance: At the start of each of your Turns, you may choose for this unit to have either Cloak of Death or Radiance of Life. Spells: Heal (6). Spellcaster: 3",
        "options": [],
        "ovals": [],
        "keywords": "Phantasm, Verdant",
        "mType": "I",
        "stats": [
          "10",
          "5+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Shaarlyot [1]",
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
          "12/14"
        ],
        "values": [
          135
        ],
        "unlocks": [],
        "special": "Fly, Individual, Inspiring, Pathfinder, Static Shock: After dealing damage with this unit’s Lightning Bolt spell, you may choose to immediately cast Wind Blast (n) on the target unit, where (n) is the amount of damage inflicted with the Lightning Bolt spell. Spells: Lightning Bolt (4), Wind Blast (6). Spellcaster: 0",
        "options": [],
        "ovals": [],
        "keywords": "Airbound",
        "mType": "I",
        "stats": [
          "10",
          "5+",
          "-",
          "3+"
        ]
      },
      {
        "name": "Keris [1]",
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
          "12/14"
        ],
        "values": [
          80
        ],
        "unlocks": [],
        "special": "Individual, Inspiring, Pathfinder, Solar Staff: 24”, Att: 8; This attack always hits on 4+ regardless of modifiers. For each hit roll to damage as normal. If one or more hits are scored, the target unit is Disordered until the end of its next Turn. The Solar Staff is then destroyed and cannot be used again for the remainder of the game.. Spellcaster: 2",
        "options": [
          "Fireball (6)",
          "Heal (4)",
          "Lightning Bolt (2)",
          "Surge (8)"
        ],
        "ovals": [
          20,
          30,
          10,
          30
        ],
        "keywords": "Human, Verdant",
        "mType": "I",
        "stats": [
          "5",
          "5+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Naiad Wyrmrider Centurion",
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
          160
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Inspiring, Nimble, Pathfinder, Regeneration (4+), Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "keywords": "Naga, Naiad",
        "mType": "LC",
        "stats": [
          "8",
          "3+",
          "-",
          "5+"
        ]
      }
    ],
    "themes": [
      "The Herd",
      "Order of the Green Lady"
    ]
  },
  {
    "faction": "Nightstalkers",
    "alignment": 2,
    "units": [
      {
        "name": "Scarecrows",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "R",
          "H",
          "L"
        ],
        "models": [
          "20",
          "40",
          "60"
        ],
        "unitStrength": [
          "2",
          "3",
          "4"
        ],
        "att": [
          "15",
          "30",
          "35"
        ],
        "nerve": [
          "-/14",
          "-/21",
          "-/27"
        ],
        "values": [
          80,
          130,
          190
        ],
        "unlocks": [],
        "special": "Mindthirst, Stealthy, Wild Charge (D3)",
        "options": [
          "Screamshard"
        ],
        "ovals": [
          5
        ],
        "keywords": "Expendable, Nightmare, Zombie",
        "mType": "I",
        "stats": [
          "4",
          "5+",
          "-",
          "3+"
        ]
      },
      {
        "name": "Blood Worms",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "R",
          "H",
          "L"
        ],
        "models": [
          "20",
          "40",
          "60"
        ],
        "unitStrength": [
          "3",
          "4",
          "5"
        ],
        "att": [
          "15",
          "30",
          "40"
        ],
        "nerve": [
          "11/14",
          "18/21",
          "24/27"
        ],
        "values": [
          120,
          200,
          290
        ],
        "unlocks": [],
        "special": "Lifeleech (2), Mindthirst, Stealthy",
        "options": [],
        "ovals": [],
        "keywords": "Beast, Nightmare",
        "mType": "I",
        "stats": [
          "5",
          "4+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Reapers",
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
          "20",
          "25"
        ],
        "nerve": [
          "10/12",
          "14/16"
        ],
        "values": [
          135,
          210
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Mindthirst, Stealthy",
        "options": [
          "Screamshard"
        ],
        "ovals": [
          5
        ],
        "keywords": "Nightmare, Reaper",
        "mType": "I",
        "stats": [
          "6",
          "3+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Phantoms*",
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
          "-/12",
          "-/16"
        ],
        "values": [
          105,
          160
        ],
        "unlocks": [],
        "special": "Fly, Mindthirst, Nimble, Stealthy",
        "options": [
          "Screamshard"
        ],
        "ovals": [
          5
        ],
        "keywords": "Phantasm",
        "mType": "HI",
        "stats": [
          "10",
          "4+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Doppelgangers",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "R"
        ],
        "models": [
          "20"
        ],
        "unitStrength": [
          "3"
        ],
        "att": [
          "10"
        ],
        "nerve": [
          "15/17"
        ],
        "values": [
          145
        ],
        "unlocks": [],
        "special": "Mindthirst, Stealthy, Doppleganger: When this unit attacks an Enemy unit in melee, it may opt to use the Enemy’s profile for its melee attacks instead of its own. If it does so then it uses the Enemy unit’s Melee stat, Attacks stat and Crushing Strength value for that turn instead of its own. Any magical artefacts the Enemy unit has are ignored. The Dopplegangers themselves may still use a magic artefact as normal if they have one (apply any bonuses granted after the decision on which stats to use).",
        "options": [],
        "ovals": [],
        "keywords": "Nightmare",
        "mType": "I",
        "stats": [
          "5",
          "5+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Spectres",
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
          90,
          120,
          200
        ],
        "unlocks": [],
        "special": "Mindthirst, Pathfinder, Stealthy, Shadowbolts: 18”, Piercing (1)",
        "options": [],
        "ovals": [],
        "keywords": "Phantasm",
        "mType": "I",
        "stats": [
          "6",
          "6+",
          "5+",
          "3+"
        ]
      },
      {
        "name": "Needle-fangs*",
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
          "1",
          "1"
        ],
        "att": [
          "12",
          "24"
        ],
        "nerve": [
          "9/11",
          "12/14"
        ],
        "values": [
          80,
          135
        ],
        "unlocks": [],
        "special": "Fly, Mindthirst, Nimble, Stealthy, Strider",
        "options": [],
        "ovals": [],
        "keywords": "Beast, Nightmare, Warp Pixies",
        "mType": "S",
        "stats": [
          "7",
          "5+",
          "-",
          "2+"
        ]
      },
      {
        "name": "Mind-screech",
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
          "5"
        ],
        "nerve": [
          "13/15"
        ],
        "values": [
          150
        ],
        "unlocks": [],
        "special": "Fly, Mindthirst, Nimble, Pathfinder, Stealthy Spells: Lightning Bolt (6), Mind Fog (6), Wind Blast (6). Spellcaster: 0",
        "options": [],
        "ovals": [],
        "keywords": "Insidious, Nightmare",
        "mType": "M",
        "stats": [
          "6",
          "4+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Horror Riftweavers",
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
          "11/13"
        ],
        "values": [
          120
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Dread, Individual, Mighty, Mindthirst, Stealthy",
        "options": [],
        "ovals": [],
        "keywords": "Horror, Nightmare",
        "mType": "M",
        "stats": [
          "6",
          "4+",
          "-",
          "3+"
        ]
      },
      {
        "name": "Planar Apparition",
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
          "4"
        ],
        "nerve": [
          "13/15"
        ],
        "values": [
          165
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Dread, Ensnare, Mindthirst, Nimble, Regeneration (4+), Stealthy Spells: Heal (7), Mind Fog (2). Spellcaster: 0",
        "options": [
          "Icy Breath (8)",
          "Bastion (2) [1]"
        ],
        "ovals": [
          25,
          20
        ],
        "keywords": "Phantasm",
        "mType": "M",
        "stats": [
          "7",
          "3+",
          "-",
          "3+"
        ]
      },
      {
        "name": "Butchers",
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
          125,
          205
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Mindthirst, Stealthy",
        "options": [],
        "ovals": [],
        "keywords": "Abomination, Nightmare",
        "mType": "LI",
        "stats": [
          "6",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Shadowhounds*",
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
          "10",
          "20"
        ],
        "nerve": [
          "11/13",
          "14/16"
        ],
        "values": [
          125,
          190
        ],
        "unlocks": [],
        "special": "Mindthirst, Nimble, Regeneration (5+), Stealthy, Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "keywords": "Beast, Nightmare",
        "mType": "C",
        "stats": [
          "9",
          "4+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Fiends",
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
          "12",
          "24"
        ],
        "nerve": [
          "13/15",
          "16/18"
        ],
        "values": [
          130,
          215
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Mindthirst, Stealthy, Vicious (Melee)",
        "options": [],
        "ovals": [],
        "keywords": "Cunning, Nightmare",
        "mType": "LC",
        "stats": [
          "8",
          "4+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Terror",
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
          250
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Ensnare, Mindthirst, Regeneration (4+), Stealthy, Strider",
        "options": [],
        "ovals": [],
        "keywords": "Abomination, Nightmare",
        "mType": "Ti",
        "stats": [
          "7",
          "3+",
          "-",
          "3+"
        ]
      },
      {
        "name": "Portal of Despair [1]",
        "irregular": 0,
        "limit": 1,
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
          "3"
        ],
        "nerve": [
          "-/16"
        ],
        "values": [
          90
        ],
        "unlocks": [],
        "special": "Dread, Visions from the Void: As long as this unit is present and in play on, the table, at the start of each of your Ranged Phases you may select a single, Friendly Core unit on the battlefield regardless of range or line of, sight. The selected unit is granted the Inspiring special rule until the, start of your next turn. Note: Base size cannot be increased beyond 75x75mm.",
        "options": [],
        "ovals": [],
        "keywords": "Construct, Shrine",
        "mType": "Ti",
        "stats": [
          "5",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Shadow-hulk",
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
          "D6+6"
        ],
        "nerve": [
          "-/20"
        ],
        "values": [
          225
        ],
        "unlocks": [],
        "special": "Crushing Strength (3), Mindthirst, Stealthy, Strider",
        "options": [],
        "ovals": [],
        "keywords": "Abomination, Cyclops, Giant",
        "mType": "Ti",
        "stats": [
          "6",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Soulflayers*",
        "irregular": 1,
        "limit": 0,
        "unitType": [
          "R"
        ],
        "models": [
          "3"
        ],
        "unitStrength": [
          "2"
        ],
        "att": [
          "9"
        ],
        "nerve": [
          "13/15"
        ],
        "values": [
          165
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Fly, Mindthirst, Stealthy, Thunderous Charge (1) Spells: Wind Blast (5). Spellcaster: 0",
        "options": [],
        "ovals": [],
        "keywords": "Nightmare",
        "mType": "LC",
        "stats": [
          "10",
          "3+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Dread-fiend",
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
          "14/16"
        ],
        "values": [
          135
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Dread, Mindthirst, Nimble, Stealthy, Vicious (Melee)",
        "options": [],
        "ovals": [],
        "keywords": "Cunning, Nightmare",
        "mType": "LC",
        "stats": [
          "8",
          "3+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Horror",
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
        "special": "Individual, Mindthirst, Stealthy Spells: Lightning Bolt (3). Spellcaster: 1",
        "options": [
          "Aura (Vicious (Melee) - Infantry only)",
          "Bane Chant (2) (replaces Lighning bolt)",
          "Bane Chant (2)",
          "Mind Fog (2)",
          "Weakness (2)"
        ],
        "ovals": [
          30,
          0,
          20,
          15,
          15
        ],
        "keywords": "Horror, Nightmare",
        "mType": "I",
        "stats": [
          "6",
          "5+",
          "-",
          "3+"
        ]
      },
      {
        "name": "Shade",
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
          "11/13"
        ],
        "values": [
          135
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Dread, Fly, Individual, Mindthirst, Stealthy",
        "options": [
          "Screamshard"
        ],
        "ovals": [
          5
        ],
        "keywords": "Phantasm",
        "mType": "I",
        "stats": [
          "10",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Void Lurker",
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
          270
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Fly, Mindthirst, Nimble, Regeneration (5+), Steathy, Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "keywords": "Phantasm, Voracious",
        "mType": "Ti",
        "stats": [
          "10",
          "3+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Banshee",
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
          "-/12"
        ],
        "values": [
          145
        ],
        "unlocks": [],
        "special": "Dread, Fly, Individual, Mindthirst, Stealthy, Banshee's Wail: While casting Wind Blast or Enthral, in addition to moving the target, roll to damage for each hit scored. Spells: Enthral (5), Wind Blast (5). Spellcaster: 0",
        "options": [],
        "ovals": [],
        "keywords": "Phantasm",
        "mType": "I",
        "stats": [
          "10",
          "6+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Reaper Souldrinker",
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
          "10/12"
        ],
        "values": [
          65
        ],
        "unlocks": [],
        "special": "Aura (Life Leech (+1) - Reaper only), Crushing Strength (1), Duelist, Individual, Mindthirst, Stealthy",
        "options": [
          "Screamshard"
        ],
        "ovals": [
          5
        ],
        "keywords": "Nightmare, Reaper",
        "mType": "I",
        "stats": [
          "6",
          "3+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Butcher Fleshripper",
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
          "-/14"
        ],
        "values": [
          110
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Mindthirst, Nimble, Stealthy",
        "options": [],
        "ovals": [],
        "keywords": "Abomination, Nightmare",
        "mType": "LI",
        "stats": [
          "6",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "The Dream Hunter [1]",
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
          "7"
        ],
        "nerve": [
          "14/16"
        ],
        "values": [
          195
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Dread, Elite (Melee), Individual, Lifeleech, (2), Mighty, Mindthirst, Stealthy, Unleashed Nightmares: Friendly Core units that are Engaged with the same enemy unit as the Dream Hunter have Elite (Melee).",
        "options": [],
        "ovals": [],
        "keywords": "Nightmare, Visitation",
        "mType": "HI",
        "stats": [
          "7",
          "3+",
          "-",
          "5+"
        ]
      }
    ]
  },
  {
    "faction": "Orcs",
    "alignment": 2,
    "units": [
      {
        "name": "Morax",
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
          "15",
          "20"
        ],
        "nerve": [
          "-/11",
          "-/15"
        ],
        "values": [
          115,
          175
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Wild Charge (D3)",
        "options": [
          "Orcish Skullpole"
        ],
        "ovals": [
          5
        ],
        "keywords": "Berserker, Orc",
        "mType": "HI",
        "stats": [
          "5",
          "3+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Ax",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "T",
          "R",
          "H",
          "L"
        ],
        "models": [
          "10",
          "20",
          "40",
          "60"
        ],
        "unitStrength": [
          "1",
          "3",
          "4",
          "5"
        ],
        "att": [
          "10",
          "12",
          "25",
          "30"
        ],
        "nerve": [
          "9/11",
          "13/15",
          "20/22",
          "26/28"
        ],
        "values": [
          85,
          130,
          215,
          310
        ],
        "unlocks": [],
        "special": "Crushing Strength (1)",
        "options": [
          "Orcish Skullpole"
        ],
        "ovals": [
          5
        ],
        "keywords": "Orc",
        "mType": "HI",
        "stats": [
          "5",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Youngax",
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
          "13/15",
          "20/22"
        ],
        "values": [
          115,
          190
        ],
        "unlocks": [],
        "special": "Crushing Strength (1)",
        "options": [],
        "ovals": [],
        "keywords": "Orc",
        "mType": "HI",
        "stats": [
          "5",
          "4+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Greatax",
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
          100,
          150,
          250
        ],
        "unlocks": [],
        "special": "Crushing Strength (2)",
        "options": [
          "Orcish Skullpole"
        ],
        "ovals": [
          5
        ],
        "keywords": "Orc",
        "mType": "HI",
        "stats": [
          "5",
          "3+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Longax",
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
          100,
          155,
          255
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Phalanx",
        "options": [
          "Orcish Skullpole"
        ],
        "ovals": [
          5
        ],
        "keywords": "Orc",
        "mType": "HI",
        "stats": [
          "5",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Gore Riders",
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
          "10/12",
          "13/15"
        ],
        "values": [
          125,
          190
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "keywords": "Orc",
        "mType": "C",
        "stats": [
          "8",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Orclings*",
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
          "1",
          "1"
        ],
        "att": [
          "12",
          "24"
        ],
        "nerve": [
          "10/12",
          "13/15"
        ],
        "values": [
          60,
          100
        ],
        "unlocks": [],
        "special": "-",
        "options": [
          "Upgrade to Wip’s Playmates [1] (Horde only) - Gaining Fury, Vicious (Melee) and Wild Charge (D3)"
        ],
        "ovals": [
          15
        ],
        "keywords": "Orcling",
        "mType": "S",
        "stats": [
          "5",
          "5+",
          "-",
          "3+"
        ]
      },
      {
        "name": "Trolls",
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
          "11/14",
          "14/17"
        ],
        "values": [
          115,
          190
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Regeneration (5+)",
        "options": [],
        "ovals": [],
        "keywords": "Troll",
        "mType": "LI",
        "stats": [
          "6",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Skulk Outriders*",
        "irregular": 1,
        "limit": 0,
        "unitType": [
          "T"
        ],
        "models": [
          "5"
        ],
        "unitStrength": [
          "1"
        ],
        "att": [
          "7"
        ],
        "nerve": [
          "10/12"
        ],
        "values": [
          105
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Nimble, Shortbows: 18”, Steady Aim",
        "options": [],
        "ovals": [],
        "keywords": "Orc, Tracker",
        "mType": "C",
        "stats": [
          "8",
          "4+",
          "5+",
          "3+"
        ]
      },
      {
        "name": "Skulks*",
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
          "9/11",
          "13/15"
        ],
        "values": [
          85,
          110
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Scout, Shortbows: 18”",
        "options": [],
        "ovals": [],
        "keywords": "Orc, Tracker",
        "mType": "HI",
        "stats": [
          "5",
          "5+",
          "5+",
          "3+"
        ]
      },
      {
        "name": "War Drum",
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
          "3"
        ],
        "nerve": [
          "-/11"
        ],
        "values": [
          80
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Rally (2 - Orc only), Note: Base size cannot be increased beyond 50x50mm, or 50x100mm if mounted. Only a single upgrade can be chosen",
        "options": [
          "Mount on a War Wagon, increasing Speed to 8, gaining Nimble and changing to Monster (Cht - Height: 3)",
          "Upgrade the unit with Dread"
        ],
        "ovals": [
          30,
          30
        ],
        "keywords": "Orc, Shrine",
        "mType": "M",
        "stats": [
          "5",
          "4+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Gore Chariots",
        "irregular": 0,
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
          "19/21"
        ],
        "values": [
          150,
          190,
          240,
          275
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Thunderous Charge (2)",
        "options": [],
        "ovals": [],
        "keywords": "Orc",
        "mType": "Ch",
        "stats": [
          "8",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Fight Wagons*",
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
          "12",
          "18",
          "24",
          "30"
        ],
        "nerve": [
          "-/13",
          "-/15",
          "-/17",
          "-/20"
        ],
        "values": [
          155,
          195,
          245,
          285
        ],
        "unlocks": [],
        "special": "Crushing Strength (1)",
        "options": [],
        "ovals": [],
        "keywords": "Orc",
        "mType": "Ch",
        "stats": [
          "7",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Skulk Raider Chariots*",
        "irregular": 1,
        "limit": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          "2",
          "3"
        ],
        "unitStrength": [
          "1",
          "2"
        ],
        "att": [
          "8",
          "12"
        ],
        "nerve": [
          "10/12",
          "12/14"
        ],
        "values": [
          115,
          145
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Thunderous Charge (1), Shortbows: 18”, Att: [4/6], Steady Aim",
        "options": [],
        "ovals": [],
        "keywords": "Orc, Tracker",
        "mType": "Ch",
        "stats": [
          "8",
          "4+",
          "5+",
          "4+"
        ]
      },
      {
        "name": "Giant",
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
          "D6+8"
        ],
        "nerve": [
          "18/20"
        ],
        "values": [
          225
        ],
        "unlocks": [],
        "special": "Brutal, Crushing Strength (4), Fury, Strider",
        "options": [],
        "ovals": [],
        "keywords": "Giant",
        "mType": "Ti",
        "stats": [
          "7",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Krudger",
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
          "12/14"
        ],
        "values": [
          95
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Individual, Inspiring, Mighty",
        "options": [
          "Mount on a Gore, increasing Speed to 8 and changing to Hero (Cav - Height: 3)",
          "Orcish Skullpole",
          "Gakamak’s Bloody Banner [1] - Aura (Wild Charge (+1) - Heavy Infantry only). This upgrade cannot be taken in addition to a Gore Mount."
        ],
        "ovals": [
          35,
          5,
          10
        ],
        "keywords": "Orc",
        "mType": "HI",
        "stats": [
          "5",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Godspeaker",
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
          70
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Individual, Tribal Magic: For each Friendly Core Heavy Infantry Regiment, Heavy Infantry Horde or Heavy Infantry Legion within 6”, increase the amount of dice rolled with Bane Chant, Drain Life, Fireball, Heal and Hex by 1, to a maximum bonus of +3. Spells: Fireball (7). Spellcaster: 1",
        "options": [
          "Mount on a Gore, increasing Speed to 8 and changing to Hero (Cav - Height: 3)",
          "Bane Chant (2) (replaces Fireball)",
          "Bane Chant (2)",
          "Drain Life (4)",
          "Heal (2)",
          "Hex (2)",
          "Bloodboil [1]"
        ],
        "ovals": [
          25,
          0,
          20,
          20,
          15,
          10,
          30
        ],
        "keywords": "Orc",
        "mType": "HI",
        "stats": [
          "5",
          "4+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Flagger",
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
          "9/11"
        ],
        "values": [
          50
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Individual, Inspiring",
        "options": [
          "Mount on a Gore, increasing Speed to 8 and changing to Hero (Cav - Height: 3)"
        ],
        "ovals": [
          25
        ],
        "keywords": "Orc",
        "mType": "HI",
        "stats": [
          "5",
          "4+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Krudger on Gore Chariot",
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
          140
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Inspiring, Nimble, Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "keywords": "Orc",
        "mType": "Ch",
        "stats": [
          "8",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Krudger on Winged Slasher",
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
          285
        ],
        "unlocks": [],
        "special": "Crushing Strength (3), Fly, Fury, Inspiring, Nimble",
        "options": [],
        "ovals": [],
        "keywords": "Draconic, Orc",
        "mType": "Ti",
        "stats": [
          "10",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Krusher",
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
          "10/12"
        ],
        "values": [
          50
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Individual",
        "options": [
          "Mount on a Gore, increasing Speed to 8 and changing to Hero (Cav - Height: 3)"
        ],
        "ovals": [
          25
        ],
        "keywords": "Orc",
        "mType": "HI",
        "stats": [
          "5",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Troll Bruiser",
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
          "12/15"
        ],
        "values": [
          110
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Inspiring (Troll only), Nimble, Regeneration (5+)",
        "options": [],
        "ovals": [],
        "keywords": "Troll",
        "mType": "LI",
        "stats": [
          "6",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Skulk Marauder on Gore Chariot",
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
          "10/12"
        ],
        "values": [
          90
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Nimble, Thunderous Charge (1), Shortbow: 18”, Steady Aim",
        "options": [],
        "ovals": [],
        "keywords": "Gang, Orc, Tracker",
        "mType": "Ch",
        "stats": [
          "8",
          "3+",
          "4+",
          "4+"
        ]
      },
      {
        "name": "Morax Mansplitter",
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
          "-/14"
        ],
        "values": [
          105
        ],
        "unlocks": [],
        "special": "Aura (Thunderous Charge (1) - Berserker only), Crushing Strength (1), Individual, Wild Charge (D3), Throwing Ax: 12”, Att: 1, Piercing (1)",
        "options": [],
        "ovals": [],
        "keywords": "Berserker, Orc",
        "mType": "HI",
        "stats": [
          "5",
          "3+",
          "4+",
          "4+"
        ]
      },
      {
        "name": "Gakamak [1]",
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
          "7"
        ],
        "nerve": [
          "13/15"
        ],
        "values": [
          230
        ],
        "unlocks": [],
        "special": "Crushing Strength (3), Fury, Individual, Mighty, Very Inspiring, Vicious (Melee)",
        "options": [],
        "ovals": [],
        "keywords": "Orc",
        "mType": "C",
        "stats": [
          "8",
          "2+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Wip the Outcast [1]",
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
          "11/13"
        ],
        "values": [
          105
        ],
        "unlocks": [],
        "special": "Individual, Inspiring (Orcling only), Wip’s Tribal Magic: For each Friendly Core Heavy Infantry Regiment, Heavy Infantry Horde, Heavy Infantry Legion or unit of Wip’s Playmates within 6”, increase the amount of dice rolled with Heal, Hex, Lightning Bolt and Weakness by 1 to a maximum bonus of +3. Spells: Heal (2), Hex (2), Lightning Bolt (3), Weakness (2). Spellcaster: 1",
        "options": [
          "Veil of Shadows (2) [1]"
        ],
        "ovals": [
          25
        ],
        "keywords": "Outcast",
        "mType": "C",
        "stats": [
          "6",
          "5+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Skulk Stalker",
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
          "9/11"
        ],
        "values": [
          65
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Individual, Scout, Shortbow: 18”",
        "options": [
          "Mount on a Gore, losing the Scout special rule but increasing Speed to 8 and changing to Hero (Cav - Height: 3)",
          "Raid Leader [1] - Gain Aura (Steady Aim - Tracker only) and Inspiring (Tracker only). This unique upgrade cannot be taken in addition to a magical artefact."
        ],
        "ovals": [
          20,
          10
        ],
        "keywords": "Orc, Tracker",
        "mType": "HI",
        "stats": [
          "5",
          "3+",
          "4+",
          "4+"
        ]
      }
    ]
  },
  {
    "faction": "Ratkin Slaves",
    "alignment": 2,
    "units": [
      {
        "name": "Blacksouls",
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
          75,
          115,
          190
        ],
        "unlocks": [],
        "special": "Vicious (Melee)",
        "options": [
          "Exchange shields for two-handed weapons, lowering Defence to 4+ and gaining Crushing Strength (1)",
          "Throwing Mastiff"
        ],
        "ovals": [
          0,
          15
        ],
        "keywords": "Dwarf",
        "mType": "I",
        "stats": [
          "4",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Immortal Guard",
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
          "-/13",
          "-/17"
        ],
        "values": [
          105,
          160
        ],
        "unlocks": [],
        "special": "Regeneration (5+), Vicious (Melee)",
        "options": [
          "Throwing Mastiff"
        ],
        "ovals": [
          15
        ],
        "keywords": "Dwarf, Hellforged, Immortal",
        "mType": "I",
        "stats": [
          "4",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Abyssal Berserkers",
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
          "12",
          "15"
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
        "special": "Crushing Strength (1), Vicious (Melee), Wild Charge (D3)",
        "options": [],
        "ovals": [],
        "keywords": "Berserker, Dwarf",
        "mType": "I",
        "stats": [
          "5",
          "3+",
          "-",
          "3+"
        ]
      },
      {
        "name": "Decimators*",
        "irregular": 1,
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
          115,
          155,
          260
        ],
        "unlocks": [],
        "special": "Blunderbuss: 12”, Piercing (1), Steady Aim, Vicious (Ranged)",
        "options": [
          "Regiments & Hordes only - Gain the alternate single use ranged attack - Mobile Katsuchan: 24”, Att: 3, Ra: 4+, Blast (D3), Indirect, Reload, Vicious (Ranged)"
        ],
        "ovals": [
          20
        ],
        "keywords": "Dwarf",
        "mType": "I",
        "stats": [
          "4",
          "4+",
          "4+",
          "4+"
        ]
      },
      {
        "name": "Abyssal Halfbreeds",
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
          130,
          200
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Regeneration (5+), Thunderous Charge (1), Vicious (Melee)",
        "options": [],
        "ovals": [],
        "keywords": "Abomination",
        "mType": "C",
        "stats": [
          "8",
          "3+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Katsuchan Rocket Launcher",
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
          "3"
        ],
        "nerve": [
          "10/12"
        ],
        "values": [
          85
        ],
        "unlocks": [],
        "special": "Katsuchan Rocket Launcher: 48”, Blast (D3), Ignores Cover, Indirect, Piercing (1), Reload, Vicious (Ranged)",
        "options": [],
        "ovals": [],
        "keywords": "Dwarf, Hellforged",
        "mType": "W",
        "stats": [
          "4",
          "-",
          "5+",
          "5+"
        ]
      },
      {
        "name": "Overmaster",
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
        "special": "Crushing Strength (1), Individual, Inspiring, Mighty, Vicious (Melee)",
        "options": [
          "Infernal Advance [1] - Gain Aura (Strider - Infantry only). This unique upgrade cannot be taken in addition to a magical artefact."
        ],
        "ovals": [
          20
        ],
        "keywords": "Dwarf",
        "mType": "I",
        "stats": [
          "4",
          "3+",
          "-",
          "6+"
        ]
      },
      {
        "name": "Iron-caster",
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
          110
        ],
        "unlocks": [],
        "special": "Individual, Inspiring (Hellforged only), Ariagful’s Flame: Whenever this unit rolls to damage with Fireball, it can reroll all dice that score a natural, unmodified 1. Spells: Fireball (10), Heal (3 - Hellforged only). Spellcaster: 2",
        "options": [
          "Bane Chant (2)",
          "Lightning Bolt (3)",
          "Mind Fog (2)",
          "Surge (8) (replaces Fireball)",
          "Surge (8)"
        ],
        "ovals": [
          20,
          20,
          15,
          0,
          30
        ],
        "keywords": "Dwarf, Hellforged",
        "mType": "I",
        "stats": [
          "4",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Slavedriver",
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
          55
        ],
        "unlocks": [],
        "special": "Individual, Inspiring, Rally (1 - Slave only), Vicious (Melee)",
        "options": [],
        "ovals": [],
        "keywords": "Dwarf",
        "mType": "I",
        "stats": [
          "4",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Abyssal Halfbreed Champion",
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
          145
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Individual, Inspiring (Abomination only), Mighty, Regeneration (5+), Vicious (Melee)",
        "options": [],
        "ovals": [],
        "keywords": "Halfbreed",
        "mType": "C",
        "stats": [
          "8",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Taskmaster on Chariot",
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
          "11/13"
        ],
        "values": [
          110
        ],
        "unlocks": [],
        "special": "Inspiring, Nimble, Thunderous Charge (2), Vicious (Melee)",
        "options": [
          "Rally (1 - Slave only)"
        ],
        "ovals": [
          15
        ],
        "keywords": "Dwarf",
        "mType": "Ch",
        "stats": [
          "8",
          "4+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Overmaster on Ancient Winged Halfbreed",
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
          "17/19"
        ],
        "values": [
          300
        ],
        "unlocks": [],
        "special": "Crushing Strength (3), Fly, Inspiring, Nimble, Regeneration (5+), Vicious (Melee)",
        "options": [],
        "ovals": [],
        "keywords": "Abomination, Dwarf",
        "mType": "Ti",
        "stats": [
          "10",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Slave Wretches*",
        "irregular": 1,
        "limit": 0,
        "unitType": [
          "H",
          "L"
        ],
        "models": [
          "40",
          "60"
        ],
        "unitStrength": [
          "3",
          "4"
        ],
        "att": [
          "25",
          "30"
        ],
        "nerve": [
          "18/21",
          "24/27"
        ],
        "values": [
          115,
          170
        ],
        "unlocks": [],
        "special": "-",
        "options": [
          "The Last Breath"
        ],
        "ovals": [
          15
        ],
        "keywords": "Expendable, Ratkin, Slave",
        "mType": "I",
        "stats": [
          "6",
          "5+",
          "-",
          "2+"
        ]
      },
      {
        "name": "Slave Tunnel Runners",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          "2",
          "3"
        ],
        "unitStrength": [
          "1",
          "2"
        ],
        "att": [
          "16",
          "24"
        ],
        "nerve": [
          "12/14",
          "14/16"
        ],
        "values": [
          170,
          210
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "keywords": "Ratkin, Slave",
        "mType": "Ch",
        "stats": [
          "8",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Vermintide*",
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
          "1",
          "1"
        ],
        "att": [
          "9",
          "18"
        ],
        "nerve": [
          "9/11",
          "12/14"
        ],
        "values": [
          65,
          110
        ],
        "unlocks": [],
        "special": "Nimble, Vicious (Melee), Wild Charge (D3)",
        "options": [],
        "ovals": [],
        "keywords": "Beast, Expendable, Vermin",
        "mType": "S",
        "stats": [
          "6",
          "5+",
          "-",
          "3+"
        ]
      },
      {
        "name": "Slave Warriors*",
        "irregular": 1,
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
          "2",
          "3"
        ],
        "att": [
          "12",
          "25"
        ],
        "nerve": [
          "12/14",
          "19/21"
        ],
        "values": [
          85,
          140
        ],
        "unlocks": [],
        "special": "-",
        "options": [
          "The Last Breath"
        ],
        "ovals": [
          15
        ],
        "keywords": "Expendable, Ratkin, Slave",
        "mType": "I",
        "stats": [
          "6",
          "5+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Slave Nightmares",
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
          "11/13",
          "14/16"
        ],
        "values": [
          140,
          230
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Vicious (Melee), Blight Cannons: 12”, Steady Aim",
        "options": [],
        "ovals": [],
        "keywords": "Abomination, Slave, Tek",
        "mType": "LI",
        "stats": [
          "6",
          "4+",
          "4+",
          "5+"
        ]
      },
      {
        "name": "Slave Death Engine Impaler",
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
          "D6+7"
        ],
        "nerve": [
          "-/16"
        ],
        "values": [
          180
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Vicious (Melee)",
        "options": [],
        "ovals": [],
        "keywords": "Ratkin, Slave, Tek",
        "mType": "M",
        "stats": [
          "8",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Golekh Skinflayer [1]",
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
          "5"
        ],
        "nerve": [
          "-/16"
        ],
        "values": [
          200
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Dread, Nimble, Rallying (2 - Slave only), Thunderous Charge (2), Very Inspiring (Slave only), Vicious (Melee)",
        "options": [],
        "ovals": [],
        "keywords": "Dwarf",
        "mType": "Ch",
        "stats": [
          "8",
          "3+",
          "-",
          "5+"
        ]
      }
    ],
    "masterList": "Abyssal Dwarfs"
  },
  {
    "faction": "Twilight Kin",
    "alignment": 2,
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
        "keywords": "Elf, Kindred",
        "mType": "I",
        "stats": [
          "6",
          "4+",
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
        "keywords": "Elf, Kindred",
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
        "special": "Elite, Pathfinder, Scout, Bows: 24”, Steady Aim",
        "options": [],
        "ovals": [],
        "keywords": "Elf, Kindred, Tracker",
        "mType": "I",
        "stats": [
          "6",
          "4+",
          "4+",
          "3+"
        ]
      },
      {
        "name": "Therennian Sea Guard*",
        "irregular": 1,
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
        "special": "Elite (Melee), Phalanx, Bows: 24”",
        "options": [],
        "ovals": [],
        "keywords": "Elf",
        "mType": "I",
        "stats": [
          "6",
          "4+",
          "5+",
          "4+"
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
        "special": "Nimble, Shortbows: 18”, Elite (Ranged), Steady Aim",
        "options": [],
        "ovals": [],
        "keywords": "Elf",
        "mType": "C",
        "stats": [
          "10",
          "4+",
          "4+",
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
        "keywords": "Elf, Kindred",
        "mType": "W",
        "stats": [
          "6",
          "-",
          "4+",
          "4+"
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
        "keywords": "Draconic, Elf",
        "mType": "W",
        "stats": [
          "6",
          "-",
          "4+",
          "4+"
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
        "keywords": "Elf",
        "mType": "I",
        "stats": [
          "6",
          "4+",
          "-",
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
          "Mount on a Horse, increasing Speed to 9 and changing to Hero (Cav - Height: 3)"
        ],
        "ovals": [
          25
        ],
        "keywords": "Elf",
        "mType": "I",
        "stats": [
          "6",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Impalers",
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
          "12",
          "15"
        ],
        "nerve": [
          "10/12",
          "14/16"
        ],
        "values": [
          110,
          170
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Elite (Melee)",
        "options": [
          "Screamshard"
        ],
        "ovals": [
          5
        ],
        "keywords": "Elf, Twilight",
        "mType": "I",
        "stats": [
          "6",
          "3+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Cronebound Gargoyles*",
        "irregular": 1,
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
          "10"
        ],
        "nerve": [
          "8/10"
        ],
        "values": [
          85
        ],
        "unlocks": [],
        "special": "Fly, Nimble, Regeneration (4+)",
        "options": [],
        "ovals": [],
        "keywords": "Cronebound, Gargoyle",
        "mType": "HI",
        "stats": [
          "10",
          "4+",
          "-",
          "3+"
        ]
      },
      {
        "name": "Blade Dancers",
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
          "15",
          "20"
        ],
        "nerve": [
          "-/12",
          "-/16"
        ],
        "values": [
          135,
          205
        ],
        "unlocks": [],
        "special": "Elite (Melee), Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "keywords": "Elf, Twilight",
        "mType": "I",
        "stats": [
          "7",
          "3+",
          "-",
          "3+"
        ]
      },
      {
        "name": "Cronebound Butchers*",
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
          "-/15",
          "-/18"
        ],
        "values": [
          120,
          200
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Stealthy",
        "options": [],
        "ovals": [],
        "keywords": "Abomination, Cronebound, Nightmare",
        "mType": "LI",
        "stats": [
          "6",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Cronebound Fiends*",
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
          "12",
          "24"
        ],
        "nerve": [
          "13/15",
          "16/18"
        ],
        "values": [
          125,
          210
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Stealthy, Vicious (Melee)",
        "options": [],
        "ovals": [],
        "keywords": "Cronebound, Cunning, Nightmare",
        "mType": "LC",
        "stats": [
          "8",
          "4+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Cronebound Mind-screech",
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
          "5"
        ],
        "nerve": [
          "13/15"
        ],
        "values": [
          150
        ],
        "unlocks": [],
        "special": "Fly, Nimble, Pathfinder, Stealthy Spells: Lightning Bolt (6), Wind Blast (6), Mind Fog (6). Spellcaster: 0",
        "options": [],
        "ovals": [],
        "keywords": "Cronebound, Insidious, Nightmare",
        "mType": "M",
        "stats": [
          "6",
          "4+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Cronebound Needle-fangs*",
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
          "1",
          "1"
        ],
        "att": [
          "12",
          "24"
        ],
        "nerve": [
          "9/11",
          "12/14"
        ],
        "values": [
          80,
          130
        ],
        "unlocks": [],
        "special": "Fly, Nimble, Stealthy, Strider",
        "options": [],
        "ovals": [],
        "keywords": "Beast, Cronebound, Nightmare",
        "mType": "S",
        "stats": [
          "7",
          "5+",
          "-",
          "2+"
        ]
      },
      {
        "name": "Cronebound Shadowhounds*",
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
          "10",
          "20"
        ],
        "nerve": [
          "11/13",
          "14/16"
        ],
        "values": [
          120,
          185
        ],
        "unlocks": [],
        "special": "Nimble, Regeneration (5+), Stealthy, Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "keywords": "Beast, Cronebound, Nightmare",
        "mType": "C",
        "stats": [
          "9",
          "4+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Cronebound Shadow-hulk",
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
          "D6+6"
        ],
        "nerve": [
          "-/20"
        ],
        "values": [
          220
        ],
        "unlocks": [],
        "special": "Crushing Strength (3), Stealthy, Strider",
        "options": [],
        "ovals": [],
        "keywords": "Abomination, Cronebound, Cyclops, Giant",
        "mType": "Ti",
        "stats": [
          "6",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Cronebound Abyssal Horsemen",
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
          "9",
          "18"
        ],
        "nerve": [
          "11/13",
          "14/16"
        ],
        "values": [
          155,
          240
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Fury, Regeneration (5+), Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "keywords": "Cronebound, Hellequin",
        "mType": "C",
        "stats": [
          "8",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Cronebound Archfiend",
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
          "16/18"
        ],
        "values": [
          310
        ],
        "unlocks": [],
        "special": "Brutal, Crushing Strength (3), Fly, Fury, Inspiring, Nimble, Vicious (Melee) Spells: Fireball (10). Spellcaster: 0",
        "options": [],
        "ovals": [],
        "keywords": "Abyssal, Cronebound",
        "mType": "Ti",
        "stats": [
          "10",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Twilight Assassin",
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
          100
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Duelist, Elite, Individual, Scout, Stealthy, Throwing Weapons: 12”, Piercing (1)",
        "options": [
          "Screamshard"
        ],
        "ovals": [
          5
        ],
        "keywords": "Elf, Twilight",
        "mType": "I",
        "stats": [
          "7",
          "3+",
          "3+",
          "4+"
        ]
      },
      {
        "name": "Soulbane",
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
          120
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Dread, Elite (Melee), Individual, Inspiring, Mighty, Stealthy",
        "options": [
          "Mount on a Horse, increasing Speed to 9 and changing to Hero (Cav – Height: 3)",
          "Screamshard"
        ],
        "ovals": [
          35,
          5
        ],
        "keywords": "Elf, Twilight",
        "mType": "I",
        "stats": [
          "6",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Cronebound Banshee",
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
          "-/12"
        ],
        "values": [
          140
        ],
        "unlocks": [],
        "special": "Dread, Fly, Individual, Stealthy, Banshee’s Wail: While casting Wind Blast or Enthral, in addition to moving the target, roll to damage for each hit scored. Spells: Enthral (5), Wind Blast (5). Spellcaster: 0",
        "options": [],
        "ovals": [],
        "keywords": "Cronebound, Phantasm",
        "mType": "I",
        "stats": [
          "10",
          "6+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Mikayel, Lord of Nightmares [1]",
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
          "6"
        ],
        "nerve": [
          "-/16"
        ],
        "values": [
          260
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Dread, Elite (Melee), Individual, Inspiring, Iron Resolve, Mighty, Stealthy, Sword of Umbra: While attacking enemy Heroes, Monsters or Titans in melee, this unit doubles its number of Attacks.",
        "options": [],
        "ovals": [],
        "keywords": "Elf, Twilight",
        "mType": "C",
        "stats": [
          "9",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Summoner Crone",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "He"
        ],
        "models": [],
        "unitStrength": [],
        "att": [],
        "nerve": [],
        "values": [],
        "unlocks": [],
        "special": "Individual, Inspiring (Cronebound only), Stealthy, Wicked Miasma: This unit’s Drain Life spell may target Friendly Core Cronebound units within 18” instead of 6”, for its damage removal component. Spells: Drain Life (6). Spellcaster: 3",
        "options": [
          "Mount on a Horse, increasing Speed to 9 and changing to Hero (Cav – Height: 3)",
          "Upgrade with a Scepter of Shadows [1] - increasing the unit’s Drain Life value by 3",
          "Bane Chant (2)",
          "Hex (3)",
          "Veil of Shadows (2) [1]"
        ],
        "ovals": [
          25,
          30,
          20,
          15,
          25
        ],
        "keywords": "Elf, Twilight",
        "mType": "I",
        "stats": [
          "6",
          "5+",
          "-",
          "4+"
        ]
      }
    ],
    "masterList": "Elves"
  },
  {
    "faction": "Varangur",
    "alignment": 2,
    "units": [
      {
        "name": "Human Clansmen",
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
          90,
          140,
          230
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Wild Charge (1)",
        "options": [
          "Exchange shields for two-handed weapons, lowering Defence to 4+ and gaining Crushing Strength (2)"
        ],
        "ovals": [
          0
        ],
        "keywords": "Barbarian, Human",
        "mType": "I",
        "stats": [
          "5",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Huscarls",
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
          "15",
          "20"
        ],
        "nerve": [
          "11/13",
          "15/17"
        ],
        "values": [
          145,
          225
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Fury, Wild Charge (1)",
        "options": [],
        "ovals": [],
        "keywords": "Barbarian, Human",
        "mType": "HI",
        "stats": [
          "5",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Snow Trolls",
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
          "12/15",
          "15/18"
        ],
        "values": [
          130,
          220
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Regeneration (5+), Vicious (Melee), Wild Charge (1)",
        "options": [],
        "ovals": [],
        "keywords": "Troll",
        "mType": "MI",
        "stats": [
          "6",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Tundra Wolves*",
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
          "9",
          "18"
        ],
        "nerve": [
          "10/12",
          "13/15"
        ],
        "values": [
          115,
          180
        ],
        "unlocks": [],
        "special": "Nimble, Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "keywords": "Beast, Tundra Wolf",
        "mType": "C",
        "stats": [
          "9",
          "3+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Frostfang Cavalry",
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
          "15",
          "30"
        ],
        "nerve": [
          "12/14",
          "15/17"
        ],
        "values": [
          160,
          265
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Strider, Wild Charge (1)",
        "options": [],
        "ovals": [],
        "keywords": "Frostfang, Human",
        "mType": "LC",
        "stats": [
          "7",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Cavern Dweller",
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
          "D6+6"
        ],
        "nerve": [
          "16/18"
        ],
        "values": [
          210
        ],
        "unlocks": [],
        "special": "Crushing Strength (3), Lifeleech (3), Strider",
        "options": [],
        "ovals": [],
        "keywords": "Blind, Cannibal",
        "mType": "M",
        "stats": [
          "6",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Snow Foxes*",
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
          "10"
        ],
        "nerve": [
          "9/11"
        ],
        "values": [
          80
        ],
        "unlocks": [],
        "special": "Nimble, Pathfinder, Stealthy, Vicious (Melee)",
        "options": [],
        "ovals": [],
        "keywords": "Beast",
        "mType": "S",
        "stats": [
          "8",
          "5+",
          "-",
          "2+"
        ]
      },
      {
        "name": "Lord on Frostfang",
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
          "8"
        ],
        "nerve": [
          "15/17"
        ],
        "values": [
          190
        ],
        "unlocks": [],
        "special": "Crushing Strength (3), Nimble, Strider, Very Inspiring, Wild Charge (1)",
        "options": [
          "Snow Fox"
        ],
        "ovals": [
          10
        ],
        "keywords": "Barbarian, Frostfang, Human",
        "mType": "LC",
        "stats": [
          "7",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Frost Giant",
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
          "D6+8"
        ],
        "nerve": [
          "18/20"
        ],
        "values": [
          230
        ],
        "unlocks": [],
        "special": "Brutal, Crushing Strength (4), Strider Spells: Icy Breath (8). Spellcaster: 0",
        "options": [],
        "ovals": [],
        "keywords": "Frostbound, Giant",
        "mType": "Ti",
        "stats": [
          "7",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Thegn on Frostfang",
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
          125
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Inspiring (Frostfang only), Nimble, Strider, Wild Charge (1)",
        "options": [
          "Snow Fox"
        ],
        "ovals": [
          10
        ],
        "keywords": "Barbarian, Frostfang, Human",
        "mType": "LC",
        "stats": [
          "7",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Skald",
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
          "2"
        ],
        "nerve": [
          "10/12"
        ],
        "values": [
          55
        ],
        "unlocks": [],
        "special": "Individual, Inspiring, Throwing Axes: 12”, Piercing (1)",
        "options": [],
        "ovals": [],
        "keywords": "Human",
        "mType": "HI",
        "stats": [
          "5",
          "5+",
          "4+",
          "4+"
        ]
      },
      {
        "name": "Lord on Chimera",
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
          320
        ],
        "unlocks": [],
        "special": "Crushing Strength (3), Elite (Melee), Fly, Nimble, Very Inspiring Spells: Icy Breath (10). Spellcaster: 0",
        "options": [],
        "ovals": [],
        "keywords": "Barbarian, Beast, Draconic, Human",
        "mType": "Ti",
        "stats": [
          "10",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Snow Troll Prime",
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
          "13/16"
        ],
        "values": [
          120
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Inspiring (Troll only), Nimble, Regeneration (5+), Vicious (Melee), Wild Charge (1)",
        "options": [],
        "ovals": [],
        "keywords": "Troll",
        "mType": "M",
        "stats": [
          "6",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Draugr",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "R",
          "H",
          "L"
        ],
        "models": [
          "20",
          "40",
          "60"
        ],
        "unitStrength": [
          "2",
          "3",
          "4"
        ],
        "att": [
          "12",
          "25",
          "30"
        ],
        "nerve": [
          "-/14",
          "-/21",
          "-/27"
        ],
        "values": [
          75,
          125,
          180
        ],
        "unlocks": [],
        "special": "Iron Resolve, Wild Charge (D3)",
        "options": [],
        "ovals": [],
        "keywords": "Expendable, Draugr, Zombie",
        "mType": "I",
        "stats": [
          "4",
          "5+",
          "-",
          "3+"
        ]
      },
      {
        "name": "Reavers",
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
          "20",
          "25"
        ],
        "nerve": [
          "-/13",
          "-/17"
        ],
        "values": [
          135,
          210
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Thunderous Charge (1)",
        "options": [
          "Upgrade with a Mask of the Reaper, gaining Lifeleech (2)"
        ],
        "ovals": [
          {
            "T": 15,
            "R": 20
          }
        ],
        "keywords": "Barbarian, Bloodbound, Human",
        "mType": "I",
        "stats": [
          "6",
          "4+",
          "-",
          "3+"
        ]
      },
      {
        "name": "Night Raiders*",
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
          "10",
          "12"
        ],
        "nerve": [
          "9/11",
          "13/15"
        ],
        "values": [
          105,
          140
        ],
        "unlocks": [],
        "special": "Pathfinder, Scout, Stealthy, Thunderous Charge (1), Throwing Axes: 12”, Piercing (1), Steady Aim",
        "options": [
          "Exchange Throwing Axes for Bows: 24”",
          "Wolf Handlers [1], Upgrade with Aura (Vicious (Melee) - Tundra Wolf only)"
        ],
        "ovals": [
          0,
          10
        ],
        "keywords": "Barbarian, Human, Tracker",
        "mType": "I",
        "stats": [
          "5",
          "4+",
          "5+",
          "3+"
        ]
      },
      {
        "name": "The Fallen*",
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
          155,
          255
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Iron Resolve, Nimble, Pathfinder",
        "options": [],
        "ovals": [],
        "keywords": "Bloodbound, Fallen",
        "mType": "LI",
        "stats": [
          "8",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Mounted Sons of Korgaan",
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
          "9",
          "18"
        ],
        "nerve": [
          "12/14",
          "15/17"
        ],
        "values": [
          140,
          215
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Thunderous Charge (1)",
        "options": [
          "Upgrade with a Brand of the Warrior, gaining Brutal",
          "Upgrade with a Guise of the Deceiver, gaining Stealthy"
        ],
        "ovals": [
          {
            "T": 5,
            "R": 10
          },
          {
            "T": 5,
            "R": 10
          }
        ],
        "keywords": "Barbarian, Bloodbound, Human",
        "mType": "C",
        "stats": [
          "8",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Horse Raiders*",
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
          "10/12",
          "13/15"
        ],
        "values": [
          105,
          165
        ],
        "unlocks": [],
        "special": "Nimble, Thunderous Charge (1), Shortbows: 18”, Steady Aim",
        "options": [
          "Exchange Shortbows for Throwing Axes: 12”, Piercing (1), Steady Aim"
        ],
        "ovals": [
          0
        ],
        "keywords": "Barbarian, Human",
        "mType": "C",
        "stats": [
          "8",
          "4+",
          "5+",
          "4+"
        ]
      },
      {
        "name": "Jabberwock",
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
          "7"
        ],
        "nerve": [
          "15/17"
        ],
        "values": [
          165
        ],
        "unlocks": [],
        "special": "Brutal, Crushing Strength (1), Nimble, Strider, Thunderous, Charge (1), Feeding Frenzy: In addition to its basic 7 attacks, this unit has a number of additional attacks equal to the amount of damage already on the unit it is attacking in melee at the start of the Melee phase.",
        "options": [
          "Gain the ranged attack - Rancid Bile: 12”, Ra: 4+, Vicious (Ranged), Steady Aim"
        ],
        "ovals": [
          15
        ],
        "keywords": "Abomination, Bloodbound, Draconic",
        "mType": "M",
        "stats": [
          "7",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Magus Conclave",
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
          "11/13"
        ],
        "values": [
          100
        ],
        "unlocks": [],
        "special": "Nimble, Stealthy, Bloodbolts: 36” Range, Blast (D3), Piercing (2), Steady Aim",
        "options": [
          "Upgrade with a Famulus, gaining Elite (Ranged) with Bloodbolts"
        ],
        "ovals": [
          10
        ],
        "keywords": "Bloodbound, Human",
        "mType": "W",
        "stats": [
          "5",
          "-",
          "4+",
          "3+"
        ]
      },
      {
        "name": "Cursed Son",
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
          "-/15"
        ],
        "values": [
          130
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Individual, Mighty",
        "options": [
          "Mount on a Horse, increasing Speed to 8 and changing to Hero (Cav – Height: 3)",
          "Upgrade with a Mask of the Reaper, gaining Lifeleech (2)"
        ],
        "ovals": [
          35,
          15
        ],
        "keywords": "Bloodbound, Human",
        "mType": "HI",
        "stats": [
          "6",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Lord",
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
          110
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Individual, Mighty, Very Inspiring, Wild Charge (1)",
        "options": [
          "Upgrade with a Brand of the Warrior, gaining Brutal",
          "Snow Fox"
        ],
        "ovals": [
          10,
          10
        ],
        "keywords": "Barbarian, Bloodbound, Human",
        "mType": "HI",
        "stats": [
          "5",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Thegn",
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
          50
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Individual, Wild Charge (1)",
        "options": [
          "Upgrade with a Brand of the Warrior, gaining Brutal",
          "Snow Fox"
        ],
        "ovals": [
          10,
          10
        ],
        "keywords": "Barbarian, Bloodbound, Human",
        "mType": "HI",
        "stats": [
          "5",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Magus",
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
        "special": "Individual, Famulus: Whenever this unit rolls to hit with Lightning Bolt, Bane Chant, Drain Life or Bloodboil, it can reroll all dice that, score a natural, unmodified 1. Transfusion: At the start of each of your ranged phases you can transfer up to D2 points of damage from a Friendly Core Bloodbound unit within 6” of this unit to a Friendly Core Draugr unit also within 6” of this unit. A unit can only be targeted with a single Transfusion per turn. The Draugr unit will not take a nerve test for damage taken in this way. Spells: Lightning Bolt (4). Spellcaster: 2",
        "options": [
          "Mount on a Horse, increasing Speed to 8 and changing to Hero (Cav – Height: 3)",
          "Bane Chant (2)",
          "Drain Life (6)",
          "Bloodboil [1]",
          "Bloodboil [1] (replaces Lightning Bolt)"
        ],
        "ovals": [
          25,
          20,
          30,
          30,
          0
        ],
        "keywords": "Bloodbound, Human",
        "mType": "I",
        "stats": [
          "5",
          "5+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Magnilde of the Fallen [1]",
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
          "7"
        ],
        "nerve": [
          "-/15"
        ],
        "values": [
          175
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Elite (Melee), Individual, Inspiring, Iron, Resolve, Mighty, Herja’s Legacy: Once per game, before this model is given an order, it gains Speed 10 and the Fly special rule until the end of the turn.",
        "options": [],
        "ovals": [],
        "keywords": "Barbarian, Bloodbound, Fallen, Human",
        "mType": "HI",
        "stats": [
          "7",
          "3+",
          "-",
          "5+"
        ]
      }
    ],
    "masterList": "Northern Alliance"
  },
  {
    "faction": "Undead",
    "alignment": 2,
    "units": [
      {
        "name": "Skeleton Warriors",
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
          "10",
          "12",
          "25"
        ],
        "nerve": [
          "-/11",
          "-/15",
          "-/22"
        ],
        "values": [
          55,
          85,
          140
        ],
        "unlocks": [],
        "special": "Lifeleech (1), Shambling",
        "options": [
          "Undead Giant Rats"
        ],
        "ovals": [
          10
        ],
        "keywords": "Expendable, Skeleton",
        "mType": "I",
        "stats": [
          "5",
          "5+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Zombies",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "R",
          "H",
          "L"
        ],
        "models": [
          "20",
          "40",
          "60"
        ],
        "unitStrength": [
          "2",
          "3",
          "4"
        ],
        "att": [
          "12",
          "25",
          "30"
        ],
        "nerve": [
          "-/15",
          "-/22",
          "-/28"
        ],
        "values": [
          70,
          115,
          170
        ],
        "unlocks": [],
        "special": "Lifeleech (1), Shambling",
        "options": [
          "Undead Giant Rats"
        ],
        "ovals": [
          10
        ],
        "keywords": "Expendable, Zombie",
        "mType": "I",
        "stats": [
          "5",
          "5+",
          "-",
          "2+"
        ]
      },
      {
        "name": "Ghouls",
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
          70,
          110,
          180
        ],
        "unlocks": [],
        "special": "Lifeleech (1), Wild Charge (D3)",
        "options": [],
        "ovals": [],
        "keywords": "Cannibal",
        "mType": "I",
        "stats": [
          "6",
          "4+",
          "-",
          "3+"
        ]
      },
      {
        "name": "Wraiths",
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
          "-/12",
          "-/16"
        ],
        "values": [
          120,
          185
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Fly, Lifeleech (1), Nimble, Shambling, Strider",
        "options": [],
        "ovals": [],
        "keywords": "Phantasm",
        "mType": "I",
        "stats": [
          "7",
          "4+",
          "-",
          "6+"
        ]
      },
      {
        "name": "Skeleton Spearmen",
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
          "-/11",
          "-/15",
          "-/22"
        ],
        "values": [
          70,
          105,
          175
        ],
        "unlocks": [],
        "special": "Lifeleech (1), Phalanx, Shambling",
        "options": [
          "Undead Giant Rats"
        ],
        "ovals": [
          10
        ],
        "keywords": "Skeleton",
        "mType": "I",
        "stats": [
          "5",
          "5+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Revenants",
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
          "-/13",
          "-/17",
          "-/24"
        ],
        "values": [
          80,
          125,
          205
        ],
        "unlocks": [],
        "special": "Lifeleech (1), Shambling",
        "options": [
          "Undead Giant Rats"
        ],
        "ovals": [
          10
        ],
        "keywords": "Revenant, Skeleton",
        "mType": "I",
        "stats": [
          "5",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Mummies",
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
          "-/14",
          "-/18"
        ],
        "values": [
          115,
          180
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Lifeleech (1), Regeneration (5+), Shambling",
        "options": [],
        "ovals": [],
        "keywords": "Mummy",
        "mType": "I",
        "stats": [
          "5",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Soul Reaver Infantry",
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
          "20",
          "25"
        ],
        "nerve": [
          "11/13",
          "15/17"
        ],
        "values": [
          165,
          250
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Lifeleech (2)",
        "options": [],
        "ovals": [],
        "keywords": "Vampiric",
        "mType": "I",
        "stats": [
          "6",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Skeleton Archers*",
        "irregular": 1,
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
          "-/11",
          "-/15",
          "-/22"
        ],
        "values": [
          70,
          95,
          165
        ],
        "unlocks": [],
        "special": "Lifeleech (1), Shambling, Bows: 24”",
        "options": [
          "Undead Giant Rats"
        ],
        "ovals": [
          10
        ],
        "keywords": "Skeleton",
        "mType": "I",
        "stats": [
          "5",
          "6+",
          "5+",
          "3+"
        ]
      },
      {
        "name": "Revenant Cavalry",
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
          "-/14",
          "-/17",
          "-/24"
        ],
        "values": [
          105,
          165,
          280
        ],
        "unlocks": [],
        "special": "Lifeleech (1), Shambling, Thunderous Charge (2)",
        "options": [],
        "ovals": [],
        "keywords": "Revenant, Skeleton",
        "mType": "C",
        "stats": [
          "8",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Werewolves",
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
          155,
          255
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Lifeleech (1), Nimble",
        "options": [],
        "ovals": [],
        "keywords": "Beast, Lycanthrope",
        "mType": "LI",
        "stats": [
          "9",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Zombie Trolls",
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
          "-/14",
          "-/17"
        ],
        "values": [
          115,
          190
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Lifeleech (1), Shambling",
        "options": [],
        "ovals": [],
        "keywords": "Troll, Zombie",
        "mType": "LI",
        "stats": [
          "6",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Deathpack*",
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
          "1",
          "1"
        ],
        "att": [
          "12",
          "24"
        ],
        "nerve": [
          "10/12",
          "13/15"
        ],
        "values": [
          75,
          125
        ],
        "unlocks": [],
        "special": "Lifeleech (2), Nimble, Stealthy, Vicious (Melee)",
        "options": [],
        "ovals": [],
        "keywords": "Beast",
        "mType": "S",
        "stats": [
          "6",
          "5+",
          "-",
          "2+"
        ]
      },
      {
        "name": "Soul Reaver Cavalry",
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
          "10",
          "20"
        ],
        "nerve": [
          "12/14",
          "15/17"
        ],
        "values": [
          165,
          250
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Lifeleech (2), Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "keywords": "Vampiric",
        "mType": "C",
        "stats": [
          "8",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Wights*",
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
          155,
          260
        ],
        "unlocks": [],
        "special": "Brutal, Crushing Strength (2), Fly, Lifeleech (1), Shambling",
        "options": [],
        "ovals": [],
        "keywords": "Phantasm",
        "mType": "LI",
        "stats": [
          "7",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Balefire Catapult",
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
          "-/11"
        ],
        "values": [
          95
        ],
        "unlocks": [],
        "special": "Shambling, Balefire: 48”, Blast (D3+1), Ignores Cover, Indirect, Piercing (2), Reload, Unholy Flames: Whenever the unit rolls to damage with its Balefire attack it can re-roll (D3) of the dice that failed to damage.",
        "options": [],
        "ovals": [],
        "keywords": "Skeleton",
        "mType": "W",
        "stats": [
          "5",
          "-",
          "5+",
          "4+"
        ]
      },
      {
        "name": "Goreblight",
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
          "D6+6"
        ],
        "nerve": [
          "-/17"
        ],
        "values": [
          175
        ],
        "unlocks": [],
        "special": "Cloak of Death, Crushing Strength (2), Lifeleech (1), Shambling",
        "options": [],
        "ovals": [],
        "keywords": "Zombie",
        "mType": "M",
        "stats": [
          "6",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Vampire on Undead Pegasus",
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
          "14/16"
        ],
        "values": [
          215
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Fly, Inspiring, Lifeleech (2), Nimble. Spellcaster: 1",
        "options": [
          "Drain Life (4)",
          "Lightning Bolt (3)",
          "Surge (4)"
        ],
        "ovals": [
          20,
          20,
          10
        ],
        "keywords": "Vampiric",
        "mType": "LC",
        "stats": [
          "10",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Ghoul Ghast",
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
          95
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Individual, Inspiring (Cannibal only), Lifeleech (2), Wild Charge (D3)",
        "options": [],
        "ovals": [],
        "keywords": "Cannibal",
        "mType": "I",
        "stats": [
          "6",
          "3+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Lykanis",
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
          150
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Inspiring (Lycanthrope only), Lifeleech (1), Nimble",
        "options": [],
        "ovals": [],
        "keywords": "Beast, Lycanthrope",
        "mType": "LI",
        "stats": [
          "9",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Vampire Lord",
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
          "14/16"
        ],
        "values": [
          165
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Duelist, Individual, Inspiring, Lifeleech (2), Mighty. Spellcaster: 1",
        "options": [
          "Mount on an Undead Horse, increasing Speed to 8 and changing to Hero (Cav - Height: 3)",
          "Drain Life (4)",
          "Lightning Bolt (3)",
          "Surge (4)"
        ],
        "ovals": [
          35,
          20,
          20,
          10
        ],
        "keywords": "Vampiric",
        "mType": "I",
        "stats": [
          "6",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Revenant King",
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
          "-/14"
        ],
        "values": [
          80
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Individual, Inspiring, Lifeleech (1). Spellcaster: 0",
        "options": [
          "Mount on an Undead Horse, increasing Speed to 8 and changing to Hero (Cav - Height: 3)",
          "Surge (5)"
        ],
        "ovals": [
          25,
          10
        ],
        "keywords": "Revenant, Skeleton",
        "mType": "I",
        "stats": [
          "5",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Liche King",
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
          "-/14"
        ],
        "values": [
          155
        ],
        "unlocks": [],
        "special": "Fly, Individual, Inspiring, Regeneration (5+) Spells: Surge (10). Spellcaster: 3",
        "options": [
          "Bane Chant (3)",
          "Drain Life (7)",
          "Heal (6) (replaces Surge)",
          "Heal (6)",
          "Icy Breath (10)",
          "Lightning Bolt (5)",
          "Blizzard (3) [1]"
        ],
        "ovals": [
          30,
          35,
          0,
          40,
          30,
          35,
          40
        ],
        "keywords": "Phantasm",
        "mType": "I",
        "stats": [
          "7",
          "5+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Vampire Lord on Undead Dragon",
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
        "special": "Crushing Strength (3), Fly, Inspiring, Lifeleech (2), Nimble Spells: Icy Breath (10). Spellcaster: 0",
        "options": [
          "Heal (4)",
          "Lightning Bolt (4)",
          "Surge (8)"
        ],
        "ovals": [
          15,
          15,
          15
        ],
        "keywords": "Draconic, Vampiric",
        "mType": "Ti",
        "stats": [
          "10",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Revenant King on Undead Great Flying Wyrm",
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
          250
        ],
        "unlocks": [],
        "special": "Crushing Strength (3), Fly, Inspiring, Lifeleech (1), Nimble. Spellcaster: 0",
        "options": [
          "Gain the ranged attack - Plagued Breath: 12”, Ra: 4+, Steady Aim",
          "Surge (8)"
        ],
        "ovals": [
          15,
          15
        ],
        "keywords": "Draconic, Revenant, Skeleton",
        "mType": "Ti",
        "stats": [
          "10",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Revenant on Undead Great Burrowing Wyrm",
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
          "12"
        ],
        "nerve": [
          "-/18"
        ],
        "values": [
          220
        ],
        "unlocks": [],
        "special": "Brutal, Crushing Strength (3), Lifeleech (1), Strider",
        "options": [
          "Gain the ranged attack - Plagued Breath: 12”, Ra: 4+, Steady Aim"
        ],
        "ovals": [
          15
        ],
        "keywords": "Revenant, Skeleton",
        "mType": "Ti",
        "stats": [
          "7",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Cursed Pharaoh",
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
          "14/16"
        ],
        "values": [
          155
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Individual, Inspiring, Lifeleech (1), Mighty, Regeneration (5+) Spells: Surge (5). Spellcaster: 1",
        "options": [],
        "ovals": [],
        "keywords": "Mummy",
        "mType": "I",
        "stats": [
          "5",
          "3+",
          "-",
          "6+"
        ]
      },
      {
        "name": "Necromancer",
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
        "special": "Individual Spells: Surge (6). Spellcaster: 1",
        "options": [
          "Mount on an Undead Horse, increasing Speed to 8 and changing to Hero (Cav - Height: 3)",
          "Aura (Vicious (Melee) - Zombie only) This upgrade cannot be taken in addition to an Undead Horse Mount.",
          "Heal (3) (replaces Surge)",
          "Heal (3)",
          "Bane Chant (2)",
          "Drain Life (5)",
          "Weakness (2)"
        ],
        "ovals": [
          25,
          20,
          0,
          20,
          20,
          25,
          15
        ],
        "keywords": "Heretic",
        "mType": "I",
        "stats": [
          "5",
          "5+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Mhorgoth the Faceless [1]",
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
          "14/16"
        ],
        "values": [
          230
        ],
        "unlocks": [],
        "special": "Dread, Fly, Individual, Regeneration (5+), Very Inspiring, Unholy Levitation: The unit can move At the Double and make ranged attacks as if it had Advanced that turn. Spells: Bane Chant (3), Drain Life (9), Mind Fog (3), Surge (10). Spellcaster: 3",
        "options": [],
        "ovals": [],
        "keywords": "Heretic, Phantasm",
        "mType": "I",
        "stats": [
          "10",
          "5+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Lady Ilona [1]",
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
          "8"
        ],
        "nerve": [
          "14/16"
        ],
        "values": [
          280
        ],
        "unlocks": [],
        "special": "Crushing Strength (3), Duelist, Individual, Inspiring, Lifeleech (2), Mighty, The Promise of Love Eternal: Enemy Heroes attacking Lady Ilona receive -1 to hit in melee. Spells: Enthral (5), Heal (3), Lightning Bolt (3), Surge (3). Spellcaster: 1",
        "options": [],
        "ovals": [],
        "keywords": "Vampiric",
        "mType": "I",
        "stats": [
          "7",
          "3+",
          "-",
          "6+"
        ]
      },
      {
        "name": "Jarvis [1]",
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
          "12/14"
        ],
        "values": [
          140
        ],
        "unlocks": [],
        "special": "Individual, Very Inspiring, Ophidian Book of Secrets: Jarvis adds 6” to the range of his Bane, Chant, Heal, Lightning Bolt and Surge spells. The Noble Dead: When Jarvis is included in an Undead army, the entire army’s alignment changes to Good, but no other Unique Heroes may be included in the army. Spells: Bane Chant (2), Heal (3), Lightning Bolt (3), Surge (8). Spellcaster: 1",
        "options": [],
        "ovals": [],
        "keywords": "Heretic",
        "mType": "I",
        "stats": [
          "5",
          "5+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Undead Army Standard Bearer",
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
          "-/11"
        ],
        "values": [
          50
        ],
        "unlocks": [],
        "special": "Individual, Inspiring, Lifeleech (1)",
        "options": [
          "Mount on an Undead Horse, increasing Speed to 8 and changing to Hero (Cav - Height: 3)"
        ],
        "ovals": [
          25
        ],
        "keywords": "Skeleton",
        "mType": "I",
        "stats": [
          "5",
          "5+",
          "-",
          "4+"
        ]
      }
    ]
  },
  {
    "faction": "Forces of the Abyss",
    "alignment": 2,
    "units": [
      {
        "name": "Lower Abyssals",
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
          75,
          115,
          190
        ],
        "unlocks": [],
        "special": "Fury, Regeneration (5+)",
        "options": [
          "Exchange shields for two-handed weapons, lowering Defence to 3+ and gaining Crushing Strength (1)",
          "Sacrificial Imp"
        ],
        "ovals": [
          {
            "T": 5,
            "R": 5,
            "H": 10
          },
          {
            "T": 5,
            "R": 10,
            "H": 15
          }
        ],
        "keywords": "Abyssal",
        "mType": "I",
        "stats": [
          "5",
          "4+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Abyssal Guard",
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
          "-/12",
          "-/16"
        ],
        "values": [
          105,
          160
        ],
        "unlocks": [],
        "special": "Regeneration (5+)",
        "options": [
          "Exchange shields for two-handed weapons, lowering Defence to 4+ and gaining Crushing Strength (1)",
          "Sacrificial Imp"
        ],
        "ovals": [
          0,
          {
            "T": 5,
            "R": 10
          }
        ],
        "keywords": "Abyssal",
        "mType": "I",
        "stats": [
          "5",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Succubi",
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
          "15",
          "20"
        ],
        "nerve": [
          "10/12",
          "14/16"
        ],
        "values": [
          105,
          165
        ],
        "unlocks": [],
        "special": "Ensnare, Fury, Stealthy",
        "options": [
          "Upgrade with a Succubi Lurker, gaining Pathfinder"
        ],
        "ovals": [
          {
            "T": 15,
            "R": 20
          }
        ],
        "keywords": "Abyssal, Succubi",
        "mType": "I",
        "stats": [
          "6",
          "3+",
          "-",
          "3+"
        ]
      },
      {
        "name": "Gargoyles*",
        "irregular": 1,
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
          "10"
        ],
        "nerve": [
          "8/10"
        ],
        "values": [
          85
        ],
        "unlocks": [],
        "special": "Fly, Nimble, Regeneration (4+)",
        "options": [],
        "ovals": [],
        "keywords": "Gargoyle",
        "mType": "HI",
        "stats": [
          "10",
          "4+",
          "-",
          "3+"
        ]
      },
      {
        "name": "Succubi Larvae*",
        "irregular": 1,
        "limit": 0,
        "unitType": [
          "H",
          "L"
        ],
        "models": [
          "40",
          "60"
        ],
        "unitStrength": [
          "3",
          "4"
        ],
        "att": [
          "25",
          "30"
        ],
        "nerve": [
          "-/21",
          "-/27"
        ],
        "values": [
          150,
          215
        ],
        "unlocks": [],
        "special": "Ensnare",
        "options": [],
        "ovals": [],
        "keywords": "Expendable, Succubi",
        "mType": "I",
        "stats": [
          "5",
          "6+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Abyssal Ghouls",
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
          65,
          90,
          150
        ],
        "unlocks": [],
        "special": "Fury",
        "options": [],
        "ovals": [],
        "keywords": "Abyssal, Cannibal, Expendable",
        "mType": "I",
        "stats": [
          "5",
          "5+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Tortured Souls*",
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
        "special": "Crushing Strength (1), Fly, Lifeleech (2)",
        "options": [],
        "ovals": [],
        "keywords": "Phantasm",
        "mType": "S",
        "stats": [
          "8",
          "4+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Molochs",
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
          "13/15",
          "16/18"
        ],
        "values": [
          135,
          225
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Fury, Regeneration (5+)",
        "options": [
          "Upgrade with a Despoiler Champion, gaining Fearless and Brutal",
          "Sacrificial Imp"
        ],
        "ovals": [
          {
            "R": 15,
            "H": 20
          },
          {
            "R": 10,
            "H": 15
          }
        ],
        "keywords": "Abyssal, Moloch",
        "mType": "MI",
        "stats": [
          "6",
          "3+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Abyssal Horsemen",
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
          "9",
          "18"
        ],
        "nerve": [
          "11/13",
          "14/16"
        ],
        "values": [
          155,
          240
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Fury, Regeneration (5+), Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "keywords": "Hellequin",
        "mType": "C",
        "stats": [
          "8",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Hellhounds*",
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
          "12",
          "24"
        ],
        "nerve": [
          "10/12",
          "13/15"
        ],
        "values": [
          120,
          185
        ],
        "unlocks": [],
        "special": "Fury, Nimble, Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "keywords": "Beast",
        "mType": "C",
        "stats": [
          "9",
          "4+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Imps*",
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
          "1",
          "1"
        ],
        "att": [
          "12",
          "24"
        ],
        "nerve": [
          "10/12",
          "13/15"
        ],
        "values": [
          65,
          110
        ],
        "unlocks": [],
        "special": "Fury, Vicious (Melee)",
        "options": [],
        "ovals": [],
        "keywords": "Imp",
        "mType": "S",
        "stats": [
          "5",
          "5+",
          "-",
          "3+"
        ]
      },
      {
        "name": "Flamebearers*",
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
          "9/11",
          "13/15"
        ],
        "values": [
          115,
          155
        ],
        "unlocks": [],
        "special": "Regeneration (5+), Firebolts: 18”, Piercing (1), Steady Aim",
        "options": [
          "Sacrificial Imp"
        ],
        "ovals": [
          {
            "T": 5,
            "R": 10
          }
        ],
        "keywords": "Abyssal, Flamebound",
        "mType": "I",
        "stats": [
          "5",
          "5+",
          "4+",
          "3+"
        ]
      },
      {
        "name": "Chroneas",
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
          "D6+6"
        ],
        "nerve": [
          "-/18"
        ],
        "values": [
          215
        ],
        "unlocks": [],
        "special": "Cloak of Death, Crushing Strength (3), Strider. Spellcaster: 0",
        "options": [
          "Drain Life (8)"
        ],
        "ovals": [
          30
        ],
        "keywords": "Enigma",
        "mType": "M",
        "stats": [
          "6",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Abyssal Champion",
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
          110
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Fury, Individual, Inspiring, Mighty, Regeneration (5+). Spellcaster: 0",
        "options": [
          "Upgrade with Wings, increasing Speed to 10 and gaining Fly",
          "Lightning Bolt (5)"
        ],
        "ovals": [
          45,
          35
        ],
        "keywords": "Abyssal",
        "mType": "I",
        "stats": [
          "5",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Archfiend of the Abyss",
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
          "16/18"
        ],
        "values": [
          310
        ],
        "unlocks": [],
        "special": "Brutal, Crushing Strength (3), Fly, Fury, Inspiring, Nimble, Vicious (Melee) Spells: Fireball (10). Spellcaster: 0",
        "options": [],
        "ovals": [],
        "keywords": "Abyssal, Warmaster",
        "mType": "Ti",
        "stats": [
          "10",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Despoiler Champion",
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
          "-/14"
        ],
        "values": [
          130
        ],
        "unlocks": [],
        "special": "Brutal, Crushing Strength (2), Nimble, Regeneration (5+), Vicious (Melee)",
        "options": [],
        "ovals": [],
        "keywords": "Abomination, Abyssal",
        "mType": "LC",
        "stats": [
          "6",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Abyssal Harbinger",
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
          "2"
        ],
        "nerve": [
          "10/12"
        ],
        "values": [
          65
        ],
        "unlocks": [],
        "special": "Individual, Inspiring, Regeneration (5+), Firebolt: 18”, Piercing (1)",
        "options": [
          "Mount on an Abyssal Mount, increasing Speed to 8 and changing to Hero (Cav - Height: 3)"
        ],
        "ovals": [
          25
        ],
        "keywords": "Abyssal",
        "mType": "I",
        "stats": [
          "5",
          "5+",
          "4+",
          "4+"
        ]
      },
      {
        "name": "Abyssal Fiend",
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
          "7"
        ],
        "nerve": [
          "15/17"
        ],
        "values": [
          175
        ],
        "unlocks": [],
        "special": "Brutal, Crushing Strength (2), Fury, Inspiring, Vicious (Melee) Spells: Fireball (10). Spellcaster: 0",
        "options": [],
        "ovals": [],
        "keywords": "Abyssal, Warmaster",
        "mType": "Ti",
        "stats": [
          "7",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Seductress",
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
          "11/13"
        ],
        "values": [
          130
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Duelist, Ensnare, Fly, Fury, Individual, Inspiring (Succubi only), Stealthy. Spellcaster: 1",
        "options": [
          "Bane Chant (2)",
          "Enthral (6)",
          "Wind Blast (6)"
        ],
        "ovals": [
          15,
          35,
          30
        ],
        "keywords": "Abyssal, Succubi",
        "mType": "I",
        "stats": [
          "10",
          "3+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Efreet",
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
          115
        ],
        "unlocks": [],
        "special": "Individual Spells: Fireball (15). Spellcaster: 0",
        "options": [],
        "ovals": [],
        "keywords": "Abyssal, Flamebound",
        "mType": "I",
        "stats": [
          "7",
          "5+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Hellequin Blood-Masque",
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
          85
        ],
        "unlocks": [],
        "special": "Crushing Strength (1),Individual, Fury, Regeneration (5+), Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "keywords": "Hellequin",
        "mType": "C",
        "stats": [
          "8",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Abyssal Warlock",
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
          "11/13"
        ],
        "values": [
          90
        ],
        "unlocks": [],
        "special": "Fury, Inspiring, Nimble, Regeneration (5+), Firebolt: 18”, Piercing (1), Steady Aim. Spellcaster: 2",
        "options": [
          "Bane Chant (2)",
          "Drain Life (6)",
          "Bloodboil [1]",
          "Veil of Shadows (2) [1]"
        ],
        "ovals": [
          20,
          30,
          30,
          25
        ],
        "keywords": "Abyssal",
        "mType": "LI",
        "stats": [
          "6",
          "4+",
          "4+",
          "4+"
        ]
      },
      {
        "name": "Ba’su’su the Vile [1]",
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
          "7"
        ],
        "nerve": [
          "14/16"
        ],
        "values": [
          210
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Fly, Individual, Inspiring (Gargoyle only), Mighty, Regeneration (5+)",
        "options": [],
        "ovals": [],
        "keywords": "Abomination, Gargoyle",
        "mType": "HI",
        "stats": [
          "10",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Mau’ti-bu-su [1]",
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
          "12/14"
        ],
        "values": [
          160
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Duelist, Ensnare, Fly, Fury, Individual, Inspiring, Stealthy, Terrible Majesty: The unit has Brutal (D3).",
        "options": [],
        "ovals": [],
        "keywords": "Abyssal, Succubi",
        "mType": "I",
        "stats": [
          "10",
          "3+",
          "-",
          "4+"
        ]
      },
      {
        "name": "The Well of Souls [1]",
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
          "-/20"
        ],
        "values": [
          300
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Fly, Inspiring, Lifeleech (3), Nimble, Strider, Soul Drain: When the Well of Souls is given an order, it may put up to 20 points of damage on itself. However, this cannot take it to more than 20 damage in total. For each point of damage taken in this way, it may remove one point of damage from a Friendly Core unit within 9”. The Well of Souls will not take a Nerve test for damage taken in this way.",
        "options": [],
        "ovals": [],
        "keywords": "Phantasm, Shrine, Well of Souls",
        "mType": "M",
        "stats": [
          "8",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Manifestation of Ba’el [1]",
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
          "14/16"
        ],
        "values": [
          265
        ],
        "unlocks": [],
        "special": "Brutal, Crushing Strength (2), Fly, Nimble, Fury, Inspiring, Regeneration, (5+), Stealthy, Vicious (Melee), From the Pit I Curse Thee!: This ability is a ranged attack that can be used once per game. When this ranged attack is used, all enemy units within 6” of Ba’el become Disordered. Spells: Lightning Bolt (7). Spellcaster: 0",
        "options": [],
        "ovals": [],
        "keywords": "Abyssal, Wicked One",
        "mType": "M",
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
    "faction": "Empire of Dust",
    "alignment": 2,
    "units": [
      {
        "name": "Skeleton Warriors",
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
          "10",
          "12",
          "25"
        ],
        "nerve": [
          "-/11",
          "-/15",
          "-/22"
        ],
        "values": [
          55,
          85,
          140
        ],
        "unlocks": [],
        "special": "Lifeleech (1), Shambling",
        "options": [
          "Casket of the Damned"
        ],
        "ovals": [
          10
        ],
        "keywords": "Expendable, Skeleton",
        "mType": "I",
        "stats": [
          "5",
          "5+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Skeleton Spearmen",
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
          "-/11",
          "-/15",
          "-/22"
        ],
        "values": [
          70,
          105,
          175
        ],
        "unlocks": [],
        "special": "Lifeleech (1), Phalanx, Shambling",
        "options": [
          "Casket of the Damned"
        ],
        "ovals": [
          10
        ],
        "keywords": "Skeleton",
        "mType": "I",
        "stats": [
          "5",
          "5+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Revenants",
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
          "-/13",
          "-/17",
          "-/24"
        ],
        "values": [
          80,
          125,
          205
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Lifeleech (1), Shambling",
        "options": [
          "Casket of the Damned"
        ],
        "ovals": [
          10
        ],
        "keywords": "Revenant, Skeleton",
        "mType": "I",
        "stats": [
          "5",
          "4+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Mummies",
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
          "-/14",
          "-/18"
        ],
        "values": [
          115,
          180
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Lifeleech (1), Regeneration (5+), Shambling",
        "options": [
          "Casket of the Damned"
        ],
        "ovals": [
          10
        ],
        "keywords": "Mummy",
        "mType": "I",
        "stats": [
          "5",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Skeleton Archers*",
        "irregular": 1,
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
          "-/11",
          "-/15",
          "-/22"
        ],
        "values": [
          70,
          95,
          165
        ],
        "unlocks": [],
        "special": "Lifeleech (1), Shambling, Bows: 24”",
        "options": [],
        "ovals": [],
        "keywords": "Skeleton",
        "mType": "I",
        "stats": [
          "5",
          "6+",
          "5+",
          "3+"
        ]
      },
      {
        "name": "Skeleton Deadeye Crossbows*",
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
          "-/11",
          "-/15"
        ],
        "values": [
          90,
          120
        ],
        "unlocks": [],
        "special": "Lifeleech (1), Shambling, Crossbows: 24”, Elite (Ranged), Piercing (1), Pot Shot",
        "options": [],
        "ovals": [],
        "keywords": "Skeleton",
        "mType": "I",
        "stats": [
          "5",
          "6+",
          "5+",
          "3+"
        ]
      },
      {
        "name": "Desert Swarm*",
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
          "1",
          "1"
        ],
        "att": [
          "9",
          "18"
        ],
        "nerve": [
          "-/12",
          "-/15"
        ],
        "values": [
          60,
          100
        ],
        "unlocks": [],
        "special": "Lifeleech (1), Scout, Shambling",
        "options": [],
        "ovals": [],
        "keywords": "Carrion",
        "mType": "S",
        "stats": [
          "6",
          "5+",
          "-",
          "2+"
        ]
      },
      {
        "name": "Scavengers*",
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
          "1",
          "1"
        ],
        "att": [
          "9",
          "18"
        ],
        "nerve": [
          "11/13",
          "14/16"
        ],
        "values": [
          90,
          150
        ],
        "unlocks": [],
        "special": "Fly, Lifeleech (2), Nimble",
        "options": [],
        "ovals": [],
        "keywords": "Carrion",
        "mType": "S",
        "stats": [
          "10",
          "5+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Revenant Chariots*",
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
          "-/14",
          "-/16",
          "-/18",
          "-/22"
        ],
        "values": [
          120,
          150,
          190,
          220
        ],
        "unlocks": [],
        "special": "Lifeleech (1), Shambling, Thunderous Charge (2), Shortbows: 18”, Att: [4/6/8/10], Steady Aim",
        "options": [],
        "ovals": [],
        "keywords": "Revenant, Skeleton",
        "mType": "Ch",
        "stats": [
          "8",
          "4+",
          "5+",
          "4+"
        ]
      },
      {
        "name": "Cavalry",
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
          "-/14",
          "-/17"
        ],
        "values": [
          105,
          165
        ],
        "unlocks": [],
        "special": "Lifeleech (1), Shambling, Thunderous Charge (2)",
        "options": [],
        "ovals": [],
        "keywords": "Revenant, Skeleton",
        "mType": "C",
        "stats": [
          "8",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Skeleton Archer Cavalry*",
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
          "-/12",
          "-/15"
        ],
        "values": [
          100,
          155
        ],
        "unlocks": [],
        "special": "Lifeleech (1), Nimble, Shambling, Shortbows: 18”, Steady Aim",
        "options": [],
        "ovals": [],
        "keywords": "Skeleton",
        "mType": "C",
        "stats": [
          "9",
          "4+",
          "5+",
          "3+"
        ]
      },
      {
        "name": "Enslaved Guardians",
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
          "-/14",
          "-/17"
        ],
        "values": [
          135,
          225
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Lifeleech (1), Shambling. Spellcaster: 0",
        "options": [
          "Wind Blast (5)",
          "Casket of the Damned"
        ],
        "ovals": [
          20,
          10
        ],
        "keywords": "Airbound, Construct, Djinn",
        "mType": "LI",
        "stats": [
          "6",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Bone Giant",
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
          "D6+6"
        ],
        "nerve": [
          "-/18"
        ],
        "values": [
          190
        ],
        "unlocks": [],
        "special": "Brutal, Crushing Strength (3), Lifeleech (1), Shambling, Strider",
        "options": [],
        "ovals": [],
        "keywords": "Giant, Skeleton",
        "mType": "M",
        "stats": [
          "7",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Monolith [1]",
        "irregular": 0,
        "limit": 1,
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
          "-"
        ],
        "nerve": [
          "-/17"
        ],
        "values": [
          120
        ],
        "unlocks": [],
        "special": "Inspiring, Note: Base size cannot be increased beyond 75x75mm, Monolith: As long as this unit is alive and in play on the table, at the start of each of your ranged phases you may immediately cast Surge (8) on a single Friendly Core unit anywhere within 24” of this unit regardless of line of sight. The Monolith cannot be disordered and its Base size cannot be increased beyond 75x75mm... Spellcaster: 0",
        "options": [],
        "ovals": [],
        "keywords": "Construct, Shrine",
        "mType": "Ti",
        "stats": [
          "5",
          "-",
          "-",
          "5+"
        ]
      },
      {
        "name": "Undead Wyrm",
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
          "-/18"
        ],
        "values": [
          215
        ],
        "unlocks": [],
        "special": "Crushing Strength (3), Fly, Lifeleech (1), Nimble, Shambling",
        "options": [],
        "ovals": [],
        "keywords": "Draconic, Skeleton",
        "mType": "Ti",
        "stats": [
          "10",
          "4+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Reanimated Behemoth",
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
          "9"
        ],
        "nerve": [
          "-/16"
        ],
        "values": [
          190
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Lifeleech (1), Shambling, Strider. Spellcaster: 0",
        "options": [
          "Drain Life (6)"
        ],
        "ovals": [
          30
        ],
        "keywords": "Construct, Skeleton",
        "mType": "M",
        "stats": [
          "6",
          "4+",
          "-",
          "6+"
        ]
      },
      {
        "name": "Enslaved Guardian Archers*",
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
          "1",
          "2"
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
          140,
          235
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Lifeleech (1), Shambling, Heavy Crossbows: 30”, Piercing (2), Pot Shot",
        "options": [
          "Casket of the Damned"
        ],
        "ovals": [
          10
        ],
        "keywords": "Airbound, Construct, Djinn",
        "mType": "LI",
        "stats": [
          "6",
          "4+",
          "5+",
          "4+"
        ]
      },
      {
        "name": "Empire of Dust Balefire Catapult",
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
          "-/11"
        ],
        "values": [
          95
        ],
        "unlocks": [],
        "special": "Shambling, Balefire: 48”, Blast (D3+1), Ignores Cover, Indirect, Piercing (2), Reload, Unholy Flames: Whenever the unit rolls to damage with its Balefire attack, it can re-roll D3 of the dice that failed to damage.",
        "options": [
          "Upgrade with Scarab Jars, gaining Shattering with Balefire attacks"
        ],
        "ovals": [
          10
        ],
        "keywords": "Construct, Skeleton",
        "mType": "W",
        "stats": [
          "5",
          "-",
          "5+",
          "4+"
        ]
      },
      {
        "name": "Revenant Champion",
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
          "-/14"
        ],
        "values": [
          65
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Individual, Inspiring (Revenant only), Lifeleech (1)",
        "options": [
          "Mount on an Undead Horse, increasing Speed to 8 and changing to Hero (Cav - Height: 3)"
        ],
        "ovals": [
          25
        ],
        "keywords": "Revenant, Skeleton",
        "mType": "I",
        "stats": [
          "5",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Ahmunite Pharaoh",
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
          "-/16"
        ],
        "values": [
          160
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Individual, Inspiring, Lifeleech (1), Mighty, Regeneration (5+) Spells: Surge (8). Spellcaster: 2",
        "options": [
          "Eternal Guard [1] - Aura (Elite (Melee) - Mummy only). This unique upgrade cannot be taken in addition to a magical artefact."
        ],
        "ovals": [
          20
        ],
        "keywords": "Mummy, Royal Court",
        "mType": "I",
        "stats": [
          "5",
          "3+",
          "-",
          "6+"
        ]
      },
      {
        "name": "Ahmunite Pharaoh on Royal Chariot",
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
          "-/16"
        ],
        "values": [
          205
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Inspiring, Lifeleech (1), Nimble, Regeneration (5+), Thunderous Charge (1). Spellcaster: 2",
        "options": [
          "Surge (8)"
        ],
        "ovals": [
          30
        ],
        "keywords": "Mummy, Royal Court",
        "mType": "Ch",
        "stats": [
          "8",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Soul Snare [1]",
        "irregular": 0,
        "limit": 1,
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
          "-"
        ],
        "nerve": [
          "-/15"
        ],
        "values": [
          150
        ],
        "unlocks": [],
        "special": "Stealthy, Spells: Drain Life (9), Soul Snare: This unit’s Drain Life spell has a Range of 18”. You may also target friendly units within 12” instead of 6” for its damage removal component.. Spellcaster: 0",
        "options": [],
        "ovals": [],
        "keywords": "Construct, Miasma, Shrine",
        "mType": "W",
        "stats": [
          "5",
          "-",
          "-",
          "4+"
        ]
      },
      {
        "name": "Undead Army Standard Bearer",
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
          "-/11"
        ],
        "values": [
          50
        ],
        "unlocks": [],
        "special": "Individual, Inspiring, Lifeleech (1)",
        "options": [
          "Mount on an Undead Horse, increasing Speed to 8 and changing to Hero (Cav - Height: 3)"
        ],
        "ovals": [
          25
        ],
        "keywords": "Skeleton",
        "mType": "I",
        "stats": [
          "5",
          "5+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Cursed High Priest",
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
          "-/13"
        ],
        "values": [
          85
        ],
        "unlocks": [],
        "special": "Individual, Inspiring, Reanimator: When targeting friendly core Skeleton units, this unit can reroll up to two of the dice that failed to hit with Heal and Surge.. Spellcaster: 3",
        "options": [
          "Mount on an Undead Horse, increasing Speed to 8 and changing to Hero (Cav - Height: 3)",
          "Drain Life (7)",
          "Fireball (12)",
          "Heal (5)",
          "Hex (3)",
          "Surge (8)",
          "Weakness (3)",
          "Wind Blast (6)"
        ],
        "ovals": [
          25,
          35,
          35,
          35,
          15,
          30,
          20,
          25
        ],
        "keywords": "Skeleton",
        "mType": "I",
        "stats": [
          "5",
          "5+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Idol of Shobik [1]",
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
          "-/18"
        ],
        "values": [
          290
        ],
        "unlocks": [],
        "special": "Aura (Iron Resolve), Crushing Strength (3), Lifeleech (1), Shambling, Strider, Very Inspiring Spells: Heal (5). Spellcaster: 0",
        "options": [],
        "ovals": [],
        "keywords": "Construct, Giant, Old God",
        "mType": "M",
        "stats": [
          "7",
          "3+",
          "-",
          "6+"
        ]
      },
      {
        "name": "Apaphys, Champion of Death [1]",
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
          "-/19"
        ],
        "values": [
          360
        ],
        "unlocks": [],
        "special": "Cloak of Death, Crushing Strength (3), Fly, Lifeleech (1), Nimble, Very Inspiring, Winds of Death: Whenever this unit rolls to hit with Drain Life or Surge, it can re-roll all dice that score a natural, unmodified 1. Spells: Drain Life (7), Surge (8). Spellcaster: 0",
        "options": [],
        "ovals": [],
        "keywords": "Champion, Draconic, Immortal, Revenant, Skeleton",
        "mType": "Ti",
        "stats": [
          "10",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Revenant King on Undead Great Flying Wyrm",
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
          250
        ],
        "unlocks": [],
        "special": "Crushing Strength (3), Fly, Inspiring, Lifeleech (1), Nimble. Spellcaster: 0",
        "options": [
          "Gain the ranged attack - Plagued Breath: 12”, Ra: 4+, Steady Aim",
          "Surge (8)"
        ],
        "ovals": [
          15,
          15
        ],
        "keywords": "Draconic, Revenant, Skeleton",
        "mType": "Ti",
        "stats": [
          "10",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Revenant on Undead Great Burrowing Wyrm",
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
          "12"
        ],
        "nerve": [
          "-/18"
        ],
        "values": [
          220
        ],
        "unlocks": [],
        "special": "Brutal, Crushing Strength (3), Lifeleech (1), Strider",
        "options": [
          "Gain the ranged attack - Plagued Breath: 12”, Ra: 4+, Steady Aim"
        ],
        "ovals": [
          15
        ],
        "keywords": "Revenant, Skeleton",
        "mType": "Ti",
        "stats": [
          "7",
          "4+",
          "-",
          "5+"
        ]
      }
    ]
  },
  {
    "faction": "Abyssal Dwarfs",
    "alignment": 2,
    "units": [
      {
        "name": "Blacksouls",
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
          75,
          115,
          190
        ],
        "unlocks": [],
        "special": "Vicious (Melee)",
        "options": [
          "Exchange shields for two-handed weapons, lowering Defence to 4+ and gaining Crushing Strength (1)",
          "Throwing Mastiff"
        ],
        "ovals": [
          0,
          15
        ],
        "keywords": "Dwarf",
        "mType": "I",
        "stats": [
          "4",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Immortal Guard",
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
          "-/13",
          "-/17"
        ],
        "values": [
          105,
          160
        ],
        "unlocks": [],
        "special": "Regeneration (5+), Vicious (Melee)",
        "options": [
          "Throwing Mastiff"
        ],
        "ovals": [
          15
        ],
        "keywords": "Dwarf, Hellforged, Immortal",
        "mType": "I",
        "stats": [
          "4",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Abyssal Berserkers",
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
          "12",
          "15"
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
        "special": "Crushing Strength (1), Vicious (Melee), Wild Charge (D3)",
        "options": [],
        "ovals": [],
        "keywords": "Berserker, Dwarf",
        "mType": "I",
        "stats": [
          "5",
          "3+",
          "-",
          "3+"
        ]
      },
      {
        "name": "Slave Orcs*",
        "irregular": 1,
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
          "10",
          "12",
          "25"
        ],
        "nerve": [
          "8/10",
          "12/14",
          "19/21"
        ],
        "values": [
          60,
          95,
          155
        ],
        "unlocks": [],
        "special": "Crushing Strength (1)",
        "options": [],
        "ovals": [],
        "keywords": "Orc, Slave",
        "mType": "HI",
        "stats": [
          "5",
          "5+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Gargoyles*",
        "irregular": 1,
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
          "10"
        ],
        "nerve": [
          "8/10"
        ],
        "values": [
          85
        ],
        "unlocks": [],
        "special": "Fly, Nimble, Regeneration (4+)",
        "options": [],
        "ovals": [],
        "keywords": "Gargoyle",
        "mType": "HI",
        "stats": [
          "10",
          "4+",
          "-",
          "3+"
        ]
      },
      {
        "name": "Decimators",
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
          115,
          155,
          260
        ],
        "unlocks": [],
        "special": "Blunderbuss: 12”, Piercing (1), Steady Aim, Vicious (Ranged)",
        "options": [
          "Regiments & Hordes only - Gain the alternate single use ranged attack - Mobile Katsuchan: 24”, Att: 3, Ra: 4+, Blast (D3), Indirect, Reload, Vicious (Ranged)"
        ],
        "ovals": [
          20
        ],
        "keywords": "Dwarf",
        "mType": "I",
        "stats": [
          "4",
          "4+",
          "4+",
          "4+"
        ]
      },
      {
        "name": "Abyssal Halfbreeds",
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
          130,
          200
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Regeneration (5+), Thunderous Charge (1), Vicious (Melee)",
        "options": [],
        "ovals": [],
        "keywords": "Abomination",
        "mType": "C",
        "stats": [
          "8",
          "3+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Lesser Obsidian Golems",
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
          "-/14",
          "-/17"
        ],
        "values": [
          130,
          215
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Shambling, Vicious (Melee)",
        "options": [
          "Upgrade with a Charnox, gaining the ranged attack - Magma Cannon: 12”, Att: 8, Ra: 4+, Piercing (1), Steady Aim"
        ],
        "ovals": [
          30
        ],
        "keywords": "Hellforged",
        "mType": "MI",
        "stats": [
          "5",
          "4+",
          "-",
          "6+"
        ]
      },
      {
        "name": "Abyssal Grotesques",
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
          "13/15",
          "16/18"
        ],
        "values": [
          145,
          245
        ],
        "unlocks": [],
        "special": "Brutal, Crushing Strength (1), Regeneration (5+), Thunderous Charge (2), Vicious (Melee)",
        "options": [],
        "ovals": [],
        "keywords": "Abomination",
        "mType": "LC",
        "stats": [
          "7",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Mutated Mastiff Hunting Pack*",
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
          65
        ],
        "unlocks": [],
        "special": "Crushing Strength (1 - Cavalry only), Vicious (Melee)",
        "options": [
          "Throwing Mastiff"
        ],
        "ovals": [
          15
        ],
        "keywords": "Abomination",
        "mType": "S",
        "stats": [
          "6",
          "4+",
          "-",
          "2+"
        ]
      },
      {
        "name": "Slave Orc Gore Riders*",
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
          "8",
          "16"
        ],
        "nerve": [
          "9/11",
          "12/14"
        ],
        "values": [
          90,
          140
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "keywords": "Orc, Slave",
        "mType": "C",
        "stats": [
          "8",
          "4+",
          "-",
          "4+"
        ]
      },
      {
        "name": "G’rog Mortar",
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
          95
        ],
        "unlocks": [],
        "special": "G’rog Mortar: 48”, Blast (D3+1), Ignores Cover, Indirect, Piercing (2), Reload, Vicious (Ranged)",
        "options": [],
        "ovals": [],
        "keywords": "Dwarf, Hellforged",
        "mType": "W",
        "stats": [
          "4",
          "-",
          "5+",
          "5+"
        ]
      },
      {
        "name": "Katsuchan Rocket Launcher",
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
          "3"
        ],
        "nerve": [
          "10/12"
        ],
        "values": [
          85
        ],
        "unlocks": [],
        "special": "Katsuchan Rocket Launcher: 48”, Blast (D3), Ignores Cover, Indirect, Piercing (1), Reload, Vicious (Ranged)",
        "options": [],
        "ovals": [],
        "keywords": "Dwarf, Hellforged",
        "mType": "W",
        "stats": [
          "4",
          "-",
          "5+",
          "5+"
        ]
      },
      {
        "name": "Angkor Heavy Mortar",
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
          115
        ],
        "unlocks": [],
        "special": "Angkor Heavy Mortar: 48”, Blast (D3+2), Ignores Cover, Indirect, Piercing (3), Reload, Shattering, Vicious (Ranged)",
        "options": [],
        "ovals": [],
        "keywords": "Dwarf, Hellforged",
        "mType": "W",
        "stats": [
          "4",
          "-",
          "5+",
          "5+"
        ]
      },
      {
        "name": "‘Dragon’ Fire-Team",
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
          85
        ],
        "unlocks": [],
        "special": "Nimble, Blackfire-gun: 12”, Steady Aim, Vicious (Ranged)",
        "options": [],
        "ovals": [],
        "keywords": "Dwarf, Hellforged",
        "mType": "W",
        "stats": [
          "4",
          "-",
          "4+",
          "4+"
        ]
      },
      {
        "name": "Greater Obsidian Golem",
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
          "12"
        ],
        "nerve": [
          "-/19"
        ],
        "values": [
          235
        ],
        "unlocks": [],
        "special": "Crushing Strength (3), Shambling, Strider, Vicious (Melee)",
        "options": [],
        "ovals": [],
        "keywords": "Hellforged",
        "mType": "Ti",
        "stats": [
          "6",
          "4+",
          "-",
          "6+"
        ]
      },
      {
        "name": "Hellfane",
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
          "9"
        ],
        "nerve": [
          "-/18"
        ],
        "values": [
          280
        ],
        "unlocks": [],
        "special": "Aura (Brutal – Dwarf only), Crushing Strength (2), Strider, Thunderous Charge (2), Vicious, Masterwork Pistols: 18”, Att: 5, Piercing (1), Steady Aim",
        "options": [
          "Hellforged Overmaster [1] - Gain Aura (Wild Charge (+2) - Infantry only) and Inspiring"
        ],
        "ovals": [
          25
        ],
        "keywords": "Hellforged, Shrine",
        "mType": "Ti",
        "stats": [
          "6",
          "3+",
          "4+",
          "6+"
        ]
      },
      {
        "name": "Overmaster",
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
        "special": "Crushing Strength (1), Individual, Inspiring, Mighty, Vicious (Melee)",
        "options": [
          "Infernal Advance [1] - Gain Aura (Strider - Infantry only). This unique upgrade cannot be taken in addition to a magical artefact."
        ],
        "ovals": [
          20
        ],
        "keywords": "Dwarf",
        "mType": "I",
        "stats": [
          "4",
          "3+",
          "-",
          "6+"
        ]
      },
      {
        "name": "Slavedriver",
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
          55
        ],
        "unlocks": [],
        "special": "Individual, Inspiring, Rally (1 - Slave only), Vicious (Melee)",
        "options": [],
        "ovals": [],
        "keywords": "Dwarf",
        "mType": "I",
        "stats": [
          "4",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Infernox",
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
          "-/13"
        ],
        "values": [
          140
        ],
        "unlocks": [],
        "special": "Brutal, Crushing Strength (2), Nimble, Thunderous Charge (1), Vicious (Melee), Wild Charge (D3)",
        "options": [],
        "ovals": [],
        "keywords": "Hellforged",
        "mType": "LI",
        "stats": [
          "5",
          "3+",
          "-",
          "6+"
        ]
      },
      {
        "name": "Iron-caster",
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
          110
        ],
        "unlocks": [],
        "special": "Individual, Inspiring (Hellforged only), Ariagful’s Flame: Whenever this unit rolls to damage with Fireball, it can reroll all dice that score a natural, unmodified 1. Spells: Fireball (10), Heal (3 - Hellforged only). Spellcaster: 2",
        "options": [
          "Bane Chant (2)",
          "Lightning Bolt (3)",
          "Mind Fog (2)",
          "Surge (8) (replaces Fireball)",
          "Surge (8)"
        ],
        "ovals": [
          20,
          20,
          15,
          0,
          30
        ],
        "keywords": "Dwarf, Hellforged",
        "mType": "I",
        "stats": [
          "4",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Hexcaster",
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
          "-/11"
        ],
        "values": [
          70
        ],
        "unlocks": [],
        "special": "Individual, Feedback: After rolling to hit with Hex or Weakness, roll to, damage for each hit scored with the Piercing (1) modifer. Dampening Runes: Enemy spells targeting this unit always hit on a 6+. Spells: Hex (3). Spellcaster: 1",
        "options": [
          "Weakness (3) (replaces Hex)",
          "Weakness (3)"
        ],
        "ovals": [
          0,
          20
        ],
        "keywords": "Hellforged",
        "mType": "HI",
        "stats": [
          "5",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Taskmaster on Chariot",
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
          "11/13"
        ],
        "values": [
          110
        ],
        "unlocks": [],
        "special": "Inspiring, Nimble, Thunderous Charge (2), Vicious (Melee)",
        "options": [
          "Rally (1 - Slave only)"
        ],
        "ovals": [
          15
        ],
        "keywords": "Dwarf",
        "mType": "Ch",
        "stats": [
          "8",
          "4+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Abyssal Halfbreed Champion",
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
          145
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Individual, Inspiring (Abomination only), Mighty, Regeneration (5+), Vicious (Melee)",
        "options": [],
        "ovals": [],
        "keywords": "Halfbreed",
        "mType": "C",
        "stats": [
          "8",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Abyssal Grotesque Champion",
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
          "12/14"
        ],
        "values": [
          140
        ],
        "unlocks": [],
        "special": "Brutal, Crushing Strength (2), Nimble, Regeneration (5+), Thunderous Charge (1), Vicious (Melee)",
        "options": [],
        "ovals": [],
        "keywords": "Abomination",
        "mType": "LC",
        "stats": [
          "7",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Brakki Barka [1]",
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
          "6"
        ],
        "nerve": [
          "14/16"
        ],
        "values": [
          200
        ],
        "unlocks": [],
        "special": "Crushing Strength (3), Individual, Mighty, Regeneration (5+), Vicious (Melee), Bhardoom!: Due to his ear-shattering battle-cry, Brakki Barka has both Very Inspiring and Dread.",
        "options": [],
        "ovals": [],
        "keywords": "Abomination",
        "mType": "C",
        "stats": [
          "8",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Ba’su’su the Vile [1]",
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
          "7"
        ],
        "nerve": [
          "14/16"
        ],
        "values": [
          210
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Fly, Individual, Inspiring (Gargoyle only), Mighty, Regeneration (5+)",
        "options": [],
        "ovals": [],
        "keywords": "Abomination, Gargoyle",
        "mType": "HI",
        "stats": [
          "10",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Supreme Iron-caster on Great Winged Halfbreed",
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
          "8"
        ],
        "nerve": [
          "16/18"
        ],
        "values": [
          280
        ],
        "unlocks": [],
        "special": "Crushing Strength (3), Fly, Inspiring, Nimble, Vicious (Melee), Ariagful’s Flame: Whenever this unit rolls to damage with Fireball, it can reroll all dice that score a natural, unmodified 1. Spells: Fireball (12). Spellcaster: 3",
        "options": [
          "Heal (4 - Hellforged only)",
          "Lightning Bolt (5)",
          "Surge (8)"
        ],
        "ovals": [
          15,
          25,
          20
        ],
        "keywords": "Abomination, Dwarf, Hellforged",
        "mType": "Ti",
        "stats": [
          "10",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Overmaster on Ancient Winged Halfbreed",
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
          "17/19"
        ],
        "values": [
          300
        ],
        "unlocks": [],
        "special": "Crushing Strength (3), Fly, Inspiring, Nimble, Regeneration (5+), Vicious (Melee)",
        "options": [],
        "ovals": [],
        "keywords": "Abomination, Dwarf",
        "mType": "Ti",
        "stats": [
          "10",
          "3+",
          "-",
          "5+"
        ]
      }
    ],
    "themes": [
      "Ratkin Slaves"
    ]
  },
  {
    "faction": "Goblins",
    "alignment": 2,
    "units": [
      {
        "name": "Sharpsticks",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "R",
          "H",
          "L"
        ],
        "models": [
          "20",
          "40",
          "60"
        ],
        "unitStrength": [
          "2",
          "3",
          "4"
        ],
        "att": [
          "15",
          "30",
          "35"
        ],
        "nerve": [
          "12/14",
          "19/21",
          "25/27"
        ],
        "values": [
          95,
          155,
          230
        ],
        "unlocks": [],
        "special": "Phalanx",
        "options": [
          "Mawpup"
        ],
        "ovals": [
          10
        ],
        "keywords": "Expendable, Goblin, Mawpup Cage",
        "mType": "I",
        "stats": [
          "5",
          "5+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Rabble",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "R",
          "H",
          "L"
        ],
        "models": [
          "20",
          "40",
          "60"
        ],
        "unitStrength": [
          "2",
          "3",
          "4"
        ],
        "att": [
          "12",
          "25",
          "30"
        ],
        "nerve": [
          "12/14",
          "19/21",
          "25/27"
        ],
        "values": [
          75,
          125,
          180
        ],
        "unlocks": [],
        "special": "-",
        "options": [
          "Mawpup"
        ],
        "ovals": [
          10
        ],
        "keywords": "Expendable, Goblin, Mawpup Cage",
        "mType": "I",
        "stats": [
          "5",
          "5+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Luggit Gang",
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
          "15",
          "20"
        ],
        "nerve": [
          "-/11",
          "-/15"
        ],
        "values": [
          105,
          160
        ],
        "unlocks": [],
        "special": "Brutal, Crushing Strength (1), Wild Charge (D3)",
        "options": [
          "Mawpup"
        ],
        "ovals": [
          10
        ],
        "keywords": "Berserker, Goblin, Mawpup Cage",
        "mType": "I",
        "stats": [
          "5",
          "4+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Spitters*",
        "irregular": 1,
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
          "2",
          "3"
        ],
        "att": [
          "10",
          "20"
        ],
        "nerve": [
          "12/14",
          "19/21"
        ],
        "values": [
          90,
          160
        ],
        "unlocks": [],
        "special": "Bows: 24”",
        "options": [],
        "ovals": [],
        "keywords": "Goblin",
        "mType": "I",
        "stats": [
          "5",
          "6+",
          "5+",
          "3+"
        ]
      },
      {
        "name": "Trolls",
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
          "11/14",
          "14/17"
        ],
        "values": [
          115,
          190
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Regeneration (5+)",
        "options": [],
        "ovals": [],
        "keywords": "Troll",
        "mType": "LI",
        "stats": [
          "6",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Fleabag Rider Sniffs*",
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
          "9/11",
          "12/14"
        ],
        "values": [
          105,
          160
        ],
        "unlocks": [],
        "special": "Nimble, Vicious (Melee), Shortbows: 18”, Steady Aim",
        "options": [],
        "ovals": [],
        "keywords": "Beast, Goblin",
        "mType": "C",
        "stats": [
          "10",
          "4+",
          "5+",
          "3+"
        ]
      },
      {
        "name": "Mawbeast Pack*",
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
          80,
          120
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Nimble, Vicious (Melee), Wild Charge (D3)",
        "options": [
          "Upgrade to Magwa’ns [1] (Regiment only) - No longer being Irregular and increasing Defence to 4+"
        ],
        "ovals": [
          10
        ],
        "keywords": "Beast",
        "mType": "C",
        "stats": [
          "6",
          "3+",
          "-",
          "3+"
        ]
      },
      {
        "name": "Fleabag Riders",
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
          "7",
          "14",
          "28"
        ],
        "nerve": [
          "9/11",
          "12/14",
          "19/21"
        ],
        "values": [
          100,
          155,
          265
        ],
        "unlocks": [],
        "special": "Nimble, Thunderous Charge (1), Vicious (Melee)",
        "options": [
          "Mawpup"
        ],
        "ovals": [
          10
        ],
        "keywords": "Beast, Goblin, Mawpup Cage",
        "mType": "C",
        "stats": [
          "10",
          "4+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Mincer Mob*",
        "irregular": 1,
        "limit": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          "2",
          "3"
        ],
        "unitStrength": [
          "1",
          "2"
        ],
        "att": [
          "D6+14",
          "D6+21"
        ],
        "nerve": [
          "-/14",
          "-/16"
        ],
        "values": [
          160,
          200
        ],
        "unlocks": [],
        "special": "Big Shield, Brutal, Crushing Strength (1), Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "keywords": "Gizmo, Goblin",
        "mType": "Ch",
        "stats": [
          "5",
          "4+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Big Rocks Thrower",
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
          "9/11"
        ],
        "values": [
          90
        ],
        "unlocks": [],
        "special": "Big Rocks Thrower: 48”, Blast (D3+1), Ignores Cover, Indirect, Piercing (3), Reload",
        "options": [],
        "ovals": [],
        "keywords": "Gizmo, Goblin, Lobber",
        "mType": "W",
        "stats": [
          "5",
          "-",
          "5+",
          "4+"
        ]
      },
      {
        "name": "War-Trombone",
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
          "10"
        ],
        "nerve": [
          "8/10"
        ],
        "values": [
          65
        ],
        "unlocks": [],
        "special": "War-Trombone: 12”, Piercing (1), Steady Aim",
        "options": [],
        "ovals": [],
        "keywords": "Gizmo, Goblin",
        "mType": "W",
        "stats": [
          "5",
          "-",
          "4+",
          "4+"
        ]
      },
      {
        "name": "Fleabag Chariots*",
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
          "10/12",
          "12/14",
          "14/16",
          "17/19"
        ],
        "values": [
          125,
          155,
          195,
          225
        ],
        "unlocks": [],
        "special": "Thunderous Charge (2), Vicious (Melee), Shortbows: 18”, Att: [4/6/8/10], Steady Aim",
        "options": [],
        "ovals": [],
        "keywords": "Beast, Goblin",
        "mType": "Ch",
        "stats": [
          "9",
          "4+",
          "5+",
          "4+"
        ]
      },
      {
        "name": "Sharpstick Thrower",
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
          "9/11"
        ],
        "values": [
          75
        ],
        "unlocks": [],
        "special": "Sharpstick Thrower: 48”, Blast (D3), Piercing (2), Reload",
        "options": [],
        "ovals": [],
        "keywords": "Gizmo, Goblin, Lobber",
        "mType": "W",
        "stats": [
          "5",
          "-",
          "4+",
          "4+"
        ]
      },
      {
        "name": "Mincer",
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
          "D6+6"
        ],
        "nerve": [
          "-/11"
        ],
        "values": [
          90
        ],
        "unlocks": [],
        "special": "Big Shield, Brutal, Crushing Strength (1), Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "keywords": "Gizmo, Goblin",
        "mType": "M",
        "stats": [
          "5",
          "4+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Winggit",
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
          "3"
        ],
        "nerve": [
          "13/15"
        ],
        "values": [
          120
        ],
        "unlocks": [],
        "special": "Fly, Nimble, Firebombs: Range 12”, Blast (D3), Ignores Cover, Piercing (1), Steady Aim, Vicious (Ranged)",
        "options": [
          "Upgrade with a Goblin Spotter, allowing the use of the Eye in the Sky unique special rule. Eye in the Sky: At the start of each of your ranged phases you can immediately target and “Mark” an Enemy unit anywhere within 24” of this unit regardless of line of sight. For the remainder of the turn, all friendly core units with the Lobber keyword targeting the Marked unit have the Elite (Ranged) special rule. Note: The unit does not have Eye in the Sky unless purchased."
        ],
        "ovals": [
          10
        ],
        "keywords": "Gizmo, Goblin",
        "mType": "M",
        "stats": [
          "10",
          "5+",
          "4+",
          "4+"
        ]
      },
      {
        "name": "Goblin Blaster",
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
          "3"
        ],
        "nerve": [
          "-/10"
        ],
        "values": [
          65
        ],
        "unlocks": [],
        "special": "Blast (D6), Brutal, Crushing Strength (3), Makeshift Grenades: 12”, Blast (D3), Piercing (1), Boom!: At the end of a Turn in which this unit scores a successful hit in melee, it is immediately Routed and removed from play.",
        "options": [],
        "ovals": [],
        "keywords": "Gizmo, Goblin",
        "mType": "M",
        "stats": [
          "5",
          "3+",
          "5+",
          "5+"
        ]
      },
      {
        "name": "Mawpup Launcher",
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
          "3"
        ],
        "nerve": [
          "9/11"
        ],
        "values": [
          75
        ],
        "unlocks": [],
        "special": "Mawpup Bombardment: 36”, Blast (D3), Ignores Cover, Indirect, Reload, Mawpup Delivery: 36”, Indirect, this attack always hits on a 4+, may only target friendly core units with the Mawpup Cage Keyword, including those in combat. Hits do not cause damage; instead, if one or more hits are scored, the target unit recieves a Mawpup if able.",
        "options": [],
        "ovals": [],
        "keywords": "Gizmo, Goblin, Lobber",
        "mType": "W",
        "stats": [
          "5",
          "-",
          "4+",
          "4+"
        ]
      },
      {
        "name": "Giant",
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
          "D6+8"
        ],
        "nerve": [
          "18/20"
        ],
        "values": [
          225
        ],
        "unlocks": [],
        "special": "Brutal, Crushing Strength (4), Fury, Strider",
        "options": [],
        "ovals": [],
        "keywords": "Giant, King’s Pride",
        "mType": "Ti",
        "stats": [
          "7",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Goblin Slasher",
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
          "8"
        ],
        "nerve": [
          "16/18"
        ],
        "values": [
          210
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Strider, Sharpstick Thrower: 36”, Att: 2, Blast (D3), Piercing (2), Steady Aim",
        "options": [],
        "ovals": [],
        "keywords": "Beast, Goblin, King’s Pride",
        "mType": "Ti",
        "stats": [
          "7",
          "3+",
          "5+",
          "5+"
        ]
      },
      {
        "name": "Biggit",
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
          "9/11"
        ],
        "values": [
          55
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Individual, Inspiring",
        "options": [
          "Mount on a Fleabag, increasing Speed to 10 and changing to Hero (Cav - Height: 3)",
          "Exchange two-handed weapon for Shortbow, losing Crushing Strength but gaining the ranged attack - Shortbow: 18”, Ra: 4+"
        ],
        "ovals": [
          25,
          0
        ],
        "keywords": "Goblin",
        "mType": "I",
        "stats": [
          "5",
          "4+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Flaggit",
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
          "8/10"
        ],
        "values": [
          40
        ],
        "unlocks": [],
        "special": "Individual, Inspiring",
        "options": [
          "Mount on a Fleabag, increasing Speed to 10 and changing to Hero (Cav - Height: 3)"
        ],
        "ovals": [
          25
        ],
        "keywords": "Goblin",
        "mType": "I",
        "stats": [
          "5",
          "5+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Banggit",
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
          "9/11"
        ],
        "values": [
          60
        ],
        "unlocks": [],
        "special": "Individual, Makeshift Grenades: 12”, Blast (D3), Piercing (1), Shattering, Volatile Explosives: When your opponent rolls to damage against this unit, rolls of natural unmodified 6s deal 2 points of damage each instead of 1.",
        "options": [],
        "ovals": [],
        "keywords": "Gizmo, Goblin",
        "mType": "I",
        "stats": [
          "5",
          "6+",
          "4+",
          "4+"
        ]
      },
      {
        "name": "King",
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
          "12/14"
        ],
        "values": [
          70
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Individual, Inspiring, Shortbow: 18”",
        "options": [
          "Mount on a Fleabag, increasing Speed to 10 and changing to Hero (Cav - Height: 3)",
          "Jareth’s Pendant [1] - Aura (Headstrong). This upgrade cannot be taken in addition to a Fleabag Mount."
        ],
        "ovals": [
          35,
          15
        ],
        "keywords": "Goblin",
        "mType": "I",
        "stats": [
          "5",
          "4+",
          "4+",
          "4+"
        ]
      },
      {
        "name": "Stinggit",
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
          "9/11"
        ],
        "values": [
          75
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Duelist, Individual, Scout, Stealthy, Vicious, Throwing Knives: 12”",
        "options": [],
        "ovals": [],
        "keywords": "Goblin",
        "mType": "I",
        "stats": [
          "6",
          "3+",
          "4+",
          "4+"
        ]
      },
      {
        "name": "Troll Bruiser",
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
          "12/15"
        ],
        "values": [
          110
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Inspiring (Troll only), Nimble, Regeneration (5+)",
        "options": [],
        "ovals": [],
        "keywords": "Troll",
        "mType": "LI",
        "stats": [
          "6",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "King on Chariot",
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
          "13/15"
        ],
        "values": [
          130
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Inspiring, Nimble, Thunderous Charge (1), Shortbow: 18”, Steady Aim",
        "options": [],
        "ovals": [],
        "keywords": "Beast, Goblin",
        "mType": "Ch",
        "stats": [
          "9",
          "4+",
          "4+",
          "4+"
        ]
      },
      {
        "name": "Magwa & Jo’os [1]",
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
          "7"
        ],
        "nerve": [
          "12/14"
        ],
        "values": [
          150
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Duelist, Individual, Inspiring, Mighty, Vicious (Melee), Wild Charge (D3) Spells: Lightning Bolt (4). Spellcaster: 2",
        "options": [],
        "ovals": [],
        "keywords": "Beast, Goblin",
        "mType": "LC",
        "stats": [
          "6",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Kuzlo & Madfall [1]",
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
          "5"
        ],
        "nerve": [
          "13/15"
        ],
        "values": [
          145
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Inspiring (Self only), Nimble, Pathfinder, Regeneration (4+), Vicious (Melee), Ravenous Lizard: While within 6” of this unit, both Friendly and, Enemy units have -1 to their Waver and Rout Nerve values. Sticky Tongue: This unit’s Enthral spell only has a range of 12”. While casting Enthral, in addition to moving the target, roll to damage for each hit scored. Spells: Enthral (5), Hex (3). Spellcaster: 1",
        "options": [],
        "ovals": [],
        "keywords": "Beast, Goblin",
        "mType": "LC",
        "stats": [
          "8",
          "3+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Wiz",
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
          "9/11"
        ],
        "values": [
          45
        ],
        "unlocks": [],
        "special": "Individual Spells: Lightning Bolt (3). Spellcaster: 1",
        "options": [
          "Mount on a Fleabag, increasing Speed to 10 and changing to Hero (Cav - Height: 3)",
          "Bane Chant (2)",
          "Hex (2)",
          "Weakness (2)"
        ],
        "ovals": [
          25,
          20,
          10,
          15
        ],
        "keywords": "Goblin",
        "mType": "I",
        "stats": [
          "5",
          "5+",
          "-",
          "4+"
        ]
      }
    ]
  },
  {
    "faction": "Ratkin",
    "alignment": 2,
    "units": [
      {
        "name": "Warriors",
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
          "2",
          "3"
        ],
        "att": [
          "12",
          "25"
        ],
        "nerve": [
          "12/14",
          "19/21"
        ],
        "values": [
          85,
          145
        ],
        "unlocks": [],
        "special": "The Horde option has Rallying (1)",
        "options": [
          "Plague Pots"
        ],
        "ovals": [
          15
        ],
        "keywords": "Expendable, Mob, Ratkin",
        "mType": "I",
        "stats": [
          "6",
          "5+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Shock Troops",
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
          85,
          130,
          220
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), The Horde option has Rallying (1)",
        "options": [
          "Upgrade with Heavy Halberds, gaining Phalanx",
          "Plague Pots"
        ],
        "ovals": [
          {
            "T": 15,
            "R": 15,
            "H": 25
          },
          15
        ],
        "keywords": "Mob, Ratkin",
        "mType": "I",
        "stats": [
          "6",
          "4+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Wretches*",
        "irregular": 1,
        "limit": 0,
        "unitType": [
          "H",
          "L"
        ],
        "models": [
          "40",
          "60"
        ],
        "unitStrength": [
          "3",
          "4"
        ],
        "att": [
          "25",
          "30"
        ],
        "nerve": [
          "18/21",
          "24/27"
        ],
        "values": [
          115,
          170
        ],
        "unlocks": [],
        "special": "-",
        "options": [],
        "ovals": [],
        "keywords": "Expendable, Mob, Ratkin, Slave",
        "mType": "I",
        "stats": [
          "6",
          "5+",
          "-",
          "2+"
        ]
      },
      {
        "name": "Spear Warriors",
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
          "15",
          "30"
        ],
        "nerve": [
          "12/14",
          "19/21"
        ],
        "values": [
          105,
          180
        ],
        "unlocks": [],
        "special": "Phalanx, The Horde option has Rallying (1)",
        "options": [
          "Plague Pots"
        ],
        "ovals": [
          15
        ],
        "keywords": "Mob, Ratkin",
        "mType": "I",
        "stats": [
          "6",
          "5+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Clawshots*",
        "irregular": 1,
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
          "8/10"
        ],
        "values": [
          95
        ],
        "unlocks": [],
        "special": "Long Rifles: 36”, Piercing (2), Reload, Note: The front rank of models should be represented with large shields.",
        "options": [],
        "ovals": [],
        "keywords": "Ratkin, Tek",
        "mType": "HI",
        "stats": [
          "6",
          "5+",
          "4+",
          "5+"
        ]
      },
      {
        "name": "Hackpaws",
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
          "9/11",
          "12/14"
        ],
        "values": [
          100,
          150
        ],
        "unlocks": [],
        "special": "Nimble, Thunderous Charge (1), Vicious (Melee)",
        "options": [],
        "ovals": [],
        "keywords": "Beast, Ratkin",
        "mType": "C",
        "stats": [
          "9",
          "4+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Vermintide*",
        "irregular": 1,
        "limit": 0,
        "unitType": [
          "R",
          "H",
          "L"
        ],
        "models": [
          "3",
          "6",
          "12"
        ],
        "unitStrength": [
          "1",
          "1",
          "1"
        ],
        "att": [
          "9",
          "18",
          "36"
        ],
        "nerve": [
          "9/11",
          "12/14",
          "19/21"
        ],
        "values": [
          65,
          110,
          195
        ],
        "unlocks": [],
        "special": "Nimble, Vicious (Melee), Wild Charge (D3)",
        "options": [],
        "ovals": [],
        "keywords": "Beast, Expendable, Vermin",
        "mType": "S",
        "stats": [
          "6",
          "5+",
          "-",
          "3+"
        ]
      },
      {
        "name": "Tunnel Runners",
        "irregular": 0,
        "limit": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          "2",
          "3"
        ],
        "unitStrength": [
          "1",
          "2"
        ],
        "att": [
          "16",
          "24"
        ],
        "nerve": [
          "12/14",
          "14/16"
        ],
        "values": [
          170,
          210
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "keywords": "Ratkin, Tek",
        "mType": "Ch",
        "stats": [
          "8",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Nightmares",
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
          "11/13",
          "14/16"
        ],
        "values": [
          140,
          235
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), The Horde option has Rallying (1), Vicious (Melee), Blight Cannons: 12”, Steady Aim",
        "options": [],
        "ovals": [],
        "keywords": "Abomination, Tek",
        "mType": "LI",
        "stats": [
          "6",
          "4+",
          "4+",
          "5+"
        ]
      },
      {
        "name": "Scurriers*",
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
          "9/11",
          "13/15"
        ],
        "values": [
          115,
          155
        ],
        "unlocks": [],
        "special": "Duelist, Scout, Vicious, Blight Throwers: 18”, Steady Aim",
        "options": [
          "Plague Pots"
        ],
        "ovals": [
          15
        ],
        "keywords": "Ratkin",
        "mType": "I",
        "stats": [
          "6",
          "4+",
          "4+",
          "3+"
        ]
      },
      {
        "name": "Weapon Team",
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
          "10"
        ],
        "nerve": [
          "8/10"
        ],
        "values": [
          85
        ],
        "unlocks": [],
        "special": "Nimble, Blight Spewer: 12”, Piercing (1), Steady Aim",
        "options": [],
        "ovals": [],
        "keywords": "Ratkin, Tek",
        "mType": "W",
        "stats": [
          "6",
          "-",
          "4+",
          "5+"
        ]
      },
      {
        "name": "Death Engine Impaler",
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
          "D6+7"
        ],
        "nerve": [
          "-/16"
        ],
        "values": [
          180
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Vicious (Melee)",
        "options": [],
        "ovals": [],
        "keywords": "Ratkin, Tek",
        "mType": "M",
        "stats": [
          "8",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Death Engine Spewer",
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
          "D6+7"
        ],
        "nerve": [
          "-/16"
        ],
        "values": [
          200
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Rattlecannon: Range 18”, Piercing (2)",
        "options": [],
        "ovals": [],
        "keywords": "Ratkin, Tek",
        "mType": "M",
        "stats": [
          "6",
          "4+",
          "4+",
          "4+"
        ]
      },
      {
        "name": "Mutant Rat-fiend",
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
          "-/18"
        ],
        "values": [
          220
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Radiance of Life (Vermin only), Rallying (1), Regeneration (5+), Strider, Vicious (Melee)",
        "options": [],
        "ovals": [],
        "keywords": "Abomination, Ratkin, Vermin, Walking Womb",
        "mType": "Ti",
        "stats": [
          "7",
          "3+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Shredder",
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
          "3"
        ],
        "nerve": [
          "8/10"
        ],
        "values": [
          90
        ],
        "unlocks": [],
        "special": "Shredder: 48”, Blast (D3), Ignores Cover, Piercing (1), Reload, Shattering",
        "options": [],
        "ovals": [],
        "keywords": "Ratkin, Tek",
        "mType": "W",
        "stats": [
          "5",
          "-",
          "5+",
          "5+"
        ]
      },
      {
        "name": "War Chief",
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
          "11/13"
        ],
        "values": [
          85
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Individual, Inspiring, Mighty",
        "options": [
          "Mount on a Fleabag, increasing Speed to 9 and changing to Hero (Cav – Height: 3)"
        ],
        "ovals": [
          35
        ],
        "keywords": "Ratkin",
        "mType": "I",
        "stats": [
          "6",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Brood Mother",
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
          "12/14"
        ],
        "values": [
          120
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Inspiring, Nimble, Radiance of Life, Eat the Weak: The Brood Mother’s Drain Life spell can target and cause damage to Friendly Core units with the Expendable Keyword and when doing so, its Drain Life (n) value is doubled; afterward carry out the rest of the spell’s damage removal component as normal. Damage caused to Friendly units in this way does not trigger a Nerve test. Spells: Drain Life (5). Spellcaster: 1",
        "options": [
          "Gain the ranged attack - Blight Staff: 18”, Ra: 4+, Piercing (1), Steady Aim, Vicious (Ranged)",
          "Gain the ranged attack - Blight Staff: 18”, Ra: 4+, Piercing (1), Steady Aim, Vicious (Ranged) (replaces Drain Life)"
        ],
        "ovals": [
          20,
          0
        ],
        "keywords": "Brood Mother, Ratkin, Tek",
        "mType": "LI",
        "stats": [
          "6",
          "4+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Warlock",
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
          "9/11"
        ],
        "values": [
          90
        ],
        "unlocks": [],
        "special": "Individual Spells: Lightning Bolt (5). Spellcaster: 2",
        "options": [
          "Mount on a Fleabag, increasing Speed to 9 and changing to Hero (Cav – Height: 3)",
          "Bane Chant (3)",
          "Heal (4)",
          "Hex (2)",
          "Veil of Shadows (2) [1]"
        ],
        "ovals": [
          25,
          30,
          30,
          10,
          25
        ],
        "keywords": "Ratkin",
        "mType": "I",
        "stats": [
          "6",
          "5+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Swarm-crier",
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
          "8/10"
        ],
        "values": [
          45
        ],
        "unlocks": [],
        "special": "Individual, Inspiring",
        "options": [
          "Mount on a Fleabag, increasing Speed to 9 and changing to Hero (Cav – Height: 3)"
        ],
        "ovals": [
          25
        ],
        "keywords": "Ratkin",
        "mType": "I",
        "stats": [
          "6",
          "5+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Night Terror",
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
          "12/14"
        ],
        "values": [
          135
        ],
        "unlocks": [],
        "special": "Crushing Strength (2), Nimble",
        "options": [],
        "ovals": [],
        "keywords": "Abomination, Tek",
        "mType": "LC",
        "stats": [
          "9",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Brute Enforcer",
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
          75
        ],
        "unlocks": [],
        "special": "Brutal, Crushing Strength (2), Nimble, Rallying (1)",
        "options": [],
        "ovals": [],
        "keywords": "Abomination, Tek",
        "mType": "LI",
        "stats": [
          "6",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Master Scurrier",
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
          "10/12"
        ],
        "values": [
          95
        ],
        "unlocks": [],
        "special": "Crushing Strength (1), Duelist, Individual, Scout, Stealthy, Vicious, Blight Pistol: 12”, Piercing (1)",
        "options": [],
        "ovals": [],
        "keywords": "Ratkin",
        "mType": "I",
        "stats": [
          "7",
          "3+",
          "4+",
          "4+"
        ]
      },
      {
        "name": "Tangle [1]",
        "irregular": 0,
        "limit": 1,
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
          "9"
        ],
        "nerve": [
          "-/14"
        ],
        "values": [
          160
        ],
        "unlocks": [],
        "special": "Aura (Fury), Inspiring, Nimble, Rallying (1), Regeneration (6+), Vicious (Melee), Tangle: For each Friendly Core Infantry Regiment, Infantry, Horde, Infantry Legion or unit with the Vermin keyword within, 6”, increase the amount of dice rolled with Bane Chant, Fireball, Mind Fog and Weakness by 1 to a maximum bonus of +3. Note: Base size cannot be increased beyond 75x75mm. Spells: Bane Chant (1), Fireball (10), Mind Fog (1), Weakness (1). Spellcaster: 0",
        "options": [],
        "ovals": [],
        "keywords": "Ratkin, Shrine",
        "mType": "Ti",
        "stats": [
          "5",
          "4+",
          "-",
          "4+"
        ]
      },
      {
        "name": "Mother Cryza [1]",
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
          "5"
        ],
        "nerve": [
          "13/15"
        ],
        "values": [
          165
        ],
        "unlocks": [],
        "special": "Cloak of Death, Crushing Strength (1), Ensnare, Inspiring, Nimble, Stealthy Spells: Lightning Bolt (5). Spellcaster: 3",
        "options": [
          "Bane Chant (3)",
          "Bloodboil [1]",
          "Veil of Shadows (2) [1]"
        ],
        "ovals": [
          30,
          20,
          25
        ],
        "keywords": "Brood Mother, Ratkin, Tek",
        "mType": "LI",
        "stats": [
          "6",
          "3+",
          "-",
          "5+"
        ]
      },
      {
        "name": "Scudku-z’luk, Demonspawn of Diew [1]",
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
          "13"
        ],
        "nerve": [
          "17/19"
        ],
        "values": [
          345
        ],
        "unlocks": [],
        "special": "Crushing Strength (3), Fly, Inspiring, Nimble, Rallying (2) Spells: Lightning Bolt (5). Spellcaster: 0",
        "options": [],
        "ovals": [],
        "keywords": "Abomination, Abyssal",
        "mType": "Ti",
        "stats": [
          "10",
          "3+",
          "-",
          "5+"
        ]
      }
    ]
  }
]

var _catalog = fullJSON

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
    cost:{"He": 35, "T": 35, "R": 35, "H": 45, "L": 45 },
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
