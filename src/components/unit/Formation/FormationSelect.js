import React from 'react';
import { FormationDisplay } from '.';

const FormationSelect = ({ army, addFormation }) => {
  return (
    army.formations.map(formation => {
      const formationUnits = formation.units.map(formationUnit => {
        const armyUnit = army.units.find(unit => unit.name === formationUnit.unitName && unit.size === formationUnit.size);
        const unitCost = formationUnit.formationUpgrade ?
          armyUnit.cost + formationUnit.formationUpgrade.cost + formationUnit.requiredOptions.reduce((totalOptionsCost, option) => totalOptionsCost + option.cost, 0) :
          armyUnit.cost + formationUnit.requiredOptions.reduce((totalOptionsCost, option) => totalOptionsCost + option.cost, 0)
        return {
          unitDetails: { ...armyUnit, cost: formationUnit.formationUpgrade ? armyUnit.cost + formationUnit.formationUpgrade.cost : armyUnit.cost },
          selectedOptions: formationUnit.requiredOptions,
          unitCost,
          selectedArtefacts: [],
          formation: formation.name,
          formationUpgrade: formationUnit.formationUpgrade,
          requiredOptions: formationUnit.requiredOptions
        }
      });
      return (
        <FormationDisplay
          key={formation.name}
          view='factionUnitsIndex'
          addFormation={addFormation}
          formationUnits={formationUnits}
          formationName={formation.name}
          formationDescription={formation.description}
        />
      )
    })
  );
};

export default FormationSelect;
