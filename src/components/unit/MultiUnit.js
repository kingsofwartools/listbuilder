import React from 'react';
import UnitHeader from './UnitHeader.js';
import UnitTable from './UnitTable.js';
import UnitFooter from './UnitFooter.js';

const MultiUnit = ({ units, addUnit, view, displayAddButton }) => {
  const unitOptionsDisplay = units.reduce((optionsArr, unit) => {
    if (unit.unitDetails.options.length) {
      unit.unitDetails.options.forEach(option => {
        const processedMatchingOptionIndex = optionsArr.findIndex(processedOption => processedOption.name === option.name);
        if (processedMatchingOptionIndex !== -1) {
          const displayCost = optionsArr[processedMatchingOptionIndex].displayCost;
          const displayCostIncludesOptionWithCost = displayCost && displayCost.split('/').includes((option.cost).toString());
          if (optionsArr[processedMatchingOptionIndex].cost !== option.cost && (!displayCost || (displayCost && !displayCostIncludesOptionWithCost))) {
            optionsArr[processedMatchingOptionIndex].displayCost = `${(optionsArr[processedMatchingOptionIndex].displayCost || optionsArr[processedMatchingOptionIndex].cost)}/${option.cost}`
          }
          if (option.spellLevel) {
            const displayNValues = optionsArr[processedMatchingOptionIndex].displayNValues;
            const displayNValuesIncludesOptionWithNValue = displayNValues && displayNValues.split('/').includes((option.nValue).toString());
            if ((!displayNValues || (displayNValues && !displayNValuesIncludesOptionWithNValue))) {
              optionsArr[processedMatchingOptionIndex].displayNValues = `${(optionsArr[processedMatchingOptionIndex].displayNValues || optionsArr[processedMatchingOptionIndex].nValue)}/${option.nValue}`
            }
          }
        } else {
          optionsArr.push(option);
        }
      });
    }
    return optionsArr;
  },[]);

  return (
    <div className="multi-unit-row">
      <UnitHeader unit={units[0]} displayHeaderCost={false} />
      <UnitTable units={units} addUnit={addUnit} displayAddButton={displayAddButton} />
      <UnitFooter unit={{ ...units[0], unitDetails: { ...units[0].unitDetails, options: unitOptionsDisplay}}} view={view}/>
    </div>
  );
};

export default MultiUnit;
