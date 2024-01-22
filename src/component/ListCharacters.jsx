import React from 'react';
import Character from './Character';
import characterData from '../characterData';


export default function ListCharacters() {

    const [characters, setCharacters] = React.useState(JSON.parse(localStorage.getItem("characters")) || []);
    const [message, setMessage] = React.useState("");
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        if (characters.length === 0){
            const characterArray = characterData.data.characters
            setCharacters(characterArray)
        }
      }, [characters]);

    React.useEffect(() => {
        localStorage.setItem("characters", JSON.stringify(characters))
        setProgress(characters.filter(character => character.obtained === true).length)
    }, [characters]);

    function toggleObtained(id) {       
        setCharacters(oldCharacters => oldCharacters.map(character => {
            return character.id === id ? {...character, obtained: !character.obtained} : character
        }))
        //setMessage("Updated tracker")
    }
        
    return (
        <div className="container">
            <h1>Priconne Character Tracker</h1>
            <h2>Your collection is {Math.round((progress/characters.length)*100)}% complete</h2>
            {message && <div class="alert alert-success">{message}</div>}
            <div className="button-container">
                {characters.map(
                    character =>
                        <Character
                            key={character.id}
                            id={character.id}
                            name={character.name}
                            element={character.element}
                            obtained={character.obtained}
                            toggleObtained={() => toggleObtained(character.id)}
                        />
                    )
                }
            </div>
            
        </div>
    )
}