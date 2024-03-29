import React from 'react';
import UnitOptions from './UnitOptions';
import UnitArtefacts from './UnitArtefacts';
import { enrichUnitOptionsWithArcaneLibrary, calculateAvailableSpells } from '../../helpers/arcane-library';

const UnitFooter = ({ unit, view, selectOption, deselectOption, selectArtefact, availableArtefacts }) => {

  const enrichedUnit = enrichUnitOptionsWithArcaneLibrary(unit);
  const higherLevelSpells =
    [...calculateAvailableSpells(unit.unitDetails.spellcaster + 1)].filter(
      (spell) =>
        !enrichedUnit.unitDetails.options.find((allocatedSpell) => {
          return (allocatedSpell.nValue || allocatedSpell.nValue === 0)
            ? allocatedSpell.name === spell.name && allocatedSpell.nValue === spell.nValue
            : allocatedSpell.name === spell.name;
        })
    );

  let enrichedOptions = (!enrichedUnit.unitDetails.limit &&
    enrichedUnit.selectedOptions.find((option) => option.name === "Knowledgeable [1]")) ? 
    [...enrichedUnit.unitDetails.options, ...higherLevelSpells] : 
    [...enrichedUnit.unitDetails.options];

  const splitSpecialRules = unit.unitDetails.specialRules.includes('\\n') ?
    unit.unitDetails.specialRules.split('\\n').map((ruleSection, i) => {
      if (i < unit.unitDetails.specialRules.split('\\n').length - 1) return [<span>{ruleSection}</span>,<br/>]
      return <span>{ruleSection}</span>;
    }) :
    unit.unitDetails.specialRules;

  return (
    <div className="unit-footer">
      <div className="unit-footer__special">
        <p>
          <span className="unit-footer__label">Special: </span>
          {splitSpecialRules}{unit.formationUpgrade &&
            (<span>{splitSpecialRules.length ? ', ' : ''}{unit.formationUpgrade.name}: {unit.formationUpgrade.text} ({unit.formationUpgrade.cost}pts)</span>)
          }
        </p>
        {unit.unitDetails.spells && (
          <p>
            <span className="unit-footer__label">Spells: </span>
            {unit.unitDetails.spells}
          </p>
        )}
        <p>
          <span className="unit-footer__label">Keywords: </span>
          {unit.formationUpgrade && unit.formationUpgrade.addsKeywords ? `${unit.unitDetails.keywords}, ${unit.formationUpgrade.addsKeywords.join(', ')}` : unit.unitDetails.keywords}
        </p>
        {(unit.unitDetails.spellcaster || unit.unitDetails.spellcaster === 0) && (
          <p>
            <span className="unit-footer__label">Spellcaster: </span>
            {unit.selectedOptions.find(option => option.name === 'Knowledgeable [1]') ? (unit.unitDetails.spellcaster + 1) : unit.unitDetails.spellcaster}
          </p>
        )}
        {(view === 'factionUnitsIndex' || view === 'armyList') ? (
          <UnitOptions selectedOptions={unit.selectedOptions} requiredOptions={unit.requiredOptions} possibleOptions={enrichedOptions} view={view} />
        ) : null}
        {view === 'unitSelect' &&
        (unit.unitDetails.options.length ||
          (!unit.unitDetails.limit &&
            unit.selectedOptions.find((option) => option.name === "Knowledgeable [1]"))) ? (
          <UnitOptions
            possibleOptions={enrichedOptions}
            selectedOptions={unit.selectedOptions}
            view={view}
            selectOption={selectOption}
            deselectOption={deselectOption}
            requiredOptions={unit.requiredOptions}
          />
        ) : null}
        {view === 'armyList' && unit.selectedArtefacts.length ? (
          <UnitArtefacts selectedArtefacts={unit.selectedArtefacts} view={view} />
        ) : null}
        {view === 'unitSelect' &&
          !['Monster', 'War Engine', 'Titan'].includes(unit.unitDetails.size) &&
          !(unit.formationUpgrade && unit.formationUpgrade.prohibitsArtefacts) &&
          !unit.unitDetails.limit && (
            <UnitArtefacts
              artefactsLimit={1}
              availableArtefacts={availableArtefacts}
              selectedArtefacts={unit.selectedArtefacts}
              view={view}
              selectArtefact={selectArtefact}
              sizeModifier={unit.unitDetails.size}
            />
          )}
      </div>
    </div>
  );
};

export default UnitFooter;
