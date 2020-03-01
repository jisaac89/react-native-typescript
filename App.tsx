import React from 'react';
import { Navigation } from './src/layout/Navigation';
import { Root } from './src/layout/Root';

export default function App(): React.ReactNode {
  return (
    <Root>
      <Navigation />
    </Root>
  );
}
