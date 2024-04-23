import React, { createContext, useState } from 'react';

type logRegContextValue = {
  hasAnAcount: boolean;
  setHasAnAcount: React.Dispatch<React.SetStateAction<boolean>>;
};

const defaultValue: logRegContextValue = {
  hasAnAcount: true,
  setHasAnAcount: () => {},
};

export const loginRegisterContext = createContext(defaultValue);
