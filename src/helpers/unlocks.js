import armiesData from '../data/armies.json';

const unlockAmounts = {
  Infantry: {
    Regiment: {
      troopOrIrregular: 2,
      heroMonsterTitanOrWarEngineUnique: 1,
    },
    Horde: {
      troopOrIrregular: 4,
      monsterOrTitan: 1,
      hero: 1,
      warEngine: 1,
    },
    Legion: {
      troopOrIrregular: 4,
      monsterOrTitan: 1,
      hero: 1,
      warEngine: 1,
    },
  },
  'Heavy Infantry': {
    Regiment: {
      troopOrIrregular: 2,
      heroMonsterTitanOrWarEngineUnique: 1,
    },
    Horde: {
      troopOrIrregular: 4,
      monsterOrTitan: 1,
      hero: 1,
      warEngine: 1,
    },
    Legion: {
      troopOrIrregular: 4,
      monsterOrTitan: 1,
      hero: 1,
      warEngine: 1,
    },
  },
  Chariot: {
    Regiment: {
      troopOrIrregular: 2,
      heroMonsterTitanOrWarEngineUnique: 1,
    },
    Horde: {
      troopOrIrregular: 4,
      monsterOrTitan: 1,
      hero: 1,
      warEngine: 1,
    },
    Legion: {
      troopOrIrregular: 4,
      monsterOrTitan: 1,
      hero: 1,
      warEngine: 1,
    },
  },
  Cavalry: {
    Regiment: {
      troopOrIrregular: 2,
      heroMonsterTitanOrWarEngineUnique: 1,
    },
    Horde: {
      troopOrIrregular: 4,
      monsterOrTitan: 1,
      hero: 1,
      warEngine: 1,
    },
    Legion: {
      troopOrIrregular: 4,
      monsterOrTitan: 1,
      hero: 1,
      warEngine: 1,
    },
  },
  'Large Infantry': {
    Horde: {
      troopOrIrregular: 2,
      heroMonsterTitanOrWarEngineUnique: 2,
    },
    Legion: {
      troopOrIrregular: 4,
      heroMonsterTitanOrWarEngineUnique: 2,
    },
  },
  'Monstrous Infantry': {
    Horde: {
      troopOrIrregular: 2,
      heroMonsterTitanOrWarEngineUnique: 2,
    },
    Legion: {
      troopOrIrregular: 4,
      heroMonsterTitanOrWarEngineUnique: 2,
    },
  },
  'Large Cavalry': {
    Horde: {
      troopOrIrregular: 2,
      heroMonsterTitanOrWarEngineUnique: 2,
    },
    Legion: {
      troopOrIrregular: 4,
      heroMonsterTitanOrWarEngineUnique: 2,
    },
  },
  Swarm: {
    Horde: {
      troopOrIrregular: 2,
      heroMonsterTitanOrWarEngineUnique: 2,
    },
    Legion: {
      troopOrIrregular: 4,
      heroMonsterTitanOrWarEngineUnique: 2,
    },
  },
};

