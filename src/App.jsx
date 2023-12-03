import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Pages/Main';
import Checkout from './Pages/Checkout';
import Products from './Pages/Products';
import Detail from './Pages/Detail';
import Testimony from './Pages/Testimony';
import About from './Pages/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/checkout/:id' element={<Checkout />} />
          <Route path='/product' element={<Products />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/testimony' element={<Testimony />} />
          <Route path='/about-us' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
