import * as React from 'react';
import { StyleSheet } from 'react-native';
import { borderColor } from 'styled-system';

import LoginInputs from '../components/Auth/LoginInputs';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function Login({ navigation }: RootTabScreenProps<'Login'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <LoginInputs path="/screens/Login.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dashed',
    borderColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
