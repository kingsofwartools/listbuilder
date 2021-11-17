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
  hideDeleteButton,
  editUnit,
  deleteUnit,
  deleteConfirm,
  availableArtefacts,
}) => {
  const [enrichedUnit, setEnrichedUnit] = useState(
    editingUnit && !unit.unitDetails
      ? { unitDetails: { ...unit }, selectedOptions: [], unitCost: unit.cost, selectedArtefacts: [], originalUnitDetails: unit.originalUnitDetails || { ...unit } }
      : { ...unit, originalUnitDetails: unit.originalUnitDetails || unit.unitDetails }
  );

  const handleCancelClick = () => {
    goToDisplay(editingUnit ? 'armyList' : 'factionUnitsIndex');
    window.scrollTo(0, 0);
  };

  const handleSaveClick = () => {
    editingUnit ? editUnit(enrichedUnit) : handleAddUnitToListWithArmyAndUnit(armyName, enrichedUnit);
  };

  const handleSelectOption = (option) => {
    setEnrichedUnit((previousEnrichedUnit) => {
      return {
      ...previousEnrichedUnit,
      unitDetails: {
        ...previousEnrichedUnit.unitDetails,
        name: option.disablesIrregular ? previousEnrichedUnit.originalUnitDetails.name.substring(0, previousEnrichedUnit.originalUnitDetails.name.length - 1) : previousEnrichedUnit.originalUnitDetails.name,
        irregular: option.disablesIrregular ? false : previousEnrichedUnit.unitDetails.irregular,
      },
      originalUnitDetails: previousEnrichedUnit.originalUnitDetails,
      selectedOptions: [...previousEnrichedUnit.selectedOptions, option],
      unitCost:
        previousEnrichedUnit.unitDetails.cost +
        [...previousEnrichedUnit.selectedOptions, option].reduce((sum, o) => sum + o.cost, 0) +
        [...previousEnrichedUnit.selectedArtefacts].reduce((sum, a) => sum + a.cost, 0),
    }});
  };

  const handleDeselectOption = (option) => {
    
    setEnrichedUnit((previousEnrichedUnit) => {
      return {
        ...previousEnrichedUnit,
        unitDetails: {
          ...previousEnrichedUnit.unitDetails,
          name: previousEnrichedUnit.originalUnitDetails.name,
          irregular: previousEnrichedUnit.originalUnitDetails.irregular,
        },
        originalUnitDetails: previousEnrichedUnit.originalUnitDetails,
        selectedOptions: previousEnrichedUnit.selectedOptions.filter((selectedOption) => {
          if (option.name === 'Knowledgeable [1]') {
            console.log('in here');
            if (selectedOption.spellLevel && (selectedOption.spellLevel > previousEnrichedUnit.originalUnitDetails.spellcaster)) return false;
          }
          if (selectedOption.nValue) {
            if (selectedOption.name === option.name) {
              return (selectedOption.nValue !== option.nValue);
            } else {
              return true;
            }
          } else {
            return (selectedOption.name !== option.name);
          }
        }),
        unitCost:
          previousEnrichedUnit.unitDetails.cost +
          previousEnrichedUnit.selectedOptions
            .filter((selectedOption) => {
              if (option.name === 'Knowledgeable [1]') {
                if (selectedOption.spellLevel && (selectedOption.spellLevel > previousEnrichedUnit.originalUnitDetails.spellcaster)) return false;
              }
              if (selectedOption.nValue) {
                if (selectedOption.name === option.name) {
                  return (selectedOption.nValue !== option.nValue);
                } else {
                  return true;
                }
              } else {
                return (selectedOption.name !== option.name);
              }
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
          {editingUnit && !hideDeleteButton ? <Button text="Delete" onClick={handleGoToDeleteConfirm} variant="danger" /> : null}
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
