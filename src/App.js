import { Route, Routes } from 'react-router';
import './App.css';
import Game from './pages/Game';
import Home from './pages/Home';
import { Table } from './pages/Table';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/game" element={<Game/>}/>
        <Route path="/winners" element={<Table/>}/>
      </Routes>
    </div>
  );
}

export default App;
