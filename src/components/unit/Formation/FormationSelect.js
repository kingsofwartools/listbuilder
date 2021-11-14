import React from 'react';
import { FormationDisplay } from '.';

const FormationSelect = ({ army, addFormation }) => {
  return (
    army.formations.map(formation => {
      const formationUnits = formation.units.map(formationUnit => {
        const armyUnit = army.units.find(unit => unit.name === formationUnit.unitName && unit.size === formationUnit.size);
        return {
          unitDetails: { ...armyUnit, cost: armyUnit.cost + formationUnit.formationUpgrade.cost },
          selectedOptions: formationUnit.requiredOptions,
          unitCost: armyUnit.cost + formationUnit.formationUpgrade.cost,
          selectedArtefacts: [],
          formation: formation.name,
          formationUpgrade: formationUnit.formationUpgrade,
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
