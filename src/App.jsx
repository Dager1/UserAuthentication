import { useState } from "react";
import Calendar from "./components/Calendar";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
function App() {
  return (
    <div>
      <SignUp />
      <br />
      <Login />
    </div>
  );
}

export default App;
