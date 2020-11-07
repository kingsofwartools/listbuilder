import React from 'react';
import UnitHeader from './UnitHeader.js';
import UnitTable from './UnitTable.js';
import UnitFooter from './UnitFooter.js';

const MultiUnitRow = ({ units, addUnit, view }) => {
  return (
    <div className="multi-unit-row">
      <UnitHeader unit={units[0]} />
      <UnitTable units={units} addUnit={addUnit} displayAddButton={true} />
      <UnitFooter unit={units[0]} view={view} />
    </div>
  );
};

export default MultiUnitRow;
