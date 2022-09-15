import './App.css';
import {Route, Routes} from 'react-router-dom';
import {Home} from './components/Home';
import {BeerDetails} from './components/BeerDetails';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/beers/:beerId" element={<BeerDetails/>}/>
        </Routes>
      </div>
  );
}

export default App;
