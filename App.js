import React from "react";
import AppRoot from "./src/AppRoot";
import AuthState from "./src/context/auth/AuthState";

export default function App() {
  return (
    <AuthState>
      <AppRoot />
    </AuthState>
  );
}
