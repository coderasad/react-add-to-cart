import {useEffect, useState} from 'react';
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
    },[]);

    return {data, isLoading, error}
};

export default useFetch;
