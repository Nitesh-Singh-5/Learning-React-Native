import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert, SafeAreaView } from 'react-native';

/*****************        Components         ********************/
class MyData extends React.Component {

  state = {
    name: "Mukesh",
    status: "coder",
  }
  handleTest = () => {
    this.setState({
      name: "Suresh",
      status: "single",
    })
    console.log("updated", this.state);
  }

  render() {
    return (
      <>
        {/* <Text> Class Based Component </Text> */}
        {/* <Text>{this.props.name}</Text>
        <Text>{this.props.status}</Text> */}
        <Text>{this.state.name}</Text>
        <Text>{this.state.status}</Text>
        <Button title="click me" onPress={this.handleTest} />

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
      {/* <Text>Hello World ! </Text>
      <StatusBar style="auto" />

      <Text>{Math.random()}</Text>
      <Text> {dispData} </Text> */}

      {/* <MyData name="mukesh" status="coder" />
      <MyData name="Ramesh" status="Single" />
      <MyData name="Suresh" status="Commited" /> */}
      <MyData />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});
