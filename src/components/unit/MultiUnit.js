import React from 'react';
import UnitHeader from './UnitHeader.js';
import UnitTable from './UnitTable.js';
import UnitFooter from './UnitFooter.js';

const MultiUnit = ({ units, addUnit, view, displayAddButton }) => {
  return (
    <div className="multi-unit-row">
      <UnitHeader unit={units[0]} displayHeaderCost={false} />
      <UnitTable units={units} addUnit={addUnit} displayAddButton={displayAddButton} />
      <UnitFooter unit={units[0]} view={view} />
    </div>
  );
};

export default MultiUnit;
