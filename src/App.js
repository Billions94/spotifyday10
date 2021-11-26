import './App.css';
import Footer from './components/Footer';
import MyNavBar from './components/MyNavBar';
import { BrowserRouter as Router} from 'react-router-dom'
import { useState, useEffect } from "react"


function App() {

  const [artist, setArtist] = useState(null)

  return (
    <div className="App">
      <Router>
      <MyNavBar artist={artist} setArtist={setArtist} />
      <Footer />
      </Router>
    </div>
  );
}

export default App;
