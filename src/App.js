import './App.css';
// import logo from './logo.svg';
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';
import LearningJSX from './components/LearningJSX';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
        </p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
        </a>
			</header> */}

      {/* { //calling functional component
        <FunctionalComponent />
      }

      { //calling class component
        <ClassComponent />
      } */}

      { //Learning JSX
        <LearningJSX />
      }
    </div>
  );
}

export default App;
