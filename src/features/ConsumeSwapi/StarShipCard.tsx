import React from 'react';
import { Starship } from './services/StarshipService';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface StarShipProp
{
    starship: Starship
    index : number;
}

const StarShipCard : React.FC<StarShipProp> = ({starship, index}) =>
{
    if(index % 4 == 0)
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
    }
    else
    {
        return(
            <Row>
                <Card key={index} style={{width: '18rem'}}>
                <Card.Header>{starship.name}</Card.Header>
                <Card.Body>
                    <Card.Title>{starship.model}</Card.Title>
                    <Card.Subtitle>{starship.manufacturer}</Card.Subtitle>
                    <Card.Text>Passengers: {starship.passengers}</Card.Text>
                </Card.Body>
                </Card>
            </Row>
        )
    } 
};


export default StarShipCard;