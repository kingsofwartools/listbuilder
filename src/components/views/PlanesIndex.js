import React from 'react';
import Button from 'components/common/Button';
import ButtonRow from 'components/common/ButtonRow';

const PlanesIndex = ({ planes, handlePlaneButtonClick }) => {
  return (
    <main className="planes-index">
      {planes.map((plane) => (
        <ButtonRow className="planes-index__button-row" key={plane.name}>
          <Button
            text={plane.name}
            onClick={() => handlePlaneButtonClick(plane.name)}
            variant={
              {
                'The Empyrean Plane': 'success',
                'The Ethereal Plane': 'dark',
                'The Material Plane': 'warning',
                'The Abyssal Plane': 'danger',
                'The Astral Plane': 'primary',
              }[plane.name]
            }
          />
        </ButtonRow>
      ))}
    </main>
  );
};

export default PlanesIndex;
