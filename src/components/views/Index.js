import React, { useState, useEffect, useReducer } from 'react';
import FactionUnitsIndex from 'components/views/FactionUnitsIndex';
import UnitSelect from 'components/views/UnitSelect';
import ArmyList from 'components/views/ArmyList';
import ArmiesIndex from 'components/views/ArmiesIndex';
import PlanesIndex from 'components/views/PlanesIndex';
import { PlaneContextProvider } from 'contexts/PlaneContextProvider';
import { v4 as uuidv4 } from 'uuid';
import armiesData from '../../data/armies.json';
import halpiPlanesData from '../../data/halpi-planes.json';
import artefacts from '../../data/artefacts.json';
import halpiArtefacts from '../../data/halpi-artefacts.json';
import calculateUnallocated from '../../helpers/unlocks';
import calculatePointsTotal from '../../helpers/points';
import calculateDuplicates from '../../helpers/duplicates';
import calculateDuplicateArtefacts from '../../helpers/artefacts';
import { enrichArmyDataForHalpisRift } from '../../helpers/parse-halpi';
import calculateUnitLimits from '../../helpers/limits';
import { Link } from 'react-router-dom';

const Index = ({ type = 'standard' }) => {
  const [armies, setArmies] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [display, setDisplay] = useState(type === 'halpi' ? 'planesIndex' : 'armiesIndex');
  const [selectedPlane, setSelectedPlane] = useState(null);
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
      selectedOptions: action.unit.selectedOptions,
      selectedArtefacts: action.unit.selectedArtefacts,
      unitCost: action.unit.unitCost,
      armyName: action.armyName,
    };
    if (armyListIndex === -1) {
      return [...armyListState, { name: action.armyName, units: [selectedUnit] }];
    } else {
      return armyListState.map((army, index) => {
        if (index !== armyListIndex) return army;
        return {
          ...army,
          units: [...army.units, selectedUnit],
        };
      });
    }
    // still need to set limits on number of living legends and living legend upgrades
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
      return {
        ...army,
        units: army.units.filter((unit) => unit.unitId !== action.unit.unitId),
      };
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

  const handlePlaneButtonClick = (planeName) => {
    setSelectedPlane(planeName);
    setArmies(
      enrichArmyDataForHalpisRift(armiesData, halpiPlanesData.find((plane) => plane.name === planeName).spells)
    );
    setDisplay('armiesIndex');
    window.scrollTo(0, 0);
  };

  const enrichedAvailableArtefacts = type === 'halpi' ? [...artefacts, ...halpiArtefacts] : [...artefacts];

  if (!isLoaded) {
    return <div>Loading...</div>;
  } else if (display === 'planesIndex') {
    return (
      <main>
        <header>
          <p className="switch-view">
            This listbuilder contains units available in the Halpi's Rift campaign, including FAQs up to 1.1.1 and Clash
            of Kings 2021. For standard KOW v3 listbuilding, <Link to="/kow-react-listbuilder">click here</Link>
          </p>
        </header>
        <PlanesIndex handlePlaneButtonClick={handlePlaneButtonClick} planes={halpiPlanesData} />
      </main>
    );
  } else if (display === 'armiesIndex') {
    return (
      <main>
        <header>
          {type === 'halpi' && (
            <p className="switch-view">
              This listbuilder contains units available in the Halpi's Rift campaign, including FAQs up to 1.1.1 and
              Clash of Kings 2021. For standard KOW v3 listbuilding, <Link to="/kow-react-listbuilder">click here</Link>
            </p>
          )}
          {type === 'standard' && (
            <p className="switch-view">
              This listbuilder contains units available in Kings of War v3 rules, including FAQs up to 1.1.1 and Clash
              of Kings 2021. For Halpi's Rift campaign listbuilding,{' '}
              <Link to="/kow-react-listbuilder/halpis-rift">click here</Link>
            </p>
          )}
        </header>
        <ArmiesIndex
          armies={armies}
          handleArmyButtonClick={handleArmyButtonClick}
          halpi={type === 'halpi'}
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
        />
      </main>
    );
  } else if (display === 'unitSelect' || display === 'deleteConfirm') {
    return (
      <main>
        <PlaneContextProvider selectedPlane={halpiPlanesData.find((plane) => plane.name === selectedPlane)}>
          <UnitSelect
            armyName={selectedArmy}
            unit={selectedUnit}
            goToDisplay={handleGoToDisplay}
            handleAddUnitToListWithArmyAndUnit={handleAddUnitToListWithArmyAndUnit}
            editingUnit={!!selectedUnit.unitId}
            editUnit={handleEditUnit}
            deleteUnit={handleDeleteUnit}
            deleteConfirm={display === 'deleteConfirm'}
            availableArtefacts={enrichedAvailableArtefacts}
          />
        </PlaneContextProvider>
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
        />
      </main>
    );
  }
};

export default Index;
