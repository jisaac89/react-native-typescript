import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const About: FunctionComponent = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>About</Text>
    </View>
  );
};

export { About };
