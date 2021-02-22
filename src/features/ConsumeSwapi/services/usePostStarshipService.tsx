import { useState } from 'react';

interface Starship {
    name: string;
    crew: string;
    passengers: string;
    cost_in_credits?: string;
    url: string;
    number: number;
}

interface Starships {
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
    'name' | 'crew' | 'passengers' | 'cost_in_credits' | 'number'
    >;

const usePostStarshipService = () => {

    const [service, setService] = useState<Service<PostStarship>>({
        status: 'init'
    });

    const publishStarship = (starship: PostStarship) => {
        setService({ status: 'loading' });
    
        const headers = new Headers();
        //headers.append('Content-Type', 'application/json; charset=utf-8');
    
        return new Promise((resolve, reject) => {
          fetch(`https://swapi.dev/api/starships/${starship.number}`)
            .then(response => response.json())
            .then(response => {
              setService({ status: 'loaded', payload: response });
              resolve(response);
            })
            .catch(error => {
              setService({ status: 'error', error });
              reject(error);
            });
        });
      };
    
      return {
        service,
        publishStarship
      };
}

export default usePostStarshipService;

// fetch('https://swapi.dev/api/starships/', {
//     method: 'POST',
//     body: JSON.stringify(starship),
//     headers