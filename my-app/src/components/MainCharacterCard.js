import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


const MainCharacterCard = (props) => {
const[character, setCharacter] = useState({});

console.log(props)

const fetchCharacter = (characterId) => {
    axios
    .get(`https://www.potterapi.com/v1/characters/${characterId}?key=$2a$10$Q4u.rpQuXNlJGGU3sga/g.iojAEbxt6kaul2QD6wr.ZqH9u6oh2fS`)
    .then(response => {
        setCharacter(response.data)
        })
    .catch(error => console.log(error, 'error fetching character with matching id api'))
};

useEffect(() => {
fetchCharacter(props.match.params.id)
},[props.match.params.id]);

    return(
        <div>
            <h1>{character.name}</h1>
        </div>
    )
};

export default MainCharacterCard;
