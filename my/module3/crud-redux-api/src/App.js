import './App.css';
import Create from "./components/Create";
import Nevbar from "./components/Nevbar";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Read from './components/Read';
import Update from './components/Update';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Nevbar />
        <Routes>
          <Route exate path="/" element={<Create />} />
          <Route exate path="/read" element={<Read />} />
          <Route exate path="/edit/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
