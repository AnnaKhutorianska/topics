//User-Defined Components Must Be Capitalize
function Word() {
  return(
    <div>word</div> // valid html tag
  )
}

const hello = () => <p>hello</p>

function Word2() {
  return(
    <hello>word</hello> // React thinks <hello /> is an HTML tag because it's not capitalized
  )
}

const Hello = () => <p>hello</p>

function Word2() {
  return(
    <Hello>word</Hello> // React knows <Hello /> is a component because it's capitalized.
  )
}

//Choosing the Type at Runtime

const components = {
  photo: PhotoStory,
  video: VideoStory
};

function Tab(props) {
  
  const Tab = components[props.storyType];
  //wrong return <components[props.storyType] story={props.story} />
  return <Tab story={props.story} />;
}

//JavaScript Expressions as Props

function Word(props) {
  let word;
  if (props.word.lenght > 5) {
    word = <strong>lenght more 5</strong>;
  } else {
   word = <i>lenght less 5</i>;
  }
  return <div>{props.word} is an {word}</div>;
}

// String Literals

<MyComponent message="hello world" />

<MyComponent message={'hello world'} />

// Props Default to “True”

<MyTextBox autocomplete />

<MyTextBox autocomplete={true} />

// Spread Attributes

function App1() {
  return <Greeting firstName="Ben" lastName="Hector" />;
}

function App2() {
  const props = {firstName: 'Ben', lastName: 'Hector'};
  return <Greeting {...props} />;
}

//JSX Children

<Container>
  <FirstComponent />
  <SecondComponent />
</Container>

// 