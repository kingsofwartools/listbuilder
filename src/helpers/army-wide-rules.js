import armiesData from '../data/armies.json';
const armyWideRules = armiesData.map(faction => ({
  name: faction.name,
  armyWideRules: faction.armyWideRules,
}));

// only supports no longer irregular, and can only apply a single rule to a unit. TODO: extend this to apply multiple rules
export const applyArmyWideRulesToArmyList = (armyList) => {
  const factionArmyWideRules = armyWideRules.find(army => army.name === armyList.name).armyWideRules;
  const armyWideRulesToApply = armyList.units.reduce((rulesToApply, unit) => {
    const matchingRule = factionArmyWideRules.find(armyWideRule => armyWideRule.unit.name === unit.unitDetails.name);
    if (matchingRule) rulesToApply.push(matchingRule);
    return rulesToApply;
  }, []);
  const modifiedUnits = armyList.units.map(unit => {
    const matchingRule = armyWideRulesToApply.find(ruleToApply => {
      return ruleToApply.effect.units.find(ruleUnit => ruleUnit.name === unit.unitDetails.name);
    });
    console.log('unit:', unit);
    console.log('matchingRule:', matchingRule);
    if (!matchingRule) {
      if (unit.appliedRules) {
        return unit.appliedRules.find(rule => rule.effect.units.find(ruleUnit => (ruleUnit.name === unit.originalUnitDetails.name) && ruleUnit.noLongerIrregular)) ?
          { ...unit, appliedRules: [], unitDetails: { ...unit.unitDetails, irregular: true, name: unit.originalUnitDetails.name}} :
          {...unit}
      } else {
        return {...unit};
      }
    }
    // bug: add 2 regiments of corsairs and firbrand, remove firebrand. only one unit of corsairs is irregular again
    const matchingRuleUnit = matchingRule.effect.units.find(ruleUnit => ruleUnit.name === unit.unitDetails.name);
    return matchingRuleUnit.noLongerIrregular ?
      { ...unit,
        appliedRules: unit.appliedRules ? [...unit.appliedRules, matchingRule] : [matchingRule],
        unitDetails: { ...unit.unitDetails, irregular: false, name: unit.unitDetails.name.split('*').join('') }} :
      { ...unit };
  });
  return {
    ...armyList,
    units: modifiedUnits,
  }
}
