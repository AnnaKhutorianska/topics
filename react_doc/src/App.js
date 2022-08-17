import React from "react";
import HOC from "./components/Higher Order Components/HOC";
// import ForwardingRefs from "./components/ForwardingRefs/ForwardingRefs";
// import { ContextTheme } from './components/Context/Context'
// import Profile from "./components/Context/Profile";
// import Theme from "./components/Context/Theme";
// import { Users } from "./components/ErrorBoundaries/Users";
// import CompositionvsInheritance from "./components/CompositionvsInheritance/CompositionvsInheritance";
// import Form from "./components/Form/Form";
// import Uncontroled from "./components/Form/Uncontroled";
// import LiftingStateUp from "./components/LiftingStateUp/LiftingStateUp";
// import ListAndKeys from './components/ListAndKeys/ListAndKeys';
// import CountriesList from './components/ListAndKeys/CountriesList';


function App() {
  return (
    <div>
      {/* <ContextTheme>
        <Profile />
        <Theme />
      </ContextTheme> */}
      {/* <Users /> */}
      {/* <ForwardingRefs /> */}
      <HOC />
    </div>
  );
}

export default App;
