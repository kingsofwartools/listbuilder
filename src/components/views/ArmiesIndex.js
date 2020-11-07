import React from 'react';
import Button from 'components/common/Button';
import ButtonRow from 'components/common/ButtonRow';

const ArmiesIndex = ({ armies, handleArmyButtonClick, halpi = false, goToDisplay }) => {
  const filterAndChunk = (filterString) => {
    const filteredArmies = armies.filter((army) => army.alignment === filterString);
    const arrayOfArmyArrays = [];
    filteredArmies.forEach((army, i) => {
      if (i % 3 === 0) {
        arrayOfArmyArrays.push([army]);
      } else {
        arrayOfArmyArrays[arrayOfArmyArrays.length - 1].push(army);
      }
    });
    return arrayOfArmyArrays;
  };
  return (
    <section className="armies-index">
      {['Good', 'Neutral', 'Evil']
        .map((alignmentString) => filterAndChunk(alignmentString))
        .flat()
        .map((armyArr, i) => {
          return (
            <ButtonRow className="armies-index__button-row" key={i}>
              {armyArr.map((army) => (
                <Button
                  text={army.name}
                  onClick={() => handleArmyButtonClick(army.name)}
                  key={army.name}
                  variant={{ Good: 'success', Neutral: 'warning', Evil: 'danger' }[army.alignment]}
                />
              ))}
            </ButtonRow>
          );
        })}
      {halpi && (
        <ButtonRow sticky={true}>
          <Button text="Cancel" onClick={() => goToDisplay('planesIndex')} variant="warning" />
        </ButtonRow>
      )}
    </section>
  );
};

export default ArmiesIndex;
