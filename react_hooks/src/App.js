import PostsList from "./Components/CustomHook/PostsList";
import UsersList from "./Components/CustomHook/UsersList";
import Wrapper from "./Components/useContextComp/Wrapper";
import UseEffectComp from "./Components/UseEffectComp/UseEffectComp";
import UseStateComp from "./Components/UseStateComp/UseStateComp";
import { ContextPeople } from './Components/useContextComp/Context'
import UseReducerComp from "./Components/UseReducerComp/UseReducerComp";

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
      <UseReducerComp />
      
    </div>
  );
}

export default App;
