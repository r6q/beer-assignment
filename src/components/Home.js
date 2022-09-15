import {useEffect, useState} from 'react';
import {getBeers} from '../api/client';
import {BeerCard} from './BeerCard';
import './Home.css';
import {BrewedBeforeToggle} from './BrewedBeforeToggle';

export const Home = () => {
  const [beers, setBeers] = useState([]);
  const [showBefore2010, setShowBefore2010] = useState(false);

  useEffect(() => {
    const fetchBeers = async () => {
      const beers = await getBeers();
      setBeers(beers);
    };

    fetchBeers();
  }, []);

  const toggleShowBefore2010 = () => {
    setShowBefore2010(!showBefore2010);
  };

  return (
      <div>
        <BrewedBeforeToggle toggle={toggleShowBefore2010}/>
        <div className="beer-container">
          {beers
              .filter(beer => showBefore2010 ? beer.first_brewed.split('/')[1] <= '2010' : true)
              .map(beer => <BeerCard key={beer.id} beer={beer} />)
          }
        </div>
      </div>
  );
};
