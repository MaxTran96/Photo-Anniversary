import React from 'react';
import Card from './Card';

const CardList = ({ jinzPhotos }) => {
  
  
  return (
    <div>
      {
        jinzPhotos.map((user, i) => {
          return (
            <Card
              key={i}
              id={jinzPhotos[i].id}
              description={jinzPhotos[i].description}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;