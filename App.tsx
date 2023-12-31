import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
});

type GreetingProps = {
  name: string;
  lastName: string;
}


const Greeting = (props: GreetingProps) => {
  return(
    <View style={styles.center}>
      <Text>Hello, {props.name} {props.lastName}</Text>
    </View>
  );
};

const LotsOfGreetings = () => {
  return (
    <View style={[styles.center, {top: 50}]}>
      <Greeting name="Test" lastName="test"/>
      <Greeting name="test2" lastName="test2"/>
      <Greeting name="test2" lastName="test2"/>
    </View>
  );
};

export default LotsOfGreetings;
