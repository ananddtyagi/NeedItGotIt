import React from 'react';
import './maincontent.styles.scss';

const DisplayCard = ({cardName, cardEmail, cardDescription}) => (
      <div className='collection-preview'>
        <div className='preview'>
            <div>{cardName}</div>
            <div>{cardEmail}</div>
            <div>{cardDescription}</div>
        </div>
      </div>
)

export default DisplayCard;