import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({ size, title, imageUrl, linkUrl }) => {
  return (
    <div className={size ? 'menu-item ' + size : 'menu-item'}>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div >
  )
}


export default MenuItem;