import React from 'react';


const CharChoice = ({ name, imageUrl, description, index, setCharacter, audioUrl }) => {

    return (
        <div className="char-choice" onClick={() => setCharacter({ name, imageUrl, description, index, audioUrl }) } >
          <div className="image-wrapper">
          <img src={imageUrl} className="choice-img" alt={name} width = {200}/>
          <div className="overlay">
          <span className="overlay-text">{name}</span>
          </div>
          </div>
        </div>
      );
    };

export default CharChoice;