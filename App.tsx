import React, { useEffect } from "react";
import * as Updates from "expo-updates";
import { StatusBar } from "expo-status-bar";

import Routes from "./src/routes";

export default function App() {
  useEffect(() => {
    async function updateApp() {
      const { isAvailable } = await Updates.checkForUpdateAsync();
      if (isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    }
    if (process.env.NODE_ENV !== 'development') {
      updateApp();
    }
  }, []);

  return (
    <>
      <Routes />
      <StatusBar style="light" hidden={false} />
    </>
  );
}
