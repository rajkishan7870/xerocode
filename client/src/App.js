import './App.css';
import {Routes, Route} from "react-router-dom"
import Login from './pages/LoginPage/LoginPage';
import SignUp from './pages/SignUpPage/SignUpPage';


function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp/>} />
        </Routes>
      
      
    </div>
  );
}

export default App;
