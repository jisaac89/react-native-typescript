import React from 'react';
import { Render } from './src/layout/Render';
import { Root } from './src/layout/Root';

export default function App(): React.ReactNode {
  return (
    <Root>
      <Render />
    </Root>
  );
}
