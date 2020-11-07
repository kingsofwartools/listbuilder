import React from 'react';
import UnitTableRow from './UnitTableRow';
import Table from 'react-bootstrap/Table';

const UnitTable = ({ units, displayAddButton = false, addUnit = false }) => {
  return (
    <Table className="unit-table">
      <tbody>
        <tr>
          <th>
            <p>Unit size</p>
          </th>
          <th>
            <p>Sp</p>
          </th>
          <th>
            <p>Me</p>
          </th>
          <th>
            <p>Ra</p>
          </th>
          <th>
            <p>De</p>
          </th>
          <th>
            <p>H</p>
          </th>
          <th>
            <p>US</p>
          </th>
          <th>
            <p>Att</p>
          </th>
          <th>
            <p>Ne</p>
          </th>
          <th className="d-print-none">
            <p>Pts</p>
          </th>
          <th className="d-print-none"></th>
        </tr>
        {units.map((unit) => (
          <UnitTableRow
            key={unit.unitDetails ? `${unit.unitDetails.name}-${unit.unitDetails.size}` : `${unit.name}-${unit.size}`}
            unit={unit}
            displayAddButton={displayAddButton}
            addUnit={addUnit}
          />
        ))}
      </tbody>
    </Table>
  );
};

export default UnitTable;
