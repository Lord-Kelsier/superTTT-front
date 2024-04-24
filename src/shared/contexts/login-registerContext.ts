import React, { createContext } from 'react';

type logRegContextValue = {
  hasAnAcount: boolean;
  setHasAnAcount: React.Dispatch<React.SetStateAction<boolean>>;
};

const defaultValue: logRegContextValue = {
  hasAnAcount: true,
  /* eslint-disable-next-line -- Empty method para que aquellos fuera del
  contexto no puedan ejecutar algo inesperado */
  setHasAnAcount: () => {},
};

export default createContext(defaultValue);
