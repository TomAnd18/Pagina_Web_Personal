import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router basename='/Pagina_Web_Personal'>
        <Routes>
          <Route path='/' element={ <Home/> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
