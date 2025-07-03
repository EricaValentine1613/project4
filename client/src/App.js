import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.jsx';
import Mainpage from '../components/Mainpage.jsx';
import Registrationpage from '../components/Registrationpage.jsx';
import Loginpage from '../components/Loginpage.jsx';

function App() {
  return (
    <div>
    <Header />
    <Mainpage />
    <Registrationpage />
    <Loginpage />
    </div>
  );
}

export default App;
