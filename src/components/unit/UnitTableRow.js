import React from 'react';
import Button from '../common/Button';

const UnitTableRow = ({ unit, displayAddButton = false, addUnit = false }) => {
  const unitDetails = unit.unitDetails ? unit.unitDetails : unit;

  return (
    <tr className="unit-table-row">
      <td>
        <p>{`${unitDetails.size} (${unitDetails.modelCount})`}</p>
      </td>
      <td>
        <p>{unitDetails.speed}</p>
      </td>
      <td>
        <p>{unitDetails.melee}</p>
      </td>
      <td>
        <p>{unitDetails.ranged}</p>
      </td>
      <td>
        <p>{unitDetails.defence}</p>
      </td>
      <td>
        <p>{unitDetails.height}</p>
      </td>
      <td>
        <p>{unitDetails.unitStrength}</p>
      </td>
      <td>
        <p>{unitDetails.attacks}</p>
      </td>
      <td>
        <p>{unitDetails.nerve}</p>
      </td>
      <td className="d-print-none">
        <p>{unitDetails.cost}</p>
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