const calculateUnallocated = (unitsArr) => {
  const unallocated = {
    troopOrIrregular: null,
    hwmt: null,
  };
  const unitDetailsArr = unitsArr.map((unit) => unit.unitDetails);
  const troopsAndIrregularUnits = unitDetailsArr.filter((unit) => unit.irregular || unit.size === 'Troop');
  const heroes = unitDetailsArr.filter((unit) => unit.size === 'Hero');
  const warEngines = unitDetailsArr.filter((unit) => unit.size === 'War Engine');
  const monsters = unitDetailsArr.filter((unit) => unit.size === 'Monster');
  const titans = unitDetailsArr.filter((unit) => unit.size === 'Titan');

  const { unlockingUnits } = armiesData.find(faction => faction.name === unitsArr[0].armyName);

  const unitsWithSlots = unitDetailsArr.map((unit) => {
    const matchingUnlockingUnit = unlockingUnits.find(unlockingUnit => ((unlockingUnit.name === unit.name) && (unlockingUnit.size === unit.size)));
    if (matchingUnlockingUnit) {
      return { ...unit, unlocks: {...matchingUnlockingUnit.unlocks} };
    } else if (!unit.irregular && unlockAmounts[unit.type] && unlockAmounts[unit.type][unit.size]) {
      return { ...unit, unlocks: { ...(unlockAmounts[unit.type] && unlockAmounts[unit.type][unit.size]) } };
    }
    return unit;
  });

  troopsAndIrregularUnits.forEach((troopIrreg) => {
    let hasBeenAllocated = false;
    unitsWithSlots.forEach((unit) => {
      if (!hasBeenAllocated) {
        if (unit.unlocks && unit.unlocks.troopOrIrregular) {
          unit.unlocks.troopOrIrregular--;
          hasBeenAllocated = true;
        }
      }
    });
    if (!hasBeenAllocated) unallocated.troopOrIrregular = true;
  });

  heroes.forEach((hero) => {
    let hasBeenAllocated = false;
    unitsWithSlots.forEach((unit) => {
      if (!hasBeenAllocated) {
        if (unit.unlocks && unit.unlocks.hero) {
          unit.unlocks.hero--;
          hasBeenAllocated = true;
        }
      }
    });
    if (!hasBeenAllocated) {
      unitsWithSlots.forEach((unit) => {
        if (!hasBeenAllocated) {
          if (unit.unlocks && unit.unlocks.heroMonsterTitanOrWarEngineUnique) {
            unit.unlocks.nonHero = unit.unlocks.heroMonsterTitanOrWarEngineUnique - 1;
            delete unit.unlocks.heroMonsterTitanOrWarEngineUnique;
            hasBeenAllocated = true;
          }
        }
      });
    }
    if (!hasBeenAllocated) unallocated.hwmt = true;
  });

  warEngines.forEach((warEngine) => {
    let hasBeenAllocated = false;
    unitsWithSlots.forEach((unit) => {
      if (!hasBeenAllocated) {
        if (unit.unlocks && unit.unlocks.warEngine) {
          unit.unlocks.warEngine--;
          hasBeenAllocated = true;
        }
      }
    });
    if (!hasBeenAllocated) {
      unitsWithSlots.forEach((unit) => {
        if (!hasBeenAllocated) {
          if (unit.unlocks && unit.unlocks.heroMonsterTitanOrWarEngineUnique) {
            unit.unlocks.nonWarEngine = unit.unlocks.heroMonsterTitanOrWarEngineUnique - 1;
            delete unit.unlocks.heroMonsterTitanOrWarEngineUnique;
            hasBeenAllocated = true;
          }
        }
      });
    }
    unitsWithSlots.forEach((unit) => {
      if (!hasBeenAllocated) {
        if (unit.unlocks && unit.unlocks.nonHero) {
          unit.unlocks.nonHero--;
          hasBeenAllocated = true;
        }
      }
    });
    if (!hasBeenAllocated) unallocated.hwmt = true;
  });

  monsters.forEach((monster) => {
    let hasBeenAllocated = false;
    unitsWithSlots.forEach((unit) => {
      if (!hasBeenAllocated) {
        if (unit.unlocks && unit.unlocks.monsterOrTitan) {
          unit.unlocks.monsterOrTitan--;
          hasBeenAllocated = true;
        }
      }
    });

    if (!hasBeenAllocated) {
      unitsWithSlots.forEach((unit) => {
        if (!hasBeenAllocated) {
          if (unit.unlocks && unit.unlocks.heroMonsterTitanOrWarEngineUnique) {
            unit.unlocks.nonMonster = unit.unlocks.heroMonsterTitanOrWarEngineUnique - 1;
            delete unit.unlocks.heroMonsterTitanOrWarEngineUnique;
            hasBeenAllocated = true;
          }
        }
      });
    }
    unitsWithSlots.forEach((unit) => {
      if (!hasBeenAllocated) {
        if (unit.unlocks && (unit.unlocks.nonHero || unit.unlocks.nonWarEngine)) {
          unit.unlocks.nonHero--;
          hasBeenAllocated = true;
        }
      }
    });
    if (!hasBeenAllocated) unallocated.hwmt = true;
  });

  titans.forEach((titan) => {
    let hasBeenAllocated = false;
    unitsWithSlots.forEach((unit) => {
      if (!hasBeenAllocated) {
        if (unit.unlocks && unit.unlocks.monsterOrTitan) {
          unit.unlocks.monsterOrTitan--;
          hasBeenAllocated = true;
        }
      }
    });
    if (!hasBeenAllocated) {
      unitsWithSlots.forEach((unit) => {
        if (!hasBeenAllocated) {
          if (unit.unlocks && unit.unlocks.heroMonsterTitanOrWarEngineUnique) {
            unit.unlocks.nonTitan = unit.unlocks.heroMonsterTitanOrWarEngineUnique - 1;
            delete unit.unlocks.heroMonsterTitanOrWarEngineUnique;
            hasBeenAllocated = true;
          }
        }
      });
    }
    unitsWithSlots.forEach((unit) => {
      if (!hasBeenAllocated) {
        if (unit.unlocks && (unit.unlocks.nonHero || unit.unlocks.nonWarEngine || unit.unlocks.nonMonster)) {
          unit.unlocks.nonHero--;
          hasBeenAllocated = true;
        }
      }
    });
    if (!hasBeenAllocated) unallocated.hwmt = true;
  });

  return unallocated;
};

export default calculateUnallocated;
