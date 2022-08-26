import React, { useState, unstable_Profiler as Profiler } from "react";
import CurrentRef from "./components/advanced/CurrentRef/CurrentRef";
// import Component from "./components/advanced/Portals/Portals";
// import ReactWithoutES6 from "./components/advanced/React Without ES6/ReactWithoutES6";
// import ReactWithoutJSX from "./components/advanced/React Without JSX/ReactWithoutJSX";
// import CallbackRef from "./components/advanced/Refs and the DOM/CallbackRef";
// import ClassRef from "./components/advanced/Refs and the DOM/ClassRef";
// import FuncRef from "./components/advanced/Refs and the DOM/FuncRef";
// import { FirstList, SecondList } from "./components/advanced/RenderProps/RenderProps";
import UncontrolledComponents from "./components/advanced/Uncontrolled Components/UncontrolledComponents";
// import PropTypesComponent from "./components/PropTypes/PropTypes";
// import PropTypesMain from "./components/PropTypes/PropTypesMain";
// import HOC from "./components/advanced/Higher Order Components/HOCFunc/HOC";
// import ProfilerComp from "./components/advanced/Profiler/Profiler";
// import Component from "./components/advanced/Portals/Portals";
// import Parent from "./components/advanced/Portals/Portals2";
// import HOC from "./components/Higher Order Components/HOC";
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
import "./components/advanced/Web Components/WebComponent";
import { ShadowView, WebComponent } from "./components/advanced/Web Components/WebComponent";

function App() {
  return (
     <div>
      {/* <Component />
      <br/>
      <br/>
      <br/>
      <br/>
      <div>
        modal here
        <br/>
        <div id="modalRoot"></div>
      </div> */}
      {/* <ReactWithoutES6 count={10} /> */}
      {/* <ReactWithoutJSX name='test test' /> */}
      {/* <ClassRef />
      <FuncRef />
      <CallbackRef /> */}
      {/* <FirstList />
      <SecondList /> */}
      {/* <UncontrolledComponents /> */}
      {/* <CurrentRef />
       */}
    {/* <web-component></web-component>
     */}
    <WebComponent />
    </div>

  );
}

export default App;
