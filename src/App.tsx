import './App.css';
import {Routes, Route} from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
      <div className='wrapper'>
        <Header />
        <div className='content'>
          <Routes>
            <Route path='/home' element={<Home />}/>
          </Routes>
        </div>
        <div>footers</div>
      </div>
  );
}

export default App;