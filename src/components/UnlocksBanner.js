import React from 'react';
import Banner from 'components/common/Banner';

const UnlocksBanner = ({ armyName = null, unallocated = {} }) => {
  const tooManyHWMT = unallocated[armyName] && unallocated[armyName].hwmt;
  const tooManyTroopsOrIrregular = unallocated[armyName] && unallocated[armyName].troopOrIrregular;

  return (
    <div className="unlocks-banner">
      {tooManyHWMT && (
        <Banner text="Not enough unlocks for the amount of Heroes/War Engines/Monsters/Titans in your list" />
      )}
      {tooManyTroopsOrIrregular && (
        <Banner text="Not enough unlocks for the amount of Troops or Irregular Units in your list" />
      )}
    </div>
  );
};

export default UnlocksBanner;
