import './App.css';
import Home from './components/Home';
import Caller from './components/Caller';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom'


function App() {
  let hashHistory = Router.hashHistory;
  return (
    <div className="App">
        <Routes history={hashHistory}>
        <Route path="/" element={<Home/>} />
        <Route exact path='/home' element={<Caller/>} />
        </Routes>
    </div>
  );
}

export default App;
