import React, { Fragment } from 'react';
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
  return (
    <div className="formation" key={formationName}>
      <Row className="formation__formation-header" noGutters>
        <div className="formation__formation-text-container">
          <p className="formation__formation-name">{formationName}</p>
          {view === 'factionUnitsIndex' && <p className="formation__formation-cost">{formationUnits.reduce((totalCost, { unitCost }) => totalCost + unitCost, 0)}pts</p>}
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
      {
        view === 'factionUnitsIndex' &&
          <Fragment>
            <p className="formation__description">Formation rules:</p>
            <p className="formation__description">{formationDescription}</p>
          </Fragment>
      }
    </div>
  );
};

export default FormationDisplay;
