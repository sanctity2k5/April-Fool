import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

//Pages
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />     
         </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
