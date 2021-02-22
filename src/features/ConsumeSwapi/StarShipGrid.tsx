import React from 'react';
import { Starship } from './services/StarshipService';
import StarShipCard from './StarShipCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface StarShipsProp {
    starships: Starship[];
}

const StarShipGrid: React.FC<StarShipsProp> = ({ starships }) => {
    let chunks: Starship[][] = [];
    const size = 4;
    while (starships.length > 0) {
        chunks.push(starships.splice(0, size));
    }
    return (
        <div>
            {chunks.map((starships) => (
                <Row>
                    {starships.map((starship, index) => (
                        <Col sm={3}>
                            <StarShipCard starship={starship} index={index} />
                        </Col>
                    ))}
                </Row>))
            }</div>
    );
}

export default StarShipGrid;