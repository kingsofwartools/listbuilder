const calculatePointsTotal = (unitsArr) => {
  return unitsArr.reduce((total, unit) => {
    total += unit.unitCost;
    return total;
  }, 0);
};

export default calculatePointsTotal;
