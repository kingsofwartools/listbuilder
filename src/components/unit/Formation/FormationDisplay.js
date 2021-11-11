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
  handleClickEdit
}) => {
  console.log('formationUnits in FormationDisplay', formationUnits);
  return (
    <div className="formation" key={formationName}>
      <Row className="formation__formation-header" noGutters>
        <div className="formation__formation-text-container">
          <p className="formation__formation-name">{formationName}</p>
          <p className="formation__formation-cost">Total cost goes here!</p>
        </div>
        <Col className="formation__formation-button-container">
          {view === 'factionUnitsIndex' && <Button text="Add" onClick={() => addFormation(formationUnits)} size="sm" />}
          {view === 'armyList' && <Button variant="warning" text="Delete" onClick={() => deleteFormation(formationUnits)} size="sm" />}
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
      <p className="formation__description">{formationDescription}</p>
    </div>
  );
};

export default FormationDisplay;
