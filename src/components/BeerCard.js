import './BeerCard.css';
import {useNavigate} from 'react-router-dom';

export const BeerCard = (props) => {
  const navigate = useNavigate();
  return (
      <div className="card">
        <div>
          <div className="title">{props.beer.name}</div>
          <div>{props.beer.description}</div>
        </div>
        <button className="details-btn" onClick={() => navigate(`/beers/${props.beer.id}`)}>Show Details</button>
      </div>
  );
};
