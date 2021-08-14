import React from 'react';
import TopbarNavigator from './Navigator/TopbarNavigator';
import { NativeBaseProvider } from 'native-base';


const App = () => {
  return (
    <NativeBaseProvider>
       <TopbarNavigator />
    </NativeBaseProvider>
  );
}

export default App;
