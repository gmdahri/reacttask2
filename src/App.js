import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import MyButton from './MyButton';
import Table from './Table';
import UseEffectTask from './UseEffectTask';
import UseContextExample from './UseContextExample';
import Main from './Main';
import FormikForm from './FormikForm';
import LoginReducer from './LoginReducer';
import HigherOrderComponents from './HigherOrderComponents';
import IncrementOnHover from './IncrementOnHover';
import NewForm from './component/NewForm';
import FormFormik from './component/FormFormik';
import Flex from './component/Flex';

 function App() {
  return (
    <div className="App">
      {/* <Main></Main> */}
      {/* <FormFormik></FormFormik> */}
      {/* <FormForReact></FormForReact> */}
      <Flex></Flex>

    </div>
  );
}
//function passing parameter
function Hello2({...props}){
  return(
    <div><h1>hello world2...{props.items[1]}</h1></div>
  );
}

export default App;
