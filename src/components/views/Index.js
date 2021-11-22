import React, { useState, useEffect, useReducer } from 'react';
import FactionUnitsIndex from 'components/views/FactionUnitsIndex';
import UnitSelect from 'components/views/UnitSelect';
import ArmyList from 'components/views/ArmyList';
import ArmiesIndex from 'components/views/ArmiesIndex';
import { v4 as uuidv4 } from 'uuid';
import armiesData from '../../data/armies.json';
import artefacts from '../../data/artefacts.json';
import calculateUnallocated from '../../helpers/unlocks';
import calculatePointsTotal from '../../helpers/points';
import calculateDuplicates from '../../helpers/duplicates';
import calculateDuplicateArtefacts from '../../helpers/artefacts';
import calculateUnitLimits from '../../helpers/limits';
import { applyArmyWideRulesToArmyList } from '../../helpers/army-wide-rules';

const Index = () => {
  const [armies, setArmies] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [display, setDisplay] = useState('armiesIndex');
  const [selectedArmy, setSelectedArmy] = useState(null);
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [fromArmyList, setFromArmyList] = useState(null);
  const [unallocated, setUnallocated] = useState({});
  const [points, setPoints] = useState({});
  const [tooManyDuplicates, setTooManyDuplicates] = useState(null);
  const [overLimits, setOverLimits] = useState(null);
  const [artefactDuplicates, setArtefactDuplicates] = useState(null);
  const [lastTab, setLastTab] = useState(null);

  const initialArmyListState = [];

  const addUnitToListDispatchFunction = (armyListState, action) => {
    const armyListIndex = armyListState.findIndex((armyList) => armyList.name === action.armyName);
    const selectedUnit = {
      unitId: action.unitId,
      unitDetails: action.unit.unitDetails,
      originalUnitDetails: action.unit.originalUnitDetails,
      selectedOptions: action.unit.selectedOptions,
      selectedArtefacts: action.unit.selectedArtefacts,
      unitCost: action.unit.unitCost,
      armyName: action.armyName,
      formation: action.unit.formation,
      formationUpgrade: action.unit.formationUpgrade,
      requiredOptions: action.unit.requiredOptions,
    };
    if (armyListIndex === -1) {
      return [...armyListState, { name: action.armyName, units: [selectedUnit] }];
    } else {
      return armyListState.map((army, index) => {
        if (index !== armyListIndex) return army;
        return applyArmyWideRulesToArmyList({
          ...army,
          units: [...army.units, selectedUnit],
        });
      });
    }
  };

  const editUnitDispatchFunction = (armyListState, action) => {
    const armyListIndex = armyListState.findIndex((armyList) => armyList.name === action.unit.armyName);
    return armyListState.map((army, index) => {
      if (index !== armyListIndex) return army;
      return {
        ...army,
        units: army.units.map((unit) => {
          if (unit.unitId !== action.unit.unitId) return unit;
          return action.unit;
        }),
      };
    });
  };

  const deleteUnitDispatchFunction = (armyListState, action) => {
    const armyListIndex = armyListState.findIndex((armyList) => armyList.name === action.unit.armyName);
    const newArmylistState = armyListState.map((army, index) => {
      if (index !== armyListIndex) return army;
      return applyArmyWideRulesToArmyList({
        ...army,
        units: army.units.filter((unit) => unit.unitId !== action.unit.unitId),
      });
    });
    const emptyArmy = newArmylistState.find((army) => army.units.length === 0);
    if (emptyArmy && selectedArmy === emptyArmy.name) {
      setFromArmyList(false);
      setSelectedArmy(null);
      setDisplay('armiesIndex');
      window.scrollTo(0, 0);
    }
    return newArmylistState.filter((army) => army.units.length !== 0);
  };

  const reducer = (armyListState, action) => {
    switch (action.type) {
      case 'addUnitToList':
        return addUnitToListDispatchFunction(armyListState, action);
      case 'editUnit':
        return editUnitDispatchFunction(armyListState, action);
      case 'deleteUnit':
        return deleteUnitDispatchFunction(armyListState, action);
      default:
        throw new Error();
    }
  };
  const [armyListState, dispatch] = useReducer(reducer, initialArmyListState);

  const init = () => {
    setIsLoaded(true);
    setArmies(armiesData);
    window.scrollTo(0, 0);
  };

  const processUnlocks = () => {
    const unallocated = armyListState.reduce((unallocatedObj, army) => {
      unallocatedObj[army.name] = calculateUnallocated(army.units);
      return unallocatedObj;
    }, {});
    setUnallocated(unallocated);
  };

  const processPoints = () => {
    const points = armyListState.reduce((pointsObj, army) => {
      pointsObj[army.name] = calculatePointsTotal(army.units);
      return pointsObj;
    }, {});
    setPoints(points);
    return points;
  };

  const processDuplicates = (newPoints) => {
    const pointsTotal = Object.keys(newPoints).reduce((sum, key) => {
      return (sum += newPoints[key]);
    }, 0);
    const isTooManyDuplicates = calculateDuplicates(
      pointsTotal,
      armyListState.reduce((flattenedUnits, army) => {
        return [...flattenedUnits, ...army.units];
      }, [])
    );
    setTooManyDuplicates(isTooManyDuplicates);
  };

  const processLimits = () => {
    const flattenedUnits = armyListState.reduce((unitsArr, army) => {
      return [...unitsArr, ...army.units];
    }, []);
    const overLimits = calculateUnitLimits(flattenedUnits);
    setOverLimits(overLimits);
  };

  const processArtefacts = () => {
    const flattenedUnits = armyListState.reduce((unitsArr, army) => {
      return [...unitsArr, ...army.units];
    }, []);
    const overLimit = calculateDuplicateArtefacts(flattenedUnits);
    setArtefactDuplicates(overLimit);
  };

  useEffect(init, []);
  useEffect(() => {
    processUnlocks();
    const newPoints = processPoints();
    processDuplicates(newPoints);
    processArtefacts();
    processLimits();
    if (armyListState.length) {
      setDisplay('armyList');
      window.scrollTo(0, 0);
    }
  }, [armyListState]);

  const handleArmyButtonClick = (armyName) => {
    setSelectedArmy(armyName);
    setDisplay('factionUnitsIndex');
    window.scrollTo(0, 0);
  };

  const handleAddUnitToListWithArmyAndUnit = (armyName, unit) => {
    dispatch({ type: 'addUnitToList', armyName, unit, unitId: uuidv4() });
  };

  const handleAddFormationToListWithArmyAndFormation = (armyName, formationUnits) => {
    formationUnits.forEach(unit => {
      dispatch({ type: 'addUnitToList', armyName, unit, unitId: uuidv4() });
    });
  };

  const handleDeleteFormationFromList = (formationUnits) => {
    formationUnits.forEach(unit => {
      dispatch({ type: 'deleteUnit', unit });
    });
  };

  const handleEditUnit = (unit) => {
    dispatch({ type: 'editUnit', unit });
  };

  const handleDeleteUnit = (unit) => {
    dispatch({ type: 'deleteUnit', unit });
  };

  const handleGoToDisplay = (display) => {
    setDisplay(display);
    window.scrollTo(0, 0);
  };

  const alreadyAddedFormations = armyListState.reduce((unitsArr, army) => {
    return [...unitsArr, ...army.units];
  }, []).reduce((formationLabels, unit) => {
    if (unit.formation && !formationLabels.includes(unit.formation)) formationLabels.push(unit.formation);
    return formationLabels;
  },[]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  } else if (display === 'armiesIndex') {
    return (
      <main>
        <header>
          <p className="switch-view">
            This listbuilder contains units available in Kings of War v3 rules, including FAQs up to 1.13 and Clash
            of Kings 2022. It is currently in Beta whilst the updates are being doublechecked and edge case functionality added.
          </p>
        </header>
        <ArmiesIndex
          armies={armies}
          handleArmyButtonClick={handleArmyButtonClick}
          goToDisplay={handleGoToDisplay}
        />
      </main>
    );
  } else if (display === 'factionUnitsIndex') {
    return (
      <main>
        <FactionUnitsIndex
          army={armies.find((army) => army.name === selectedArmy)}
          goToDisplay={handleGoToDisplay}
          selectUnit={setSelectedUnit}
          selectArmy={setSelectedArmy}
          fromArmyList={fromArmyList}
          unallocated={unallocated}
          displaySelectOtherArmy={false}
          tooManyDuplicates={tooManyDuplicates}
          defaultTab={lastTab || 'Inf/HI'}
          setLastTab={setLastTab}
          handleAddFormationToListWithArmyAndFormation={handleAddFormationToListWithArmyAndFormation}
          alreadyAddedFormations={alreadyAddedFormations}
        />
      </main>
    );
  } else if (display === 'unitSelect' || display === 'unitSelectFormationUnit' || display === 'deleteConfirm') {
    return (
      <main>
          <UnitSelect
            armyName={selectedArmy}
            unit={selectedUnit}
            goToDisplay={handleGoToDisplay}
            handleAddUnitToListWithArmyAndUnit={handleAddUnitToListWithArmyAndUnit}
            editingUnit={!!selectedUnit.unitId}
            hideDeleteButton={display === 'unitSelectFormationUnit'}
            editUnit={handleEditUnit}
            deleteUnit={handleDeleteUnit}
            deleteConfirm={display === 'deleteConfirm'}
            availableArtefacts={artefacts}
          />
      </main>
    );
  } else if (display === 'armyList') {
    return (
      <main>
        <ArmyList
          armyList={armyListState}
          goToDisplay={handleGoToDisplay}
          setFromArmyList={setFromArmyList}
          selectUnit={setSelectedUnit}
          unallocated={unallocated}
          points={points}
          tooManyDuplicates={tooManyDuplicates}
          artefactDuplicates={artefactDuplicates}
          overLimits={overLimits}
          handleDeleteFormationFromList={handleDeleteFormationFromList}
        />
      </main>
    );
  }
};

export default Index;
