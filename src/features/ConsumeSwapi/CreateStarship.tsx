import React, { useEffect, useState } from 'react';
import usePostStarshipService, {
    PostStarship
} from '../ConsumeSwapi/services/usePostStarshipService'
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
        number: 0
    };

    const [starship, setStarship] = useState<PostStarship>(
        initialStarshipState
    );

    const { service, publishStarship } = usePostStarshipService();

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
                        name="number"
                        value={starship.number}
                        onChange={handleChange}
                    />
            </form>
            </div>

            {service.status === 'loading' && <div>Sending...</div>}
            {service.status === 'loaded' && (
                <div>
                    <h2>{service.payload.name}</h2>
                </div>
            )}
            {service.status === 'error' && <div>Error message</div>}
        </div>
    );
};

export default CreateStarship;