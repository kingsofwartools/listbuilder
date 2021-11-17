import React, { Fragment } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

const UnitOptions = ({ view, possibleOptions, selectedOptions, selectOption, deselectOption, requiredOptions }) => {
  const handleChange = (option) => {
    selectedOptions.find((selectedOption) => {
      return selectedOption.nValue
        ? (selectedOption.name === option.name) && (selectedOption.nValue === option.nValue)
        : selectedOption.name === option.name;
    })
      ? deselectOption(option)
      : selectOption(option);
  };
  const nonRequiredOptions = (requiredOptions && requiredOptions.length) ? possibleOptions.filter(({ name }) => !requiredOptions.find(option => option.name === name)) : possibleOptions;

  const isChecked = (option) => {
    return !!(
      selectedOptions &&
      selectedOptions.find((selectedOption) => {
        const hasSameName = selectedOption.name === option.name;
        return selectedOption.nValue ? hasSameName && selectedOption.nValue === option.nValue : hasSameName;
      })
    );
  };

  return (
    <div className="unit-options">
      {view === 'unitSelect' ? (
        <div className="unit-options--select">
          {(requiredOptions && requiredOptions.length) ?
            (<p>
              <span className="unit-footer__label">Required options: </span>
              {requiredOptions.map((option, index) => (
                <span key={`${option.name}${option.nValue ? option.nValue : ''}`}>
                  {option.name}
                  {(option.nValue && ` (${option.nValue})`) || ''} ({option.cost}pts)
                  {index < requiredOptions.length - 1 ? ', ' : ''}
                </span>
              ))}
            </p>) : null
          }
          {nonRequiredOptions.length ? (
            <Fragment>
              <p>
                <span className="unit-options__label--select">Options: </span>
              </p>
              <ul className="unit-options__list--select">
                {nonRequiredOptions.map((option, index) => (
                  <li key={`${option.name}${option.nValue ? option.nValue : ''}`}>
                    <ToggleButtonGroup type="checkbox" onChange={() => handleChange(option)} value={isChecked(option)}>
                      <ToggleButton
                        className={`unit-options__toggle${isChecked(option) ? '--selected' : ''}`}
                        id={option.nValue ? `${option.name}(${option.nValue})-${index}` : `${option.name}-${index}`}
                        variant={isChecked(option) ? 'success' : 'outline-success'}
                        size="sm"
                      >
                        {option.cost}pts
                      </ToggleButton>
                    </ToggleButtonGroup>
                    <label
                      htmlFor={option.nValue ? `${option.name}(${option.nValue})-${index}` : `${option.name}-${index}`}
                    >
                      {option.name}
                      {(option.nValue && ` (${option.nValue})`) || ''}
                    </label>
                  </li>
                ))}
              </ul>
            </Fragment>
          ) : null}
        </div>
      ) : null}
      {view === 'armyList' && (
        <div className="unit-options--select">
          {selectedOptions && selectedOptions.length ? (<p>
            <span className="unit-footer__label">Options: </span>
            {selectedOptions && (selectedOptions.filter(option => !(requiredOptions || []).find(({name}) => option.name === name))).map((option, index) => (
              <span key={`${option.name}${option.nValue ? option.nValue : ''}`}>
                {option.name}
                {(option.nValue && ` (${option.nValue})`) || ''} ({option.cost}pts)
                {index < selectedOptions.length - 1 ? ', ' : ''}
              </span>
            ))}
          </p>) : null}
          {requiredOptions && requiredOptions.length ?
            (<p>
              <span className="unit-footer__label">Required options: </span>
              {requiredOptions.map((option, index) => (
                <span key={`${option.name}${option.nValue ? option.nValue : ''}`}>
                  {option.name}
                  {(option.nValue && ` (${option.nValue})`) || ''} ({option.cost}pts)
                  {index < requiredOptions.length - 1 ? ', ' : ''}
                </span>
              ))}
            </p>) : null
          }
        </div>
      )}
      {view === 'factionUnitsIndex' && (
        <div className="unit-options--select">
          {(nonRequiredOptions && nonRequiredOptions.length &&
            (
              <Fragment>
                <p>
                  <span className="unit-footer__label">Options: </span>
                </p>
                <ul className="unit-options__list--view">
                  {nonRequiredOptions.map((option) => (
                    <li key={`${option.name}${option.nValue ? option.nValue : ''}`}>
                      {option.name}
                      {(option.displayNValues && ` (${option.displayNValues})`) || (option.nValue && ` (${option.nValue})`) || ''}: {option.displayCost || option.cost}pts
                    </li>
                  ))}
                </ul>
            </Fragment>
            )) || null}
          {(requiredOptions && requiredOptions.length &&
            (<p>
              <span className="unit-footer__label">Required options: </span>
              {requiredOptions.map((option, index) => (
                <span key={`${option.name}${option.nValue ? option.nValue : ''}`}>
                  {option.name}
                  {(option.displayNValues && ` (${option.displayNValues})`) || (option.nValue && ` (${option.nValue})`) || ''} ({option.cost}pts)
                  {index < requiredOptions.length - 1 ? ', ' : ''}
                </span>
              ))}
            </p>)) || null
          }
        </div>
      )}
    </div>
  );
};

export default UnitOptions;
