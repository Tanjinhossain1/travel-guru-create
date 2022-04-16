import { Route, Routes } from 'react-router-dom';
import './App.css';
import BookingDone from './Pages/BookingDone/BookingDone';
import CoxbazarDetail from './Pages/CoxbazarDetail/CoxbazarDetail';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login/Login';
import SIgnUp from './Pages/Login/SignUp/SIgnUp';
import SreeMangleDetail from './Pages/SreeMangleDetail/SreeMangleDetail';
import SundorbonDetails from './Pages/SundorbonDetails/SundorbonDetails';

function App() {
  return (
    <div className='image pb-40'>
      <div className=''>
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SIgnUp></SIgnUp>}></Route>
        <Route path='/bookindone' element={<BookingDone></BookingDone>}></Route>
        <Route path='/coxbazar' element={<CoxbazarDetail></CoxbazarDetail>}></Route>
        <Route path='/sreemangledetail' element={<SreeMangleDetail></SreeMangleDetail>}></Route>
        <Route path='/sundorbon' element={<SundorbonDetails></SundorbonDetails>}></Route>
      </Routes>
      </div>
    </div>
  );
}

export default App;
