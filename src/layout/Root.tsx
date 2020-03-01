import React, { FunctionComponent } from 'react';
import { AppProvider } from '../contexts/appContext';

const Root: FunctionComponent = ({ children }): JSX.Element => {
  return (
    <AppProvider>
      <>{children}</>
    </AppProvider>
  );
};

export { Root };
