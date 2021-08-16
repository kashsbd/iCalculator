import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Clipboard,
} from "react-native";
import { Center, NumberInput, NumberInputField, Button } from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";

const MultiplierScreen = () => {
  const [answer, setAnswer] = useState("");
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [degree, setDegree] = useState(0);

  const [secOne, setSecOne] = useState(0);
  const [minOne, setMinOne] = useState(0);



  const handleSecChange = (e) => {
    setSec(e.target.value);
  };

  const handleSecChangeOne = (e) => {
    setSecOne(e.target.value);
  };

  const handleMinChange = (e) => {
    setMin(e.target.value);
  };

  const handleMinChangeOne = (e) => {
    setMinOne(e.target.value);
  };

  const handleDegreeChange = (e) => {
    setDegree(e.target.value);
  };


  const copyToClipboard = () => Clipboard.setString(answer);

  const handleCalculate = () => {


  };

  return (
    <ScrollView style={styles.homeContainer}>
      <View>
        <Center>
          <View style={styles.numberInputWrapper}>
            <View style={styles.inputBox}>
              <Text style={styles.labelText}>Seconds:&nbsp; </Text>
              <NumberInput
                min={0}
                style={{ width: '90%', padding: 8 }}
              >
                <NumberInputField
                  name="sec"
                  _focus={{ padding: 2 }}
                  onChange={handleSecChange}
                />
              </NumberInput>
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.labelText}>Minutes:&nbsp; </Text>
              <NumberInput
                min={0}
                style={{ width: '90%', padding: 8 }}
              >
                <NumberInputField
                  name="min"
                  _focus={{ padding: 2 }}
                  onChange={handleMinChange}
                />
              </NumberInput>
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.labelText}>Degrees:&nbsp; </Text>
              <NumberInput
                min={0}
                style={{ width: '90%', padding: 8 }}
              >
                <NumberInputField
                  name="degree"
                  _focus={{ padding: 2 }}
                  onChange={handleDegreeChange}
                />
              </NumberInput>
            </View>
          </View>

          <View style={styles.numberInputWrapper}>
            <View style={styles.inputBox}>
              <Text style={styles.labelText}>Seconds:&nbsp; </Text>
              <NumberInput
                min={0}
                max={20}
                style={{ width: '90%', padding: 8 }}
              >
                <NumberInputField
                  name="secOne"
                  _focus={{ padding: 2, paddingRight: 0 }}
                  onChange={handleSecChangeOne}
                />
              </NumberInput>
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.labelText}>Minutes:&nbsp; </Text>
              <NumberInput
                min={0}
                style={{ width: '90%', padding: 8 }}
              >
                <NumberInputField
                  name="minOne"
                  _focus={{ padding: 2 }}
                  onChange={handleMinChangeOne}
                />
              </NumberInput>
            </View>
          </View>
          <View style={styles.calculateMe}>
            <Button
              style={{ backgroundColor: "#694fad" }}
              onPress={handleCalculate}
            >
              CALCULATE
            </Button>
          </View>
          <View style={styles.copyAns}>
            <Text style={styles.answer}>{answer}</Text>
            {answer.length > 0 ? (
              <TouchableOpacity onPress={copyToClipboard}>
                <Ionicons
                  style={styles.copyIcon}
                  name="copy-outline"
                  color="#694fad"
                  size={25}
                />
              </TouchableOpacity>
            ) : null}
          </View>
        </Center>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: "#fff",
    height: "100%",
  },
  typeStyle: {
    fontSize: 28,
    marginVertical: 30,
  },
  selectItem: {
    fontSize: 19,
  },
  numberInputWrapper: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 35,
    paddingLeft: 20,
  },
  calculateMe: {
    marginTop: 40,
  },
  errorText: {
    color: "red",
    marginTop: 5,
    alignSelf: "center",
  },
  errorTxt: {
    color: "red",
    alignSelf: "center",
    marginTop: -10,
    marginLeft: 7,
  },
  answer: {
    marginTop: 23,
    marginBottom: 23,
    fontSize: 20,
    color: "#694fad",
  },
  copyAns: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  copyIcon: {
    marginLeft: 15,
  },
  inputBox: {
    paddingTop: 17,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'

  },
  labelText: {
    paddingRight: 3,
    fontSize: 16
  }
});

export default MultiplierScreen;
