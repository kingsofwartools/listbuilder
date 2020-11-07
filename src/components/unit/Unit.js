import React from 'react';
import UnitHeader from './UnitHeader';
import UnitTable from './UnitTable';
import UnitFooter from './UnitFooter';

const Unit = ({
  unit,
  displayEditButton,
  handleClickEdit,
  view,
  selectOption,
  deselectOption,
  selectArtefact,
  availableArtefacts,
}) => {
  return (
    <div className="unit-row">
      <UnitHeader unit={unit} displayEditButton={displayEditButton} handleClickEdit={handleClickEdit} />
      <UnitTable units={[unit]} />
      <UnitFooter
        unit={unit}
        view={view}
        selectOption={selectOption}
        deselectOption={deselectOption}
        selectArtefact={selectArtefact}
        availableArtefacts={availableArtefacts}
      />
    </div>
  );
};

export default Unit;
