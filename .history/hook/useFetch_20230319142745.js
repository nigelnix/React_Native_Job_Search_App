import { useState, useEffect } from "react"; 
import axios from "axios";

const useFetch = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url:  https://jsearch.p.rapidapi.com/search,
        params: {query: 'Python developer in Texas, USA', page: '1', num_pages: '1'},
        headers: {
          'X-RapidAPI-Key': '51684312b7msh80dedbe7ebee678p1dc934jsncd9488a96be7',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };

}