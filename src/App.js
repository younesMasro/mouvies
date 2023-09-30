
import './App.css';
import Add from './Component/Add';
import Watched from './Component/Watched';
import Header from './Component/Header';
import Home from './Component/Home';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pgae from './Home/Pgae';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <Router>
     <Header></Header>
     <Routes>
       <Route path='/' element={<Pgae></Pgae>}></Route>
       <Route path='/add' element={<Add></Add>}></Route>
       <Route path='/seen' element={<Home></Home>}></Route>
       <Route path='/watched' element={<Watched></Watched>}></Route>
     </Routes>
    </Router>
    </div>
    </Provider>

  );
}

export default App;
