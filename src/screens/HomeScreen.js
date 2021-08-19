import React, { useState } from "react";
import {
  Center,
  Select,
  VStack,
  CheckIcon,
  NumberInput,
  NumberInputField,
  Button
} from "native-base";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Clipboard,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const HomeScreen = () => {
  const [answer, setAnswer] = useState("");
  const [typeValue, setTypeValue] = useState("");
  const [day, setDay] = useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  const [error, setError] = useState({
    isValidType: true,
    type: "",
  });

  const handleTypeChange = (val) => {
    if (val.trim().length === 0) {
      setError({
        ...error,
        isValidType: false,
        type: "Please Select One",
      });
      setTypeValue(val);
    } else {
      setError({
        ...error,
        isValidType: true,
        type: "",
      });
      setTypeValue(val);
    }
  };

  const handleDayChange = (e) => {
    setDay(e.target.value);
  };

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  };

  const handleYearChange = (e) => {
    setYear(e.target.value)
  };

  const handleValidation = () => {
    if (typeValue.trim().length === 0) {
      setError({
        ...error,
        isValidType: false,
        type: "Please Select One",
      });
    }
    else {
      handleCalculate();
    }
  };

  const copyToClipboard = () => Clipboard.setString(answer);

  const handleCalculate = () => {
    let sumDay = 0;
    let sumMonth = 0;
    let sumYear = 0;

    if (typeValue === "sun") {
      sumDay = +day + 90;
      sumMonth = +month + 57;
      sumYear = +year + 1;
    } else if (typeValue === "moon") {
      sumDay = +day + 0;
      sumMonth = +month + 60;
      sumYear = +year + 5;
    } else if (typeValue === "mangal") {
      sumDay = +day + 120;
      sumMonth = +month + 44;
      sumYear = +year + 3;
    } else if (typeValue === "rahu") {
      sumDay = +day + 120;
      sumMonth = +month + 44;
      sumYear = +year + 14;
    } else if (typeValue === "guru") {
      sumDay = +day + 90;
      sumMonth = +month + 57;
      sumYear = +year + 11;
    } else if (typeValue === "sani") {
      sumDay = +day + 60;
      sumMonth = +month + 46;
      sumYear = +year + 15;
    } else if (typeValue === "buda") {
      sumDay = +day + 120;
      sumMonth = +month + 68;
      sumYear = +year + 11;
    } else {
      sumDay = +day + 120;
      sumMonth = +month + 44;
      sumYear = +year + 3;
    }

    while (sumDay > 29) {
      sumDay = sumDay - 29;
      sumMonth++;
    }

    while (sumMonth > 11) {
      sumMonth = sumMonth - 11;
      sumYear++;
    }

    setAnswer(`${sumDay}/${sumMonth}/${sumYear}`);
  };

  return (
    <ScrollView style={styles.homeContainer}>
      <View>
        <Center>
          <Text style={styles.typeStyle}>Choose Type</Text>
          <VStack
            style={{ width: "40%", display: "flex", alignItems: "center" }}
          >
            <Select
              selectedValue={typeValue}
              isInvalid={!error.isValidType}
              minWidth={"100%"}
              accessibilityLabel="Select Type"
              placeholderTextColor="gray"
              placeholder="Select One"
              onValueChange={handleTypeChange}
              _selectedItem={{
                bg: "cyan.600",
                fontSize: 20,
                endIcon: <CheckIcon size={4} />,
              }}
            >
              <Select.Item label="Sun" value="sun" />
              <Select.Item label="Moon" value="moon" />
              <Select.Item label="Mangal" value="mangal" />
              <Select.Item label="Rahu" value="rahu" />
              <Select.Item label="Guru" value="guru" />
              <Select.Item label="Sani" value="sani" />
              <Select.Item label="Buda" value="buda" />
              <Select.Item label="Ketu" value="ketu" />
              <Select.Item label="Sukra" value="sukra" />
            </Select>
            {!error.isValidType ? (
              <Text style={styles.errorTxt}>{error.type}</Text>
            ) : null}
          </VStack>

          <View style={styles.numberInputWrapper}>
            <View style={styles.inputBox}>
              <Text style={styles.labelText}>Day:&nbsp;&nbsp; </Text>
              <NumberInput
                min={0}
                style={{ width: '90%', padding: 8 }}
              >
                <NumberInputField
                  name="day"
                  _focus={{ padding: 2 }}
                  onChange={handleDayChange}
                />
              </NumberInput>
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.labelText}>Month: </Text>
              <NumberInput
                min={0}
                style={{ width: '90%', padding: 8 }}
              >
                <NumberInputField
                  name="month"
                  _focus={{ padding: 2 }}
                  onChange={handleMonthChange}
                />
              </NumberInput>
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.labelText}>Year:&nbsp;&nbsp; </Text>
              <NumberInput
                min={0}
                style={{ width: '90%', padding: 8 }}
              >
                <NumberInputField
                  name="year"
                  _focus={{ padding: 2 }}
                  onChange={handleYearChange}
                />
              </NumberInput>
            </View>
          </View>

          <View style={styles.calculateMe}>
            <Button
              style={{ backgroundColor: "#694fad" }}
              onPress={handleValidation}
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
    marginVertical: 50,
  },
  selectItem: {
    fontSize: 19,
  },
  numberInputWrapper: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    marginTop: "1%",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 20,
  },
  inputBox: {
    paddingTop: 17,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'

  },

  calculateMe: {
    marginTop: 45,
  },
  errorText: {
    color: "red",
    marginTop: 5,
    alignSelf: "center",
  },
  errorTxt: {
    color: "red",
    alignSelf: "center",
    marginTop: 5,
  },
  answer: {
    marginVertical: 23,
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
  labelText: {
    paddingRight: 3,
    fontSize: 16
  }

});

export default HomeScreen;
