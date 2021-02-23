import React from 'react';
import { Starship } from './services/StarshipService';
import Card from 'react-bootstrap/Card';

interface StarShipProp
{
    starship: Starship
    index : number;
}

const StarShipCard : React.FC<StarShipProp> = ({starship, index}) =>
{
    return(
        <Card key={index} style={{width: '18rem'}}>
        <Card.Header>{starship.name}</Card.Header>
        <Card.Body>
            <Card.Title>{starship.model}</Card.Title>
            <Card.Subtitle>{starship.manufacturer}</Card.Subtitle>
            <Card.Text>Passengers: {starship.passengers}</Card.Text>
        </Card.Body>
        </Card>
    )
};


export default StarShipCard;