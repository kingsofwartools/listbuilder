import React from 'react';
import Unit from 'components/unit/Unit';
import Button from 'components/common/Button';
import ButtonRow from 'components/common/ButtonRow';
import UnlocksBanner from 'components/UnlocksBanner';
import DuplicatesBanner from 'components/DuplicatesBanner';

const ArmyList = ({
  armyList,
  goToDisplay,
  setFromArmyList,
  selectUnit,
  unallocated,
  points,
  tooManyDuplicates,
  overLimits,
  artefactDuplicates,
}) => {
  // The list the user has been building

  const handleAddUnitClick = () => {
    goToDisplay('factionUnitsIndex');
    window.scrollTo(0, 0);
    setFromArmyList(true);
  };

  const handleEditUnitClick = (unit) => {
    selectUnit(unit);
    goToDisplay('unitSelect');
    window.scrollTo(0, 0);
    setFromArmyList(true);
  };

  return (
    <section className="army-list">
      {armyList.map((faction) => (
        <UnlocksBanner key={faction.name} armyName={faction.name} unallocated={unallocated} />
      ))}
      <DuplicatesBanner
        tooManyDuplicates={tooManyDuplicates}
        overLimits={overLimits}
        artefactDuplicates={artefactDuplicates}
      />
      {armyList.map((faction) => {
        return (
          <div key={faction.name}>
            <div className="army-list__header">
              <h2 className="army-list__section-heading">{faction.name}</h2>
              <p className="army-list__points">{points[faction.name]} points</p>
            </div>
            {faction.units.map((unit) => {
              return (
                <Unit
                  unit={unit}
                  key={unit.unitId}
                  displayEditButton={true}
                  handleClickEdit={() => handleEditUnitClick(unit)}
                  view={'armyList'}
                />
              );
            })}
          </div>
        );
      })}
      <ButtonRow sticky={true}>
        <Button text="Add another unit" onClick={handleAddUnitClick} variant="success" />
      </ButtonRow>
    </section>
  );
};

export default ArmyList;
