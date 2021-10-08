import './App.css';
import Footer from './components/Footer';
import MyNavBar from './components/MyNavBar';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/Home';
import Liked from './components/Liked';

function App() {
  return (
    <div className="App">
      <Router>
      <MyNavBar />
      <Footer />
      </Router>
    </div>
  );
}

export default App;
