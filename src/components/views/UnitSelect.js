import React, { useState } from 'react';
import Unit from 'components/unit/Unit';
import Button from 'components/common/Button';
import ButtonRow from 'components/common/ButtonRow';

const UnitSelect = ({
  unit,
  armyName,
  goToDisplay,
  handleAddUnitToListWithArmyAndUnit,
  editingUnit,
  editUnit,
  deleteUnit,
  deleteConfirm,
  availableArtefacts,
}) => {
  const [enrichedUnit, setEnrichedUnit] = useState(
    editingUnit && !unit.unitDetails
      ? { unitDetails: { ...unit }, selectedOptions: [], unitCost: unit.cost, selectedArtefacts: [] }
      : { ...unit }
  );

  const handleCancelClick = () => {
    goToDisplay(editingUnit ? 'armyList' : 'factionUnitsIndex');
    window.scrollTo(0, 0);
  };

  const handleSaveClick = () => {
    editingUnit ? editUnit(enrichedUnit) : handleAddUnitToListWithArmyAndUnit(armyName, enrichedUnit);
  };

  const handleSelectOption = (option) => {
    setEnrichedUnit((previousEnrichedUnit) => ({
      ...previousEnrichedUnit,
      selectedOptions: [...previousEnrichedUnit.selectedOptions, option],
      unitCost:
        previousEnrichedUnit.unitDetails.cost +
        [...previousEnrichedUnit.selectedOptions, option].reduce((sum, o) => sum + o.cost, 0) +
        [...previousEnrichedUnit.selectedArtefacts].reduce((sum, a) => sum + a.cost, 0),
    }));
  };

  const handleDeselectOption = (option) => {
    setEnrichedUnit((previousEnrichedUnit) => {
      return {
        ...previousEnrichedUnit,
        selectedOptions: previousEnrichedUnit.selectedOptions.filter((selectedOption) => {
          return selectedOption.nValue
            ? selectedOption.nValue !== option.nValue && selectedOption.name === option.name
            : selectedOption.name !== option.name;
        }),
        unitCost:
          previousEnrichedUnit.unitDetails.cost +
          previousEnrichedUnit.selectedOptions
            .filter((selectedOption) => {
              return selectedOption.nValue
                ? selectedOption.nValue !== option.nValue && selectedOption.name === option.name
                : selectedOption.name !== option.name;
            })
            .reduce((sum, o) => sum + o.cost, 0) +
          [...previousEnrichedUnit.selectedArtefacts].reduce((sum, a) => sum + a.cost, 0),
      };
    });
  };

  const handleSelectArtefact = (artefact, index) => {
    setEnrichedUnit((previousEnrichedUnit) => {
      if (!artefact) {
        previousEnrichedUnit.selectedArtefacts.splice(index, 1);
      } else {
        previousEnrichedUnit.selectedArtefacts[index] = artefact;
      }
      return {
        ...previousEnrichedUnit,
        unitCost:
          previousEnrichedUnit.unitDetails.cost +
          previousEnrichedUnit.selectedOptions.reduce((sum, o) => sum + o.cost, 0) +
          [...previousEnrichedUnit.selectedArtefacts].reduce((sum, a) => sum + a.cost, 0),
      };
    });
  };

  const unitDetails = unit.unitDetails ? unit.unitDetails : unit;

  const handleGoToDeleteConfirm = () => {
    goToDisplay('deleteConfirm');
    window.scrollTo(0, 0);
  };

  const handleGoToUnitSelect = () => {
    goToDisplay('unitSelect');
    window.scrollTo(0, 0);
  };

  if (!deleteConfirm) {
    return (
      <section className="unit-select">
        <Unit
          unit={enrichedUnit}
          displayEditButton={false}
          view="unitSelect"
          selectOption={handleSelectOption}
          deselectOption={handleDeselectOption}
          selectArtefact={handleSelectArtefact}
          availableArtefacts={availableArtefacts}
        />
        <ButtonRow sticky={true}>
          <Button text="Save" onClick={handleSaveClick} variant="success" />
          {editingUnit ? <Button text="Delete" onClick={handleGoToDeleteConfirm} variant="danger" /> : null}
          <Button text="Cancel" onClick={handleCancelClick} variant="warning" />
        </ButtonRow>
      </section>
    );
  } else {
    return (
      <section className="delete-confirm">
        <div className="delete-confirm__container">
          <p className="h6">Delete this unit?</p>
          <p className="h5">{unitDetails.name}</p>
        </div>
        <ButtonRow sticky={true}>
          <Button text="Delete" onClick={() => deleteUnit(unit)} variant="danger" />
          <Button text="Cancel" onClick={handleGoToUnitSelect} variant="warning" />
        </ButtonRow>
      </section>
    );
  }
};

export default UnitSelect;
