import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Dashboard from './container/Dashboard.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    </div>
  );
}

export default App;
