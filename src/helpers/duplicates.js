const types = ['Hero', 'War Engine', 'Monster', 'Titan'];

const calculateDuplicates = (pointsTotal, units) => {
  const maxOfAnyHMWT = pointsTotal < 1500 ? 1 : Math.floor(pointsTotal / 1000) + 1;
  return units.reduce((isTooMany, unit) => {
    return (
      isTooMany ||
      (types.includes(unit.unitDetails.size) &&
        units.filter((u) => u.unitDetails.name === unit.unitDetails.name).length > maxOfAnyHMWT)
    );
  }, false);
};

export default calculateDuplicates;
