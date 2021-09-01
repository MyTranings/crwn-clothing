import React from 'react';

const CardLink = (props) => {
  return (
    <div className={props.size ? 'menu-item card-link ' + props.size : 'menu-item card-link'}>
      <div className="content">
        <h1 className="title">{props.title}</h1>
        <span className="subtitle">{props.subtitle}</span>
      </div>
    </div>
  )
}


export default CardLink;