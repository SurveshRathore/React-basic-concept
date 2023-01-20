import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import GreetProp from './components/GreetProp';
import PropGreet from './components/PropGreet';
import PropWelcome from './components/PropWelcome';
import Message from './components/Message';
import Counter from './components/Counter';
import CounterTwo from './components/CounterTwo';
import GreetPropDes from './components/GreetPropDes';
import GreetPropDesBody from './components/GreetPropDesBody';
import FunctionClick from './components/FunctionClick';
import classCounter from './components/classCounter';
import HooksCounter from './components/HooksCounter';
import HooksCounterTwo from './components/HooksCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';


function App() {
  return (
    <div className="App">

      <HookCounterFour />
      <HookCounterThree />
      <HooksCounterTwo />
      <HooksCounter />
      <p>
        Welcome to the ReactJs.
        <h1>Survesh</h1>
      </p>

      <classCounter />

      <Message />
      <Counter />
      <CounterTwo />
      <FunctionClick />
      <Greet/>
      <Welcome />
      <Hello/>
      <GreetProp name = 'Bruce' heroName = 'Batman' />
      <GreetProp name = 'Clark' heroName = 'SpiderMan' />
      <GreetProp name = 'Diana' heroName = 'Wonder Woman' />

      <PropGreet name = 'Ant' heroName = 'Antman' >
        <p>This is the children props</p> 
        </PropGreet>
      <PropGreet name = 'panther' heroName = 'Black Panther' >
        <button>Click Here</button>
      </PropGreet>
      <PropGreet name = 'haw' heroName = 'Hawkeye' ></PropGreet>

      <PropWelcome name = 'jarvis' heroName = 'jarvis' />
      <PropWelcome name = 'natasha' heroName = 'natasha-romanoff' />

      <GreetPropDes name = 'spider' heroName = 'spiderMan' />
      <GreetPropDesBody name = 'spider' heroName = 'spiderWoMan' />
    </div>
  );
}

// class App extends Component{
//   render() {
//     return(
//       <div className='App'>
//         <p>
//         Welcome to the ReactJs.
//         <h1>Survesh</h1>
//       </p>
//       <Greet/>
//         <Welcome/>
//       </div>
//     );
//   }
// }

export default App;
