import './App.css';
import { HomePage } from './components/HomePage';
import {
  Routes,
  Route,
} from "react-router-dom";
import { Dashboard } from './components/Dashboard';
function App() {
  return (
    <div className="App relative flex h-screen w-screen">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
