import React, { createContext, useContext, useState } from 'react';

export const SessionContext = createContext({});

export const SessionProvider: React.ElementType = ({
  children,
}: {
  children: React.ElementType;
}): JSX.Element => {
  return (
    <SessionContext.Provider value={useState(null)}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSessionContext = useContext(SessionContext);
