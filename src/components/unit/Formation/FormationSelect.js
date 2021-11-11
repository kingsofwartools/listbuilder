import React from 'react';
import Button from 'components/common/Button.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UnitHeader from '../UnitHeader';
import UnitTable from '../UnitTable';
import UnitFooter from '../UnitFooter';

const FormationSelect = ({ army, addFormation }) => {
  return (
    army.formations.map(formation => {
      const formationUnits = formation.units.map(formationUnit => {
        const armyUnit = army.units.find(unit => unit.name === formationUnit.unitName && unit.size === formationUnit.size);
        return {
          unitDetails: { ...armyUnit },
          selectedOptions: formationUnit.requiredOptions,
          unitCost: armyUnit.cost,
          selectedArtefacts: [],
          formation: formation.name,
        }
      });
      return (
        <div className="formation" key={formation.name}>
          <Row className="formation__formation-header" noGutters>
            <div className="formation__formation-text-container">
                <p className="formation__formation-name">{formation.name}</p>
                <p className="formation__formation-cost">Total cost goes here!</p>
            </div>
            <Col className="formation__formation-button-container">
              <Button text="Add" onClick={() => addFormation(formationUnits)} size="sm" />
            </Col>
          </Row>
          {formationUnits.map((formationUnit, index) => {
            console.log('formationUnit', formationUnit);
            return (
              <div className="formation__formation-unit" key={`${formationUnit.name}-${index}`}>
                <UnitHeader unit={formationUnit} displayHeaderCost={true}/>
                <UnitTable units={[formationUnit]}/>
                <UnitFooter unit={formationUnit} view='factionUnitsIndex'/>
              </div>
            )
          })}
          <p className="formation__description">{formation.description}</p>
        </div>
      )
    })
  );
};

export default FormationSelect;
