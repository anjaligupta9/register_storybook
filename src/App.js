import React from 'react';
import logo from './logo.svg';
import './App.css';

import RegistrationFormContainer from './components/registration-form-container';

function App() {
  return (
    <div className="App">
      <div className="columns is-mobile">
        <div className="column">
         <div className="box">
         <RegistrationFormContainer />
         </div>
        </div>
       </div>
    </div>
  );
}

export default App;
