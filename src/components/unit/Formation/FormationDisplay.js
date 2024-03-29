import React from 'react';
import Button from 'components/common/Button.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MultiUnit from '../MultiUnit';
import Unit from '../Unit';

const FormationDisplay = ({
  view,
  addFormation,
  deleteFormation,
  formationUnits,
  formationName,
  formationDescription,
  handleClickEdit,
  alreadyAddedFormations
}) => {
  const formationCost = formationUnits.reduce((upgradesCost, unit) => {
    return unit.formationUpgrade && unit.formationUpgrade.cost ? upgradesCost + unit.formationUpgrade.cost : upgradesCost
  }, 0);
  return (
    <div className="formation" key={formationName}>
      <Row className="formation__formation-header" noGutters>
        <div className="formation__formation-text-container">
          <p className="formation__formation-name">{formationName} <span className="formation__formation-cost">({formationUnits.reduce((totalCost, { unitCost }) => totalCost + unitCost, 0)}pts)</span></p>
        </div>
        <Col className="formation__formation-button-container">
          {view === 'factionUnitsIndex' && <Button variant="primary" disabled={alreadyAddedFormations.includes(formationName)} text="Add" onClick={() => addFormation(formationUnits)} size="sm" />}
          {view === 'armyList' && <Button variant="outline-warning" text="Delete" onClick={() => deleteFormation(formationUnits)} size="sm" />}
        </Col>
      </Row>
      {formationUnits.map((formationUnit, index) => {
        return view === 'factionUnitsIndex' ? (
          <MultiUnit
            key={`${formationUnit.unitDetails.name}-${index}`}
            units={[formationUnit]}
            view='factionUnitsIndex'
            displayAddButton={false}
          />
        ) : (
          <Unit
            key={`${formationUnit.unitDetails.name}-${index}`}
            unit={formationUnit}
            displayEditButton={view === 'armyList'}
            handleClickEdit={handleClickEdit}
            view={view}
          />
        )
      })}
      {
        view === 'factionUnitsIndex' &&
          <div className="formation__description-container">
            <p className="formation__description">Formation rules:</p>
            <p className="formation__description">{formationDescription}</p>
            <p className="formation__description">Cost: {formationCost}pts</p>
          </div>
      }
    </div>
  );
};

export default FormationDisplay;
