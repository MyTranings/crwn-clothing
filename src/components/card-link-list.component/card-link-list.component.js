import React from 'react';
import CardLink from '../card-link.component.js/card-link.component';

class CardLinkList extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'Hats',
          subtitle: 'Shop Now',
          size: 'small'
        },
        {
          title: 'Jackets',
          subtitle: 'Shop Now',
          size: 'small'
        },
        {
          title: 'Sneakers',
          subtitle: 'Shop Now',
          size: 'small'
        },
        {
          title: 'Womens',
          subtitle: 'Shop Now',
          size: 'medium'
        },
        {
          title: 'Mens',
          subtitle: 'Shop Now',
          size: 'medium'
        }
      ]
    }
  }

  render() {
    return (
      <div className='directory-menu card-link-list'>
        {this.state.sections.map((el, key) => {
          return <CardLink key={key} title={el.title} subtitle={el.subtitle} size={el.size} />
        })}
      </div>
    )
  }
}

export default CardLinkList;