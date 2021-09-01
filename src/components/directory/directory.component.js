import React from 'react';
import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          id: 1,
          size: 'small',
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          linkUrl: 'shop/hats'
        },
        {
          id: 2,
          size: 'small',
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          linkUrl: 'shop/jackets'
        },
        {
          id: 3,
          size: 'small',
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          linkUrl: 'shop/sneakers'
        },
        {
          id: 4,
          size: 'large',
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          linkUrl: 'shop/womens'
        },
        {
          id: 5,
          size: 'large',
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          linkUrl: 'shop/mens'
        }
      ]
    }
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, size, title, imageUrl, linkUrl }) => {
          return <MenuItem key={id} size={size} title={title} imageUrl={imageUrl} linkUrl={linkUrl} />
        })}
      </div>
    )
  }
}

export default Directory;