import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className='image'>
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
