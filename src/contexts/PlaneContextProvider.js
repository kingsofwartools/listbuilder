import React from 'react';

export const PlaneContext = React.createContext(null);

export const PlaneContextProvider = ({ children, selectedPlane }) => {
  return <PlaneContext.Provider value={selectedPlane}>{children}</PlaneContext.Provider>;
};
