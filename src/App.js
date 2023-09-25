
import './App.css';
import Add from './Component/Add';
import Watched from './Component/Watched';
import Header from './Component/Header';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import { BrowserRouter as Router, Route, Switch, Link, Routes } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <Router>
     <Header></Header>
     <Routes>
       <Route path='/add' element={<Add></Add>}></Route>
       <Route path='/watched' element={<Watched></Watched>}></Route>
     </Routes>
    </Router>
    </div>
    </Provider>
  );
}

export default App;
