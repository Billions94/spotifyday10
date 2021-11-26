import './App.css';
import Footer from './components/Footer';
import MyNavBar from './components/MyNavBar';
import { BrowserRouter as Router} from 'react-router-dom'
import Undo from './components/Undo'

function App() {
  return (
    <div className="App">
      <Router>
      <MyNavBar />
      <Footer />
      </Router>
      <Undo />
    </div>
  );
}

export default App;
