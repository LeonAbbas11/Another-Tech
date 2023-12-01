import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Pages/Main';
import Checkout from './Pages/Checkout';
import Products from './Pages/Products';
import Detail from './Pages/Detail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/product' element={<Products />} />
          <Route path='/detail' element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
