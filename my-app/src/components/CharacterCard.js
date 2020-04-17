import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';


function CharacterCard(props) {

  return (
    <div className="character-card">
        <Card>
        <CardHeader>{props.character.name}</CardHeader>
        <CardBody>
          <CardTitle>Information</CardTitle>
          <CardText>
            <span>Role:</span> {props.character.role}<br/>
            <span>School:</span> {props.character.school}
          </CardText>
        </CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
    </div>
  );
};

export default CharacterCard; 