import React from "react";
import Home from "./screen";
import { StoreProvider } from "./collection/context";
import { initialState } from "./collection/initialStates";
import { useData, useTheme } from "./collection/dispatcher";
import "./index.css";

export default function Assingment12() {
  const { dataState, dataDispatch } = useData();
  const { themeState, themeDispatch } = useTheme();
  return (
    <div>
      <StoreProvider
        initialState={{ ...initialState, ...dataState, ...themeState }}
        dispatchObjects={{ dataDispatch, themeDispatch }}
      >
        <Home />
      </StoreProvider>
    </div>
  );
}