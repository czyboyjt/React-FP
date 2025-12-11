import React from 'react';
import { useRef } from 'react';


const CharChoice = ({ name, imageUrl, description, index, setCharacter, audioUrl }) => {
  const audioRef = useRef(null);
  const handleClick = () => {
    setCharacter({ name, imageUrl, description, index, audioUrl });
    if (audioRef.current) {
      audioRef.current.currentTime = 0; 
      audioRef.current.play();
    }
  };
    return (
        <div className="char-choice" onClick={handleClick} >
          <div className="image-wrapper">
          <img src={imageUrl} className="choice-img" alt={name} width = {200}/>
          <div className="overlay">
          <span className="overlay-text">{name}</span>
          </div>
          </div>
          {audioUrl && (
        <audio ref={audioRef} src={audioUrl} style={{ display: "none" }} />
      )}
        </div>
      );
    };

export default CharChoice;