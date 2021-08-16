import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Clipboard } from 'react-native';
import { Center, Input, Button } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';




const MultiplierScreen = () => {

  const [answer, setAnswer] = useState(null);
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [error, setError] = useState({
    isValidDay: true,
    isValidMonth: true,
    isValidYear: true,
    day: '',
    month: '',
    year: '',

  });

  const [dayOne, setDayOne] = useState('');
  const [monthOne, setMonthOne] = useState('');
  const [yearOne, setYearOne] = useState('');
  const [errorOne, setErrorOne] = useState({
    isValidDay: true,
    isValidMonth: true,
    isValidYear: true,
    day: '',
    month: '',
    year: '',

  });




  const handleDayChange = (val) => {

    if (parseInt(val) > -1) {
      setError({
        ...error,
        isValidDay: true,
        day: ''
      });
      setDay(val);
    }

    else {
      setError({
        ...error,
        isValidDay: false,
        day: 'Enter Your Day'
      });
      setDay(val);
    }

  }

  const handleDayChangeOne = (val) => {

    if (parseInt(val) > -1) {
      setError({
        ...error,
        isValidDay: true,
        day: ''
      });
      setDayOne(val);
    }

    else {
      setErrorOne({
        ...error,
        isValidDay: false,
        day: 'Enter Your Day'
      });
      setDayOne(val);
    }

  }

  const handleMonthChange = (val) => {
    if (parseInt(val) > -1) {
      setError({
        ...error,
        isValidMonth: true,
        month: ''
      });
      setMonth(val);
    }

    else {
      setError({
        ...error,
        isValidMonth: false,
        month: 'Enter your Month'
      });
      setMonth(val);
    }
  }

  const handleMonthChangeOne = (val) => {
    if (parseInt(val) > -1) {
      setErrorOne({
        ...error,
        isValidMonth: true,
        month: ''
      });
      setMonthOne(val);
    }

    else {
      setErrorOne({
        ...error,
        isValidMonth: false,
        month: 'Enter Your Month'
      });
      setMonthOne(val);
    }
  }

  const handleYearChange = (val) => {
    if (parseInt(val) > -1) {
      setError({
        ...error,
        isValidYear: true,
        year: ''
      });
      setYear(val);
    }

    else {
      setError({
        ...error,
        isValidYear: false,
        year: 'Enter Your Year'
      });
      setYear(val);
    }
  }

  const handleYearChangeOne = (val) => {
    if (parseInt(val) > -1) {
      setErrorOne({
        ...error,
        isValidYear: true,
        year: ''
      });
      setYearOne(val);
    }

    else {
      setErrorOne({
        ...error,
        isValidYear: false,
        year: 'Enter Your Year'
      });
      setYearOne(val);
    }
  }


  const handleCalculate = () => {

    if (day.trim().length === 0) {
      setError({
        ...error,
        isValidDay: false,
        day: 'Enter Your Day'
      });
    }
    else if(month.trim().length === 0){
      setError({
        ...error,
        isValidMonth: false,
        month: 'Enter Your Month'
      });
    }
    else if(year.trim().length === 0){
      setError({
        ...error,
        isValidYear:false,
        year:'Enter Your Year'
      })
    }
    else if(dayOne.trim().length === 0){
      setErrorOne({
        ...error,
        isValidDay:false,
        day:'Enter Your Day'
      })
    }
    else if(monthOne.trim().length === 0){
      setErrorOne({
        ...error,
        isValidMonth:false,
        month:'Enter Your Month'
      })
    }
    else if(yearOne.trim().length === 0){
      setErrorOne({
        ...error,
        isValidYear:false,
        year:'Enter Your Year'
      })
    }
    else {
      let Answer = day / 365 + month / 12 + year;

      let AnswerOne = dayOne / 365 + monthOne / 12 + yearOne;

      let ans = Answer * AnswerOne;

      setAnswer(ans);
    }

  }

  return (
    <ScrollView style={styles.home_container}>
      <View>
        <Center>
          <View style={styles.inputWrapper}>
            <View style={{ paddingTop: 10 }}>
              <Input
                w="90%"
                placeholder="Enter Day"
                _light={{
                  placeholderTextColor: "gray",
                }}
                onChangeText={(value) => handleDayChange(value)}
                isInvalid={!error.isValidDay}
              />
              {
                !error.isValidDay ? <Text style={styles.errorText}>{error.day}</Text> : null
              }
            </View>
            <View style={{ paddingTop: 10 }}>
              <Input
                w="90%"
                placeholder="Enter Month"
                _light={{
                  placeholderTextColor: "gray",
                }}
                onChangeText={(value) => handleMonthChange(value)}
                isInvalid={!error.isValidMonth}

              />
              {
                !error.isValidMonth ? <Text style={styles.errorText}>{error.month}</Text> : null
              }
            </View>
            <View style={{ paddingTop: 12 }}>
              <Input
                w="90%"
                placeholder="Enter Year"
                _light={{
                  placeholderTextColor: "gray",
                }}
                onChangeText={(value) => handleYearChange(value)}
                isInvalid={!error.isValidYear}
              />
              {
                !error.isValidYear ? <Text style={styles.errorText}>{error.year}</Text> : null
              }
            </View>

          </View>

          <View style={styles.inputWrapper}>
            <View style={{ paddingTop: 10 }}>
              <Input
                w="90%"
                placeholder="Enter Day"
                _light={{
                  placeholderTextColor: "gray",
                }}
                onChangeText={(value) => handleDayChangeOne(value)}
                isInvalid={!errorOne.isValidDay}
              />
              {
                !errorOne.isValidDay ? <Text style={styles.errorText}>{errorOne.day}</Text> : null
              }
            </View>
            <View style={{ paddingTop: 10 }}>
              <Input
                w="90%"
                placeholder="Enter Month"
                _light={{
                  placeholderTextColor: "gray",
                }}
                onChangeText={(value) => handleMonthChangeOne(value)}
                isInvalid={!errorOne.isValidMonth}

              />
              {
                !errorOne.isValidMonth ? <Text style={styles.errorText}>{errorOne.month}</Text> : null
              }
            </View>
            <View style={{ paddingTop: 12 }}>
              <Input
                w="90%"
                placeholder="Enter Year"
                _light={{
                  placeholderTextColor: "gray",
                }}
                onChangeText={(value) => handleYearChangeOne(value)}
                isInvalid={!errorOne.isValidYear}
              />
              {
                !errorOne.isValidYear ? <Text style={styles.errorText}>{errorOne.year}</Text> : null
              }
            </View>

          </View>
          <View style={styles.calculateMe}>
            <Button style={{ backgroundColor: '#694fad' }} onPress={handleCalculate}>
              CALCULATE
            </Button>
          </View>
          <View style={styles.copy_ans}>
            <Text style={styles.answer}>{answer}</Text>
            {
              answer !== null ?
                <TouchableOpacity onPress={() => Clipboard.setString(answer)}>
                  <Ionicons style={styles.copy_icon} name="copy-outline" color='#694fad' size={25} />
                </TouchableOpacity>
                :
                null
            }

          </View>
        </Center>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  home_container: {
    backgroundColor: '#fff',
    height: '100%'
  },
  typeStyle: {
    fontSize: 28,
    marginVertical: 30
  },
  selectItem: {
    fontSize: 19
  },
  inputWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
    paddingLeft: 20


  },
  calculateMe: {
    marginTop: 40
  },
  errorText: {
    color: 'red',
    marginTop: 5,
    marginLeft: 16
  },
  errorTxt: {
    color: 'red',
    alignSelf: 'flex-start',
    marginTop: -10,
    marginLeft: 7
  },
  answer: {
    marginTop: 23,
    marginBottom: 23,
    fontSize: 20,
    color: '#694fad'
  },
  copy_ans: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  copy_icon: {
    marginLeft: 15
  },
})

export default MultiplierScreen;