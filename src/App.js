//import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
//import Products from './components/Products';
import MainPage from './main';
import ProductPage from './product';
import UploadPage from './upload';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/detailView/:p_id" element={<ProductPage/>}/>
        <Route path="/upload" element={<UploadPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
