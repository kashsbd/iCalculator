import React from 'react';
import { NativeBaseProvider } from 'native-base';
import BottombarNavigator from './Navigator/BottombarNavigator';


const App = (props) => {
  return (
    <NativeBaseProvider>
      <BottombarNavigator />
    </NativeBaseProvider>
  );
}

export default App;
