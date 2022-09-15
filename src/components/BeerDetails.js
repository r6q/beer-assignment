import {useEffect, useState} from 'react';
import {getBeerById} from '../api/client';
import {useParams} from 'react-router-dom';

export const BeerDetails = () => {
  const {beerId} = useParams();
  const [beer, setBeer] = useState({});

  useEffect(() => {
    const fetchBeer = async () => {
      const beers = await getBeerById(beerId);
      if (beers.length > 0) {
        setBeer(beers[0]);
      } else {
        console.error('Failed to fetch beer by ID:', beerId);
      }
    };
    fetchBeer();
  }, [beerId]);

  return (<div>
    <div>
      <div>PH: {beer.ph}</div>
      <div>Food Pairing: {beer.food_pairing}</div>
      <div>Tips: {beer.brewers_tips}</div>
      <div>Method:</div>
      {beer.method ? beer.method.mash_temp.map((temp, index) => (
          <div key={'Mash_temp' + index}>
            {`${index + 1}. Mash temperature: ${temp.temp.value} ${temp.temp.unit}, duration: ${temp.duration
                                                                                                ?? 'N/A'}`}
          </div>
      )) : ''}
      <div>
        <span>Fermentation temperature: </span>
        {beer.method
         ? <span>{`${beer.method.fermentation.temp.value} ${beer.method.fermentation.temp.unit}`}</span>
         : ''}
      </div>
      <div>
        <span>Twist: </span>
        <span>{beer.method ? `${beer.method.twist ? beer.method.twist : 'N/A'}` : ''}</span>
      </div>
    </div>
  </div>);
};
