import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  ListView,
} from "react-native";
import Header from "./components/header";
import { Dimensions } from "react-native";
//bubble 55, insertion 38, comb 30, shell 25,
const height = Math.round(Dimensions.get("window").height);
const width = Math.round(Dimensions.get("window").width);

let loaded = false;
export default function App() {
  const [array, setArray] = useState([]);
  const [slider, setSlider] = useState(22);

  const addNumber = () => {
    setArray([]);
    for (let i = 1; i <= slider; i++) {
      //let x = (slider - i) * 30;
      let x = Math.round(Math.random() * height * 0.8 + 20);
      let object = { title: x, color: "#30475e", key: i };
      setArray((currentArray) => {
        return [object, ...currentArray];
      });
    }
  };

  if (loaded == false) {
    addNumber();
    loaded = true;
  }
  return (
    <View style={styles.container}>
      <Header
        array={array}
        setArray={setArray}
        slider={slider}
        setSlider={setSlider}
        addNumber={addNumber}
      />
      <View style={styles.contentContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={array}
          numColumns={40}
          renderItem={({ item }) => (
            <View
              style={{
                borderRadius: 4,
                elevation: 3,
                shadowOffset: { width: 2, height: 2 },
                shadowColor: "#333",
                shadowOpacity: 0.3,
                shadowRadius: 2,
                margin: 2,
                //flex: 1,
                height: item.title,
                width: width / 2 / slider,
                backgroundColor: item.color,
              }}
            >
              <Text style={styles.cardComponent}></Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ececec",
  },
  contentContainer: {
    marginHorizontal: width / 8,
    flex: 1,
    alignItems: "center",
  },
  cardComponent: {
    padding: 5,
    margin: 5,
  },
});
