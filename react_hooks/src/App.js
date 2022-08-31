import PostsList from "./Components/CustomHook/PostsList";
import UsersList from "./Components/CustomHook/UsersList";
import UseEffectComp from "./Components/UseEffectComp/UseEffectComp";
import UseStateComp from "./Components/UseStateComp/UseStateComp";

function App() {
  return (
    <div>
      {/* <UseStateComp /> */}
      {/* <UseEffectComp /> */}
      <UsersList />
      <br/>
      <PostsList />
    </div>
  );
}

export default App;
