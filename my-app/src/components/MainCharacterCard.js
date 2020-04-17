import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';


const MainCharacterCard = (props) => {
const[character, setCharacter] = useState({});

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

const handleBack = ()=>{
    props.history.push('/hogwarts-express');
};

    return(
    <div className='mainCharacter-card'>
        <Card>
            <CardHeader> {character.name} </CardHeader>
            <CardBody>
            <CardTitle>Information</CardTitle>
            <CardText>
                <span>House:</span> {character.house}<br/>
                <span>Role:</span> {character.role}<br/>
                <span>School:</span> {character.school}<br/>
                <span>Blood Type:</span> {character.bloodStatus}<br/>
                <span>Species:</span> {character.species}
                </CardText>
                <Button onClick={handleBack}>Back</Button>
            </CardBody>
        </Card>
    </div>
    )
};

export default MainCharacterCard;