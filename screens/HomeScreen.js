import React, { useState } from "react";
import { Center, Select, VStack, CheckIcon, Input, Button } from "native-base";
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
  const [answer, setAnswer] = useState(null);
  const [typeValue, setTypeValue] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [error, setError] = useState({
    isValidDay: true,
    isValidMonth: true,
    isValidYear: true,
    isValidType: true,
    day: "",
    month: "",
    year: "",
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

  const handleDayChange = (val) => {
    if (parseInt(val) > -1) {
      setError({
        ...error,
        isValidDay: true,
        day: "",
      });
      setDay(val);
    } else {
      setError({
        ...error,
        isValidDay: false,
        day: "Enter Your Day",
      });
      setDay(val);
    }
  };

  const handleMonthChange = (val) => {
    if (parseInt(val) > -1) {
      setError({
        ...error,
        isValidMonth: true,
        month: "",
      });
      setMonth(val);
    } else {
      setError({
        ...error,
        isValidMonth: false,
        month: "Enter Your Month",
      });
      setMonth(val);
    }
  };

  const handleYearChange = (val) => {
    if (parseInt(val) > -1) {
      setError({
        ...error,
        isValidYear: true,
        year: "",
      });
      setYear(val);
    } else {
      setError({
        ...error,
        isValidYear: false,
        year: "Enter Your Year",
      });
      setYear(val);
    }
  };

  const handleValidation = () => {
    if (typeValue.trim().length === 0) {
      setError({
        ...error,
        isValidType: false,
        type: "Please Select One",
      });
    } else if (day.trim().length === 0) {
      setError({
        ...error,
        isValidDay: false,
        day: "Enter Your Day",
      });
    } else if (month.trim().length === 0) {
      setError({
        ...error,
        isValidMonth: false,
        month: "Enter Your Month",
      });
    } else if (year.trim().length === 0) {
      setError({
        ...error,
        isValidYear: false,
        year: "Enter Your Year",
      });
    } else {
      handleCalculate();
    }
  };

  const copyToClipboard = () => Clipboard.setString(answer);

  const handleCalculate = () => {
    let sumDay;
    let sumMonth;
    let sumYear;

    if (typeValue === "sun") {
      sumDay = day + 90;
      sumMonth = month + 57;
      sumYear = year + 1;
    } else if (typeValue === "moon") {
      sumDay = day + 0;
      sumMonth = month + 60;
      sumYear = year + 5;
    } else if (typeValue === "mangal") {
      sumDay = day + 120;
      sumMonth = month + 44;
      sumYear = year + 3;
    } else if (typeValue === "rahu") {
      sumDay = day + 120;
      sumMonth = month + 44;
      sumYear = year + 14;
    } else if (typeValue === "guru") {
      sumDay = day + 90;
      sumMonth = month + 57;
      sumYear = year + 11;
    } else if (typeValue === "sani") {
      sumDay = day + 60;
      sumMonth = month + 46;
      sumYear = year + 15;
    } else if (typeValue === "buda") {
      sumDay = day + 120;
      sumMonth = month + 68;
      sumYear = year + 11;
    } else {
      sumDay = day + 120;
      sumMonth = month + 44;
      sumYear = year + 3;
    }

    const Answer = sumDay / 365 + sumMonth / 12 + sumYear;
    setAnswer(Answer);
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

          <View style={styles.inputWrapper}>
            <View style={{ paddingTop: 17 }}>
              <Input
                w="90%"
                placeholder="Enter Day"
                _focus={{ borderColor: "#694fad" }}
                _light={{
                  placeholderTextColor: "gray",
                }}
                onChangeText={handleDayChange}
                isInvalid={!error.isValidDay}
              />
              {!error.isValidDay ? (
                <Text style={styles.errorText}>{error.day}</Text>
              ) : null}
            </View>
            <View style={{ paddingTop: 17 }}>
              <Input
                w="90%"
                placeholder="Enter Month"
                _light={{
                  placeholderTextColor: "gray",
                }}
                onChangeText={handleMonthChange}
                isInvalid={!error.isValidMonth}
              />
              {!error.isValidMonth ? (
                <Text style={styles.errorText}>{error.month}</Text>
              ) : null}
            </View>
            <View style={{ paddingTop: 17 }}>
              <Input
                w="90%"
                placeholder="Enter Year"
                _light={{
                  placeholderTextColor: "gray",
                }}
                onChangeText={handleYearChange}
                isInvalid={!error.isValidYear}
              />
              {!error.isValidYear ? (
                <Text style={styles.errorText}>{error.year}</Text>
              ) : null}
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
            {answer !== null ? (
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
  inputWrapper: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    marginTop: "1%",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 20,
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
});

export default HomeScreen;
