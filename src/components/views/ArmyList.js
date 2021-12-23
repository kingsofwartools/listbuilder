import React, {useRef, useState} from 'react';
import Unit from 'components/unit/Unit';
import Button from 'components/common/Button';
import ButtonRow from 'components/common/ButtonRow';
import { ExportModal } from 'components/ExportModal';
import UnlocksBanner from 'components/UnlocksBanner';
import DuplicatesBanner from 'components/DuplicatesBanner';
import { FormationDisplay } from 'components/unit/Formation';

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
  formationDuplicates,
  handleDeleteFormationFromList
}) => {
  // The list the user has been building
  const [showModal, setShowModal] = useState(false);
  const htmlForPdfExport = useRef(null);

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

  const handleFormationEditUnitClick = (unit) => {
    selectUnit(unit);
    goToDisplay('unitSelectFormationUnit');
    window.scrollTo(0, 0);
    setFromArmyList(true);
  }

  const handleExportClick = () => {
    setShowModal(true);
  }

  return (
    <section className="army-list" ref={htmlForPdfExport}>
      <ExportModal
        show={showModal}
        onHide={() => setShowModal(false)}
        exportElement={htmlForPdfExport.current}
        pdfTitle={`${armyList[0].name} - ${Object.values(points).reduce((total, armyPoints) => total + armyPoints, 0)}pts`}
      />
      {armyList.map((faction) => (
        <UnlocksBanner key={faction.name} armyName={faction.name} unallocated={unallocated} />
      ))}
      <DuplicatesBanner
        tooManyDuplicates={tooManyDuplicates}
        overLimits={overLimits}
        artefactDuplicates={artefactDuplicates}
        formationDuplicates={formationDuplicates}
      />
      {armyList.map((faction) => {
        const formationsInList = faction.units.reduce((formationsArr, unit) => {
          if (unit.formation && !formationsArr.includes(unit.formation)) formationsArr.push(unit.formation);
          return formationsArr;
        }, []);
        const formationGroups = formationsInList.map(formationName => (
          {
            formationName,
            units: faction.units.filter(unit => unit.formation === formationName),
          }
        ));
        const orderedFactionListWithFormations = faction.units.reduce((factionList, unit) => {
          if (!unit.formation) {
            factionList.push(unit);
          } else if (!factionList.find(element => element.formationName === unit.formation)) {
            factionList.push(formationGroups.find(formation => formation.formationName === unit.formation));
          }
          return factionList;
        }, [])
        return (
          <div key={faction.name}>
            <div className="army-list__header">
              <h2 className="army-list__section-heading">{faction.name}</h2>
              <div>
                <p className="army-list__points">{points[faction.name]} points</p>
                <Button text="Export" onClick={handleExportClick} size="sm"/>
              </div>
            </div>
            {orderedFactionListWithFormations.map((unitOrFormation) => {
              if (unitOrFormation.formationName) {
                return <FormationDisplay
                  key={unitOrFormation.formationName}
                  view={'armyList'}
                  deleteFormation={handleDeleteFormationFromList}
                  formationUnits={unitOrFormation.units}
                  formationName={unitOrFormation.formationName}
                  handleClickEdit={handleFormationEditUnitClick}
                  />
              } else {
                return (
                  <Unit
                    unit={unitOrFormation}
                    key={unitOrFormation.unitId}
                    displayEditButton={true}
                    handleClickEdit={handleEditUnitClick}
                    view={'armyList'}
                  />
                );
              }
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
