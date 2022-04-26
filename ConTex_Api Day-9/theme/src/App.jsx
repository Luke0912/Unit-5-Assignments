import './App.css';
import { Routes ,Route } from 'react-router-dom';
import { NavBar } from './components/NavBarHandler/NavbarHandler';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Logout } from './components/Logout';
import { Status } from './components/Status';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/logout" element={<Logout></Logout>}></Route>
        <Route path="/status" element={<Status></Status>}></Route>
      </Routes>
    </div>
  );
}

export default App;
