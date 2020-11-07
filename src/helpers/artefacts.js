const calculateDuplicateArtefacts = (units) => {
  const artefacts = {};
  units.forEach((unit) => {
    unit.selectedArtefacts.forEach((artefact) => {
      if (artefacts[artefact.name]) {
        artefacts[artefact.name]++;
      } else {
        artefacts[artefact.name] = 1;
      }
    });
  });
  return !!Object.values(artefacts).filter((number) => number > 1).length;
};

export default calculateDuplicateArtefacts;
