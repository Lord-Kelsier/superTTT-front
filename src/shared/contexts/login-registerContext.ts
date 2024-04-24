import React, { createContext } from 'react';

/* eslint-disable-next-line -- Empty method para que aquellos fuera del
  contexto no puedan ejecutar algo inesperado */
const defaultValue: React.Dispatch<React.SetStateAction<boolean>> = () => {};

export default createContext(defaultValue);
