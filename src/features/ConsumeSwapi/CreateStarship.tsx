import React, { useEffect, useState } from 'react';
import StarshipService, {
    PostStarship
} from './services/StarshipService'
import CSS from 'csstype';
import { NavLink } from 'react-router-dom'

interface scroller {
    scroller: number;
}

const CreateStarship: React.FC = () => {

    const initialStarshipState: PostStarship = {
        name: '',
        crew: '',
        passengers: '',
        cost_in_credits: '',
    };

    const [starship, setStarship] = useState<PostStarship>(
        initialStarshipState
    );

    const { postService, publishStarship } = StarshipService();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.persist();
        setStarship(prevStarship => ({
            ...prevStarship,
            [event.target.name]: event.target.value
        }));
    };

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        publishStarship(starship).then(() => setStarship(initialStarshipState));
    };


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
            <div>
            https://swapi.dev/api/starships/            
            <form onSubmit={handleFormSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={starship.name}
                        onChange={handleChange}
                    />
            </form>
            </div>

            {postService.status === 'loading' && <div>Sending...</div>}
            {postService.status === 'loaded' && (
                <div>
                    <h2>Name: {postService.payload.name}</h2>
                    <h2>Crew: {postService.payload.crew}</h2>
                    <h2>Passengers: {postService.payload.passengers}</h2>
                    <h2>Cost in Credits:{postService.payload.cost_in_credits}</h2>
                </div>
            )}
            {postService.status === 'error' && <div>Error message</div>}
        </div>
    );
};

export default CreateStarship;