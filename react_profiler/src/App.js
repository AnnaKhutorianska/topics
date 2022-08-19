import { Profiler } from 'react';
import Form from "./Form";

const callback = (id, phase, actualDuration, startTime,
	baseDuration, commitTime, interactions) => {
	console.log(
	"id " + id +
	" startTime " + startTime +
	" actualDuration " + actualDuration +
	" baseDuration " + baseDuration +
	" commitTime " + commitTime +
	" phase " + phase +
	" interactions " + interactions
	);
}

function App() {
	return (
    <div className="App">
        <Profiler id="Name" onRender={callback}>
            <Form labelname="Name " />
            <Profiler id="Number" onRender={callback}>
                <Form labelname="Number" />
            </Profiler>
        </Profiler>
    </div>
);
}

export default App;

