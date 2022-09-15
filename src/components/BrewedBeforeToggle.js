import './BrewedBeforeToggle.css';

export const BrewedBeforeToggle = (props) => {
  return (
      <div className="brewed-before-container">
        <span className="brewed-before-label">Brewed on 2010 or before:</span>
        <label className="switch">
          <input type="checkbox" onClick={props.toggle}/>
          <span className="slider round"></span>
        </label>
      </div>
  );
};
