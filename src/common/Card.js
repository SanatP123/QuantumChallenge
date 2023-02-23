import React from 'react';

const Card = (props) => {
    return (
      <div className="card">
        <div className="card-header">
          <div className="card-header-title"></div>
        </div>
        <div className="card-image">
          <figure className="image">
            <img src={props.image} alt={props.name} />
          </figure>
        </div>
      </div>
    );
}

export default Card