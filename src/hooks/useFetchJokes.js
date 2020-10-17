import { useState, useEffect } from 'react';

export default function useFetchJokes(searchText) {
    const [jokes, setJokes] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const abortController = new AbortController();

        setJokes([]);
        setLoading(true);
        
        let url = '';

        if(searchText) {
            url = `https://sv443.net/jokeapi/v2/joke/Any?contains=${searchText}&amount=10`;
        }else {
            url = 'https://sv443.net/jokeapi/v2/joke/Programming?amount=10';
        }

        fetch(url, {
            signal: abortController.signal
        })
        .then(res => res.json())
            .then(data => {
                if (data.error) {
                    setJokes([{joke: data.message}]);
                    setLoading(false);
                } else {
                    const newJokes = data.jokes.map(joke =>  {
                    if (joke.delivery && joke.setup) {
                        return({delivery: joke.delivery, setup: joke.setup});
                    }
                    return({joke: joke.joke});
                    });

                    setJokes(newJokes);
                    setLoading(false);
                }
                
            })
            .catch(err => {
                if (err.name !== 'AbortError') {
                    console.error(err.message);
                }
            });

        
        return () => {
            abortController.abort();
        }


    },[searchText])

    return { jokes, loading }
}