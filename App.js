import React from "react";
import { NativeBaseProvider } from "native-base";
import BottombarNavigator from "./src/navigator/BottombarNavigator";

import * as serviceWorkerRegistration from "./src/serviceWorkerRegistration";

const App = () => {
  return (
    <NativeBaseProvider>
      <BottombarNavigator />
    </NativeBaseProvider>
  );
};

export default App;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
