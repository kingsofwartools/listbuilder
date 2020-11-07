import React from 'react';
import Button from 'components/common/Button.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const UnitHeader = ({ unit, displayEditButton = false, handleClickEdit = false }) => {
  const unitDetails = unit.unitDetails ? unit.unitDetails : unit;
  const unitDescription = unitDetails.size === 'Hero' ? `Hero (${unitDetails.type})` : unitDetails.type;

  return (
    <Row className="unit-header" noGutters>
      <div className="unit-header__unit-name-container">
        <p className="unit-header__unit-name">{unitDetails.name}</p>
        {displayEditButton && <Button text="Edit" onClick={() => handleClickEdit(unit)} size="sm" />}
      </div>
      <Col className="unit-header__unit-type-container">
        <p className="unit-header__unit-type">
          <span className="badge badge-secondary">{unitDescription}</span>
          {unit.unitCost && ` ${unit.unitCost}pts`}
        </p>
      </Col>
    </Row>
  );
};

export default UnitHeader;
