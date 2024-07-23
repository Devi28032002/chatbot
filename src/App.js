
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home/Home';
import Login from './component/Login-page/Login';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route  path='/' exact element={< Home/>}/>
         <Route path='/login' exact element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
