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
    "special": "Blessed be the Pious",
    "units": [
      {
        "name": "Crossbowmen",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          10,
          20,
          40
        ],
        "values": [
          100,
          130,
          215
        ],
        "nerve": [
          "10/12",
          "14/16",
          "21/23"
        ],
        "att": [
          8,
          10,
          20
        ],
        "stats": [
          5,
          5,
          5,
          4
        ],
        "special": "Iron Resolve, Crossbows (range 24&quot;), Piercing (1), Reload!",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Men-at-Arms (sword & shield)",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          10,
          20,
          40
        ],
        "values": [
          80,
          115,
          190
        ],
        "nerve": [
          "10/12",
          "14/16",
          "21/23"
        ],
        "att": [
          10,
          12,
          25
        ],
        "stats": [
          5,
          4,
          0,
          4
        ],
        "special": "Iron Resolve",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Men-at-Arms (spear & shield)",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          10,
          20,
          40
        ],
        "values": [
          95,
          135,
          225
        ],
        "nerve": [
          "10/12",
          "14/16",
          "21/23"
        ],
        "att": [
          10,
          15,
          30
        ],
        "stats": [
          5,
          4,
          0,
          4
        ],
        "special": "Iron Resolve, Phalanx",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Paladin Foot Guard",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          10,
          20
        ],
        "values": [
          105,
          150
        ],
        "nerve": [
          "11/13",
          "15/17"
        ],
        "att": [
          10,
          12
        ],
        "stats": [
          5,
          3,
          0,
          5
        ],
        "special": "Iron Resolve, Headstrong",
        "options": [
          "2H Weapons: De[4+], Crushing Strength (1)"
        ],
        "ovals": [
          0
        ],
        "limit": 0
      },
      {
        "name": "Penitents Mob",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          10,
          20,
          40
        ],
        "values": [
          70,
          100,
          165
        ],
        "nerve": [
          "8/10",
          "12/14",
          "19/21"
        ],
        "att": [
          10,
          15,
          30
        ],
        "stats": [
          5,
          5,
          0,
          3
        ],
        "special": "Iron Resolve, Crushing Strength (1), Headstrong",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Sisterhood Infantry",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          10,
          20,
          40
        ],
        "values": [
          90,
          130,
          215
        ],
        "nerve": [
          "10/12",
          "14/16",
          "21/23"
        ],
        "att": [
          10,
          15,
          30
        ],
        "stats": [
          5,
          4,
          0,
          3
        ],
        "special": "Iron Resolve, Crushing Strength (1), Headstrong, Vicious",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Elohi",
        "mType": "LI",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          195,
          300
        ],
        "nerve": [
          "-/14",
          "-/17"
        ],
        "att": [
          9,
          18
        ],
        "stats": [
          10,
          3,
          0,
          5
        ],
        "special": "Iron Resolve, Crushing Strength (1), Fly, Inspiring, Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Paladin Knights",
        "mType": "C",
        "irregular": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          5,
          10,
          20
        ],
        "values": [
          135,
          210,
          350
        ],
        "nerve": [
          "12/14",
          "15/17",
          "22/24"
        ],
        "att": [
          8,
          16,
          32
        ],
        "stats": [
          8,
          3,
          0,
          5
        ],
        "special": "Iron Resolve, Headstrong, Thunderous Charge (2)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Sisterhood Panther Lancers",
        "mType": "C",
        "irregular": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          5,
          10
        ],
        "values": [
          115,
          175
        ],
        "nerve": [
          "11/13",
          "14/16"
        ],
        "att": [
          8,
          16
        ],
        "stats": [
          10,
          4,
          0,
          3
        ],
        "special": "Iron Resolve, Nimble, Thunderous Charge (1), Vicious",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Sisterhood Panther Chariot",
        "mType": "LC",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          180,
          280
        ],
        "nerve": [
          "14/16",
          "17/19"
        ],
        "att": [
          15,
          30
        ],
        "stats": [
          9,
          4,
          0,
          4
        ],
        "special": "Iron Resolve, Base Size: 50x100mm, Thunderous Charge (2), Vicious",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Heavy Arbalest",
        "mType": "W",
        "irregular": 0,
        "unitType": [
          "W"
        ],
        "models": [
          1
        ],
        "values": [
          65
        ],
        "nerve": [
          "10/12"
        ],
        "att": [
          1
        ],
        "stats": [
          5,
          0,
          5,
          4
        ],
        "special": "Iron Resolve, Blast (D3+2), Reload!, Piercing (3)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Phoenix",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "M"
        ],
        "models": [
          1
        ],
        "values": [
          165
        ],
        "nerve": [
          "14/16"
        ],
        "att": [
          3
        ],
        "stats": [
          10,
          3,
          0,
          3
        ],
        "special": "Iron Resolve, Breath Attack (10), Crushing Strength (1), Fly, Heal (6), Inspiring, Regeneration (4+)",
        "options": [
          "Bane Chant (2)",
          "Mind Fog (1)",
          "Weakness (2)",
          "Hex (2)",
          "Drain Life (6)"
        ],
        "ovals": [
          15,
          10,
          20,
          20,
          25
        ],
        "limit": 0
      },
      {
        "name": "Dictator",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          90
        ],
        "nerve": [
          "13/15"
        ],
        "att": [
          30
        ],
        "stats": [
          5,
          3,
          0,
          5
        ],
        "special": "Iron Resolve, Crushing Strength (1), Individual, Inspiring",
        "options": [
          "Mounted: Sp[8], Thunderous Charge (1), Hero(Cav)"
        ],
        "ovals": [
          30
        ],
        "limit": 0
      },
      {
        "name": "High Paladin",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          130
        ],
        "nerve": [
          "13/15"
        ],
        "att": [
          5
        ],
        "stats": [
          5,
          3,
          0,
          5
        ],
        "special": "Iron Resolve, Crushing Strength (1), Headstrong, Heal (2), Inspiring, Individual",
        "options": [
          "Mounted: Sp[8], Thunderous Charge (1), Hero(Cav)",
          "Mind Fog (1)",
          "Weakness (2)",
          "Hex (2)",
          "Drain Life (6)",
          "Blinding Light (1)*",
          "Barkskin (1)*",
          "Guiding Light (2)*",
          "Teleport (3)*",
          "Critter's Call (8)*",
          "Martyr's Prayer (7)*",
          "Spell Siphon (2)*",
          "Alchemist's Curse (10)*",
          "Blizzard (2)*",
          "Blood Boil*"
        ],
        "ovals": [
          30,
          10,
          20,
          20,
          25,
          10,
          10,
          15,
          15,
          20,
          25,
          25,
          30,
          30,
          30
        ],
        "limit": 0
      },
      {
        "name": "High Paladin on Griffin",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          210
        ],
        "nerve": [
          "15/17"
        ],
        "att": [
          7
        ],
        "stats": [
          10,
          3,
          0,
          5
        ],
        "special": "Iron Resolve, Crushing Strength (2), Fly, Headstrong, Heal (2), Inspiring",
        "options": [
          "Mind Fog (1)",
          "Weakness (2)",
          "Hex (2)",
          "Drain Life (6)",
          "Blinding Light (1)*",
          "Barkskin (1)*",
          "Guiding Light (2)*",
          "Teleport (3)*",
          "Critter's Call (8)*",
          "Martyr's Prayer (7)*",
          "Spell Siphon (2)*",
          "Alchemist's Curse (10)*",
          "Blizzard (2)*",
          "Blood Boil*"
        ],
        "ovals": [
          10,
          20,
          20,
          25,
          10,
          10,
          15,
          15,
          20,
          25,
          25,
          30,
          30,
          30
        ],
        "limit": 0
      },
      {
        "name": "High Paladin on Dragon",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          310
        ],
        "nerve": [
          "17/19"
        ],
        "att": [
          9
        ],
        "stats": [
          10,
          3,
          0,
          5
        ],
        "special": "Iron Resolve, Breath Attack (10), Crushing Strength (3), Fly, Headstrong, Heal (2), Inspiring",
        "options": [
          "Mind Fog (1)",
          "Weakness (2)",
          "Hex (2)",
          "Drain Life (6)",
          "Blinding Light (1)*",
          "Barkskin (1)*",
          "Guiding Light (2)*",
          "Teleport (3)*",
          "Critter's Call (8)*",
          "Martyr's Prayer (7)*",
          "Spell Siphon (2)*",
          "Alchemist's Curse (10)*",
          "Blizzard (2)*",
          "Blood Boil*"
        ],
        "ovals": [
          10,
          20,
          20,
          25,
          10,
          10,
          15,
          15,
          20,
          25,
          25,
          30,
          30,
          30
        ],
        "limit": 0
      },
      {
        "name": "Abbess",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          90
        ],
        "nerve": [
          "12/14"
        ],
        "att": [
          4
        ],
        "stats": [
          5,
          3,
          0,
          4
        ],
        "special": "Iron Resolve, Crushing Strength (1), Headstrong, Individual, Very Inspiring (Sisterhood only), Vicious",
        "options": [
          "Mounted: Sp[10], Thunderous Charge (1), Hero(Cav)"
        ],
        "ovals": [
          20
        ],
        "limit": 0
      },
      {
        "name": "Abbess on Panther Chariot",
        "mType": "LC",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          170
        ],
        "nerve": [
          "14/16"
        ],
        "att": [
          8
        ],
        "stats": [
          9,
          3,
          0,
          5
        ],
        "special": "Iron Resolve, Base Size: 50x100mm, Crushing Strength (1), Thunderous Charge (1), Headstrong, Individual, Very Inspiring (Sisterhood only), Vicious, Nimble",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "War Wizard",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          60
        ],
        "nerve": [
          "11/13"
        ],
        "att": [
          1
        ],
        "stats": [
          5,
          4,
          0,
          4
        ],
        "special": "Iron Resolve, Fireball (8), Individual",
        "options": [
          "Lightning Bolt (3)",
          "Wind Blast (5)",
          "Mind Fog (1)",
          "Weakness (2)",
          "Hex (2)",
          "Drain Life (6)",
          "Blinding Light (1)*",
          "Barkskin (1)*",
          "Guiding Light (2)*",
          "Teleport (3)*",
          "Critter's Call (8)*",
          "Martyr's Prayer (7)*",
          "Spell Siphon (2)*",
          "Alchemist's Curse (10)*",
          "Blizzard (2)*",
          "Blood Boil*",
          "On Horse"
        ],
        "ovals": [
          25,
          30,
          10,
          20,
          20,
          25,
          10,
          10,
          15,
          15,
          20,
          25,
          25,
          30,
          30,
          30,
          10
        ],
        "limit": 0
      },
      {
        "name": "Priest",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          75
        ],
        "nerve": [
          "11/13"
        ],
        "att": [
          1
        ],
        "stats": [
          5,
          4,
          0,
          4
        ],
        "special": "Iron Resolve, Crushing Strength (1), Headstrong, Heal (3), Individual, Very Inspiring (Penitents only)",
        "options": [
          "Bane Chant (2)",
          "Mind Fog (1)",
          "Weakness (2)",
          "Hex (2)",
          "Drain Life (6)",
          "Blinding Light (1)*",
          "Barkskin (1)*",
          "Guiding Light (2)*",
          "Teleport (3)*",
          "Critter's Call (8)*",
          "Martyr's Prayer (7)*",
          "Spell Siphon (2)*",
          "Alchemist's Curse (10)*",
          "Blizzard (2)*",
          "Blood Boil*",
          "On Horse"
        ],
        "ovals": [
          15,
          10,
          20,
          20,
          25,
          10,
          10,
          15,
          15,
          20,
          25,
          25,
          30,
          30,
          30,
          10
        ],
        "limit": 0
      },
      {
        "name": "Bearer of the Holy Icon",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          55
        ],
        "nerve": [
          "10/12"
        ],
        "att": [
          1
        ],
        "stats": [
          5,
          5,
          0,
          4
        ],
        "special": "Iron Resolve, Individual, Inspiring",
        "options": [
          "Mounted: Sp[8], De[5+], Hero (Cav)"
        ],
        "ovals": [
          20
        ],
        "limit": 0
      },
      {
        "name": "Ur-Elohi",
        "mType": "LI",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          180
        ],
        "nerve": [
          "-,15"
        ],
        "att": [
          6
        ],
        "stats": [
          10,
          3,
          0,
          5
        ],
        "special": "Iron Resolve, Crushing Strength (2), Fly, Heal (3), Inspiring, Thunderous Charge (1)",
        "options": [
          "Mind Fog (1)",
          "Weakness (2)",
          "Hex (2)",
          "Drain Life (6)",
          "Blinding Light (1)*",
          "Barkskin (1)*",
          "Guiding Light (2)*",
          "Teleport (3)*",
          "Critter's Call (8)*",
          "Martyr's Prayer (7)*",
          "Spell Siphon (2)*",
          "Alchemist's Curse (10)*",
          "Blizzard (2)*",
          "Blood Boil*"
        ],
        "ovals": [
          10,
          20,
          20,
          25,
          10,
          10,
          15,
          15,
          20,
          25,
          25,
          30,
          30,
          30
        ],
        "limit": 0
      },
      {
        "name": "Jullius, Dragon of Heaven",
        "mType": "LI",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          275
        ],
        "nerve": [
          "-/16"
        ],
        "att": [
          8
        ],
        "stats": [
          10,
          3,
          0,
          6
        ],
        "special": "Iron Resolve, Crushing Strength (2), Fly, Heal (3), Thunderous Charge (1), Twin Souls, Very Inspiring",
        "options": [],
        "ovals": [],
        "limit": 1
      },
      {
        "name": "Samacris, Mother of Phoenixes",
        "mType": "LI",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          230
        ],
        "nerve": [
          "-/15"
        ],
        "att": [
          3
        ],
        "stats": [
          10,
          3,
          0,
          5
        ],
        "special": "Iron Resolve, Fireball (10), Crushing Strength (1), Fly, Heal (7), Inspiring, Lightning Bolt (5), Regeneration (5+), Twin Souls",
        "options": [],
        "ovals": [],
        "limit": 1
      },
      {
        "name": "Gnaeus Sallustis",
        "mType": "LC",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          190
        ],
        "nerve": [
          "15/17"
        ],
        "att": [
          7
        ],
        "stats": [
          9,
          3,
          0,
          5
        ],
        "special": "Iron Resolve, Crushing Strength (2), Headstrong, Heal (3), Inspiring, Nimble",
        "options": [],
        "ovals": [],
        "limit": 1
      }
    ]
  },
  {
    "faction": "The Brotherhood",
    "alignment": 0,
    "special": "Noble Heroes",
    "units": [
      {
        "name": "Villein Plowshares*",
        "mType": "I",
        "irregular": 1,
        "unitType": [
          "R",
          "H",
          "L"
        ],
        "models": [
          20,
          40,
          60
        ],
        "values": [
          85,
          140,
          205
        ],
        "nerve": [
          "12/14",
          "19/21",
          "25/27"
        ],
        "att": [
          12,
          25,
          30
        ],
        "stats": [
          5,
          5,
          0,
          3
        ],
        "special": "Crushing Strength (1)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Villein Spearmen",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          10,
          20,
          40
        ],
        "values": [
          75,
          110,
          180
        ],
        "nerve": [
          "8/10",
          "12/14",
          "19/21"
        ],
        "att": [
          10,
          15,
          30
        ],
        "stats": [
          5,
          4,
          0,
          4
        ],
        "special": "Phalanx",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Villein Bowmen",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          10,
          20,
          40
        ],
        "values": [
          85,
          115,
          190
        ],
        "nerve": [
          "8/10",
          "12/14",
          "19/21"
        ],
        "att": [
          8,
          10,
          20
        ],
        "stats": [
          5,
          6,
          5,
          3
        ],
        "special": "Bows (range 24&quot;), Phalanx, Piercing (1), Reload!",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Swain's Villein Rangers [1]",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T"
        ],
        "models": [
          10
        ],
        "values": [
          185
        ],
        "nerve": [
          "13/15"
        ],
        "att": [
          10
        ],
        "stats": [
          5,
          4,
          4,
          3
        ],
        "special": "Bows (range 24&quot;), Elite, Inspiring (Villeins only), Valiant, Piercing (1), Stealthy, Vanguard",
        "options": [],
        "ovals": [],
        "limit": 1
      },
      {
        "name": "Order of the Brotherhood on foot",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          10,
          20
        ],
        "values": [
          105,
          150
        ],
        "nerve": [
          "11/13",
          "15/17"
        ],
        "att": [
          10,
          12
        ],
        "stats": [
          5,
          3,
          0,
          5
        ],
        "special": "Headstrong, Valiant (Villeins only)",
        "options": [
          "Two-handed weapons: CS (1), De [4+]"
        ],
        "ovals": [
          0
        ],
        "limit": 0
      },
      {
        "name": "Villein Martyrs",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          10,
          20,
          40
        ],
        "values": [
          80,
          115,
          190
        ],
        "nerve": [
          "-/11",
          "-/15",
          "-/22"
        ],
        "att": [
          10,
          12,
          25
        ],
        "stats": [
          5,
          4,
          0,
          4
        ],
        "special": "Regeneration (6+)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Water Elementals",
        "mType": "LI",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          150,
          220
        ],
        "nerve": [
          "-/14",
          "-/17"
        ],
        "att": [
          9,
          18
        ],
        "stats": [
          7,
          4,
          0,
          5
        ],
        "special": "Crushing Strength (1), Pathfinder, Regeneration (5+), Shambling",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Order of the Brotherhood",
        "mType": "C",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          10,
          20
        ],
        "values": [
          205,
          345
        ],
        "nerve": [
          "15/17",
          "22/24"
        ],
        "att": [
          16,
          32
        ],
        "stats": [
          8,
          3,
          0,
          5
        ],
        "special": "Headstrong, Thunderous Charge (2), Valiant (Villeins only)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Order of the Abyssal Hunt",
        "mType": "C",
        "irregular": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          5,
          10
        ],
        "values": [
          145,
          220
        ],
        "nerve": [
          "12/15",
          "15/18"
        ],
        "att": [
          9,
          18
        ],
        "stats": [
          8,
          3,
          0,
          4
        ],
        "special": "Crushing Strength (1), Fury, Thunderous Charge (1), Valiant (Villeins only), Vicious (vs Monsters only)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Villein Initiates",
        "mType": "C",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          10,
          20
        ],
        "values": [
          165,
          280
        ],
        "nerve": [
          "13/15",
          "20/22"
        ],
        "att": [
          16,
          32
        ],
        "stats": [
          8,
          4,
          0,
          5
        ],
        "special": "Thunderous Charge (2)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Order of Redemption*",
        "mType": "C",
        "irregular": 1,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          5,
          10
        ],
        "values": [
          170,
          260
        ],
        "nerve": [
          "12/14",
          "15/17"
        ],
        "att": [
          10,
          20
        ],
        "stats": [
          8,
          3,
          0,
          5
        ],
        "special": "Headstrong, Inspiring, Valiant, Regeneration (5+), Thunderous Charge (2)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Villein Reconnoiterers",
        "mType": "C",
        "irregular": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          5,
          10
        ],
        "values": [
          100,
          150
        ],
        "nerve": [
          "9/11",
          "12/14"
        ],
        "att": [
          7,
          14
        ],
        "stats": [
          9,
          4,
          0,
          4
        ],
        "special": "Nimble, Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Order of the Forsaken",
        "mType": "LC",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          170,
          265
        ],
        "nerve": [
          "12/14",
          "15/17"
        ],
        "att": [
          9,
          18
        ],
        "stats": [
          10,
          3,
          0,
          5
        ],
        "special": "Fly, Headstrong, Thunderous Charge (2), Valiant (Villeins only)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Villein Siege Artillery",
        "mType": "W",
        "irregular": 0,
        "unitType": [
          "W"
        ],
        "models": [
          1
        ],
        "values": [
          80
        ],
        "nerve": [
          "8/10"
        ],
        "att": [
          1
        ],
        "stats": [
          5,
          0,
          5,
          4
        ],
        "special": "Blast (D6+2), Indirect Fire, Piercing (3), Reload!",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Villein Ballista",
        "mType": "W",
        "irregular": 0,
        "unitType": [
          "W"
        ],
        "models": [
          1
        ],
        "values": [
          55
        ],
        "nerve": [
          "8/10"
        ],
        "att": [
          1
        ],
        "stats": [
          5,
          0,
          5,
          4
        ],
        "special": "Blast (D3+2), Piercing (3), Reload!",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Greater Water Elemental",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "M"
        ],
        "models": [
          1
        ],
        "values": [
          190
        ],
        "nerve": [
          "-/18"
        ],
        "att": [
          8
        ],
        "stats": [
          7,
          4,
          0,
          5
        ],
        "special": "Crushing Strength (2), Pathfinder, Regeneration (5+), Shambling",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Forsaken Beast",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "M"
        ],
        "models": [
          1
        ],
        "values": [
          125
        ],
        "nerve": [
          "15/17"
        ],
        "att": [
          8
        ],
        "stats": [
          6,
          4,
          0,
          5
        ],
        "special": "Crushing Strength (2)",
        "options": [
          "Breath Attack (10)",
          "Ensnare",
          "Vicious",
          "Regenerate (5+)",
          "Bane Chant (2)",
          "Mind Fog (1)",
          "Weakness (2)",
          "Hex (2)",
          "Drain Life (6)"
        ],
        "ovals": [
          15,
          30,
          15,
          30,
          15,
          10,
          20,
          20,
          25
        ],
        "limit": 0
      },
      {
        "name": "Exemplar of the Brotherhood",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          70
        ],
        "nerve": [
          "11/13"
        ],
        "att": [
          3
        ],
        "stats": [
          5,
          3,
          0,
          5
        ],
        "special": "Hero (Inf), Crushing Strength (1), Headstrong, Individual, Valiant (Villeins only)",
        "options": [
          "Mount on Brotherhood Warhorse (increase Speed to 8, gain Thunderous Charge (1), change to Hero (Cav))"
        ],
        "ovals": [
          20
        ],
        "limit": 0
      },
      {
        "name": "Exemplar Redeemer",
        "mType": "C",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          170
        ],
        "nerve": [
          "13/15"
        ],
        "att": [
          5
        ],
        "stats": [
          8,
          3,
          0,
          5
        ],
        "special": "Hero (Cav), Crushing Strength (1), Headstrong, Individual, Inspiring, Valiant, Regeneration (5+), Thunderous Charge (2)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Devoted",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          60
        ],
        "nerve": [
          "11/13"
        ],
        "att": [
          1
        ],
        "stats": [
          5,
          5,
          0,
          4
        ],
        "special": "Hero (Inf), Heal (2), Individual",
        "options": [
          "Increase Heal to (4)",
          "Lightning Bolt (3)",
          "Wind Blast (5)",
          "Surge (5)",
          "Mind Fog (1)",
          "Weakness (2)",
          "Hex (2)",
          "Drain Life (6)",
          "Blinding Light (1)*",
          "Barkskin (1)*",
          "Guiding Light (2)*",
          "Teleport (3)*",
          "Critter's Call (8)*",
          "Martyr's Prayer (7)*",
          "Spell Siphon (2)*",
          "Alchemist's Curse (10)*",
          "Blizzard (2)*",
          "Blood Boil*",
          "Mount on horse (increase Speed to 9, change to Hero (Cav))"
        ],
        "ovals": [
          20,
          20,
          30,
          30,
          10,
          20,
          20,
          25,
          10,
          10,
          15,
          15,
          20,
          25,
          25,
          30,
          30,
          30,
          10
        ],
        "limit": 0
      },
      {
        "name": "Exemplar Forsaker",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          200
        ],
        "nerve": [
          "15/17"
        ],
        "att": [
          7
        ],
        "stats": [
          10,
          3,
          0,
          5
        ],
        "special": "Hero (Mon), Crushing Strength (1), Fly, Headstrong, Inspiring, Valiant, Thunderous Charge (2)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Exemplar Hunter",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          90
        ],
        "nerve": [
          "12/14"
        ],
        "att": [
          4
        ],
        "stats": [
          5,
          3,
          0,
          4
        ],
        "special": "Hero (Inf), Crushing Strength (2), Fury, Individual, Inspiring, Valiant, Vicious (vs Monsters only)",
        "options": [
          "Mount on Brotherhood Warhorse (increase Speed to 8, gain Thunderous Charge (1), change to Hero (Cav))"
        ],
        "ovals": [
          30
        ],
        "limit": 0
      },
      {
        "name": "Exemplar Adjutant",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          55
        ],
        "nerve": [
          "10/12"
        ],
        "att": [
          1
        ],
        "stats": [
          5,
          5,
          0,
          4
        ],
        "special": "Hero (Inf), Headstrong, Individual, Inspiring, Valiant",
        "options": [
          "Mount on a barded horse (increase Speed to 8 and De 5+, change to Hero (Cav))"
        ],
        "ovals": [
          20
        ],
        "limit": 0
      }
    ]
  },
  {
    "faction": "Dwarfs",
    "alignment": 0,
    "special": "Grizzled Veterans",
    "units": [
      {
        "name": "Berserkers",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          10,
          20
        ],
        "values": [
          125,
          180
        ],
        "nerve": [
          "-/16",
          "-/22"
        ],
        "att": [
          20,
          25
        ],
        "stats": [
          5,
          4,
          0,
          3
        ],
        "special": "Headstrong",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Bulwarkers",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          10,
          20,
          40
        ],
        "values": [
          105,
          150,
          250
        ],
        "nerve": [
          "10/12",
          "14/16",
          "21/23"
        ],
        "att": [
          10,
          15,
          30
        ],
        "stats": [
          4,
          4,
          0,
          5
        ],
        "special": "Headstrong, Phalanx, Big Shield",
        "options": [
          "Dwarven Throwing Mastiff"
        ],
        "ovals": [
          10
        ],
        "limit": 0
      },
      {
        "name": "Ironclad",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          10,
          20,
          40
        ],
        "values": [
          75,
          110,
          180
        ],
        "nerve": [
          "10/12",
          "14/16",
          "21/23"
        ],
        "att": [
          10,
          12,
          25
        ],
        "stats": [
          4,
          4,
          0,
          5
        ],
        "special": "Headstrong",
        "options": [
          "Dwarven Throwing Mastiff"
        ],
        "ovals": [
          10
        ],
        "limit": 0
      },
      {
        "name": "Ironguard",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          10,
          20
        ],
        "values": [
          110,
          160
        ],
        "nerve": [
          "11/13",
          "15/17"
        ],
        "att": [
          10,
          12
        ],
        "stats": [
          4,
          3,
          0,
          6
        ],
        "special": "Headstrong",
        "options": [
          "2H Weapons: De[5+], Crushing Strength (1)",
          "Dwarven Throwing Mastiff"
        ],
        "ovals": [
          0,
          10
        ],
        "limit": 0
      },
      {
        "name": "Ironwatch Crossbows",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          10,
          20,
          40
        ],
        "values": [
          100,
          135,
          235
        ],
        "nerve": [
          "10/12",
          "14/16",
          "21/23"
        ],
        "att": [
          8,
          10,
          20
        ],
        "stats": [
          4,
          5,
          5,
          4
        ],
        "special": "Headstrong, Crossbows (range 24&quot;), Piercing (1), Reload!",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Ironwatch Rifles",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          10,
          20,
          40
        ],
        "values": [
          115,
          155,
          255
        ],
        "nerve": [
          "10/12",
          "14/16",
          "21/23"
        ],
        "att": [
          8,
          10,
          20
        ],
        "stats": [
          4,
          5,
          5,
          4
        ],
        "special": "Headstrong, Rifles (range 24&quot;), Piercing (2), Reload!",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Rangers",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          10,
          20
        ],
        "values": [
          135,
          180
        ],
        "nerve": [
          "10/12",
          "14/16"
        ],
        "att": [
          10,
          12
        ],
        "stats": [
          5,
          4,
          4,
          4
        ],
        "special": "Headstrong, Light Crossbows (range 24&quot;), Crushing Strength (1), Pathfinder, Vanguard)",
        "options": [
          "Dwarven Throwing Mastiff",
          "Ranger Patrol: Elite, Stealthy (requires Herneas the Hunter)"
        ],
        "ovals": [
          10,
          20
        ],
        "limit": 0
      },
      {
        "name": "Sharpshooters",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T"
        ],
        "models": [
          5
        ],
        "values": [
          100
        ],
        "nerve": [
          "9/11"
        ],
        "att": [
          5
        ],
        "stats": [
          4,
          5,
          4,
          5
        ],
        "special": "Headstrong, Long Rifles (range 36&quot;), Piercing (2), Reload!",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Shieldbreakers",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          10,
          20,
          40
        ],
        "values": [
          90,
          130,
          215
        ],
        "nerve": [
          "10/12",
          "14/16",
          "21/23"
        ],
        "att": [
          10,
          12,
          25
        ],
        "stats": [
          4,
          4,
          0,
          4
        ],
        "special": "Headstrong, Crushing Strength (2)",
        "options": [
          "Dwarven Throwing Mastiff"
        ],
        "ovals": [
          10
        ],
        "limit": 0
      },
      {
        "name": "Earth Elementals",
        "mType": "LI",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          130,
          200
        ],
        "nerve": [
          "-/14",
          "-/17"
        ],
        "att": [
          9,
          18
        ],
        "stats": [
          5,
          4,
          0,
          6
        ],
        "special": "Headstrong, Crushing Strength (1), Pathfinder, Shambling",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Berserker Brock Riders",
        "mType": "C",
        "irregular": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          5,
          10
        ],
        "values": [
          135,
          210
        ],
        "nerve": [
          "-/16",
          "-/22"
        ],
        "att": [
          13,
          26
        ],
        "stats": [
          8,
          4,
          0,
          4
        ],
        "special": "Headstrong, Thunderous Charge (1), Vicious",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Mastiff Hunting Pack*",
        "mType": "LI",
        "irregular": 1,
        "unitType": [
          "T"
        ],
        "models": [
          3
        ],
        "values": [
          65
        ],
        "nerve": [
          "11/13"
        ],
        "att": [
          9
        ],
        "stats": [
          6,
          4,
          0,
          3
        ],
        "special": "Height 0, Crushing Strength (1 - vs. Cavalry only), this unit does not have Headstrong",
        "options": [
          "Dwarven Throwing Mastiff"
        ],
        "ovals": [
          10
        ],
        "limit": 0
      },
      {
        "name": "Battle Driller",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "M"
        ],
        "models": [
          1
        ],
        "values": [
          70
        ],
        "nerve": [
          "10/12"
        ],
        "att": [
          "D6+6"
        ],
        "stats": [
          4,
          4,
          0,
          5
        ],
        "special": "Headstrong, Base Size: 25x50mm, Height 1, Brutal, Crushing Strength (1), Individual",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Great Earth Elemental",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "M"
        ],
        "models": [
          1
        ],
        "values": [
          160
        ],
        "nerve": [
          "-/18"
        ],
        "att": [
          8
        ],
        "stats": [
          5,
          4,
          0,
          6
        ],
        "special": "Headstrong, Crushing Strength (3), Pathfinder, Shambling",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Steel Behemoth",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "M"
        ],
        "models": [
          1
        ],
        "values": [
          250
        ],
        "nerve": [
          "18/20"
        ],
        "att": [
          "D6+20"
        ],
        "stats": [
          4,
          5,
          0,
          6
        ],
        "special": "Headstrong, Base Size: 50x100mm, Breath Attack (10), Piercing (1), Crushing Strength (3), Strider",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Flame Belcher",
        "mType": "W",
        "irregular": 0,
        "unitType": [
          "W"
        ],
        "models": [
          1
        ],
        "values": [
          85
        ],
        "nerve": [
          "10/12"
        ],
        "att": [
          18
        ],
        "stats": [
          4,
          0,
          0,
          5
        ],
        "special": "Headstrong, Breath Attack (Att), Elite (within 6&quot; of Friendly Warsmith)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Ironbelcher Cannon",
        "mType": "W",
        "irregular": 0,
        "unitType": [
          "W"
        ],
        "models": [
          1
        ],
        "values": [
          110
        ],
        "nerve": [
          "10/12"
        ],
        "att": [
          1
        ],
        "stats": [
          4,
          0,
          5,
          5
        ],
        "special": "Headstrong, Blast (D6+2*), Piercing (4), Reload!,  Blast (D6+3) while within 6&quot; of Friendly Warsmith",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Ironbelcher Organ Gun",
        "mType": "W",
        "irregular": 0,
        "unitType": [
          "W"
        ],
        "models": [
          1
        ],
        "values": [
          85
        ],
        "nerve": [
          "10/12"
        ],
        "att": [
          15
        ],
        "stats": [
          4,
          0,
          5,
          5
        ],
        "special": "Headstrong, range 24&quot;, Piercing (2), Reload!, Elite (within 6&quot; of Friendly Warsmith)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Jarrun Bombard",
        "mType": "W",
        "irregular": 0,
        "unitType": [
          "W"
        ],
        "models": [
          1
        ],
        "values": [
          110
        ],
        "nerve": [
          "10/12"
        ],
        "att": [
          1
        ],
        "stats": [
          4,
          0,
          5,
          5
        ],
        "special": "Headstrong, Blast (D6+3), Lob It!, Piercing (2), Reload!",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "King",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          120
        ],
        "nerve": [
          "13/15"
        ],
        "att": [
          5
        ],
        "stats": [
          4,
          3,
          0,
          6
        ],
        "special": "Headstrong, Crushing Strength (1), Individual, Inspiring",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "King on Large Beast",
        "mType": "LC",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          170
        ],
        "nerve": [
          "13/15"
        ],
        "att": [
          7
        ],
        "stats": [
          7,
          3,
          0,
          6
        ],
        "special": "Headstrong, Crushing Strength (1), Thunderous Charge (2), Inspiring",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Steel Juggernaut",
        "mType": "LI",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          120
        ],
        "nerve": [
          "-/13"
        ],
        "att": [
          2
        ],
        "stats": [
          4,
          3,
          5,
          6
        ],
        "special": "Height 1, Headstrong, Blast (D3), Crushing Strength (2), Hand Cannon: Range 24&quot;, Piercing (2), Nimble",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Berserker Lord",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          120
        ],
        "nerve": [
          "-/17"
        ],
        "att": [
          8
        ],
        "stats": [
          5,
          3,
          0,
          4
        ],
        "special": "Headstrong, Crushing Strength (1), Individual, Inspiring (Berserkers only)",
        "options": [
          "Mounted: Sp[8], Vicious, Hero (Cav)"
        ],
        "ovals": [
          30
        ],
        "limit": 0
      },
      {
        "name": "Ranger Captain",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          80
        ],
        "nerve": [
          "11/13"
        ],
        "att": [
          3
        ],
        "stats": [
          5,
          3,
          4,
          5
        ],
        "special": "Headstrong, Light Crossbow (range 24&quot;), Crushing Strength (1), Individual, Inspiring (Rangers only), Pathfinder, Vanguard",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Warsmith",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          85
        ],
        "nerve": [
          "11/13"
        ],
        "att": [
          2
        ],
        "stats": [
          4,
          4,
          4,
          5
        ],
        "special": "Headstrong, Pistol (range 12&quot;), Crushing Strength (1), Individual, Inspiring (War Engines only), Piercing (1)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Stone Priest",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          105
        ],
        "nerve": [
          "11/13"
        ],
        "att": [
          2
        ],
        "stats": [
          4,
          4,
          0,
          5
        ],
        "special": "Headstrong, Individual, Inspiring (Earth Elementals only), Surge (8)",
        "options": [
          "Bane Chant (2)",
          "Mind Fog (1)",
          "Weakness (2)",
          "Hex (2)",
          "Drain Life (6)",
          "Blinding Light (1)*",
          "Barkskin (1)*",
          "Guiding Light (2)*",
          "Teleport (3)*",
          "Critter's Call (8)*",
          "Martyr's Prayer (7)*",
          "Spell Siphon (2)*",
          "Alchemist's Curse (10)*",
          "Blizzard (2)*",
          "Blood Boil*"
        ],
        "ovals": [
          15,
          10,
          20,
          20,
          25,
          10,
          10,
          15,
          15,
          20,
          25,
          25,
          30,
          30,
          30
        ],
        "limit": 0
      },
      {
        "name": "Flame Priest",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          65
        ],
        "nerve": [
          "11/13"
        ],
        "att": [
          1
        ],
        "stats": [
          4,
          4,
          0,
          5
        ],
        "special": "Headstrong, Individual, Fireball (6)",
        "options": [
          "Bane Chant (2)",
          "Increase Fireball to 10",
          "Mind Fog (1)",
          "Weakness (2)",
          "Hex (2)",
          "Drain Life (6)",
          "Blinding Light (1)*",
          "Barkskin (1)*",
          "Guiding Light (2)*",
          "Teleport (3)*",
          "Critter's Call (8)*",
          "Martyr's Prayer (7)*",
          "Spell Siphon (2)*",
          "Alchemist's Curse (10)*",
          "Blizzard (2)*",
          "Blood Boil*"
        ],
        "ovals": [
          15,
          15,
          10,
          20,
          20,
          25,
          10,
          10,
          15,
          15,
          20,
          25,
          25,
          30,
          30,
          30
        ],
        "limit": 0
      },
      {
        "name": "Army Standard Bearer",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          50
        ],
        "nerve": [
          "10/12"
        ],
        "att": [
          1
        ],
        "stats": [
          4,
          5,
          0,
          5
        ],
        "special": "Headstrong, Individual, Inspiring",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Garrek Heavyhand [1]",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          150
        ],
        "nerve": [
          "14/16"
        ],
        "att": [
          5
        ],
        "stats": [
          4,
          3,
          0,
          6
        ],
        "special": "Headstrong, Crushing Strength (3), Regeneration (6+), Individual, Inspiring",
        "options": [],
        "ovals": [],
        "limit": 1
      },
      {
        "name": "Herneas the Hunter [1]",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          140
        ],
        "nerve": [
          "12/14"
        ],
        "att": [
          3
        ],
        "stats": [
          5,
          3,
          3,
          5
        ],
        "special": "Headstrong, Bow (range 24&quot;), Piercing (3), Crushing Strength (2), Individual, Inspiring (Rangers only), Pathfinder, Stealthy, Vanguard",
        "options": [],
        "ovals": [],
        "limit": 1
      },
      {
        "name": "Sveri Egilax [1]",
        "mType": "LC",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          240
        ],
        "nerve": [
          "-/19"
        ],
        "att": [
          10
        ],
        "stats": [
          8,
          3,
          0,
          4
        ],
        "special": "Headstrong, Crushing Strength (1), Elite, Inspiring, Thunderous Charge (1), Vicious",
        "options": [],
        "ovals": [],
        "limit": 1
      },
      {
        "name": "Golloch's Fury [1]: Steel Behemoth",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          340
        ],
        "nerve": [
          "18/20"
        ],
        "att": [
          "D6+25"
        ],
        "stats": [
          4,
          5,
          4,
          6
        ],
        "special": "Headstrong, Base Size: 50x100mm, Iron Resolve, Very Inspiring, Piercing (2), Crushing Strength (3), Strider, Golloch's Gun (15 attacks with range 18&quot;)",
        "options": [],
        "ovals": [],
        "limit": 1
      },
      {
        "name": "Craggoth [1]: Greater Earth Elemental",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          200
        ],
        "nerve": [
          "-/18"
        ],
        "att": [
          "8"
        ],
        "stats": [
          5,
          3,
          0,
          6
        ],
        "special": "Headstrong, Crushing Strength (3), Pathfinder, Shambling, Vanguard",
        "options": [],
        "ovals": [],
        "limit": 1
      },
      {
        "name": "Banick Kholearm [1]",
        "mType": "C",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          130
        ],
        "nerve": [
          "12/14"
        ],
        "att": [
          "D6 + 6"
        ],
        "stats": [
          5,
          3,
          0,
          5
        ],
        "special": "Brutal, Crushing Strength (2), Headstrong, Height 1, Individual, Inspiring (Craggoth only), Vanguard",
        "options": [],
        "ovals": [],
        "limit": 1
      },
      {
        "name": "Rordin the Dwarf [1]",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          110
        ],
        "nerve": [
          "12/14"
        ],
        "att": [
          "5"
        ],
        "stats": [
          4,
          3,
          0,
          6
        ],
        "special": "Crushing Strength (3), Headstrong, Individual, Inspiring, Now I'm Angry (Once per game after an enemy unit rolls to damage Rordin the player can force the opponent to re-roll all successful damage rolls)",
        "options": [],
        "ovals": [],
        "limit": 1
      }
    ]
  },
  {
    "faction": "Elves",
    "alignment": 0,
    "special": "Battle Hardened",
    "units": [
      {
        "name": "Hunters of the Wild",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          10,
          20
        ],
        "values": [
          135,
          190
        ],
        "nerve": [
          "10/12",
          "14/16"
        ],
        "att": [
          20,
          25
        ],
        "stats": [
          6,
          4,
          0,
          4
        ],
        "special": "Vanguard, Pathfinder, not Elite",
        "options": [
          "Wild Guard: Headstrong, Regeneration (5+) (requires Green Lady)"
        ],
        "ovals": [
          20
        ],
        "limit": 0
      },
      {
        "name": "Kindred Archers",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          10,
          20,
          40
        ],
        "values": [
          115,
          150,
          250
        ],
        "nerve": [
          "10/12",
          "14/16",
          "21/23"
        ],
        "att": [
          8,
          10,
          20
        ],
        "stats": [
          6,
          5,
          4,
          4
        ],
        "special": "Elite, Bows (range 24&quot;)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Kindred Gladestalkers",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          10,
          20
        ],
        "values": [
          130,
          175
        ],
        "nerve": [
          "10/12",
          "14/16"
        ],
        "att": [
          8,
          10
        ],
        "stats": [
          6,
          4,
          4,
          3
        ],
        "special": "Elite, Bows (range 24&quot;), Pathfinder, Vanguard",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Kindred Tallspears",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          10,
          20,
          40
        ],
        "values": [
          100,
          140,
          230
        ],
        "nerve": [
          "10/12",
          "14/16",
          "21/23"
        ],
        "att": [
          10,
          15,
          30
        ],
        "stats": [
          6,
          4,
          0,
          4
        ],
        "special": "Elite, Phalanx",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Palace Guard",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          10,
          20
        ],
        "values": [
          105,
          150
        ],
        "nerve": [
          "11/13",
          "15/17"
        ],
        "att": [
          10,
          12
        ],
        "stats": [
          6,
          3,
          0,
          4
        ],
        "special": "Elite, Crushing Strength (1)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Therennian Sea Guard",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          20,
          40
        ],
        "values": [
          170,
          280
        ],
        "nerve": [
          "14/16",
          "21/23"
        ],
        "att": [
          12,
          25
        ],
        "stats": [
          6,
          4,
          5,
          4
        ],
        "special": "Elite, Bows (range 24&quot;), Phalanx",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Forest Shamblers",
        "mType": "LI",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          125,
          190
        ],
        "nerve": [
          "-/14",
          "-/17"
        ],
        "att": [
          9,
          18
        ],
        "stats": [
          6,
          4,
          0,
          5
        ],
        "special": "Crushing Strength (1), Pathfinder, Shambling, Vanguard, not Elite",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Awoken Guardians",
        "mType": "LI",
        "irregular": 0,
        "unitType": [
          "H"
        ],
        "models": [
          6
        ],
        "values": [
          215
        ],
        "nerve": [
          "-/17"
        ],
        "att": [
          18
        ],
        "stats": [
          6,
          4,
          0,
          5
        ],
        "special": "Crushing Strength (1), Lifeleech (2), Mindthirst, Pathfinder, Shambling, Vanguard, not Elite",
        "options": [],
        "ovals": [],
        "limit": 1
      },
      {
        "name": "Silverbreeze Cavalry",
        "mType": "C",
        "irregular": 0,
        "unitType": [
          "T"
        ],
        "models": [
          5
        ],
        "values": [
          145
        ],
        "nerve": [
          "11/13"
        ],
        "att": [
          7
        ],
        "stats": [
          10,
          5,
          4,
          4
        ],
        "special": "Elite, Bows (range 24&quot;), Nimble",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Stormwind Cavalry",
        "mType": "C",
        "irregular": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          5,
          10
        ],
        "values": [
          140,
          215
        ],
        "nerve": [
          "11/13",
          "14/16"
        ],
        "att": [
          8,
          16
        ],
        "stats": [
          9,
          3,
          0,
          5
        ],
        "special": "Elite, Thunderous Charge (2)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Drakon Riders",
        "mType": "LC",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          175,
          270
        ],
        "nerve": [
          "12/14",
          "15/17"
        ],
        "att": [
          9,
          18
        ],
        "stats": [
          10,
          3,
          0,
          5
        ],
        "special": "Elite, Crushing Strength (1), Fly, Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "War Chariots",
        "mType": "LC",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          140,
          215
        ],
        "nerve": [
          "13/15",
          "16/18"
        ],
        "att": [
          8,
          16
        ],
        "stats": [
          9,
          4,
          4,
          4
        ],
        "special": "Elite, Bows (range 24&quot;), Base Size: 50x100mm, Thunderous Charge (2)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Battlecats",
        "mType": "I",
        "irregular": 1,
        "unitType": [
          "T"
        ],
        "models": [
          10
        ],
        "values": [
          80
        ],
        "nerve": [
          "10/12"
        ],
        "att": [
          10
        ],
        "stats": [
          7,
          4,
          0,
          2
        ],
        "special": "Crushing Strength (1 - vs Height 0 units only), Height 0, Nimble, Vicious, not Elite",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "The Windborne[1]",
        "mType": "C",
        "irregular": 0,
        "unitType": [
          "T"
        ],
        "models": [
          5
        ],
        "values": [
          170
        ],
        "nerve": [
          "11/13"
        ],
        "att": [
          7
        ],
        "stats": [
          10,
          5,
          0,
          4
        ],
        "special": "Elite, Nimble, Windborne Arrows (Windblast (8) where hits get resolved for damage)",
        "options": [],
        "ovals": [],
        "limit": 1
      },
      {
        "name": "Bolt Thrower",
        "mType": "W",
        "irregular": 0,
        "unitType": [
          "W"
        ],
        "models": [
          1
        ],
        "values": [
          90
        ],
        "nerve": [
          "10/12"
        ],
        "att": [
          2
        ],
        "stats": [
          6,
          0,
          0,
          4
        ],
        "special": "Elite, Blast (D3), Piercing (2), Reload!",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Dragon Breath",
        "mType": "W",
        "irregular": 0,
        "unitType": [
          "W"
        ],
        "models": [
          1
        ],
        "values": [
          90
        ],
        "nerve": [
          "10/12"
        ],
        "att": [
          15
        ],
        "stats": [
          6,
          0,
          0,
          4
        ],
        "special": "Elite, Breath Attack (Att)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Elven King",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          120
        ],
        "nerve": [
          "13/15"
        ],
        "att": [
          5
        ],
        "stats": [
          6,
          3,
          0,
          5
        ],
        "special": "Elite, Crushing Strength (1), Individual, Inspiring",
        "options": [
          "Mounted: Sp[9], Hero (Cav)",
          "Sabre-Toothed Pussycat"
        ],
        "ovals": [
          20,
          10
        ],
        "limit": 0
      },
      {
        "name": "Elven Prince",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          60
        ],
        "nerve": [
          "11/13"
        ],
        "att": [
          3
        ],
        "stats": [
          6,
          3,
          0,
          5
        ],
        "special": "Elite, Crushing Strength (1), Individual",
        "options": [
          "Mounted: Sp[9], Hero (Cav)",
          "Sabre-Toothed Pussycat"
        ],
        "ovals": [
          15,
          10
        ],
        "limit": 0
      },
      {
        "name": "Elven Mage",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          75
        ],
        "nerve": [
          "10/12"
        ],
        "att": [
          1
        ],
        "stats": [
          6,
          5,
          0,
          4
        ],
        "special": "Elite, Heal (3), Individual",
        "options": [
          "Lightning Bolt (5)",
          "Wind Blast (5)",
          "Fireball (10)",
          "Bane Chant (2)",
          "Mind Fog (1)",
          "Weakness (2)",
          "Hex (2)",
          "Drain Life (6)",
          "Blinding Light (1)*",
          "Barkskin (1)*",
          "Guiding Light (2)*",
          "Teleport (3)*",
          "Critter's Call (8)*",
          "Martyr's Prayer (7)*",
          "Spell Siphon (2)*",
          "Alchemist's Curse (10)*",
          "Blizzard (2)*",
          "Blood Boil*",
          "On Horse",
          "Saber-Toothed Pussycat"
        ],
        "ovals": [
          45,
          30,
          10,
          15,
          10,
          20,
          20,
          25,
          10,
          10,
          15,
          15,
          20,
          25,
          25,
          30,
          30,
          30,
          15,
          10
        ],
        "limit": 0
      },
      {
        "name": "Master Hunter",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          90
        ],
        "nerve": [
          "11/13"
        ],
        "att": [
          3
        ],
        "stats": [
          7,
          3,
          3,
          4
        ],
        "special": "Elite, Bow (range 24&quot;), Individual, Pathfinder, Piercing (1), Stealthy, Vanguard",
        "options": [
          "Saber-Toothed Pussycat"
        ],
        "ovals": [
          10
        ],
        "limit": 0
      },
      {
        "name": "Army Standard Bearer",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          50
        ],
        "nerve": [
          "10/12"
        ],
        "att": [
          1
        ],
        "stats": [
          6,
          5,
          0,
          4
        ],
        "special": "Elite, Individual, Inspiring",
        "options": [
          "Mounted: Sp[9], Hero (Cav)"
        ],
        "ovals": [
          15
        ],
        "limit": 0
      },
      {
        "name": "Forest Warden",
        "mType": "LI",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          75
        ],
        "nerve": [
          "11/13"
        ],
        "att": [
          3
        ],
        "stats": [
          6,
          3,
          0,
          5
        ],
        "special": "Pathfinder, Crushing Strength (2), Nimble, Vanguard, Surge (3)",
        "options": [
          "Mind Fog (1)",
          "Weakness (2)",
          "Hex (2)",
          "Drain Life (6)",
          "Blinding Light (1)*",
          "Barkskin (1)*",
          "Guiding Light (2)*",
          "Teleport (3)*",
          "Critter's Call (8)*",
          "Martyr's Prayer (7)*",
          "Spell Siphon (2)*",
          "Alchemist's Curse (10)*",
          "Blizzard (2)*",
          "Blood Boil*"
        ],
        "ovals": [
          10,
          20,
          20,
          25,
          10,
          10,
          15,
          15,
          20,
          25,
          25,
          30,
          30,
          30
        ],
        "limit": 0
      },
      {
        "name": "Drakon Rider Lord",
        "mType": "LC",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          160
        ],
        "nerve": [
          "13/15"
        ],
        "att": [
          5
        ],
        "stats": [
          10,
          3,
          0,
          5
        ],
        "special": "Elite, Crushing Strength (1), Fly, Inspiring, Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Dragon Kindred Lord",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          310
        ],
        "nerve": [
          "17/19"
        ],
        "att": [
          10
        ],
        "stats": [
          10,
          3,
          0,
          5
        ],
        "special": "Elite, Breath Attack (10), Crushing Strength (3), Fly, Inspiring",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Mystical Dragon Kindred Lord",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          340
        ],
        "nerve": [
          "18/20"
        ],
        "att": [
          10
        ],
        "stats": [
          10,
          3,
          0,
          5
        ],
        "special": "Base Size: 75x75mm, Brutal, Elite, Fireball (15), Crushing Strength (3), Fly, Inspiring",
        "options": [
          "Mind Fog (1)",
          "Weakness (2)",
          "Hex (2)",
          "Drain Life (6)",
          "Blinding Light (1)*",
          "Barkskin (1)*",
          "Guiding Light (2)*",
          "Teleport (3)*",
          "Critter's Call (8)*",
          "Martyr's Prayer (7)*",
          "Spell Siphon (2)*",
          "Alchemist's Curse (10)*",
          "Blizzard (2)*",
          "Blood Boil*"
        ],
        "ovals": [
          10,
          20,
          20,
          25,
          10,
          10,
          15,
          15,
          20,
          25,
          25,
          30,
          30,
          30
        ],
        "limit": 0
      },
      {
        "name": "Noble War Chariot",
        "mType": "LC",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          90
        ],
        "nerve": [
          "11/13"
        ],
        "att": [
          4
        ],
        "stats": [
          9,
          3,
          4,
          4
        ],
        "special": "Elite, Bow (range 24&quot;), Base Size: 50x100mm, Nimble, Thunderous Charge (2)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Tree Herder",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          260
        ],
        "nerve": [
          "18/20"
        ],
        "att": [
          7
        ],
        "stats": [
          6,
          3,
          0,
          6
        ],
        "special": "Crushing Strength (3), Inspiring, Pathfinder, Surge (8), Vanguard, not Elite",
        "options": [
          "Mind Fog (1)",
          "Weakness (2)",
          "Hex (2)",
          "Drain Life (6)",
          "Blinding Light (1)*",
          "Barkskin (1)*",
          "Guiding Light (2)*",
          "Teleport (3)*",
          "Critter's Call (8)*",
          "Martyr's Prayer (7)*",
          "Spell Siphon (2)*",
          "Alchemist's Curse (10)*",
          "Blizzard (2)*",
          "Blood Boil*"
        ],
        "ovals": [
          10,
          20,
          20,
          25,
          10,
          10,
          15,
          15,
          20,
          25,
          25,
          30,
          30,
          30
        ],
        "limit": 0
      },
      {
        "name": "Argus Rodinar",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          50
        ],
        "nerve": [
          "-/13"
        ],
        "att": [
          "-"
        ],
        "stats": [
          0,
          0,
          0,
          5
        ],
        "special": "Elite, Base Size: 50x50mm, Altar of the Elements, Individual",
        "options": [],
        "ovals": [],
        "limit": 1
      },
      {
        "name": "The Green Lady",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          200
        ],
        "nerve": [
          "14/16"
        ],
        "att": [
          "-"
        ],
        "stats": [
          10,
          0,
          0,
          6
        ],
        "special": "Elite, Fly, Heal (8), Individual, Pathfinder, Regeneration (5+)",
        "options": [
          "Saber-Toothed Pussycat",
          "Sabre-Toothed Pussycat"
        ],
        "ovals": [
          10,
          10
        ],
        "limit": 1
      },
      {
        "name": "La'theal Silverheart",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          155
        ],
        "nerve": [
          "11/14"
        ],
        "att": [
          1
        ],
        "stats": [
          6,
          5,
          0,
          4
        ],
        "special": "Elite, Individual, Lightning Bolt (5), Mindthirst, Surge (8), Vanguard",
        "options": [],
        "ovals": [],
        "limit": 1
      },
      {
        "name": "Madriga the Elf",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          110
        ],
        "nerve": [
          "11/13"
        ],
        "att": [
          3
        ],
        "stats": [
          6,
          3,
          3,
          4
        ],
        "special": "Elite, Individual, Bow, Pathfinder, Piercing (2), Stealthy, Vanguard, Vicious, Trick Shot (Once per game, instead of firing 3 shots at normal range, Madriga can fire a single shot that has a maximum range of 48&quot;, ignores cover, and has Blast (D6))",
        "options": [],
        "ovals": [],
        "limit": 1
      },
      {
        "name": "Tydarion Dragonlord",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          360
        ],
        "nerve": [
          "18/20"
        ],
        "att": [
          10
        ],
        "stats": [
          10,
          3,
          0,
          5
        ],
        "special": "Base Size: 75x75mm, Breath Attack (15), Brutal, Crushing Strength (4), Elite, Fly, Very Inspiring",
        "options": [],
        "ovals": [],
        "limit": 1
      }
    ]
  },
  {
    "faction": "Salamanders",
    "alignment": 0,
    "special": "Flames of Kthorlaq",
    "units": [
      {
        "name": "Salamander Primes",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          10,
          20,
          40
        ],
        "values": [
          100,
          140,
          230
        ],
        "nerve": [
          "10/12",
          "14/16",
          "21/23"
        ],
        "att": [
          10,
          12,
          25
        ],
        "stats": [
          5,
          4,
          0,
          5
        ],
        "special": "Base Size: 25x25mm, Crushing Strength (1), Pathfinder",
        "options": [
          "Exchange shields for 2H weapons, De 4+, CS (2)"
        ],
        "ovals": [
          0
        ],
        "limit": 0
      },
      {
        "name": "Salamander Unblooded",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          10,
          20,
          40
        ],
        "values": [
          80,
          115,
          190
        ],
        "nerve": [
          "9/11",
          "13/15",
          "20/22"
        ],
        "att": [
          10,
          12,
          25
        ],
        "stats": [
          5,
          4,
          0,
          4
        ],
        "special": "Base Size: 25x25mm, Crushing Strength (1)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Ancients",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          10,
          20
        ],
        "values": [
          120,
          170
        ],
        "nerve": [
          "-/13",
          "-/17"
        ],
        "att": [
          10,
          12
        ],
        "stats": [
          5,
          3,
          0,
          5
        ],
        "special": "Base Size: 25x25mm, Crushing Strength (1)",
        "options": [
          "Exchange shields for 2H weapons, De 4+, CS (2)"
        ],
        "ovals": [
          0
        ],
        "limit": 0
      },
      {
        "name": "Corsairs",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T"
        ],
        "models": [
          10
        ],
        "values": [
          115
        ],
        "nerve": [
          "10/12"
        ],
        "att": [
          10
        ],
        "stats": [
          5,
          4,
          5,
          4
        ],
        "special": "Base Size: 25x25mm, Crushing Strength (1), Piercing (1), Pistol (range 12&quot;), Vanguard",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Ceremonial Guard",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          10,
          20
        ],
        "values": [
          110,
          160
        ],
        "nerve": [
          "10/12",
          "14/16"
        ],
        "att": [
          10,
          15
        ],
        "stats": [
          5,
          4,
          0,
          5
        ],
        "special": "Base Size: 25x25mm, Crushing Strength (1), Phalanx",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Ghekkotah Warriors",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          10,
          20,
          40
        ],
        "values": [
          70,
          100,
          165
        ],
        "nerve": [
          "8/10",
          "12/14",
          "19/21"
        ],
        "att": [
          15,
          20,
          40
        ],
        "stats": [
          6,
          5,
          0,
          3
        ],
        "special": "Base Size: 20x20mm, Vicious",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Ghekkotah Hunters*",
        "mType": "I",
        "irregular": 1,
        "unitType": [
          "T"
        ],
        "models": [
          10
        ],
        "values": [
          100
        ],
        "nerve": [
          "10/12"
        ],
        "att": [
          8
        ],
        "stats": [
          7,
          5,
          5,
          3
        ],
        "special": "Blowpipes (treat as thrown weapons), Nimble, Pathfinder, Vicious",
        "options": [
          "Chameleon Cloak (gains Stealthy)",
          "Swap Blowpipes for Bows"
        ],
        "ovals": [
          10,
          20
        ],
        "limit": 0
      },
      {
        "name": "Fire Elementals",
        "mType": "LI",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          130,
          200
        ],
        "nerve": [
          "-/14",
          "-/17"
        ],
        "att": [
          9,
          18
        ],
        "stats": [
          6,
          4,
          0,
          5
        ],
        "special": "Crushing Strength (2), Pathfinder, Shambling",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Tyrants",
        "mType": "LI",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          135,
          210
        ],
        "nerve": [
          "12/15",
          "15/18"
        ],
        "att": [
          9,
          18
        ],
        "stats": [
          5,
          4,
          0,
          5
        ],
        "special": "Vicious, Crushing Strength (2), Brutal, Fury",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Ember Sprites*",
        "mType": "LI",
        "irregular": 1,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          80,
          125
        ],
        "nerve": [
          "10/12",
          "13/15"
        ],
        "att": [
          6,
          12
        ],
        "stats": [
          5,
          5,
          0,
          3
        ],
        "special": "Breath Attack (6), Height (0), Vicious",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Kaisenor Lancers",
        "mType": "C",
        "irregular": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          5,
          10
        ],
        "values": [
          110,
          170
        ],
        "nerve": [
          "11/13",
          "14/16"
        ],
        "att": [
          9,
          18
        ],
        "stats": [
          8,
          4,
          0,
          4
        ],
        "special": "Vicious, Crushing Strength (1), Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Ghekkotah Skyraiders*",
        "mType": "LC",
        "irregular": 1,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          130,
          200
        ],
        "nerve": [
          "12/14",
          "15/17"
        ],
        "att": [
          9,
          18
        ],
        "stats": [
          10,
          4,
          4,
          3
        ],
        "special": "Blowpipes, Fly, Vicious",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Ancients on Rhinosaurs",
        "mType": "LC",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          180,
          275
        ],
        "nerve": [
          "-/15",
          "-/18"
        ],
        "att": [
          9,
          18
        ],
        "stats": [
          7,
          3,
          0,
          5
        ],
        "special": "Brutal, Crushing Strength (2), Thunderous Charge (2)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Komodon",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "M"
        ],
        "models": [
          1
        ],
        "values": [
          125
        ],
        "nerve": [
          "11/13"
        ],
        "att": [
          3
        ],
        "stats": [
          5,
          5,
          5,
          4
        ],
        "special": "Blast (D3), Crushing Strength (1), Piercing (2), range 36&quot;, Vicious",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Greater Fire Elemental",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "M"
        ],
        "models": [
          1
        ],
        "values": [
          160
        ],
        "nerve": [
          "-/18"
        ],
        "att": [
          8
        ],
        "stats": [
          6,
          4,
          0,
          5
        ],
        "special": "Breath Attack (6), Crushing Strength (4), Pathfinder, Shambling",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Lekelidon",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "M"
        ],
        "models": [
          1
        ],
        "values": [
          95
        ],
        "nerve": [
          "11/13"
        ],
        "att": [
          5
        ],
        "stats": [
          6,
          5,
          3,
          4
        ],
        "special": "Crushing Strength (1), Firebolt, Height (2), Piercing (1)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Fire Drake",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "M"
        ],
        "models": [
          1
        ],
        "values": [
          190
        ],
        "nerve": [
          "14/16"
        ],
        "att": [
          8
        ],
        "stats": [
          7,
          4,
          0,
          5
        ],
        "special": "Breath Attack (16), Crushing Strength (1), Thunderous Charge (1), Vicious",
        "options": [
          "Swap Blowpipes for Firebolt"
        ],
        "ovals": [
          0
        ],
        "limit": 0
      },
      {
        "name": "Ankylodon Battle Platform",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "M"
        ],
        "models": [
          1
        ],
        "values": [
          250
        ],
        "nerve": [
          "-/17"
        ],
        "att": [
          10
        ],
        "stats": [
          6,
          4,
          5,
          6
        ],
        "special": "Base Size: 50x100mm, Blowpipes, Crushing Strength (4), Iron Resolve, Vicious (Ranged attacks only)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Clan Lord",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          140
        ],
        "nerve": [
          "13/15"
        ],
        "att": [
          5
        ],
        "stats": [
          5,
          3,
          0,
          5
        ],
        "special": "Hero (Inf), Base Size: 25x25mm, Crushing Strength (2), Vicious, Individual, Inspiring",
        "options": [
          "Mount on Kaisenor Raptor Mount (increase Speed to 8, gain Thunderous Charge (1), change to Hero (Cav))",
          "Gain Firebolt (using Ra 5+)"
        ],
        "ovals": [
          30,
          15
        ],
        "limit": 0
      },
      {
        "name": "Herald",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          60
        ],
        "nerve": [
          "10/12"
        ],
        "att": [
          1
        ],
        "stats": [
          5,
          4,
          0,
          5
        ],
        "special": "Hero (Inf), Base Size: 25x25mm, Crushing Strength (1), Individual, Inspiring",
        "options": [
          "Mount on Kaisenor Raptor Mount (increase Speed to 8, gain Thunderous Charge (1), change to Hero (Cav))"
        ],
        "ovals": [
          20
        ],
        "limit": 0
      },
      {
        "name": "Herald on Kaisenor Raptor Mount",
        "mType": "C",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          80
        ],
        "nerve": [
          "10/12"
        ],
        "att": [
          1
        ],
        "stats": [
          8,
          4,
          0,
          5
        ],
        "special": "Hero (Cav), Crushing Strength (1), Individual, Inspiring, Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Mage-Priest",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          90
        ],
        "nerve": [
          "10/12"
        ],
        "att": [
          2
        ],
        "stats": [
          5,
          4,
          0,
          5
        ],
        "special": "Hero (Inf), Base Size: 25x25mm, Crushing Strength (1), Elite, Fireball (10), Individual",
        "options": [
          "Mount on Kaisenor Raptor Mount (increase Speed to 8, gain Thunderous Charge (1), change to Hero (Cav))",
          "Bane Chant (2)",
          "Surge (8)",
          "Heal (3)",
          "Mind Fog (1)",
          "Weakness (2)",
          "Hex (2)",
          "Drain Life (6)",
          "Blinding Light (1)*",
          "Barkskin (1)*",
          "Guiding Light (2)*",
          "Teleport (3)*",
          "Critter's Call (8)*",
          "Martyr's Prayer (7)*",
          "Spell Siphon (2)*",
          "Alchemist's Curse (10)*",
          "Blizzard (2)*",
          "Blood Boil*"
        ],
        "ovals": [
          20,
          15,
          35,
          15,
          10,
          20,
          20,
          25,
          10,
          10,
          15,
          15,
          20,
          25,
          25,
          30,
          30,
          30
        ],
        "limit": 0
      },
      {
        "name": "Battle-Captain",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          75
        ],
        "nerve": [
          "11/13"
        ],
        "att": [
          4
        ],
        "stats": [
          5,
          3,
          0,
          5
        ],
        "special": "Hero (Inf), Base Size: 25x25mm, Crushing Strength (2), Individual",
        "options": [
          "Mount on Kaisenor Raptor Mount (increase Speed to 8, gain Thunderous Charge (1), change to Hero (Cav))"
        ],
        "ovals": [
          20
        ],
        "limit": 0
      },
      {
        "name": "Battle-Captain on Rhinosaur",
        "mType": "C",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          135
        ],
        "nerve": [
          "13/15"
        ],
        "att": [
          6
        ],
        "stats": [
          7,
          3,
          0,
          5
        ],
        "special": "Hero (LrgCav), Brutal, Crushing Strength (2), Thunderous Charge (2)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Clan Lord on Fire Drake",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          235
        ],
        "nerve": [
          "15/17"
        ],
        "att": [
          8
        ],
        "stats": [
          7,
          3,
          0,
          5
        ],
        "special": "Hero (Mon), Breath Attack (16), Crushing Strength (2), Vicious, Thunderous Charge (1), Inspiring",
        "options": [
          "Wings (gain Fly and increase Speed to 10)"
        ],
        "ovals": [
          45
        ],
        "limit": 0
      },
      {
        "name": "Ghekkotah Clutch Warden",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          85
        ],
        "nerve": [
          "10/12"
        ],
        "att": [
          3
        ],
        "stats": [
          7,
          4,
          4,
          4
        ],
        "special": "Hero (Inf), Blowpipes, Individual, Inspiring (Ghekkotah only), Pathfinder, Vicious",
        "options": [
          "Chameleon Cloak (gains Stealthy)"
        ],
        "ovals": [
          20
        ],
        "limit": 0
      },
      {
        "name": "Ghekkotah Skylord",
        "mType": "C",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          130
        ],
        "nerve": [
          "11/13"
        ],
        "att": [
          5
        ],
        "stats": [
          10,
          3,
          3,
          4
        ],
        "special": "Hero (LrgCav), Blowpipes, Fly, Inspiring (Ghekkotah only), Vicious",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Firebrand [1]",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          120
        ],
        "nerve": [
          "-/15"
        ],
        "att": [
          5
        ],
        "stats": [
          5,
          3,
          4,
          4
        ],
        "special": "Hero (Inf), Base Size: 25x25mm, Fearless (non-Allied Corsair units within 6&quot;), Individual, Inspiring (Corsairs only), Piercing (1), Pistol (range 12&quot;), Vanguard",
        "options": [],
        "ovals": [],
        "limit": 1
      }
    ]
  },
  {
    "faction": "Forces of Nature",
    "alignment": 1,
    "special": "Creatures of Nature",
    "units": [
      {
        "name": "Hunters of the Wild",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          10,
          20
        ],
        "values": [
          135,
          190
        ],
        "nerve": [
          "10/12",
          "14/16"
        ],
        "att": [
          20,
          25
        ],
        "stats": [
          6,
          4,
          0,
          4
        ],
        "special": "Pathfinder, Vanguard",
        "options": [
          "Wild Guard: Headstrong, Regeneration (5+) (requires Green Lady)"
        ],
        "ovals": [
          20
        ],
        "limit": 0
      },
      {
        "name": "Naiad Ensnarers",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          10,
          20,
          40
        ],
        "values": [
          100,
          140,
          230
        ],
        "nerve": [
          "9/11",
          "13/15",
          "20/22"
        ],
        "att": [
          10,
          12,
          25
        ],
        "stats": [
          5,
          4,
          0,
          3
        ],
        "special": "Pathfinder, Ensnare, Regeneration (4+)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Naiad Heartpiercers",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          10,
          20
        ],
        "values": [
          120,
          160
        ],
        "nerve": [
          "9/11",
          "13/15"
        ],
        "att": [
          10,
          12
        ],
        "stats": [
          5,
          5,
          4,
          3
        ],
        "special": "Pathfinder, Harpoon-gun, Piercing (1), Regeneration (4+)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Salamanders",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          10,
          20,
          40
        ],
        "values": [
          100,
          140,
          230
        ],
        "nerve": [
          "10/12",
          "14/16",
          "21/23"
        ],
        "att": [
          10,
          12,
          25
        ],
        "stats": [
          5,
          4,
          0,
          5
        ],
        "special": "Pathfinder, Crushing Strength (1)",
        "options": [
          "2H Weapons: De[4+], Crushing Strength (2)"
        ],
        "ovals": [
          0
        ],
        "limit": 0
      },
      {
        "name": "Forest Shamblers",
        "mType": "LI",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          125,
          190
        ],
        "nerve": [
          "-/14",
          "-/17"
        ],
        "att": [
          9,
          18
        ],
        "stats": [
          6,
          4,
          0,
          5
        ],
        "special": "Pathfinder, Crushing Strength (1), Shambling, Vanguard",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Centaur Bray-Hunters",
        "mType": "C",
        "irregular": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          5,
          10
        ],
        "values": [
          105,
          165
        ],
        "nerve": [
          "11/13",
          "14/16"
        ],
        "att": [
          6,
          12
        ],
        "stats": [
          8,
          4,
          5,
          3
        ],
        "special": "Pathfinder, Bows (range 24&quot;), Nimble, Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Centaur Bray-Striders",
        "mType": "C",
        "irregular": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          5,
          10
        ],
        "values": [
          100,
          155
        ],
        "nerve": [
          "11/13",
          "14/16"
        ],
        "att": [
          6,
          12
        ],
        "stats": [
          8,
          4,
          0,
          4
        ],
        "special": "Pathfinder, Crushing Strength (1), Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Elementals",
        "mType": "LI",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          130,
          200
        ],
        "nerve": [
          "-/14",
          "-/17"
        ],
        "att": [
          9,
          18
        ],
        "stats": [
          5,
          4,
          0,
          5
        ],
        "special": "Pathfinder, Crushing Strength (1), Shambling",
        "options": [
          "Earth: De[6+]",
          "Fire: Sp[6], Crushing Strength (2)",
          "Air: Sp[10], Fly, lose Crushing Strength",
          "Water: Sp[7], Regeneration (5+)"
        ],
        "ovals": [
          0,
          0,
          20,
          20
        ],
        "limit": 0
      },
      {
        "name": "Naiad Wyrmriders",
        "mType": "LC",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          155,
          240
        ],
        "nerve": [
          "12/14",
          "15/17"
        ],
        "att": [
          9,
          18
        ],
        "stats": [
          8,
          3,
          0,
          4
        ],
        "special": "Pathfinder, Crushing Strength (1), Regeneration (4+), Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Sylph Talonriders",
        "mType": "LC",
        "irregular": 1,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          135,
          210
        ],
        "nerve": [
          "12/14",
          "15/17"
        ],
        "att": [
          8,
          16
        ],
        "stats": [
          10,
          4,
          4,
          3
        ],
        "special": "Pathfinder, Bows (range 24&quot;), Fly",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Hydra",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "M"
        ],
        "models": [
          1
        ],
        "values": [
          140
        ],
        "nerve": [
          "15/17"
        ],
        "att": [
          "5*"
        ],
        "stats": [
          6,
          4,
          0,
          5
        ],
        "special": "Pathfinder, Crushing Strength (2), Regeneration (5+), *Multiple heads: Att = 5 + (current points of damage)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Greater Elemental",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "M"
        ],
        "models": [
          1
        ],
        "values": [
          160
        ],
        "nerve": [
          "-/18"
        ],
        "att": [
          8
        ],
        "stats": [
          5,
          4,
          0,
          5
        ],
        "special": "Pathfinder, Crushing Strength (2), Shambling",
        "options": [
          "Earth: De[6+], Crushing Strength (3)",
          "Fire: Sp[6], Crushing Strength (4), Breath Attack (6)",
          "Air: Sp[10], Fly, Wind Blast (3), Crushing Strength (1)",
          "Water: Sp[7], Regeneration (5+)",
          "Bane Chant (2)",
          "Mind Fog (1)",
          "Weakness (2)",
          "Hex (2)",
          "Drain Life (6)"
        ],
        "ovals": [
          0,
          0,
          30,
          30,
          15,
          10,
          20,
          20,
          25
        ],
        "limit": 0
      },
      {
        "name": "Beast of Nature",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "M"
        ],
        "models": [
          1
        ],
        "values": [
          130
        ],
        "nerve": [
          "15/17"
        ],
        "att": [
          5
        ],
        "stats": [
          7,
          3,
          0,
          5
        ],
        "special": "Pathfinder, Crushing Strength (2)",
        "options": [
          "Lightning Bolt (3)",
          "Breath Attack (10)",
          "Fly, Sp[10]",
          "Vicious, Att[7]",
          "Bane Chant (2)",
          "Mind Fog (1)",
          "Weakness (2)",
          "Hex (2)",
          "Drain Life (6)"
        ],
        "ovals": [
          30,
          15,
          50,
          30,
          15,
          10,
          20,
          20,
          25
        ],
        "limit": 0
      },
      {
        "name": "Druid",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          65
        ],
        "nerve": [
          "10/12"
        ],
        "att": [
          1
        ],
        "stats": [
          5,
          5,
          0,
          4
        ],
        "special": "",
        "options": [
          "Pathfinder, Lightning Bolt (3)",
          "Wind Blast (5)",
          "Surge (7)",
          "Bane Chant (2)",
          "Mind Fog (1)",
          "Weakness (2)",
          "Hex (2)",
          "Drain Life (6)",
          "Blinding Light (1)*",
          "Barkskin (1)*",
          "Aura of Heroism (2)*",
          "Guiding Light (2)*",
          "Teleport (3)*",
          "Critter's Call (8)*",
          "Spell Siphon (2)*",
          "Alchemist's Curse (10)*",
          "Blizzard (2)*",
          "Blood Boil*",
          "Mounted: Sp[9], Hero (Cav)",
          "Wild Companion",
          "Wild Companion"
        ],
        "ovals": [
          20,
          30,
          40,
          15,
          10,
          20,
          20,
          25,
          10,
          10,
          15,
          15,
          15,
          20,
          25,
          30,
          30,
          30,
          15,
          10,
          10
        ],
        "limit": 0
      },
      {
        "name": "Naiad Stalker",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          90
        ],
        "nerve": [
          "11/13"
        ],
        "att": [
          4
        ],
        "stats": [
          6,
          3,
          4,
          4
        ],
        "special": "Pathfinder, Crushing Strength (1), Individual, Inspiring (Naiads only), Regeneration (4+), Stealthy",
        "options": [
          "Harpoon-gun, Piercing(1)",
          "Wild Companion"
        ],
        "ovals": [
          20,
          10
        ],
        "limit": 0
      },
      {
        "name": "Salamander Veteran",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          85
        ],
        "nerve": [
          "11/13"
        ],
        "att": [
          4
        ],
        "stats": [
          5,
          3,
          0,
          5
        ],
        "special": "Pathfinder, Base Size: 25x25mm, Crushing Strength (2), Individual, Inspiring (Salamanders only)",
        "options": [
          "Wild Companion"
        ],
        "ovals": [
          10
        ],
        "limit": 0
      },
      {
        "name": "Forest Warden",
        "mType": "LI",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          75
        ],
        "nerve": [
          "11/13"
        ],
        "att": [
          3
        ],
        "stats": [
          6,
          3,
          0,
          5
        ],
        "special": "Pathfinder, Crushing Strength (2), Nimble, Vanguard, Surge (3)",
        "options": [
          "Mind Fog (1)",
          "Weakness (2)",
          "Hex (2)",
          "Drain Life (6)",
          "Blinding Light (1)*",
          "Barkskin (1)*",
          "Guiding Light (2)*",
          "Teleport (3)*",
          "Critter's Call (8)*",
          "Martyr's Prayer (7)*",
          "Spell Siphon (2)*",
          "Alchemist's Curse (10)*",
          "Blizzard (2)*",
          "Blood Boil*"
        ],
        "ovals": [
          10,
          20,
          20,
          25,
          10,
          10,
          15,
          15,
          20,
          25,
          25,
          30,
          30,
          30
        ],
        "limit": 0
      },
      {
        "name": "Centaur Chief",
        "mType": "C",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          105
        ],
        "nerve": [
          "11/13"
        ],
        "att": [
          4
        ],
        "stats": [
          8,
          3,
          0,
          4
        ],
        "special": "Pathfinder, Crushing Strength (2), Thunderous Charge (1), Inspiring, Individual",
        "options": [
          "Bow (range 24&quot;), Ra[4+]",
          "Wild Companion"
        ],
        "ovals": [
          10,
          10
        ],
        "limit": 0
      },
      {
        "name": "Unicorn",
        "mType": "C",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          120
        ],
        "nerve": [
          "11/13"
        ],
        "att": [
          3
        ],
        "stats": [
          10,
          3,
          0,
          5
        ],
        "special": "Pathfinder, Heal (5), Individual, Thunderous Charge (2)",
        "options": [
          "Mind Fog (1)",
          "Weakness (2)",
          "Hex (2)",
          "Drain Life (6)",
          "Blinding Light (1)*",
          "Barkskin (1)*",
          "Aura of Heroism (2)*",
          "Guiding Light (2)*",
          "Teleport (3)*",
          "Critter's Call (8)*",
          "Spell Siphon (2)*",
          "Alchemist's Curse (10)*",
          "Blizzard (2)*",
          "Blood Boil*"
        ],
        "ovals": [
          10,
          20,
          20,
          25,
          10,
          10,
          15,
          15,
          15,
          20,
          25,
          30,
          30,
          30
        ],
        "limit": 0
      },
      {
        "name": "Pegasus",
        "mType": "LC",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          80
        ],
        "nerve": [
          "10/12"
        ],
        "att": [
          3
        ],
        "stats": [
          10,
          3,
          0,
          4
        ],
        "special": "Pathfinder, Fly, Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Winged Unicorn",
        "mType": "LC",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          170
        ],
        "nerve": [
          "12/14"
        ],
        "att": [
          4
        ],
        "stats": [
          10,
          3,
          0,
          5
        ],
        "special": "Pathfinder, Fly, Heal (7), Inspiring, Thunderous (2)",
        "options": [
          "Lightning Bolt (5)",
          "Wind Blast",
          "Bane Chant (2)",
          "Mind Fog (1)",
          "Weakness (2)",
          "Hex (2)",
          "Drain Life (6)",
          "Blinding Light (1)*",
          "Barkskin (1)*",
          "Aura of Heroism (2)*",
          "Guiding Light (2)*",
          "Teleport (3)*",
          "Critter's Call (8)*",
          "Spell Siphon (2)*",
          "Alchemist's Curse (10)*",
          "Blizzard (2)*",
          "Blood Boil*"
        ],
        "ovals": [
          20,
          20,
          15,
          10,
          20,
          20,
          25,
          10,
          10,
          15,
          15,
          15,
          20,
          25,
          30,
          30,
          30
        ],
        "limit": 0
      },
      {
        "name": "Tree Herder",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          260
        ],
        "nerve": [
          "18/20"
        ],
        "att": [
          7
        ],
        "stats": [
          6,
          3,
          0,
          6
        ],
        "special": "Pathfinder, Crushing Strength (3), Inspiring, Surge (8), Vanguard",
        "options": [
          "Mind Fog (1)",
          "Weakness (2)",
          "Hex (2)",
          "Drain Life (6)",
          "Blinding Light (1)*",
          "Barkskin (1)*",
          "Aura of Heroism (2)*",
          "Guiding Light (2)*",
          "Teleport (3)*",
          "Critter's Call (8)*",
          "Spell Siphon (2)*",
          "Alchemist's Curse (10)*",
          "Blizzard (2)*",
          "Blood Boil*"
        ],
        "ovals": [
          10,
          20,
          20,
          25,
          10,
          10,
          15,
          15,
          15,
          20,
          25,
          30,
          30,
          30
        ],
        "limit": 0
      },
      {
        "name": "Keris",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          160
        ],
        "nerve": [
          "12/14"
        ],
        "att": [
          1
        ],
        "stats": [
          5,
          4,
          0,
          4
        ],
        "special": "Pathfinder, Fireball (7), Heal (1), Individual, Inspiring, Lightning Bolt (2), Solar Staff, Surge (8)",
        "options": [
          "Ozzee"
        ],
        "ovals": [
          10
        ],
        "limit": 1
      },
      {
        "name": "The Green Lady",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          200
        ],
        "nerve": [
          "14/16"
        ],
        "att": [
          0
        ],
        "stats": [
          10,
          0,
          0,
          6
        ],
        "special": "Pathfinder, Elite, Fly, Heal (8), Individual, Inspiring, Regeneration (5+)",
        "options": [
          "Saber-Toothed Pussycat",
          "Sabre-Toothed Pussycat"
        ],
        "ovals": [
          10,
          10
        ],
        "limit": 1
      },
      {
        "name": "Shaarlyot",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          150
        ],
        "nerve": [
          "12/14"
        ],
        "att": [
          1
        ],
        "stats": [
          10,
          4,
          0,
          3
        ],
        "special": "Pathfinder, Fireball (10), Fly, Individual, Inspiring, Wind Blast (7)",
        "options": [
          "Tiffee"
        ],
        "ovals": [
          10
        ],
        "limit": 1
      }
    ]
  },
  {
    "faction": "The Herd",
    "alignment": 1,
    "special": "Call of the Wild",
    "units": [
      {
        "name": "Tribal Warriors",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          10,
          20,
          40
        ],
        "values": [
          85,
          120,
          200
        ],
        "nerve": [
          "9/11",
          "13/15",
          "20/22"
        ],
        "att": [
          10,
          12,
          25
        ],
        "stats": [
          6,
          4,
          0,
          4
        ],
        "special": "Pathfinder, Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Spirit Walkers",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          10,
          20,
          40
        ],
        "values": [
          100,
          140,
          230
        ],
        "nerve": [
          "-/12",
          "-/16",
          "-/23"
        ],
        "att": [
          15,
          20,
          40
        ],
        "stats": [
          6,
          4,
          0,
          3
        ],
        "special": "Pathfinder, Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Longhorns",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          10,
          20
        ],
        "values": [
          100,
          145
        ],
        "nerve": [
          "10/12",
          "14/16"
        ],
        "att": [
          10,
          12
        ],
        "stats": [
          6,
          3,
          0,
          4
        ],
        "special": "Base Size: 25x25mm, Crushing Strength (1), Pathfinder, Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Tribal Spears",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          10,
          20,
          40
        ],
        "values": [
          90,
          125,
          205
        ],
        "nerve": [
          "8/10",
          "12/14",
          "19/21"
        ],
        "att": [
          10,
          15,
          30
        ],
        "stats": [
          6,
          4,
          0,
          4
        ],
        "special": "Pathfinder, Phalanx",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Hunters",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          10,
          20
        ],
        "values": [
          75,
          105
        ],
        "nerve": [
          "8/10",
          "12/14"
        ],
        "att": [
          8,
          10
        ],
        "stats": [
          6,
          5,
          5,
          3
        ],
        "special": "Pathfinder, Throwing Weapons, Vanguard",
        "options": [
          "Exchange Throwing Weapons for Bows"
        ],
        "ovals": [
          0
        ],
        "limit": 0
      },
      {
        "name": "Harpies*",
        "mType": "I",
        "irregular": 1,
        "unitType": [
          "T"
        ],
        "models": [
          10
        ],
        "values": [
          90
        ],
        "nerve": [
          "9/11"
        ],
        "att": [
          8
        ],
        "stats": [
          10,
          4,
          0,
          3
        ],
        "special": "Base Size: 25x25mm, Fly, Pathfinder, Vicious",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Guardian Brutes",
        "mType": "LI",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          150,
          230
        ],
        "nerve": [
          "12/15",
          "15/18"
        ],
        "att": [
          12,
          24
        ],
        "stats": [
          6,
          4,
          0,
          5
        ],
        "special": "Crushing Strength (1), Fury, Thunderous Charge (2)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Lycans",
        "mType": "LI",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          160,
          245
        ],
        "nerve": [
          "12/14",
          "15/17"
        ],
        "att": [
          9,
          18
        ],
        "stats": [
          9,
          3,
          0,
          4
        ],
        "special": "Crushing Strength (1), Nimble, Pathfinder, Regeneration (5+)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Centaur Longmanes",
        "mType": "C",
        "irregular": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          5,
          10
        ],
        "values": [
          130,
          200
        ],
        "nerve": [
          "11/13",
          "14/16"
        ],
        "att": [
          8,
          16
        ],
        "stats": [
          8,
          3,
          0,
          4
        ],
        "special": "Headstrong, Crushing Strength (1), Pathfinder, Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Centaur Bray-Hunters",
        "mType": "C",
        "irregular": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          5,
          10
        ],
        "values": [
          105,
          165
        ],
        "nerve": [
          "11/13",
          "14/16"
        ],
        "att": [
          6,
          12
        ],
        "stats": [
          8,
          4,
          5,
          3
        ],
        "special": "Bows (range 24&quot;), Nimble, Pathfinder, Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Flaxhoof's Chosen Centaurs [1]",
        "mType": "C",
        "irregular": 0,
        "unitType": [
          "R"
        ],
        "models": [
          10
        ],
        "values": [
          215
        ],
        "nerve": [
          "14/16"
        ],
        "att": [
          16
        ],
        "stats": [
          8,
          3,
          0,
          4
        ],
        "special": "Headstrong, Crushing Strength (1), Pathfinder, Thunderous Charge (1), Regeneration (5+)",
        "options": [],
        "ovals": [],
        "limit": 1
      },
      {
        "name": "Beast Pack*",
        "mType": "C",
        "irregular": 1,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          5,
          10
        ],
        "values": [
          70,
          110
        ],
        "nerve": [
          "9/11",
          "12/14"
        ],
        "att": [
          6,
          12
        ],
        "stats": [
          10,
          4,
          0,
          3
        ],
        "special": "Height (1), Nimble, Pathfinder, Vicious",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Giant Eagles*",
        "mType": "LC",
        "irregular": 1,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          130,
          200
        ],
        "nerve": [
          "12/14",
          "15/17"
        ],
        "att": [
          9,
          18
        ],
        "stats": [
          10,
          4,
          0,
          4
        ],
        "special": "Fly, Fury, Pathfinder, Thunderous Charge (2)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Tribal Chariots",
        "mType": "LC",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          140,
          215
        ],
        "nerve": [
          "12/14",
          "15/17"
        ],
        "att": [
          9,
          18
        ],
        "stats": [
          9,
          3,
          5,
          4
        ],
        "special": "Base Size: 50x100mm, Bows (range 24&quot;), Thunderous Charge (2)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Stampede*",
        "mType": "LC",
        "irregular": 1,
        "unitType": [
          "H"
        ],
        "models": [
          6
        ],
        "values": [
          260
        ],
        "nerve": [
          "18/20"
        ],
        "att": [
          30
        ],
        "stats": [
          7,
          4,
          0,
          4
        ],
        "special": "Crushing Strength (1), Pathfinder, Strider, Thunderous Charge (3)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Great Totem [1]",
        "mType": "W",
        "irregular": 0,
        "unitType": [
          "W"
        ],
        "models": [
          1
        ],
        "values": [
          80
        ],
        "nerve": [
          "-/18"
        ],
        "att": [
          "-"
        ],
        "stats": [
          0,
          0,
          0,
          5
        ],
        "special": "Advanced Deployment, Base Size: Max 75x75mm, Height (4), Inspiring, Pathfinder, Rallying! (2)",
        "options": [],
        "ovals": [],
        "limit": 1
      },
      {
        "name": "Chimera",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "M"
        ],
        "models": [
          1
        ],
        "values": [
          160
        ],
        "nerve": [
          "15/17"
        ],
        "att": [
          7
        ],
        "stats": [
          7,
          3,
          0,
          5
        ],
        "special": "Crushing Strength (2), Pathfinder, Vicious",
        "options": [
          "Wings (gain Fly and increase Speed to 10)"
        ],
        "ovals": [
          50
        ],
        "limit": 0
      },
      {
        "name": "Brutox",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "M"
        ],
        "models": [
          1
        ],
        "values": [
          220
        ],
        "nerve": [
          "16/19"
        ],
        "att": [
          "D6+8"
        ],
        "stats": [
          8,
          4,
          0,
          4
        ],
        "special": "Crushing Strength (2), Fury, Regeneration (5+), Strider, Thunderous Charge (2)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Tracker",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          70
        ],
        "nerve": [
          "10/12"
        ],
        "att": [
          3
        ],
        "stats": [
          6,
          4,
          4,
          4
        ],
        "special": "Hero (Inf), Bow (range 24&quot;), Individual, Pathfinder, Piercing (1), Stealthy, Vanguard",
        "options": [
          "Hunting Animal"
        ],
        "ovals": [
          10
        ],
        "limit": 0
      },
      {
        "name": "Great Chieftan",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          140
        ],
        "nerve": [
          "12/14"
        ],
        "att": [
          5
        ],
        "stats": [
          6,
          3,
          0,
          5
        ],
        "special": "Hero (Inf), Crushing Strength (1), Individual, Inspiring, Pathfinder, Thunderous Charge (1)",
        "options": [
          "Bow (gaining Ra 4+)",
          "Hunting Animal"
        ],
        "ovals": [
          10,
          10
        ],
        "limit": 0
      },
      {
        "name": "Great Chieftan on Tribal Chariot",
        "mType": "C",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          190
        ],
        "nerve": [
          "14/16"
        ],
        "att": [
          7
        ],
        "stats": [
          9,
          3,
          0,
          5
        ],
        "special": "Hero (LrgCav), Base Size: 50x100mm, Crushing Strength (1), Inspiring, Thunderous Charge (2), Nimble",
        "options": [
          "Bow (gaining Ra 4+)"
        ],
        "ovals": [
          10
        ],
        "limit": 0
      },
      {
        "name": "Centaur Chief",
        "mType": "C",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          105
        ],
        "nerve": [
          "11/13"
        ],
        "att": [
          4
        ],
        "stats": [
          8,
          3,
          0,
          4
        ],
        "special": "Hero (Cav), Crushing Strength (2), Individual, Inspiring, Pathfinder, Thunderous Charge (1)",
        "options": [
          "Bow (gaining Ra 4+)",
          "Hunting Animal"
        ],
        "ovals": [
          10,
          10
        ],
        "limit": 0
      },
      {
        "name": "Shaman",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          95
        ],
        "nerve": [
          "11/13"
        ],
        "att": [
          2
        ],
        "stats": [
          6,
          4,
          0,
          4
        ],
        "special": "Hero (Inf), Bane-chant (3), Individual, Inspiring, Pathfinder, Thunderous Charge (1)",
        "options": [
          "Heal (5)",
          "Wind Blast (5)",
          "Mind Fog (1)",
          "Weakness (2)",
          "Hex (2)",
          "Drain Life (6)",
          "Blinding Light (1)*",
          "Barkskin (1)*",
          "Aura of Heroism (2)*",
          "Guiding Light (2)*",
          "Teleport (3)*",
          "Critter's Call (8)*",
          "Spell Siphon (2)*",
          "Alchemist's Curse (10)*",
          "Blizzard (2)*",
          "Blood Boil*",
          "Mount (increase Speed to 9, change to Hero (Cav))"
        ],
        "ovals": [
          25,
          30,
          10,
          20,
          20,
          25,
          10,
          10,
          15,
          15,
          15,
          20,
          25,
          30,
          30,
          30,
          10
        ],
        "limit": 0
      },
      {
        "name": "Tribal Totem Bearer",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          50
        ],
        "nerve": [
          "9/11"
        ],
        "att": [
          1
        ],
        "stats": [
          6,
          4,
          0,
          4
        ],
        "special": "Hero (Inf), Individual, Inspiring, Pathfinder, Thunderous Charge (1)",
        "options": [
          "Hunting Animal",
          "Mount (increase Speed to 9, change to Hero (Cav))"
        ],
        "ovals": [
          10,
          15
        ],
        "limit": 0
      },
      {
        "name": "Lycan Alpha",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          205
        ],
        "nerve": [
          "14/16"
        ],
        "att": [
          7
        ],
        "stats": [
          9,
          3,
          0,
          5
        ],
        "special": "Hero (LrgInf), Crushing Strength (2), Inspiring (Lycans only), Nimble, Pathfinder, Regeneration (5+)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Guardian Champion",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          140
        ],
        "nerve": [
          "13/16"
        ],
        "att": [
          6
        ],
        "stats": [
          6,
          3,
          0,
          5
        ],
        "special": "Hero (LrgInf), Crushing Strength (1), Fury, Inspiring (Guardian Brutes only), Nimble, Thunderous Charge (2)",
        "options": [
          "Hunting Animal"
        ],
        "ovals": [
          10
        ],
        "limit": 0
      },
      {
        "name": "Flaxhoof [1]",
        "mType": "C",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          190
        ],
        "nerve": [
          "13/15"
        ],
        "att": [
          6
        ],
        "stats": [
          8,
          3,
          0,
          5
        ],
        "special": "Hero (Cav), Crushing Strength (2), Headstrong, Individual, Inspiring, Pathfinder, Regeneration (5+), Thunderous Charge (1), For Land and Lady!: While within 6&quot; of this unit, friendly Centaur units gain Thunderous Charge (1) or increase their Thunderous Charge by (1)",
        "options": [],
        "ovals": [],
        "limit": 1
      },
      {
        "name": "Avatar of the Father [1]",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          270
        ],
        "nerve": [
          "-/19"
        ],
        "att": [
          9
        ],
        "stats": [
          9,
          3,
          0,
          5
        ],
        "special": "Hero (Mon), Crushing Strength (1), Elite, Iron Resolve, Pathfinder, Thunderous Charge (3), Very Inspiring",
        "options": [
          "Heal (6)",
          "Wings (gain Fly and increase Speed to 10)"
        ],
        "ovals": [
          25,
          50
        ],
        "limit": 1
      }
    ]
  },
  {
    "faction": "Kingdoms of Men",
    "alignment": 1,
    "special": "Rallying Cry",
    "units": [
      {
        "name": "Arquebusiers",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          10,
          20,
          40
        ],
        "values": [
          100,
          135,
          225
        ],
        "nerve": [
          "9/11",
          "13/15",
          "20/22"
        ],
        "att": [
          8,
          10,
          20
        ],
        "stats": [
          5,
          5,
          5,
          3
        ],
        "special": "Rifles (range 24&quot;), Piercing (2), Reload!",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Berserkers",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          10,
          20,
          40
        ],
        "values": [
          100,
          140,
          230
        ],
        "nerve": [
          "-/12",
          "-/16",
          "-/23"
        ],
        "att": [
          10,
          15,
          30
        ],
        "stats": [
          5,
          3,
          0,
          3
        ],
        "special": "Crushing Strength (1)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Bowmen",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          10,
          20,
          40
        ],
        "values": [
          75,
          100,
          165
        ],
        "nerve": [
          "9/11",
          "13/15",
          "20/22"
        ],
        "att": [
          8,
          10,
          20
        ],
        "stats": [
          5,
          5,
          5,
          3
        ],
        "special": "Bows (range 24&quot;)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Crossbowmen",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          10,
          20,
          40
        ],
        "values": [
          85,
          115,
          190
        ],
        "nerve": [
          "9/11",
          "13/15",
          "20/22"
        ],
        "att": [
          8,
          10,
          20
        ],
        "stats": [
          5,
          5,
          5,
          3
        ],
        "special": "Crossbows (range 24&quot;), Piercing (1), Reload!",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Foot Guard",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          10,
          20,
          40
        ],
        "values": [
          100,
          135,
          225
        ],
        "nerve": [
          "10/12",
          "14/16",
          "21/23"
        ],
        "att": [
          10,
          12,
          25
        ],
        "stats": [
          5,
          3,
          0,
          5
        ],
        "options": [
          "2H Weapons: De[4+], Crushing Strength (1)"
        ],
        "ovals": [
          0
        ],
        "limit": 0
      },
      {
        "name": "Heavy Pike Block",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          20,
          40
        ],
        "values": [
          165,
          270
        ],
        "nerve": [
          "14/16",
          "21/23"
        ],
        "att": [
          15,
          30
        ],
        "stats": [
          5,
          4,
          0,
          4
        ],
        "special": "Elite, Ensnare, Phalanx",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Militia Mob",
        "mType": "I",
        "irregular": 1,
        "unitType": [
          "T",
          "R",
          "H",
          "L"
        ],
        "models": [
          10,
          20,
          40,
          60
        ],
        "values": [
          50,
          70,
          115,
          170
        ],
        "nerve": [
          "8/10",
          "12/14",
          "19/21",
          "25,27"
        ],
        "att": [
          10,
          12,
          25,
          30
        ],
        "stats": [
          5,
          5,
          0,
          3
        ],
        "special": "",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Pike Block",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          20,
          40
        ],
        "values": [
          135,
          225
        ],
        "nerve": [
          "13/15",
          "20/22"
        ],
        "att": [
          15,
          30
        ],
        "stats": [
          5,
          4,
          0,
          3
        ],
        "special": "Ensnare, Phalanx",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Pole-Arms Block",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          10,
          20,
          40
        ],
        "values": [
          70,
          100,
          165
        ],
        "nerve": [
          "9/11",
          "13/15",
          "20/22"
        ],
        "att": [
          10,
          12,
          25
        ],
        "stats": [
          5,
          4,
          0,
          3
        ],
        "special": "Crushing Strength (1)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Shield Wall",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          10,
          20,
          40
        ],
        "values": [
          70,
          100,
          165
        ],
        "nerve": [
          "9/11",
          "13/15",
          "20/22"
        ],
        "att": [
          10,
          12,
          25
        ],
        "stats": [
          5,
          4,
          0,
          4
        ],
        "special": "",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Spear Phalanx",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          10,
          20,
          40
        ],
        "values": [
          85,
          120,
          200
        ],
        "nerve": [
          "9/11",
          "13/15",
          "20/22"
        ],
        "att": [
          10,
          15,
          30
        ],
        "stats": [
          5,
          4,
          0,
          4
        ],
        "special": "Phalanx",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Knights",
        "mType": "C",
        "irregular": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          5,
          10,
          20
        ],
        "values": [
          125,
          195,
          340
        ],
        "nerve": [
          "11/13",
          "14/16",
          "21/23"
        ],
        "att": [
          8,
          16,
          32
        ],
        "stats": [
          8,
          3,
          0,
          5
        ],
        "special": "Headstrong, Thunderous Charge (2)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Mounted Scouts",
        "mType": "C",
        "irregular": 0,
        "unitType": [
          "T"
        ],
        "models": [
          5
        ],
        "values": [
          100
        ],
        "nerve": [
          "10/12"
        ],
        "att": [
          7
        ],
        "stats": [
          9,
          5,
          5,
          3
        ],
        "special": "Bows (range 24&quot;), Nimble",
        "options": [
          "Pistols (range 12&quot;)",
          "Carbines (range 18&quot;)"
        ],
        "ovals": [
          0,
          15
        ],
        "limit": 0
      },
      {
        "name": "Mounted Sergeants",
        "mType": "C",
        "irregular": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          5,
          10
        ],
        "values": [
          105,
          160
        ],
        "nerve": [
          "10/12",
          "13/15"
        ],
        "att": [
          7,
          14
        ],
        "stats": [
          9,
          4,
          0,
          4
        ],
        "special": "Nimble, Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Charioteers",
        "mType": "LC",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          115,
          175
        ],
        "nerve": [
          "12/14",
          "15/17"
        ],
        "att": [
          8,
          16
        ],
        "stats": [
          9,
          4,
          5,
          4
        ],
        "special": "Bows (range 24&quot;), Base Size: 50x100mm, Thunderous Charge (2)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Beast of War",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "M"
        ],
        "models": [
          1
        ],
        "values": [
          210
        ],
        "nerve": [
          "15/17"
        ],
        "att": [
          12
        ],
        "stats": [
          7,
          4,
          0,
          5
        ],
        "special": "Base Size: 50x100mm, Brutal, Crushing Strength (2), Thunderous Charge (2)",
        "options": [
          "Light Ballista: range 36&quot;, Ra[5+], Att[2], Blast (D3), Piercing (2)"
        ],
        "ovals": [
          10
        ],
        "limit": 0
      },
      {
        "name": "Ballista",
        "mType": "W",
        "irregular": 0,
        "unitType": [
          "W"
        ],
        "models": [
          1
        ],
        "values": [
          60
        ],
        "nerve": [
          "9/11"
        ],
        "att": [
          1
        ],
        "stats": [
          5,
          0,
          5,
          4
        ],
        "special": "Blast (D3+2), Piercing (3), Reload!",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Cannon",
        "irregular": 0,
        "unitType": [
          "W"
        ],
        "models": [
          1
        ],
        "values": [
          85
        ],
        "nerve": [
          "9/11"
        ],
        "att": [
          1
        ],
        "stats": [
          5,
          0,
          5,
          4
        ],
        "special": "Blast (D6+1), Piercing (4), Reload!",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Siege Artillery",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "W"
        ],
        "models": [
          1
        ],
        "values": [
          90
        ],
        "nerve": [
          "9/11"
        ],
        "att": [
          1
        ],
        "stats": [
          5,
          0,
          5,
          4
        ],
        "special": "Blast (D6+2), Indirect Fire, Piercing (3), Reload!",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "General",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          100
        ],
        "nerve": [
          "12/14"
        ],
        "att": [
          4
        ],
        "stats": [
          5,
          3,
          0,
          5
        ],
        "special": "Crushing Strength (1), Individual, Very Inspiring",
        "options": [
          "Mounted (Horse): Sp[8], Hero (Cav)",
          "Mounted (Pegasus), Sp[10], Fly, Hero (Lrg Cav), loses Individual"
        ],
        "ovals": [
          20,
          50
        ],
        "limit": 0
      },
      {
        "name": "General on Winged Beast",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          190
        ],
        "nerve": [
          "14/16"
        ],
        "att": [
          6
        ],
        "stats": [
          10,
          3,
          0,
          5
        ],
        "special": "Crushing Strength (2), Fly, Very Inspiring",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Wizard",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          50
        ],
        "nerve": [
          "10/12"
        ],
        "att": [
          1
        ],
        "stats": [
          5,
          4,
          0,
          4
        ],
        "special": "Fireball (6), Individual",
        "options": [
          "Lightning Bolt (3)",
          "Lightning Bolt (3): Replace Fireball",
          "Wind Blast (5)",
          "Bane Chant (2)",
          "Heal (2)",
          "Mind Fog (1)",
          "Weakness (2)",
          "Hex (2)",
          "Drain Life (6)",
          "Blinding Light (1)*",
          "Barkskin (1)*",
          "Aura of Heroism (2)*",
          "Guiding Light (2)*",
          "Teleport (3)*",
          "Critter's Call (8)*",
          "Spell Siphon (2)*",
          "Alchemist's Curse (10)*",
          "Blizzard (2)*",
          "Blood Boil*",
          "Mounted (Horse): Sp[9], Hero (Cav)",
          "Mounted (Pegasus), Sp[10], Fly, Hero (Lrg Cav), loses Individual"
        ],
        "ovals": [
          25,
          0,
          30,
          15,
          10,
          10,
          20,
          20,
          25,
          10,
          10,
          15,
          15,
          15,
          20,
          25,
          30,
          30,
          30,
          15,
          10
        ],
        "limit": 0
      },
      {
        "name": "Hero",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          50
        ],
        "nerve": [
          "10/12"
        ],
        "att": [
          3
        ],
        "stats": [
          5,
          3,
          0,
          5
        ],
        "special": "Crushing Strength (1), Individual",
        "options": [
          "Mounted (Horse): Sp[8], Hero (Cav)",
          "Mounted (Pegasus), Sp[10], Fly, Hero (Lrg Cav), loses Individual"
        ],
        "ovals": [
          20,
          50
        ],
        "limit": 0
      },
      {
        "name": "Army Standard Bearer",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          50
        ],
        "nerve": [
          "9/11"
        ],
        "att": [
          1
        ],
        "stats": [
          5,
          5,
          0,
          4
        ],
        "special": "Individual, Very Inspiring",
        "options": [
          "Mounted (Horse): Sp[8], Hero (Cav)"
        ],
        "ovals": [
          15
        ],
        "limit": 0
      },
      {
        "name": "The Captain",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          150
        ],
        "nerve": [
          "11/13"
        ],
        "att": [
          3
        ],
        "stats": [
          5,
          3,
          0,
          5
        ],
        "special": "Crushing Strength (1), Individual, Master Tactician, Very Inspiring",
        "options": [
          "Mounted (Horse): Sp[8], Hero (Cav)"
        ],
        "ovals": [
          20
        ],
        "limit": 1
      }
    ]
  },
  {
    "faction": "League of Rhordia",
    "alignment": 1,
    "special": "Supreme Command",
    "units": [
      {
        "name": "House Guard",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          10,
          20
        ],
        "values": [
          95,
          135
        ],
        "nerve": [
          "10/12",
          "14/16"
        ],
        "att": [
          10,
          12
        ],
        "stats": [
          5,
          3,
          0,
          4
        ],
        "special": "Crushing Strength (1)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "City Spear Militia",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          10,
          20,
          40
        ],
        "values": [
          85,
          120,
          200
        ],
        "nerve": [
          "9/11",
          "13/15",
          "20/22"
        ],
        "att": [
          10,
          15,
          30
        ],
        "stats": [
          5,
          4,
          0,
          4
        ],
        "special": "Phalanx",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "City Militia",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          10,
          20,
          40
        ],
        "values": [
          70,
          100,
          165
        ],
        "nerve": [
          "9/11",
          "13/15",
          "20/22"
        ],
        "att": [
          10,
          12,
          25
        ],
        "stats": [
          5,
          4,
          0,
          3
        ],
        "special": "Crushing Strength (1)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Halfling Braves",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          20,
          40
        ],
        "values": [
          80,
          130
        ],
        "nerve": [
          "12/14",
          "19/21"
        ],
        "att": [
          12,
          25
        ],
        "stats": [
          4,
          5,
          0,
          4
        ],
        "special": "Stealthy",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Halfling Spearlings",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          20,
          40
        ],
        "values": [
          90,
          150
        ],
        "nerve": [
          "12/14",
          "19/21"
        ],
        "att": [
          15,
          30
        ],
        "stats": [
          4,
          5,
          0,
          3
        ],
        "special": "Phalanx, Stealthy",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Halfling Scouts",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T"
        ],
        "models": [
          10
        ],
        "values": [
          85
        ],
        "nerve": [
          "9/11"
        ],
        "att": [
          8
        ],
        "stats": [
          4,
          5,
          5,
          3
        ],
        "special": "Bows (range 24&quot;), Nimble, Pathfinder, Stealthy",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Halfling Archers",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          20,
          40
        ],
        "values": [
          90,
          150
        ],
        "nerve": [
          "12/14",
          "19/21"
        ],
        "att": [
          10,
          20
        ],
        "stats": [
          4,
          6,
          5,
          3
        ],
        "special": "Bows (range 24&quot;), Stealthy",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Crossbow Block",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          10,
          20
        ],
        "values": [
          85,
          115
        ],
        "nerve": [
          "9/11",
          "13/15"
        ],
        "att": [
          8,
          10
        ],
        "stats": [
          5,
          5,
          5,
          3
        ],
        "special": "Crossbows (range 24&quot;), Piercing (1), Reload!",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Musket Block",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          10,
          20
        ],
        "values": [
          100,
          135
        ],
        "nerve": [
          "9/11",
          "13/15"
        ],
        "att": [
          8,
          10
        ],
        "stats": [
          5,
          5,
          5,
          3
        ],
        "special": "Piercing (2), Reload!, Rifles",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Dogs of War*",
        "mType": "I",
        "irregular": 1,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          20,
          40
        ],
        "values": [
          165,
          270
        ],
        "nerve": [
          "13/15",
          "20/22"
        ],
        "att": [
          15,
          30
        ],
        "stats": [
          4,
          4,
          0,
          5
        ],
        "special": "Ensnare, Phalanx",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Household Knights",
        "mType": "C",
        "irregular": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          5,
          10
        ],
        "values": [
          125,
          195
        ],
        "nerve": [
          "11/13",
          "14/16"
        ],
        "att": [
          8,
          16
        ],
        "stats": [
          8,
          3,
          0,
          5
        ],
        "special": "Fury, Thunderous Charge (2)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Halfling Ranger Cavalry",
        "mType": "C",
        "irregular": 0,
        "unitType": [
          "T"
        ],
        "models": [
          5
        ],
        "values": [
          125
        ],
        "nerve": [
          "10/12"
        ],
        "att": [
          7
        ],
        "stats": [
          8,
          5,
          4,
          3
        ],
        "special": "Bows (range 24&quot;), Nimble",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Halfling Knights",
        "mType": "C",
        "irregular": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          5,
          10
        ],
        "values": [
          90,
          140
        ],
        "nerve": [
          "10/12",
          "13/15"
        ],
        "att": [
          8,
          16
        ],
        "stats": [
          7,
          4,
          0,
          4
        ],
        "special": "Nimble, Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Honour Guard",
        "mType": "LC",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          180,
          275
        ],
        "nerve": [
          "12/14",
          "15/17"
        ],
        "att": [
          12,
          24
        ],
        "stats": [
          7,
          3,
          0,
          5
        ],
        "special": "Crushing Strength (1), Iron Resolve, Thunderous Charge (2)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Halfling Volley Gun",
        "mType": "W",
        "irregular": 0,
        "unitType": [
          "W"
        ],
        "models": [
          1
        ],
        "values": [
          85
        ],
        "nerve": [
          "9/11"
        ],
        "att": [
          15
        ],
        "stats": [
          4,
          0,
          5,
          4
        ],
        "special": "Elite (within 6&quot; of Master Engineer), Piercing (2), range 24&quot;, Reload!",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Halfling Howitzer",
        "mType": "W",
        "irregular": 0,
        "unitType": [
          "W"
        ],
        "models": [
          1
        ],
        "values": [
          95
        ],
        "nerve": [
          "9/11"
        ],
        "att": [
          1
        ],
        "stats": [
          4,
          0,
          5,
          4
        ],
        "special": "Blast (D6+3 within 6&quot; of Master Engineer), Blast (D6+2), Lob it!, Piercing (2), Reload!",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Halfling Iron Beast",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "M"
        ],
        "models": [
          1
        ],
        "values": [
          210
        ],
        "nerve": [
          "16/18"
        ],
        "att": [
          "D6+15"
        ],
        "stats": [
          5,
          5,
          0,
          6
        ],
        "special": "Base Size: 50x100mm, Breath Attack (12), Crushing Strength (2), Thunderous Charge (1), Strider",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Battle Shrine [1]",
        "mType": "C",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          130
        ],
        "nerve": [
          "-/14"
        ],
        "att": [
          1
        ],
        "stats": [
          5,
          4,
          0,
          5
        ],
        "special": "Hero (LrgCav), Base Size: 50x100mm, Lightning Bolt (5), Rallying! (2)",
        "options": [],
        "ovals": [],
        "limit": 1
      },
      {
        "name": "Duke",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          100
        ],
        "nerve": [
          "12/14"
        ],
        "att": [
          4
        ],
        "stats": [
          5,
          3,
          0,
          5
        ],
        "special": "Hero (Inf), Crushing Strength (1), Individual, Very Inspiring",
        "options": [
          "Mount on horse (increase Speed to 8, change to Hero (Cav))"
        ],
        "ovals": [
          20
        ],
        "limit": 0
      },
      {
        "name": "Duke on Winged Aralez",
        "mType": "C",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          170
        ],
        "nerve": [
          "13/15"
        ],
        "att": [
          5
        ],
        "stats": [
          10,
          3,
          0,
          5
        ],
        "special": "Hero (LrgCav), Crushing Strength (2), Fly, Iron Resolve, Thunderous Charge (1), Very Inspiring",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Duke on Ancient Winged Aralez",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          225
        ],
        "nerve": [
          "15/17"
        ],
        "att": [
          7
        ],
        "stats": [
          10,
          3,
          0,
          5
        ],
        "special": "Hero (Mon), Crushing Strength (2), Fly, Heal (4), Iron Resolve, Thunderous Charge (1), Very Inspiring",
        "options": [
          "Mind Fog (1)",
          "Weakness (2)",
          "Hex (2)",
          "Drain Life (6)",
          "Blinding Light (1)*",
          "Barkskin (1)*",
          "Aura of Heroism (2)*",
          "Guiding Light (2)*",
          "Teleport (3)*",
          "Critter's Call (8)*",
          "Spell Siphon (2)*",
          "Alchemist's Curse (10)*",
          "Blizzard (2)*",
          "Blood Boil*"
        ],
        "ovals": [
          10,
          20,
          20,
          25,
          10,
          10,
          15,
          15,
          15,
          20,
          25,
          30,
          30,
          30
        ],
        "limit": 0
      },
      {
        "name": "Army Standard Bearer",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          50
        ],
        "nerve": [
          "9/11"
        ],
        "att": [
          1
        ],
        "stats": [
          5,
          5,
          0,
          4
        ],
        "special": "Hero (Inf), Individual, Very Inspiring",
        "options": [
          "Mount on horse (increase Speed to 9, change to Hero (Cav))"
        ],
        "ovals": [
          15
        ],
        "limit": 0
      },
      {
        "name": "Baron",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          70
        ],
        "nerve": [
          "10/12"
        ],
        "att": [
          4
        ],
        "stats": [
          5,
          3,
          0,
          5
        ],
        "special": "Hero (Inf), Crushing Strength (1), Individual, Very Inspiring (Non-halfling units only)",
        "options": [
          "Mount on horse (increase Speed to 8, change to Hero (Cav))"
        ],
        "ovals": [
          15
        ],
        "limit": 0
      },
      {
        "name": "Baron with Horse",
        "mType": "C",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          85
        ],
        "nerve": [
          "10/12"
        ],
        "att": [
          4
        ],
        "stats": [
          8,
          3,
          0,
          5
        ],
        "special": "Hero (Cav), Crushing Strength (1), Individual, Very Inspiring (Non-halfling units only)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Baron on Aralez",
        "mType": "C",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          100
        ],
        "nerve": [
          "10/12"
        ],
        "att": [
          4
        ],
        "stats": [
          8,
          3,
          0,
          5
        ],
        "special": "Hero (LrgCav), Crushing Strength (2), Iron Resolve, Thunderous Charge (1), Very Inspiring (Non-halfling units only)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Wizard",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          50
        ],
        "nerve": [
          "10/12"
        ],
        "att": [
          1
        ],
        "stats": [
          5,
          4,
          0,
          4
        ],
        "special": "Hero (Inf), Fireball (6), Individual",
        "options": [
          "Lightning bolt (3)",
          "Heal (2)",
          "Bane Chant (2)",
          "Mind Fog (1)",
          "Weakness (2)",
          "Hex (2)",
          "Drain Life (6)",
          "Blinding Light (1)*",
          "Barkskin (1)*",
          "Aura of Heroism (2)*",
          "Guiding Light (2)*",
          "Teleport (3)*",
          "Critter's Call (8)*",
          "Spell Siphon (2)*",
          "Alchemist's Curse (10)*",
          "Blizzard (2)*",
          "Blood Boil*",
          "Mount on horse (increase Speed to 9, change to Hero (Cav))"
        ],
        "ovals": [
          25,
          10,
          10,
          20,
          20,
          25,
          15,
          10,
          10,
          15,
          15,
          15,
          20,
          25,
          30,
          30,
          30,
          10
        ],
        "limit": 0
      },
      {
        "name": "Wizard on Winged Aralez",
        "mType": "C",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          85
        ],
        "nerve": [
          "10/12"
        ],
        "att": [
          1
        ],
        "stats": [
          10,
          4,
          0,
          4
        ],
        "special": "Hero (LrgCav), Fireball (6), Fly, Iron Resolve, Thunderous Charge (1)",
        "options": [
          "Lightning bolt (3)",
          "Heal (2)",
          "Bane Chant (2)",
          "Mind Fog (1)",
          "Weakness (2)",
          "Hex (2)",
          "Drain Life (6)",
          "Blinding Light (1)*",
          "Barkskin (1)*",
          "Aura of Heroism (2)*",
          "Guiding Light (2)*",
          "Teleport (3)*",
          "Critter's Call (8)*",
          "Spell Siphon (2)*",
          "Alchemist's Curse (10)*",
          "Blizzard (2)*",
          "Blood Boil*"
        ],
        "ovals": [
          25,
          10,
          15,
          10,
          20,
          20,
          25,
          10,
          10,
          15,
          15,
          15,
          20,
          25,
          30,
          30,
          30
        ],
        "limit": 0
      },
      {
        "name": "Halfling Master Sergeant",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          75
        ],
        "nerve": [
          "10/12"
        ],
        "att": [
          4
        ],
        "stats": [
          4,
          4,
          0,
          5
        ],
        "special": "Hero (Inf), Elite, Individual, Stealthy, Very Inspiring (Halflings only)",
        "options": [
          "Bow",
          "Mount (increase Speed to 7, change to Hero (Cav) and gain Thunderous Charge (1))"
        ],
        "ovals": [
          10,
          15
        ],
        "limit": 0
      },
      {
        "name": "Halfling Master Engineer",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          70
        ],
        "nerve": [
          "9/11"
        ],
        "att": [
          1
        ],
        "stats": [
          4,
          5,
          4,
          4
        ],
        "special": "Hero (Inf), Individual, Long Barrelled Rifles, Piercing (2), Reload!, Stealthy, Very Inspiring (War Engines only)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Halfling Sorceror",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          55
        ],
        "nerve": [
          "9/11"
        ],
        "att": [
          1
        ],
        "stats": [
          4,
          4,
          0,
          4
        ],
        "special": "Hero (Inf), Individual, Stealthy, Wind Blast (7)",
        "options": [
          "Lightning Bolt (3)",
          "Mind Fog (1)",
          "Weakness (2)",
          "Hex (2)",
          "Drain Life (6)",
          "Blinding Light (1)*",
          "Barkskin (1)*",
          "Aura of Heroism (2)*",
          "Guiding Light (2)*",
          "Teleport (3)*",
          "Critter's Call (8)*",
          "Spell Siphon (2)*",
          "Alchemist's Curse (10)*",
          "Blizzard (2)*",
          "Blood Boil*",
          "Mount on horse (increase Speed to 8, change to Hero (Cav))"
        ],
        "ovals": [
          25,
          10,
          20,
          20,
          25,
          10,
          10,
          15,
          15,
          15,
          20,
          25,
          30,
          30,
          30,
          10
        ],
        "limit": 0
      },
      {
        "name": "Halfling Army Standard Bearer",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          50
        ],
        "nerve": [
          "9/11"
        ],
        "att": [
          1
        ],
        "stats": [
          4,
          5,
          0,
          4
        ],
        "special": "Hero (Inf), Individual, Stealthy, Very Inspiring (Halflings only)",
        "options": [
          "Mount (increase Speed to 8, change to Hero (Cav))"
        ],
        "ovals": [
          15
        ],
        "limit": 0
      }
    ]
  },
  {
    "faction": "Ogres",
    "alignment": 1,
    "special": "Hammer Blow",
    "units": [
      {
        "name": "Berserker Braves",
        "mType": "LI",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          150,
          230
        ],
        "nerve": [
          "-/15",
          "-/18"
        ],
        "att": [
          15,
          30
        ],
        "stats": [
          6,
          4,
          0,
          4
        ],
        "special": "Brutal, Crushing Strength (1)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Boomers",
        "mType": "LI",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          150,
          230
        ],
        "nerve": [
          "12/14",
          "15/17"
        ],
        "att": [
          9,
          18
        ],
        "stats": [
          6,
          4,
          0,
          4
        ],
        "special": "Brutal, Breath Attack (Att), Crushing Strength (1), Piercing (1)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Hunters",
        "mType": "LI",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          145,
          220
        ],
        "nerve": [
          "12/14",
          "15/17"
        ],
        "att": [
          9,
          18
        ],
        "stats": [
          6,
          3,
          0,
          4
        ],
        "special": "Brutal, Crushing Strength, Ensnare, Pathfinder",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Shooters",
        "mType": "LI",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          150,
          230
        ],
        "nerve": [
          "12/14",
          "15/17"
        ],
        "att": [
          9,
          18
        ],
        "stats": [
          6,
          4,
          5,
          4
        ],
        "special": "Brutal, Heavy Crossbows (range 36&quot;), Crushing Strength (1), Piercing (2), Reload!",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Siege Breakers",
        "mType": "LI",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          165,
          250
        ],
        "nerve": [
          "12/14",
          "15/17"
        ],
        "att": [
          9,
          18
        ],
        "stats": [
          5,
          3,
          0,
          4
        ],
        "special": "Brutal, Big Shield, Crushing Strength (3), Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Warriors",
        "mType": "LI",
        "irregular": 0,
        "unitType": [
          "R",
          "H",
          "L"
        ],
        "models": [
          3,
          6,
          12
        ],
        "values": [
          130,
          200,
          350
        ],
        "nerve": [
          "12/14",
          "15/17",
          "22/24"
        ],
        "att": [
          9,
          18,
          36
        ],
        "stats": [
          6,
          3,
          0,
          5
        ],
        "special": "Brutal, Crushing Strength (1)",
        "options": [
          "2H Weapons: De[4+], Crushing Strength (2)"
        ],
        "ovals": [
          0
        ],
        "limit": 0
      },
      {
        "name": "Red Goblins",
        "mType": "I",
        "irregular": 1,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          20,
          40
        ],
        "values": [
          85,
          140
        ],
        "nerve": [
          "12/14",
          "19/21"
        ],
        "att": [
          10,
          20
        ],
        "stats": [
          5,
          6,
          5,
          3
        ],
        "special": "Bows (range 24&quot;), not Brutal",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Red Goblin Scouts",
        "mType": "C",
        "irregular": 1,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          5,
          10
        ],
        "values": [
          100,
          150
        ],
        "nerve": [
          "9/11",
          "12/14"
        ],
        "att": [
          7,
          14
        ],
        "stats": [
          10,
          4,
          0,
          4
        ],
        "special": "Thunderous Charge (1), Nimble, not Brutal",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Chariots",
        "mType": "LC",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          170,
          265
        ],
        "nerve": [
          "13/15",
          "16/18"
        ],
        "att": [
          12,
          24
        ],
        "stats": [
          8,
          3,
          0,
          5
        ],
        "special": "Brutal, Base Size:50x100mm, Crushing Strength (1), Thunderous Charge (2)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Red Goblin Blaster",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "M"
        ],
        "models": [
          1
        ],
        "values": [
          65
        ],
        "nerve": [
          "8/10"
        ],
        "att": [
          "*"
        ],
        "stats": [
          5,
          0,
          0,
          5
        ],
        "special": "Base Size: 50x100mm, Height 3, *Blaster: 2D6 hits to all units within D6&quot;, Piercing (4), not Brutal",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Mammoth",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "M"
        ],
        "models": [
          1
        ],
        "values": [
          210
        ],
        "nerve": [
          "15/17"
        ],
        "att": [
          12
        ],
        "stats": [
          7,
          4,
          0,
          5
        ],
        "special": "Brutal, Base Size: 50x100mm, Crushing Strength (2), Thunderous Charge (2)",
        "options": [
          "Ballista: range 36&quot;, Ra[5+], Att[2], Blast (D3), Piercing (2)"
        ],
        "ovals": [
          10
        ],
        "limit": 0
      },
      {
        "name": "Giant",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "M"
        ],
        "models": [
          1
        ],
        "values": [
          190
        ],
        "nerve": [
          "17/19"
        ],
        "att": [
          "D6+6"
        ],
        "stats": [
          7,
          4,
          0,
          5
        ],
        "special": "Brutal, Fury, Crushing Strength (3), Strider",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Warlord",
        "mType": "LI",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          185
        ],
        "nerve": [
          "15/17"
        ],
        "att": [
          7
        ],
        "stats": [
          6,
          3,
          0,
          5
        ],
        "special": "Brutal, Crushing Strength (2), Inspiring, Nimble",
        "options": [
          "2H Weapon: De[4+]. Crushing Strength (3)",
          "Mounted (Chariot): Sp[8], Thunderous Charge (1), Hero (Cav), Base Size: 50x100mm"
        ],
        "ovals": [
          0,
          15
        ],
        "limit": 0
      },
      {
        "name": "Siege Master",
        "mType": "LI",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          135
        ],
        "nerve": [
          "12/14"
        ],
        "att": [
          4
        ],
        "stats": [
          5,
          3,
          0,
          4
        ],
        "special": "Brutal, Big Shield, Crushing Strength (3), Inspiring (Siege Breakers only), Nimble, Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Captain",
        "mType": "LI",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          135
        ],
        "nerve": [
          "13/15"
        ],
        "att": [
          5
        ],
        "stats": [
          6,
          3,
          5,
          5
        ],
        "special": "Brutal, Crushing Strength (2), Inspiring, Nimble",
        "options": [
          "2H Weapon: De[4+], Crushing Strength (3)",
          "Crossbow (range 24&quot;): De[4+], Reload!, Piercing (2)",
          "Mounted (Chariot): Sp[8], Thunderous Charge (1), Hero (Cav), Base Size: 50x100mm"
        ],
        "ovals": [
          0,
          10,
          15
        ],
        "limit": 0
      },
      {
        "name": "Warlock",
        "mType": "LI",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          100
        ],
        "nerve": [
          "12/14"
        ],
        "att": [
          2
        ],
        "stats": [
          6,
          4,
          0,
          4
        ],
        "special": "Brutal, Crushing Strength (1), Inspiring (Berserker Braves only), Lightning Bolt (3), Nimble",
        "options": [
          "Fireball (12)",
          "Wind Blast (5)",
          "Mind Fog (1)",
          "Weakness (2)",
          "Hex (2)",
          "Drain Life (6)",
          "Blinding Light (1)*",
          "Barkskin (1)*",
          "Aura of Heroism (2)*",
          "Guiding Light (2)*",
          "Teleport (3)*",
          "Critter's Call (8)*",
          "Spell Siphon (2)*",
          "Alchemist's Curse (10)*",
          "Blizzard (2)*",
          "Blood Boil*"
        ],
        "ovals": [
          30,
          30,
          10,
          20,
          20,
          25,
          10,
          10,
          15,
          15,
          15,
          20,
          25,
          30,
          30,
          30
        ],
        "limit": 0
      },
      {
        "name": "Boomer Sergeant",
        "mType": "LI",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          90
        ],
        "nerve": [
          "11/13"
        ],
        "att": [
          4
        ],
        "stats": [
          6,
          4,
          0,
          4
        ],
        "special": "Brutal, Breath Attack (8), Crushing Strength (1), Nimble, Piercing (1)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Army Standard Bearer",
        "mType": "LI",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          70
        ],
        "nerve": [
          "11/13"
        ],
        "att": [
          3
        ],
        "stats": [
          6,
          3,
          0,
          4
        ],
        "special": "Brutal, Crushing Strength (1), Inspiring, Nimble",
        "options": [
          "Mounted (Chariot): Sp[8], Thunderous Charge (1), Hero (Cav), Base Size: 50x100mm"
        ],
        "ovals": [
          15
        ],
        "limit": 0
      },
      {
        "name": "Red Goblin Biggit",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          60
        ],
        "nerve": [
          "9/11"
        ],
        "att": [
          3
        ],
        "stats": [
          5,
          4,
          4,
          4
        ],
        "special": "Bow (range 24&quot;), Individual, Inspiring (Red Goblin units only), not Brutal",
        "options": [
          "Mounted (Fleabag): Sp[10], Hero (Cav)"
        ],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Grokagamok",
        "mType": "LI",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          260
        ],
        "nerve": [
          "15/17"
        ],
        "att": [
          7
        ],
        "stats": [
          6,
          3,
          0,
          5
        ],
        "special": "Brutal, Melee Blast (D3), Crushing Strength (3), Nimble, Very Inspiring",
        "options": [],
        "ovals": [],
        "limit": 1
      }
    ]
  },
  {
    "faction": "The Trident Realm",
    "alignment": 1,
    "special": "Bait and Switch",
    "units": [
      {
        "name": "Naiad Ensnarers",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          10,
          20,
          40
        ],
        "values": [
          100,
          140,
          230
        ],
        "nerve": [
          "9/11",
          "13/15",
          "20/22"
        ],
        "att": [
          10,
          12,
          25
        ],
        "stats": [
          5,
          4,
          0,
          3
        ],
        "special": "Ensnare, Pathfinder, Regeneration (4+)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Thuul",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          10,
          20
        ],
        "values": [
          105,
          140
        ],
        "nerve": [
          "10/12",
          "14/16"
        ],
        "att": [
          15,
          20
        ],
        "stats": [
          6,
          3,
          0,
          3
        ],
        "special": "Ensnare, Stealthy",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Placoderms",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          20,
          40
        ],
        "values": [
          175,
          290
        ],
        "nerve": [
          "13/15",
          "20/22"
        ],
        "att": [
          15,
          30
        ],
        "stats": [
          4,
          4,
          0,
          6
        ],
        "special": "Phalanx",
        "options": [
          "Exchange shields for 2H weapons, De 5+, CS (1)"
        ],
        "ovals": [
          0
        ],
        "limit": 0
      },
      {
        "name": "Nokken",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          10,
          20
        ],
        "values": [
          105,
          140
        ],
        "nerve": [
          "9/11",
          "13/15"
        ],
        "att": [
          10,
          12
        ],
        "stats": [
          5,
          6,
          0,
          3
        ],
        "special": "Breath Attack (10), Regeneration (5+), Vanguard, Ensnare",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Naiad Heartpiercers",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          10,
          20
        ],
        "values": [
          120,
          160
        ],
        "nerve": [
          "9/11",
          "13/15"
        ],
        "att": [
          10,
          12
        ],
        "stats": [
          5,
          5,
          4,
          3
        ],
        "special": "Harpoon-gun (range 18&quot;), Pathfinder, Piercing (1), Regeneration (4+)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Riverguard",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          10,
          20
        ],
        "values": [
          120,
          160
        ],
        "nerve": [
          "10/12",
          "14/16"
        ],
        "att": [
          10,
          12
        ],
        "stats": [
          6,
          4,
          5,
          4
        ],
        "special": "Fly (Speed remains as 6), Pathfinder, Throwing Weapons, Vicious, Ensnare",
        "options": [
          "Exchange shields for 2H weapons, De 3+, CS (1)"
        ],
        "ovals": [
          0
        ],
        "limit": 0
      },
      {
        "name": "Water Elementals",
        "mType": "LI",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          150,
          220
        ],
        "nerve": [
          "-/14",
          "-/17"
        ],
        "att": [
          9,
          18
        ],
        "stats": [
          7,
          4,
          0,
          5
        ],
        "special": "Crushing Strength (1), Pathfinder, Regeneration (5+), Shambling",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Depth Horrors",
        "mType": "LI",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          120,
          185
        ],
        "nerve": [
          "-/15",
          "-/18"
        ],
        "att": [
          9,
          18
        ],
        "stats": [
          6,
          3,
          0,
          3
        ],
        "special": "Crushing Strength (1), Ensnare",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Gigas",
        "mType": "LI",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          125,
          190
        ],
        "nerve": [
          "12/14",
          "15/17"
        ],
        "att": [
          6,
          12
        ],
        "stats": [
          4,
          3,
          0,
          4
        ],
        "special": "Big Shield, Crushing Strength (3), Height (1)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Tidal Swarm*",
        "mType": "LI",
        "irregular": 1,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          75,
          115
        ],
        "nerve": [
          "-/12",
          "-/15"
        ],
        "att": [
          15,
          30
        ],
        "stats": [
          5,
          5,
          0,
          2
        ],
        "special": "Ensnare, Height (0), Nimble",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Naiad Wyrmriders",
        "mType": "LC",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          155,
          240
        ],
        "nerve": [
          "12/14",
          "15/17"
        ],
        "att": [
          9,
          18
        ],
        "stats": [
          8,
          3,
          0,
          4
        ],
        "special": "Crushing Strength (1), Pathfinder, Regeneration (4+), Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Leviathan's Bane",
        "mType": "W",
        "irregular": 0,
        "unitType": [
          "W"
        ],
        "models": [
          1
        ],
        "values": [
          95
        ],
        "nerve": [
          "10/12"
        ],
        "att": [
          2
        ],
        "stats": [
          5,
          0,
          5,
          4
        ],
        "special": "Blast (D3+1), Ensnare, Piercing (4), Reload!",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Greater Water Elemental",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "M"
        ],
        "models": [
          1
        ],
        "values": [
          190
        ],
        "nerve": [
          "-/18"
        ],
        "att": [
          8
        ],
        "stats": [
          7,
          4,
          0,
          5
        ],
        "special": "Crushing Strength (2), Pathfinder, Regeneration (5+), Shambling",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Kraken",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "M"
        ],
        "models": [
          1
        ],
        "values": [
          230
        ],
        "nerve": [
          "17/19"
        ],
        "att": [
          15
        ],
        "stats": [
          7,
          4,
          0,
          4
        ],
        "special": "Base Size: 50x100mm, Crushing Strength (2), Ensnare, Regeneration (4+), Strider",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Knucker",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "M"
        ],
        "models": [
          1
        ],
        "values": [
          145
        ],
        "nerve": [
          "13/15"
        ],
        "att": [
          6
        ],
        "stats": [
          9,
          4,
          0,
          4
        ],
        "special": "Ensnare, Nimble, Pathfinder, Thunderous Charge (3)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Coral Giant",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "M"
        ],
        "models": [
          1
        ],
        "values": [
          200
        ],
        "nerve": [
          "16/18"
        ],
        "att": [
          "D6+5"
        ],
        "stats": [
          7,
          4,
          0,
          5
        ],
        "special": "Brutal, Crushing Strength (3), Ensnare, Iron Resolve, Strider",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Naiad Centurion",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          110
        ],
        "nerve": [
          "11/13"
        ],
        "att": [
          4
        ],
        "stats": [
          6,
          3,
          4,
          5
        ],
        "special": "Hero (Inf), Crushing Strength (1), Ensnare, Individual, Inspiring, Pathfinder, Regeneration (4+)",
        "options": [
          "Harpoon-gun (gain Piercing (1))"
        ],
        "ovals": [
          20
        ],
        "limit": 0
      },
      {
        "name": "Naiad Envoy",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          60
        ],
        "nerve": [
          "9/11"
        ],
        "att": [
          1
        ],
        "stats": [
          6,
          4,
          0,
          4
        ],
        "special": "Hero (Inf), Ensnare, Individual, Inspiring, Pathfinder, Regeneration (4+)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Riverguard Captain",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          115
        ],
        "nerve": [
          "11/13"
        ],
        "att": [
          4
        ],
        "stats": [
          6,
          3,
          0,
          5
        ],
        "special": "Hero (Inf), Crushing Strength (1), Fly (Speed remains as 6), Individual, Inspiring (Riverguard only), Pathfinder, Vicious, Ensnare",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Thuul Mythican",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          75
        ],
        "nerve": [
          "10/12"
        ],
        "att": [
          5
        ],
        "stats": [
          6,
          3,
          0,
          4
        ],
        "special": "Hero (Inf), Crushing Strength (1), Ensnare, Inspiring (Thuul only), Individual, Stealthy",
        "options": [
          "Lightning Bolt (3)",
          "Wind Blast (5)",
          "Surge (7)",
          "Bane Chant (2)",
          "Mind Fog (1)",
          "Weakness (2)",
          "Hex (2)",
          "Drain Life (6)",
          "Blinding Light (1)*",
          "Barkskin (1)*",
          "Aura of Heroism (2)*",
          "Guiding Light (2)*",
          "Teleport (3)*",
          "Critter's Call (8)*",
          "Spell Siphon (2)*",
          "Alchemist's Curse (10)*",
          "Blizzard (2)*",
          "Blood Boil*"
        ],
        "ovals": [
          20,
          30,
          40,
          15,
          10,
          20,
          20,
          25,
          10,
          10,
          15,
          15,
          15,
          20,
          25,
          30,
          30,
          30
        ],
        "limit": 0
      },
      {
        "name": "Placoderm Defender",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          110
        ],
        "nerve": [
          "11/13"
        ],
        "att": [
          6
        ],
        "stats": [
          4,
          3,
          0,
          6
        ],
        "special": "Hero (Inf), Individual, Inspiring (Placoderms only), Phalanx",
        "options": [
          "Exchange shield for 2H weapon, De 5+, CS (1)"
        ],
        "ovals": [
          0
        ],
        "limit": 0
      },
      {
        "name": "Depth Horror Eternal",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          120
        ],
        "nerve": [
          "-/16"
        ],
        "att": [
          5
        ],
        "stats": [
          6,
          3,
          0,
          3
        ],
        "special": "Hero (LrgInf), Crushing Strength (2), Ensnare, Inspiring (Depth Horrors only), Nimble",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Naiad Wyrmrider Centurion",
        "mType": "C",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          150
        ],
        "nerve": [
          "13/15"
        ],
        "att": [
          6
        ],
        "stats": [
          8,
          3,
          0,
          5
        ],
        "special": "Hero (LrgCav), Crushing Strength (1), Inspiring, Pathfinder, Regeneration (4+), Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Siren[1]",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          140
        ],
        "nerve": [
          "12/14"
        ],
        "att": [
          1
        ],
        "stats": [
          6,
          4,
          0,
          3
        ],
        "special": "Hero (Inf), Ensnare, Individual, Inspiring, Siren's Call, Stealthy",
        "options": [],
        "ovals": [],
        "limit": 1
      },
      {
        "name": "Trident King[1]",
        "mType": "C",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          220
        ],
        "nerve": [
          "14/16"
        ],
        "att": [
          12
        ],
        "stats": [
          8,
          4,
          0,
          5
        ],
        "special": "Hero (LrgCav), Base Size: 50x100mm, Nimble, Breath Attack (12), Crushing Strength (1), Ensnare, Piercing (1), Thunderous Charge (1), Very Inspiring",
        "options": [],
        "ovals": [],
        "limit": 1
      }
    ]
  },
  {
    "faction": "Abyssal Dwarfs",
    "alignment": 2,
    "special": "Cruel Masters",
    "units": [
      {
        "name": "Abyssal Berserkers",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          10,
          20
        ],
        "values": [
          125,
          180
        ],
        "nerve": [
          "-/13",
          "-/17"
        ],
        "att": [
          20,
          25
        ],
        "stats": [
          5,
          4,
          0,
          3
        ],
        "special": "Vicious, Crushing Strength (1)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Blacksouls",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          10,
          20,
          40
        ],
        "values": [
          80,
          115,
          190
        ],
        "nerve": [
          "10/12",
          "14/16",
          "21/23"
        ],
        "att": [
          10,
          12,
          25
        ],
        "stats": [
          4,
          4,
          0,
          5
        ],
        "special": "",
        "options": [
          "Vicious, Mutated Throwing Mastiff",
          "2H Weapons: De[4+], Crushing Strength"
        ],
        "ovals": [
          10,
          0
        ],
        "limit": 0
      },
      {
        "name": "Decimators",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          10,
          20,
          40
        ],
        "values": [
          120,
          160,
          255
        ],
        "nerve": [
          "10/12",
          "14/16",
          "21/23"
        ],
        "att": [
          10,
          12,
          25
        ],
        "stats": [
          4,
          5,
          0,
          4
        ],
        "special": "Vicious, Breath Attack (Att), Piercing (1)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Immortal Guard",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          10,
          20
        ],
        "values": [
          100,
          145
        ],
        "nerve": [
          "-/13",
          "-/17"
        ],
        "att": [
          10,
          12
        ],
        "stats": [
          4,
          3,
          0,
          5
        ],
        "special": "Vicious",
        "options": [
          "Mutated Throwing Mastiff",
          "2H Weapons"
        ],
        "ovals": [
          10,
          0
        ],
        "limit": 0
      },
      {
        "name": "Slave Orcs*",
        "irregular": 1,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          10,
          20,
          40
        ],
        "values": [
          65,
          90,
          150
        ],
        "nerve": [
          "9/11",
          "13/15",
          "20/22"
        ],
        "att": [
          10,
          12,
          25
        ],
        "stats": [
          5,
          5,
          0,
          4
        ],
        "special": "Base Size: 25x25mm, Crushing Strength (1), Yellow-Bellied, Vicious",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Slave Orc Gore Riders*",
        "mType": "C",
        "irregular": 1,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          5,
          10
        ],
        "values": [
          85,
          130
        ],
        "nerve": [
          "9/11",
          "12/14"
        ],
        "att": [
          8,
          16
        ],
        "stats": [
          8,
          4,
          0,
          4
        ],
        "special": "Crushing Strength (1), Thunderous Charge (1), Yellow-Bellied, not Vicious",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Lesser Obsidian Golems",
        "mType": "LI",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          135,
          210
        ],
        "nerve": [
          "-/14",
          "-/17"
        ],
        "att": [
          9,
          18
        ],
        "stats": [
          5,
          4,
          0,
          6
        ],
        "special": "Vicious, Base Size: 50x50mm, Height 3, Crushing Strength (2), Shambling",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Abyssal Halfbreeds",
        "mType": "C",
        "irregular": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          5,
          10
        ],
        "values": [
          125,
          195
        ],
        "nerve": [
          "11/13",
          "14/16"
        ],
        "att": [
          8,
          16
        ],
        "stats": [
          8,
          3,
          0,
          4
        ],
        "special": "Vicious, Crushing Strength (1), Regeneration (5+), Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Gargoyles*",
        "mType": "I",
        "irregular": 1,
        "unitType": [
          "T"
        ],
        "models": [
          10
        ],
        "values": [
          80
        ],
        "nerve": [
          "8/10"
        ],
        "att": [
          8
        ],
        "stats": [
          10,
          4,
          0,
          3
        ],
        "special": "Vicious, Base Size: 25x25mm, Fly, Regeneration (3+)",
        "options": [
          "Elder Gargoyles (Requires Ba'su'su the Vile)"
        ],
        "ovals": [
          20
        ],
        "limit": 0
      },
      {
        "name": "Abyssal Grotesques",
        "mType": "LC",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          165,
          250
        ],
        "nerve": [
          "12/14",
          "16/18"
        ],
        "att": [
          9,
          18
        ],
        "stats": [
          7,
          4,
          0,
          5
        ],
        "special": "Vicious, Brutal, Crushing Strength (2), Regeneration (5+), Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Greater Obsidian Golem",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "M"
        ],
        "models": [
          1
        ],
        "values": [
          160
        ],
        "nerve": [
          "-/18"
        ],
        "att": [
          8
        ],
        "stats": [
          5,
          4,
          0,
          6
        ],
        "special": "Vicious, Crushing Strength (3), Shambling",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Angkor Heavy Mortar",
        "mType": "W",
        "irregular": 0,
        "unitType": [
          "W"
        ],
        "models": [
          1
        ],
        "values": [
          120
        ],
        "nerve": [
          "10/12"
        ],
        "att": [
          1
        ],
        "stats": [
          4,
          0,
          5,
          5
        ],
        "special": "Vicious, Blast (D6+4), Indirect Fire, Piercing (3), Reload!",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "'Dragon' Fire-team",
        "mType": "W",
        "irregular": 0,
        "unitType": [
          "W"
        ],
        "models": [
          1
        ],
        "values": [
          50
        ],
        "nerve": [
          "10/12"
        ],
        "att": [
          10
        ],
        "stats": [
          4,
          0,
          0,
          4
        ],
        "special": "Vicious, Base Size: 25x50mm, Breath Attack (Att), Individual",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "G'rog Mortar",
        "mType": "W",
        "irregular": 0,
        "unitType": [
          "W"
        ],
        "models": [
          1
        ],
        "values": [
          100
        ],
        "nerve": [
          "10/12"
        ],
        "att": [
          1
        ],
        "stats": [
          4,
          0,
          5,
          5
        ],
        "special": "Vicious, Blast (D6+2), Indirect Fire, Piercing (2), Reload!",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Katsuchan Rocket Launcher",
        "mType": "W",
        "irregular": 0,
        "unitType": [
          "W"
        ],
        "models": [
          1
        ],
        "values": [
          85
        ],
        "nerve": [
          "10/12"
        ],
        "att": [
          3
        ],
        "stats": [
          4,
          0,
          5,
          5
        ],
        "special": "Vicious, Blast (D3), Indirect Fire, Piercing (1), Reload!",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Overmaster",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          120
        ],
        "nerve": [
          "13/15"
        ],
        "att": [
          5
        ],
        "stats": [
          4,
          3,
          0,
          6
        ],
        "special": "Vicious, Crushing Strength (1), Individual, Inspiring",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Overmaster on Great Abyssal Dragon",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          280
        ],
        "nerve": [
          "17/19"
        ],
        "att": [
          8
        ],
        "stats": [
          10,
          3,
          0,
          5
        ],
        "special": "Vicious, Breath Attack (10), Crushing Strength (3), Fly, Inspiring",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Iron-caster",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          105
        ],
        "nerve": [
          "11/13"
        ],
        "att": [
          2
        ],
        "stats": [
          4,
          4,
          0,
          5
        ],
        "special": "Vicious, Crushing Strength (1), Fireball (6), Heal (3)(only War Engines, Golems, Immortal Guard), Individual, Inspiring (War Engines only)",
        "options": [
          "Lightning Bolt (3)",
          "Surge (8)",
          "Mind Fog (1)",
          "Weakness (2)",
          "Hex (2)",
          "Drain Life (6)",
          "Blinding Light (1)*",
          "Barkskin (1)*",
          "Veil of Shadows (3)*",
          "Guiding Light (2)*",
          "Teleport (3)*",
          "Critter's Call (8)*",
          "Spell Siphon (2)*",
          "Alchemist's Curse (10)*",
          "Blizzard (2)*",
          "Blood Boil*"
        ],
        "ovals": [
          20,
          15,
          10,
          20,
          20,
          25,
          10,
          10,
          15,
          15,
          15,
          20,
          25,
          30,
          30,
          30
        ],
        "limit": 0
      },
      {
        "name": "Abyssal Halfbreed Champion",
        "mType": "C",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          160
        ],
        "nerve": [
          "12/14"
        ],
        "att": [
          6
        ],
        "stats": [
          8,
          3,
          0,
          5
        ],
        "special": "Vicious, Crushing Strength (3), Individual, Inspiring, Regeneration (5+)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Abyssal Grotesque Champion",
        "mType": "LC",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          140
        ],
        "nerve": [
          "12/14"
        ],
        "att": [
          5
        ],
        "stats": [
          7,
          3,
          0,
          5
        ],
        "special": "Vicious, Brutal, Crushing Strength (2), Individual, Regeneration (5+), Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Slavedriver",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          50
        ],
        "nerve": [
          "10/12"
        ],
        "att": [
          1
        ],
        "stats": [
          4,
          5,
          0,
          5
        ],
        "special": "Vicious, Individual, Inspiring",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Supreme Iron-caster on Great Winged Halfbreed",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          120
        ],
        "nerve": [
          "15/17"
        ],
        "att": [
          5
        ],
        "stats": [
          10,
          4,
          0,
          5
        ],
        "special": "Vicious, Crushing Strength (2), Fireball (10), Fly, Heal (4)(only War Engines, Golems, Immortal Guard), Inspiring",
        "options": [
          "Lightning Bolt (3)",
          "Surge (10)",
          "Mind Fog (1)",
          "Weakness (2)",
          "Hex (2)",
          "Drain Life (6)",
          "Blinding Light (1)*",
          "Barkskin (1)*",
          "Veil of Shadows (3)*",
          "Guiding Light (2)*",
          "Teleport (3)*",
          "Critter's Call (8)*",
          "Spell Siphon (2)*",
          "Alchemist's Curse (10)*",
          "Blizzard (2)*",
          "Blood Boil*"
        ],
        "ovals": [
          20,
          20,
          10,
          20,
          20,
          25,
          10,
          10,
          15,
          15,
          15,
          20,
          25,
          30,
          30,
          30
        ],
        "limit": 0
      },
      {
        "name": "Ba'su'su the Vile[1]",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          220
        ],
        "nerve": [
          "14/16"
        ],
        "att": [
          8
        ],
        "stats": [
          10,
          3,
          0,
          5
        ],
        "special": "Vicious, Base Size:25x25mm, Crushing Strength (2), Fly, Individual, Inspiring (Gargoyles only), Regeneration (5+)",
        "options": [],
        "ovals": [],
        "limit": 1
      },
      {
        "name": "Brakki Barka[1]",
        "mType": "C",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          200
        ],
        "nerve": [
          "14/16"
        ],
        "att": [
          6
        ],
        "stats": [
          8,
          3,
          0,
          5
        ],
        "special": "Vicious, Crushing Strength (3), Individual, Inspiring (range 12&quot;), Regeneration (5+)",
        "options": [],
        "ovals": [],
        "limit": 1
      }
    ]
  },
  {
    "faction": "Empire of Dust",
    "alignment": 2,
    "special": "Curse of Undeath",
    "units": [
      {
        "name": "Skeleton Warriors",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          10,
          20,
          40
        ],
        "values": [
          65,
          90,
          150
        ],
        "nerve": [
          "-/12",
          "-/16",
          "-/23"
        ],
        "att": [
          10,
          12,
          25
        ],
        "stats": [
          5,
          5,
          0,
          4
        ],
        "special": "Lifeleech (1), Shambling",
        "options": [
          "Casket of the Damned (once per game +5 dice to surge)"
        ],
        "ovals": [
          10
        ],
        "limit": 0
      },
      {
        "name": "Skeleton Spearmen",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          10,
          20,
          40
        ],
        "values": [
          75,
          105,
          175
        ],
        "nerve": [
          "-/12",
          "-/16",
          "-/23"
        ],
        "att": [
          10,
          15,
          30
        ],
        "stats": [
          5,
          5,
          0,
          4
        ],
        "special": "Lifeleech (1), Phalanx, Shambling",
        "options": [
          "Casket of the Damned (once per game +5 dice to surge)"
        ],
        "ovals": [
          10
        ],
        "limit": 0
      },
      {
        "name": "Revenants",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          10,
          20,
          40
        ],
        "values": [
          85,
          120,
          200
        ],
        "nerve": [
          "-/13",
          "-/17",
          "-/24"
        ],
        "att": [
          10,
          12,
          25
        ],
        "stats": [
          5,
          4,
          0,
          5
        ],
        "special": "Lifeleech (1), Shambling",
        "options": [
          "Casket of the Damned (once per game +5 dice to surge)"
        ],
        "ovals": [
          10
        ],
        "limit": 0
      },
      {
        "name": "Skeleton Archers",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          10,
          20,
          40
        ],
        "values": [
          75,
          100,
          165
        ],
        "nerve": [
          "-/12",
          "-/16",
          "-/23"
        ],
        "att": [
          8,
          10,
          20
        ],
        "stats": [
          5,
          6,
          5,
          3
        ],
        "special": "Bows (range 24&quot;), Lifeleech (1), Shambling",
        "options": [
          "Casket of the Damned (once per game +5 dice to surge)"
        ],
        "ovals": [
          10
        ],
        "limit": 0
      },
      {
        "name": "Skeleton Crossbowmen",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          10,
          20,
          40
        ],
        "values": [
          85,
          115,
          190
        ],
        "nerve": [
          "-/12",
          "-/16",
          "-/23"
        ],
        "att": [
          8,
          10,
          20
        ],
        "stats": [
          5,
          6,
          5,
          3
        ],
        "special": "Crossbows (range 24&quot;), Lifeleech (1), Piercing (1), Reload!, Shambling",
        "options": [
          "Casket of the Damned (once per game +5 dice to surge)"
        ],
        "ovals": [
          10
        ],
        "limit": 0
      },
      {
        "name": "Mummies",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          10,
          20
        ],
        "values": [
          120,
          170
        ],
        "nerve": [
          "-/14",
          "-/18"
        ],
        "att": [
          10,
          12
        ],
        "stats": [
          5,
          4,
          0,
          5
        ],
        "special": "Crushing Strength (2), Lifeleech (1), Regeneration (5+), Shambling",
        "options": [
          "Casket of the Damned (once per game +5 dice to surge)"
        ],
        "ovals": [
          10
        ],
        "limit": 0
      },
      {
        "name": "Enslaved Guardians",
        "mType": "LI",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          160,
          245
        ],
        "nerve": [
          "-/14",
          "-/17"
        ],
        "att": [
          9,
          18
        ],
        "stats": [
          6,
          3,
          0,
          5
        ],
        "special": "Crushing Strength (2), Lifeleech (1), Shambling, Wind Blast (5)",
        "options": [
          "Casket of the Damned (once per game +5 dice to surge)"
        ],
        "ovals": [
          10
        ],
        "limit": 0
      },
      {
        "name": "Enslaved Guardian Archers",
        "mType": "LI",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          160,
          245
        ],
        "nerve": [
          "-/14",
          "-/17"
        ],
        "att": [
          9,
          18
        ],
        "stats": [
          6,
          4,
          5,
          4
        ],
        "special": "Crushing Strength (1), Heavy Crossbows (range 36&quot;), Lifeleech (1), Piercing (2), Reload!, Shambling",
        "options": [
          "Casket of the Damned (once per game +5 dice to surge)"
        ],
        "ovals": [
          10
        ],
        "limit": 0
      },
      {
        "name": "Swarm*",
        "mType": "LI",
        "irregular": 1,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          65,
          100
        ],
        "nerve": [
          "-/12",
          "-/15"
        ],
        "att": [
          9,
          18
        ],
        "stats": [
          6,
          5,
          0,
          2
        ],
        "special": "Height (0), Lifeleech (1), Shambling, Vanguard",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Scavengers*",
        "mType": "LI",
        "irregular": 1,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          90,
          135
        ],
        "nerve": [
          "10/12",
          "13/15"
        ],
        "att": [
          9,
          18
        ],
        "stats": [
          10,
          5,
          0,
          4
        ],
        "special": "Fly, Lifeleech (2)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Skeleton Cavalry",
        "mType": "C",
        "irregular": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          5,
          10
        ],
        "values": [
          85,
          130
        ],
        "nerve": [
          "-/13",
          "-/16"
        ],
        "att": [
          7,
          14
        ],
        "stats": [
          9,
          5,
          0,
          4
        ],
        "special": "Lifeleech (1), Nimble, Shambling, Thunderous Charge (1)",
        "options": [
          "Casket of the Damned (once per game +5 dice to surge)"
        ],
        "ovals": [
          10
        ],
        "limit": 0
      },
      {
        "name": "Skeleton Archer Cavalry",
        "mType": "C",
        "irregular": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          5,
          10
        ],
        "values": [
          95,
          145
        ],
        "nerve": [
          "-/13",
          "-/16"
        ],
        "att": [
          7,
          14
        ],
        "stats": [
          9,
          6,
          5,
          3
        ],
        "special": "Bows (range 24&quot;), Lifeleech (1), Nimble, Shambling",
        "options": [
          "Casket of the Damned (once per game +5 dice to surge)"
        ],
        "ovals": [
          10
        ],
        "limit": 0
      },
      {
        "name": "Revenant Chariots",
        "mType": "LC",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          115,
          175
        ],
        "nerve": [
          "-/15",
          "-/18"
        ],
        "att": [
          8,
          16
        ],
        "stats": [
          8,
          4,
          5,
          4
        ],
        "special": "Base Size: 50x100mm, Bows (range 24&quot;), Lifeleech (1), Shambling, Thunderous Charge (2)",
        "options": [
          "Casket of the Damned (once per game +5 dice to surge)"
        ],
        "ovals": [
          10
        ],
        "limit": 0
      },
      {
        "name": "Revenant Worm Riders",
        "mType": "LC",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          135,
          210
        ],
        "nerve": [
          "-/14",
          "-/17"
        ],
        "att": [
          12,
          24
        ],
        "stats": [
          6,
          4,
          0,
          5
        ],
        "special": "Crushing Strength (1), Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Restless Souls of the Raia[1]: Skeleton Warriors",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "R"
        ],
        "models": [
          20
        ],
        "values": [
          180
        ],
        "nerve": [
          "-/16"
        ],
        "att": [
          8
        ],
        "stats": [
          5,
          4,
          5,
          4
        ],
        "special": "Lifeleech (1), Shambling, Blast (D3), Crushing Strength (2), Piercing (2), Throwing Weapons",
        "options": [],
        "ovals": [],
        "limit": 1
      },
      {
        "name": "Monolith[1]",
        "mType": "W",
        "irregular": 0,
        "unitType": [
          "W"
        ],
        "models": [
          1
        ],
        "values": [
          80
        ],
        "nerve": [
          "-/18"
        ],
        "att": [
          "-"
        ],
        "stats": [
          0,
          0,
          0,
          5
        ],
        "special": "Advanced Deployment, Base Size: Max 75x75mm, Height (4), Inspiring, Lifeleech (1), Monolith",
        "options": [],
        "ovals": [],
        "limit": 1
      },
      {
        "name": "Balefire Catapult",
        "mType": "W",
        "irregular": 0,
        "unitType": [
          "W"
        ],
        "models": [
          1
        ],
        "values": [
          100
        ],
        "nerve": [
          "-/11"
        ],
        "att": [
          1
        ],
        "stats": [
          5,
          0,
          5,
          4
        ],
        "special": "Blast (D6+2), Indirect Fire, Lifeleech (1), Piercing (2), Reload!, Shambling, Vicious",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Soul Snare[1]",
        "mType": "W",
        "irregular": 0,
        "unitType": [
          "W"
        ],
        "models": [
          1
        ],
        "values": [
          150
        ],
        "nerve": [
          "-/15"
        ],
        "att": [
          "-"
        ],
        "stats": [
          5,
          0,
          0,
          4
        ],
        "special": "Drain Life (10) (Range 18&quot;), Lifeleech (1), Stealthy",
        "options": [],
        "ovals": [],
        "limit": 1
      },
      {
        "name": "Bone Dragon",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "M"
        ],
        "models": [
          1
        ],
        "values": [
          200
        ],
        "nerve": [
          "-/17"
        ],
        "att": [
          9
        ],
        "stats": [
          10,
          4,
          0,
          4
        ],
        "special": "Crushing Strength (3), Fly, Lifeleech (1), Shambling",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Scorpion Husk",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "M"
        ],
        "models": [
          1
        ],
        "values": [
          145
        ],
        "nerve": [
          "-/14"
        ],
        "att": [
          8
        ],
        "stats": [
          6,
          4,
          0,
          5
        ],
        "special": "Crushing Strength (2), Lifeleech (1), Shambling, Vanguard, Vicious",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Bone Giant",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "M"
        ],
        "models": [
          1
        ],
        "values": [
          190
        ],
        "nerve": [
          "-/19"
        ],
        "att": [
          "D6+6"
        ],
        "stats": [
          7,
          4,
          0,
          5
        ],
        "special": "Brutal, Crushing Strength (3), Lifeleech (1), Shambling, Strider",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Reanimated Behemoth",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "M"
        ],
        "models": [
          1
        ],
        "values": [
          190
        ],
        "nerve": [
          "-/16"
        ],
        "att": [
          9
        ],
        "stats": [
          6,
          4,
          0,
          6
        ],
        "special": "Base Size: 50x100mm, Crushing Strength (3), Lifeleech (1), Shambling, Strider, Steady Aim",
        "options": [
          "Add Light Balefire Catapult (range 36&quot;), Indirect, Ra 5+, 1 Attack, Blast (D3+2), Piercing(1), Vicious (ranged attacks only)"
        ],
        "ovals": [
          20
        ],
        "limit": 0
      },
      {
        "name": "Revenant Champion",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          85
        ],
        "nerve": [
          "-/14"
        ],
        "att": [
          4
        ],
        "stats": [
          5,
          4,
          0,
          5
        ],
        "special": "Hero (Inf), Crushing Strength (1), Individual, Inspiring (Revenants only), Lifeleech (1)",
        "options": [
          "Mount on undead horse (increase Speed to 8, change to Hero (Cav))"
        ],
        "ovals": [
          15
        ],
        "limit": 0
      },
      {
        "name": "Revenant Champion on Worm",
        "mType": "LC",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          135
        ],
        "nerve": [
          "-/14"
        ],
        "att": [
          7
        ],
        "stats": [
          6,
          4,
          0,
          5
        ],
        "special": "Hero (LrgCav), Crushing Strength (1), Inspiring (Revenants only), Thunderous Charge (2)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Revenant on Undead Great Burrowing Wyrm",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          220
        ],
        "nerve": [
          "-/20"
        ],
        "att": [
          12
        ],
        "stats": [
          7,
          4,
          0,
          5
        ],
        "special": "Base Size: 75x75, Brutal, Crushing Strength (3), Inspiring, Lifeleech (1), Strider",
        "options": [
          "Gain Breath (10) and Vicious on ranged attacks"
        ],
        "ovals": [
          10
        ],
        "limit": 0
      },
      {
        "name": "Revenant King on Undead Great Flying Wyrm",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          270
        ],
        "nerve": [
          "-/20"
        ],
        "att": [
          12
        ],
        "stats": [
          10,
          4,
          0,
          5
        ],
        "special": "Base Size: 75x75, Brutal, Crushing Strength (3), Fly, Inspiring, Lifeleech (1), Surge (8)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Ahmunite Pharaoh",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          155
        ],
        "nerve": [
          "-/16"
        ],
        "att": [
          5
        ],
        "stats": [
          5,
          3,
          0,
          5
        ],
        "special": "Hero (Inf), Crushing Strength (2), Individual, Inspiring, Lifeleech (1), Regeneration (5+), Surge (8)",
        "options": [
          "Mind Fog (1)",
          "Weakness (2)",
          "Hex (2)",
          "Drain Life (6)",
          "Blinding Light (1)*",
          "Barkskin (1)*",
          "Veil of Shadows (3)*",
          "Guiding Light (2)*",
          "Teleport (3)*",
          "Critter's Call (8)*",
          "Spell Siphon (2)*",
          "Alchemist's Curse (10)*",
          "Blizzard (2)*",
          "Blood Boil*"
        ],
        "ovals": [
          10,
          20,
          20,
          25,
          10,
          10,
          15,
          15,
          15,
          20,
          25,
          30,
          30,
          30
        ],
        "limit": 0
      },
      {
        "name": "Ahmunite Pharaoh on Royal Chariot",
        "mType": "C",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          195
        ],
        "nerve": [
          "-/16"
        ],
        "att": [
          7
        ],
        "stats": [
          8,
          3,
          0,
          5
        ],
        "special": "Hero (LrgCav), Base Size: 50x100mm, Nimble, Crushing Strength (2), Inspiring, Lifeleech (1), Regeneration (5+), Surge (8), Thunderous Charge (1)",
        "options": [
          "Mind Fog (1)",
          "Weakness (2)",
          "Hex (2)",
          "Drain Life (6)",
          "Blinding Light (1)*",
          "Barkskin (1)*",
          "Veil of Shadows (3)*",
          "Guiding Light (2)*",
          "Teleport (3)*",
          "Critter's Call (8)*",
          "Spell Siphon (2)*",
          "Alchemist's Curse (10)*",
          "Blizzard (2)*",
          "Blood Boil*"
        ],
        "ovals": [
          10,
          20,
          20,
          25,
          10,
          10,
          15,
          15,
          15,
          20,
          25,
          30,
          30,
          30
        ],
        "limit": 0
      },
      {
        "name": "Cursed High Priest",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          120
        ],
        "nerve": [
          "-/13"
        ],
        "att": [
          1
        ],
        "stats": [
          5,
          5,
          0,
          4
        ],
        "special": "Hero (Inf), Individual, Inspiring, Lifeleech (1), Surge (10)",
        "options": [
          "Heal (4)",
          "Heal (4): Replace Surge",
          "Wind Blast (5)",
          "Mind Fog (1)",
          "Weakness (2)",
          "Hex (2)",
          "Drain Life (6)",
          "Blinding Light (1)*",
          "Barkskin (1)*",
          "Veil of Shadows (3)*",
          "Guiding Light (2)*",
          "Teleport (3)*",
          "Critter's Call (8)*",
          "Spell Siphon (2)*",
          "Alchemist's Curse (10)*",
          "Blizzard (2)*",
          "Blood Boil*",
          "Fireball (12) and Vicious",
          "Mount on undead horse (increase Speed to 8, change to Hero (Cav))"
        ],
        "ovals": [
          15,
          0,
          30,
          10,
          20,
          20,
          25,
          10,
          10,
          15,
          15,
          15,
          20,
          25,
          30,
          30,
          30,
          20,
          10
        ],
        "limit": 0
      },
      {
        "name": "Undead Army Standard Bearer",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          50
        ],
        "nerve": [
          "-/13"
        ],
        "att": [
          1
        ],
        "stats": [
          5,
          5,
          0,
          4
        ],
        "special": "Hero (Inf), Individual, Inspiring, Lifeleech (1), Shambling",
        "options": [
          "Mount on undead horse (increase Speed to 8, change to Hero (Cav))"
        ],
        "ovals": [
          15
        ],
        "limit": 0
      },
      {
        "name": "Arkhanten, Captain of the Dead Seas[1]",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          145
        ],
        "nerve": [
          "-/15"
        ],
        "att": [
          4
        ],
        "stats": [
          5,
          3,
          0,
          5
        ],
        "special": "Crushing Strength (1), Elite, Individual, Inspiring, Lifeleech (1), Lightning Bolt (3), Surge (3), Wind Blast (6), Stormcaller: Once per turn, immediately after using a spell, Arkhanten may use a different spell against the same or a different target",
        "options": [],
        "ovals": [],
        "limit": 1
      },
      {
        "name": "Mortibris the Necromancer[1]",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          210
        ],
        "nerve": [
          "15/17"
        ],
        "att": [
          1
        ],
        "stats": [
          5,
          5,
          0,
          4
        ],
        "special": "Bane-chant (2), Heal (5), Individual, Inspiring, Lifeleech (1), Lightning Bolt (4), Regeneration (5+), Stealthy, Surge (10), Chill Mist: While within 6&quot; of Mortibris, all friendly, non-allied units have the Stealthy special rule",
        "options": [],
        "ovals": [],
        "limit": 1
      },
      {
        "name": "Apaphys, Champion of Death[1]",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          265
        ],
        "nerve": [
          "-/21"
        ],
        "att": [
          12
        ],
        "stats": [
          7,
          4,
          0,
          5
        ],
        "special": "Base size: 75x75, Crushing Strength (3), Drain Life (6), Dread, Elite, Lifeleech (1), Surge (8), Very Inspiring",
        "options": [
          "Mount on Winged Wyrm, gaining Fly and increasing Speed to 10"
        ],
        "ovals": [
          50
        ],
        "limit": 1
      },
      {
        "name": "Idol of Shobik[1]",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          350
        ],
        "nerve": [
          "-/18"
        ],
        "att": [
          10
        ],
        "stats": [
          7,
          3,
          0,
          6
        ],
        "special": "Hero (Mon), Aura of Shobik, Crushing Strength (4), Heal (6), Lifeleech (1), Shambling, Strider, Very Inspiring",
        "options": [],
        "ovals": [],
        "limit": 1
      }
    ]
  },
  {
    "faction": "Forces of the Abyss",
    "alignment": 2,
    "special": "Abyssal Vengeance",
    "units": [
      {
        "name": "Abyssal Guard",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          10,
          20
        ],
        "values": [
          110,
          160
        ],
        "nerve": [
          "11/13",
          "15/17"
        ],
        "att": [
          10,
          12
        ],
        "stats": [
          5,
          3,
          0,
          5
        ],
        "special": "Fury, Regeneration (5+)",
        "options": [
          "2H Weapons: De[4+], Crushing Strength (1)"
        ],
        "ovals": [
          0
        ],
        "limit": 0
      },
      {
        "name": "Fleshlings",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          10,
          20,
          40
        ],
        "values": [
          65,
          90,
          150
        ],
        "nerve": [
          "10/12",
          "14/16",
          "21/23"
        ],
        "att": [
          10,
          12,
          25
        ],
        "stats": [
          5,
          3,
          0,
          4
        ],
        "special": "Fury",
        "options": [
          "2H Weapons: De[4+], Crushing Strength (1)"
        ],
        "ovals": [
          0
        ],
        "limit": 0
      },
      {
        "name": "Flamebearers",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          10,
          20
        ],
        "values": [
          105,
          140
        ],
        "nerve": [
          "10/12",
          "14/16"
        ],
        "att": [
          8,
          10
        ],
        "stats": [
          5,
          5,
          4,
          3
        ],
        "special": "Fury, Firebolt (range 18&quot;), Piercing (1), Regeneration (5+)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Gargoyles*",
        "mType": "I",
        "irregular": 1,
        "unitType": [
          "T"
        ],
        "models": [
          10
        ],
        "values": [
          80
        ],
        "nerve": [
          "8/10"
        ],
        "att": [
          8
        ],
        "stats": [
          10,
          4,
          0,
          3
        ],
        "special": "Base Sizes: 25x25mm, Fly, Regeneration (3+), Vicious, no Fury",
        "options": [
          "Elder Gargoyles (Requires Ba'su'su the Vile)"
        ],
        "ovals": [
          20
        ],
        "limit": 0
      },
      {
        "name": "Larvae",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "H",
          "L"
        ],
        "models": [
          40,
          60
        ],
        "values": [
          130,
          190
        ],
        "nerve": [
          "-/22"
        ],
        "att": [
          25,
          30
        ],
        "stats": [
          5,
          6,
          0,
          4
        ],
        "special": "Fury, Ensnare, Shambling",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Lower Abyssals",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          10,
          20,
          40
        ],
        "values": [
          85,
          120,
          200
        ],
        "nerve": [
          "10/12",
          "14/16",
          "21/23"
        ],
        "att": [
          10,
          12,
          25
        ],
        "stats": [
          5,
          4,
          0,
          4
        ],
        "special": "Fury, Regeneration (5+)",
        "options": [
          "2H Weapons: De[3+], Crushing Strength (1)"
        ],
        "ovals": [
          0
        ],
        "limit": 0
      },
      {
        "name": "Succubi",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          10,
          20
        ],
        "values": [
          135,
          190
        ],
        "nerve": [
          "10/12",
          "14/16"
        ],
        "att": [
          20,
          25
        ],
        "stats": [
          6,
          3,
          0,
          3
        ],
        "special": "Fury, Ensnare, Stealthy",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Succubi Lurkers*",
        "mType": "I",
        "irregular": 1,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          10,
          20
        ],
        "values": [
          160,
          225
        ],
        "nerve": [
          "10/12",
          "14/16"
        ],
        "att": [
          20,
          25
        ],
        "stats": [
          7,
          3,
          0,
          4
        ],
        "special": "Fury, Ensnare, Stealthy, Pathfinder",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Abyssal Horsemen",
        "mType": "C",
        "irregular": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          5,
          10
        ],
        "values": [
          140,
          215
        ],
        "nerve": [
          "11/13",
          "14/16"
        ],
        "att": [
          9,
          18
        ],
        "stats": [
          8,
          3,
          0,
          5
        ],
        "special": "Fury, Crushing Strength (1), Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Hellhounds",
        "mType": "C",
        "irregular": 0,
        "unitType": [
          "T"
        ],
        "models": [
          5
        ],
        "values": [
          125
        ],
        "nerve": [
          "10/12"
        ],
        "att": [
          15
        ],
        "stats": [
          9,
          4,
          0,
          4
        ],
        "special": "Fury, Height 1, Nimble Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Imps",
        "mType": "LI",
        "irregular": 1,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          70,
          105
        ],
        "nerve": [
          "11/13",
          "14/16"
        ],
        "att": [
          12,
          24
        ],
        "stats": [
          5,
          5,
          0,
          3
        ],
        "special": "Fury, Height 0, Vicious",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Molochs",
        "mType": "LI",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          130,
          200
        ],
        "nerve": [
          "12/15",
          "15/18"
        ],
        "att": [
          12,
          24
        ],
        "stats": [
          5,
          4,
          0,
          4
        ],
        "special": "Fury, Base Size: 50x50mm, Crushing Strength (2), Regeneration (5+), Brutal",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Tortured Souls",
        "mType": "LI",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          145,
          220
        ],
        "nerve": [
          "-/15",
          "-/18"
        ],
        "att": [
          9,
          18
        ],
        "stats": [
          10,
          4,
          0,
          4
        ],
        "special": "Fury, Crushing Strength (1), Thunderous Charge (1), Fly, Lifeleech (2), Shambling",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Twisted Victims[1]: Tortured Souls",
        "mType": "LI",
        "irregular": 0,
        "unitType": [
          "H"
        ],
        "models": [
          6
        ],
        "values": [
          220
        ],
        "nerve": [
          "-/18"
        ],
        "att": [
          18
        ],
        "stats": [
          10,
          4,
          0,
          4
        ],
        "special": "Crushing Strength (1), Fly, Lifeleech (2)",
        "options": [],
        "ovals": [],
        "limit": 1
      },
      {
        "name": "Hellequins*",
        "mType": "C",
        "irregular": 1,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          5,
          10
        ],
        "values": [
          170,
          265
        ],
        "nerve": [
          "13/15",
          "16/18"
        ],
        "att": [
          10,
          20
        ],
        "stats": [
          8,
          3,
          0,
          5
        ],
        "special": "Crushing Strength (1), Fury, Lifeleech (1), Thunderous Charge (2)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Abyssal Despoilers",
        "mType": "LC",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          165,
          255
        ],
        "nerve": [
          "13/15",
          "16/18"
        ],
        "att": [
          9,
          18
        ],
        "stats": [
          7,
          4,
          0,
          5
        ],
        "special": "Brutal, Crushing Strength (2), Fury, Regeneration (5+), Thunderous Charge (1), Vicious",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Chroneas",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "M"
        ],
        "models": [
          1
        ],
        "values": [
          170
        ],
        "nerve": [
          "16/18"
        ],
        "att": [
          "D3+3"
        ],
        "stats": [
          6,
          4,
          0,
          5
        ],
        "special": "Fury, Crushing Stregnth (3), Pathfinder, Strider, Tempus: When this unit is given an order, all enemy units within 6&quot; of this unit take an immediate point of damage, however they can only be damaged by a single source of Tempus per turn. No Nerve test is required for damage taken from Tempus.",
        "options": [
          "Increase attacks to D6+6",
          "Drain life (6)"
        ],
        "ovals": [
          35,
          20
        ],
        "limit": 0
      },
      {
        "name": "Abbysal Champion",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          135
        ],
        "nerve": [
          "13/15"
        ],
        "att": [
          5
        ],
        "stats": [
          5,
          3,
          0,
          5
        ],
        "special": "Fury, Crushing Strength (1), Individual, Inspiring, Regeneration (5+)",
        "options": [
          "Wings: Fly, Sp[10]",
          "Lightning Bolt (5)",
          "Mind Fog (1)",
          "Weakness (2)",
          "Hex (2)",
          "Drain Life (6)",
          "Blinding Light (1)*",
          "Barkskin (1)*",
          "Veil of Shadows (3)*",
          "Guiding Light (2)*",
          "Teleport (3)*",
          "Critter's Call (8)*",
          "Spell Siphon (2)*",
          "Alchemist's Curse (10)*",
          "Blizzard (2)*",
          "Blood Boil*",
          "Mounted: Sp[8], Hero (Cav)"
        ],
        "ovals": [
          40,
          40,
          10,
          20,
          20,
          25,
          10,
          10,
          15,
          15,
          15,
          20,
          25,
          30,
          30,
          30,
          20
        ],
        "limit": 0
      },
      {
        "name": "Efreet",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          135
        ],
        "nerve": [
          "11/13"
        ],
        "att": [
          1
        ],
        "stats": [
          7,
          4,
          0,
          4
        ],
        "special": "Fury, Fireball (16), Individual, Pathfinder",
        "options": [
          "Mind Fog (1)",
          "Weakness (2)",
          "Hex (2)",
          "Drain Life (6)",
          "Blinding Light (1)*",
          "Barkskin (1)*",
          "Veil of Shadows (3)*",
          "Guiding Light (2)*",
          "Teleport (3)*",
          "Critter's Call (8)*",
          "Spell Siphon (2)*",
          "Alchemist's Curse (10)*",
          "Blizzard (2)*",
          "Blood Boil*"
        ],
        "ovals": [
          10,
          20,
          20,
          25,
          10,
          10,
          15,
          15,
          15,
          20,
          25,
          30,
          30,
          30
        ],
        "limit": 0
      },
      {
        "name": "Abyssal Warlock",
        "mType": "LI",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          70
        ],
        "nerve": [
          "12/14"
        ],
        "att": [
          1
        ],
        "stats": [
          5,
          4,
          0,
          5
        ],
        "special": "Individual, Fury, Regeneration (5+)",
        "options": [
          "Bane-chant (2)",
          "Fireball (10)",
          "Mind Fog (1)",
          "Weakness (2)",
          "Hex (2)",
          "Drain Life (6)",
          "Blinding Light (1)*",
          "Barkskin (1)*",
          "Veil of Shadows (3)*",
          "Guiding Light (2)*",
          "Teleport (3)*",
          "Critter's Call (8)*",
          "Spell Siphon (2)*",
          "Alchemist's Curse (10)*",
          "Blizzard (2)*",
          "Blood Boil*"
        ],
        "ovals": [
          15,
          20,
          10,
          20,
          20,
          25,
          10,
          10,
          15,
          15,
          15,
          20,
          25,
          30,
          30,
          30
        ],
        "limit": 0
      },
      {
        "name": "Abbysal Temptress",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          90
        ],
        "nerve": [
          "11/13"
        ],
        "att": [
          "5"
        ],
        "stats": [
          6,
          3,
          0,
          4
        ],
        "special": "Fury, Ensnare, Individual, Inspiring (Succubi only), Stealthy",
        "options": [
          "Bane Chant (2)",
          "Wind Blast (6)",
          "Mind Fog (1)",
          "Weakness (2)",
          "Hex (2)",
          "Drain Life (6)",
          "Blinding Light (1)*",
          "Barkskin (1)*",
          "Veil of Shadows (3)*",
          "Guiding Light (2)*",
          "Teleport (3)*",
          "Critter's Call (8)*",
          "Spell Siphon (2)*",
          "Alchemist's Curse (10)*",
          "Blizzard (2)*",
          "Blood Boil*",
          "Wings: Fly, Sp[10]"
        ],
        "ovals": [
          15,
          30,
          10,
          20,
          20,
          25,
          10,
          10,
          15,
          15,
          15,
          20,
          25,
          30,
          30,
          30,
          10
        ],
        "limit": 0
      },
      {
        "name": "Abbysal Harbinger",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          60
        ],
        "nerve": [
          "10/12"
        ],
        "att": [
          1
        ],
        "stats": [
          5,
          5,
          4,
          4
        ],
        "special": "Fury, Firebolt (range 18&quot;), Individual, Inspiring, Piercing (1), Regeneration (5+)",
        "options": [
          "Mounted: Sp[8], Hero (Cav)"
        ],
        "ovals": [
          15
        ],
        "limit": 0
      },
      {
        "name": "Hellequin Blood-masque",
        "mType": "C",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          90
        ],
        "nerve": [
          "11/13"
        ],
        "att": [
          3
        ],
        "stats": [
          8,
          3,
          0,
          5
        ],
        "special": "Fury, Crushing Strength (1), Thunderous Charge (2), Lifeleech (1)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Archfiend of the Abyss",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          250
        ],
        "nerve": [
          "16/18"
        ],
        "att": [
          9
        ],
        "stats": [
          7,
          3,
          0,
          5
        ],
        "special": "Fury, Brutal, Crushing Strength (2), Inspiring, Thunderous Charge (2), Vicious",
        "options": [
          "Wings: Fly, Sp[10]",
          "Lightning Bolt (5)",
          "Mind Fog (1)",
          "Weakness (2)",
          "Hex (2)",
          "Drain Life (6)",
          "Blinding Light (1)*",
          "Barkskin (1)*",
          "Veil of Shadows (3)*",
          "Guiding Light (2)*",
          "Teleport (3)*",
          "Critter's Call (8)*",
          "Spell Siphon (2)*",
          "Alchemist's Curse (10)*",
          "Blizzard (2)*",
          "Blood Boil*"
        ],
        "ovals": [
          50,
          25,
          10,
          20,
          20,
          25,
          10,
          10,
          15,
          15,
          15,
          20,
          25,
          30,
          30,
          30
        ],
        "limit": 0
      },
      {
        "name": "Ba'su'su the Vile[1]",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          220
        ],
        "nerve": [
          "14/16"
        ],
        "att": [
          8
        ],
        "stats": [
          10,
          3,
          0,
          5
        ],
        "special": "Base Size: 25x25mm, Crushing Strength (2), Fly, Individual, Inspiring (Gargoyles only), Regeneration (5+), Vicious, no Fury",
        "options": [],
        "ovals": [],
        "limit": 1
      },
      {
        "name": "Mau'ti-bu-su[1]",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          160
        ],
        "nerve": [
          "12/14"
        ],
        "att": [
          5
        ],
        "stats": [
          10,
          3,
          0,
          4
        ],
        "special": "Ensnare, Fly, Fury, Individual, Inspiring, Stealthy, Terrible Majesty (When testing the Nerve of an enemy unit engaged in melee with this unit, add an additional D3 to the total. This effect does not stack with Brutal.)",
        "options": [],
        "ovals": [],
        "limit": 1
      },
      {
        "name": "The Lord of Lies[1]",
        "mType": "LI",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          300
        ],
        "nerve": [
          "15/20"
        ],
        "att": [
          5
        ],
        "stats": [
          10,
          3,
          0,
          5
        ],
        "special": "Fury, Crushing Strength (2), Ensnare, Fly, Inspiring, Lightning Bolt (7), Stealthy, Thunderous Charge",
        "options": [],
        "ovals": [],
        "limit": 1
      },
      {
        "name": "The Well of Souls[1]",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          275
        ],
        "nerve": [
          "-/20"
        ],
        "att": [
          10
        ],
        "stats": [
          10,
          4,
          0,
          5
        ],
        "special": "Fury, Crushing Strength (2), Fly, Inspiring, Lifeleech (5), Shambling, Soul Drain",
        "options": [],
        "ovals": [],
        "limit": 1
      },
      {
        "name": "Demon Lord Ba'el, Bane of the Mortal Kingdoms[1]",
        "mType": "LI",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          360
        ],
        "nerve": [
          "17/19"
        ],
        "att": [
          9
        ],
        "stats": [
          10,
          3,
          0,
          5
        ],
        "special": "Brutal, Fury, Crushing Strength (2), Fly, Inspiring, Lightning Bolt (5), Regeneration (5+), Thunderous Charge (2), Vicious, From the Pit I Curse Thee! (This ability is a ranged attack that can be used once per game. When this ranged attack is used, all enemy units within 6&quot; of Ba'el become Disordered)",
        "options": [],
        "ovals": [],
        "limit": 1
      }
    ]
  },
  {
    "faction": "Goblins",
    "alignment": 2,
    "special": "Utterly Spineless",
    "units": [
      {
        "name": "Rabble",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "R",
          "H",
          "L"
        ],
        "models": [
          20,
          40,
          60
        ],
        "values": [
          75,
          125,
          180
        ],
        "nerve": [
          "12/14",
          "19/21",
          "25/27"
        ],
        "att": [
          12,
          25,
          30
        ],
        "stats": [
          5,
          5,
          0,
          4
        ],
        "special": "Yellow-Bellied",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Sharpsticks",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "R",
          "H",
          "L"
        ],
        "models": [
          20,
          40,
          60
        ],
        "values": [
          95,
          155,
          230
        ],
        "nerve": [
          "12/14",
          "19/21",
          "25/27"
        ],
        "att": [
          15,
          30,
          35
        ],
        "stats": [
          5,
          5,
          0,
          4
        ],
        "special": "Yellow-Bellied, Phalanx",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Spitters",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          20,
          40
        ],
        "values": [
          85,
          140
        ],
        "nerve": [
          "12/14",
          "19/21"
        ],
        "att": [
          10,
          20
        ],
        "stats": [
          5,
          6,
          5,
          3
        ],
        "special": "Yellow-Bellied, Bows (range 24&quot;)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Grogger's Goons",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "H"
        ],
        "models": [
          40
        ],
        "values": [
          175
        ],
        "nerve": [
          "-/21"
        ],
        "att": [
          25
        ],
        "stats": [
          5,
          4,
          0,
          4
        ],
        "special": "Regeneration (5+)",
        "options": [],
        "ovals": [],
        "limit": 1
      },
      {
        "name": "Fleabag Riders",
        "mType": "C",
        "irregular": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          5,
          10,
          20
        ],
        "values": [
          95,
          145,
          255
        ],
        "nerve": [
          "9/11",
          "12/14",
          "17/19"
        ],
        "att": [
          7,
          14,
          28
        ],
        "stats": [
          10,
          4,
          0,
          4
        ],
        "special": "Yellow-Bellied, Thunderous Charge (1), Nimble",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Fleabag Rider Sniffs",
        "mType": "C",
        "irregular": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          5,
          10
        ],
        "values": [
          95,
          145
        ],
        "nerve": [
          "9/11",
          "12/14"
        ],
        "att": [
          7,
          14
        ],
        "stats": [
          10,
          5,
          5,
          3
        ],
        "special": "Yellow-Bellied, Bows (range 24&quot;), Nimble",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Mawbeast Pack*",
        "mType": "C",
        "irregular": 1,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          5,
          10
        ],
        "values": [
          60,
          95
        ],
        "nerve": [
          "9/11",
          "12/14"
        ],
        "att": [
          6,
          12
        ],
        "stats": [
          6,
          4,
          0,
          3
        ],
        "special": "Yellow-Bellied, Height 1, Crushing Strength (1), Nimble, Vicious",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Mawbeasts Pack (Magwa & Jo'os)",
        "mType": "C",
        "irregular": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          5,
          10
        ],
        "values": [
          60,
          95
        ],
        "nerve": [
          "9/11",
          "12/14"
        ],
        "att": [
          6,
          12
        ],
        "stats": [
          6,
          3,
          0,
          3
        ],
        "special": "Yellow-Bellied, Height 1, Crushing Strength (1), Nimble, Vicious",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Fleabag Chariots",
        "mType": "LC",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          110,
          170
        ],
        "nerve": [
          "11/13",
          "14/16"
        ],
        "att": [
          8,
          16
        ],
        "stats": [
          9,
          4,
          5,
          4
        ],
        "special": "Yellow-Bellied, Bows (range 24&quot;), Base Size: 50x100mm, Thunderous Charge (2)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Trolls",
        "mType": "LI",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          125,
          190
        ],
        "nerve": [
          "11/14",
          "14/17"
        ],
        "att": [
          9,
          18
        ],
        "stats": [
          6,
          4,
          0,
          5
        ],
        "special": "Crushing Strength (2), Regeneration (5+), not Yellow-Bellied",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Giant",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "M"
        ],
        "models": [
          1
        ],
        "values": [
          190
        ],
        "nerve": [
          "17/19"
        ],
        "att": [
          "D6+6"
        ],
        "stats": [
          7,
          4,
          0,
          5
        ],
        "special": "Brutal, Crushing Strength (3), Fury, Strider, not Yellow-Bellied",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Big Rocks Thrower",
        "mType": "W",
        "irregular": 0,
        "unitType": [
          "W"
        ],
        "models": [
          1
        ],
        "values": [
          80
        ],
        "nerve": [
          "8/10"
        ],
        "att": [
          1
        ],
        "stats": [
          5,
          0,
          5,
          4
        ],
        "special": "Yellow-Bellied, Blast (D6+2), Indirect Fire, Piercing (3), Reload!",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Sharpstick Thrower",
        "mType": "W",
        "irregular": 0,
        "unitType": [
          "W"
        ],
        "models": [
          1
        ],
        "values": [
          55
        ],
        "nerve": [
          "8/10"
        ],
        "att": [
          2
        ],
        "stats": [
          5,
          0,
          5,
          4
        ],
        "special": "Yellow-Bellied, Blast (D3), Piercing (2), Reload!",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "War Trombone",
        "mType": "W",
        "irregular": 0,
        "unitType": [
          "W"
        ],
        "models": [
          1
        ],
        "values": [
          65
        ],
        "nerve": [
          "8/10"
        ],
        "att": [
          10
        ],
        "stats": [
          5,
          0,
          0,
          4
        ],
        "special": "Yellow-Bellied, Breath Attack (Att), Piercing (1)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Mincer",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "M"
        ],
        "models": [
          1
        ],
        "values": [
          80
        ],
        "nerve": [
          "9/11"
        ],
        "att": [
          "D6+6"
        ],
        "stats": [
          5,
          4,
          0,
          4
        ],
        "special": "Yellow-Bellied, Base Size: 50x100mm, Height 3, Big Shield, Brutal, Thunderous Charge (3)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Slasher",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "M"
        ],
        "models": [
          1
        ],
        "values": [
          165
        ],
        "nerve": [
          "14/16"
        ],
        "att": [
          8
        ],
        "stats": [
          7,
          4,
          0,
          5
        ],
        "special": "Crushing Strength (2), Thunderous Charge (1), not Yellow-Bellied",
        "options": [
          "Add small sharpstick throwser (range 36&quot;), Ra 5+, 2 Attacks, Blast (D3), Piercing(2)"
        ],
        "ovals": [
          10
        ],
        "limit": 0
      },
      {
        "name": "King",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          90
        ],
        "nerve": [
          "11/13"
        ],
        "att": [
          5
        ],
        "stats": [
          5,
          4,
          4,
          4
        ],
        "special": "Yellow-Bellied, Bow (range 24&quot;), Individual, Inspiring",
        "options": [
          "Mounted: Sp[10], Hero (Cav)"
        ],
        "ovals": [
          20
        ],
        "limit": 0
      },
      {
        "name": "King on Chariot",
        "mType": "LC",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          130
        ],
        "nerve": [
          "13/15"
        ],
        "att": [
          7
        ],
        "stats": [
          9,
          4,
          4,
          4
        ],
        "special": "Yellow-Bellied, Bow (range 24&quot;), Base Size: 50x100mm, Nimble, Inspiring, Thunderous Charge (2)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Biggit",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          60
        ],
        "nerve": [
          "9/11"
        ],
        "att": [
          3
        ],
        "stats": [
          5,
          4,
          4,
          4
        ],
        "special": "Yellow-Bellied, Bow (range 24&quot;), Individual, Inspiring",
        "options": [
          "Mounted: Sp[10], Hero (Cav)"
        ],
        "ovals": [
          15
        ],
        "limit": 0
      },
      {
        "name": "Flaggit",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          40
        ],
        "nerve": [
          "8/10"
        ],
        "att": [
          1
        ],
        "stats": [
          5,
          6,
          0,
          4
        ],
        "special": "Yellow-Bellied, Individual, Inspiring",
        "options": [
          "Mounted: Sp[10], Hero (Cav)"
        ],
        "ovals": [
          15
        ],
        "limit": 0
      },
      {
        "name": "Wiz",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          45
        ],
        "nerve": [
          "9/11"
        ],
        "att": [
          1
        ],
        "stats": [
          5,
          5,
          0,
          4
        ],
        "special": "Yellow-Bellied, Individual, Lightning Bolt (3)",
        "options": [
          "Wind Blast (5)",
          "Bane Chant (2)",
          "Fireball (6)",
          "Mind Fog (1)",
          "Weakness (2)",
          "Hex (2)",
          "Drain Life (6)",
          "Blinding Light (1)*",
          "Barkskin (1)*",
          "Veil of Shadows (3)*",
          "Guiding Light (2)*",
          "Teleport (3)*",
          "Critter's Call (8)*",
          "Spell Siphon (2)*",
          "Alchemist's Curse (10)*",
          "Blizzard (2)*",
          "Blood Boil*",
          "Mounted: Sp[10], Hero (Cav)"
        ],
        "ovals": [
          15,
          15,
          15,
          10,
          20,
          20,
          25,
          10,
          10,
          15,
          15,
          15,
          20,
          25,
          30,
          30,
          30,
          10
        ],
        "limit": 0
      },
      {
        "name": "Troll Bruiser",
        "mType": "LI",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          125
        ],
        "nerve": [
          "12/15"
        ],
        "att": [
          5
        ],
        "stats": [
          6,
          3,
          0,
          5
        ],
        "special": "Crushing Strength (3), Inspiring (Trolls only), Nimble, Regeneration (5+), not Yellow-Bellied",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Magwa & Jo'os",
        "mType": "LC",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          110
        ],
        "nerve": [
          "12/14"
        ],
        "att": [
          4
        ],
        "stats": [
          6,
          3,
          0,
          4
        ],
        "special": "Yellow-Bellied, Single Base: 50x50mm, Height 1, Crushing Strength (2), Individual, Inspiring, Lightning Bolt (4), Vicious",
        "options": [],
        "ovals": [],
        "limit": 1
      },
      {
        "name": "Grogger Split-Tooth",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          115
        ],
        "nerve": [
          "-/12"
        ],
        "att": [
          5
        ],
        "stats": [
          5,
          4,
          6,
          4
        ],
        "special": "Bow (Range 24&quot;), Destiny, Individual, Inspiring, Regeneration (3+)",
        "options": [],
        "ovals": [],
        "limit": 1
      }
    ]
  },
  {
    "faction": "Night-Stalkers",
    "alignment": 2,
    "special": "Stolen Dreams, Trans-dimensional, Mindthirst",
    "units": [
      {
        "name": "Spectres",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          10,
          20
        ],
        "values": [
          100,
          140
        ],
        "nerve": [
          "10/13",
          "14/17"
        ],
        "att": [
          8,
          10
        ],
        "stats": [
          6,
          6,
          4,
          3
        ],
        "special": "Firebolt, Mindthirst, Pathfinder, Piercing (1), Stealthy",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Blood Worms",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "R",
          "H",
          "L"
        ],
        "models": [
          20,
          40,
          60
        ],
        "values": [
          120,
          200,
          290
        ],
        "nerve": [
          "11/14",
          "18/21",
          "24/27"
        ],
        "att": [
          15,
          30,
          40
        ],
        "stats": [
          5,
          4,
          0,
          4
        ],
        "special": "Lifeleech (2), Mindthirst, Stealthy",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Reapers",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          10,
          20
        ],
        "values": [
          155,
          220
        ],
        "nerve": [
          "11/14",
          "15/18"
        ],
        "att": [
          20,
          25
        ],
        "stats": [
          5,
          3,
          0,
          4
        ],
        "special": "Crushing Strength (1), Mindthirst, Stealthy",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Doppelgangers",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "R"
        ],
        "models": [
          20
        ],
        "values": [
          150
        ],
        "nerve": [
          "14/17"
        ],
        "att": [
          10
        ],
        "stats": [
          5,
          5,
          0,
          4
        ],
        "special": "Doppelganger, Mindthirst, Stealthy",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Scarecrows",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "R",
          "H",
          "L"
        ],
        "models": [
          20,
          40,
          60
        ],
        "values": [
          80,
          130,
          190
        ],
        "nerve": [
          "-/14",
          "-/21",
          "-/27"
        ],
        "att": [
          15,
          30,
          40
        ],
        "stats": [
          5,
          5,
          0,
          3
        ],
        "special": "Mindthirst, Shambling, Stealthy",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Phantoms",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          10,
          20
        ],
        "values": [
          130,
          185
        ],
        "nerve": [
          "-/12",
          "-/16"
        ],
        "att": [
          10,
          12
        ],
        "stats": [
          10,
          4,
          0,
          5
        ],
        "special": "Crushing Strength (1), Fly, Mindthirst, Shambling, Stealthy",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Needle-fangs*",
        "mType": "LI",
        "irregular": 1,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          85,
          120
        ],
        "nerve": [
          "10/13",
          "13/16"
        ],
        "att": [
          12,
          24
        ],
        "stats": [
          5,
          5,
          0,
          3
        ],
        "special": "Height (0), Mindthirst, Pathfinder, Stealthy, Vanguard",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Butchers",
        "mType": "LI",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          145,
          220
        ],
        "nerve": [
          "-/15",
          "-/18"
        ],
        "att": [
          9,
          18
        ],
        "stats": [
          6,
          4,
          0,
          5
        ],
        "special": "Crushing Strength (2), Mindthirst, Shambling, Stealthy",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Shadowhounds*",
        "mType": "C",
        "irregular": 1,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          5,
          10
        ],
        "values": [
          130,
          200
        ],
        "nerve": [
          "11/14",
          "14/17"
        ],
        "att": [
          10,
          20
        ],
        "stats": [
          9,
          4,
          0,
          4
        ],
        "special": "Height (1), Mindthirst, Nimble, Regeneration (5+), Stealthy, Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Nightmares*",
        "mType": "LC",
        "irregular": 1,
        "unitType": [
          "R"
        ],
        "models": [
          3
        ],
        "values": [
          180
        ],
        "nerve": [
          "13/16"
        ],
        "att": [
          9
        ],
        "stats": [
          10,
          3,
          0,
          4
        ],
        "special": "Crushing Strength (1), Fly, Mindthirst, Thunderous Charge (1), Wind Blast (5)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Fiends",
        "mType": "LC",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          130,
          200
        ],
        "nerve": [
          "12/15",
          "15/18"
        ],
        "att": [
          12,
          24
        ],
        "stats": [
          8,
          4,
          0,
          4
        ],
        "special": "Crushing Strength (1), Mindthirst, Stealthy, Vicious",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Mind-screech",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "M"
        ],
        "models": [
          1
        ],
        "values": [
          230
        ],
        "nerve": [
          "14/17"
        ],
        "att": [
          12
        ],
        "stats": [
          5,
          6,
          4,
          4
        ],
        "special": "Firebolt, Height (2), Mindthirst, Pathfinder, Piercing (3), Stealthy",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Shadow-Hulk",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "M"
        ],
        "models": [
          1
        ],
        "values": [
          170
        ],
        "nerve": [
          "-/20"
        ],
        "att": [
          9
        ],
        "stats": [
          5,
          3,
          0,
          4
        ],
        "special": "Crushing Strength (3), Mindthirst, Strider",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Planar Apparition",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "M"
        ],
        "models": [
          1
        ],
        "values": [
          165
        ],
        "nerve": [
          "13/15"
        ],
        "att": [
          4
        ],
        "stats": [
          7,
          4,
          0,
          4
        ],
        "special": "Ensnare, Heal (7), Mindthirst, Nimble, Pathfinder, Regeneration (4+), Stealthy",
        "options": [
          "Bane Chant (2)",
          "Mind Fog (1)",
          "Weakness (2)",
          "Hex (2)",
          "Drain Life (6)"
        ],
        "ovals": [
          15,
          10,
          20,
          20,
          25
        ],
        "limit": 0
      },
      {
        "name": "Terror",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "M"
        ],
        "models": [
          1
        ],
        "values": [
          255
        ],
        "nerve": [
          "-/20"
        ],
        "att": [
          15
        ],
        "stats": [
          6,
          3,
          0,
          3
        ],
        "special": "Crushing Strength (1), Ensnare, Mindthirst, Regeneration (4+), Shambling, Stealthy",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Screamer",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "M"
        ],
        "models": [
          1
        ],
        "values": [
          115
        ],
        "nerve": [
          "11/14"
        ],
        "att": [
          3
        ],
        "stats": [
          4,
          6,
          0,
          4
        ],
        "special": "Height (2), Lightning Bolt (5), Mindthirst, Stealthy",
        "options": [
          "Bane Chant (2)",
          "Mind Fog (1)",
          "Weakness (2)",
          "Hex (2)",
          "Drain Life (6)"
        ],
        "ovals": [
          15,
          10,
          20,
          20,
          25
        ],
        "limit": 0
      },
      {
        "name": "Portal of Despair[1]",
        "mType": "W",
        "irregular": 0,
        "unitType": [
          "W"
        ],
        "models": [
          1
        ],
        "values": [
          80
        ],
        "nerve": [
          "-/18"
        ],
        "att": [
          "-"
        ],
        "stats": [
          0,
          0,
          0,
          5
        ],
        "special": "Advanced Deployment, Base Size: Max 75x75mm, Height (4), Mindthirst, Portal of Despair, Stealthy",
        "options": [],
        "ovals": [],
        "limit": 1
      },
      {
        "name": "Horror",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          90
        ],
        "nerve": [
          "10/13"
        ],
        "att": [
          1
        ],
        "stats": [
          7,
          6,
          0,
          3
        ],
        "special": "Hero (Inf), Individual, Mindthirst, Stealthy, Surge (6)",
        "options": [
          "Bane Chant (2)",
          "Mind Fog (1)",
          "Weakness (2)",
          "Hex (2)",
          "Drain Life (6)",
          "Blinding Light (1)*",
          "Barkskin (1)*",
          "Veil of Shadows (3)*",
          "Guiding Light (2)*",
          "Teleport (3)*",
          "Critter's Call (8)*",
          "Spell Siphon (2)*",
          "Alchemist's Curse (10)*",
          "Blizzard (2)*",
          "Blood Boil*"
        ],
        "ovals": [
          15,
          10,
          20,
          20,
          25,
          10,
          10,
          15,
          15,
          15,
          20,
          25,
          30,
          30,
          30
        ],
        "limit": 0
      },
      {
        "name": "Shade",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          145
        ],
        "nerve": [
          "11/13"
        ],
        "att": [
          5
        ],
        "stats": [
          10,
          3,
          0,
          5
        ],
        "special": "Hero (Inf), Crushing Strength (1), Fly, Individual, Mindthirst, Stealthy",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Banshee",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          135
        ],
        "nerve": [
          "-/13"
        ],
        "att": [
          1
        ],
        "stats": [
          10,
          6,
          0,
          4
        ],
        "special": "Hero (Inf), Fly, Individual, Mindthirst, Stealthy, Wind Blast (7)",
        "options": [
          "Lightning Bolt (5)",
          "Mind Fog (1)",
          "Weakness (2)",
          "Hex (2)",
          "Drain Life (6)",
          "Blinding Light (1)*",
          "Barkskin (1)*",
          "Veil of Shadows (3)*",
          "Guiding Light (2)*",
          "Teleport (3)*",
          "Critter's Call (8)*",
          "Spell Siphon (2)*",
          "Alchemist's Curse (10)*",
          "Blizzard (2)*",
          "Blood Boil*"
        ],
        "ovals": [
          30,
          10,
          20,
          20,
          25,
          10,
          10,
          15,
          15,
          15,
          20,
          25,
          30,
          30,
          30
        ],
        "limit": 0
      },
      {
        "name": "Void Lurker",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          260
        ],
        "nerve": [
          "17/19"
        ],
        "att": [
          10
        ],
        "stats": [
          10,
          3,
          0,
          4
        ],
        "special": "Hero (Mon), Crushing Strength (2), Fly, Mindthirst, Regeneration (5+), Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Dread-fiend",
        "mType": "C",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          120
        ],
        "nerve": [
          "14/17"
        ],
        "att": [
          5
        ],
        "stats": [
          8,
          3,
          0,
          4
        ],
        "special": "Hero (LrgCav), Crushing Strength (2), Mindthirst, Nimble, Stealthy, Vicious",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "The Dream Hunter[1]",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          200
        ],
        "nerve": [
          "14/17"
        ],
        "att": [
          8
        ],
        "stats": [
          6,
          4,
          0,
          4
        ],
        "special": "Hero (Inf), Crushing Strength (1), Individual, Lifeleech (2), Mindthirst, Stealthy, The Dream Hunter",
        "options": [],
        "ovals": [],
        "limit": 1
      }
    ]
  },
  {
    "faction": "Orcs",
    "alignment": 2,
    "special": "Tribal Might",
    "units": [
      {
        "name": "Ax",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          10,
          20,
          40
        ],
        "values": [
          90,
          125,
          205
        ],
        "nerve": [
          "9/11",
          "13/15",
          "20/22"
        ],
        "att": [
          10,
          12,
          25
        ],
        "stats": [
          5,
          4,
          0,
          5
        ],
        "special": "Base size: 25x25mm, Crushing Strength (1)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Greatax",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          10,
          20,
          40
        ],
        "values": [
          100,
          145,
          240
        ],
        "nerve": [
          "10/12",
          "14/16",
          "21/23"
        ],
        "att": [
          10,
          12,
          25
        ],
        "stats": [
          5,
          3,
          0,
          4
        ],
        "special": "Base size: 25x25mm, Crushing Strength (2)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Morax",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          10,
          20
        ],
        "values": [
          140,
          200
        ],
        "nerve": [
          "10/12",
          "14/16"
        ],
        "att": [
          20,
          25
        ],
        "stats": [
          5,
          3,
          0,
          4
        ],
        "special": "Base size: 25x25mm, Crushing Strength (1), Fury",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Skulks",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T"
        ],
        "models": [
          10
        ],
        "values": [
          75
        ],
        "nerve": [
          "9/11"
        ],
        "att": [
          8
        ],
        "stats": [
          6,
          5,
          5,
          3
        ],
        "special": "Base size: 25x25mm, Crushing Strength (1), Bows (range 24&quot;), Vanguard",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Orclings",
        "mType": "LI",
        "irregular": 1,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          60,
          90
        ],
        "nerve": [
          "10/12",
          "13/15"
        ],
        "att": [
          12,
          24
        ],
        "stats": [
          5,
          5,
          0,
          3
        ],
        "special": "Height (0), Vicious, no Crushing Strength",
        "options": [
          "Wip's playmates (Requires Wip the Half-cast)"
        ],
        "ovals": [
          5
        ],
        "limit": 0
      },
      {
        "name": "Trolls",
        "mType": "LI",
        "irregular": 1,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          125,
          190
        ],
        "nerve": [
          "11/14",
          "14/17"
        ],
        "att": [
          9,
          18
        ],
        "stats": [
          6,
          4,
          0,
          5
        ],
        "special": "Crushing Strength(2), Regeneration (5+)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Gore Riders",
        "mType": "C",
        "irregular": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          5,
          10
        ],
        "values": [
          120,
          185
        ],
        "nerve": [
          "10/12",
          "13/15"
        ],
        "att": [
          8,
          16
        ],
        "stats": [
          8,
          3,
          0,
          5
        ],
        "special": "Crushing Strength (1), Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Gore Chariots",
        "mType": "LC",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          140,
          215
        ],
        "nerve": [
          "12/14",
          "15/17"
        ],
        "att": [
          9,
          18
        ],
        "stats": [
          8,
          3,
          0,
          5
        ],
        "special": "Crushing Strength (1), Base Size: 50x100mm, Thunderous Charge (2)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Fight Wagons",
        "mType": "LC",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          170,
          260
        ],
        "nerve": [
          "12/14",
          "15/17"
        ],
        "att": [
          15,
          30
        ],
        "stats": [
          7,
          3,
          0,
          5
        ],
        "special": "Crushing Strength (1), Fury, Base Size: 50x100mm",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Giant",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "M"
        ],
        "models": [
          1
        ],
        "values": [
          190
        ],
        "nerve": [
          "17/19"
        ],
        "att": [
          "D6+6"
        ],
        "stats": [
          7,
          4,
          0,
          5
        ],
        "special": "Brutal, Crushing Strength (3), Fury, Strider",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "War Drum",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "M"
        ],
        "models": [
          1
        ],
        "values": [
          80
        ],
        "nerve": [
          "-/11"
        ],
        "att": [
          3
        ],
        "stats": [
          5,
          4,
          0,
          4
        ],
        "special": "Crushing Strength (1), Height 1, Rallying! (2)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Krudger",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          130
        ],
        "nerve": [
          "12/14"
        ],
        "att": [
          5
        ],
        "stats": [
          5,
          3,
          0,
          5
        ],
        "special": "Base size: 25x25mm, Crushing Strength (2), Fury, Individual, Inspiring",
        "options": [
          "Mounted: Sp[8], Hero (Cav)",
          "Goblin Stabby Sneak",
          "Goblin Zappy Sneak"
        ],
        "ovals": [
          20,
          15,
          15
        ],
        "limit": 0
      },
      {
        "name": "Krudger on Slasher",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          235
        ],
        "nerve": [
          "16/18"
        ],
        "att": [
          10
        ],
        "stats": [
          7,
          3,
          0,
          5
        ],
        "special": "Crushing Strength (3), Fury, Inspiring",
        "options": [
          "Winged Slasher: Sp[10], Fly"
        ],
        "ovals": [
          50
        ],
        "limit": 0
      },
      {
        "name": "Krudger on Gore Chariot",
        "mType": "LC",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          185
        ],
        "nerve": [
          "14/16"
        ],
        "att": [
          7
        ],
        "stats": [
          8,
          3,
          0,
          5
        ],
        "special": "Base Size 50x100mm, Nimble, Crushing Strength (2), Fury, Inspiring, Thunderous Charge (2)",
        "options": [
          "Goblin Stabby Sneak",
          "Goblin Zappy Sneak"
        ],
        "ovals": [
          15,
          15
        ],
        "limit": 0
      },
      {
        "name": "Flagger",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          50
        ],
        "nerve": [
          "9/11"
        ],
        "att": [
          1
        ],
        "stats": [
          5,
          4,
          0,
          4
        ],
        "special": "Base size: 25x25mm, Crushing Strength (1), Individual, Inspiring",
        "options": [
          "Mounted: Sp[8], Hero (Cav)"
        ],
        "ovals": [
          50
        ],
        "limit": 0
      },
      {
        "name": "Godspeaker",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          75
        ],
        "nerve": [
          "10/12"
        ],
        "att": [
          2
        ],
        "stats": [
          5,
          3,
          0,
          4
        ],
        "special": "Base size: 25x25mm, Crushing Strength (1), Fireball (9), Individual, +1D6 on all spells per friendly Orc Horde/Legion within 6&quot; (excluding Orclings)",
        "options": [
          "Bane Chant (2)",
          "Heal (2)",
          "Mind Fog (1)",
          "Weakness (2)",
          "Hex (2)",
          "Drain Life (6)",
          "Blinding Light (1)*",
          "Barkskin (1)*",
          "Veil of Shadows (3)*",
          "Guiding Light (2)*",
          "Teleport (3)*",
          "Critter's Call (8)*",
          "Spell Siphon (2)*",
          "Alchemist's Curse (10)*",
          "Blizzard (2)*",
          "Blood Boil*",
          "Mounted: Sp[8], Hero (Cav)"
        ],
        "ovals": [
          15,
          10,
          10,
          20,
          20,
          25,
          10,
          10,
          15,
          15,
          15,
          20,
          25,
          30,
          30,
          30,
          10
        ],
        "limit": 0
      },
      {
        "name": "Troll Bruiser",
        "mType": "LI",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          125
        ],
        "nerve": [
          "12/15"
        ],
        "att": [
          5
        ],
        "stats": [
          6,
          3,
          0,
          5
        ],
        "special": "Crushing Strength (3), Inspiring (Trolls Only), Nimble, Regeneration (5+)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Gakamak",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          210
        ],
        "nerve": [
          "13/15"
        ],
        "att": [
          7
        ],
        "stats": [
          5,
          2,
          0,
          5,
          7
        ],
        "special": "Base size: 25x25mm, Crushing Strength (3), Fury, Individual, Very Inspiring, Vicious",
        "options": [
          "Mounted: Sp[8], Hero (Cav)"
        ],
        "ovals": [
          30
        ],
        "limit": 1
      },
      {
        "name": "Wip the Half-cast",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          90
        ],
        "nerve": [
          "11/13"
        ],
        "att": [
          1
        ],
        "stats": [
          6,
          4,
          0,
          4
        ],
        "special": "Base size: 25x25mm, Elite, Heal (3), Individual, Inspiring (Orclings Only), Lightning Bolt (3), no Crushing Strength",
        "options": [],
        "ovals": [],
        "limit": 1
      }
    ]
  },
  {
    "faction": "Ratkin",
    "alignment": 2,
    "special": "Pack Mentality",
    "units": [
      {
        "name": "Warriors",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          20,
          40
        ],
        "values": [
          90,
          155
        ],
        "nerve": [
          "12/14",
          "19/21"
        ],
        "att": [
          12,
          25
        ],
        "stats": [
          6,
          5,
          0,
          4
        ],
        "special": "",
        "options": [
          "Horde: Rallying (1)"
        ],
        "ovals": [
          0
        ],
        "limit": 0
      },
      {
        "name": "Tunnel Slaves",
        "mType": "I",
        "irregular": 1,
        "unitType": [
          "R",
          "H",
          "L"
        ],
        "models": [
          20,
          40,
          60
        ],
        "values": [
          60,
          100,
          145
        ],
        "nerve": [
          "12/14",
          "19/21",
          "25/27"
        ],
        "att": [
          12,
          25,
          30
        ],
        "stats": [
          6,
          5,
          0,
          2
        ],
        "special": "Yellow-Bellied",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Spear Warriors",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          20,
          40
        ],
        "values": [
          110,
          185
        ],
        "nerve": [
          "12/14",
          "19/21"
        ],
        "att": [
          15,
          30
        ],
        "stats": [
          6,
          5,
          0,
          4
        ],
        "special": "Phalanx",
        "options": [
          "Horde: Rallying (1)"
        ],
        "ovals": [
          0
        ],
        "limit": 0
      },
      {
        "name": "Blight",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          20,
          40
        ],
        "values": [
          120,
          205
        ],
        "nerve": [
          "-/14",
          "-/21"
        ],
        "att": [
          15,
          30
        ],
        "stats": [
          6,
          4,
          0,
          3
        ],
        "special": "Ensnare, Stealthy",
        "options": [
          "Horde: Rallying (1)"
        ],
        "ovals": [
          0
        ],
        "limit": 0
      },
      {
        "name": "Shock Troops",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          10,
          20,
          40
        ],
        "values": [
          95,
          135,
          230
        ],
        "nerve": [
          "9/11",
          "13/15",
          "20/22"
        ],
        "att": [
          10,
          12,
          25
        ],
        "stats": [
          6,
          4,
          0,
          4
        ],
        "special": "Crushing Strength (1), Elite, Vicious",
        "options": [
          "Horde: Rallying (1)"
        ],
        "ovals": [
          0
        ],
        "limit": 0
      },
      {
        "name": "Clawshots",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T"
        ],
        "models": [
          5
        ],
        "values": [
          90
        ],
        "nerve": [
          "8/10"
        ],
        "att": [
          5
        ],
        "stats": [
          6,
          5,
          4,
          4
        ],
        "special": "Base Size: 25x50mm, Long Rifles (range 36&quot;), Piercing (2), Reload!",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Scurriers",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T"
        ],
        "models": [
          10
        ],
        "values": [
          110
        ],
        "nerve": [
          "9/11"
        ],
        "att": [
          8
        ],
        "stats": [
          6,
          5,
          4,
          3
        ],
        "special": "Nimble, Throwing Weapons (range 12&quot;), Vicious",
        "options": [
          "Exchange Throwing Weapons (range 12&quot;) for Light Crossbows (range 24&quot;) (treat as Bows (range 24&quot;))"
        ],
        "ovals": [
          20
        ],
        "limit": 0
      },
      {
        "name": "Vermintide",
        "mType": "LI",
        "irregular": 1,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          60,
          90
        ],
        "nerve": [
          "9/11",
          "12/14"
        ],
        "att": [
          9,
          18
        ],
        "stats": [
          6,
          5,
          0,
          3
        ],
        "special": "Height 0, Nimble, Vicious",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Hackpaws",
        "mType": "C",
        "irregular": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          5,
          10
        ],
        "values": [
          95,
          145
        ],
        "nerve": [
          "10/12",
          "13/15"
        ],
        "att": [
          8,
          16
        ],
        "stats": [
          9,
          4,
          0,
          3
        ],
        "special": "Nimble, Thunderous Charge (1), Vicious",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Tunnel Runners",
        "mType": "LC",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          135,
          215
        ],
        "nerve": [
          "11/13",
          "14/16"
        ],
        "att": [
          12,
          24
        ],
        "stats": [
          8,
          4,
          0,
          5
        ],
        "special": "Crushing Strength (1), Thunderous Charge (1)",
        "options": [
          "Horde: Rallying (1)"
        ],
        "ovals": [
          0
        ],
        "limit": 0
      },
      {
        "name": "Artillery",
        "mType": "W",
        "irregular": 0,
        "unitType": [
          "W"
        ],
        "models": [
          1
        ],
        "values": [
          90
        ],
        "nerve": [
          "8/10"
        ],
        "att": [
          2
        ],
        "stats": [
          6,
          0,
          5,
          4
        ],
        "special": "Blast (D3+1), Indirect, Piercing (1), Reload!, Vicious",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Brutes",
        "mType": "LI",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          115,
          185
        ],
        "nerve": [
          "10/13",
          "13/16"
        ],
        "att": [
          9,
          18
        ],
        "stats": [
          6,
          4,
          0,
          4
        ],
        "special": "Brutal, Crushing Strength (2), Fury, Regeneration (5+)",
        "options": [
          "Horde: Rallying (1)"
        ],
        "ovals": [
          0
        ],
        "limit": 0
      },
      {
        "name": "Nightmares",
        "mType": "LI",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          150,
          235
        ],
        "nerve": [
          "11/13",
          "14/16"
        ],
        "att": [
          9,
          18
        ],
        "stats": [
          6,
          4,
          0,
          5
        ],
        "special": "Breath Attack (Att), Crushing Strength (1), Vicious (Melee only)",
        "options": [
          "Horde: Rallying (1)"
        ],
        "ovals": [
          0
        ],
        "limit": 0
      },
      {
        "name": "Weapon Team",
        "mType": "W",
        "irregular": 0,
        "unitType": [
          "W"
        ],
        "models": [
          1
        ],
        "values": [
          60
        ],
        "nerve": [
          "8/10"
        ],
        "att": [
          10
        ],
        "stats": [
          6,
          0,
          0,
          4
        ],
        "special": "Breath Attack (Att), Nimble",
        "options": [
          "Storm of Lead (gain Piercing (1))"
        ],
        "ovals": [
          20
        ],
        "limit": 0
      },
      {
        "name": "Shredder",
        "mType": "W",
        "irregular": 0,
        "unitType": [
          "W"
        ],
        "models": [
          1
        ],
        "values": [
          90
        ],
        "nerve": [
          "8/10"
        ],
        "att": [
          3
        ],
        "stats": [
          6,
          0,
          5,
          4
        ],
        "special": "Blast (D3), Piercing (2), Reload!",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Death Engine",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "M"
        ],
        "models": [
          1
        ],
        "values": [
          170
        ],
        "nerve": [
          "-/16"
        ],
        "att": [
          "1D6+7"
        ],
        "stats": [
          6,
          4,
          0,
          5
        ],
        "special": "Base Size: 50x100mm, Crushing Strength (1), Rallying! (1), Thunderous Charge (1)",
        "options": [
          "Bloody Carnage: Crushing Strength increased to (2) and gains Vicious",
          "Vile Sorcery: Firebolt (range 18&quot;) [Ra 4+, Piercing (2)], Defence reduced to 4+"
        ],
        "ovals": [
          25,
          40
        ],
        "limit": 0
      },
      {
        "name": "Mutant Rat-fiend",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "M"
        ],
        "models": [
          1
        ],
        "values": [
          200
        ],
        "nerve": [
          "-/17"
        ],
        "att": [
          10
        ],
        "stats": [
          7,
          4,
          0,
          4
        ],
        "special": "Crushing Strength (2), Regeneration (5+), Strider, Thunderous Charge (1), Vicious",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Blight Lord",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          95
        ],
        "nerve": [
          "-/12"
        ],
        "att": [
          4
        ],
        "stats": [
          6,
          4,
          0,
          4
        ],
        "special": "Crushing Strength (2), Ensnare, Individual, inspiring (Blight only), Stealthy",
        "options": [
          "Bane-chant (3)",
          "Mind Fog (1)",
          "Weakness (2)",
          "Hex (2)",
          "Drain Life (6)",
          "Blinding Light (1)*",
          "Barkskin (1)*",
          "Veil of Shadows (3)*",
          "Guiding Light (2)*",
          "Teleport (3)*",
          "Critter's Call (8)*",
          "Spell Siphon (2)*",
          "Alchemist's Curse (10)*",
          "Blizzard (2)*",
          "Blood Boil*"
        ],
        "ovals": [
          20,
          10,
          20,
          20,
          25,
          10,
          10,
          15,
          15,
          15,
          20,
          25,
          30,
          30,
          30
        ],
        "limit": 0
      },
      {
        "name": "War Chief",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          110
        ],
        "nerve": [
          "11/13"
        ],
        "att": [
          5
        ],
        "stats": [
          6,
          3,
          0,
          5
        ],
        "special": "Crushing Strength (1), Individual, Inspiring",
        "options": [
          "Exchange shield for two-handed weapons (lower Defence to 4+, gain Crushing Strength (2)",
          "Mount on fleabag (increase Speed to 9, change to Hero (Cav))"
        ],
        "ovals": [
          0,
          20
        ],
        "limit": 0
      },
      {
        "name": "Warlock",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          90
        ],
        "nerve": [
          "9/11"
        ],
        "att": [
          1
        ],
        "stats": [
          6,
          5,
          0,
          4
        ],
        "special": "Individual, Lightning Bolt (5)",
        "options": [
          "Wind Blast (5)",
          "Bane-chant (3)",
          "Heal (3)",
          "Mind Fog (1)",
          "Weakness (2)",
          "Hex (2)",
          "Drain Life (6)",
          "Blinding Light (1)*",
          "Barkskin (1)*",
          "Veil of Shadows (3)*",
          "Guiding Light (2)*",
          "Teleport (3)*",
          "Critter's Call (8)*",
          "Spell Siphon (2)*",
          "Alchemist's Curse (10)*",
          "Blizzard (2)*",
          "Blood Boil*",
          "Mount on fleabag (increase Speed to 9, change to Hero (Cav))"
        ],
        "ovals": [
          15,
          20,
          15,
          10,
          20,
          20,
          25,
          10,
          10,
          15,
          15,
          15,
          20,
          25,
          30,
          30,
          30,
          10
        ],
        "limit": 0
      },
      {
        "name": "Enforcer",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          45
        ],
        "nerve": [
          "9/11"
        ],
        "att": [
          3
        ],
        "stats": [
          6,
          4,
          0,
          4
        ],
        "special": "Crushing Strength (2), Individual, Rallying (1)",
        "options": [
          "Mount on fleabag (increase Speed to 9, change to Hero (Cav))"
        ],
        "ovals": [
          15
        ],
        "limit": 0
      },
      {
        "name": "Swarm-crier",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          45
        ],
        "nerve": [
          "8/10"
        ],
        "att": [
          1
        ],
        "stats": [
          6,
          5,
          0,
          4
        ],
        "special": "Individual, Inspiring",
        "options": [
          "Mount on fleabag (increase Speed to 9, change to Hero (Cav))"
        ],
        "ovals": [
          15
        ],
        "limit": 0
      },
      {
        "name": "Assassin",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          100
        ],
        "nerve": [
          "10/12"
        ],
        "att": [
          4
        ],
        "stats": [
          6,
          3,
          3,
          4
        ],
        "special": "Crushing Strength (1), Individual, Piercing (1), Stealthy, Throwing Weapons (range 12&quot;), Vanguard, Vicious",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Night Terror",
        "mType": "LI",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          115
        ],
        "nerve": [
          "12/14"
        ],
        "att": [
          5
        ],
        "stats": [
          9,
          3,
          0,
          5
        ],
        "special": "Crushing Strength (2), Nimble",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Demonspawn[1]",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          290
        ],
        "nerve": [
          "16/18"
        ],
        "att": [
          13
        ],
        "stats": [
          6,
          3,
          0,
          5
        ],
        "special": "Crushing Strength (3), Inspiring, Lighting Bolt (5), Rallying! (2)",
        "options": [
          "Wings (Increase Speed to 10 and gain Fly)"
        ],
        "ovals": [
          50
        ],
        "limit": 1
      }
    ]
  },
  {
    "faction": "Undead",
    "alignment": 2,
    "special": "Evil Dead",
    "units": [
      {
        "name": "Ghouls",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          10,
          20,
          40
        ],
        "values": [
          65,
          90,
          150
        ],
        "nerve": [
          "8/10",
          "12/14",
          "19/21"
        ],
        "att": [
          10,
          12,
          25
        ],
        "stats": [
          6,
          4,
          0,
          3
        ],
        "special": "Lifeleech (1)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Mummies",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          10,
          20
        ],
        "values": [
          120,
          170
        ],
        "nerve": [
          "-/14",
          "-/18"
        ],
        "att": [
          10,
          12
        ],
        "stats": [
          5,
          4,
          0,
          5
        ],
        "special": "Lifeleech (1), Crushing Strength (2), Regeneration (5+), Shambling",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Revenants",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          10,
          20,
          40
        ],
        "values": [
          85,
          120,
          200
        ],
        "nerve": [
          "-/13",
          "-/17",
          "-/24"
        ],
        "att": [
          10,
          12,
          25
        ],
        "stats": [
          5,
          4,
          0,
          5
        ],
        "special": "Lifeleech (1), Shambling",
        "options": [
          "2H Weapons: De[4+], Crushing Strength (1)",
          "Undead Giant Rats (Dogs?)"
        ],
        "ovals": [
          0,
          10
        ],
        "limit": 0
      },
      {
        "name": "Skeleton Archers",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          10,
          20,
          40
        ],
        "values": [
          75,
          100,
          165
        ],
        "nerve": [
          "-/12",
          "-/16",
          "-/23"
        ],
        "att": [
          8,
          10,
          20
        ],
        "stats": [
          5,
          6,
          5,
          3
        ],
        "special": "Lifeleech (1), Bows (range 24&quot;), Shambling",
        "options": [
          "Undead Giant Rats (Dogs?)"
        ],
        "ovals": [
          10
        ],
        "limit": 0
      },
      {
        "name": "Skeleton Spearmen",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          10,
          20,
          40
        ],
        "values": [
          75,
          105,
          175
        ],
        "nerve": [
          "-/12",
          "-/16",
          "-/23"
        ],
        "att": [
          10,
          15,
          30
        ],
        "stats": [
          5,
          5,
          0,
          4
        ],
        "special": "Lifeleech (1), Phalanx, Shambling",
        "options": [
          "Undead Giant Rats (Dogs?)"
        ],
        "ovals": [
          10
        ],
        "limit": 0
      },
      {
        "name": "Skeleton Warriors",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          10,
          20,
          40
        ],
        "values": [
          65,
          90,
          150
        ],
        "nerve": [
          "-/12",
          "-/16",
          "-/23"
        ],
        "att": [
          10,
          12,
          25
        ],
        "stats": [
          5,
          5,
          0,
          4
        ],
        "special": "Lifeleech (1), Shambling",
        "options": [
          "Undead Giant Rats (Dogs?)"
        ],
        "ovals": [
          10
        ],
        "limit": 0
      },
      {
        "name": "Soul Reaver Infantry",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          10,
          20
        ],
        "values": [
          180,
          260
        ],
        "nerve": [
          "11/13",
          "15/17"
        ],
        "att": [
          20,
          25
        ],
        "stats": [
          6,
          3,
          0,
          5
        ],
        "special": "Crushing Strength (2), Lifeleech (2)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Wraiths",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          10,
          20
        ],
        "values": [
          140,
          200
        ],
        "nerve": [
          "-/12",
          "-/16"
        ],
        "att": [
          10,
          12
        ],
        "stats": [
          10,
          4,
          0,
          6
        ],
        "special": "Lifeleech (1), Crushing Strength (1), Fly, Shambling",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Zombies",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "R",
          "H",
          "L"
        ],
        "models": [
          20,
          40,
          60
        ],
        "values": [
          80,
          130,
          190
        ],
        "nerve": [
          "-/15",
          "-/22",
          "-/28"
        ],
        "att": [
          15,
          30,
          40
        ],
        "stats": [
          5,
          5,
          0,
          3
        ],
        "special": "Lifeleech (1), Shambling",
        "options": [
          "Undead Giant Rats (Dogs?)"
        ],
        "ovals": [
          10
        ],
        "limit": 0
      },
      {
        "name": "Werewolves",
        "mType": "LI",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          160,
          245
        ],
        "nerve": [
          "12/14",
          "15/17"
        ],
        "att": [
          9,
          18
        ],
        "stats": [
          9,
          3,
          0,
          5
        ],
        "special": "Lifeleech (1), Crushing Strength (1), Nimble",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Wights",
        "mType": "LI",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          155,
          235
        ],
        "nerve": [
          "-/14",
          "-/17"
        ],
        "att": [
          9,
          18
        ],
        "stats": [
          6,
          4,
          0,
          5
        ],
        "special": "Lifeleech (1), Brutal, Crushing Strength (3), Shambling",
        "options": [],
        "ovals": [
          0
        ],
        "limit": 0
      },
      {
        "name": "Zombie Trolls",
        "mType": "LI",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          115,
          175
        ],
        "nerve": [
          "-/15",
          "-/18"
        ],
        "att": [
          9,
          18
        ],
        "stats": [
          6,
          4,
          0,
          4
        ],
        "special": "Lifeleech (1), Crushing Strength, Shambling",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Revenant Cavalry",
        "mType": "C",
        "irregular": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          5,
          10
        ],
        "values": [
          110,
          170
        ],
        "nerve": [
          "-/14",
          "-/17"
        ],
        "att": [
          8,
          16
        ],
        "stats": [
          8,
          4,
          0,
          5
        ],
        "special": "Lifeleech (1), Shambling, Thunderous Charge (2)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Soul Reaver Cavalry",
        "mType": "C",
        "irregular": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          5,
          10
        ],
        "values": [
          195,
          300
        ],
        "nerve": [
          "12/14",
          "15/17"
        ],
        "att": [
          10,
          20
        ],
        "stats": [
          8,
          3,
          0,
          6
        ],
        "special": "Crushing Strength (1), Lifeleech (2), Thunderous Charge (2)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Balefire Catapult",
        "mType": "w",
        "irregular": 0,
        "unitType": [
          "W"
        ],
        "models": [
          1
        ],
        "values": [
          100
        ],
        "nerve": [
          "-/11"
        ],
        "att": [
          1
        ],
        "stats": [
          5,
          0,
          5,
          4
        ],
        "special": "Lifeleech (1), Blast (D6+2), Indirect Fire, Piercing (2), Reload!, Shambling, Vicious",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Revenant King",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          120
        ],
        "nerve": [
          "14/16"
        ],
        "att": [
          9
        ],
        "stats": [
          7,
          4,
          0,
          5
        ],
        "special": "Lifeleech (1), Crushing Strength (1), Individual, Inspiring, Surge (6)",
        "options": [
          "Mind Fog (1)",
          "Weakness (2)",
          "Hex (2)",
          "Drain Life (6)",
          "Blinding Light (1)*",
          "Barkskin (1)*",
          "Veil of Shadows (3)*",
          "Guiding Light (2)*",
          "Teleport (3)*",
          "Critter's Call (8)*",
          "Spell Siphon (2)*",
          "Alchemist's Curse (10)*",
          "Blizzard (2)*",
          "Blood Boil*",
          "Mounted: Sp[8], Hero (Cav)"
        ],
        "ovals": [
          10,
          20,
          20,
          25,
          10,
          10,
          15,
          15,
          15,
          20,
          25,
          30,
          30,
          30,
          10
        ],
        "limit": 0
      },
      {
        "name": "Revenant King on Undead Wyrm",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          190
        ],
        "nerve": [
          "18/20"
        ],
        "att": [
          9
        ],
        "stats": [
          7,
          4,
          0,
          5
        ],
        "special": "Lifeleech (1), Crushing Strength (3), Surge (6), Inspiring",
        "options": [
          "Mind Fog (1)",
          "Weakness (2)",
          "Hex (2)",
          "Drain Life (6)",
          "Blinding Light (1)*",
          "Barkskin (1)*",
          "Veil of Shadows (3)*",
          "Guiding Light (2)*",
          "Teleport (3)*",
          "Critter's Call (8)*",
          "Spell Siphon (2)*",
          "Alchemist's Curse (10)*",
          "Blizzard (2)*",
          "Blood Boil*",
          "Winged Wyrm: Sp[10], Fly"
        ],
        "ovals": [
          10,
          20,
          20,
          25,
          10,
          10,
          15,
          15,
          15,
          20,
          25,
          30,
          30,
          30,
          10
        ],
        "limit": 0
      },
      {
        "name": "Undead Army Standard Bearer",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          50
        ],
        "nerve": [
          "-/13"
        ],
        "att": [
          1
        ],
        "stats": [
          5,
          5,
          0,
          4
        ],
        "special": "Lifeleech (1), Individual, Inspiring, Shambling",
        "options": [
          "Mounted: Sp[8], Hero (Cav)"
        ],
        "ovals": [
          15
        ],
        "limit": 0
      },
      {
        "name": "Cursed Pharaoh",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          145
        ],
        "nerve": [
          "15/17"
        ],
        "att": [
          5
        ],
        "stats": [
          5,
          3,
          0,
          5
        ],
        "special": "Lifeleech (1), Crushing Strength (2), Individual, Inspiring, Regeneration (5+), Surge (6)",
        "options": [
          "Mind Fog (1)",
          "Weakness (2)",
          "Hex (2)",
          "Drain Life (6)",
          "Blinding Light (1)*",
          "Barkskin (1)*",
          "Veil of Shadows (3)*",
          "Guiding Light (2)*",
          "Teleport (3)*",
          "Critter's Call (8)*",
          "Spell Siphon (2)*",
          "Alchemist's Curse (10)*",
          "Blizzard (2)*",
          "Blood Boil*"
        ],
        "ovals": [
          10,
          20,
          20,
          25,
          10,
          10,
          15,
          15,
          15,
          20,
          25,
          30,
          30,
          30
        ],
        "limit": 0
      },
      {
        "name": "Lykanis",
        "mType": "LI",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          145
        ],
        "nerve": [
          "13/15"
        ],
        "att": [
          5
        ],
        "stats": [
          9,
          3,
          0,
          5
        ],
        "special": "Lifeleech (1), Crushing Strength (2), Inspiring (Werewolves only), Nimble",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Vampire Lord",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          220
        ],
        "nerve": [
          "14/16"
        ],
        "att": [
          8
        ],
        "stats": [
          7,
          3,
          0,
          5
        ],
        "special": "Crushing Strength (2), Individual, Inspiring, Lifeleech (2), Surge (3)",
        "options": [
          "Heal (2)",
          "Lightning Bolt (3)",
          "Mind Fog (1)",
          "Weakness (2)",
          "Hex (2)",
          "Drain Life (6)",
          "Blinding Light (1)*",
          "Barkskin (1)*",
          "Veil of Shadows (3)*",
          "Guiding Light (2)*",
          "Teleport (3)*",
          "Critter's Call (8)*",
          "Spell Siphon (2)*",
          "Alchemist's Curse (10)*",
          "Blizzard (2)*",
          "Blood Boil*",
          "Mounted: Sp[9], Hero (Cav)"
        ],
        "ovals": [
          10,
          20,
          10,
          20,
          20,
          25,
          10,
          10,
          15,
          15,
          15,
          20,
          25,
          30,
          30,
          30,
          10
        ],
        "limit": 0
      },
      {
        "name": "Vampire on Undead Pegasus",
        "mType": "LC",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          245
        ],
        "nerve": [
          "14/16"
        ],
        "att": [
          8
        ],
        "stats": [
          10,
          3,
          0,
          5
        ],
        "special": "Crushing Strength (2), Fly, Inspiring, Lifeleech (2), Surge (3)",
        "options": [
          "Heal (2)",
          "Lightning Bolt (3)",
          "Mind Fog (1)",
          "Weakness (2)",
          "Hex (2)",
          "Drain Life (6)",
          "Blinding Light (1)*",
          "Barkskin (1)*",
          "Veil of Shadows (3)*",
          "Guiding Light (2)*",
          "Teleport (3)*",
          "Critter's Call (8)*",
          "Spell Siphon (2)*",
          "Alchemist's Curse (10)*",
          "Blizzard (2)*",
          "Blood Boil*"
        ],
        "ovals": [
          10,
          20,
          10,
          20,
          20,
          25,
          10,
          10,
          15,
          15,
          15,
          20,
          25,
          30,
          30,
          30
        ],
        "limit": 0
      },
      {
        "name": "Vampire on Undead Dragon",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          245
        ],
        "nerve": [
          "17/19"
        ],
        "att": [
          10
        ],
        "stats": [
          10,
          3,
          0,
          5
        ],
        "special": "Breath Attack (10), Crushing Strength (3), Fly, Inspiring, Lifeleech (2), Surge (3)",
        "options": [
          "Heal (2)",
          "Lightning Bolt (3)",
          "Mind Fog (1)",
          "Weakness (2)",
          "Hex (2)",
          "Drain Life (6)",
          "Blinding Light (1)*",
          "Barkskin (1)*",
          "Veil of Shadows (3)*",
          "Guiding Light (2)*",
          "Teleport (3)*",
          "Critter's Call (8)*",
          "Spell Siphon (2)*",
          "Alchemist's Curse (10)*",
          "Blizzard (2)*",
          "Blood Boil*"
        ],
        "ovals": [
          10,
          20,
          10,
          20,
          20,
          25,
          10,
          10,
          15,
          15,
          15,
          20,
          25,
          30,
          30,
          30
        ],
        "limit": 0
      },
      {
        "name": "Liche King",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          145
        ],
        "nerve": [
          "14/16"
        ],
        "att": [
          1
        ],
        "stats": [
          5,
          5,
          0,
          4
        ],
        "special": "Lifeleech (1), Individual, Inspiring, Regeneration (5+), Surge (12)",
        "options": [
          "Heal (6) (Replace Surge)",
          "Heal (6)",
          "Lightning Bolt (5)",
          "Bane Chant (3)",
          "Mind Fog (1)",
          "Weakness (2)",
          "Hex (2)",
          "Drain Life (6)",
          "Blinding Light (1)*",
          "Barkskin (1)*",
          "Veil of Shadows (3)*",
          "Guiding Light (2)*",
          "Teleport (3)*",
          "Critter's Call (8)*",
          "Spell Siphon (2)*",
          "Alchemist's Curse (10)*",
          "Blizzard (2)*",
          "Blood Boil*",
          "Mounted: Sp[8], Hero (Cav)"
        ],
        "ovals": [
          0,
          20,
          35,
          20,
          10,
          20,
          20,
          25,
          10,
          10,
          15,
          15,
          15,
          20,
          25,
          30,
          30,
          30,
          10
        ],
        "limit": 0
      },
      {
        "name": "Necromancer",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          85
        ],
        "nerve": [
          "10/12"
        ],
        "att": [
          1
        ],
        "stats": [
          5,
          5,
          0,
          4
        ],
        "special": "Lifeleech (1), Individual, Surge (8)",
        "options": [
          "Heal (3) (Replace Surge)",
          "Heal (3)",
          "Lightning Bolt (3)",
          "Bane Chant (2)",
          "Mind Fog (1)",
          "Weakness (2)",
          "Hex (2)",
          "Drain Life (6)",
          "Blinding Light (1)*",
          "Barkskin (1)*",
          "Veil of Shadows (3)*",
          "Guiding Light (2)*",
          "Teleport (3)*",
          "Critter's Call (8)*",
          "Spell Siphon (2)*",
          "Alchemist's Curse (10)*",
          "Blizzard (2)*",
          "Blood Boil*",
          "Mounted: Sp[8], Hero (Cav)"
        ],
        "ovals": [
          0,
          15,
          20,
          15,
          10,
          20,
          20,
          25,
          10,
          10,
          15,
          15,
          15,
          20,
          25,
          30,
          30,
          30,
          10
        ],
        "limit": 0
      },
      {
        "name": "Lady Ilona",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          280
        ],
        "nerve": [
          "14/16"
        ],
        "att": [
          8
        ],
        "stats": [
          8,
          3,
          0,
          6
        ],
        "special": "Crushing Strength (3), Heal (3), Individual, Inspiring, Lifeleech (2), Lightning Bolt (3), Surge (3), The Promise of Love Eternal",
        "options": [],
        "ovals": [],
        "limit": 1
      },
      {
        "name": "Mhorgoth the Faceless",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          270
        ],
        "nerve": [
          "17/19"
        ],
        "att": [
          1
        ],
        "stats": [
          10,
          4,
          0,
          6
        ],
        "special": "Lifeleech (1), Bane Chant (4), Fireball (15), Fly, Heal (6), Individual, Lightning Bolt (6), Regeneration (5+), Surge (12), Very Inspiring",
        "options": [
          "Touch of Darkness (apply Regeneration (5+) to one non-allied, non-hero, Shambling unit)"
        ],
        "ovals": [
          25
        ],
        "limit": 1
      }
    ]
  },
  {
    "faction": "Varangur",
    "alignment": 2,
    "special": "Fanatical Devotion",
    "units": [
      {
        "name": "Warband",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          10,
          20,
          40
        ],
        "values": [
          75,
          110,
          180
        ],
        "nerve": [
          "10/12",
          "14/16",
          "21/23"
        ],
        "att": [
          10,
          12,
          25
        ],
        "stats": [
          5,
          4,
          0,
          4
        ],
        "special": "",
        "options": [
          "Exchange shields for 2H weapons, De 3+, CS (1)"
        ],
        "ovals": [
          0
        ],
        "limit": 0
      },
      {
        "name": "Thralls*",
        "mType": "I",
        "irregular": 1,
        "unitType": [
          "R",
          "H",
          "L"
        ],
        "models": [
          20,
          40,
          60
        ],
        "values": [
          75,
          125,
          180
        ],
        "nerve": [
          "12/15",
          "19/22",
          "25/28"
        ],
        "att": [
          12,
          25,
          30
        ],
        "stats": [
          5,
          5,
          0,
          3
        ],
        "special": "",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Night Raiders",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T"
        ],
        "models": [
          10
        ],
        "values": [
          125
        ],
        "nerve": [
          "11/13"
        ],
        "att": [
          8
        ],
        "stats": [
          5,
          4,
          4,
          3
        ],
        "special": "Bows (range 24&quot;), Pathfinder, Stealthy, Vanguard",
        "options": [
          "Exchange Bows for Throwing Weapons (Axes) (gain Piercing (1))"
        ],
        "ovals": [
          15
        ],
        "limit": 0
      },
      {
        "name": "Bloodsworn",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R",
          "H"
        ],
        "models": [
          10,
          20,
          40
        ],
        "values": [
          100,
          140,
          230
        ],
        "nerve": [
          "11/13",
          "15/17",
          "22/24"
        ],
        "att": [
          10,
          12,
          25
        ],
        "stats": [
          5,
          4,
          0,
          5
        ],
        "special": "Crushing Strength (1)",
        "options": [
          "Exchange shields for 2H weapons, De[4+], CS(2)",
          "Gift of Korgaan: Brand of the Warrior (gains Brutal)",
          "Gift of Korgaan: Guise of the Deceiver (gains Fury)",
          "Gift of Korgaan: Mask of the Reaper (gains Lifeleech (1))"
        ],
        "ovals": [
          0,
          10,
          10,
          10
        ],
        "limit": 0
      },
      {
        "name": "Sons of Korgaan",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          10,
          20
        ],
        "values": [
          155,
          220
        ],
        "nerve": [
          "12/14",
          "16/18"
        ],
        "att": [
          15,
          20
        ],
        "stats": [
          5,
          3,
          0,
          5
        ],
        "special": "Base Size: 25x25mm, Crushing Strength (2)",
        "options": [
          "Exchange shields for 2H weapons, De[4+], CS(3)",
          "Gift of Korgaan: Brand of the Warrior (gains Brutal)",
          "Gift of Korgaan: Guise of the Deceiver (gains Fury)",
          "Gift of Korgaan: Mask of the Reaper (gains Lifeleech (1))"
        ],
        "ovals": [
          0,
          10,
          10,
          10
        ],
        "limit": 0
      },
      {
        "name": "Reavers",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          10,
          20
        ],
        "values": [
          140,
          200
        ],
        "nerve": [
          "-/14",
          "-/18"
        ],
        "att": [
          20,
          25
        ],
        "stats": [
          6,
          4,
          0,
          3
        ],
        "special": "Thunderous Charge (2), Vicious",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Cave Trolls",
        "mType": "LI",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          135,
          205
        ],
        "nerve": [
          "12/15",
          "15/18"
        ],
        "att": [
          9,
          18
        ],
        "stats": [
          5,
          4,
          0,
          5
        ],
        "special": "Crushing Strength (3), Regeneration (5+)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "The Fallen",
        "mType": "LI",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          155,
          240
        ],
        "nerve": [
          "13/15",
          "16/18"
        ],
        "att": [
          9,
          18
        ],
        "stats": [
          8,
          3,
          0,
          5
        ],
        "special": "Crushing Strength (1), Height (1), Iron Resolve, Nimble",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Tundra Wolves",
        "mType": "C",
        "irregular": 0,
        "unitType": [
          "T"
        ],
        "models": [
          5
        ],
        "values": [
          110
        ],
        "nerve": [
          "11/13"
        ],
        "att": [
          10
        ],
        "stats": [
          9,
          4,
          0,
          4
        ],
        "special": "Height (1), Nimble, Thunderous Charge (1)",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Mounted Sons of Korgaan",
        "mType": "C",
        "irregular": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          5,
          10
        ],
        "values": [
          165,
          250
        ],
        "nerve": [
          "13/15",
          "16/18"
        ],
        "att": [
          10,
          20
        ],
        "stats": [
          8,
          3,
          0,
          5
        ],
        "special": "Crushing Strength (1), Thunderous Charge (2)",
        "options": [
          "Gift of Korgaan: Brand of the Warrior (gains Brutal)",
          "Gift of Korgaan: Guise of the Deceiver (gains Fury)",
          "Gift of Korgaan: Mask of the Reaper (gains Lifeleech (1))"
        ],
        "ovals": [
          10,
          10,
          10
        ],
        "limit": 0
      },
      {
        "name": "Horse Raiders",
        "mType": "C",
        "irregular": 0,
        "unitType": [
          "T",
          "R"
        ],
        "models": [
          5,
          10
        ],
        "values": [
          115,
          180
        ],
        "nerve": [
          "11/13",
          "14/16"
        ],
        "att": [
          7,
          14
        ],
        "stats": [
          8,
          4,
          5,
          4
        ],
        "special": "Nimble, Piercing (1), Throwing Weapons (Axes), Thunderous Charge (1)",
        "options": [
          "Exchange Throwing Weapons for Bows (lose Piercing (1))"
        ],
        "ovals": [
          0
        ],
        "limit": 0
      },
      {
        "name": "Direfang Riders",
        "mType": "LC",
        "irregular": 0,
        "unitType": [
          "R",
          "H"
        ],
        "models": [
          3,
          6
        ],
        "values": [
          165,
          250
        ],
        "nerve": [
          "13/15",
          "16/18"
        ],
        "att": [
          15,
          30
        ],
        "stats": [
          6,
          4,
          0,
          5
        ],
        "special": "Crushing Strength (2), Strider",
        "options": [
          "Gift of Korgaan: Brand of the Warrior (gains Brutal)",
          "Gift of Korgaan: Guise of the Deceiver (gains Fury)",
          "Gift of Korgaan: Mask of the Reaper (gains Lifeleech (1))"
        ],
        "ovals": [
          10,
          10,
          10
        ],
        "limit": 0
      },
      {
        "name": "Devourer",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "M"
        ],
        "models": [
          1
        ],
        "values": [
          175
        ],
        "nerve": [
          "16/18"
        ],
        "att": [
          10
        ],
        "stats": [
          7,
          4,
          0,
          4
        ],
        "special": "Crushing Strength (1), Nimble, Pathfinder, Stealthy, Strider, Thunderous Charge (1)",
        "options": [
          "Noxious Mist (gain Breath (10) and Vicious on ranged attacks)"
        ],
        "ovals": [
          15
        ],
        "limit": 0
      },
      {
        "name": "Cavern Dweller",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "M"
        ],
        "models": [
          1
        ],
        "values": [
          205
        ],
        "nerve": [
          "16/18"
        ],
        "att": [
          "D6+6"
        ],
        "stats": [
          6,
          3,
          0,
          5
        ],
        "special": "Crushing Strength (3), Regeneration (5+), Strider",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Jabberwock",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "M"
        ],
        "models": [
          1
        ],
        "values": [
          140
        ],
        "nerve": [
          "13/15"
        ],
        "att": [
          8
        ],
        "stats": [
          7,
          4,
          0,
          5
        ],
        "special": "Brutal, Crushing Strength (2), Feeding Frenzy",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Magus Conclave",
        "mType": "W",
        "irregular": 0,
        "unitType": [
          "W"
        ],
        "models": [
          1
        ],
        "values": [
          100
        ],
        "nerve": [
          "11/13"
        ],
        "att": [
          2
        ],
        "stats": [
          5,
          0,
          4,
          3
        ],
        "special": "Blast (D3), Individual, Piercing (2), range 36&quot;",
        "options": [
          "Famulus (gains Elite)"
        ],
        "ovals": [
          10
        ],
        "limit": 0
      },
      {
        "name": "Cursed Son",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          130
        ],
        "nerve": [
          "-/13"
        ],
        "att": [
          7
        ],
        "stats": [
          6,
          3,
          0,
          4
        ],
        "special": "Hero (Inf), Base Size: 25x25mm, Crushing Strength (2), Individual, Vicious",
        "options": [],
        "ovals": [],
        "limit": 0
      },
      {
        "name": "Magus",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          85
        ],
        "nerve": [
          "11/13"
        ],
        "att": [
          1
        ],
        "stats": [
          5,
          5,
          0,
          5
        ],
        "special": "Hero (Inf), Individual, Lightning Bolt (4)",
        "options": [
          "Fireball (12)",
          "Bane Chant (2)",
          "Mind Fog (1)",
          "Weakness (2)",
          "Hex (2)",
          "Drain Life (6)",
          "Blinding Light (1)*",
          "Barkskin (1)*",
          "Veil of Shadows (3)*",
          "Guiding Light (2)*",
          "Teleport (3)*",
          "Critter's Call (8)*",
          "Spell Siphon (2)*",
          "Alchemist's Curse (10)*",
          "Blizzard (2)*",
          "Blood Boil*",
          "Famulus (gains Elite when casting a spell)",
          "Mount (increase Speed to 8, change to Hero (Cav))"
        ],
        "ovals": [
          25,
          15,
          10,
          20,
          20,
          25,
          10,
          10,
          15,
          15,
          15,
          20,
          25,
          30,
          30,
          30,
          15,
          10
        ],
        "limit": 0
      },
      {
        "name": "Chieftan",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          160
        ],
        "nerve": [
          "14/16"
        ],
        "att": [
          5
        ],
        "stats": [
          5,
          3,
          0,
          5
        ],
        "special": "Hero (Inf), Base Size: 25x25mm, Crushing Strength (2), Elite, Individual, Inspiring",
        "options": [
          "Mount (increase Speed to 8, change to Hero (Cav))",
          "Gift of Korgaan: Brand of the Warrior (gains Brutal)",
          "Gift of Korgaan: Guise of the Deceiver (gains Fury)",
          "Gift of Korgaan: Mask of the Reaper (gains Lifeleech (1))"
        ],
        "ovals": [
          20,
          10,
          10,
          10
        ],
        "limit": 0
      },
      {
        "name": "Chieftan on Direfang",
        "mType": "C",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          220
        ],
        "nerve": [
          "15/17"
        ],
        "att": [
          10
        ],
        "stats": [
          6,
          3,
          0,
          5
        ],
        "special": "Hero (LrgCav), Crushing Strength (3), Elite, Inspiring, Strider",
        "options": [
          "Gift of Korgaan: Brand of the Warrior (gains Brutal)",
          "Gift of Korgaan: Guise of the Deceiver (gains Fury)",
          "Gift of Korgaan: Mask of the Reaper (gains Lifeleech (1))"
        ],
        "ovals": [
          10,
          10,
          10
        ],
        "limit": 0
      },
      {
        "name": "King on Chimera",
        "mType": "M",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          310
        ],
        "nerve": [
          "18/20"
        ],
        "att": [
          10
        ],
        "stats": [
          10,
          3,
          0,
          5
        ],
        "special": "Hero (Mon), Breath Attack (10), Crushing Strength (3), Elite, Fly, Inspiring",
        "options": [
          "Gift of Korgaan: Brand of the Warrior (gains Brutal)",
          "Gift of Korgaan: Guise of the Deceiver (gains Fury)",
          "Gift of Korgaan: Mask of the Reaper (gains Lifeleech (1))"
        ],
        "ovals": [
          10,
          10,
          10
        ],
        "limit": 0
      },
      {
        "name": "Skald",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          60
        ],
        "nerve": [
          "11/13"
        ],
        "att": [
          1
        ],
        "stats": [
          5,
          5,
          4,
          4
        ],
        "special": "Hero (Inf), Individual, Inspiring, Piercing (1), Throwing Weapons (Axes)",
        "options": [
          "Mount (increase Speed to 8, change to Hero (Cav))"
        ],
        "ovals": [
          15
        ],
        "limit": 0
      },
      {
        "name": "Cave Troll King[1]",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          200
        ],
        "nerve": [
          "15/18"
        ],
        "att": [
          7
        ],
        "stats": [
          5,
          3,
          0,
          5
        ],
        "special": "Hero (LrgInf), Big Shield, Breath Attack (10), Crushing Strength (3), Nimble, Regeneration (5+), Very Inspiring (Trolls only)",
        "options": [],
        "ovals": [],
        "limit": 1
      },
      {
        "name": "Magnilde of the Fallen [1]",
        "mType": "I",
        "irregular": 0,
        "unitType": [
          "He"
        ],
        "models": [
          1
        ],
        "values": [
          150
        ],
        "nerve": [
          "-/15"
        ],
        "att": [
          5
        ],
        "stats": [
          6,
          3,
          0,
          4
        ],
        "special": "Hero (Inf), Base Size: (25x25mm), Crushing Strength (2), Delayed Deployment, Ensnare, Individual, Iron Resolve",
        "options": [],
        "ovals": [],
        "limit": 1
      }
    ]
  }
]`;

var _catalog = JSON.parse(fullJSON);

var _artefacts = [
  {
    name:"None",
    cost:0
  },
  {
    name:"Healing Brew",
    cost:5
  },
  {
    name:"Blade of Slashing",
    cost:5
  },
  {
    name:"Fire-Oil",
    cost:5
  },
  {
    name:"Kevinar's Flying Hammer",
    cost:5
  },
  {
    name:"Mace of Crushing",
    cost:5
  },
  {
    name:"War-bow of Kaba",
    cost:5
  },
  {
    name:"Staying Stone",
    cost:5
  },
  {
    name:"Orcish skullpole",
    cost:5
  },
  {
    name:"Dwarven Ale",
    cost:10
  },
  {
    name:"Myrddin's Amulet of the Fire-Heart",
    cost:10
  },
  {
    name:"Piercing Arrow",
    cost:10
  },
  {
    name:"Quicksilver Rapier",
    cost:10
  },
  {
    name:"Whip of Celerity",
    cost:10
  },
  {
    name:"Brew of Courage",
    cost:15
  },
  {
    name:"Brew of Haste",
    cost:15
  },
  {
    name:"Chalice of Wrath",
    cost:15
  },
  {
    name:"Pipes of Terror",
    cost:15
  },
  {
    name:"Hann's Sanguinary Scripture",
    cost:15
  },
  {
    name:"Blade of the Beast Slayer",
    cost:20
  },
  {
    name:"Darklord's Onyx Ring",
    cost:20
  },
  {
    name:"Dragonshard Shield",
    cost:20
  },
  {
    name:"Ensorcelled Armour",
    cost:20
  },
  {
    name:"Hammer of Measured Force",
    cost:20
  },
  {
    name:"Helm of Confidence",
    cost:20
  },
  {
    name:"Inspiring Talismman",
    cost:20
  },
  {
    name:"Maccwar's Potion of the Caterpillar",
    cost:20
  },
  {
    name:"Aegis of the Elohi",
    cost:20
  },
  {
    name:"Mournful Blade",
    cost:20
  },
  {
    name:"Zephyr Crown",
    cost:20
  },
  {
    name:"Banner of the Griffin",
    cost:25
  },
  {
    name:"Blessing of the Gods",
    cost:25
  },
  {
    name:"Chant of Hate",
    cost:25
  },
  {
    name:"Kaba's Holy Hand Grenades",
    cost:25
  },
  {
    name:"Lute of Insatiable Darkness",
    cost:25
  },
  {
    name:"Scarletmaw's Fenulian Amulet",
    cost:25
  },
  {
    name:"Shroud of the Saint",
    cost:25
  },
  {
    name:"Boots of Levitation",
    cost:30
  },
  {
    name:"Brew of Strength",
    cost:30
  },
  {
    name:"Brew of Keen-eyeness",
    cost:30
  },
  {
    name:"Crepognon's Scrying Gem of Zellak",
    cost:30
  },
  {
    name:"Diadem of Dragon-kind",
    cost:30
  },
  {
    name:"Healing Charm",
    cost:30
  },
  {
    name:"Heart-seeking Chant",
    cost:30
  },
  {
    name:"Mreb's Grimoire of Unspeakable Darkness",
    cost:30
  },
  {
    name:"The Boomstick",
    cost:30
  },
  {
    name:"Medallion of Life",
    cost:30
  },
  {
    name:"Boots of the Seven Leagues",
    cost:35
  },
  {
    name:"Jar of the Four Winds",
    cost:35
  },
  {
    name:"Orcsbain's Amulet of Thorns",
    cost:35
  },
  {
    name:"The Fog",
    cost:35
  },
  {
    name:"Wine of Elvenkind",
    cost:40
  },
  {
    name:"Wings of Honeymaze",
    cost:40
  },
  {
    name:"Brew of Sharpness",
    cost:45
  },
  {
    name:"Crystal Pendant of Retribution",
    cost:50
  }
];
