import React from "react";
import AlarmDetailsInput from "../common/components/Alarm/AlarmDetailsInput/AlarmDetailsInput";
import AlarmList from "../common/components/Alarm/AlarmList/AlarmList";
import Clock from "../common/components/Clock/Clock";

function App() {

  return (
    <>
      <Clock/>
      <AlarmDetailsInput/>
      <AlarmList/>
    </>
  );
}

export default App;
