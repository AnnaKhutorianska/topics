import ErrorBoundaries from "./Components/ErrorBoundaries/ErrorBoundaries";
import ForceUpdate from "./Components/ForceUpdate/ForceUpdate";
import { CompDidMount } from "./Components/LifeCycleMethods/CompDidMount";
import { ComponentGetDevived } from "./Components/LifeCycleMethods/GetDelivedStateFromProps";
import { GetSnapBefUpd } from "./Components/LifeCycleMethods/GetSnapBefUpd";
import { CompNumber } from "./Components/LifeCycleMethods/ShouldCompUpdate";
import ReactMemo from "./Components/ReacMemo/ReactMemo";
import IdBtn from "./Components/ReacMemo/ReactMemo";
import { Titles } from "./Components/ReactChildren/ReactChildren";

function App() {
  return (
    <div>
      {/* <ReactMemo /> */}
      {/* <Titles /> */}
      {/* <ComponentGetDevived name='name 2'/> */}
      {/* <CompDidMount /> */}
      {/* <CompNumber /> */}
      {/* <GetSnapBefUpd /> */}
      {/* <ErrorBoundaries /> */}
      <ForceUpdate />
    </div>
  );
}

export default App;
