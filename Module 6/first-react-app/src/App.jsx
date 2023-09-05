import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PropsDisplayer from "./components/PropsDisplayer";
import City from "./components/City";
import Adress from "./components/Adress";
import Pet from "./components/Pet";
import Greeting from "./components/Greeting";
import FullName from "./components/FullName";
import ComplexComment from "./components/ComplexComponents";
import Callout from "./components/CallOut";
import MoviesList from "./components/MoviesList";
import MoodChanger from "./components/MoodChanger";
import BirthdayTranslator from "./components/BirthdayTranslator";
import Weather from "./components/Weather";
import LoginForm from "./components/LoginForm";
import ExplodingBomb from "./components/ExplodingBomb";
import BigCats from "./components/BigCats";


function ExampleComponent() {
  return (
    <div className="ExampleComponent componentBox">
      <h1>My Example Component</h1>
      <h3 style={{ color: "blue", textTransform: "uppercase" }}>
        Welcome!
      </h3>{" "}
      {/* style object directly in JSX */}
      <p>My first React component!</p>
    </div>
  );
}

function Welcome(props) {
  // custom Welcome component
  return (
    <div className="Welcome">
      {/* if the 'name' prop exists, render it on the screen */}
      <h3>Welcome {props.name}!</h3>
      {/* if this component has children, render them here */}
      {props.children}
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const whatIsJSX = (
    <div>
      <p>Is it JavaScript?</p>
      <p>Is it HTML?</p>
      <p>No, it's JSX!</p>
    </div>
  );

  const spiderman = {
    name: "Spiderman",
    alterEgo: "Peter Parker",
    catchPhrase: "With great power comes great responsibility",
  };

  // object storing comment data - passed as props
  const comment = {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      // author is also an object
      name: "Hello Kitty",
      avatarUrl: "https://placekitten.com/g/64/64",
    },
  };

  return (
    <>

    <MoviesList/>

    <MoodChanger/>

    <BirthdayTranslator/>

    <Weather/>

    <LoginForm />

    <Greeting first="Hello" last="John"  />

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {/* Renders the Welcome component with
a name prop and a child (nested)
element */}
      <Welcome name="students">
        <p>Children of Welcome</p>
      </Welcome>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      {/* This renders the component, calling the function and
including its JSX output at this point in the code. Add this
INSIDE the return block of the App component. */}
      <ExampleComponent />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* Renders the component with no props */}
      <PropsDisplayer />

      {/* Renders the component with a single prop 'myProp' */}
      <PropsDisplayer name="Harry Styles" age={29} />

      {/* Renders the component with multiple props - add your own! */}
      <PropsDisplayer prop1="first" prop2="second" prop3={3} />

      <City name="Sydney" state="NSW" />

      <City name="Manila" country="Philippines" />

      {/* Everything in between <City> and </City> is passed as
props.children */}
      <City name="Newcastle">
        <div>
          Newcastle is a harbour city in the Australian state of New South
          Wales.
        </div>
        <div>
          <strong>Population:</strong> 322,278 (2016)
        </div>
      </City>

      <Adress streetAdress="4 Lapwing way" suburb="Plumpton" postcode={1127} />

      <Pet type="Dog" colour="Orange" name="Kaiser" />

      {/* <NamePart/> */}

      <FullName first="Gilbert" middle="Mikhail" last="Bautista" />

      {/* render the component, passing object data as props */}
      <ComplexComment
        author={comment.author}
        date={comment.date}
        text={comment.text}
      />
      {/* render the Callout component with FullName as children*/}
      <Callout
        title="Nested React Component" message="Simple message with a fancy box applied via composition">
        <FullName first="Elon" last="Musk" />
      </Callout>

      <ExplodingBomb/>

      <BigCats />
    </>
  );
}

export default App;
