import React from 'react';
import { FormationDisplay } from '.';

const FormationSelect = ({ army, addFormation }) => {
  return (
    army.formations.map(formation => {
      const formationUnits = formation.units.map(formationUnit => {
        const armyUnit = army.units.find(unit => unit.name === formationUnit.unitName && unit.size === formationUnit.size);
        return {
          unitDetails: { ...armyUnit },
          selectedOptions: formationUnit.requiredOptions,
          unitCost: armyUnit.cost,
          selectedArtefacts: [],
          formation: formation.name,
        }
      });
      return (
        <FormationDisplay
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
