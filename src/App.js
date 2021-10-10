import './App.css';
import Footer from './components/Footer';
import MyNavBar from './components/MyNavBar';
import { BrowserRouter as Router} from 'react-router-dom'


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
