import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert, SafeAreaView, Image } from 'react-native';

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
    // console.log("updated", this.state);
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


/*********      Button          ********/


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  stretch: {
    width: 50,
    height: 200,
    resizeMode: 'stretch',
  },

});


const Separator = () => (
  <View style={styles.separator} />
);
const ButtonDetail = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.title}>
            The title and onPress handler are required. It is recommended to set accessibilityLabel to help make your app usable by everyone.
          </Text>
          <Button
            title="Press me"
            onPress={() => Alert.alert('Simple Button pressed')}
          />
        </View>
        <Separator />
        <View>
          <Text style={styles.title}>
            Adjust the color in a way that looks standard on each platform. On  iOS, the color prop controls the color of the text. On Android, the color adjusts the background color of the button.
          </Text>
          <Button
            title="Press me"
            color="#f194ff"
            onPress={() => Alert.alert('Button with adjusted color pressed')}
          />
        </View>
        <Separator />
        <View>
          <Text style={styles.title}>
            All interaction for the component are disabled.
          </Text>
          <Button
            title="Press me"
            disabled
            onPress={() => Alert.alert('Cannot press this one')}
          />
        </View>
        <Separator />
        <View>
          <Text style={styles.title}>
            This layout strategy lets the title define the width of the button.
          </Text>
          <View style={styles.fixToText}>
            <Button
              title="Left button"
              onPress={() => Alert.alert('Left button pressed')}
            />
            <Button
              title="Right button"
              onPress={() => Alert.alert('Right button pressed')}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  )
}
/*              Image Details                */


const DisplayAnImageWithStyle = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.stretch}
        source={require('./assets/icon.png')}
      />
    </View>
  );
}

/*          APP Function       */

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
      <ButtonDetail />
      <DisplayAnImageWithStyle />
    </View>
  );
}

