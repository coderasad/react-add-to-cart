import React, {useEffect, useState} from 'react';
import axios from "axios";

const useFetch = (url) => {
    const [data, setProducts]           = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError]         = useState(null);


    useEffect(() => {
        axios.get(url)
            .then(res => {
                setProducts( res.data );
                setIsLoading(false);
                setError(null);
            })
            .catch((error) => {
                setError('Fetch is not successfully');
                setIsLoading(false)
            })


        /*fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw Error('Fetch is not successfully')
                } else {
                    return res.json();
                }
            })
            .then((data) => {
                setProducts(data)
                setIsLoading(false);
                setError(null);
            })
            .catch((error) => {
                setError(error.message);
                setIsLoading(false)
            })*/
    }, []);

    return {data, isLoading, error}
};

export default useFetch;
