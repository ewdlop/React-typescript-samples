import React, { useEffect, useState } from 'react';
import StarshipService, { Starship } from './services/StarshipService';
import StarshipGrid from './StarShipGrid'
import CSS from 'csstype';
import { NavLink } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';

interface scroller {
    scroller: number;
}

interface ItemProps{
   ship: Starship;
   index: number;
}

const GetStarships: React.FC = () => {

    const { service } = StarshipService();
    const activeStyle = { color: "#F15B2A" };
    const top: CSS.Properties = {
        marginTop: '25px'
    };

    const [scroller, setScroller] = useState<scroller>({ scroller: 0 });

    useEffect(() => {
        const handleScroll = () => {
            setScroller({ scroller: document.documentElement.scrollTop });
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                const navbar: HTMLElement | null = document.getElementById("navbar");
                if (navbar) {
                    navbar.style.top = "0";
                }
            } else {
                const navbar: HTMLElement | null = document.getElementById("navbar");
                if (navbar) {
                    navbar.style.top = "-50px";
                }
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [scroller]);
    
    return (
        <div style={top}>
            <div id="navbar">
                <NavLink to="/" activeStyle={activeStyle} exact>Home</NavLink>
                <NavLink to="/ThreeJSScene" activeStyle={activeStyle}>ThreeJSScene</NavLink>
                <NavLink to="/StarShip" activeStyle={activeStyle}>StarShip</NavLink>
            </div>
            {service.status === 'loading' && <div>Sending...</div>}
            {service.status === 'loaded' && <Container>
                <StarshipGrid starships={service.payload.results}/>
            </Container>}
            {service.status === 'error' && <div>Error message</div>}
        </div>
    );
};

export default GetStarships;