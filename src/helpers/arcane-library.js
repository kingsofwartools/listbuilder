import arcaneLibrarySpells from '../data/arcane-library-spells.json';

export const enrichUnitOptionsWithArcaneLibrary = (unit) => {
  const spellcasterLevel = unit.unitDetails.spellcaster;
  const isEligibleForArcaneLibrarySpells = spellcasterLevel && !unit.unitDetails.limit;
  const knowledgeableOption = {
    'name': 'Knowledgeable [1]',
    'cost': 10,
    'limit': 1,
    'disablesIrregular': false
  };
  
  if (isEligibleForArcaneLibrarySpells) {
    const availableArcaneLibrarySpells = calculateAvailableSpells(spellcasterLevel);
    return { ...unit, unitDetails: { ...unit.unitDetails, options: [...unit.unitDetails.options, knowledgeableOption, ...availableArcaneLibrarySpells] }};
  } else {
    return unit;
  }
}

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
