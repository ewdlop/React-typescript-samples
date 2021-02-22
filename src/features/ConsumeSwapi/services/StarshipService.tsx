import { useState,useEffect } from 'react';

export interface Starship {
    name: string;
    crew: string;
    passengers: string;
    cost_in_credits?: string;
    url: string;
    manufacturer: string;
    model:string;
}

export interface Starships {
    results: Starship[];
}

interface ServiceInit {
    status: 'init';
}
interface ServiceLoading {
    status: 'loading';
}
interface ServiceLoaded<T> {
    status: 'loaded';
    payload: T;
}
interface ServiceError {
    status: 'error';
    error: Error;
}

type Service<T> =
    | ServiceInit
    | ServiceLoading
    | ServiceLoaded<T>
    | ServiceError;

export type PostStarship = Pick<
    Starship,
    'name' | 'crew' | 'passengers' | 'cost_in_credits'
>;

const StarshipService = () => {

    const [service, setService] = useState<Service<Starships>>({
        status: 'loading'
    });

    const [postService, setPostService] = useState<Service<PostStarship>>({
        status: 'init'
    });

    useEffect(() => {
        fetch('https://swapi.dev/api/starships')
          .then(response => response.json())
          .then(response => setService({ status: 'loaded', payload: response }))
          .catch(error => setService({ status: 'error', error }));
    }, []);

    const publishStarship = (starship: PostStarship) => {
        setPostService({ status: 'loading' });

        const headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        return new Promise((resolve, reject) => {
            fetch('https://swapi.dev/api/starships/',{
                     method: 'POST',
                     body: JSON.stringify(starship),
                     headers})
                .then(response => response.json())
                .then(response => {
                    setPostService({ status: 'loaded', payload: response });
                    resolve(response);
                })
                .catch(error => {
                    setPostService({ status: 'error', error });
                    reject(error);
                });
        });
    };

    return {
        service,
        postService,
        publishStarship
    };
}

export default StarshipService;