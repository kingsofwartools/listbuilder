const calculateUnitLimits = (units) => {
  return units.reduce((overLimit, unit) => {
    const limitedOption = unit.selectedOptions.find((option) => option.limit);
    return (
      overLimit ||
      (unit.unitDetails.limit &&
        units.filter((u) => u.unitDetails.name === unit.unitDetails.name).length > unit.unitDetails.limit) ||
      (limitedOption &&
        units.filter(
          (u) =>
            u.unitDetails.name === unit.unitDetails.name &&
            u.selectedOptions.find((selectedOption) => limitedOption.name === selectedOption.name)
        ).length > limitedOption.limit)
    );
  }, false);
};

export default calculateUnitLimits;
