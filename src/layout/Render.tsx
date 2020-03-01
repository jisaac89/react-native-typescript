import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useAppStore } from '../../src/hooks/useAppStore';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export const Render: FunctionComponent = (): JSX.Element => {
  const { isLoading } = useAppStore();
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app! It is set to loading {isLoading ? 'true' : 'false'}</Text>
    </View>
  );
};
