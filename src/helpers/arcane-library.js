import arcaneLibrarySpells from '../data/arcane-library-spells.json';

export const enrichArmyDataForArcaneLibrary = (armyData) => {
  return armyData.map((army) => {
    return {
      ...army,
      units: army.units.map((unit) => {
        const spellcasterLevel = unit.spellcaster;
        const isEligibleForArcaneLibrarySpells = spellcasterLevel && !unit.limit;
        const knowledgeableOption = {
          'name': 'Knowledgeable [1]',
          'cost': 10,
          'limit': 1,
          'disablesIrregular': false
        };
        if (isEligibleForArcaneLibrarySpells) {
          const availableArcaneLibrarySpells = calculateAvailableSpells(spellcasterLevel);
          return { ...unit, options: [...unit.options, knowledgeableOption, ...availableArcaneLibrarySpells] };
        } else {
          return unit;
        }
      }),
    };
  });
};

export const calculateAvailableSpells = (spellcasterLevel) => {
  return arcaneLibrarySpells.reduce((accumulatedSpells, spell) => {
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
