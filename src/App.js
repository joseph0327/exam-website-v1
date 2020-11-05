import './App.css';
import Navbar from './components/Navbar'
import InfoSection from './components/InfoSection'
import LogIn from './components/LogIn'
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
        <Navbar /> 
        <LogIn />
        <Register />
        <InfoSection />
    </div>
  );
}

export default App;
