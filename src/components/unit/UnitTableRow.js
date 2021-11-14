import React from 'react';
import Button from '../common/Button';

const UnitTableRow = ({ unit, displayAddButton = false, addUnit = false }) => {
  const unitDetails = unit.unitDetails ? unit.unitDetails : unit;

  const unitWithFormationIndicator = unit.formationUpgrade ?
    unit.formationUpgrade.affectsValues.reduce((newUnitDetails, affectedValue) => {
      return {...newUnitDetails, ...affectedValue};
    }, {...unitDetails}) :
    unitDetails;
  return (
    <tr className="unit-table-row">
      <td>
        <p>{`${unitWithFormationIndicator.size} (${unitWithFormationIndicator.modelCount})`}</p>
      </td>
      <td>
        <p>{unitWithFormationIndicator.speed}</p>
      </td>
      <td>
        <p>{unitWithFormationIndicator.melee}</p>
      </td>
      <td>
        <p>{unitWithFormationIndicator.ranged}</p>
      </td>
      <td>
        <p>{unitWithFormationIndicator.defence}</p>
      </td>
      <td>
        <p>{unitWithFormationIndicator.height}</p>
      </td>
      <td>
        <p>{unitWithFormationIndicator.unitStrength}</p>
      </td>
      <td>
        <p>{unitWithFormationIndicator.attacks}</p>
      </td>
      <td>
        <p>{unitWithFormationIndicator.nerve}</p>
      </td>
      <td className="d-print-none">
        <p>{unitWithFormationIndicator.cost}</p>
      </td>
      {displayAddButton && (
        <td className="d-print-none">
          <Button text="Add" onClick={() => addUnit(unit)} size="sm" />
        </td>
      )}
    </tr>
  );
};

export default UnitTableRow;
