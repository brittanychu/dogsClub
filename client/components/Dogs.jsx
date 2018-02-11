import React from 'react';

const Dogs = function(props){
  const {dogs} = props
  return (
    <div>
      <ul>
        {
          dogs.map(dog => {
            return (
              <div key={dog.id}>
                <h3>{dog.name}</h3>
                <img src={dog.image} />
              </div>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Dogs
