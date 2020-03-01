import React, { FunctionComponent } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { INavigation } from 'src/common/types';
import { useAppStore } from '../hooks/useAppStore';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const Home: FunctionComponent<INavigation> = ({ navigation }): JSX.Element => {
  const { isLoading } = useAppStore();
  return (
    <View style={styles.container}>
      {!isLoading ? <Button title="Go to About" onPress={() => navigation.navigate('About')} /> : <Text>Loading</Text>}
    </View>
  );
};

export { Home };
