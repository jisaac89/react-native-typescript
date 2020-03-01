import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { FunctionComponent } from 'react';
import { About } from '../../src/screens/About';
import { Home } from '../../src/screens/Home';

const Stack = createStackNavigator();

const Navigation: FunctionComponent = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { Navigation };
