import './App.css';
import {Routes, Route} from "react-router-dom"
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signUp' element={<SignUp/>} />
      </Routes>
      
    </div>
  );
}

export default App;
