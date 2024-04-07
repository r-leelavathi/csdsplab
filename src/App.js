import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Body from './Body/Body';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Body />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
