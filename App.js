import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class MyData extends React.Component {
  render() {
    return (
      <>
        {/* <Text> Class Based Component </Text> */}
        <Text>{this.props.name}</Text>
        <Text>{this.props.status}</Text>

      </>
    )
  }
}

export default function App() {
  const disp = ['eat', 'code', 'sleep']

  const dispData = disp.map(data => {
    return <Text> {data} </Text>
  });

  return (
    <View style={styles.container}>
      <Text>Hello World ! </Text>
      <StatusBar style="auto" />

      <Text>{Math.random()}</Text>
      <Text> {dispData} </Text>

      <MyData name="mukesh" status="coder" />
      <MyData name="Ramesh" status="Single" />
      <MyData name="Suresh" status="Commited" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
