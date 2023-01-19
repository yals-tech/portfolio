import React from 'react';
import { THEME_CONSTANT } from './app-constants';
const context = { theme: THEME_CONSTANT.DARK_THEME };
export const AppContext = React.createContext(context);
