import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ButtonRow = ({ children, sticky }) => {
  const childButtons = Array.isArray(children) ? children.filter((child) => child) : [children];

  return (
    <Container className={`d-print-none button-row__container${sticky ? '--sticky' : ''}`}>
      <Row className="button-row__row" noGutters={true}>
        {childButtons.map((childButton, i) => {
          return (
            <Col xs={true} lg={false} className="button-row__column" key={i}>
              {childButton}
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ButtonRow;
