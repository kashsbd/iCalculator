import React from "react";
import { NativeBaseProvider } from "native-base";
import BottombarNavigator from "./navigator/BottombarNavigator";

const App = () => {
  return (
    <NativeBaseProvider>
      <BottombarNavigator />
    </NativeBaseProvider>
  );
};

export default App;
