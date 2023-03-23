import { useState, useEffect } from "react"; 
import axios from "axios";
// import { RAPID_API_KEY } from "@env";

// const rapidApiKey = RAPID_API_KEY;

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': '51684312b7msh80dedbe7ebee678p1dc934jsncd9488a96be7',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: { ...query },
      };

    const fetchData = async () => {
       setIsLoading(true); 

       try {
        const response = await axios.response(options);
        setData(response.data.data);
        isLoading(false); 
       } catch (error) {
        setError(error)
        alert('There is an error')
       } finally {
        isLoading(false)
       }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        isLoading(true);
        fetchData();
    }

    return { data, isLoading, error, refetch}

}

export d