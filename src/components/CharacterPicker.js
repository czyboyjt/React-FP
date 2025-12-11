import { characters } from "../util/charselections";
import {useState} from "react";
import CharChoice from "./CharChoice";
import CharDetails from "./CharDetails";

const CharacterPicker = () => {

  const [chosenCharacter, setCharacter] = useState(null);

  return (
    <div className='container'>
      <div className="header">
        <h1>Jontes Character Picker</h1>
        <p>These are a collection of my favourite characters from media, click through to get an explanation why!</p>
      </div>
    <div className='character-section'>
      <div className='col-L'>
          {!chosenCharacter && <strong>No Character Selected</strong>}
        {chosenCharacter && <CharDetails {...chosenCharacter}></CharDetails>}
        {chosenCharacter?.audioUrl && (
        <audio
        src={chosenCharacter.audioUrl}
        autoPlay
        controls
        onEnded={() => console.log("Audio finished")}
      />
      )}
        </div>
        <div className='col-R'>
          <h2>Select a Character</h2>
          <div className='row'>
            {characters.map((character, index) => (
              <CharChoice
              key={index}
              {...character}
              index={index}
              setCharacter={setCharacter}
              alt= {character.name}
              />))}

          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterPicker;