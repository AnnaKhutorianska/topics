import PostsList from "./Components/CustomHook/PostsList";
import UsersList from "./Components/CustomHook/UsersList";
import Wrapper from "./Components/useContextComp/Wrapper";
import UseEffectComp from "./Components/UseEffectComp/UseEffectComp";
import UseStateComp from "./Components/UseStateComp/UseStateComp";
import { ContextPeople } from './Components/useContextComp/Context'
import UseReducerComp from "./Components/UseReducerComp/UseReducerComp";
import UseCallbackComp from "./Components/UseCallbackComp/UseCallbackComp";
import UseMemoComp from "./Components/UseMemoComp/UseMemoComp";
import ImperativeParent from "./Components/UseImperativeHeandlerComp/UseImperativeHeandlerComp";
import UseLayoutEffectComp from "./Components/UseLayoutEffectComp/UseLayoutEffectComp";
import UseDeferredValueComp from "./Components/UseDeferredValueComp/UseDeferredValueComp";
import UseTransitionComp from "./Components/UseTransitionComp/UseTransitionComp";

function App() {
  return (
    <div>
      {/* <UseStateComp /> */}
      {/* <UseEffectComp /> */}
      {/* <UsersList />
      <br/>
      <PostsList /> */}
      {/* <ContextPeople>
        <Wrapper />
      </ContextPeople> */}
      {/* <UseReducerComp /> */}
      {/* <UseCallbackComp /> */}
      {/* <UseMemoComp /> */}
      {/* <ImperativeParent /> */}
      {/* <UseLayoutEffectComp /> */}
      {/* <UseDeferredValueComp /> */}
      <UseTransitionComp />
    </div>
  );
}

export default App;
