import './App.css';
import {Routes, Route} from "react-router-dom"
import Login from './pages/LoginPage/LoginPage';
import SignUp from './pages/SignUpPage/SignUpPage';
import SignIn2 from './pages/NextLogin/SignIn2';
import SignIn5 from './pages/NextLogin/SignIn5';


function App() {
  return (
    <div className="App">
      
        <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin2' element={<SignIn2 />} />
        <Route path='/signin5' element={<SignIn5/>} />
        </Routes>
      
      
    </div>
  );
}

export default App;
