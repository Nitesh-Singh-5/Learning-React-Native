import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert, SafeAreaView, Image, FlatList, TouchableOpacity, ScrollView, Modal, Pressable } from 'react-native';

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
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
    </View>
  );
}

/*            Flat List               */

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

const FlatlistDetail = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};


const ModalDetail = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

/*          APP Function       */

export default function App() {
  const disp = ['eat', 'code', 'sleep']

  const dispData = disp.map(data => {
    return <Text> {data} </Text>
  });

  return (
    <ScrollView>
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
        <FlatlistDetail />
        <ModalDetail />
      </View>
    </ScrollView>
  );
}


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
  tinyLogo: {
    width: 50,
    height: 50,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  // title: {
  //   fontSize: 32,
  // },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
