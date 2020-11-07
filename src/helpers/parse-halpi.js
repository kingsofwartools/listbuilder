export const enrichArmyDataForHalpisRift = (armyData, planeSpells) => {
  return armyData.map((army) => {
    return {
      ...army,
      units: army.units.map((unit) => {
        const spellcasterLevel = unit.spellcaster;
        const isEligibleForPlaneSpells = spellcasterLevel && !unit.limit;
        if (isEligibleForPlaneSpells) {
          const availablePlaneSpells = calculateAvailablePlaneSpells(planeSpells, spellcasterLevel);
          return { ...unit, options: [...unit.options, ...availablePlaneSpells] };
        } else {
          return unit;
        }
      }),
    };
  });
};

export const calculateAvailablePlaneSpells = (planeSpells, spellcasterLevel) => {
  return planeSpells.reduce((accumulatedSpells, spell) => {
    spell.levels.forEach((spellLevel) => {
      if (spellLevel.level <= spellcasterLevel)
        accumulatedSpells.push({
          name: spell.name,
          cost: spellLevel.cost,
          limit: spell.limit,
          spellLevel: spellLevel.level,
          nValue: spellLevel.n,
        });
    });
    return accumulatedSpells;
  }, []);
};
